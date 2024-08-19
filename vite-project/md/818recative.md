### ref,reactive

ref 支持所有类型，reactive 支持引用类型
ref 取值，赋值都需要加.value,reactive 不需要.value
reactive 不能直接赋值，否则破坏响应式对象结构
解决方案
数组：

1. 使用 push 加解构赋值
2. 使用对象，把 arr 当成对象一个属性，直接赋值
3. 删除原来数组内容，重新填充 list.splice(0, list.length, ...res)

```ts
let list: Array<string> = reactive<Array<string>>(['a', 'b', 'c'])
const add = () => {
  setTimeout(() => {
    let res = ['111', '222', '333', '444', '555']
    list.splice(0, list.length, ...res)
  }, 300)
}
```

### readonly

let read = readonly(list)
如果给 list 赋值，那么 readonly 对象会受影响
工作使用较少

### shadowReactive

同样浅层的
const obj = shallowReactive({ prop: { name: 'shadow' }, age: 112 })
obj.age 修改值可以正确追踪渲染，但是 obj.prop.name 不能追踪渲染，但是控制台打印还是对的
深层数据的更新需要重新渲染，浅层不会，用来节省能源
