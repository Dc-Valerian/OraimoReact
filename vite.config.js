import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Use '@vitejs/plugin-vue' for Vue, etc.
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
