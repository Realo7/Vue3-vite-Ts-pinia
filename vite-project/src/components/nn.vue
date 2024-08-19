<template>
  <div class="container">
    {{ man }}
    <br>
    {{ man2 }}
    <button @click="change">changew</button>
  </div>
</template>
<script setup lang="ts">
import { ref, isRef, reactive, shallowRef } from 'vue'
// import type { Ref } from 'vue' 
// Ref 是 ref的interface
type M = {
  name1: string

}
const man = ref<M>({ name1: '小满' })
const man2 = shallowRef({ name1: '小' })
// console.log(isRef(man));

const change = () => {
  // man.value.name1 = '小'
  man2.value = { name1: '小xxxxx' }

}
</script>
<style scoped>
.container {
  display: flex;
}
</style>
