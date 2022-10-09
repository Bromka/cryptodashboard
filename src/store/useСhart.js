import {defineStore} from 'pinia'
import {ref} from "vue";

export const useChart = defineStore('tickerChart', () => {
    const selectedTicker = ref('')

    function selectTicker(tickerName) {
        selectedTicker.value = tickerName;
    }

    return {selectedTicker, selectTicker}
})