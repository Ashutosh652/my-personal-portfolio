import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import markdown from "@vavt/vite-plugin-import-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), markdown()],
  base: "/",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
