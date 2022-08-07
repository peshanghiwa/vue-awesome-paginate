// This is where the package installs.
import type { App } from "vue";
import { VueAwesomePaginate } from "./components";

export default {
  install: (app: App) => {
    app.component("VueAwesomePaginate", VueAwesomePaginate);
  },
};

export { VueAwesomePaginate };
