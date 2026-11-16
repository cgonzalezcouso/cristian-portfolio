import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: { rollupOptions: { input: { main: resolve(__dirname, 'index.html'), en: resolve(__dirname, 'en.html') } } },
  server: { host: '0.0.0.0', watch: { ignored: ['**/.vs/**','**/node_modules/**','**/.git/**'] } },
});
