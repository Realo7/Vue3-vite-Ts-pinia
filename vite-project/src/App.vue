<!-- ref,reactive -->
<!-- ref支持所有类型，reactive支持引用类型
ref取值，赋值都需要加.value,reactive不需要.value
reactive 不能直接赋值，否则破坏响应式对象结构
解决方案 数组：1.使用push加解构赋值，2.使用对象，把arr当成对象一个属性，直接赋值 -->
<script setup lang="ts">
import Nav from './components/nn.vue'
import { ref, reactive, readonly, shallowReactive } from 'vue';
import { effect, watchEffect } from 'vue';

let message1 = ref<string>('飞机')
let message2 = ref<string>('飞机杯子')
const state = reactive({
  count: 0
});

const count2 = ref(0)
const change = () => {
  count2.value++;
}
watchEffect((onInvalidate) => {
  console.log(count2.value);
  console.log(message1.value);
  console.log(message2.value);
  // 在副作用下一次重新执行之前调用
  onInvalidate(() => {
    console.log('调用onInvalidate');

  });
});

</script>

<template>
  <div>
    <input type="text" v-model="message1">
    <input type="text" v-model="message2">

    {{ count2 }}
    <button @click="change">改变</button>
  </div>
  <!-- <Nav /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
