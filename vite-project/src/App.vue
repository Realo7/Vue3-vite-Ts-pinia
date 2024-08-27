<script setup lang="ts">
import { watch, ref, reactive, readonly, shallowReactive, markRaw, shallowRef } from 'vue';
import { effect, watchEffect, provide } from 'vue';
import layout from './Layout/index.vue'
import Avue from './example/A.vue'
import Bvue from './example/B.vue'
import Cvue from './example/C.vue'
import TSX from './example/App';

const colorVal = ref('pink')
provide('color', colorVal)
const test = (params: any) => {
  console.log('父组件接收', params)
}
</script>

<template>
  <div id="app">
    <!-- <layout>
    </layout> -->
    <TSX @on-click="test"></TSX>



  </div>
</template>
<style lang="scss">
#app {
  @include bfc
}
</style>
