/*
import {defineStore} from 'pinia'
import {computed, ref} from "vue";
import global from "../global.js";

const TICKER_LIST_KEY = 'ticker_list'
export const useStore = defineStore('main', () => {
    const tickerList = ref(JSON.parse(localStorage.getItem(TICKER_LIST_KEY)) ?? [])

    async function addTicker(tickerName) {
        const ticker = tickerName.trim().toUpperCase()
        const isAvailable = await isTickerAvailable(ticker)
        if (ticker.length && !tickerList.value.includes(ticker) &&  isAvailable)
        tickerList.value.push(ticker)
    }

    function removeTicker(tickerName) {
        const ticker = tickerName.trim().toUpperCase()
        tickerList.value = tickerList.value.filter(tickerElement => tickerElement !== ticker)
    }



    async function isTickerAvailable(tickerName) {
        const response = await fetch(`${global.API_URL}price?fsym=${tickerName}&tsyms=USD`)
        const body = await response.json();
        if ('USD' in body) {
            return true
        }
        return false

    }


    return {tickerList,  addTicker, removeTicker}
})*/
