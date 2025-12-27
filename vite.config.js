// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Amazon-Clone-FULLSTACK-2025/", // ← important: exact repo name + slashes
});
