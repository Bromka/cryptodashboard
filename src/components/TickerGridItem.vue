<script setup>
import {computed, defineComponent, ref} from 'vue'
import {useTickerList} from "../store/useTickerList.js";
import {useSockets} from "../store/useSockets.js";
import {useChart} from "../store/useСhart.js";
import {storeToRefs} from "pinia";

defineComponent({
  name: "TickerGridItem"
})
const {ticker} = defineProps({
  ticker: String,
})
const {removeTicker} = useTickerList()
const {tickerPriceList} = useSockets()
const chartStore = useChart()
const {selectTicker} = chartStore
const {selectedTicker} = storeToRefs(chartStore)

const activeClasses = computed(() => {
  if (selectedTicker.value === ticker) {
    return ['border-[3px]', 'border-gray-900']
  }
  return ''
})

function removeHandler() {
  removeTicker(ticker)
  if (selectedTicker.value === ticker) {
    selectedTicker.value = '';
  }

}
</script>

<template>
  <div class="ticker__item py-[16px] px-[20px] bg-white text-gray-900 rounded-md border border-gray-300"
       :class="activeClasses" @click="selectTicker(ticker)">
    <div class="flex justify-between">
      <div class="ticker-name text-sm">
        {{ ticker }}
      </div>
      <button class="self-end" @click="removeHandler"><img src="src/assets/trash.svg"></button>
    </div>
    <div class="ticker-value text-3xl">{{ tickerPriceList[ticker] }}$</div>
  </div>
</template>

<style>
.ticker__item {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
}
</style>
