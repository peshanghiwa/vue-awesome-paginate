<script setup lang="ts">
import vueAwesomePaginate from "./vue-awesome-paginate.vue";
</script>

<template>
  <vue-awesome-paginate
    :total-items="50"
    :current-page="1"
    :items-per-page="5"
    :max-pages-shown="5"
    :disable-pagination="true"
  />
</template>

<style>
/* .pagination-container {
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
} */
</style>
