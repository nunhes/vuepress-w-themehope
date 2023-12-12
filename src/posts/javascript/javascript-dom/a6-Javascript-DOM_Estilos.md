---
title: Javascript DOM - Estilos
date: 2023-11-06
description: Uso de javascript na arbore do modelo de obxecto do documento
---

# Estilo JavaScript

**Resumo** : neste tutorial, aprenderás a usar a propiedade style para manipular o estilo en liña dos elementos HTML.

## Establecer estilos en liña

Para establecer o estilo en liña dun elemento, usa a `style`propiedade dese elemento:

```
element.style
```

A `style`propiedade devolve o obxecto de só lectura `CSSStyleDeclaration`que contén unha lista de propiedades CSS. Por exemplo, para establecer a cor dun elemento como `red`, usa o seguinte código:

```
element.style.color = 'red';
```

Se a propiedade CSS contén guións ( `-`), por exemplo, `-webkit-text-stroke`pode usar a notación tipo matriz ( `[]`) para acceder á propiedade:

```
element.style.['-webkit-text-stock'] = 'unset';
```

A seguinte táboa mostra as propiedades CSS comúns:

| **CSS**                 | **JavaScript**                     |
| :---------------------- | :--------------------------------- |
| fondo                   | fondo                              |
| anexo-fondo             | fondoAnexo                         |
| cor de fondo            | cor de fondo                       |
| imaxe de fondo          | Imaxe de fondo                     |
| posición de fondo       | posición de fondo                  |
| repetición de fondo     | fondoRepetir                       |
| fronteira               | fronteira                          |
| borde-inferior          | bordeAbaixo                        |
| cor do bordo inferior   | borderBottomColor                  |
| estilo borde inferior   | borderBottomStyle                  |
| bordo-ancho-inferior    | borderBottomWidth                  |
| cor-borde               | borderColor                        |
| fronteira-esquerda      | bordoEsquerda                      |
| bordo-cor-esquerda      | borderLeftColor                    |
| estilo borde esquerdo   | borderLeftStyle                    |
| bordo-esquerdo-ancho    | borderLeftWidth                    |
| fronteira-dereita       | fronteiraDereita                   |
| bordo-cor-dereita       | borderRightColor                   |
| borde-dereita-estilo    | borderRightStyle                   |
| bordo-dereita-ancho     | borderRightWidth                   |
| estilo borde            | borderStyle                        |
| borde superior          | borderTop                          |
| bordo-cor-superior      | borderTopColor                     |
| estilo borde superior   | borderTopStyle                     |
| bordo-superior-ancho    | borderTopWidth                     |
| ancho de bordo          | borderWidth                        |
| claro                   | claro                              |
| clip                    | clip                               |
| cor                     | cor                                |
| cursor                  | cursor                             |
| visualización           | visualización                      |
| filtro                  | filtro                             |
| flotar                  | cssFloat                           |
| tipo de letra           | tipo de letra                      |
| familia-tipo            | FontFamily                         |
| tamaño de letra         | tamaño de letra                    |
| variante da fonte       | FontVariant                        |
| peso de letra           | FontWeight                         |
| altura                  | altura                             |
| esquerda                | esquerda                           |
| espazamento de letras   | espazamento de letras              |
| altura da liña          | Altura da liña                     |
| estilo de lista         | ListStyle                          |
| imaxe-estilo-lista      | listStyleImage                     |
| posición-estilo-lista   | listStylePosition                  |
| tipo de estilo de lista | listStyleType                      |
| marxe                   | marxe                              |
| marxe-inferior          | marxeAbaixo                        |
| marxe esquerda          | marxe esquerda                     |
| marxe-dereita           | marxeDereita                       |
| marxe-top               | marxeTop                           |
| desbordamento           | desbordamento                      |
| acolchado               | acolchado                          |
| fondo acolchado         | acolchadoAbaixo                    |
| recheo-esquerda         | recheoEsquerda                     |
| recheo-dereita          | acolchadoDereita                   |
| acolchado superior      | paddingTop                         |
| salto de páxina despois | pageBreakAfter                     |
| salto de páxina antes   | pageBreakBefore                    |
| posición                | posición                           |
| trazo-dasharray         | accidente cerebrovascularDasharray |
| trazo-desplazamento     | strokeDashoffset                   |
| ancho de trazo          | strokeWidth                        |
| aliñación de texto      | textAlign                          |
| texto-decoración        | TextoDecoración                    |
| sangría de texto        | textindent                         |
| texto-transformación    | TextTransform                      |
| arriba                  | arriba                             |
| aliñamento vertical     | Aliñamento vertical                |
| visibilidade            | visibilidade                       |
| ancho                   | ancho                              |
| índice z                | zIndex                             |

Para anular completamente o estilo en liña existente, establece a `cssText`propiedade do `style`obxecto. Por exemplo:

```
element.style.cssText = 'color:red;background-color:yellow';

```

Ou podes usar o `setAttribute()`método:

```
element.setAttribute('style','color:red;background-color:yellow');
```

Unha vez configurado o estilo en liña, pode modificar unha ou máis propiedades CSS:

```
element.style.color = 'blue';
```

Se non queres sobrescribir completamente as propiedades CSS existentes, podes concatenar a nova propiedade CSS como `cssText`segue:

```
element.style.cssText += 'color:red;background-color:yellow';
```

Neste caso, o `+= `operador engade a nova cadea de estilo á existente.

A seguinte `css()`función auxiliar úsase para definir varios estilos para un elemento a partir dun obxecto de pares clave-valor:

```
function css(e, styles) {
    for (const property in styles)
        e.style[property] = styles[property];
}
```

Podes usar esta `css()`función para definir varios estilos para un elemento co id `#content`do seguinte xeito:

```
let content = document.querySelector('#content');
css(content, { background: 'yellow', border: 'solid 1px red'});
```

O seguinte exemplo usa o `style`obxecto para establecer as propiedades CSS dun parágrafo co id `content`:

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JS Style Demo</title>
</head>
<body>
    <p id="content">JavaScript Setting Style Demo!</p>
    <script>
        let p = document.querySelector('#content');
        p.style.color = 'red';
        p.style.fontWeight = 'bold';
    </script>
</body>
</html>
```

Cómo funciona:

- En primeiro lugar, selecciona o elemento de parágrafo cuxo ID é `content`usando o `querySelector()`método.
- A continuación, establece as propiedades da cor e do peso da fonte do parágrafo configurando as propiedades `color`e `fontWeight`do `style`obxecto.

## Obtención de estilos en liña

A `style`propiedade devolve os estilos en liña dun elemento. Non é moi útil na práctica porque a `style`propiedade non devolve as regras que veñen doutros lugares, por exemplo, estilos dunha folla de estilo externa.

Para aplicar todos os estilos a un elemento, debes usar o `window.getComputedStyle()`método.

## Resumo

- Use as propiedades do `element.style`obxecto para establecer as propiedades CSS en liña para o elemento HTML.

# getComputedStyle

**Resumo** : neste tutorial, aprenderás a usar JavaScript `getComputedStyle()`para obter as propiedades CSS calculadas dun elemento.

## Introdución ao `getComputedStyle()`método JavaScript

É `getComputedStyle()`un método do `window`obxecto, que devolve un obxecto que contén o estilo calculado e un elemento:

```
let style = window.getComputedStyle(element [,pseudoElement]);

```

### Parámetros

O `getComputedStyle()`método acepta dous argumentos:

- `element`é o elemento que quere devolver os estilos calculados. Se pasa outro tipo de nodo, por exemplo, nodo de texto, o método xerará un erro.
- `pseudoElement`especifica o pseudoelemento que debe coincidir. Por defecto é `null`.

Por exemplo, se queres obter o valor calculado de todas as propiedades CSS dunha ligazón co estado de hover, pasa os seguintes argumentos ao `getComputedStyle()`método:

```
let link = document.querySelector('a');
let style = getComputedStyle(link,':hover');
console.log(style);

```

Teña en conta que `window`é o obxecto global, polo tanto, pode omitilo ao chamar ao `getComputedStyle()`método get.

### Valor de retorno

O `getComputedStyle()`método devolve un obxecto de estilo en directo que é unha instancia do `CSSStyleDeclaration`obxecto. O estilo actualízase automaticamente cando se cambian os estilos do elemento.

## `getComputedStyle()`Exemplos de JavaScript

Poñamos algúns exemplos de uso do `getComputedStyle()`método.

### 1) `getComputedStyle()`Exemplo sinxelo

Considere o seguinte exemplo:

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>JS getComputedStyle() Demo</title>
    <style type="text/css">
        .message {
            background-color: #fff3d4;
            border: solid 1px #f6b73c;
            padding: 20px;
            color: black;
        }
    </style>
</head>
<body>

    <p class="message" style="color:red">
        This is a JS getComputedStyle() Demo!
    </p>

    <script>
        let message = document.querySelector('.message');
        let style = getComputedStyle(message);

        console.log('color:', style.color);
        console.log('background color:', style.backgroundColor);
    </script>
</body>
</html>

```

Teña en conta que, para efectos de demostración, mesturamos todos os CSS e JavaScript con HTML. Na práctica, debes separalos en diferentes ficheiros.

Saída:

```
color: rgb(255, 0, 0)
background color: rgb(255, 243, 212)
```

Cómo funciona:

- En primeiro lugar, define as regras CSS para a `message`clase na sección de cabeceira do ficheiro HTML. A cor do texto é negra.
- En segundo lugar, declare un elemento de parágrafo cuxa cor de texto sexa vermella tal e como se define no estilo en liña. Esta regra anulará a definida na sección de cabeceira.
- En terceiro lugar, use o `getComputedStyle()`método para obter todo o estilo calculado do elemento de parágrafo. A propiedade da cor é vermella como se indica na xanela da consola ( `rgb(255, 0, 0)`) como se esperaba.

### 2) O `getComputedStyle()`exemplo de pseudo-elementos

O seguinte exemplo usa o `getComputedStyle()`método para extraer información de estilo dun pseudoelemento:

```
<html>
<head>
    <title>JavaScript getComputedStyle() Demo</title>
    <style>
        body {
            font: arial, sans-serif;
            font-size: 1em;
            line-height: 1.6;
        }

        p::first-letter {
            font-size: 1.5em;
            font-weight: normal
        }
    </style>
</head>
<body>
    <p id='main'>JavaScript getComputedStyle() Demo for pseudo-elements</p>
    <script>
        let p = document.getElementById('main');
        let style = getComputedStyle(p, '::first-letter');
        console.log(style.fontSize);
    </script>
</body>
</html>
```

Saída:

```
24px
```

Cómo funciona:

- En primeiro lugar, define regras CSS para a primeira letra de calquera elemento de parágrafo na sección de cabeceira do ficheiro HTML.
- A continuación, use o `getComputedStyle()`método para extraer o estilo calculado do pseudoelemento. O tamaño da fonte da primeira letra do parágrafo co identificador é de 24 píxeles.

## Resumo

- É `getComputedStyle()`un método do `window`obxecto.
- O `getComputedStyle()`método devolve un obxecto que contén o estilo calculado dun elemento.

# Nome da clase JavaScript

**Resumo** : neste tutorial, aprenderás a usar a `className`propiedade JavaScript para manipular as clases CSS dun elemento.

## Introdución ao className JavaScript

É `className`a propiedade dun elemento que devolve unha lista separada por espazos de clases CSS do elemento como cadea:

```
element.className
```

Supoña que tes o seguinte `ul`elemento:

```
<ul id="menu" class="vertical main">
   <li>Homepage</li>
   <li>Services</li>
   <li>About</li>
   <li>Contact</li>
</ul>
```

O seguinte mostra as clases do `ul`elemento na xanela da consola:

```
let menu = document.querySelector('#menu');
console.log(menu.className);
```

Saída:

```
vertical main
```

Para engadir unha nova clase a un elemento mediante a `className`propiedade, pode [concatenar](https://www.javascripttutorial.net/javascript-string-concat/) o nome da clase existente cun novo:

```
element.className += newClassName;
```

O `+=`operador **concatena** `newClassName` a lista de clases existente do elemento. Polo tanto, cómpre prefixar o nome da nova clase cun espazo como este:

```
let menu = document.querySelector('#menu');
menu.className += ' new';
console.log(menu.className);
```

Saída:

```
'vertical main new'
```

Na práctica, usarás `classList`para engadir unha nova clase ás clases existentes dun elemento:

```
let menu = document.querySelector('#menu');
menu.classList.add('new');
console.log(menu.className);
```

Saída:

```
'vertical main new'
```

Para sobrescribir completamente todas as clases dun elemento, usa un operador de asignación sinxelo. Por exemplo:

```
element.className = "class1 class2";
```

Para obter unha lista completa de clases dun elemento, só precisa acceder á `className`propiedade:

```
let classes = element.className;
```

Como `class`é unha palabra clave en JavaScript, `className`úsase o nome en lugar de `class`.

Tamén `class`é un atributo HTML:

```
<div id="note" class="info yellow-bg red-text">JS className</div>
```

while `className`é unha propiedade DOM do elemento:

```
let note = document.querySelector('#note');
console.log(note.className);
```

Saída:

```
info yellow-bg red-text
```

Un elemento ten outra propiedade que che axuda a manipular mellor as súas clases CSS chamada `classList`.

## Resumo

- `className`devolve unha lista separada por espazos de clases dun elemento como cadea.

# Lista de clases de JavaScript

**Resumo** : neste tutorial, aprenderás a usar a `classList`propiedade JavaScript para traballar coas clases CSS dun elemento.

## `classList`Introdución á propiedade JavaScript

É `classList`unha propiedade de só lectura dun elemento que devolve unha colección activa de clases CSS:

```
const classes = element.classList;
```

É `classList`un `DOMTokenList`obxecto que representa o contido do atributo de clase do elemento.

Aínda que `classList`é de só lectura, podes manipular as clases que contén usando varios métodos.

## `classList`Exemplos de JavaScript

Poñamos algúns exemplos de manipulación de clases CSS do elemento a través da `classList`interface de '.

### 1) Obter as clases CSS dun elemento

Supoña que tes un `div`elemento con dúas clases: `main`e `red`.

```
<div id="content" class="main red">JavaScript classList</div>

```

O seguinte código mostra a lista de clases do `div`elemento na xanela da consola:

```
let div = document.querySelector('#content');
for (let cssClass of div.classList) {
    console.log(cssClass);
}
```

Saída:

```
main
red
```

Cómo funciona:

- En primeiro lugar, selecciona o `div`elemento co id `content`usando o `querySelector()`método.
- A continuación, itera sobre os elementos do `classList`e móstrase as clases na xanela da consola.

### 2) Engade unha ou máis clases á lista de clases dun elemento

Para engadir unha ou máis clases CSS á lista de clases dun elemento, use o `add()`método do `classList`.

Por exemplo, o seguinte código engade a `info`clase á lista de clases do `div`elemento co id `content`:

```
let div = document.querySelector('#content');
div.classList.add('info');

```

O seguinte exemplo engade varias clases CSS á lista de clases dun elemento:

```
let div = document.querySelector('#content');
div.classList.add('info','visible','block');

```

### 3) Eliminar as clases de elementos

Para eliminar unha clase CSS da lista de clases dun elemento, usa o `remove()`método:

```
let div = document.querySelector('#content');
div.classList.remove('visible');
```

Do mesmo xeito que o `add()`método, podes eliminar varias clases unha vez:

```
let div = document.querySelector('#content');
div.classList.remove('block','red');
```

### 4) Substitúe unha clase dun elemento

Para substituír unha clase CSS existente por outra nova, usa o `replace()`método:

```
let div = document.querySelector('#content');
div.classList.replace('info','warning');
```

### 5) Comproba se un elemento ten unha clase especificada

Para comprobar se o elemento ten unha clase especificada, usa o `contains()`método:

```
let div = document.querySelector('#content');
div.classList.contains('warning'); // true
```

O `contains()`método devolve `true`se `classList`contén unha clase especificada; en caso contrario `false`.

### 6) Cambiar unha clase

Se a lista de clases dun elemento contén un nome de clase especificado, o método toggle() elimínao. Se a lista de clases non contén o nome da clase, o método toggle() engádeo á lista de clases.

O seguinte exemplo usa o `toggle()`método para alternar a `visible`clase dun elemento co id `content`:

```
let div = document.querySelector('#content');
div.classList.toggle('visible');
```

### Resumo

- A propiedade do elemento `classList`devolve a colección activa de clases CSS do elemento.
- Use `add()`e `remove()`para engadir clases CSS e eliminar clases CSS da lista de clases dun elemento.
- Use `replace()`o método para substituír unha clase existente por outra nova.
- Use `contains()`o método para comprobar se a lista de clases dun elemento contén unha clase especificada.
- Use o `toggle()`método para alternar unha clase.

# Obter o ancho e a altura dun elemento

**Resumo** : neste tutorial, aprenderás a obter a dimensión calculada actual dun elemento, incluíndo o ancho e a altura.

A seguinte imaxe mostra o modelo de caixa CSS que inclúe un elemento de bloque con contido, recheo, bordo e marxe:

![Modelo de caixa CSS](./assets/JavaScript-CSS-Box-Model.png)

Para obter o ancho e o alto do elemento que inclúen o recheo e o bordo, utiliza as propiedades `offsetWidth`e `offsetHeight`do elemento:

```
let box = document.querySelector('.box');
let width = box.offsetWidth;
let height = box.offsetHeight;
```

A seguinte imaxe ilustra o `offsetWidth`e `offsetHeight`dun elemento:

![JavaScript offsetWidth e offsetHeight](./assets/JavaScript-offsetWidth-and-offsetHeight.png)

Vexa o seguinte exemplo:

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Getting the Width and Height of an Element</title>
</head>

<body>
    <div class="box" style="width:100px;height:150px;border:solid 1px #000;padding:10px"></div>
    <script>
        let box = document.querySelector('.box');
        let width = box.offsetWidth;
        let height = box.offsetHeight;
        console.log({ width, height });
    </script>
</body>

</html>
```

Saída:

```
{width: 122, height: 172}
```

Neste exemplo:

- O ancho é de 100 píxeles
- O bordo é de 1 px a cada lado, polo que 2 px para ambos
- O recheo 10px en cada lado, polo que 20px para ambos

Polo tanto, o ancho total 12px. Do mesmo xeito, a altura é de 172 px.

Para obter o ancho e o alto dun elemento como punto flotante despois da transformación CSS, usa o `getBoundingClientRect()`método do elemento DOM. Por exemplo:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Getting the Width and Height of an Element</title>
  </head>

  <body>
    <div
      class="box"
      style="width:100px;height:150px;border:solid 1px #000;padding:10px"
    ></div>
    <script>
      let box = document.querySelector(".box");
      let width = box.offsetWidth;
      let height = box.offsetHeight;
      console.log({ width, height });

      const domRect = box.getBoundingClientRect();
      console.log(domRect);
    </script>
  </body>
</html>
```

Saída:

```json
{width: 122, height: 172}

DOMRect {x: 7.997685432434082, y: 7.997685432434082, width: 121.95602416992188, height: 171.95602416992188, top: 7.997685432434082, …}
```

## clientWidth e clientHeight

Para obter o ancho e o alto do elemento que inclúe o recheo pero sen o bordo, usa as propiedades `clientWidth`e :`clientHeight`

```
let box = document.querySelector('.box');
let width = box.clientWidth;
let height = box.clientHeight;
```

A seguinte imaxe ilustra o `clientWidth`e `clientHeight`dun elemento:

![JavaScript clientWidth e clientHeight png](./assets/JavaScript-clientWidth-and-clientHeight-png.png)

Para obter a marxe dun elemento, usa o `getComputedStyle()`método:

```js
let box = document.querySelector(".box");
let style = getComputedStyle(box);

let marginLeft = parseInt(style.marginLeft);
let marginRight = parseInt(style.marginRight);
let marginTop = parseInt(style.marginTop);
let marginBottom = parseInt(style.marginBottom);
```

Para obter o ancho do bordo dun elemento, usa a propiedade do `style`obxecto devolto polo `getComputedStyle()`método:

```js
let box = document.querySelector(".box");
let style = getComputedStyle(box);

let borderTopWidth = parseInt(style.borderTopWidth) || 0;
let borderLeftWidth = parseInt(style.borderLeftWidth) || 0;
let borderBottomWidth = parseInt(style.borderBottomWidth) || 0;
let borderRightWidth = parseInt(style.borderRightWidth) || 0;
```

Para obter o alto e o ancho da xanela, usa o seguinte código:

```js
let width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
let height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
```

## Resumo

- Use as propiedades offsetWidth e offsetHeight do elemento DOM para obter o seu ancho e alto.
