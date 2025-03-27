import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Setup/', // Set this to the repository name
  server: {
    port: 3333, // Change this to your desired port
  },
});
