import { defineConfig } from 'vite';
import { sendEmail } from '../api/send-email';
import type { Plugin } from 'vite';

// Create a Vite plugin for handling API routes
export function apiPlugin(): Plugin {
  return {
    name: 'api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        // Handle the email API endpoint
        if (req.url?.startsWith('/api/send-email') && req.method === 'POST') {
          // Set CORS headers
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

          // Handle preflight requests
          if (req.method === 'OPTIONS') {
            res.statusCode = 204;
            return res.end();
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

          // Process the request
          const result = await sendEmail(jsonBody);
          
          // Set status code and send response
          res.statusCode = result.status;
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify(result.body));
        }

        // Continue for other requests
        next();
      });
    }
  };
} 