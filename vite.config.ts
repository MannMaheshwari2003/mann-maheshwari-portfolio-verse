import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      {
        name: 'api-plugin',
        configureServer(server) {
          // Implement API handling directly here to avoid imports during config time
          server.middlewares.use(async (req, res, next) => {
            // Handle the email API endpoint
            if (req.url?.startsWith('/api/send-email')) {
              // Set CORS headers
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
              res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

              // Handle preflight requests
              if (req.method === 'OPTIONS') {
                res.statusCode = 204;
                return res.end();
              }

              // Only process POST requests
              if (req.method !== 'POST') {
                res.statusCode = 405;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ error: 'Method not allowed' }));
              }

              // Parse request body
              let body = '';
              await new Promise<void>((resolve) => {
                req.on('data', (chunk) => {
                  body += chunk;
                });
                req.on('end', () => {
                  resolve();
                });
              });

              // Parse JSON
              let jsonBody: any;
              try {
                jsonBody = JSON.parse(body);
              } catch (e) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ error: 'Invalid JSON in request body' }));
              }

              try {
                // Dynamically import the sendEmail function
                const { sendEmail } = await import('./api/send-email');
                
                // Process the request
                const result = await sendEmail(jsonBody);
                
                // Set status code and send response
                res.statusCode = result.status;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify(result.body));
              } catch (error: any) {
                console.error('Error processing email request:', error);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ 
                  error: error.message || 'Internal server error' 
                }));
              }
            }
            // Continue for other requests
            next();
          });
        }
      } as Plugin,
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    }
  };
});
