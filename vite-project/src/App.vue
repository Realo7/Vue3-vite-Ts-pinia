<!-- ref,reactive -->
<!-- ref支持所有类型，reactive支持引用类型
ref取值，赋值都需要加.value,reactive不需要.value
reactive 不能直接赋值，否则破坏响应式对象结构
解决方案 数组：1.使用push加解构赋值，2.使用对象，把arr当成对象一个属性，直接赋值 -->
<script setup lang="ts">
import Nav from './components/nn.vue'
import { reactive, readonly, shallowReactive } from 'vue';
import { effect, watchEffect } from 'vue';


const state = reactive({
  count: 0,
  message: 'Hello'
});

watchEffect(() => {
  console.log(`Count is ${state.count}, message is ${state.message}`);
});
effect(() => {
  console.log('effect里面的计数', state.count);
  return () => {
    console.log('清理操作');
  };
});
console.log(state.count, 'ssssssss');
const change = () => {
  setTimeout(() => {
    state.count++;
    state.message += 'world';
  }, 600);
}
</script>

<template>
  <div>
    {{ state }}
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
