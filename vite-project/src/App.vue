<script setup lang="ts">
import { watch, ref, reactive, readonly, shallowReactive, markRaw, shallowRef } from 'vue';
import { effect, watchEffect,provide } from 'vue';
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

      <template #color>
        <div >
          <input type="radio" name="color"  v-model="colorVal" value="pink">
    <input type="radio" name="color" v-model="colorVal" value="yellow">
    <input type="radio" name="color" v-model="colorVal" value="red">
        </div>
      </template>
    </layout>
    
  
  
  </div>
</template>
<style lang="scss">
#app {
  @include bfc
}
</style>
