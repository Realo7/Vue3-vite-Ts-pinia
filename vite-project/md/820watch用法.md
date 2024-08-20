watch 需要侦听特定的数据源，并在单独的回调函数中执行副作用
watch 第一个参数监听源
watch 第二个参数回调函数 cb（newVal,oldVal）
watch 第三个参数一个 options 配置项是一个对象
{
immediate:true //是否立即调用一次
deep:true //是否开启深度监听
}

### 监听 Ref

```ts
import { ref, watch } from 'vue'

let message = ref({
  nav: {
    bar: {
      name: '',
    },
  },
})
watch(
  message,
  (newVal, oldVal) => {
    console.log('新的值----', newVal)
    console.log('旧的值----', oldVal)
  },
  {
    immediate: true,
    deep: true,
  }
)
```

监听多个 ref 值，第一个参数是数组

```ts
let message = ref('')
let message2 = ref('')
watch([message, message2], (newVal, oldVal) => {
  console.log('新的值----', newVal)
  console.log('旧的值----', oldVal)
})
```

watch 监听 ref 定义的多层级的 object 时,可以监听到改变，但是无法查看到 newval，，应该用 reactive 定义多层级对象

### 监听 Reactive

```ts
watch(message, (newVal, oldVal) => {
  console.log('新的值----', newVal)
  console.log('旧的值----', oldVal)
})
```

### 监听 reactive 单一值

```ts
import { ref, watch, reactive } from 'vue'

let message = reactive({
  name: '',
  name2: '',
})

watch(
  () => message.name,
  (newVal, oldVal) => {
    console.log('新的值----', newVal)
    console.log('旧的值----', oldVal)
  }
)
```
