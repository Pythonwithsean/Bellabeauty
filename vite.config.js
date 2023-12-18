import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Load environment variables from .env files
import { config } from "dotenv";
config();

// Define Vite configuration
export default defineConfig({
  plugins: [react()],

  define: {
    "process.env": process.env,
  },
});
