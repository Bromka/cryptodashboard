<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppTickersSelect from "./components/AppTickersSelect.vue";
import AppTickersPagination from "./components/AppTickersPagination.vue";
import {onMounted, onUnmounted} from "vue";
import {useTickerList} from "./store/useTickerList.js";

const store = useTickerList()

const URL = "wss://streamer.cryptocompare.com/v2?api_key=fdb9579108906a3c0023a8ce3c4fd0feb6186309a813aef77e02962dac9c99e9"

let socket = new WebSocket(URL);
const subscribe = {
  "action": "SubAdd",
  "subs": ["5~CCCAGG~BTC~USD"]
}
socket.onopen = (e) => {
  const subRequest = {
    "action": "SubAdd",
    "subs": ["0~*~*~*"]
  }
  socket.send(JSON.stringify(subRequest))
  console.log(e, 'asssssssssssssssda')
}
socket.onmessage = function (event) {
  console.log(`[message] Данные получены с сервера: ${event.data}`);
};

socket.onclose = function (event) {
  if (event.wasClean) {
    console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
  } else {
    console.log('[close] Соединение прервано');
  }
};

socket.onerror = function (error) {
  console.log(`[error] ${error}`);
  console.log(error);
};

onMounted(() => {
})
onUnmounted(() => {
  socket.close()
})



</script>

<template>
  <div class="p-6 bg-gray-50 h-screen">
    <AppHeader/>
    <AppTickersSelect/>
    <AppTickersPagination/>
  </div>
</template>
<style>

</style>
