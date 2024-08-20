watchEffect 和 computed 区别

1. watchEffect 自动追踪响应式值的修改，computed 只追踪依赖的值的修改
2. computed 源码是依赖 effect 函数来实现的

## effect

```ts
import { reactive, effect } from 'vue'

const state = reactive({
  count: 0,
})

const stop = effect(() => {
  // 会自动追踪state.count的变化，并且执行打印操作
  console.log(state.count)
  return () => {
    console.log('清理操作')
  }
})

state.count++
stop()
```

## watchEffect

```ts
import { reactive, watchEffect } from 'vue'

const state = reactive({
  count: 0,
})

const stop = watchEffect(() => {
  console.log(state.count)
})

state.count++
stop()
```
