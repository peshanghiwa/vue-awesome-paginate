import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "vue-awesome-paginate",
      fileName: (format) => `vue-awesome-paginate.${format}.js`,
    },

    rollupOptions: {
      external: ["vue"],

      output: {
        // sourcemap: true,
        globals: {
          vue: "Vue",
        },
      },
    },
  },

  plugins: [vue()],
});
