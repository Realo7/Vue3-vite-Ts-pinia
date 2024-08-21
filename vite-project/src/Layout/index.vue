<template>
    <div class="hur-box">
        <div>
            <Menu></Menu>
        </div>
        <div class="hur-box__right">
            <Header></Header>
            <Content></Content>
        </div>

    </div>
</template>
<script setup lang='ts'>
import Header from './Header/index.vue'
import Menu from './Menu/index.vue'
import Content from './Content/index.vue'



import { ref, reactive } from 'vue'
import type { Ref } from 'vue'
</script>
<style lang='scss' scoped>
@include b(box) {
    @include bfc;
    display: flex;

    @include e(right) {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
}
</style>