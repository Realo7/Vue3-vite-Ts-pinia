<script setup lang="ts">
import { ref, reactive, readonly, shallowReactive } from 'vue';
import { effect, watchEffect } from 'vue';
import layout from './Layout/index.vue'

</script>

<template>
  <div id="app">
    <layout></layout>
  </div>
</template>
<style lang="scss">
#app {
  @include bfc
}
</style>
