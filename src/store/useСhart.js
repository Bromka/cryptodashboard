import {defineStore, storeToRefs} from 'pinia'
import {computed, ref} from "vue";
import {useTickerList} from "./useTickerList.js";
import global from "../global.js";

export const useChart = defineStore('tickerChart', () => {
    const selectedTicker = ref('')
    const selectedTickerChartData = ref([])

    function selectTicker(tickerName) {
        if (selectedTicker.value !== tickerName) {
            selectedTicker.value = tickerName;
            clearChartData()
        }
    }

    function clearChartData() {
        selectedTickerChartData.value = []
    }

    const getSelectedTickerChartData = computed(() => {
        return selectedTickerChartData.value.slice(-20) || []
    })

    return {selectedTicker, selectTicker, selectedTickerChartData, getSelectedTickerChartData}
})