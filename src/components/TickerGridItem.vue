<script setup>
import {defineComponent, ref} from 'vue'
import {useTickerList} from "../store/useTickerList.js";
import {useSockets} from "../store/useSockets.js";

defineComponent({
  name: "TickerGridItem"
})
const props = defineProps({
  ticker: String,
})
const {removeTicker} = useTickerList()
const {tickerPriceList} = useSockets()

</script>

<template>
  <div class="ticker__item py-[16px] px-[20px] bg-white text-gray-900 rounded-md border border-gray-300">
    <div class="flex justify-between">
      <div class="ticker-name text-sm">
        {{ ticker }}
      </div>
      <button class="self-end" @click="removeTicker(ticker)"><img src="src/assets/trash.svg"></button>
    </div>
    <div class="ticker-value text-3xl">{{ tickerPriceList[ticker] }}$</div>
  </div>
</template>

<style>
.ticker__item {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
}
</style>
