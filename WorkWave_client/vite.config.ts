import million from "million/compiler";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import removeConsole from "vite-plugin-remove-console";
import TurboConsole from "vite-plugin-turbo-console";
import mpaPlugin from "vite-plugin-mpa-plus";
import { compression } from "vite-plugin-compression2";

export default defineConfig({
  plugins: [
    mpaPlugin({
      entry: "src/main.tsx",
      inject: {
        data: {
          title: "spa",
        },
      },
    }),
    million.vite({ auto: true }),
    react(),
    removeConsole(),
    TurboConsole(),
    compression(),
  ],
});
