import {defineStore} from 'pinia'
import {ref} from "vue";

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

    return {selectedTicker, selectTicker}
})