import { defineConfig } from 'vite';
import type { Plugin } from 'vite';

// Create a Vite plugin for handling API routes
export function apiPlugin(): Plugin {
  return {
    name: 'api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        // Only keep basic middleware functionality
        if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
          res.statusCode = 204;
          return res.end();
        }

        // Continue for other requests
        next();
      });
    }
  };
}
