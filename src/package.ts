import VueAwesomePaginate from "./vue-awesome-paginate.vue";
import { App } from "vue";

export default {
  install: (app: App) => {
    app.component("VueAwesomePaginate", VueAwesomePaginate);
  },
};
