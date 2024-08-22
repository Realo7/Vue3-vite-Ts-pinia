<script setup lang="ts">
import { watch, ref, reactive, readonly, shallowReactive, markRaw, shallowRef } from 'vue';
import { effect, watchEffect } from 'vue';
import layout from './Layout/index.vue'
import Avue from './example/A.vue'
import Bvue from './example/B.vue'
import Cvue from './example/C.vue'

interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[],
}

interface ar {
  name: typeof Avue | typeof Bvue | typeof Cvue
  value: string
}
const arr = reactive<Array<ar>>([{ name: markRaw(Avue), value: 'A' }, { name: markRaw(Bvue), value: 'B' }, { name: markRaw(Cvue), value: 'C' }])
const uuu = ref(0)
const iii = shallowRef<typeof Avue | typeof Bvue | typeof Cvue>(Avue);
watch(uuu, () => {
  if (uuu.value < 3) {
    iii.value = arr[uuu.value].name
  } else {
    iii.value = markRaw(Avue)
  }
})
</script>

<template>
  <div id="app">
    <!-- <layout></layout> -->
    <input type="text" v-model="uuu">
    {{ iii }}
    <component :is="iii"></component>
  </div>
</template>
<style lang="scss">
#app {
  @include bfc
}
</style>
