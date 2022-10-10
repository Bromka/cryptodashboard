<script setup>
import {computed, defineComponent, ref} from 'vue'
import VueBarGraph from 'vue-bar-graph';
import {useChart} from "../store/useСhart.js";
import {storeToRefs} from "pinia";

defineComponent({
  name: "AppChart"
})
defineProps({})

const chartStore = useChart()
const {selectedTicker, getSelectedTickerChartData} = storeToRefs(chartStore);

const getChartData = computed(() => {
      return (getSelectedTickerChartData.value || [{value: 0, barColor: '#FCD34D'}]).map((el) => ({value: el, barColor: '#FCD34D'})) || []
    }
)
</script>

<template>
  <div class="chart__container bg-white p-[20px] my-[16px]" v-if="selectedTicker">
    {{selectedTicker}}
    <vue-bar-graph
        :points="getChartData"
        :width="400"
        :height="200"
    />
  </div>
</template>

<style scoped>
</style>
