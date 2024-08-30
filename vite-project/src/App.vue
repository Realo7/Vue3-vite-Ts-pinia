<script setup lang="ts">
import { watch, ref, reactive, readonly, shallowReactive, markRaw, shallowRef, Directive, DirectiveBinding } from 'vue';
import { effect, watchEffect, provide } from 'vue';
import layout from './Layout/index.vue'
import Avue from './example/A.vue'
import Bvue from './example/B.vue'
import Cvue from './example/C.vue'
import vModel from './components/vModel.vue';

const someAsyncOperation = () => {
  return Promise.resolve(333);
}
async function example() {
  const result = await someAsyncOperation(); // 这里是异步等待
  console.log(result); // 这行代码会在 await 完成后执行，具有异步性质
  const synchronousCode = 1 + 2; // 这行代码是同步的，会立即执行
  console.log(synchronousCode);
}
example()
</script>

<template>
  <div id="app">
    <Avue></Avue>
    <button @click="example">1111111</button>
  </div>
</template>
<style lang="scss">
#app {
  @include bfc
}
</style>
