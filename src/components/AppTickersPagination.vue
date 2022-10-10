<script setup>
import {defineComponent, ref} from 'vue'
import {usePaginationStore} from "../store/usePagination.js";
import {storeToRefs} from "pinia";
import {useTickerList} from "../store/useTickerList.js";

defineComponent({
  name: "AppTickersPagination"
})
defineProps({})

const paginationStore = usePaginationStore()
const tickerStore = useTickerList()

const {currentLength} = storeToRefs(paginationStore)
const {currentPageTickers} = storeToRefs(tickerStore)
const {disabledNext, disabledPrev} = storeToRefs(paginationStore)
const {pageNext, pagePrev} = paginationStore;


</script>

<template>
  <div class="ticker-pagination py-[12px] flex justify-between items-center sm:border-t border-gray-200 mt-6 border-none">
    <span class="text-gray-700 text-sm">Показано {{
        currentPageTickers.length
      }} результатов из {{ tickerStore.tickerList.length }}</span>
    <div class="buttons flex gap-[12px]">
      <button class="text-gray-700 bg-white py-[9px] px-[17px] border border-gray-300 rounded-md"
              :disabled="disabledPrev" @click="pagePrev">Назад
      </button>
      <button class="text-gray-700 bg-white py-[9px] px-[17px] border border-gray-300 rounded-md"
              :disabled="disabledNext" @click="pageNext">Вперед
      </button>
    </div>
  </div>
</template>

<style scoped>
button {
  box-shadow: 0px 1px 2px 0px #0000000D;
}
</style>
