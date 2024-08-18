#### ref

ref 定义响应式对象
改变值 man.value = 'xm'

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
