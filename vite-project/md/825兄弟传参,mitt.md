1. mitt 现在推荐
在vue3中$on，$off 和 $once 实例方法已被移除，组件实例不再实现事件触发接口，因此大家熟悉的EventBus便无法使用了
对于这种情况我们可以使用Mitt库（其实就是我们视频中讲的发布订阅模式的设计）
npm install mitt -S 
<!-- 全局引入 -->
+  1. main.ts初始化
```js
import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
const Mit = mitt()
//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "vue" {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}
const app = createApp(App)

//Vue3挂载全局API
app.config.globalProperties.$Bus = Mit

app.mount('#app')
```

+ 2. 使用方法通过emit派发， on 方法添加事件，off 方法移除，clear 清空所有
```ts
// A组件派发（emit）
<template>
    <div>
        <h1>我是A</h1>
        <button @click="emit1">emit1</button>
        <button @click="emit2">emit2</button>
    </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance();
const emit1 = () => {
    instance?.proxy?.$Bus.emit('on-num', 100)
}
const emit2 = () => {
    instance?.proxy?.$Bus.emit('*****', 500)
}
</script>

<style>
</style>
```

```ts
// B组件监听
<template>
    <div>
        <h1>我是B</h1>
    </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()
instance?.proxy?.$Bus.on('on-num', (num) => {
    console.log(num,'===========>B')
})
</script>

```

```js
// 监听所有事件（ on("*") ）
instance?.proxy?.$Bus.on('*',(type,num)=>{
    console.log(type,num,'===========>B')
})
// 移除监听事件（off）
const Fn = (num: any) => {
    console.log(num, '===========>B')
}
instance?.proxy?.$Bus.on('on-num',Fn)//listen
instance?.proxy?.$Bus.off('on-num',Fn)//unListen
// 清空所有监听（clear）
instance?.proxy?.$Bus.all.clear()
```

<!--  -->
2. 传统方式
A传父 defineEmit，父传B defineProps
3. eventBus 原理是js的发布订阅
我们在Vue2 可以使用$emit 传递 $on监听 emit传递过来的事件
```ts
// 发布订阅模式
class bookStore {
    bookNameArr = {}
    on(subscribeName, cb) {
        console.log(this.bookNameArr[subscribeName]);

        if (!this.bookNameArr[subscribeName]) {
            this.bookNameArr[subscribeName] = [cb]

        }else{
            this.bookNameArr[subscribeName].push(cb)
        }
    }
    trigger(subscribeName) {
        const cbs = this.bookNameArr[subscribeName];
        if (cbs) {
            cbs.forEach(cb => cb());
        }
    }
    remove(subscribeName) {

    }

}
const bookstoreBoss = new bookStore()
bookstoreBoss.on('泰戈尔',()=>{
    console.log('1号来买书');
})
bookstoreBoss.on('泰戈尔',()=>{
    console.log('2号来买书');
})

bookstoreBoss.trigger('泰戈尔')
```