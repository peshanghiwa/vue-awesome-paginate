import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import typescript from "@rollup/plugin-typescript";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "vue-awesome-paginate",
      // fileName: (format) => `${format}.js`,
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

  plugins: [
    {
      ...typescript({ tsconfig: "./tsconfig.json" }),
      apply: "build",
      // declaration: true,
      // declarationDir: 'types/',
      // rootDir: '/'
    },
    vue(),
  ],
});
