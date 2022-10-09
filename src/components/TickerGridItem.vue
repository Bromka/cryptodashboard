<script setup>
import {defineComponent, ref} from 'vue'

defineComponent({
  name: "TickerGridItem"
})
defineProps({})

</script>

<template>
  <div class="ticker__item py-[16px] px-[20px] bg-white text-gray-900 rounded-md border border-gray-300">
    <div class="flex justify-between">
      <div class="ticker-name text-sm">
        ETH
      </div>
      <button class="self-end"><img src="src/assets/trash.svg"></button>
    </div>
    <div class="ticker-value text-3xl">1095.45$</div>
  </div>
</template>

<style>
.ticker__item {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
}
</style>
