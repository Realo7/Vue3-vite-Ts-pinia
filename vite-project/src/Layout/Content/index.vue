<template>
    <div class="hur-content">
        Content
        <div class="hur-content__items" v-for="item in 100">{{ item }}</div>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
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