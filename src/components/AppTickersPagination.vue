<script setup>
import {defineComponent, ref} from 'vue'
import {usePaginationStore} from "../store/usePagination.js";
import {storeToRefs} from "pinia";

defineComponent({
  name: "AppTickersPagination"
})
defineProps({})

const paginationStore = usePaginationStore()
const {currentLength} = storeToRefs(paginationStore)


</script>

<template>
  <div class="ticker-pagination py-[12px] flex justify-between items-center border-t border-gray-200 mt-6">
    <span class="text-gray-700 text-sm">Показано {{ currentLength }} результатов из 10</span>
    <div class="buttons flex gap-[12px]">
      <button class="text-gray-700 bg-white py-[9px] px-[17px] border border-gray-300 rounded-md">Назад</button>
      <button class="text-gray-700 bg-white py-[9px] px-[17px] border border-gray-300 rounded-md">Вперед</button>
    </div>
  </div>
</template>

<style scoped>
button {
  box-shadow: 0px 1px 2px 0px #0000000D;
}
</style>
