## v-model

vue3 中,v-model 时破坏性更新的,和 vue2 区别大
v-model 其实是一个语法糖 通过 props 和 emit 组合而成的

## 父子组件双向绑定

```js
    <div>我是父组件{{ isShow }}</div>
    <button @click="open">开关</button>
    <hr>
    <vModel v-model="isShow"></vModel>
const open = () => {
  isShow.value = !isShow.value
}

const isShow = ref < Boolean > true
```

子组件

```html
<template>
  <div class="dialog">
    <div class="dialog-header">
      <div>标题</div>
      <div @click="close">x</div>
    </div>

    <div class="dialog-content">内容 {{ modelValue }}</div>
  </div>
</template>

<script setup lang="ts">
  //   接收modelValue

  const props = defineProps<{
    modelValue: boolean
  }>()
  const emit = defineEmits(['update:modelValue'])

  const close = () => {
    // 派发modelValue
    emit('update:modelValue', !props.modelValue)
  }
</script>
```

## 多个值双向绑定

```js
// 父
;<vModel v-model:text1="text" v-model="isShow"></vModel>
// 子
const props = defineProps<{
    modelValue: boolean,
    text1: string
}>()
const emit = defineEmits(['update:modelValue', 'update:text1'])
// 触发事件
const changetext = (e: any) => {
    emit('update:text1', e.target.value)
}
```

## 自定义修饰符

lazy,内置修饰符,只有改变且鼠标离开焦点时才会触发

<!-- 父 -->

v-model:text1.isBT="text"

```js
// 子,接收自定义修饰符,可以多个,可以使用自定义修饰符进行逻辑判断
const props = defineProps<{
    modelValue: boolean,
    text1: string
    text1Moddifiers?: {
        isBT: boolean
    }
}>()
```

## 源码

https://blog.csdn.net/fegus/article/details/125757003
自定义指令

1. 作用在 input 标签的 v-model 指令在编译后，除了使用 withDirectives 给这个 vnode 添加了 vModelText 指令对象外，还额外传递了一个名为 onUpdate:modelValue 的 prop，它的值是一个函数，这个函数就是用来更新变量 searchText。

2. vModelText 的实现：
   这个指令实现了两个钩子函数，created 和 beforeUpdate

   1. created 函数首先把 v-model 绑定的值 value 赋值给 el.value，这个就是数据到 DOM 的单向流动；
   2. 接着通过 getModelAssigner 方法获取 props 中的 onUpdate:modelValue 属性对应的函数，赋值给 el.\_assign 属性
   3. 最后通过 addEventListener 来监听 input 标签的事件，它会根据是否配置 lazy 这个修饰符来决定监听 input 还是 change 事件
   4. 接着看这个事件监听函数，当用户手动输入一些数据触发事件的时候，会执行函数，并通过 el.value 获取 input 标签新的值，然后调用 el.\_assign 方法更新数据，这就是 DOM 到数据的流动
      至此，我们就实现了数据的双向绑定

3. 额外:通过 compositionstart 和 end 来进行输入法处理
