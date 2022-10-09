import {defineStore, storeToRefs} from 'pinia'
import {useTickerList} from "./useTickerList.js";
import {computed, ref} from "vue";

export const usePaginationStore = defineStore('pagination', () => {
    const page = ref(0)
    const filter = ref('')

    const tickerStore = useTickerList()
    const {tickerList, filteredTickers} = storeToRefs(tickerStore)

    const disabledNext = computed(() => {
        console.log('tickerList', tickerList)
        console.log(filteredTickers, 'filteredTickers')
       return filteredTickers.length <= page.value * 6;
    })
    const disabledPrev = computed(() => {
        return page.value === 0;
    })

    const currentLength = computed(() => {
        console.log('filteredTickers')
        console.log(filteredTickers)
        return filteredTickers;
    })

    function pageNext() {
        page.value++
    }

    function pagePrev() {
        page.value > 0 ? page.value -= page.value : page.value;
    }


    return {page, pageNext, pagePrev, filter, disabledPrev, disabledNext, currentLength}
})