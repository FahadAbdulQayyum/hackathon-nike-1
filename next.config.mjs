// next.config.mjs
import { defineConfig } from 'next';

export default defineConfig({
  reactStrictMode: true,

  // Ensure these configurations for Vercel deployment
  output: 'standalone',  // This is crucial for Vercel to work smoothly with your build
});
