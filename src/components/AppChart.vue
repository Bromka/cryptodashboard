<script setup>
import {computed, defineComponent, nextTick, onMounted, ref, watch} from 'vue'
import VueBarGraph from 'vue-bar-graph';
import {useChart} from "../store/useСhart.js";
import {storeToRefs} from "pinia";

defineComponent({
  name: "AppChart"
})

const chartStore = useChart()

const {selectedTicker, getSelectedTickerChartData} = storeToRefs(chartStore);

const myReference = ref(null);
console.log(myReference.value)
const getChartData = computed(() => {
      if (!getSelectedTickerChartData.value.length) {
        return [{value: 1, barColor: '#FCD34D'}]
      }
      return (getSelectedTickerChartData.value).map((el) => ({
        value: el,
        barColor: '#FCD34D'
      })) || []
    }
)

onMounted(() => {
  console.log(myReference.value);
})

const size = ref({
  h: 0,
  w: 0,
})
watch(selectedTicker, async () => {
  await nextTick()
  const $el = myReference.value.getBoundingClientRect();
  size.value.h = $el.height
  size.value.w = $el.width
})
</script>

<template>
  <div class="chart__container bg-white p-[20px] my-[16px] overflow-hidden grow" v-show="selectedTicker"
       ref="myReference">
    <vue-bar-graph
        :points="getChartData"
        :width="size.w"
        :height="size.h"
        class="h-full"
    />
  </div>
</template>

<style scoped>
</style>
