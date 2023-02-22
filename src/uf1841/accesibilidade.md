Accessible Rich Internet Applications **(ARIA)** é unha colección de atributos que definen como realizar contido e  aplicacións web (especialmente as desenvoltas con Javascript) máis  accesibles para as persoas con discapacidades.

Complementa HTML para que as interaccións e os widgets[^1] que se usan nas aplicacións poidan ser correctamente interpretadas polas tecnoloxías de asistencia.

**Regra nº1**: Antes de utilizar un elemento e agregarlle un rol, estado ou propiedade ARIA para facelo accesible, asegúrate que non podes usar un [elemento ou atributo HTML](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML) nativo coa semántica e o comportamento que necesitas xa integrado".

Aínda que ARIA está deseñado para facer as páxinas web máis accesibles, se se usa incorrectamente, pode facer máis mal que ben.

Por exemplo no seguinte marcado para un widget da barra de progreso:

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

Esta barra de progreso está construída usando un [`div`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div), sen significado semántico. Se inclúen roles e propiedades ARIA para engadir significado. Neste exemplo, o atributo [`role="progressbar"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role) informa ao navegador de que este elemento é en realidade un widget da barra de progreso alimentado por JavaScript. Os atributos [`aria-valuemin`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) e [`aria-valuemax`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) especifican os valores mínimos e máximos para a barra de progreso, e  [`aria-valuenow`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) describe o estado actual da mesma e, polo tanto, debe manterse actualizado con JavaScript.

Ademais de colocalos directamente no marcado, os atributos ARIA pódense engadir ao elemento e actualizarse dinámicamente usando código JavaScript similar a este:

```js
// Find the progress bar <div> in the DOM.
const progressBar = document.getElementById("percent-loaded");

// Set its ARIA roles and states,
// so that assistive technologies know what kind of widget it is.
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// Create a function that can be called at any time to update
// the value of the progress bar.
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

**Todo o contido que estea dispoñible para usuarios de tecnoloxía non asistencial debe estar dispoñible para tecnoloxías de asistencia**. Do mesmo xeito, non se deben incluír funcións dirixidas aos usuarios de  tecnoloxías de asistencia que non sexan tamén accesibles para aqueles que non utilicen tecnoloxías de asistencia. Ademais a barra de progreso anterior debe ter un estilo para que pareza unha barra de progreso.

Aínda así sería moito máis sinxelo usar o elemento nativo [`progress`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) no seu lugar:

```html
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

**Nota:** o atributo `min` non está permitido para o elemento [`progress`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress); o seu valor é sempre `0`.

**Nota:** os elementos de referencia HTML ( [`main`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main), [`header`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header), [`nav`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav), etc.) teñen roles ARIA implícitos incorporados, polo que non é necesario duplicalos.

## Que é aria-label?

O atributo `aria-label` especifica unha cadea que etiqueta o elemento actual. Axuda a engadir unha etiqueta a un elemento HTML, que doutro xeito é anónimo, para que serva ás tecnoloxías de accesibilidade.

Como sabemos, as etiquetas son importantes, xa que nos axudan a crear unha  conexión lóxica entre un elemento e a súa descrición. Por exemplo, no caso dos elementos HTML podemos usar a súa etiqueta para especificar que se trata dun `<p>`, un  `<input>`, ou outros. Non obstante, cando non hai unha etiqueta que indique o cometido do elemento ou que poida funcionar como etiqueta, daquela podemos usar o atributo ``aria-label`` .

Por defecto, un elemento HTML usa o seu contido de texto como etiqueta de accesibilidade. 

*``<p>`` &rarr; ``p`` &rarr; ``p`` é a etiqueta de accesibilidade que indica que isto é un paragrafo.*

Cando o elemento ten o atributo ``aria-label`` , a súa cadea de valor convértese na etiqueta de accesibilidade.

Se hai unha cadea visible que etiquete o elemento, en lugar de ``aria-label ``, podes usar o atributo ``aria-labelledby`` .  

## Como usar ``aria-label``

Podes usar o atributo ``aria-label`` con elementos HTML típicos.

Por exemplo, vexamos como podemos usar o atributo ``aria-label`` na etiqueta ``<button>``:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    <button aria-label="Close" onclick="myDialog.close()">X</button>
  </body>
</html>
```

Temos un ``<button>`` co estilo dun botón "pechar" común. Como non hai nada que indique o propósito do botón, usamos o atributo ``aria-label`` , que proporcionará a etiqueta recoñecible para ás tecnoloxías de accesibilidade.

Vexamos outro exemplo, onde usamos o atributo ``aria-label`` na etiqueta ``<a>``:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    <a href="#" class="more-link" aria-label="read more about the article">more</a>
  </body>
</html>
```

- https://developer.mozilla.org/en-US/docs/Web/Accessibility
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes

[^1]: aplicación ou compoñente de software relativamente sinxelo e fácil de usar.