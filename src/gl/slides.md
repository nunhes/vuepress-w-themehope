---
title: Pasafotos
icon: slides
layout: Slide
---

<!-- markdownlint-disable MD024 MD033 MD051 -->

@slidestart

<!-- .slide: data-transition="slide" -->

## Demo de pasafotos

<!-- .element: class="r-fit-text" -->

Unha demostración sinxela de diapositivas e consellos útiles.

<!-- .element: class="r-fit-text" -->

> de Mr.Hope. Desprácese coa roda do rato ata a seguinte diapositiva

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## Crear diapositivas

<!-- .element: class="r-fit-text" -->

[👇](#/1/1)

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## Marcando Slides
<!-- .element: class="r-fit-text" -->

Usa `---` para marcar horizontalmente as pantallas

<!-- .element: class="fragment fade-in" -->

Usa `--` para separar slides verticais nunha slide horizontal.

<!-- .element: class="fragment fade-in" -->

Usa `<!-- .slide: ... -->` para engadir atributos a pantalla

<!-- .element: class="fragment fade-in" -->

Usa `<!-- .element: ... -->` para engadir atributos ao elemento html previo

<!-- .element: class="fragment fade-in" -->

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## Markdown

<!-- .element: class="r-fit-text" -->

Podese empregar todo tipo de  Markdown aquí.

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-auto-animate -->

## Markdown

Xa sabes calquera tipo de  Markdown aquí.

### Isto é un H3

As headings se transformarán a maiúsculas automaticamente.

Here is paragraph with some **bold**, _italic_, ~~strike-through~~ text and a [link](https://mrhope.site), and it can auto break itself so you don’t need to worry the length.


--

<!-- .slide: data-auto-animate -->

## Markdown

Pódese empregar todo tipo de markdown aqui

A lista e `inline-block` por defecto

- item
- item2
- item3

1. ordeada 1
1. ordeada 2
1. ordeada 3

--

<!-- .slide: data-auto-animate -->

## Markdown

Pódese empregar todo tipo de markdown aqui

Os bloque de código obterán un resaltado se se activa o plugin `highlight`

```js
const a = 1;
```

--

<!-- .slide: data-auto-animate -->

## Markdown

Pódese empregar todo tipo de markdown aqui

Tamén pode escribir ecuacións matemáticas usando a sintaxe tex se activa o complemento `math`.

$$
J(\theta_0,\theta_1) = \sum_{i=0}
$$

--

<!-- .slide: data-auto-animate -->

## Markdown

Pódese empregar todo tipo de markdown aqui

⚠**Nota**: Non se admiten táboas, horas e outras sintaxes Markdown non estándar.

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## Maquetado

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-auto-animate  -->

## Maquetado

<!-- .element: class="r-fit-text" -->

👆 `r-fit-text` class 会让文字在不超出幻灯片范围的情况下尽可能大。

--

<!-- .slide: data-auto-animate  -->

## Maquetado

![Logo](/logo.svg)

<!-- .element: class="r-stretch" -->

👆 `r-stretch` class 帮助你控制注入图片或视频的大小，使它们填充满幻灯片垂直方向上的剩余空间。

--

<!-- .slide: data-auto-animate data-background-color="rgb(70, 70, 255)" -->

## Maquetado

### Background

你可以通过向特定幻灯片添加 `data-background` 属性自定义幻灯片背景.

---

<!-- .slide: data-auto-animate -->

## 动画片段

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-auto-animate -->

## 动画片段

<!-- .element: class="r-fit-text" -->

动画片段用于高亮或显隐幻灯片中的元素。

你需要在元素上添加 `fragment` 和动画 class。

--

<!-- .slide: data-auto-animate -->

## 动画片段

### 动画 class

- `fade-in`
<!-- .element: class="fragment fade-in" -->

- `fade-out`
<!-- .element: class="fragment fade-out" -->

- `fade-up`
<!-- .element: class="fragment fade-up" -->

<!-- list break -->

- `fade-down`
<!-- .element: class="fragment fade-down" -->

- `fade-left`
<!-- .element: class="fragment fade-left" -->

- `fade-right`
<!-- .element: class="fragment fade-right" -->

<!-- list break -->

- `fade-in-then-out`
<!-- .element: class="fragment fade-in-then-out" -->

- `fade-in-then-semi-out`
<!-- .element: class="fragment fade-in-then-semi-out" -->

--

<!-- .slide: data-auto-animate -->

## 动画片段

### 动画 class

- `grow`
<!-- .element: class="fragment grow" -->

- `shrink`
<!-- .element: class="fragment shrink" -->

- `strike`
<!-- .element: class="fragment strike" -->

<!-- list break -->

- `highlight-red`
<!-- .element: class="fragment highlight-red" -->

- `highlight-green`
<!-- .element: class="fragment highlight-green" -->

- `highlight-blue`
<!-- .element: class="fragment highlight-blue" -->

<!-- list break -->

- `highlight-current-red`
<!-- .element: class="fragment highlight-current-red" -->

- `highlight-current-green`
<!-- .element: class="fragment highlight-current-green" -->

- `highlight-current-blue`
<!-- .element: class="fragment highlight-current-blue" -->

--

<!-- .slide: data-auto-animate -->

## 动画片段

### 多个动画片段

你可以按照顺序包裹一个 HTML 元素使其拥有多个动画片段

<span class="fragment fade-in">
  <span class="fragment highlight-red">
    <span class="fragment fade-out">
      渐入 > 变红 > 渐出
    </span>
  </span>
</span>

--

<!-- .slide: data-auto-animate -->

## 动画片段

### 顺序

你可以使用 `data-fragment-index` 属性改变元素的动画顺序。

不同元素可以有相同的动画顺序。

- 最后显示
<!-- .element: class="fragment" data-fragment-index="3"-->

- 第二个显示
<!-- .element: class="fragment" data-fragment-index="2"-->

<!-- list break -->

- 第一个显示
<!-- .element: class="fragment" data-fragment-index="1"-->

- 第二个显示
<!-- .element: class="fragment" data-fragment-index="2"-->

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## 渐变

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 渐变

<!-- .element: class="r-fit-text" -->

Transition 可以通过配置中的 `transition` 选项全局设置，也可以通过在特定幻灯片添加 `data-transition` 属性局部设置.

可能的值:

- none
- fade
- slide

<!-- list break -->

- convex
- concave
- zoom

--

<!-- .slide: data-auto-animate -->

## 渐变

<!-- .element: class="r-fit-text" -->

### 过渡动画

你可以在相邻的幻灯片上添加 `data-auto-animate` 使相同的 HTML 元素产生过渡动画效果。

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

### 代码

通过启用 `highlight` 插件，你可以对代码块进行高亮。

你可以使用 `[a-b|c-d]` 语法来分布高亮特定行。

```js [1-2|3|4]
let a = 1;
let b = 2;
let c = (x) => 1 + 2 + x;
c(3);
```

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

### 预览模式

按下 `Esc` 或 `O` 即可在幻灯片获得焦点时进入预览模式。

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

### 全屏模式

按下 `F` 或 `F11` 即可在幻灯片获得焦点时进入全屏模式。

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

### 缩放

按下 `alt` (Linux 上使用 `ctrl`) 的同时点击幻灯片的任何元素，即可以向此元素进行放大。

再次点击即可缩小。

---

<!-- .element: class="r-fit-text" -->

## 结束

@slideend
