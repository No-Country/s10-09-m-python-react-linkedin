import million from "million/compiler";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import removeConsole from "vite-plugin-remove-console";
import TurboConsole from "vite-plugin-turbo-console";
import mpaPlugin from "vite-plugin-mpa-plus";
import { compression } from "vite-plugin-compression2";
import { VitePluginRadar } from "vite-plugin-radar";

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
    VitePluginRadar({
      analytics: {
        id: "G-KZYQZ2GL5V",
      },
    }),
    compression(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
