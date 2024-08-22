<template>
    <div style="margin-left: 20px;" v-for="item in data">
        <input type="checkbox" v-model="item.checked"><span>{{ item.name }}</span>
        <Tree v-if="item?.children?.length" :data="item.children" />
        <!-- 在vue3中可以直接使用文件名当成组件名，不需要再引入 -->
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'
interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[],
}
const props = defineProps<{ data?: Tree[] }>()
</script>
<style lang='scss' scoped></style>