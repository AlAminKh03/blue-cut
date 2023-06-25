import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import googleFonts from "google-fonts-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
