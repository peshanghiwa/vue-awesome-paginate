<script setup lang="ts">
import { ref } from "vue";
import vueAwesomePaginate from "./components/vue-awesome-paginate.vue";

const currentPage = ref(1);

const clickHandler = (page: number) => {
  console.log(page);
};
</script>

<template>
  <vue-awesome-paginate
    :total-items="50"
    v-model="currentPage"
    :items-per-page="5"
    :max-pages-shown="5"
    :on-click="clickHandler"
  />
</template>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
