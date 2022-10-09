<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppTickersSelect from "./components/AppTickersSelect.vue";
import AppTickersPagination from "./components/AppTickersPagination.vue";
import {onMounted, onUnmounted} from "vue";
import {useSockets} from "./store/useSockets.js";
import AppChart from "./components/AppChart.vue";


const socketStore = useSockets()


onMounted(() => {
  socketStore.open()
})
onUnmounted(() => {
  socketStore.close()
})


</script>

<template>
  <div class="p-6 bg-gray-50 h-screen">
    <AppHeader/>
    <AppTickersSelect/>
    <AppChart />
    <AppTickersPagination/>
  </div>
</template>
<style>

</style>
