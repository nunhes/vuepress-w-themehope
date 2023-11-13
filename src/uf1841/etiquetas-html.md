![Etiquetas HTML](./assets/html5-386614_1920-1024x724.jpg)
## Que é unha etiqueta HTML?

As etiquetas HTML son pequenos bloques de código, que lle indican ao navegador como debe interpretar o contido recollido entre ditas etiquetas. Por exemplo, si queres «representar» un parágrafo de texto, hai unha etiqueta específica para que o navegador interprete ese texto axeitándose a ese formato. As etiquetas tamén dispoñen de **atributos** que se poden engadir as etiquetas e determinar como será o comportamento específico que terá dita etiqueta. ~~Te dejo por aquí un [listado de atributos HTML](https://carontestudio.com/blog/atributos-html/) para complementar esta entrada.~~

As etiquetas HTML se mostran sempre entre o símbolo `<` e o símbolo  `>`. Entre medias de estes dous símbolos irá o nome da etiqueta que queremos que o navegador interprete.

As etiquetas HTML están compostas por unha **etiqueta de apertura**, e outra  **etiqueta de peche**. Aínda que hai excepcións, como por exemplo a etiqueta `<br>` ou a etiqueta `<img>`, as chamadas etiquetas baleiras, que só teñen etiqueta de apertura.

As etiquetas de peche se construen tamén entre os símbolos `<` e `>`  pro cunha barra `/` despois do simbolo `<` xusto antes do nome da etiqueta.

```html
<p>Isto é un parágrafo</p>
```
## Etiquetas HTML máis comúns
HTML dispón de máis de 100 etiquetas.

A continuación se enumeran as etiquetas HTML máis usadas e a súa finalidade.

### Etiquetas raíz

- ``<!DOCTYPE html>`` Indícalle ao navegador que o documento está baseado no estándar HTML5
- ``<html> </html>`` Representa a raíz dun documento HTML. Tódolos demais elementos da estrutura HTML deben estar inseridos dentro destas etiquetas.

### Metadatos

- ``<head> </head>`` Representa unha colección de metadatos acerca do documento, incluíndo enlaces a, ou definiciones de, scripts e follas de estilo. O resto de etiquetas de metadatos, **irán dentro das etiquetas de apertura e peche de head**. Importante explicar que estes metadatos do documento, é información para o navegador e non contido que será visible na paxina web. A excepción da etiqueta ``<title>``.
- ``<title> </title>`` Etiqueta usada para definir o título da paxina web.
- ``<link>`` Se usa para enlazar recursos externos ao documento HTML. O exemplo máis común son **as follas de estilos CSS.**
- ``<meta>`` Etiqueta usada para definir outros metadatos que non se poden definir cunha etiqueta HTML especifica. Por exemplo, para definir o autor do sitio, ou a descrición do mesmo.
- ``<style> </style>`` Etiquetas usadas para introducir código CSS en liña, é dicir, no propio documento HTML.

### Etiquetas estruturais

- ``<body> </body>`` Ao contrario que a etiqueta de metadatos ``<head>``, todo o que queiras mostrar na páxina web debe ir recollido dentro das etiquetas de apertura e peche de ``<body>``. **Este contido será o que se mostre na web.**
- ``<nav> </nav>`` Usadas para definir o contido que será a sección de navegación da web.
- ``<main> </main>`` Se usa para definir o contido principal do documento. Soamente pode existir un por documento.
- ``<section> </section>`` Define unha sección do documento
- ``<article> </article>`` Define contido independente da web.
- ``<aside> </aside>`` Dentro destas etiquetas soe aloxarse no contido adicional da web. Soe ser contido relacionado coa web pero de menor importancia
- ``<h1>,<h2>,<h3>,<h4>,<h5>,<h6>`` Son etiquetas HTML moi importantes, xa que son usadas para xerarquizar o contido da web. As etiquetas se usan para explicar brevemente o contido que irá a continuación.
- ``<header> </header>`` Se usan para definir a cabeceira da paxina web. Soe conter o logotipo, menú de navegación, etc.
- ``<footer> </footer>`` Usadas para definir o pé de paxina.

### Etiquetas de contido

- ````<p> </p>`` Etiqueta usada para escribir parágrafos de texto.
- ``<hr>`` Etiqueta utilizada para «romper» entre dúas seccións dunha web. Usada comunmente como separador.
- ``<pre> </pre>`` Usada para pegar texto mantendo o pre-formato propio do texto.
- ``<blockquote> </blockquote>`` Se usan para indicar que o contido é texto citado.
- ``<ol> </ol>`` Etiquetas para crear unha lista ordenada
- ``<ul> </ul>`` Etiquetas para crear unha lista des-ordenada
- ``<li> </li>`` Etiquetas que recollen o contido dun elemento dunha lista, sexa ordenada ou non.
- ``<dl> </dl>`` Usada para crear unha lista de definicións.
- ``<dt> </dt>`` Representa un termo definido pola seguinte etiqueta ``<dd>``
- ``<dd> </dd>`` Se usa para definir os termos listados antes que el.
- ``<figure> </figure>`` Indica unha figura ilustrada como parte do documento HTML5.
- ``<figcaption> </figcaption>`` Utilizada para definir a lenda dunha figura.
- ``<div> </div>`` Etiqueta común utilizada para crear un contedor xenérico.

~~> Complementa este listado de etiquetas con nuestro [listado de todos los atributos HTML](https://carontestudio.com/blog/atributos-html/) que existen.~~

### Etiquetas para texto

- ``<a> </a>`` Etiqueta utilizada para crear hiperenlaces en el documento HTML
- ``<strong> </strong>`` Etiqueta para definir una palabra o conjunto de ellas como importantes. **Tiene una fuerte [importancia en el SEO de la página](https://carontestudio.com/marketing/seo-posicionamiento-buscadores-vitoria/).**
- ``<small> </small>`` Utilizada para dejar un comentario aparte, del tipo una nota de derechos de autoría, u otros textos que no son esenciales para la comprensión del documento.
- ``<cite> </cite>`` Para indicar el título de una obra
- ``<sub> </sub>``e  ``<sup> </sup>`` Etiquetas utilizadas para representar un subíndice o superíndice.
- ``<mark> </mark>`` Usada para resaltar texto
- ``<span> </span>`` Etiqueta HTML sin ningún significado específico. Se usa conjuntamente con los atributos «class» o «id» para atribuirle ciertas características.
- ``<br>`` Etiqueta utilizada para crear un salto de línea

### Etiquetas par inserir contido multimedia

- ``<img>`` Etiqueta para «pintar» una imagen en la página web.
- ``<iframe> </iframe>`` Es una etiqueta que sirve para anidar otro documento HTML dentro del documento principal.
- ``<embed>`` Usada para integrar una aplicación o contenido interactivo externo que no suele ser HTML.
- ``<object> </object>`` Utilizada llamar a un recurso externo de la web. Este recurso será tratado como una imagen, o un recurso externo para ser procesado por un plugin.
- ``<video> </video>`` Se usa para reproducir [video en la página web](https://carontestudio.com/blog/como-poner-un-video-de-fondo-en-html/) junto a sus archivos de audio y capciones asociadas.
- ``<audio> </audio>`` Usada para[ cargar en una web un archivo de audio](https://carontestudio.com/blog/como-anadir-un-reproductor-de-audio-html/) o stream de audio.
- ``<source>`` Permite a autores especificar recursos multimedia alternativos para las etiquetas de ``<video>`` o ``<audio>``
- ``<svg> </svg>`` Se usa para llamar a una imagen vectorizada.

### Táboas

- ``<table> </table>`` Etiquetas de apertura y cierre de una tabla. El resto de etiquetas de la tabla han de ir siempre recogidas entre estas dos etiquetas.
- ``<caption> </caption>`` Usada para indicar el título de la tabla.
- ``<colgroup> </colgroup>`` Etiqueta utilizada para agrupar dos o más columnas de una tabla.
- ``<tbody> </tbody>`` Usada para describir los datos concretos de una tabla.
- ``<thead> </thead>`` Indica el bloque de filas que describen las etiquetas de las columnas de la tabla.
- ``<tfoot> </tfoot>`` Indica los bloques de filas que describen los resúmenes, o datos totales de una columna de una tabla.
- ``<tr> </tr>`` Se usa para indicar una fila de celdas de una tabla.
- ``<td> </td>`` Usada para definir una celda de una tabla.
- ``<th> </th>`` Etiqueta que se usa para definir el encabezado de una celda

### Formularios

- ``<form> </form>`` Etiqueta de apertura y cierre de un formulario de una página web. El resto de etiquetas de formulario deben ir siempre recogidas entre estas etiquetas de apertura y cierre de formulario.
- ``<fieldset> </fieldset>`` Etiqueta que representa un conjunto o agrupación de elementos de un formulario. «Pinta» un recuadro alrededor de las etiquetas que estén contenidas dentro del ``<fieldset>``
- ``<legend> </legend>`` Etiqueta ligada a ``<fieldset>``. Indica el título del ``<fieldset>``
- ``<label> </label>`` Se usa para definir el nombre o título de un control del formulario.
- ``<input>`` Pinta un campo de introducción de datos para el usuario. Es de las principales etiquetas de un formulario.
- ``<button> </button>`` Etiqueta utilizada para representar un botón en el formulario.
- ``<select> </select>`` Input que permite una selección entre un conjunto de opciones.
- ``<option> </option>`` Etiqueta ligada a ``<select>``. Permite añadir diferentes opciones al ``<select>``
- ``<textarea> </textarea>`` Añade un campo al usuario para que pueda introducir texto en unas líneas máximas de texto que el desarrollador puede definir.

## Resumo

Ademais das etiquetas HTML enumeradas aquí existen moitas máis. Aínda que estas son probableemtne as mási comúns. Se tes dubidas con algunha etiqueta ou queres saber máis, consulta la página do **[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)** ou a documentación do **[W3C](https://www.w3c.es/)**.

__ref:_  *[MDN](mozilla.org)*

- *[HTML elements reference - HTML: HyperText Markup Language)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)*

- *[HTML attribute reference - HTML: HyperText Markup Language)](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)*

