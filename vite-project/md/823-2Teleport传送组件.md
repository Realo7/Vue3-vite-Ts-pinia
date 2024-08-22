## Teleport 传送组件

Teleport Vue 3.0 新特性之一
Teleport 是一种能够将我们的模板渲染至指定 DOM 节点，不受父级 style、v-show 等属性影响，但 data、prop 数据依旧能够共用的技术；类似于 React 的 Portal。
**主要解决的问题** 因为 Teleport 节点挂载在其他指定的 DOM 节点下，完全不受父级 style 样式影响
vh 窗口区域的百分之多少
会随着窗口变化而变化

### 使用方法

通过 to 属性 插入指定元素位置 to="body" 便可以将 Teleport 内容传送到指定位置

```ts
<Teleport to="body">
  <Loading></Loading>
</Teleport>
```

也可以自定义传送位置 支持 class id 等 选择器

```ts
    <div id="app"></div>
    <div class="modal"></div>
```

### 动态控制 teleport

使用 disabled 设置为 true 则 to 属性不生效 false 则生效

```ts
    <teleport :disabled="true" to='body'>
      <A></A>
    </teleport>
```

### 源码解析

1. 在创建 teleport 组件的时候会经过 patch 方法 然后调用 teleport 的 process 方法
   主要是创建 更新 和删除的逻辑
2. 通过 resolveTarget 函数 获取了 props.to 和 querySelect 获取 了目标元素
3. 然后判断是否有 disabled 如果有则 to 属性不生效 否则 挂载新的位置
4. 新节点 disabled 为 true 旧节点 disabled false 就把子节点移动回容器
5. 如果新节点 disabled 为 false 旧节点为 true 就把子节点移动到目标元素
6. 遍历 teleport 子节点进行 unmount 方法去移除
