## transition 动画组件

Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡:

- 条件渲染 (使用 v-if)
- 条件展示 (使用 v-show)
- 动态组件
- 组件根节点
  自定义 transition 过度效果，你需要对 transition 组件的 name 属性自定义。并在 css 中写入对应的样式
  https://xiaoman.blog.csdn.net/article/details/123000653

<!-- 动画样式 -->

npm install animate.css

<!-- js 动画库 -->

npm install gsap -s

```js
gsap.set()
gsap.to(el,{
  duration:1,
  x:100,
  y:100,
  rotate:360,
  scale:2,
  stagger:0.5
  onceComplete:()=>{}
})
```

### transition 生命周期 8 个

```
  @before-enter="beforeEnter"       //对应enter-from
  @enter="enter"                    //对应enter-active
  @after-enter="afterEnter"         //对应enter-to
  @enter-cancelled="enterCancelled" //显示过度打断
  @before-leave="beforeLeave"       //对应leave-from
  @leave="leave"                    //对应enter-active
  @after-leave="afterLeave"         //对应leave-to
  @leave-cancelled="leaveCancelled" //离开过度打断
```

### appera 属性

通过这个属性可以设置初始节点过度 就是页面加载完成就开始动画 对应三个状态

```js
<transition
  appear
  appear-active-class=""
  appear-from-class=""
  appear-to-class=""
>
  <div>Hello World</div>
</transition>
```

## 过度列表

<transition-group>
