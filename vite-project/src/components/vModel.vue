<template>
    <div class="dialog">
        <div class="dialog-header">

            <div>标题</div>
            <div @click="close">x</div>
        </div>

        <div class="dialog-content">
            内容
            {{ modelValue }}
            <input @input="changetext" type="text" :value="text1" />
        </div>

    </div>


</template>

<script setup lang='ts'>
const props = defineProps<{
    modelValue: boolean,
    text1: string
    text1Moddifiers?: {
        isBT: boolean
    }

}>()
const emit = defineEmits(['update:modelValue', 'update:text1'])

const close = () => {
    emit('update:modelValue', !props.modelValue)

}
const changetext = (e: any) => {
    emit('update:text1', e.target.value)

}

</script>

<style lang='scss'>
.dialog {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &-header {
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }

    &-content {
        padding: 10px;
    }
}
</style>