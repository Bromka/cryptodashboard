<script setup>
import {defineComponent, ref} from 'vue'
import TickerGridItem from "./TickerGridItem.vue";
import {useTickerList} from "../store/useTickerList.js";
import {storeToRefs} from "pinia";
import {usePaginationStore} from "../store/usePagination.js";

defineComponent({
  name: "AppTickersSelect"
})
defineProps({})
const tickerStore = useTickerList();

const {currentPageTickers} = storeToRefs(tickerStore)

const pageStore = usePaginationStore()
const { filter } = storeToRefs(pageStore)

</script>

<template>
  <div class="mt-[16px]">
    <div class="search">
      <input type="text"
             class="pl-[41px] py-[9px] rounded-md border border-gray-300 text-gray-500" placeholder="Найти тикер" v-model="filter">
    </div>
    <div class="tickers__grid  mt-[18px]">
      <TickerGridItem v-for="elem in currentPageTickers" :ticker="elem" :key="elem"></TickerGridItem>
    </div>
  </div>
</template>

<style scoped>
.search > input {
  background: url("src/assets/Search.svg") no-repeat 11px;
  background-size: 20px;
}
.tickers__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 12px;
  row-gap: 16px;
}
</style>
