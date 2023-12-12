---
icon: edit
date: 2023-02-09
category:
  - HTML
tag:
  - html

sticky: true
# this page will appear in starred articles
star: true
---

# HTML

> Escribín este manual breve para axudarme a comprender o tema, xa que cando necesito explicar algo, é mellor que primeiro me asegure de coñecer a cousa por dentro.

## 1. Introdución

HTML, a abreviatura de _HyperText Markup Language_, é un dos bloques de construción máis fundamentais da web.

HTML naceu oficialmente en 1993 e desde entón evolucionou ata o seu estado actual, pasando de simples documentos de texto a potenciar aplicacións web de todo tipo.

<!-- Este manual está dirixido a un público amplo. -- Primeiro, o principiante. Explico HTML desde cero dunha forma sucinta pero completa, para que poidas usar este libro para aprender HTML dende o básico. -- Despois, o profesional. A miúdo considérase HTML como algo secundario para aprender. Podería darse por feito. -- Con todo, moitas cousas son escuras para moita xente. Eu incluído.--> 

Aínda que non escribas HTML no teu traballo diario, saber como funciona o HTML nunca está de máis. Aforrarache algúns dores de cabeza cando precises entendelo para comunicarte co equipo de desenvolvemento, cando detectas unha interface mellorable ou mentres modificas unha páxina web.

HTML é a base da Web. E é que baixo o seu breve conxunto de regras hai un gran poder.  

HTML pode parecer, ademais de sinxelo,  limitado, pero permite que desenvolvedores, creadores, deseñadores, escritores e retocadores... creemos documentos, aplicacións e experiencias para persoas de todo o mundo.

O meu primeiro contacto con HTML foi alo por 1994. 

Despois de máis de 20 anos, HTML segue sendo a base da web. De como a coñecín até agora, a linguaxe cambiou moi pouco en esencia, malia que os pequenos cambios foron bastante significativos.

Hoxe dispoñemos de máis etiquetas semánticas,  xa non se emprega o HTML de presentación e CSS encargase agora do deseño das cousas.

Logo de resistirse a ser reducido a un complexo dialecto da XML, a través de XHTML, porque a xente  se decatou de que a cousa se estaba a volver demasiado complexa. É claro que o éxito de HTML baséase na súa sinxeleza.

Outra das claves do seu éxito é outra das súas características fundacionais: **o perdón**. Hai _algunhas_ regras, certo, pero despois de que as aprendes, atopas que tes moita liberdade e modos de recombinalas con éxito.

Ademais os navegadores aprenderon a ser resistentes a algunhas liberdades e inconsistencias e a intentar facer o mellor cando analizan e presentan HTML aos usuarios.

E toda a plataforma web fixo moi ben unha cousa: nunca rompeu a compatibilidade con versións anteriores. Aínda que pareza incrible, podemos volver aos documentos HTML escritos en 1991, e se mostran máis ou menos como antes.

Mesmo sabemos cal foi a primeira páxina web: [http://info.cern.ch/hypertext/WWW/TheProject.html](http://info.cern.ch/hypertext/WWW/TheProject.html)

Outra gran característica da web e do HTML é que podes ver o código fonte de cada páxina. E isto non é algo que aconteza coa maioría das linguaxes e plataformas ás que nos imos afacendo. **Podemos inspeccionar o HTML de calquera páxina web** .

Non deas isto por feito. Non coñezo ningunha outra plataforma que nos dea esta capacidade.

As excepcionales **ferramentas para programadores** integradas en calquera navegador permítennos inspeccionar e inspirarnos co HTML escrito por calquera persoa do mundo.

Se es novo en HTML, este artigo pretende axudarche a comezar. 

Se es un programador web experimentado, este libro seguro poderá tamén axudarche e mellorará os teus coñecementos. Eu mesmo aínda estou aprendendo, e aprendín moito mentres o escribín, aínda que levo máis de 20 anos traballando coa web.

En todo caso, o meu obxectivo é crear un manual rápido e espero que che sexa de utilidade.

## 2. Conceptos básicos de HTML

HTML é un estándar definido polo **WHATWG**, un acrónimo de _Web Hypertext Application Technology Working Group_, unha organización formada por persoas que traballan no navegador web máis popular. Isto significa que está basicamente controlado por Google, Mozilla, Apple e Microsoft.

No pasado o **W3C** (World Wide Web Consortium) era a organización encargada de crear o estándar HTML.

O control pasou informalmente do W3C a WHATWG cando quedou claro que o impulso do W3C cara a XHTML non era unha boa idea.

Se nunca escoitaches falar de XHTML, resúmocho aquí: A principios dos anos 2000, todos críamos que o futuro da web era XML :smirk:. Así que HTML pasou de ser unha linguaxe de autoría baseada na SGML a unha linguaxe de marcado XML.

Foi un gran cambio. Había que coñecer, e respectar, máis regras. Regras máis estritas.

Finalmente, os vendedores de navegadores decatáronse de que este non era o camiño correcto para a web e retrocederon, creando o que agora se coñece como HTML5.

O W3C non estaba de acordo en renunciar ao control de HTML, e durante anos tivemos 2 estándares competidores. Cada un deles pretendía ser o estándar oficial. Finalmente, o 28 de maio de 2019, o W3C oficializou que a versión HTML "verdadeira" era a publicada por WHATWG.

Vexamos esta pequena historia. HTML, XHTML, HTML5.... parece algo confuso, como ocorre con moitas cousas da vida nas que están implicados moitos actores:

**A versión HTML1** publicouse en 1993. [Aquí tes o RFC orixinal](https://tools.ietf.org/html/rfc1983) .

**HTML2** seguiuno en 1995.

**HTML3** apareceu en xaneiro de 1997 e **HTML 4** en decembro dese mesmo ano.

Eran os novos e axitados tempos!

O tempo foi pasando e formulouse XHTML, un intento de normalización que recibiu ben pouco apoio e que acabou por desaparecer arredado por esta "cousa" que denominamos HTML5, e que xa non é só HTML.

HTML5 é un termo que define todo un conxunto de tecnoloxías, que inclúe HTML pero engade moitas API e estándares como WebGL, SVG e moito máis.

O que hai que entender de toda esta carreira é que xa non existe (máis) unha versión HTML. Hoxe prefírese falar de nivel de vida. Como CSS, que agora acostumase a chamar "CSS3", pero en realidade é unha morea de módulos independentes desenvolvidos por separado. Ou como JavaScript, onde temos unha nova edición cada ano, pero hoxe en día o único que importa é que funcións permite agora este motor.

O estándar actual da linguaxe HTML reside en [https://html.spec.whatwg.org/multipage](https://html.spec.whatwg.org/multipage) .

**HTML é a linguaxe de marcado que usamos para estruturar o contido que consumimos na Rede.**

O HTML ofrécese ao navegador de diferentes xeitos.

- Pode ser xerado por unha aplicación do servidor que o constrúe dependendo da solicitude ou dos datos da sesión, por exemplo unha aplicación Rails ou Laravel ou Django.
- Pode ser xerado por unha aplicación do cliente de JavaScript que xera HTML sobre a marcha.
- Ou, no caso máis sinxelo, pódese almacenar nun arquivo e ser servido ao navegador por un servidor web.

Encetemos por este último caso. Aínda que na práctica probablemente sexa a forma menos popular de xerar HTML, resulta esencial para coñecer os bloques básicos de construción que empregamos con esta linguaxe.

Por convención, un arquivo HTML gárdase cunha extensión `.html`ou `.htm`.

Dentro deste arquivo, organizamos o contido mediante **etiquetas** .

As etiquetas envolven o contido e cada etiqueta dá un significado especial ao texto que envolve.

Poñamos algúns exemplos.

Este fragmento HTML crea un parágrafo usando a etiqueta `p`:

```html
<p>Un parágrafo de texto</p>
```

Este fragmento HTML crea unha lista de elementos usando a etiqueta `ul`, que significa _lista non ordenada_ , e as etiquetas `li` marcan cada _elemento da lista_ :

```html
<ul>
  <li>Primeiro item</li>
  <li>Segundo item</li>
  <li>Terceiro item</li>
</ul>
```

Cando o navegador serve unha páxina HTML, as etiquetas son interpretadas e o navegador representa os elementos segundo as regras que definen a súa aparencia visual.

Algunhas desas regras están integradas, como cando se representa unha lista ou cando se subliña unha ligazón en azul.

Algunhas outras regras as estableceras ti con CSS.

HTML non é unha linguaxe de presentación. Non está preocupado por como _se ven_ as cousas . Aínda así, preocúpase polo que _significan_ as cousas .

Corresponde ao navegador determinar como se mostran as cousas, segundo as directivas definidas coa linguaxe CSS por quen constrúe a páxina. 

Así que os dous exemplos que acabamos de ver son fragmentos HTML tomados fóra do contexto dunha páxina con fins descritivos.

### 2.1. Estrutura da páxina HTML

Vexamos un exemplo dunha páxina HTML máis completo e axeitado.

A estrutura convencional estándar comeza coa **declaración do tipo de documento** (tamén coñecido como _doctype_ ).  Esa é a forma de dicirlle ao navegador que esta é unha páxina HTML e cal é a versión de HTML estamos a usar.

A HTML actual anunciase con este tipo de documento:

```html
<!DOCTYPE html>
```

Despois temos o elemento `html`, que ten unha etiqueta de apertura e peche:

```html
<!DOCTYPE html>
<html>
  ...
</html>
```

A maioría das etiquetas HTML traballan en parellas: unha etiqueta de apertura e unha etiqueta de peche. A etiqueta de peche escríbese igual que a etiqueta de apertura, pero cun `/`  antes do nome:

```html
<etiqueta>algún contido</etiqueta>
```

Hai algunhas etiquetas, as menos, que [non necesitan unha etiqueta de peche](https://developer.mozilla.org/es/docs/Glossary/Void_element). Se as denomina de varias formas: de peche automático, orfas, baleiras,...  o que significa que **non poden** conter nodos secundarios (é dicir, elementos aniñados ou nodos de texto dentro delas).

A etiqueta `html` de inicio - `<html>`- úsase ao principio do documento, xusto despois da declaración do tipo de documento.

A etiqueta `html` final - `</html>`-  é a última cousa presente nun documento HTML.

Dentro do elemento `html` temos 2 elementos irrepetibles: `head` e `body`:

```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

Dentro de `head` se dispoñen as etiquetas imprescindibles para definir unha páxina web, coma o título e os metadatos, ou coma o CSS e o JavaScript, sexan estes internos ou externos. En realidade nesta cabeceira van a maioría das cousas que non aparecen directamente entre os contidos para amosar da páxina, pero que axudan ao navegador (ou aos bots como o bot de busca de Google) a mostrar o contido de modo correcto.

Dentro de `body` teremos o contido da páxina. As **cousas visibles** .

### 2.2. Etiquetas vs elementos

Etiquetas e elementos. Cal é a diferenza?

Os elementos teñen unha etiqueta de inicio e unha etiqueta de peche. Neste exemplo, usamos as etiquetas `p` de inicio e peche para crear un elemento `p`:

```html
<p>Un parágrafo de texto</p>
```

Así, un elemento constitúe o _paquete_ completo :

- etiqueta de inicio
- contido (texto e posiblemente outros elementos)
- etiqueta de peche

Tamén son elementos os bloques de contido que non precisan dunha etiqueta de peche, e só necesitan a etiqueta de inicio.

```html
<img src="imaxe.png" alt="Imaxe">
```

Aínda que atoparás quen usa os termos etiqueta e elemento como sinónimos, non o son en realidade.

### 2.3. Atributos

A etiqueta de inicio dun elemento pode ter anexos ou fragmentos especiais de información denominados **atributos** .

Os atributos teñen a sintaxe `key="value"`:

```html
<p class="unhaclase">Un parágrafo de texto</p>
```

> Se pode tamén usar comiñas simples, pero en HTML usar comiñas dobres é unha convención moi xeralizada.

Un elemento pode ter moitos atributos:

```html
<p class="unhaclase" id="un-id">Un parágrafo de texto</p>
```

Os atributos `class` e `id` son dous dos máis comúns. Teñen un significado especial e son útiles tanto en CSS como en JavaScript.

A diferenza entre ambos é que un `id` debe ser único no contexto dunha páxina web; non se pode duplicar.

As clases, por outra banda, poden aparecer varias veces e en varios elementos.

Ademais, o `id` terá só un valor. Mentres `class` pode conter varios valores, separados por un espazo:

```html
<p class="unhaclase outraclase">Un parágrafo de texto</p>
```

Pero estes son só dous dos posibles atributos que podemos atopar. 

Hai atributos que podemos empregar dentro de distintas etiquetas. E outros atributos que só se usan para unha etiqueta determinada. 

Hai tamén algúns atributos, denominados booleanos, que carecen de valor asociado, e só precisaras declaralos para que realicen a súa función:

```html
<script defer src="file.js"></script>
```

### 2.4. Non sensitivo - non distingue entre maiúsculas e minúsculas

HTML non distingue entre maiúsculas e minúsculas. As etiquetas pódense escribir en maiúsculas ou minúsculas. Nos primeiros tempos, as maiúsculas eran a norma. Hoxe as minúsculas son a norma. É unha convención.

Normalmente escribes así:

```html
<p>Un parágrafo de texto</p>
```

non así:

```html
<P>Un parágrafo de texto</P>
```

### 2.5. Espazo en branco

Moi importante. En HTML, aínda que engadas varios espazos en branco nunha liña, o motor de representación do navegador vainos a ignorar e contraer.

Por exemplo, a interpretación deste parágrafo

```html
<p>Un parágrafo de texto</p>
```

é o mesmo que este:

```html
<p>      Un parágrafo de texto     </p>
```

e o mesmo que este:

```html
<p>
    
    Un parágrafo de texto

</p>
```

> Usando a [propiedade CSS `white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space) pódese cambiar este comportamento. Máis información sobre como CSS procesa o espazo en branco na [especificación CSS](https://www.w3.org/TR/CSS2/text.html%23white-space-model)

Aínda que podes usar a sintaxe que máis che guste, cando escribas o teu código usa a sintaxe que faga que as cousas se vexan máis organizadas e máis fáciles de ler.

Normalmente:

```html
<p>Un parágrafo de texto</p>
```

ou

```html
<p>
    Un parágrafo de texto
</p>
```

Outras convencións poden axudarche a organizar o teu código, como por exemplo o sangrado dos elementos. Así, as etiquetas aniñadas soen estar sangradas con 2 ou 4 caracteres, dependendo da túa preferencia:

```html
<body>
  <p>Un parágrafo de texto</p>
  <ul>
    <li>Un item da lista</li>
  </ul>
</body>
```

> *Nota: esta condición HTML na que o "espazo en branco non é relevante" significa que se queres engadir espazo baleiro adicional, podes tolear. Mellor que uses CSS para crear ese espazo cando sexa necesario.
> En casos especiais, podes usar a entidade HTML `&nbsp;` (un acrónimo que significa espazo que non se rompe ) - pero é un recurso do que é mellor non abusar e non sempre da bos resultados. Así que para alterar a presentación de contidos é mellor usar CSS.*

## 3. O encabezamento do documento - `head`

A etiqueta `head` contén etiquetas especiais que definen as propiedades do documento.

Sempre está escrito antes da etiqueta `body`, xusto despois da etiqueta `html` de apertura:

```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  ...
</html>
```

Nesta etiqueta nunca se usan atributos nin outro contido. `<head>` é só un recipiente para outras etiquetas. 

No seu interior podemos ter unha gran variedade de etiquetas, dependendo do que necesites facer:

- `title`
- `script`
- `noscript`
- `link`
- `style`
- `base`
- `meta`

### 3.1. A etiqueta `title`

A etiqueta `title`  determina o título da páxina. O título móstrase no navegador, e é especialmente importante xa que é un dos factores clave para a optimización dos motores de busca (SEO).

### 3.2. A etiqueta `script`

Esta etiqueta úsase para engadir JavaScript á páxina.

Podes incluír o teu código Javascript en liña, usando unha etiqueta de apertura, o código Javascript e despois a etiqueta de peche:

```html
<script>
  // ..algún JS
</script>
```

Ou pode cargar un arquivo JavaScript externo usando o atributo `src`:

```html
<script src="file.js"></script>
```

> *Esta etiqueta dispón do atributo `type`  que por defecto será configurado en `text/javascript`. Ao ter só este valor posible é completamente opcional e podelo obviar.*

Hai un debate non pechado sobre cal é a mellor disposición para esta etiqueta.

Ás veces, esta etiqueta úsase na parte inferior da páxina, xusto antes da etiqueta `</body>` de peche. Por que? Por razóns de rendemento.

A carga de scripts de forma predeterminada bloquea a representación da páxina ata que o script sexa analizado e cargado.

Ao poñelo na parte inferior da páxina, o script cárgase e execútase despois de que toda a páxina xa estea analizada e cargada, proporcionándolle unha experiencia máis fluida ao usuario que se o mántemos na etiqueta `head`.

Moitos desenvolvedores toman esa decisión. Non obstante, se organizas o teu código correctamente, a posición dos scripts na paxina deixa de ser relevante.

No JavaScript moderno hai alternativas máis eficaces que manter o script na parte inferior da páxina: o atributo `defer`. Este é un exemplo que carga un arquivo `file.js` en relación co URL actual:

```html
<script defer src="file.js"></script>
```

Neste caso a etiqueta pode estar perfectamente aloxada no `head`.

E, segundo moitos autores, este sería o escenario que resolve mellor a carga rápida da paxina e o camiño máis rápido a JavaScript de carga rápida.

Outro caso que podería ser recomendable situar xusto antes da etiqueta `</body>` é cando estamos a usar librarías como jQuery que deben dispor de todolos elementos do DOM renderizados para poder desempeñarse axeitadamente.

Pero tamén aquí cabe a posibilidade de dispor o noso script dentro de `<head>` facendo o seguinte:

```js
$(document).ready(function () {
  // teu código aquí
});
```

En realidade nesta discusión xuntanse as cuestións puramente estéticas coas realmente funcionais. En realidade é só cuestión de organizar axeitadamente o código, e aí os dous casos son posibles. Mais siturar os scripts na `<head>` é unha solución de marcado máis _limpa_.

> *Nota: o atributo `async` é semellante, pero na miña opinión unha opción peor que `defer`. Podes ver as diferenzas con máis detalle na páxina [https://flaviocopes.com/javascript-async-defer/](https://flaviocopes.com/javascript-async-defer/)*

### 3.3. A etiqueta `noscript`

Esta etiqueta úsase para empregar cando Javascript está desactivado no navegador.

> *Nota: os usuarios poden optar por desactivar os scripts JavaScript na configuración do navegador. Ou é posible que o navegador non os admita por defecto.*

Utilízase de forma diferente dependendo de se se coloca no encabezado do documento ou no corpo do documento.

Como agora estamos a falar da cabeza do documento `<head>`, imos presentar este uso.

Neste caso, a etiqueta `noscript` só pode conter outras etiquetas:

- `link`
- `style`
- `meta`

para alterar os recursos que serve a páxina, ou a `meta`información, para cando os scripts están desactivados.

Neste exemplo, configurei un elemento coa clase `no-script-alert` para empregar no caso de que os scripts esteán desactivados, e evitar o `display: none` por defecto:

```html
<!DOCTYPE html>
<html>
  <head>
    ...
    <noscript>
      <style>
        .no-script-alert {
          display: block;
        }
      </style>
    </noscript>

    ...
  </head>
  ...
</html>
```

Outro caso sería colocar esta etiqueta `<noscript>` no `<body`. Nese caso pódeselle engadir contido, como parágrafos e outras etiquetas, que se mostrarán na UI.

### 3.4. A etiqueta `link`

A etiqueta `link` úsase para establecer relacións entre un documento e outros recursos.

Úsase principalmente para ligar un arquivo CSS externo que se vai cargar.

Este elemento non ten etiqueta de peche.

Uso:

```html
<!DOCTYPE html>
<html>
  <head>
    ...
    <link href="file.css" rel="stylesheet" />
    ...
  </head>
  ...
</html>
```

O atributo `media` permite cargar diferentes follas de estilo dependendo das capacidades do dispositivo:

```html
<link href="file.css" media="screen" rel="stylesheet" />
<link href="print.css" media="print" rel="stylesheet" />
```

Tamén podemos enlazar con outros recursos que non sexan follas de estilo.

Por exemplo podemos asociar un feed RSS usando:

```html
<link rel="alternate" type="application/rss+xml" href="/index.xml" />
```

Ou podemos asociar un favicon usando:

```html
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="./assets/apple-touch-icon.png"
/>

<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="./assets/favicon-32x32.png"
/>

<link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="./assets/favicon-16x16.png"
/>
```

Esta etiqueta tamén se utilizou para  referirse ao contido de outras páxinas. En especial Google, recomendaba usar esta etiqueta para indicar a páxina anterior e seguinte usando o atributo `rel="prev"` e/ou `rel="next"`, para indicar que paxina ia antes ou despois da actual. A partir de 2019, [Google anunciou que xa non usaría esta etiqueta](https://twitter.com/googlewmc/status/1108726443251519489) porque xa aprendera a atopar a estrutura correcta da páxina sen ela.

### 3.5. A etiqueta `style`

Esta etiqueta pódese usar para engadir estilos ao documento, en lugar de cargar unha folla de estilos externa.

Uso:

```html
<style>
  .estilo {
  }
</style>
```

Do mesmo xeito que coa etiquetas `link`, podes usar o atributo `media` para usar ese CSS só no medio especificado:

```html
<style media="print">
  .estilo {
  }
</style>
```

### 3.6. A etiqueta `base`

Esta etiqueta úsase para establecer unha URL base para todas as URL relativas contidas na páxina.

```html
<!DOCTYPE html>
<html>
  <head>
    ...
    <base href="https://www.bitsolto.com/" />
    ...
  </head>
  ...
</html>
```

### 3.7. A etiqueta `meta`

As etiquetas *meta* realizan unha variedade de tarefas e son moi, moi importantes. Especialmente para SEO.

Os elementos `meta` só teñen unha etiqueta de inicio.

Unha das máis básicas é a metaetiqueta `description`:

```html
<meta name="description" content="Unha bonita paxina" />
```

Isto _pode_ ser usado por Google para xerar a descrición da páxina nas súas páxinas de resultados, se considera que describe mellor a páxina que o contido da páxina (non preguntes como!).

A metaetiqueta `charset` é das máis esenciais e úsase para definir a codificación de caracteres da páxina. `utf-8` na maioría dos casos:

```html
<meta charset="utf-8" />
```

A metaetiqueta `robots` indícalle aos robots dos buscadores se deben indexar unha páxina ou non:

```html
<meta name="robots" content="noindex" />
```

Ou se deben seguir os enlaces da paxina ou non:

```html
<meta name="robots" content="nofollow" />
```

> Así é como podes configurar `nofollow` globalmente, tamén podes configurar ``nofollow`` en ligazóns individuais. 

E tamén se admite a combinación destes valores:

```html
<meta name="robots" content="noindex, nofollow" />
```

O comportamento predeterminado é `index, follow`.

Podes usar outras propiedades, incluíndo `nosnippet`, `noarchive`, `noimageindex` etc.

Tamén podes dirixirte a Google en lugar de apuntar a _todos os_ motores de busca:

```html
<meta name="googlebot" content="noindex, nofollow" />
```

E outros motores de busca tamén poden ter a súa propia metaetiqueta.

Falando diso, podemos dicirslle a Google que desactive algunhas funcións. Isto impide a funcionalidade de tradución nos resultados do buscador:

```html
<meta name="google" content="notranslate" />
```

A metaetiqueta `viewport` úsase para indicarlle ao navegador que estableza o ancho da páxina en función do ancho do dispositivo. Esta é unha etiqueta moi recorrida polas súas implicacións na visualización receptiva das paxinas - `responsive design`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

[Ver máis](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag) .

Outra metaetiqueta bastante popular é a `http-equiv="refresh"`. Esta liña indica ao navegador que agarde 3 segundos e que despois redireccione a esa outra páxina:

```html
<meta
  http-equiv="refresh"
  content="3; url=http://bitsolto.com/outra-paxina"
/>
```

Usando 0 en lugar de 3, a redirección será máis rápida.

...

> *Esta non é unha referencia completa, só se nomean as máis usadas e comúns. Existen outras [metaetiquetas](https://developers.google.com/search/docs/crawling-indexing/special-tags?hl=es) con distintos obxectivos, pero deixo que sexas ti que indague sobre iso.*

## 4. O corpo do documento - `body`

Nun documento HTML, despois da etiqueta `head` de peche, só pode haber unha cousa: o elemento `body`.

```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

E coma no caso das etiquetas `head` e `html`, nunha páxina só pode haber unha etiqueta `body`.

Dentro da etiqueta `body` temos todas as etiquetas que definen o contido da páxina.

Tecnicamente, as etiquetas de inicio e final son opcionais. Pero considero unha boa práctica engadilas. Só por claridade.

Nos próximos capítulos definiremos a variedade de etiquetas que se poden usar dentro do corpo da páxina.

Pero antes, debemos apuntar a diferenza entre os elementos de bloque e os elementos en liña.

### 4.1. Elementos de bloque vs elementos en liña

Os elementos visuais, os que se usan para definir o corpo da páxina, pódense clasificar xeralmente en dúas categorías:

- elementos de bloque ( `p`, `div`, elementos de título, listas e elementos de lista, ...)
- elementos en liña ( `a`, `span`, `img`, ...)

Cal é a diferenza?

Os elementos de bloque, cando se sitúan na páxina, non permiten outros elementos xunto a eles. Á esquerda, ou á dereita.

Os elementos en liña poden estar xunto a outros elementos en liña.

A diferenza tamén reside nas propiedades visuais que podemos editar usando CSS. Podemos alterar o ancho/alto, a marxe, o recheo e o bordo dos elementos do bloque. Non podemos facelo para elementos en liña.

> *Ter en conta que mediante CSS podemos cambiar o valor predeterminado de cada elemento, configurando unha etiqueta `p` para que estea en liña, por exemplo, ou a `span` para que sexa un elemento de bloque.*

Outra diferenza é que os elementos en liña poden estar contidos en elementos de bloque. O contrario non é posible.

Algúns elementos de bloque poden conter outros elementos de bloque, pero depende. A etiqueta `p`, por exemplo, non permite esa opción.

## 5. Etiquetas que interactúan co texto

### 5.1. A etiqueta `p`

Esta etiqueta define un parágrafo de texto.

```html
<p>Algún texto</p>
```

É un elemento de bloque.

Dentro dela, podemos engadir calquera elemento en liña que nos interese, como `span`, `strong` ou `a`.

Non podemos engadir elementos de bloque.

Non podemos aniñar un elemento `p` noutro.

Por defecto, os navegadores estilizan un parágrafo cunha marxe na parte superior e na parte inferior. `16px` en Chrome, pero o valor exacto pode variar entre os navegadores.

Isto fai que dous parágrafos consecutivos sexan espazados, replicando o que supoñemos para un "parágrafo" no texto impreso.

### 5.2. A etiqueta `span`

Esta é unha etiqueta en liña que se pode usar para crear unha sección nun parágrafo a que se pode dar un estilo distinto mediante CSS:

```html
<p>Unha parte do texto <span>e outra parte máis</span></p>
```

### 5.3. A etiqueta `br`

Esta etiqueta representa un salto de liña. É un elemento en liña e non necesita unha etiqueta de peche.

Utilizámolo para crear unha nova liña dentro dunha etiqueta `p`, sen crear un novo parágrafo.

E en comparación coa creación dun novo parágrafo, non engade espazo adicional.

```html
<p>Algo de texto<br />Unha nova liña</p>
```

### 5.4. As etiquetas de título

HTML dispón de 6 etiquetas de título. Do máis importante ao menos importante, temos `h1`, `h2`, `h3`, `h4`, `h5`, `h6`.

Normalmente, unha páxina terá un elemento `h1`, que é o título da páxina. Entón pode ter un ou máis elementos `h2`dependendo do contido da páxina.

Os títulos, especialmente a xerarquía e organización dos mesmos, tamén son esenciais para o SEO, e os motores de busca utilízanos de varias maneiras.

O navegador por defecto fará que a etiqueta `h1` sexa a máis grande e fará que o tamaño dos elementos  `h`  sexa máis pequeno a medida que o número aumenta:

![img](./assets/Screen Shot 2019-06-11 at 19.46.57.png)

Todos os títulos son elementos de bloque. Non poden conter outros elementos, só texto.

### 5.5. A etiqueta `strong`

Esta etiqueta úsase para marcar o texto dentro dela como _forte_ ou negriña. Isto é moi importante, non é unha suxestión visual, senón unha suxestión semántica. Segundo o medio empregado, a súa interpretación variará.

Os navegadores por defecto fan que o texto desta etiqueta sexa **en negriña** .

### 5.6. A etiqueta `em`

Esta etiqueta úsase para marcar o texto dentro dela como resaltado en _itálica_. Do mesmo xeito que con `strong`, non é unha suxestión visual senón unha suxestión semántica.

Por defecto, os navegadores fan que o texto estea en *cursiva* .

#### 5.6.1. `blockquote`- Citas

A etiqueta `blockquote` é útil para inserir citas no texto.

Os navegadores por defecto aplican unha marxe ao elemento `blockquote`. Chrome aplica unha marxe esquerda e dereita de 40px e unha marxe superior e inferior de 10px.

A etiqueta HTML `q` úsase para as comiñas en liña.

### 5.7. Liña horizontal

Non se basea realmente no texto, pero a etiqueta `hr` úsase a miúdo dentro dunha páxina. Significa `horizontal rule`, e engade unha liña horizontal na páxina.

Útil para separar seccións na páxina.

### 5.8. Bloques de código

A etiqueta `code` é especialmente útil para mostrar código, porque os navegadores danlle un tipo de letra monoespazado.

Normalmente iso é o único que fan os navegadores. Este é o CSS aplicado por Chrome:

```css
code {
  font-family: monospace;
}
```

Esta etiqueta adoita estar envolta nunha etiqueta `pre`, porque o elemento `code` ignora os espazos en branco e os saltos de liña. Como a etiqueta `p`.

Chrome dá este estilo predeterminado a `pre`:

```css
pre {
  display: block;
  font-family: monospace;
  white-space: pre;
  margin: 1em 0px;
}
```

que evita que o espazo en branco colapse e o converte nun elemento de bloque.

### 5.9. Listas

Temos 3 tipos de listas:

- listas non ordenadas
- listas ordenadas
- listas de definición

As listas non ordenadas créanse mediante a etiqueta `ul`. Cada elemento da lista créase coa etiqueta `li`:

```html
<ul>
  <li>Primeiro</li>
  <li>Segundo</li>
</ul>
```

As listas ordenadas son similares, só están feitas coa etiqueta `ol`:

```html
<ol>
  <li>Primeiro</li>
  <li>Segundo</li>
</ol>
```

A diferenza entre ambas é que as listas ordenadas teñen un número antes de cada elemento:

![img](./assets/Screen Shot 2019-06-12 at 09.35.05.png)

As listas de definicións son un pouco diferentes. Tes un termo e a súa definición:

```html
<dl>
  <dt>Flavio</dt>
  <dd>The name</dd>
  <dt>Copes</dt>
  <dd>The surname</dd>
</dl>
```

Así é como os navegadores adoitan representalos:

![img](./assets/Screen Shot 2019-06-12 at 09.45.21.png)

Debo dicir que poucas veces verás este marcado *en estado salvaxe* tal e como o devolve o teu navegador, alo menos non tanto como vemos listados  `ul` e `ol`, pero ás veces poden ser útiles.

### 5.10. Outras etiquetas de texto

Hai unha serie de etiquetas con fins de presentación:

-  `mark`
-  `ins`
-  `del`
-  `sup`
- `sub`
-  `small`
-  `i`
-  `b`

Este é un exemplo da representación visual dos mesmos que os navegadores aplican por defecto:

![img](./assets/Screen Shot 2019-06-12 at 08.43.55.png)

Podes preguntarte, en que é diferente `b` de `strong`? Ou como de diferente é `i` de  `em`?

A diferenza reside no **significado semántico**. Mentres que `b` e `i`son unha suxestión directa para que o navegador faga unha peza de texto en negriña ou en cursiva `strong` e `em` outórganlle un significado especial ao texto, e correspóndelle ao navegador dar o estilo. En realidade, por defecto, a representación pasa a ser exactamente a mesma que con `b` e `i`. Aínda que podes cambialo usando CSS. 

Existen outras etiquetas relacionadas co texto. Acabo de mencionar as que vexo máis utilizadas, o resto é cousa túa.

## 6. Ligazóns

As ligazóns defínense mediante a etiqueta `a`. O destino da ligazón establécese mediante o seu atributo `href`.

**Exemplo**:

```html
<a href="https://bitsolto.com">preme aquí</a>
```

Entre a etiqueta de inicio e a de peche temos o texto da ligazón.

O exemplo anterior é unha URL absoluta. As ligazóns tamén funcionan con URL relativas:

```html
<a href="./test">preme aquí</a>
```

Neste caso, ao facer clic na ligazón o usuario móvese á URL `/test` da orixe actual.

Pódese omitir o marcado `./`, en calquera caso o navegador engadirá a cadea  `test` á URL actual.

Exemplo, estás na páxina `https://bitsolto.com/axios/` e tes estas ligazóns:

- `./test` unha vez que se fai clic levarate a `https://bitsolto.com/test`
- `test` unha vez que se fai clic levarate a`https://bitsolto.com/axios/test`

As etiquetas de ligazón poden incluír outras cousas no seu interior, non só texto. Por exemplo, imaxes:

```html
<a href="https://bitsolto.com">
  <img src="test.jpg" />
</a>
```

ou calquera outro elemento, agás outras etiquetas `<a>`.

O atributo `target` permitirache seleccionar como queres que se abra a ligazón. Se queres abrir a ligazón nunha nova pestana, podes usar:

```html
<a href="https://bitsolto.com" target="_blank">abrir noutra lapela</a>
```

## 7. Etiquetas de contedores e estrutura da páxina

### 7.1. Etiquetas de contedores

HTML ofrece un conxunto de etiquetas de contedores. Esas etiquetas poden conter un conxunto non especificado doutras etiquetas.

Temos:

- `article`
- `section`
- `div`

e pode resultar confuso entender a diferenza entre elas.

Vexamos cando usar cada unha delas.

#### 7.1.1.`article`

A etiqueta `article`  identifica un contido que pode ser independente doutras partes da páxina.

Por exemplo, unha lista de publicacións do blog na páxina de inicio.

Ou unha lista de ligazóns.

```html
<div>
  <article>
    <h2>Unha publicación</h2>
    <a ...>Ler máis</a>
  </article>
  <article>
    <h2>Outra publicación</h2>
    <a ...>Ler máis</a>
  </article>
</div>
```

Non nos limitamos a listados: un `article`  pode ser o elemento principal dunha páxina.

```html
<article>
  <h2>Unha publicación</h2>
  <p>Aquí está o seu contido...</p>
</article>
```

Dentro dunha etiqueta `article` deberíamos ter un título ( `h1`- `h6`) e outras etiquetas de texto e imaxes. Ou aquilo que forme parte desa peza diferenciada de contido.

#### 7.1.2.`section`

Representa unha sección dun documento. Cada sección ten unha etiqueta de título ( `h1`- `h6`), e despois o _corpo_ da sección .

**Exemplo**:

```html
<section>
  <h2>Unha sección da paxina</h2>
  <p>...</p>
  <img ... />
</section>
```

É útil dividir un artigo longo en diferentes **seccións** .

~~Non se debe usar como elemento xenérico do contedor. `div` está feito para iso.~~

#### 7.1.3.`div`

`div` é o elemento contedor xenérico:

```html
<div>...</div>
```

Adoita engadir un atributo `class` ou `id`, para permitir que se dea estilo usando CSS.

Usamos `div` en calquera lugar onde necesitemos un recipiente e as outras etiquetas semánticas existentes non son axeitadas.

### 7.2. Etiquetas relacionadas coa páxina

#### 7.2.1.`nav`

Esta etiqueta úsase para crear o marcado que define a navegación da páxina. A isto normalmente engadímoslle unha lista `ul`ou `ol`:

```html
<nav>
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
  </ol>
</nav>
```

#### 7.2.2.`aside`

A etiqueta `aside` úsase para engadir un contido relacionado co contido principal aínda que de menor relevancia.

Un cadro onde engadir unha cita, por exemplo. Ou unha barra lateral.

**Exemplo**:

```html
<div>
  <p>algún texto..</p>
  <aside>
    <p>Unha cita..</p>
  </aside>
    <p>outro texto</p>
</div>
```

Usar `aside` é un sinal de que as cousas que contén non forman parte do fluxo regular da sección na que vive.

#### 7.2.3.`header`

A etiqueta `header` representa a introdución á paxina ou a unha parte da páxina. Por exemplo, podes conter unha ou máis etiquetas de título ( `h1`- `h6`), o lema para o artigo, unha imaxe.

```html
<article>
  <header>
    <h1>Título do artigo</h1>
  </header>
  ...
</div>
```

#### 7.2.4.`main`

A etiqueta `main` representa a parte principal dunha páxina:

```html
<body>
  ....
  <main>
    <p>....</p>
  </main>
</body>
```

#### 7.2.5.`footer`

A etiqueta `footer` úsase para determinar o pé dun artigo ou o pé da páxina:

```html
<article>
 ....
  <footer>
    <p>Notas ao pé..</p>
  </footer>
</div>
```

## 8. Formularios

Os formularios son a forma en que podes interactuar cunha páxina ou unha aplicación creada con tecnoloxías web.

Tes un conxunto de controis, e cando envías o formulario, xa sexa cun clic nun botón "enviar" ou mediante programación, o navegador enviará os datos ao servidor.

De forma predeterminada, este envío de datos fai que a páxina se recargue despois de enviar os datos, pero usando Javascript podes alterar este comportamento (aínda que iso no se vai explicar neste artigo).

Un formulario créase usando a etiqueta `form`:

```html
<form>...</form>
```

Por defecto, os formularios envíanse mediante o método HTTP GET. O que ten os seus inconvenientes, e normalmente quererás usar o método POST.

Podes configurar o formulario para que use POST cando se envíe usando o atributo `method`:

```html
<form method="POST">...</form>
```

O formulario envíase mediante GET ou POST á mesma URL onde reside.

Polo tanto, se o formulario está na páxina `https://bitsolto.com/contacts`, premendo o botón "enviar" realizarase unha solicitude a esa mesma URL.

O que pode provocar que non pase nada.

Necesitas algo do servidor para xestionar a solicitude e normalmente "escoitas" os eventos de envío de formularios nunha URL dedicada.

Podes especificar a URL mediante o atributo `action`:

```html
<form action="/new-contact" method="POST">...</form>
```

Isto fará que o navegador envíe os datos do formulario mediante POST a URL `/new-contact` da mesma orixe.

Se a orixe (protocolo + dominio + porto) é `https://bitsolto.com`(o porto 80 é o predeterminado), isto significa que os datos do formulario enviaranse a `https://bitsolto.com/new-contact`.

Falei de datos. Que datos?

Os datos son proporcionados polos usuarios a través do conxunto de controis que están dispoñibles na plataforma web:

- caixas de entrada (texto dunha soa liña) `input`
- áreas de texto (texto multiliña) `textarea`
- caixas de selección (escolla unha opción dun menú despregable) `select`
- botóns de opción (escolla unha opción dunha lista sempre visible) `radio`
- caixas de verificación (escolla cero, unha ou máis opcións)  `checkbox`
- cargas de arquivos `file`
- [e máis](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls)!

Imos presentar cada un deles na seguinte descrición xeral dos campos do formulario.

### 8.1. A etiqueta `input`

O campo `input` é un dos elementos de formulario máis utilizados. Tamén é un elemento moi versátil e pode cambiar completamente o comportamento en función do atributo `type`.

O comportamento predeterminado é un control de entrada de texto dunha soa liña:

```html
<input />
```

Equivale a usar:

```html
<input type="text" />
```

Como ocorre con todos os outros campos que seguen, cómpre darlle un nome ao campo para que o seu contido se envíe identificado ao servidor cando se envíe o formulario:

```html
<input type="text" name="username" />
```

O atributo `placeholder` úsase para que apareza algún texto, cando o campo está baleiro. Útil para engadir unha suxestión ao usuario sobre o que escribir:

```html
<input type="text" name="username" placeholder="Your username" />
```

#### 8.1.1. Correo electrónico

O uso `type="email"` validará un correo electrónico do lado do cliente (no navegador) para comprobar a corrección (corrección semántica, sen asegurar que o enderezo de correo electrónico exista) antes de enviar.

```html
<input type="email" name="email" placeholder="Teu email" />
```

#### 8.1.2. Contrasinal

Ao usar `type="password"`cada clave introducida aparecerá como un asterisco (\*) ou un punto, útil para campos que albergan un contrasinal.

```html
<input type="password" name="password" placeholder="Teu contrasinal" />
```

#### 8.1.3. Números

Pode que un elemento de entrada acepte só números:

```html
<input type="number" name="age" placeholder="Túa idade" />
```

Podes especificar un valor mínimo e máximo aceptado:

```html
<input type="number" name="age" placeholder="Túa idade" min="18" max="110" />
```

O atributo `step` axuda a identificar os pasos entre diferentes valores. Por exemplo, isto acepta un valor entre 10 e 50, en pasos de 5:

```html
<input type="number" name="a-number" min="10" max="50" step="5" />
```

#### 8.1.4. Campo oculto

Os campos pódense ocultar ao usuario. Aínda así se enviarán ao servidor cando se envíe o formulario:

```html
<input type="hidden" name="some-hidden-field" value="some-value" />
```

Este úsase habitualmente para almacenar valores como un token CSRF, usado para a seguridade e a identificación do usuario, ou mesmo para detectar robots que envían spam, utilizando técnicas especiais.

Tamén se pode usar só para identificar un formulario e a súa acción.

#### 8.1.5. Establecer un valor predeterminado

Todos eses campos aceptan un valor predefinido. Se o usuario non o cambia, este será o valor enviado ao servidor:

```html
<input type="number" name="age" value="18" />
```

Se estableces un marcador de posición - ``placeholder``-, ese valor aparecerá se o usuario borra o valor do campo de entrada:

```html
<input type="number" name="age" placeholder="Túa idade" value="18" />
```

### 8.2. Enviar formulario

O campo `type="submit"` é un botón que, unha vez pulsado polo usuario, envía o formulario:

```html
<input type="submit" />
```

O atributo `value`  establece o texto no botón, que se falta mostra o texto "Submit":

```html
<input type="submit" value="Preme aquí" />
```

Pódese substituír por un botón co mesmo cometido.

### 8.3. Validación de formularios

Os navegadores proporcionan funcionalidades de validación do lado do cliente aos formularios.

Pode definir os campos segundo sexa necesario, asegurándose de que estean cubertos e aplicar un formato específico para a entrada de cada campo.

Vexamos as opcións de validación do lado do cliente.

#### 8.3.1. Establecer os campos requiridos segundo sexa necesario

O atributo `required` axudarache coa validación. Se o campo non está definido, a validación do cliente falla e o navegador non envía o formulario:

```html
<input type="text" name="username" required />
```

#### 8.3.2. Aplicar un formato específico

Especificar o tipo de eido axuda a súa validación do lado do cliente. Por exemplo ao establecer o campo como `type="email"`, o navegador valida automaticamente o enderezo de correo electrónico segundo un formato establecido na especificación.

No caso dun campo `type="number"`, os atributos  `min` e `max` activa a validación do valor introducido dentro dos límites dun intervalo.

Tamén se pode aplicar un formato específico a calquera campo a través do atributo `pattern`, o que lle dá a posibilidade de establecer unha expresión regular para validar o valor.

Podes ver a Guía de expresións regulares de [flaviocopes.com/javascript-regular-expressions/](https://flaviocopes.com/javascript-regular-expressions/) .

**Exemplo**:

```html
<input type="text" name="username" pattern="[a-zA-Z]{8}" />
```

### 8.4. Outros campos

#### 8.4.1. Cargas de arquivos

Podes cargar arquivos desde o teu ordenador local e envialos ao servidor mediante un elemento `type="file"` de entrada:

```html
<input type="file" name="secret-documents" />
```

Podes anexar varios arquivos:

```html
<input type="file" name="secret-documents" multiple />
```

Podes especificar un ou máis tipos de arquivos permitidos mediante o atributo `accept`. Isto acepta imaxes:

```html
<input type="file" name="secret-documents" accept="image/*" />
```

Podes usar un tipo MIME específico, como `application/json`ou establecer unha extensión de arquivo como `.pdf`. Ou configurar varias extensións de arquivo, como aquí:

```html
<input type="file" name="secret-documents" accept=".jpg, .jpeg, .png" />
```

#### 8.4.2. Botóns

Os eidos `type="button"` pódense usar para engadir botóns adicionais ao formulario, que non son botóns de envío:

```html
<input type="button" value="Prémeme" />
```

Utilízanse para facer algo mediante programación, usando JavaScript.

Hai un campo especial representado como un botón, cuxa acción especial é borrar todo o formulario e devolver o estado dos campos ao inicial:

```html
<input type="reset" />
```

#### 8.4.3. Botóns de radio

Os botóns de opción úsanse para crear un conxunto de opcións de selección única. Así, se se preme unha mentres as outras pasarán a estar desactivadas.

Se define un conxunto de entradas `type="radio"` , todas co mesmo atributo `name` e un atributo `value` diferente:

```html
<input type="radio" name="color" value="yellow" />
<input type="radio" name="color" value="red" />
<input type="radio" name="color" value="blue" />
```

Unha vez enviado o formulario, a propiedade `color` obterá un único valor.

Sempre hai un elemento marcado. O primeiro elemento é o marcado por defecto.

Podes establecer o valor que está preseleccionado usando o atributo `checked`. Podes usalo só unha vez por grupo de entradas de radio.

#### 8.4.4. Casiñas de verificación

Semellante ás caixas de radio, pero permiten escoller varios valores ou ningún.

Defines un conxunto de entradas `type="checkbox"`, todas co mesmo atributo `name` e atributo `value` diferente:

```html
<input type="checkbox" name="color" value="yellow" />
<input type="checkbox" name="color" value="red" />
<input type="checkbox" name="color" value="blue" />
```

Todas esas caixas de verificación estarán desmarcadas por defecto. Use o atributo `checked` para activalas na carga da páxina.

Dado que este campo de entrada permite varios valores, ao enviar o formulario os valores enviaranse ao servidor como unha matriz - *array*.

#### 8.4.5. Data e hora

Hai algúns tipos de entrada que aceptan valores de data.

O eido `type="date"`permite ao usuario introducir unha data e, se é necesario, mostra un selector de datas:

```html
<input type="date" name="birthday" />
```

O eido `type="time"`  permite ao usuario introducir unha hora e, se é necesario, mostra un selector de tempo:

```html
<input type="time" name="time-to-pickup" />
```

O eido `type="month"`  permite ao usuario introducir un mes e un ano:

```html
<input type="month" name="choose-release-month" />
```

O eido  `type="week"` permite ao usuario introducir unha semana e un ano:

```html
<input type="week" name="choose-week" />
```

Todos eses campos permiten limitar o intervalo e o paso entre cada valor. Recomendo consultar MDN para obter os pequenos detalles sobre o seu uso.

O eido `type="datetime-local"` permíteche escoller unha data e unha hora.

```html
<input type="datetime-local" name="date-and-time" />
```

Aquí tes unha páxina para probalos todos: [https://codepen.io/flaviocopes/pen/ZdWQPm](https://codepen.io/flaviocopes/pen/ZdWQPm)

#### 8.4.6. Selector de cores

Podes permitir que os usuarios elixan unha cor usando o elemento `type="color"`:

```html
<input type="color" name="car-color" />
```

Establece un valor predeterminado mediante o atributo `value`:

```html
<input type="color" name="car-color" value="#000000" />
```

O navegador encargarase de mostrar un selector de cores ao usuario.

#### 8.4.7. Rango

Este elemento de entrada mostra un elemento de control desprazable. As persoas poden usalo para pasar dun valor inicial a un valor final:

```html
<input type="range" name="age" min="0" max="100" value="30" />
```

Podes proporcionar un paso opcional:

```html
<input type="range" name="age" min="0" max="100" value="30" step="10" />
```

#### 8.4.8. Teléfono

O eido `type="tel"` úsase para introducir un número de teléfono:

```html
<input type="tel" name="telephone-number" />
```

O principal interese para usar `tel` en vez de `text` está no móbil, onde o dispositivo pode optar por mostrar un teclado numérico.

Especifica un atributo `pattern` para unha validación adicional:

```html
<input type="tel" pattern="[0-9]{3}-[0-9]{8}" name="telephone-number" />
```

#### 8.4.9. URL

O eido `type="url"` úsase para introducir unha URL.

```html
<input type="url" name="website" />
```

Podes validalo usando o atributo `pattern`:

```html
<input type="url" name="website" pattern="https://.*" />
```

### 8.5. A etiqueta `textarea`

O elemento `textarea` permite aos usuarios introducir texto de varias liñas. En comparación con `input`, require unha etiqueta de finalización:

```html
<textarea></textarea>
```

Podes establecer as dimensións usando CSS, pero tamén usando os atributos `rows` e `cols`:

```html
<textarea rows="20" cols="10"></textarea>
```

Como ocorre coas outras etiquetas do formulario, o atributo `name` determina o nome nos datos enviados ao servidor:

```html
<textarea name="article"></textarea>
```

### 8.6. A etiqueta `select`

Esta etiqueta úsase para crear un menú despregable.

O usuario pode escoller unha das opcións dispoñibles.

Cada opción créase mediante a etiqueta `option`. Engades un nome á selección e un valor a cada opción:

```html
<select name="color">
  <option value="red">Vermello</option>
  <option value="yellow">Amarelo</option>
</select>
```

Podes configurar unha opción desactivada:

```html
<select name="color">
  <option value="red" disabled>Vermello</option>
  <option value="yellow">Amarelo</option>
</select>
```

Podes ter unha opción baleira:

```html
<select name="color">
  <option value="">Nada</option>
  <option value="red">Vermello</option>
  <option value="yellow">Amarelo</option>
</select>
```

As opcións pódense agrupar mediante a etiqueta `optgroup`. Cada grupo de opcións ten un atributo `label`:

```html
<select name="cor">
  <optgroup label="Primary">
    <option value="red">Vermello</option>
    <option value="yellow">Amarelo</option>
    <option value="blue">Azul</option>
  </optgroup>
  <optgroup label="Others">
    <option value="green">Verde</option>
    <option value="pink">Rosa</option>
  </optgroup>
</select>
```

## 9. Táboas

Nos primeiros tempos da web as táboas eran unha parte moi importante dos deseños e a construción.

Máis tarde foron substituídos por CSS e as súas capacidades de deseño, e hoxe temos poderosas ferramentas como [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) e [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) para crear deseños. Agora as táboas úsanse só para, adiviña que, construír táboas!

#### 9.0.1. A etiqueta `table`

Defines unha táboa usando a etiqueta `table`:

```html
<table></table>
```

Dentro da táboa definiremos os datos. Engadimos filas nunha táboa e dentro delas definiremos columnas.

#### 9.0.2. Filas

Engádese unha fila usando a etiqueta `tr`, e iso é o único que podemos engadir a un elemento `table`:

```html
<table>
  <tr></tr>
  <tr></tr>
  <tr></tr>
</table>
```

Esta é unha táboa con 3 filas.

A primeira fila _pode_ ocupar o papel de cabeceira.

#### 9.0.3. Cabeceiras das columnas

A cabeceira da táboa contén o nome dunha columna, normalmente en letra negra.

Pense nun documento de Excel / Google Sheets. E a cabeceira superior  `A-B-C-D...`.

![img](./assets/Screen Shot 2019-06-20 at 10.18.17.png)

Definimos a cabeceira usando a etiqueta `th`:

```html
<table>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
    <th>Column 3</th>
  </tr>
  <tr></tr>
  <tr></tr>
</table>
```

#### 9.0.4. O contido da táboa

O contido da táboa defínese mediante etiquetas `td`, dentro dos elementos `tr`:

```html
<table>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
    <th>Column 3</th>
  </tr>
  <tr>
    <td>Row 1 Column 1</td>
    <td>Row 1 Column 2</td>
    <td>Row 1 Column 3</td>
  </tr>
  <tr>
    <td>Row 2 Column 1</td>
    <td>Row 2 Column 2</td>
    <td>Row 2 Column 3</td>
  </tr>
</table>
```

Así é como os navegadores o representan, se non engades ningún estilo CSS:

![img](./assets/Screen Shot 2019-06-20 at 10.24.08.png)

Engadindo este CSS:

```css
th,
td {
  padding: 10px;
  border: 1px solid #333;
}
```

fai que a táboa pareza máis a unha táboa:

![img](./assets/Screen Shot 2019-06-20 at 10.26.15.png)

#### 9.0.5. Abarca columnas e filas

Unha fila pode decidir abarcar máis de 2 ou máis columnas, utilizando o atributo `colspan`:

```html
<table>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
    <th>Column 3</th>
  </tr>
  <tr>
    <td colspan="2">Row 1 Columns 1-2</td>
    <td>Row 1 Column 3</td>
  </tr>
  <tr>
    <td colspan="3">Row 2 Columns 1-3</td>
  </tr>
</table>
```

![img](./assets/Screen Shot 2019-06-20 at 10.27.59.png)

Ou pode abarcar máis de 2 ou máis filas, usando o atributo `rowspan`:

```html
<table>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
    <th>Column 3</th>
  </tr>
  <tr>
    <td colspan="2" rowspan="2">Rows 1-2 Columns 1-2</td>
    <td>Row 1 Column 3</td>
  </tr>
  <tr>
    <td>Row 2 Column 3</td>
  </tr>
</table>
```

![img](./assets/Screen Shot 2019-06-20 at 10.29.37.png)

#### 9.0.6. Títulos de fila

Antes expliquei como pode ter títulos de columna, usando a etiqueta `th` dentro da primeira etiqueta `tr` da táboa.

Podes engadir unha etiqueta `th` como primeiro elemento dentro dun `tr` que non é o primeiro `tr` da táboa, para ter títulos de fila:

```html
<table>
  <tr>
    <th></th>
    <th>Column 2</th>
    <th>Column 3</th>
  </tr>
  <tr>
    <th>Row 1</th>
    <td>Col 2</td>
    <td>Col 3</td>
  </tr>
  <tr>
    <th>Row 2</th>
    <td>Col 2</td>
    <td>Col 3</td>
  </tr>
</table>
```

![img](./assets/Screen Shot 2019-06-20 at 10.49.16.png)

#### 9.0.7. Máis etiquetas para organizar a táboa

Podes engadir 3 etiquetas máis nunha táboa para organizala mellor.

Isto é mellor cando se usan táboas grandes. E tamén para definir correctamente un encabezado e un pé de páxina.

Esas etiquetas son

- `thead`
- `tbody`
- `tfoot`

Envolven as etiquetas `tr` para definir claramente as diferentes seccións da táboa. Aquí tes un exemplo:

```html
<table>
  <thead>
    <tr>
      <th></th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row 1</th>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <th>Row 2</th>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td>Footer of Col 1</td>
      <td>Footer of Col 2</td>
    </tr>
  </tfoot>
</table>
```

![img](./assets/Screen Shot 2019-06-20 at 10.52.41.png)

### 9.1. Lenda da táboa

Unha táboa debe ter unha etiqueta `caption` que describa o seu contido. Esa etiqueta debe poñerse inmediatamente despois da etiqueta `table` de apertura:

```html
<table>
  <caption>
    Dogs age
  </caption>
  <tr>
    <th>Dog</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Roger</td>
    <td>7</td>
  </tr>
</table>
```

## 10. Etiquetas multimedia: `audio` e `video`

Nesta sección quero mostrarche as etiquetas `audio` e `video`.

### 10.1. A etiqueta `audio`

Esta etiqueta permíteche inserir contido de audio nas túas páxinas HTML.

Este elemento pode transmitir audio, quizais usando un micrófono a través de `getUserMedia()`, ou pode reproducir unha fonte de audio á que faga referencia usando o atributo `src`:

```html
<audio src="file.mp3"></audio>
```

Por defecto o navegador non mostra ningún control para este elemento. O que significa que o audio só se reproducirá se se define como reprodución automática aínda que o usuario non poderá tampouco ver como detelo nin controlar o volume nin moverse pola pista.

Para mostrar os controis integrados, pode engadir o atributo `controls`:

```html
<audio src="file.mp3" controls></audio>
```

Os controis poden ter un aspecto personalizado.

Podes especificar o tipo MIME do arquivo de audio usando o atributo `type`. Se non se configura, o navegador tentará determinalo automaticamente:

```html
<audio src="file.mp3" controls type="audio/mpeg"></audio>
```

Un arquivo de audio por defecto non se reproduce automaticamente. Engade o atributo `autoplay` para reproducir o audio automaticamente:

```html
<audio src="file.mp3" controls autoplay></audio>
```

> *Nota: os navegadores móbiles non permiten a reprodución automática*

O atributo `loop` , se se estableceu, reinicia a reprodución do son ás 0:00; en caso contrario, se non está presente, o audio detense ao final do arquivo

```html
<audio src="file.mp3" controls autoplay loop></audio>
```

Tamén podes reproducir un arquivo de audio silenciado usando o atributo `muted` (aínda que non estou moi seguro de cal é a utilidade disto):

```html
<audio src="file.mp3" controls autoplay loop muted></audio>
```

Usando JavaScript pode escoitar varios eventos que ocorren nun elemento `audio`, os máis básicos dos cales son:

- `play`cando o arquivo comeza a reproducirse
- `pause`cando se puxo en pausa a reprodución de audio
- `playing`cando o audio se retoma a partir dunha pausa
- `ended`cando se chegou ao final do arquivo de audio

### 10.2. A etiqueta `video`

Esta etiqueta permíteche inserir contido de vídeo nas túas páxinas HTML.

Este elemento pode transmitir vídeo mediante unha cámara web a través `getUserMedia()`de **WebRTC** ou pode reproducir unha fonte de vídeo á que faga referencia mediante o atributo `src`:

```html
<video src="file.mp4"></video>
```

Por defecto, o navegador non mostra ningún control para este elemento, só o vídeo.

O que significa que o vídeo só se reproducirá se está configurado para a reprodución automática e o usuario non pode ver como detelo, pausalo, controlar o volume ou saltar a unha posición específica do vídeo.

Para mostrar os controis integrados, pode engadir o atributo `controls`:

```html
<video src="file.mp4" controls></video>
```

Os controis poden ter un aspecto personalizado.

Podes especificar o tipo MIME do arquivo de vídeo mediante o atributo `type`. Se non se configura, o navegador tentará determinalo automaticamente:

```html
<video src="file.mp4" controls type="video/mp4"></video>
```

Un arquivo de vídeo por defecto non se reproduce automaticamente. Engade o atributo `autoplay` para reproducir o vídeo automaticamente:

```html
<video src="file.mp4" controls autoplay></video>
```

Algúns navegadores tamén requiren o atributo `muted` para a reprodución automática. O vídeo só se reproduce automaticamente se está silenciado:

```html
<audio src="file.mp3" controls autoplay muted></audio>
```

O atributo `loop` , se se estableceu, reinicia o vídeo que se reproduce ás 0:00 ; en caso contrario, se non está presente, o vídeo detense ao final do arquivo:

```html
<video src="file.mp4" controls autoplay loop></video>
```

Podes configurar unha imaxe para que sexa a imaxe do póster:

```html
<video src="file.mp4" poster="picture.png"></video>
```

Se non está presente, o navegador mostrará o primeiro fotograma do vídeo en canto estea dispoñible.

Podes establecer os atributos `width` e `height`para establecer o espazo que ocupará o elemento para que o navegador poida ter en conta e non cambie o deseño cando finalmente se cargue. Toma un valor numérico, expresado en píxeles.

Usando JavaScript pode escoitar varios eventos que ocorren nun elemento `video`, os máis básicos dos cales son:

- `play`cando o arquivo comeza a reproducirse
- `pause`cando se puxo en pausa o vídeo
- `playing`cando se retoma o vídeo desde unha pausa
- `ended`cando se chegou ao final do arquivo de vídeo

## 11. iframes

A etiqueta `iframe` permítenos incorporar contido procedente doutras orixes (outros sitios) na nosa páxina web.

Tecnicamente, un iframe crea un novo contexto de navegación anidado. Isto significa que calquera cousa no iframe non interfire coa páxina principal e viceversa. JavaScript e CSS non "filtran" a/desde iframes.

Moitos sitios usan iframes para realizar varias cousas. Quizais esteas familiarizado con Codepen, Glitch ou outros sitios que che permitan codificar nunha parte da páxina e vexas o resultado nunha caixa. Iso é un iframe.

Crea un deste xeito:

```html
<iframe src="page.html"></iframe>
```

Tamén podes cargar unha URL absoluta:

```html
<iframe src="https://site.com/page.html"></iframe>
```

Podes establecer un conxunto de parámetros de ancho e alto (ou configuralos mediante CSS), se non, o iframe usará os valores predeterminados, unha caixa de 300x150 píxeles:

```html
<iframe src="page.html" width="800" height="400"></iframe>
```

`iframe` ten algunhas [contraindicacións de seguridade](https://www.reflectiz.com/blog/iframe-security/).

### 11.1. Srcdoc

O atributo `srcdoc` permítelle especificar algún HTML en liña para mostrar. É unha alternativa a `src`:

```html
<iframe srcdoc="<p>My dog is a good dog</p>"></iframe>
```

### 11.2. Sandbox

O atributo `sandbox` permítenos limitar as operacións permitidas nos iframes.

Se o omitimos, todo está permitido:

```html
<iframe src="page.html"></iframe>
```

Se o configuramos en "", non se permite nada:

```html
<iframe src="page.html" sandbox=""></iframe>
```

Podemos seleccionar o que queremos permitir engadindo opcións no atributo `sandbox`. Podes permitir varios engadindo un espazo no medio. Aquí tes unha lista incompleta das opcións que podes usar:

- `allow-forms`: permite enviar formularios
- `allow-modals`permite abrir fiestras modais, incluíndo chamadas `alert()` en JavaScript
- `allow-orientation-lock`permite bloquear a orientación da pantalla
- `allow-popups`permitir ventás emerxentes, usar `window.open()` e `target="_blank"`ligazóns
- `allow-same-origin`tratar o recurso que se está cargando como a mesma orixe
- `allow-scripts`permite que o iframe cargado execute scripts (pero non cree ventás emerxentes).
- `allow-top-navigation`dá acceso ao iframe ao contexto de navegación de nivel superior

### 11.3. Permitir

Actualmente experimental e só é compatible con navegadores baseados en Chromium, este é o futuro do uso compartido de recursos entre a xanela principal e o iframe.

É semellante ao atributo `sandbox`, pero permítenos permitir funcións específicas, incluíndo:

- `accelerometer`dá acceso á interface do acelerómetro da API de sensores
- `ambient-light-sensor`dá acceso á interface AmbientLightSensor da API de sensores
- `autoplay`permite reproducir automaticamente arquivos de audio e vídeo
- `camera`permite acceder á cámara desde a API getUserMedia
- `display-capture`permite acceder ao contido da pantalla mediante a API getDisplayMedia
- `fullscreen`permite acceder ao modo de pantalla completa
- `geolocation`permite acceder á API de xeolocalización
- `gyroscope`dá acceso á interface de xiroscopio da API de sensores
- `magnetometer`dá acceso á interface do magnetómetro da API de sensores
- `microphone`dá acceso ao micrófono do dispositivo mediante a API getUserMedia
- `midi`permite o acceso á API Web MIDI
- `payment`dá acceso á API de solicitude de pago
- `speaker`permite o acceso para reproducir audio a través dos altofalantes do dispositivo
- `usb`dá acceso á API WebUSB.
- `vibrate`dá acceso á API de vibración
- `vr`dá acceso á API WebVR

### 11.4. Referente

Ao cargar un iframe, o navegador envíalle información importante sobre quen o está cargando na `Referer`cabeceira (nótese no single `r`, un erro de tipografía co que debemos convivir).

> A falta de ortografía do referente orixinouse na proposta orixinal do científico informático Phillip Hallam-Baker para incorporar o campo á especificación HTTP. A falta de ortografía foi gravada no momento da súa incorporación ao documento de normas de solicitude de comentarios RFC 1945

O atributo `referrerpolicy` permítenos configurar o referente para enviar ao iframe ao cargalo. O referente é unha cabeceira HTTP que fai saber á páxina quen a está cargando. Estes son os valores permitidos:

- `no-referrer-when-downgrade`é o predeterminado e non envía o referente cando a páxina actual se carga a través de HTTPS e o iframe se carga no protocolo HTTP
- `no-referrer`non envía a cabeceira de referencia
- `origin`o referente é enviado e só contén a orixe (porto, protocolo, dominio), non a orixe + ruta que é o predeterminado
- `origin-when-cross-origin`ao cargar dende a mesma orixe (porto, protocolo, dominio) no iframe, o referente envíase na súa forma completa (orixe + ruta). En caso contrario, só se envía a orixe
- `same-origin`o referente só se envía cando se carga dende a mesma orixe (porto, protocolo, dominio) no iframe
- `strict-origin` envía a orixe como referencia se a páxina actual se carga a través de HTTPS e o iframe tamén se carga no protocolo HTTPS. Non envía nada se o iframe se carga a través de HTTP
- `strict-origin-when-cross-origin` envía a orixe + o camiño como referencia cando se traballa na mesma orixe. Envía a orixe como referencia se a páxina actual se carga a través de HTTPS e o iframe tamén se carga no protocolo HTTPS. Non envía nada se o iframe se carga a través de HTTP
- `unsafe-url`: envía a orixe + o camiño como referencia mesmo cando se cargan recursos desde HTTP e a páxina actual se carga a través de HTTPS

## 12. Imaxes

As imaxes pódense mostrar usando a etiqueta `img`.

Esta etiqueta acepta un atributo `src`, que usamos para definir a fonte da imaxe:

```html
<img src="image.png" />
```

Podemos utilizar un amplo conxunto de imaxes. Os máis comúns son PNG, JPEG, GIF, SVG e, máis recentemente, WebP.

O estándar HTML require `alt`que estea presente un atributo para describir a imaxe. Isto é usado polos lectores de pantalla e tamén polos robots dos buscadores:

```html
<img src="dog.png" alt="A picture of a dog" />
```

Podes establecer os atributos `width` e `height`para establecer o espazo que ocupará o elemento, para que o navegador poida ter en conta e non cambie o deseño cando estea completamente cargado. Toma un valor numérico, expresado en píxeles.

```html
<img src="dog.png" alt="A picture of a dog" width="300" height="200" />
```

### 12.1. A etiqueta `figure`

A etiqueta `figure` úsase a miúdo xunto coa etiqueta `img`.

`figure` é unha etiqueta semántica que se usa a miúdo cando se quere mostrar unha imaxe cunha lenda. Usalo así:

```html
<figure>
  <img src="dog.png" alt="A nice dog" />
  <figcaption>A nice dog</figcaption>
</figure>
```

A etiqueta `figcaption` envolve o texto do subtítulo.

### 12.2. Usando imaxes sensibles `srcset`

O atributo `srcset` permítelle configurar imaxes sensibles que o navegador pode usar dependendo da densidade de píxeles ou do ancho da xanela, segundo as súas preferencias. Deste xeito, só pode descargar os recursos necesarios para renderizar a páxina, sen descargar unha imaxe máis grande se está nun dispositivo móbil, por exemplo.

Aquí tes un exemplo, onde damos 4 imaxes adicionais para 4 tamaños de pantalla diferentes:

```html
<img
  src="dog.png"
  alt="A picture of a dog"
  srcset="
    dog-500.png   500w,
    dog-800.png   800w,
    dog-1000.png 1000w,
    dog-1400.png 1400w
  "
/>
```

No `srcset`usamos a `w`medida para indicar o ancho da xanela.

Xa que o facemos, tamén necesitamos usar o atributo `sizes`:

```html
<img
  src="dog.png"
  alt="A picture of a dog"
  sizes="(max-width: 500px) 100vw, (max-width: 900px) 50vw, 800px"
  srcset="
    dog-500.png   500w,
    dog-800.png   800w,
    dog-1000.png 1000w,
    dog-1400.png 1400w
  "
/>
```

Neste exemplo, a `(max-width: 500px) 100vw, (max-width: 900px) 50vw, 800px`cadea do atributo `sizes` describe o tamaño da imaxe en relación coa ventana gráfica, con varias condicións separadas por coma.

A condición do medio `max-width: 500px` establece o tamaño da imaxe en correlación co ancho da ventana gráfica. En resumo, se o tamaño da xanela é < 500px, renderiza a imaxe ao 100% do tamaño da xanela.

Se o tamaño da xanela é maior pero < `900px`, renderiza a imaxe ao 50 % do tamaño da xanela.

E aínda que sexa máis grande, renderiza a imaxe en 800px.

A `vw`unidade de medida pode ser nova para ti e, en resumo, podemos dicir que 1 `vw`é o 1% do ancho da xanela, así como `100vw`o 100% do ancho da xanela.

Un sitio web útil para xerar `srcset`imaxes cada vez máis pequenas é [https://responsivebreakpoints.com/](https://responsivebreakpoints.com/) .

### 12.3. A etiqueta `picture`

HTML tamén nos dá a etiqueta `picture`, que fai un traballo moi similar a `srcset`, e as diferenzas son moi sutís.

Usas `picture`cando en lugar de servir só unha versión máis pequena dun arquivo, queres cambialo por completo. Ou ofrece un formato de imaxe diferente.

O mellor caso de uso que atopei é ao servir unha imaxe WebP, que é un formato que aínda non é moi compatible. Na etiqueta `picture` especificas unha lista de imaxes, e utilizaranse en orde, polo que no seguinte exemplo, os navegadores que admiten WebP usarán a primeira imaxe e, se non, volverán a JPG:

```html
<picture>
  <source type="image/webp" srcset="image.webp" />
  <img src="image.jpg" alt="An image" />
</picture>
```

> A etiqueta `source` define un (ou máis) formatos para as imaxes. A etiqueta `img` é a alternativa no caso de que o navegador sexa moi antigo e non admita a etiqueta `picture`.

Na etiqueta `source` que hai dentro `picture` podes engadir un atributo `media` para establecer consultas multimedia.

O exemplo que segue funciona como o anterior con `srcset`:

```html
<picture>
  <source media="(min-width: 500w)" srcset="dog-500.png" sizes="100vw" />
  <source media="(min-width: 800w)" srcset="dog-800.png" sizes="100vw" />
  <source media="(min-width: 1000w)" srcset="dog-1000.png" sizes="800px" />
  <source media="(min-width: 1400w)" srcset="dog-1400.png" sizes="800px" />
  <img src="dog.png" alt="A dog image" />
</picture>
```

Pero ese non é o seu caso de uso, porque como podes ver é moito máis detallado.

A etiqueta `picture` é recente pero agora é [compatible](https://caniuse.com/%23search%3Dpicture) con todos os navegadores principais, excepto Opera Mini e IE (todas as versións).

## 13. Accesibilidade

É importante que deseñamos o noso HTML tendo en conta a accesibilidade.

Ter HTML accesible significa que as persoas con discapacidade poden usar a Web. Hai usuarios totalmente cegos ou con discapacidade visual, persoas con problemas de perda auditiva e multitude doutras discapacidades diferentes.

Desafortunadamente, este tema non cobra a importancia que precisa, e non parece tan xenial coma outros.

E se unha persoa non pode _ver_ a túa páxina, pero aínda así quere consumir o seu contido? En primeiro lugar, como o fan? Non poden usar o rato, usan algo chamado **lector de pantalla** . Non tes que imaxinar iso. Podes probar un agora: Google ofrece a [extensión gratuíta de ChromeVox Chrome](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn/) . A accesibilidade tamén debe encargarse de que as ferramentas poidan seleccionar facilmente elementos ou navegar polas páxinas.

As páxinas web e as aplicacións web non sempre se crean coa accesibilidade como un dos seus primeiros obxectivos, e quizais a versión 1 non sexa accesible, pero é posible facer accesible unha páxina web despois do feito. Antes é mellor, pero nunca é tarde.

É importante e no meu país, os sitios web creados polo goberno ou outras organizacións públicas deben ser accesibles.

Que significa isto para facer accesible un HTML? Permíteme ilustrar as principais cousas nas que debes pensar.

> Nota: hai que ter en conta varias outras cousas, que poden estar no tema CSS, como cores, contraste e fontes. Ou [como facer que as imaxes SVG sexan accesibles](https://css-tricks.com/accessible-svgs/) . Aquí non falo deles.

### 13.1. Usa HTML semántico

O HTML semántico é moi importante e é unha das principais cousas que debes coidar. Permítanme ilustrar algúns escenarios comúns.

É importante utilizar a estrutura correcta para as etiquetas de título. O máis importante é `h1`, e usa números máis altos para os menos importantes, pero todos os títulos do mesmo nivel deberían ter o mesmo significado (pénsao como unha estrutura en árbore)

```css
h1
h2
h3
h2
h2
h3
h4
```

Use `strong` e `em`no canto de `b` e`i` . Visualmente teñen o mesmo aspecto, pero os 2 primeiros teñen máis significado asociado a eles. `b` e `i`son elementos máis visuais.

As listas son importantes. Un lector de pantalla pode detectar unha lista e proporcionar unha visión xeral e, a continuación, permitir que o usuario elixa entrar na lista ou non.

Unha táboa debe ter unha etiqueta `caption` que describa o seu contido:

```html
<table>
  <caption>
    Dogs age
  </caption>
  <tr>
    <th>Dog</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Roger</td>
    <td>7</td>
  </tr>
</table>
```

### 13.2. Use atributos `alt` para imaxes

Todas as imaxes deben ter unha etiqueta `alt` que describa o contido da imaxe. Non é só unha boa práctica, é requirida polo estándar HTML e o teu HTML sen el non está validado.

```html
<img src="dog.png" alt="picture of my dog" />
```

Tamén é bo para os buscadores, se iso é un incentivo para que o engadas.

### 13.3. Usa o atributo `role`

O`role` atributo permíteche asignar roles específicos aos distintos elementos da túa páxina.

Podes asignar moitos roles diferentes: complementario, lista, elemento de lista, principal, navegación, rexión, pestana, alerta, aplicación, artigo, banner, botón, cela, caixa de verificación, información de contido, diálogo, documento, fonte, figura, formulario, cuadrícula, celda de cuadrícula, encabezado, img, caixa de lista, fila, grupo de filas, busca, interruptor, táboa, panel de pestanas, caixa de texto, temporizador.

É moito e para a referencia completa de cada un deles déixovos [esta ligazón MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) . Pero non precisa asignar un rol a cada elemento da páxina. Os lectores de pantalla poden inferir a partir da etiqueta HTML na maioría dos casos. Por exemplo, non precisa engadir unha etiqueta de rol ás etiquetas semánticas como `nav`, `button`, `form`.

Poñamos o exemplo da etiqueta `nav`. Podes usalo para definir a navegación da páxina deste xeito:

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
</nav>
```

Se estiveses _obrigado_ a usar unha `div` etiqueta en lugar de `nav`, usarías o `navigation`rol:

```html
<div role="navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
</div>
```

Entón, aquí tes un exemplo práctico: `role`úsase para asignar un valor significativo cando a etiqueta non transmite xa o significado.

### 13.4. Usa o atributo `tabindex`

O atributo `tabindex` permítelle cambiar a orde de como se preme a tecla Tabulador selecciona os elementos "seleccionables". De forma predeterminada, só se poden "seleccionar" as ligazóns e os elementos do formulario mediante a navegación mediante a tecla Tabulador (e non é necesario configuralos `tabindex`).

Engadindo `tabindex="0"` fai seleccionable un elemento:

```html
<div tabindex="0">...</div>
```

Usando`tabindex="-1"` elimina un elemento desta navegación baseada en pestanas e pode ser bastante útil.

### 13.5. Usa os atributos `aria`

ARIA é un acrónimo que significa Aplicacións de Internet enriquecidas accesibles e define a semántica que se pode aplicar aos elementos.

#### 13.5.1.`aria-label`

Este atributo úsase para engadir unha cadea para describir un elemento.

**Exemplo**:

```html
<p aria-label="The description of the product">...</p>
```

Utilizo este atributo na barra lateral do meu blog, onde teño unha caixa de entrada para a busca sen unha etiqueta explícita, xa que ten un atributo de marcador de posición.

#### 13.5.2.`aria-labelledby`

Este atributo establece unha correlación entre o elemento actual e o que o etiqueta.

Se sabes como `input` se pode asociar un elemento a un elemento `label`, é semellante.

Pasamos o identificador do elemento que describe o elemento actual.

**Exemplo**:

```html
<h3 id="description">The description of the product</h3>

<p aria-labelledby="description">...</p>
```

#### 13.5.3.`aria-describedby`

Este atributo permítenos asociar un elemento con outro elemento que serve de descrición.

**Exemplo**:

```html
<button aria-describedby="payNowDescription">Pay now</button>

<div id="payNowDescription">
  Clicking the button will send you to our Stripe form!
</div>
```

#### 13.5.4. Usa aria-hidden para ocultar contido

Gústame un deseño minimalista nos meus sitios. O meu blog, por exemplo, é principalmente contido, con algunhas ligazóns na barra lateral. Pero algunhas cousas da barra lateral son só elementos visuais que non se suman á experiencia dunha persoa que non pode ver a páxina. Como a imaxe do meu logotipo ou o selector de temas escuros/brillantes.

Engadir o atributo `aria-hidden="true"` indicará aos lectores de pantalla que ignoren ese elemento.
....

\* _in progress_

---

- "HTML Unleashed" de Flavio Copes, 1997
