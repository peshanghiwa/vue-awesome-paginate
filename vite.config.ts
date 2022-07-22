import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import typescript from "@rollup/plugin-typescript";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/package.ts"),
      name: "vue-awesome-paginate",
      fileName: (format) => `vue-awesome-paginate.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],

      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },

  plugins: [typescript(), vue()],
});
