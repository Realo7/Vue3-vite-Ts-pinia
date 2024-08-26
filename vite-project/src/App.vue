<script setup lang="ts">
import { watch, ref, reactive, readonly, shallowReactive, markRaw, shallowRef } from 'vue';
import { effect, watchEffect, provide } from 'vue';
import layout from './Layout/index.vue'
import Avue from './example/A.vue'
import Bvue from './example/B.vue'
import Cvue from './example/C.vue'


const colorVal = ref('pink')
provide('color', colorVal)

</script>

<template>
  <div id="app">
    <layout>
    </layout>



  </div>
</template>
<style lang="scss">
#app {
  @include bfc
}
</style>
