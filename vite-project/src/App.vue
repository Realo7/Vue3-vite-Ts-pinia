<script setup lang="ts">
import { watch, ref, reactive, readonly, shallowReactive, markRaw, shallowRef, Directive, DirectiveBinding } from 'vue';
import { effect, watchEffect, provide } from 'vue';
import layout from './Layout/index.vue'
import Avue from './example/A.vue'
import Bvue from './example/B.vue'
import Cvue from './example/C.vue'
import vModel from './components/vModel.vue';

const colorVal = ref('pink')
provide('color', colorVal)

const open = () => {
  isShow.value = !isShow.value
}
const text = ref('我是胡睿')
const isShow = ref<Boolean>(true)

const vMove: Directive<any, void> = (el: HTMLElement, binding: DirectiveBinding) => {

  mounted: (el: any) => {
  }
  const moveElement = el.firstChild as HTMLElement
  console.log(moveElement);

  const mousedown = (e: MouseEvent) => {
    let x = e.clientX - el.offsetLeft
    let y = e.clientY - el.offsetTop
    const move = (e: MouseEvent) => {
      el.style.left = e.pageX - x + 'px'
      el.style.top = e.pageY - y + 'px'
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move)
    })
  }

  moveElement.addEventListener('mousedown', mousedown)

}
</script>

<template>
  <div id="app">
    <!-- <layout>
    </layout> -->
    <div>{{ $filter.format('hurui') }}</div>
    <div>我是父组件{{ isShow }}</div>
    <button @click="open">开关</button>
    <hr>
    {{ text }}
    <hr>
    <vModel v-move v-model:text1.isBT="text" v-model="isShow"></vModel>
  </div>
</template>
<style lang="scss">
#app {
  @include bfc
}
</style>
