import {defineStore, storeToRefs} from 'pinia'
import {useTickerList} from "./useTickerList.js";
import {computed, ref} from "vue";

export const usePaginationStore = defineStore('pagination', () => {
    const page = ref(0)
    const filter = ref('')

    const tickerStore = useTickerList()
    const {tickerList } = storeToRefs(tickerStore)
    const {filteredTickers} = tickerStore;

    const disabledNext = computed(() => {
       return tickerStore.filteredTickers.length <= (page.value+1) * 6;
    })
    const disabledPrev = computed(() => {
        return page.value === 0;
    })

    const currentLength = computed(() => {
        return tickerStore.filteredTickers.length < 6 ? tickerStore.filteredTickers.length : 6;
    })

    function pageNext() {
        page.value++
    }

    function pagePrev() {
        page.value > 0 ? page.value -= page.value : page.value;
    }


    return {page, pageNext, pagePrev, filter, disabledPrev, disabledNext, currentLength}
})