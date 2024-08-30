## Event Loop

在我们学习 nextTick 之前需要先了解 Event Loop 事件循环机制

先执行同步任务，再执行异步任务
先执行宏任务，再执行微任务
异步任务

1. 宏任务
   script(整体代码)、setTimeout、setInterval、UI 交互事件、postMessage、Ajax
2. 微任务
   Promise.then catch finally、MutaionObserver、process.nextTick(Node.js 环境)

```js
async function Prom() {
  console.log('Y')
  await Promise.resolve()
  console.log('x')
}
// 第一个 setTimeout 任务
setTimeout(() => {
  console.log(1)
  Promise.resolve().then(() => {
    console.log(2)
  })
}, 0)
// 第二个 setTimeout 任务
setTimeout(() => {
  console.log(3)
  Promise.resolve().then(() => {
    console.log(4)
  })
}, 0)
// 一系列 Promise.then 回调
Promise.resolve().then(() => {
  console.log(5)
})
Promise.resolve().then(() => {
  console.log(6)
})
Promise.resolve().then(() => {
  console.log(7)
})
Promise.resolve().then(() => {
  console.log(8)
})
Prom()
console.log(0)
```

所有的同步任务都是在主进程执行的形成一个执行栈，主线程之外，还存在一个"任务队列"，异步任务执行队列中先执行宏任务，然后清空当次宏任务中的所有微任务，然后进行下一个 tick 如此形成循环。
