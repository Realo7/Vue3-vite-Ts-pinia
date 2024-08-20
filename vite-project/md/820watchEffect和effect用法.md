## watchEffect

const stop=watchEffect()
watchEffect 返回一个函数，用来停止监听，如上的 stop 直接执行就可以停止监听

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

### oninvalidate

```ts
let message = ref<string>('')
let message2 = ref<string>('')
watchEffect((oninvalidate) => {
  //console.log('message', message.value);
  console.log('message2', message2.value)
  oninvalidate(() => {
    // 每次触发watchEffect之前会执行这里的回调函数
    // 有时用来在这里清理定时器，防止多次触发
    // 或者在这做防抖
  })
})
```

watchEffect 第一个参数接收一个函数，函数内会自动追踪依赖的响应式值的变化，当依赖的响应式值变化时，函数内的代码会执行。

### 第二个参数

配置项

```ts
watchEffect(
  (oninvalidate) => {
    //console.log('message', message.value);
    oninvalidate(() => {})
    console.log('message2', message2.value)
  },
  //第二个配置项
  {
    flush: 'post',
    onTrigger() {},
  }
)
```

#### flush

1. pre 组件更新前执行
2. sync 强制效果始终同步触发
3. post 组件更新后执行

其值可以是"pre"、"post"或"sync"，也可以是一个带有 track 和 trigger 方法的对象，同时还可以有一个 onTrigger 函数。

## watchEffect 和 computed 区别

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
