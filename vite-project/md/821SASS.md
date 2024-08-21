# Sass

## 父子层级

```css
a {
  &: hover;
}
/* 编译为 */
a:hover {
}
```

## 定义变量

```css
#main {
  $width: 5em;
  /* width: $width; 后边就可以直接用$width */
}
```

## 混入 @minin

### 复用的代码块

用法 1.当作可以复用的代码块
用法 2.当函数带参使用

1. 定义@mixin
2. 使用@mixin @include

```css
@mixin bordered {
  border: 1px solid black;
}

/* 使用@include关键字后跟@mixin的名称 */
.element {
  @include bordered;
}
```

### 带参数的@mixin

```css
@mixin bordered($color, $width) {
  border: $width solid $color;
}
/*  */
.element {
  @include bordered(red, 2px);
}
```

@mixin 可以接受参数，参数在@mixin 定义时用括号括起来，并在引用@mixin 时传递参数值。

## 在选择器中使用变量

插值语句
#{}

```css
$id: foo;
$attr: border;
p.#{$id} {
  #{$attr}-color: blue;
}
/* 编译之后 */
p.foo {
  border-color: blue;
}
```

## 子选择器跳出父类

跳出嵌套

```css
.parent {
  @at-root .child {
  }
}
/* 编译之后 */
.parent {
}
```

```css
$namespace: 'hur' !default;
// 使用!default表示如果这个变量在之前没有被定义过，那么就使用这个默认值。如果在其他地方已经定义了$namespace变量，那么这个默认值就会被覆盖。
$block-sel: '-' !default;
$elem_sel: '__' !default;
$mod_sel: '--' !default;

@mixin b($block) {
  $B: #{$namespace + $block-sel + $block}; //hur-$block
  .#{$B} {
    @content;
  }
}

.xm-block__inner {
}
@mixin e($el) {
  $selector: &; //获取父级选择器名称
  @at-root {
    #{$selector + $elem_sel + $el} {
      @content;
    }
  }
}
@mixin m($m) {
  $selector: &; //获取父级选择器名称
  @at-root {
    #{$selector + $mod_sel + $m} {
      @content;
    }
  }
}
/* 用 */
hur-'test'-'inner';
hur-test__'inner';
@include b(test){
color:red;
@include e(inner){}
@include m(inner){}
}
```
