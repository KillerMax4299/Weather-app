import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Weather",
        short_name: "Weather",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        lang: "en",
        scope: "/",
        icons: [
          {
            src: "/logos/maskable_icon.png",
            sizes: "120x120",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logos/maskable_icon_x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logos/maskable_icon_x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logos/maskable_icon_x48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#a6a6a6",
      },
    }),
  ],
});
