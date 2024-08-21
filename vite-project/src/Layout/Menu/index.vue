<template>
    <div class="hur-menu">
        MENU
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'
</script>
<style lang='scss' scoped>
@include b(menu) {
    @include bfc;
    min-width: 200px;
    border-right: 1px solid #ccc;
    height: 100%;
}
</style>