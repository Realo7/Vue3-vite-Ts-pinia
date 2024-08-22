<template>
    <div>
        <slot :data="slotData">

        </slot>
        AAAAAAAAAA
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'
const props = defineProps<{}>()
const slotData = ref('这是子组件传递的数据')

</script>
<style lang='scss' scoped></style>