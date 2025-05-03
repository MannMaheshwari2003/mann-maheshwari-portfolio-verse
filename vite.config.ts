import { defineConfig } from "vite";
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
          server.middlewares.use(async (req, res, next) => {
            // Handle the email API endpoint
            if (req.url?.startsWith('/api/send-email')) {
              try {
                // Dynamically import the handler function
                const apiModule = await import('./api/send-email');
                
                // In development, we need to mock the VercelRequest and VercelResponse
                if (req.method === 'OPTIONS') {
                  res.statusCode = 204;
                  res.setHeader('Access-Control-Allow-Origin', '*');
                  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
                  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
                  return res.end();
                }
                
                // Only handle POST requests for this endpoint
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
                let jsonBody;
                try {
                  jsonBody = JSON.parse(body);
                } catch (e) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  return res.end(JSON.stringify({ error: 'Invalid JSON in request body' }));
                }
                
                // Create mock Vercel request and response objects
                // Using 'any' type to avoid TypeScript issues with mocking
                const mockReq: any = {
                  ...req,
                  body: jsonBody,
                  query: {},
                  cookies: {}
                };
                
                const mockRes: any = {
                  ...res,
                  status: (code: number) => {
                    res.statusCode = code;
                    return mockRes;
                  },
                  json: (data: any) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                    return mockRes;
                  },
                  send: (data: any) => {
                    res.end(data);
                    return mockRes;
                  }
                };
                
                // Call the API handler
                await apiModule.default(mockReq, mockRes);
              } catch (error: any) {
                console.error('Error in API middleware:', error);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ 
                  error: error.message || 'Internal server error' 
                }));
              }
              return;
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
