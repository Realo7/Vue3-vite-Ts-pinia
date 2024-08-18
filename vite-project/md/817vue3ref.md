#### ref

ref 定义响应式对象
改变值 man.value = 'xm'

2. 读取 dom 元素
   <div ref="dom">我是dom</div>
   const dom=ref<HTMLDivElement>()  
<!-- log出 我是dom，有时用于读取dom，替代querrySelector -->

##### isRef 判断是否响应式对象

isRef(man)

#### shallowRef

shallowRef 是 Vue 3 中的一个响应式工具函数。
它创建一个*浅层响应式*的 ref 对象。这意味着只有对其值本身（而不是嵌套对象或数组的内部元素）的修改才会触发响应。
例如，如果 shallowRef 的值是一个对象 { name: 'John', age: 25 } ，那么修改这个对象的属性，如 ref.value.name = 'Jane' 不会触发响应式更新。但如果直接将 ref.value 重新赋值为另一个对象，如 ref.value = { name: 'Alice', age: 30 } ，则会触发响应式更新。
使用 shallowRef 可以在某些场景下提高性能，特别是当不需要深度监听对象或数组的内部变化时。

#### triggerRef

ref 底层更新的时候调用这个函数
triggerRef 方法用于强制触发对 shallowRef 的响应式更新。

#### customRef

用于创建自定义响应式引用的函数。
它允许您自定义如何追踪和触发响应式数据的更新
以下是一个简单的示例，展示如何创建一个 customRef 来实现防抖功能

```JS
import { customRef } from 'vue'

function debouncedRef(value, delay = 200) {
  let timer
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
// 在组件中使用
const debouncedValue = debouncedRef('initial value')
```
