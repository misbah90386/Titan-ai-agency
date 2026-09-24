import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

function netlifyDevMiddlewarePlugin(): Plugin {
  return {
    name: 'netlify-dev-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url || '/', 'http://localhost:3000');
        if (url.pathname === '/api/blogs' || url.pathname === '/.netlify/functions/blogs') {
          try {
            const { handler } = await import('./netlify/functions/blogs');
            const queryStringParameters: Record<string, string> = {};
            url.searchParams.forEach((val, key) => {
              queryStringParameters[key] = val;
            });
            const result = await handler({
              httpMethod: req.method || 'GET',
              queryStringParameters,
              headers: (req.headers as Record<string, string | undefined>) || {},
              path: url.pathname,
            });
            res.statusCode = result.statusCode;
            Object.entries(result.headers || {}).forEach(([k, v]) => {
              res.setHeader(k, v);
            });
            return res.end(result.body);
          } catch (err) {
            console.error('[Vite Dev] Netlify function dev middleware error:', err);
            next();
          }
        } else {
          next();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), netlifyDevMiddlewarePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
