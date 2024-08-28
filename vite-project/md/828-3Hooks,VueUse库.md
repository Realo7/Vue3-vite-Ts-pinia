## vue 内置的 2 个自定义钩子

自定义钩子格式
函数名以 use 开头，如 useMethods()

逻辑复用、分离关注点和提高代码的可测试性
useSlots() 和 useAttrs()

在 script setup 使用 slots 和 attrs 的情况应该是相对来说较为罕见的，因为可以在模板中直接通过 $slots 和 $attrs 来访问它们。在你的确需要使用它们的罕见场景中，可以分别用 useSlots 和 useAttrs 两个辅助函数：

```ts
import { useSlots, useAttrs } from 'vue'
const slots = useSlots()
const attrs = useAttrs()
```

useSlots 和 useAttrs 是真实的运行时函数，它的返回与 setupContext.slots 和 setupContext.attrs 等价。它们同样也能在普通的组合式 API 中使用。

## 自定义 hooks/钩子

和 vue2 的 mixin 差不多
mixin 是可以定义变量和函数
hooks 是纯函数
都是抽离公共函数来共用
export default {
method1,method2
}来导出对应的方法，然后在需要的地方导入即可

<!-- 自定义指令 + hooks 双管齐下  -->

实现一个监听元素变化的 hook

主要会用到一个新的 API resizeObserver 兼容性一般 可以做 polyfill

但是他可以监听元素的变化 执行回调函数 返回 contentRect 里面有变化之后的宽高。

```js
import { App, defineComponent, onMounted } from 'vue'

function useResize(
  el: HTMLElement,
  callback: (cr: DOMRectReadOnly, resize: ResizeObserver) => void
) {
  let resize: ResizeObserver
  resize = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const cr = entry.contentRect
      callback(cr, resize)
    }
  })
  resize.observe(el)
}

const install = (app: App) => {
  app.directive('resize', {
    mounted(el, binding) {
      useResize(el, binding.value)
    },
  })
}

useResize.install = install

export default useResize
```
