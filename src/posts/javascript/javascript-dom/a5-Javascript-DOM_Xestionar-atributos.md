---
title: Javascript DOM - Xestionar atributos
date: 2023-11-05
description: Uso de javascript na arbore do modelo de obxecto do documento
---

# Comprender as relacións entre os atributos HTML e as propiedades do obxecto DOM

**Resumo**: nesta sección aprenderás as relacións entre os atributos HTML e as propiedades do obxecto DOM.

Cando o navegador web [carga unha páxina HTML](https://www.javascripttutorial.net/javascript-dom/javascript-page-load-events/) , xera os obxectos DOM correspondentes en función dos nodos DOM do documento.

Por exemplo, se unha páxina contén o seguinte elemento  `input`:

```html
<input type="text" id="username">
```

O navegador web xerará un obxecto `HTMLInputElement`.

O elemento `input` ten dous atributos:

- O atributo `type` co valor `text`.
- O atributo `id` co valor `username`.

O obxecto xerado `HTMLInputElement` terá as propiedades correspondentes:

- `input.type` co valor `text`.
- `input.id`co valor `username`.

Noutras palabras, **o navegador web converterá automaticamente atributos de elementos HTML en propiedades de obxectos DOM**.

Non obstante, o navegador web só converte os atributos _estándar_ nas propiedades do obxecto DOM. Os atributos estándar dun elemento están listados na especificación do elemento.

A asignación de atributos-propiedades non sempre é unha a unha. Por exemplo:

```html
<input type="text" id="username" secured="true">
```

Neste exemplo, `secured`é un atributo non estándar:

```js
let input = document.querySelector('#username');
console.log(input.secured); // undefined
```

## Métodos de atributos

Para acceder aos atributos estándar e non estándar, utiliza os seguintes métodos:

- `element.getAttribute(name)`- [obter o valor do atributo](https://www.javascripttutorial.net/javascript-dom/javascript-getattribute/)
- `element.setAttribute(name, value)`- [establecer o valor para o atributo](https://www.javascripttutorial.net/javascript-dom/javascript-setattribute/)
- `element.hasAttribute(name)`- [comprobar a existencia dun atributo](https://www.javascripttutorial.net/javascript-dom/javascript-hasattribute/)
- `element.removeAttribute(name)`- [eliminar o atributo](https://www.javascripttutorial.net/javascript-dom/javascript-removeattribute/)

## ``element.attributes``

A propiedade `element.attributes` ofrece unha colección activa de atributos dispoñibles nun elemento específico. Por exemplo:

```js
let input = document.querySelector('#username');

for(let attr of input.attributes) {
    console.log(`${attr.name} = ${attr.value}` )
}Idioma do código:  JavaScript  ( javascript )
```

**Saída:**

```js
type = text
id = username
secure = true
```

Ter en conta que `element.attributes` é un `NamedNodeMap`, non un *array*, polo tanto, non ten métodos de `Array`.

## Sincronización atributo-propiedade

Cando cambia un atributo estándar, a propiedade correspondente actualízase automaticamente con algunhas excepcións e viceversa.

Supón que tes o seguinte elemento `input`:

```html
<input type="text" id="username" tabindex="1">
```

O seguinte exemplo ilustra o cambio do atributo `tabindex` que se propaga á propiedade `tabIndex` e viceversa:

```js
let input = document.querySelector('#username');

// attribute -> property
input.setAttribute('tabindex', 2);
console.log(input.tabIndex);  // 2


// property -> attribute
input.tabIndex = 3;
console.log(input.getAttribute('tabIndex')); // 3
```

O seguinte exemplo mostra cando o atributo `value` cambia, reflíctese na propiedade `value`, pero non ao revés:

```js
let input = document.querySelector('#username');

// attribute -> property: OK
input.setAttribute('value','guest');
console.log(input.value);  // guest


// property -> attribute: doesn't change
input.value = 'admin';
console.log(input.getAttribute('value')); // guest
```

## As propiedades DOM se escriben

O valor dun atributo é sempre unha cadea. Non obstante, cando o atributo se converte na propiedade dun obxecto DOM, o valor da propiedade pode ser unha cadea, un booleano, un obxecto, etc.

O seguinte elemento  `checkbox` ten o atributo `checked`. Cando o atributo `checked` se converte na propiedade, é un valor booleano:

```html
<input type="checkbox" id="chkAccept" checked> Accept

let checkbox = document.querySelector('#chkAccept');
console.log(checkbox.checked); // true+
```

O seguinte código mostra un elemento `input` co atributo `style`:

```html
<input type="password" id="password" style="color:red;with:100%">
```

O atributo `style` é unha cadea mentres que a propiedade `style` é un obxecto:

```js
let input = document.querySelector('#password');

let styleAttr = input.getAttribute('style');
console.log(styleAttr);

console.dir(input.style);
```

**Saída:**

```js
[object CSSStyleDeclaration]
```

## Os atributos data-\*

Se queres engadir un atributo personalizado a un elemento, debes prefixalo con `data-`,  por exemplo `data-secured`, porque todos os atributos que comezan por `data-` están reservados para usos do programador.

Para acceder aos atributos `data-*`, pódese usar a propiedade `dataset`. Por exemplo, temos o seguinte elemento `div` con atributos personalizados:

```html
<div id="main" data-progress="pending" data-value="10%"></div>
```

O seguinte código mostra como acceder aos atributos `data-*` a través da propiedade `dataset`:

```js
let bar = document.querySelector('#main');
console.log(bar.dataset);
```

**Saída:**

```js
[object DOMStringMap] {
    progress: "pending",
    value: "10%"
}
```

## Resumo

- Os atributos especifícanse nos elementos HTML.
- As propiedades son obxectos DOM especificados.
- Os atributos convértense en propiedades respectivamente.
- Usar a propiedade `element.attributes` para acceder aos atributos estándar e personalizados dun elemento.
- Usar a propiedade `element.dataset` para acceder aos atributos `data-*`.

# ``setAttribute``

**Resumo**: nesta sección, aprenderás a usar o método `setAttribute()`  para establecer un valor para un atributo nun elemento especificado.

## Introdución ao método `setAttribute()`

Para establecer un valor dun atributo nun elemento especificado, usa o método `setAttribute()`:

```js
element.setAttribute(name, value);
```

### Parámetros

Especifica o nome do atributo `name` cuxo valor está definido. Convértese automaticamente a minúsculas se  `setAttribute()` chama a un elemento HTML.

Especifica o valor `value` para asignarllo ao atributo. Convértese automaticamente nunha cadea se lle pasa un valor que non sexa unha cadea ao método.

### Valor de retorno

`setAttribute()` devolve `undefined`.

Ter en conta que se o atributo xa existe no elemento, o método  `setAttribute()` actualiza o valor; se non, engade un novo atributo co  `name` e `value` especificado.

Normalmente, se usa `querySelector()` ou `getElementById()` para seleccionar un elemento antes de chamar ao elemento `setAttribute()` seleccionado.

Para obter o valor actual dun atributo, usa o método `getAttribute()`. Para eliminar un atributo, chama ao método `removeAttribute()`.

## Exemplo de `setAttribute()`

Ver o seguinte exemplo:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JS setAttribute() Demo</title>
</head>
<body>
    <button id="btnSend">Send</button>

    <script>
        let btnSend = document.querySelector('#btnSend');
        if (btnSend) {
            btnSend.setAttribute('name', 'send');
            btnSend.setAttribute('disabled', '');
        }
    </script>
</body>
</html>
```

**Como funciona:**

- En primeiro lugar, seleccionar o botón co ID `btnSend` usando o método `querySelector()`.
- En segundo lugar, establecer o valor do atributo `name` para usar `send` ao método `setAttribute()`.
- En terceiro lugar, establecer o valor do atributo `disabled` para que cando os usuarios fagan clic no botón, non faga nada.

Ter en conta que o atributo  `disabled` é especial porque é un atributo booleano. Se un atributo booleano está presente, sexa cal sexa o valor que teña, considérase que o seu valor é `true`. Para establecer o valor dun atributo booleano en `false`, cómpre eliminar todo o atributo mediante o método  `removeAttribute()`.

## Resumo

- Usar `setAttribute()` para establecer o valor dun atributo nun elemento especificado.
- Establecer o valor dun atributo booleano, ao establecelo ese valor considerarase `true`.

# ``getAttribute``

**Resumo**: nesta sección, aprenderás a usar o método `getAttribute()` para obter o valor dun atributo especificado nun elemento.

## Introdución ao método `getAttribute()`

Para obter o valor dun atributo nun elemento especificado, chama ao método `getAttribute()` do elemento:

```js
let value = element.getAttribute(name);
```

### Parámetros

`getAttribute()` acepta un argumento que é o nome do atributo do que quere devolver o valor.

### Valor de retorno

Se o atributo existe no elemento,  `getAttribute()` devolve unha cadea que representa o valor do atributo. No caso de que o atributo non exista, `getAttribute()` devolve `null`.

Ter en conta que pode usar o método `hasAttribute()` para comprobar se o atributo existe no elemento antes de obter o seu valor.

## Exemplo de `getAttribute()`

Considera o seguinte exemplo:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JS getAttribute() Demo</title>
</head>
<body>

    <a href="https://www.javascripttutorial.net"
        target="_blank"
        id="js">JavaScript Tutorial
    </a>

    <script>
        let link = document.querySelector('#js');
        if (link) {
            let target = link.getAttribute('target');
            console.log(target);
        }
    </script>
</body>
</html>
```

**Saída:**

```html
_blank
```

**Como funciona:**

- En primeiro lugar, se selecciona o elemento de ligazón co ``id`` `js` usando o método `querySelector()`.
- En segundo lugar, se obtén o atributo de destino da ligazón chamando ao elemento `getAttribute()` de ligazón seleccionado.
- En terceiro lugar, se mostra o valor do destino na xanela da consola.

O seguinte exemplo usa o método `getAttribute()` para obter o valor do atributo ``title`` do elemento de ligazón co ``id`` `js`:

```html
let link = document.querySelector('#js');
if (link) {
    let title = link.getAttribute('title');
    console.log(title);
}
```

**Saída:**

```js
null
```

## Resumo

- Obter o valor dun atributo dun elemento especificado chamando ao  método `getAttribute()` do elemento.
- `getAttribute()` devolve  ``null`` se o atributo non existe.

# ``removeAttribute``

**Resumo**: nesta sección, aprenderás a usar o método `removeAttribute()` para eliminar o atributo co nome especificado do elemento.

## Introdución ao método  `removeAttribute()`

`removeAttribute()` elimina un atributo cun nome especificado dun elemento:

```js
element.removeAttribute(name);
```

### Parámetros

`removeAttribute()` acepta un argumento que é o nome do atributo que se quere eliminar. Se o atributo non existe, o método  `removeAttribute()` non xerará un erro.

### Valor de retorno

`removeAttribute()` devolve un valor de  `undefined`.

### Notas de uso

Os elementos HTML teñen algúns atributos que son atributos booleanos. Para configurar os atributos booleanos en `false`, non se pode simplemente usar o método `setAttribute()`, pero ten que eliminar o atributo por completo usando o método `removeAttribute()`.

Por exemplo, os valores dos atributos `disabled` son `true` nos seguintes casos:

```html
<button disabled>Save Draft</button>
<button disabled="">Save</button>
<button disabled="disabled">Cancel</button>
```

Do mesmo xeito, os valores dos seguintes atributos `readonly` son `true`:

```html
<input type="text" readonly>
<textarea type="text" readonly="">
<textarea type="text" readonly="readonly">
```

## Exemplo de `removeAttribute()`

O seguinte exemplo usa o método `removeAttribute()` para eliminar o atributo `target` do elemento de ligazón co ``id`` `js`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JS removeAttribute() Demo</title>
</head>
<body>
    <a href="https://www.javascripttutorial.net"
       target="_blank"
       id="js">JavaScript Tutorial</a>

    <script>
        let link = document.querySelector('#js');
        if (link) {
            link.removeAttribute('target');
        }
    </script>
</body>
</html>
```

**Como funciona:**

- Seleccionar o elemento de ligazón con ``id`` `js` usando o método `querySelector()`.
- Eliminar o atributo `target` chamando ao elemento `removeAttribute()` da ligazón seleccionada.

## Resumo

- Usar  `removeAttribute()` para eliminar un atributo dun elemento especificado.
- Establecer o valor dun atributo booleano en `false` non funcionará; no seu lugar usar o método `removeAttribute()`.

# `hasAttribute()`

**Resumo**: nesta sección, aprenderás a usar  `hasAttribute()` para comprobar se un elemento ten un atributo.

## Introdución ao método `hasAttribute()`

Para comprobar que un elemento ten ou non un atributo especificado, usa o método `hasAttribute()`:

```js
let result = element.hasAttribute(name);
```

### Parámetros

O método `hasAttribute()` acepta un argumento que especifica o nome do atributo que se quere comprobar.

### Valor de retorno

`hasAttribute()` devolve un valor booleano que indica se o elemento ten o atributo especificado.

Se o elemento contén un atributo, `hasAttribute()` devolve ``true``; se non, devolve `false`.

## Exemplo de `hasAttribute()`

Ver o seguinte exemplo:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JS hasAttribute() Demo</title>
</head>
<body>

    <button id="btnSend" disabled>Send</button>

    <script>
        let btn = document.querySelector('#btnSend');
        if (btn) {
            let disabled = btn.hasAttribute('disabled');
            console.log(disabled);
        }
    </script>
</body>
</html>
```

**Saída:**

```bash
true
```

**Como funciona:**

- Selecciona o botón co ``id`` ``btnSend`` mediante o método `querySelector()`.
- Comproba se o botón ten o atributo desactivado chamando ao método `hasAttribute()` no elemento botón.

## Resumo

- Use o método `hasAttribute()` para comprobar se un elemento contén un atributo especificado.

---

nov 2023
