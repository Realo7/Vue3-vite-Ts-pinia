## 样式穿透

在 css 标记 scope 时
<el-input class="ipt"></>
这样转化成 .ipt .el-input-inner[data-v-hash]
这样的 class 不会直接生效
组件内部包含有其他组件，只会给其他组件的最外层标签加上当前组件的 data 属性，所以样式无法穿透到其他组件

因为 vue 中的 scoped 通过在 DOM 结构以及 css 样式上加唯一不重复的标记:data-v-hash 的方式，以保证唯一（而这个工作是由过 PostCSS 转译实现的），达到样式私有化模块化的目的。
scoped 三条渲染规则

1. 给 HTML 的 DOM 节点加一个不重复 data 属性(形如：data-v-123)来表示他的唯一性
2. 在每句 css 选择器的末尾（编译后的生成的 css 语句）加一个当前组件的 data 属性选择器（如[data-v-123]）来私有化样式
3. 如果组件内部包含有其他组件，只会给其他组件的最外层标签加上当前组件的 data 属性

vue 提供了：deep(选择器)
作用就是用来改变 属性选择器的位置

```css
ipt {
  width: 100px;
  :deep(el-input-inner) ;
}
```

这样就变成了.ipt[data-v-hash] .el-input-inner

## 源码解析

目录 compileStyle.ts
解析 style 部分
看是否添加 scoped 属性
通过 postCSS 转换 AST 语法树

## 想改插槽的 css，插槽选择器

放在子组件中
:slotted([slot='header'])
:slotted(.ipt)

```html
<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>

<style>
  :slotted([slot='header']) {
    font-weight: bold;
  }
</style>
```

## 全局选择器

在 scope 中之前想全局改样式需要新加一个不含 scope 的标签
现在只要用:global(div){color:red} 全局覆盖

## 动态 CSS

```css
const red = ref('red');
const style=reactive({color:red})

.div {
  color: v-bind(red);
  color: v-bind('style.color');
  /* 加引号防止报错 */
}
```

## css module

使用场合 tsx：return(<div class={$style.div}>小满是个弟弟</div>)
style module 标签会被编译为 CSS Modules 并且将生成的 CSS 类作为 $style 对象的键暴露给组件

```html
<template>
  <div :class="$style.red">小满是个弟弟</div>
</template>

<style module>
  .red {
    color: red;
    font-size: 20px;
  }
</style>
```

多个可用数组:class="[$style.red, $style.green]"
自定义注入名称 module="zs"

```html
<template>
  <div :class="[zs.red,zs.border]">小满是个弟弟</div>
</template>

<style module="zs">
  .red {
    color: red;
    font-size: 20px;
  }
  .border {
    border: 1px solid #ccc;
  }
</style>
```

额外
与组合式 API 一同使用

```html
注入的类可以通过 useCssModule API 在 setup() 和 <script setup> 中使用。对于使用了自定义注入名称的 <style module> 模块，useCssModule 接收一个对应的 module attribute 值作为第一个参数
import { useCssModule } from 'vue'
const css = useCssModule('zs')
console.log(css.red)
```
