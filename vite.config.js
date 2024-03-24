import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), splitVendorChunkPlugin()],
  build: {
    outDir: "my_portfolio",
    cssCodeSplit: false,
  },
  base: "./",
});
