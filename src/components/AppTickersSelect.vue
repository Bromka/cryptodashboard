<script setup>
import {defineComponent, ref} from 'vue'
import TickerGridItem from "./TickerGridItem.vue";

defineComponent({
  name: "AppTickersSelect"
})
defineProps({})

</script>

<template>
  <div class="mt-[16px]">
    <div class="search">
      <input type="text"
             class="pl-[41px] py-[9px] rounded-md border border-gray-300 text-gray-500" placeholder="Найти тикер">
    </div>
    <div class="tickers__grid  mt-[18px]">
      <TickerGridItem v-for="elem in 6"></TickerGridItem>
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
  grid-template-columns: repeat(auto-fit, minmax(470px, 1fr));
  column-gap: 12px;
  row-gap: 16px;
}
</style>
