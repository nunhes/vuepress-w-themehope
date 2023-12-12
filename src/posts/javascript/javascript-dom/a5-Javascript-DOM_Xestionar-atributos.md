---
title: Javascript DOM - Xestionar atributos
date: 2023-11-05
description: Uso de javascript na arbore do modelo de obxecto do documento
---

# Comprender as relacións entre os atributos HTML e as propiedades do obxecto DOM

**Resumo** : neste tutorial aprenderás as relacións entre os atributos HTML e as propiedades do obxecto DOM.

Cando o navegador web [carga unha páxina HTML](https://www.javascripttutorial.net/javascript-dom/javascript-page-load-events/) , xera os obxectos DOM correspondentes en función dos nodos DOM do documento.

Por exemplo, se unha páxina contén o seguinte `input`elemento:

```
<input type="text" id="username">Idioma do código:  JavaScript  ( javascript )
```

O navegador web xerará un `HTMLInputElement`obxecto.

O `input`elemento ten dous atributos:

- O `type`atributo co valor `text`.
- O `id`atributo co valor `username`.

O obxecto xerado `HTMLInputElement`terá as propiedades correspondentes:

- O `input.type`co valor `text`.
- O `input.id`co valor `username`.

Noutras palabras, o navegador web converterá automaticamente atributos de elementos HTML en propiedades de obxectos DOM.

Non obstante, o navegador web só converte os atributos _estándar_ nas propiedades do obxecto DOM. Os atributos estándar dun elemento están listados na especificación do elemento.

A asignación de atributos-propiedades non sempre é unha a unha. Por exemplo:

```
<input type="text" id="username" secured="true">Idioma do código:  JavaScript  ( javascript )
```

Neste exemplo, `secured`é un atributo non estándar:

```
let input = document.querySelector('#username');
console.log(input.secured); // undefinedIdioma do código:  JavaScript  ( javascript )
```

## Métodos de atributos

Para acceder aos atributos estándar e non estándar, utiliza os seguintes métodos:

- `element.getAttribute(name)`- [Obter o valor do atributo](https://www.javascripttutorial.net/javascript-dom/javascript-getattribute/)
- `element.setAttribute(name, value)`- [establecer o valor para o atributo](https://www.javascripttutorial.net/javascript-dom/javascript-setattribute/)
- `element.hasAttribute(name)`- [Comprobar a existencia dun atributo](https://www.javascripttutorial.net/javascript-dom/javascript-hasattribute/)
- `element.removeAttribute(name)`- [eliminar o atributo](https://www.javascripttutorial.net/javascript-dom/javascript-removeattribute/)

## elemento.atributos

A `element.attributes`propiedade ofrece unha colección activa de atributos dispoñibles nun elemento específico. Por exemplo:

```
let input = document.querySelector('#username');

for(let attr of input.attributes) {
    console.log(`${attr.name} = ${attr.value}` )
}Idioma do código:  JavaScript  ( javascript )
```

Saída:

```
type = text
id = username
secure = trueIdioma do código:  JavaScript  ( javascript )
```

Teña en conta que `element.attributes`é un `NamedNodeMap`, non un `Array`, polo tanto, non ten métodos de Array.

## Sincronización atributo-propiedade

Cando cambia un atributo estándar, a propiedade correspondente actualízase automaticamente con algunhas excepcións e viceversa.

Supoña que tes o seguinte `input`elemento:

```
<input type="text" id="username" tabindex="1">Idioma do código:  JavaScript  ( javascript )
```

O seguinte exemplo ilustra o cambio do `tabindex`atributo que se propaga á `tabIndex`propiedade e viceversa:

```
let input = document.querySelector('#username');

// attribute -> property
input.setAttribute('tabindex', 2);
console.log(input.tabIndex);  // 2


// property -> attribute
input.tabIndex = 3;
console.log(input.getAttribute('tabIndex')); // 3Idioma do código:  JavaScript  ( javascript )
```

O seguinte exemplo mostra cando o `value`atributo cambia, reflíctese na `value`propiedade, pero non ao revés:

```
let input = document.querySelector('#username');

// attribute -> property: OK
input.setAttribute('value','guest');
console.log(input.value);  // guest


// property -> attribute: doesn't change
input.value = 'admin';
console.log(input.getAttribute('value')); // guestIdioma do código:  JavaScript  ( javascript )
```

## Escríbense as propiedades DOM

O valor dun atributo é sempre unha cadea. Non obstante, cando o atributo se converte na propiedade dun obxecto DOM, o valor da propiedade pode ser unha cadea, un booleano, un obxecto, etc.

O seguinte `checkbox`elemento ten o `checked`atributo. Cando o `checked`atributo se converte na propiedade, é un valor booleano:

```
<input type="checkbox" id="chkAccept" checked> Accept

let checkbox = document.querySelector('#chkAccept');
console.log(checkbox.checked); // trueIdioma do código:  JavaScript  ( javascript )
```

O seguinte mostra un `input`elemento co `style`atributo:

```
<input type="password" id="password" style="color:red;with:100%">Idioma do código:  JavaScript  ( javascript )
```

O `style`atributo é unha cadea mentres que a `style`propiedade é un obxecto:

```
let input = document.querySelector('#password');

let styleAttr = input.getAttribute('style');
console.log(styleAttr);

console.dir(input.style);Idioma do código:  JavaScript  ( javascript )
```

Saída:

```
[object CSSStyleDeclaration]Idioma do código:  JavaScript  ( javascript )
```

## Os atributos data-\*

Se queres engadir un atributo personalizado a un elemento, debes prefixo con por `data-`exemplo, `data-secured`porque todos os atributos que comezan por `data-`están reservados para usos do programador.

Para acceder `data-*`aos atributos, pode usar a `dataset`propiedade. Por exemplo, temos o seguinte `div`elemento con atributos personalizados:

```
<div id="main" data-progress="pending" data-value="10%"></div>Idioma do código:  JavaScript  ( javascript )
```

O seguinte mostra como acceder aos `data-*`atributos a través da `dataset`propiedade:

```
let bar = document.querySelector('#main');
console.log(bar.dataset);Idioma do código:  JavaScript  ( javascript )
```

Saída:

```
[object DOMStringMap] {
    progress: "pending",
    value: "10%"
}Idioma do código:  JavaScript  ( javascript )
```

## Resumo

- Os atributos especifícanse nos elementos HTML.
- As propiedades son obxectos DOM especificados.
- Os atributos convértense en propiedades respectivamente.
- Use a `element.attributes`propiedade para acceder aos atributos estándar e personalizados dun elemento.
- Use a `element.dataset`propiedade para acceder aos `data-*`atributos.

# setAttribute

**Resumo** : neste tutorial, aprenderás a usar o `setAttribute()`método JavaScript para establecer un valor para un atributo nun elemento especificado.

## Introdución ao `setAttribute()`método JavaScript

Para establecer un valor dun atributo nun elemento especificado, usa o `setAttribute()`método:

```
element.setAttribute(name, value);Idioma do código:  CSS  ( css )
```

### Parámetros

Especifica o `name`nome do atributo cuxo valor está definido. Convértese automaticamente a minúsculas se chama a `setAttribute()`un elemento HTML.

Especifica `value`o valor para asignarlle ao atributo. Convértese automaticamente nunha cadea se lle pasa un valor que non sexa unha cadea ao método.

### Valor de retorno

Os `setAttribute()`retornos `undefined`.

Teña en conta que se o atributo xa existe no elemento, o `setAttribute()`método actualiza o valor; se non, engade un novo atributo co especificado `name`e `value`.

Normalmente, usa o `querySelector()`ou `getElementById()`para seleccionar un elemento antes de chamar ao `setAttribute()`elemento seleccionado.

Para obter o valor actual dun atributo, usa o `getAttribute()`método. Para eliminar un atributo, chama ao `removeAttribute()`método.

## `setAttribute()`Exemplo de JavaScript

Vexa o seguinte exemplo:

```
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
Idioma do código:  HTML, XML  ( xml )
```

Cómo funciona:

- En primeiro lugar, selecciona o botón co ID `btnSend`usando o `querySelector()`método.
- En segundo lugar, establece o valor do `name`atributo para `send`usar o `setAttribute()`método.
- En terceiro lugar, establece o valor do `disabled`atributo para que cando os usuarios fagan clic no botón, non faga nada.

Teña en conta que o `disabled`atributo é especial porque é un atributo booleano. Se un atributo booleano está presente, sexa cal sexa o valor que teña, considérase que o valor é `true`. Para establecer o valor dun atributo booleano en `false`, cómpre eliminar todo o atributo mediante o `removeAttribute()`método.

## Resumo

- Use o `setAttribute()`para establecer o valor dun atributo nun elemento especificado.
- Establecendo o valor dun atributo booleano calquera valor, ese valor considerarase `true`.

# getAttribute

**Resumo** : neste tutorial, aprenderás a usar o `getAttribute()`método JavaScript para obter o valor dun atributo especificado nun elemento.

## Introdución ao `getAttribute()`método JavaScript

Para obter o valor dun atributo nun elemento especificado, chama ao `getAttribute()`método do elemento:

```
let value = element.getAttribute(name);
Idioma do código:  JavaScript  ( javascript )
```

### Parámetros

Acepta `getAttribute()`un argumento que é o nome do atributo do que quere devolver o valor.

### Valor de retorno

Se o atributo existe no elemento, devolve `getAttribute()`unha cadea que representa o valor do atributo. No caso de que o atributo non exista, `getAttribute()`devolve `null`.

Teña en conta que pode usar o `hasAttribute()`método para comprobar se o atributo existe no elemento antes de obter o seu valor.

## `getAttribute()`Exemplo de JavaScript

Considere o seguinte exemplo:

```
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
Idioma do código:  HTML, XML  ( xml )
```

Saída

```
_blank
```

Cómo funciona:

- En primeiro lugar, selecciona o elemento de ligazón co id `js`usando o `querySelector()`método.
- En segundo lugar, obtén o atributo de destino da ligazón chamando ao `getAttribute()`elemento de ligazón seleccionado.
- En terceiro lugar, mostra o valor do destino na xanela da consola.

O seguinte exemplo usa o `getAttribute()`método para obter o valor do atributo title do elemento de ligazón co id `js`:

```
let link = document.querySelector('#js');
if (link) {
    let title = link.getAttribute('title');
    console.log(title);
}
Idioma do código:  JavaScript  ( javascript )
```

Saída:

```
null
Idioma do código:  JavaScript  ( javascript )
```

## Resumo

- Obter o valor dun atributo dun elemento especificado chamando ao `getAttribute()`método do elemento.
- Devolve `getAttribute()`nulo se o atributo non existe.

# removeAttribute

**Resumo** : neste tutorial, aprenderás a usar o JavaScript `removeAttribute()`para eliminar o atributo co nome especificado do elemento.

## Introdución ao `removeAttribute()`método JavaScript

Elimina `removeAttribute()`un atributo cun nome especificado dun elemento:

```
element.removeAttribute(name);
Idioma do código:  CSS  ( css )
```

### Parámetros

Acepta `removeAttribute()`un argumento que é o nome do atributo que quere eliminar. Se o atributo non existe, o `removeAttribute()` método non xerará un erro.

### Valor de retorno

O `removeAttribute()`devolve un valor de `undefined`.

### Notas de uso

Os elementos HTML teñen algúns atributos que son atributos booleanos. Para configurar `false`os atributos booleanos, non pode simplemente usar o `setAttribute()`método, pero ten que eliminar o atributo por completo usando o `removeAttribute()`método.

Por exemplo, os valores dos `disabled`atributos están `true`nos seguintes casos:

```
<button disabled>Save Draft</button>
<button disabled="">Save</button>
<button disabled="disabled">Cancel</button>
Idioma do código:  HTML, XML  ( xml )
```

Do mesmo xeito, os valores dos seguintes `readonly`atributos son `true`:

```
<input type="text" readonly>
<textarea type="text" readonly="">
<textarea type="text" readonly="readonly">
Idioma do código:  HTML, XML  ( xml )
```

## `removeAttribute()`Exemplo de JavaScript

O seguinte exemplo usa o `removeAttribute()`método para eliminar o `target`atributo do elemento de ligazón co id `js`:

```
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
Idioma do código:  HTML, XML  ( xml )
```

Cómo funciona:

- Seleccione o elemento de ligazón con id `js`usando o `querySelector()`método.
- Elimina o `target`atributo chamando ao `removeAttribute()`elemento de ligazón seleccionado.

## Resumo

- Use o `removeAttribute()`para eliminar un atributo dun elemento especificado.
- Establecer o valor dun atributo booleano en `false`non funcionará; use o `removeAttribute()`método no seu lugar.

# `hasAttribute()`

**Resumo** : neste tutorial, aprenderás a usar JavaScript `hasAttribute()`para comprobar se un elemento ten un atributo.

## Introdución ao `hasAttribute()`método JavaScript

Para comprobar que un elemento ten ou non un atributo especificado, usa o `hasAttribute()`método:

```
let result = element.hasAttribute(name);
Idioma do código:  JavaScript  ( javascript )
```

### Parámetros

O `hasAttribute()`método acepta un argumento que especifica o nome do atributo que quere comprobar.

### Valor de retorno

Devolve `hasAttribute()`un valor booleano que indica se o elemento ten o atributo especificado.

Se o elemento contén un atributo, devolve `hasAttribute()`verdadeiro; se non, volve `false`.

## `hasAttribute()`Exemplo de JavaScript

Vexa o seguinte exemplo:

```
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
Idioma do código:  HTML, XML  ( xml )
```

Saída:

```
true
Idioma do código:  JavaScript  ( javascript )
```

Cómo funciona:

- Seleccione o botón co id btnSend mediante o `querySelector()`método.
- Comproba se o botón ten o atributo desactivado chamando ao `hasAttribute()`método no elemento botón.

## Resumo

- Use o `hasAttribute()`método para comprobar se un elemento contén un atributo especificado.
