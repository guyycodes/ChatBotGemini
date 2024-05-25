import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa'; // Ensure you import VitePWA

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ // VitePWA configuration is correctly placed inside the plugins array
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', '*.jpg', '*.png'], // Include all assets to be cached
      manifest: {
        name: 'ChatBotGemini',
        short_name: 'SVGGen',
        description: 'Google Gemini Chatbot to interact with A.i',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/ChatBotGemini/', // start URL for GitHub Pages
        id: '/ChatBotGemini/', // a consistent ID for the app
        scope: '/ChatBotGemini/', // the scope to restrict what URLs are considered part of the app
        icons: [
          {
            src: '192x192Icon.png', // path to the icon
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any', // Can be used as app icon and shortcut icon
          },
          {
            src: '512x512Icon.png', // Provide the correct path to the icon
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          // More icon sizes can be included here, for example, 512x512
        ],
        screenshots: [
          {
            src: 'Screenshot1280x720.png', // Path to the desktop screenshot
            sizes: '1280x720',
            type: 'image/png',
            label: 'Desktop Screenshot',
            form_factor: 'wide',
          },
          {
            src: 'Screenshot640x1136.png', // Path to the mobile screenshot; these sizes must be exact
            sizes: '640x1136',
            type: 'image/png',
            label: 'Mobile Screenshot',
            form_factor: 'narrow',
          },
        ],
      },
    })
  ],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://gaslightai.com', // Your backend base URL
  //       changeOrigin: true, // This changes the origin of the host header to the target URL
  //       secure: false, // If your backend is HTTPS and using self-signed certificates, you might need this
  //     },
  //   },
  // },
  build: {
    outDir: 'dist', // Default output directory
    base: '/ChatBotGemini/', // Base public path set to match the GitHub repository name
  },
});
