<!-- ref,reactive -->
<!-- ref支持所有类型，reactive支持引用类型
ref取值，赋值都需要加.value,reactive不需要.value
reactive 不能直接赋值，否则破坏响应式对象结构
解决方案 数组：1.使用push加解构赋值，2.使用对象，把arr当成对象一个属性，直接赋值 -->
<script setup lang="ts">
let list: Array<string> = reactive<Array<string>>(['a', 'b', 'c'])
let read = readonly(list)
const obj: any = shallowReactive({ prop: { name: 'shadow' }, age: 112 })
const add = () => {
  setTimeout(() => {

    obj.prop.name = "wdf"
    console.log(obj);

  }, 300);
}
const toRefs = <T extends object>(object: T) => { }
import { reactive, readonly, shallowReactive } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/nn.vue'
</script>

<template>
  {{ obj }}
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <button @click="add">add</button>
  </div>
  <Nav />
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
