<template>
    <div class="hur-content">
        Content
        <!-- <div class="hur-content__items" v-for="item in 100">{{ item }}</div> -->
        <div>{{ custom }}</div>
        <div>{{ arr }}</div>
        <div>{{ color}} </div>


    </div>
</template>
<script setup lang='ts'>
const props = defineProps<{
    custom: object,
    arr: number[]
}>()
const color=inject<Ref<string>>('color')


import { ref, reactive, defineProps,inject } from 'vue'
import type { Ref } from 'vue'

</script>
<style scoped lang="scss">
@include b(content) {
    /* @include bfc; */
    flex: 1;
    overflow: auto;

    @include e(items) {
        padding: 10px;
        margin: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;

    }

}
</style>