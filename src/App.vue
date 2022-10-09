<script setup>
import {useStore} from "./store/index.js";
import AppHeader from "./components/AppHeader.vue";
import AppTickersSelect from "./components/AppTickersSelect.vue";
import AppTickersPagination from "./components/AppTickersPagination.vue";

const store = useStore()

</script>

<template>
  <div class="p-6 bg-gray-50 h-screen">
    <AppHeader/>
    <AppTickersSelect/>
    <AppTickersPagination/>
  </div>
</template>
<style>

</style>
