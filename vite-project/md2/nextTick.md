## nextTick

await 下面的代码如果没有特殊说明,都是异步的，都要等 await 执行完才执行
2 种写法

1. 回调函数模式
   nextTick(() => {})

2. await nextTick()
   <!-- 推荐 -->
   await nextTick()

vue 更新 dom 是异步的，更新数据是同步的
当操作 DOM 时发现数据读的是上次的，就要使用 nextTick()

https://xiaoman.blog.csdn.net/article/details/125237755
nextTick
// 1.处理用户的事件，就是 event 例如 click，input change 等。

// 2.执行定时器任务

// 3.执行 requestAnimationFrame

// 4.执行 dom 的回流与重绘

// 5.计算更新图层的绘制指令

// 6.绘制指令合并主线程 如果有空余时间会执行 requestidlecallback
