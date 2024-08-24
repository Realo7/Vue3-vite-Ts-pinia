## provide/inject
### provide
在祖先节点注册provide，保存数据
他的子孙节点全都能通过inject读到provide的数据
祖先节点使用provide
<!--  -->
```ts
import { provide, ref } from 'vue'
let flag = ref<number>(1)
provide('flag', flag)

```


### inject
子组件接受
```ts
import { inject } from 'vue'
let flag = inject('flag')

const flag = inject<Ref<number>>('flag', ref(1)) // 第二个参数是默认值
```


provide多个参数

1. 方式1
```ts
provide('key1', value1);
provide('key2', value2);
provide('key3', value3);
```
2. 方式2
```ts
const data = {
  value1: 'data1',
  value2: 123,
  value3: { key: 'value' },
};

provide('dataObject', data);
```

## 源码思路
从当前组件实例读取provides
实例继承父类的provides对象
如果当前组件有自己的provide，则使用父组件的provides对象作为原型来创建自己的provides对象 //object.create(provides)
在新的对象中添加自己的provide的值

在inject操作中查询原型链，通过key来取值