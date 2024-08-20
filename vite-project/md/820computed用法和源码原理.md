## computed 用法

1. 函数形式

```ts
import { computed, reactive, ref } from 'vue'
let price = ref(0) //$0

let m = computed<string>(() => {
  return `$` + price.value
})
price.value = 500
```

2. 对象形式

```ts
<template>
   <div>{{ mul }}</div>
   <div @click="mul = 100">click</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
let price = ref<number | string>(1)//$0
let mul = computed(
    {
   get: () => {
      return price.value
   },
   set: (value) => {
      price.value = 'set' + value
   }**
}
)
</script>

```

手写源码

```TS
import { effect } from './effect'

export const computed = (getter: Function) => {
    let _value = effect(getter, {
        scheduler: () => { _dirty = true }
    })
    let catchValue
    let _dirty = true
    class ComputedRefImpl {
        get value() {
            if (_dirty) {
                catchValue = _value()
                _dirty = false;
            }
            return catchValue
        }
    }

    return new ComputedRefImpl()
}
```
