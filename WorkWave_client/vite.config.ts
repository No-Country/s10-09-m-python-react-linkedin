import million from "million/compiler";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  define: {
    "process.env": {
      REACT_APP_API_BACK: "http://localhost:3002/api",
    },
  },
});
