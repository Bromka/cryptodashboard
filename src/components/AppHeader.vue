<script setup>
import {defineComponent, ref} from 'vue'
import {useTickerList} from "../store/useTickerList.js";

const {addTicker} = useTickerList()
const ticker = ref('')

function clickHandler() {
  addTicker(ticker.value)
  ticker.value = ''
}

defineComponent({
  name: "AppHeader"
})


defineProps({})

</script>

<template>
  <form @submit.prevent="clickHandler">
    <div class="p-4 flex flex-col items-start justify-center gap-3 bg-white rounded-[8px]">

      <label class="relative cursor-text">
        <input type="text"
               class="px-[13px] py-[16px] rounded-md border border-gray-300 text-gray-500" placeholder=" "
               v-model="ticker">
        <span class="text-gray-700 text-xs top-0 left-0 absolute pl-[13px] pt-[9px]">Тикер</span>
        <span class="text-gray-500 left-0 bottom-0 pl-[13px] pb-[9px] leading-6 absolute">Например DOGE</span>
      </label>
      <button type="submit"
              class="rounded-md text-white shadow-sm shadow-indigo-600/50 rounded-md py-[13px] px-[25px] cursor-pointer"
      >Добавить
      </button>
    </div>
  </form>
</template>
<style scoped>
::-webkit-input-placeholder {
  vertical-align: bottom;
}

:-moz-placeholder {
  vertical-align: middle;
}

input:not(:placeholder-shown) + span, input:focus + span {
  display: none;
}

input:not(:placeholder-shown) + span + span, input:focus + span + span {
  display: none;
}

/* пришлось добавить так как не соответствует цвет в фигме */
button {
  background: #471f7a
}
</style>
