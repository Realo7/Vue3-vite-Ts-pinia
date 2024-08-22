## keepAlive

```ts
     <template>
       <keep-alive>
         <component :is="currentComponent"></component>
       </keep-alive>
     </template>

     <script>
     import ComponentA from './ComponentA.vue';
     import ComponentB from './ComponentB.vue';

     export default {
       data() {
         return {
           currentComponent: ComponentA,
         };
       },
       methods: {
         switchComponent() {
           this.currentComponent =
             this.currentComponent === ComponentA? ComponentB : ComponentA;
         },
       },
     };
     </script>

```

### 生命周期钩子

被<keep-alive>包裹的组件会有两个额外的生命周期钩子：
_activated_ 和 _deactivated_
activated 在组件被激活时调用，即从缓存中获取或首次渲染时调用。
deactivated 在组件被停用时调用，即切换到其他组件时调用。

<!--  -->

初次进入时： onMounted> onActivated
退出后触发 deactivated
再次进入：
只会触发 onActivated
事件挂载的方法等，只执行一次的放在 onMounted 中；组件每次进去执行的方法放在 onActivated 中

### include 和 exclude 属性

<keep-alive>可以通过 include 和 exclude 属性来指定需要缓存的组件和不需要缓存的组件。

```ts
     <template>
       <keep-alive include="ComponentA,ComponentB">
         <component :is="currentComponent"></component>
       </keep-alive>
     </template>

     <script>
     import ComponentA from './ComponentA.vue';
     import ComponentB from './ComponentB.vue';
     import ComponentC from './ComponentC.vue';

     export default {
       data() {
         return {
           currentComponent: ComponentA,
         };
       },
       methods: {
         switchComponent() {
           this.currentComponent =
             this.currentComponent === ComponentA
              ? ComponentB
               : this.currentComponent === ComponentB
              ? ComponentC
               : ComponentA;
         },
       },
     };
     </script>
```

在这个例子中，<keep-alive>的 include 属性指定了只缓存 ComponentA 和 ComponentB 两个组件，当切换到 ComponentC 时，ComponentC 不会被缓存。

### keep-alive 源码讲解
