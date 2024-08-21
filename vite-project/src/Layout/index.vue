<template>
    <div class="hur-box">
        <div>
            <Menu></Menu>
        </div>
        <div class="hur-box__right">
            <Header></Header>
            <Content :custom="propdate" :arr="[1, 2, 3, 33, 3]"></Content>
        </div>

    </div>
</template>
<script setup lang='ts'>
const propdate = reactive({ name: "ss", age: 12 })


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