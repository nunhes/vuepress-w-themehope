**HTML5 engadiu novos recursos á túa caixa de ferramentas, é probable que queiras crear un modelo HTML para comezar todos os proxectos futuros. Definitivamente paga a pena facelo, e hai moitos puntos de partida en liña para axudarche a crear o teu propio modelo HTML5.**

~~Neste artigo, veremos como comezar a construír o teu propio modelo HTML5. Percorreremos os elementos esenciais dun modelo HTML, rematando cun modelo básico que podes levar contigo e construír.~~

~~Se prefires coller o código agora e ler este artigo máis tarde, [**aquí tes o noso modelo HTML5 rematado**](https://www.sitepoint.com/a-basic-html5-template/#thecompletehtml5boilerplate) .~~



## Anatomía dun documento HTML5

Un modelo HTML normalmente componse das seguintes partes:

1. [A declaración do tipo de documento](#thehtml5doctype) (ou doctype)
2. [O elemento `html`](#thehtmlelement)
3. [A codificación de caracteres](#htmldocumentcharacterencoding)
4. [O metaelemento da vista](#theviewportmetaelement)
5. [`title`, `description`e`author`](https://www.sitepoint.com/a-basic-html5-template/#thetitledescriptionandauthor)
6. [Metaelementos Open Graph para tarxetas sociais](https://www.sitepoint.com/a-basic-html5-template/#opengraphmetaelementsforsocialcards)
7. [Favicons e iconas táctiles](https://www.sitepoint.com/a-basic-html5-template/#faviconsandtouchicons)
8. [Ligazóns a follas de estilo e guións](https://www.sitepoint.com/a-basic-html5-template/#includingastylesheetandscripts)

Ademais da declaración do tipo de documento e do elemento `<html>` os elementos enumerados anteriormente atoparanse principalmente dentro da sección `<head>` do modelo HTML.

## O tipo de documento HTML5

O teu modelo HTML5 debe comezar cunha declaración de tipo de documento ou *doctype* . Un doctype é simplemente un xeito de indicarlle ao navegador, ou a calquera outro analizador, que tipo de documento está mirando. 

No caso dos arquivos HTML, está etiqueta indica a versión específica e o *sabor* HTML. Está declaración do tipo de documento debe ser sempre o primeiro elemento na parte superior de calquera arquivo HTML. Fai uns anos, a declaración doctype era bastante engedellada e dificil de completar.

Declaración para os documentos XHTML:
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

Declaración para os documentos HTML 4:
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
            "http://www.w3.org/TR/html4/loose.dtd">
```

Coa chegada de HTML5, eses fantasmas indescifrables desapareceron e agora todo o que necesitas é isto:

```html
<!doctype html>
```

Sinxelo, e ao gran. O doctype pódese escribir en maiúsculas, minúsculas ou en mestura. Notarás que falta  o "5" na declaración. Aínda que a versión actual do marcado web coñécese como "HTML5", realmente é só unha evolución dos estándares HTML anteriores, e as futuras especificacións serán simplemente un desenvolvemento do que temos hoxe. Nunca haberá un "HTML6", polo que tamén resulta común e admitido referirse ao estado actual do marcado web simplemente como "HTML".

Dado que os navegadores están obrigados a admitir contidos máis antigos que inda viven na web, non se depende do doctype para indicarlles aos navegadores qué características se deben admitir dun determinado documento. Así, o doctype por si só non vai facer que as túas páxinas sean compatibles coas características modernas de HTML. En realidade é o navegador o encargado de determinar a compatibilidade das funcións caso por caso, independentemente do tipo de documento utilizado. De feito, podes usar un dos doctypes máis antigos cos novos elementos HTML5 nunha páxina e a páxina mostrarase igual que se usase doctype máis novo

En realidad, es el navegador el que debe determinar la compatibilidad de las características caso por caso, independientemente del doctype utilizado. De hecho, puedes utilizar uno de los doctypes más antiguos con los nuevos elementos de HTML5 en una página y la página se renderizará igual que si utilizaras el nuevo doctype.





## O `<html>`Elemento

Despois do doctype en calquera documento HTML está o elemento `<html>`:

```markup
<html lang="en">
```

Isto non sufriu ningún cambio significativo desde a aparición de HTML5. No fragmento de código anterior, incluímos o atributo `lang` cun valor de `en`, que especifica que o documento está en inglés. Isto non é necesario para que unha páxina se valide, pero recibirás unha advertencia da maioría dos validadores de código se non o inclúes.

O `<html>`elemento divídese en dúas partes, o `<head>`e `<body>`seccións. A `<head>`sección contén información importante sobre o documento que non se mostra ao usuario final, como a [codificación de caracteres](https://www.sitepoint.com/a-basic-html5-template/#htmldocumentcharacterencoding) e [ligazóns a arquivos CSS e posiblemente JavaScript](https://www.sitepoint.com/a-basic-html5-template/#includingastylesheetandscripts) . A `<body>`sección contén todo o que se mostra no navegador: texto, imaxes, etc.

## Codificación de caracteres de documentos HTML

A primeira liña dentro da sección `<head>` dun documento HTML é a que define a codificación de caracteres para o documento. Esta é unha función opcional e non causará avisos nos validadores, pero recoméndase para a maioría das páxinas HTML:

```markup
<meta charset="utf-8">
```

En case todos os casos, se emprega o valor  `utf-8`. Unha explicación completa da codificación de caracteres está fóra do alcance deste artigo, e probablemente tampouco che resulte tan interesante. Non obstante, se queres profundizar un pouco máis, podes [ler sobre a codificación de caracteres na especificación HTML](https://html.spec.whatwg.org/multipage/infrastructure.html#encoding-terminology) .

<iframe frameborder="0" src="https://8a3a1affd7b9f05dbfd70710ff677661.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html" id="google_ads_iframe_/5376056,7448792/sitepoint_dynamic/dynamic_1_0" title="3rd party ad content" name="" scrolling="no" marginwidth="0" marginheight="0" width="728" height="90" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id="d" data-load-complete="true" style="box-sizing: border-box !important; border: 0px; vertical-align: bottom;"></iframe>



*Nota: para garantir que certos navegadores máis antigos lean correctamente a codificación de caracteres, a declaración de codificación de caracteres completa debe incluírse nalgún lugar dentro dos primeiros 512 caracteres do documento. Tamén debería aparecer antes de calquera elemento baseado no contido (como o `<title>`elemento que aparece máis adiante no noso exemplo)* .

Poderiamos escribir moito máis sobre este tema, pero de momento, conformámonos con aceptar esta declaración simplificada e pasar á seguinte parte do noso documento.

## O Meta Elemento Viewport

O metaelemento viewport é unha característica que verás en case todos os modelos HTML5. É importante para o deseño web responsive e o deseño para móbiles:

```markup
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Este `<meta>`elemento inclúe dous atributos que funcionan xuntos como un conxunto de nome/valor. Neste caso, o `name`está establecido en `viwport`e o valor é `width=device-width, initial-scale=1`. Isto só o utilizan os dispositivos móbiles. Notarás que o valor ten dúas partes, descritas aquí:

- `width=device-width`: o ancho de píxeles da ventana gráfica na que quere que se represente o sitio web.
- `initial-scale`: debería ser un número positivo entre 0,0 e 10,0. Un valor de "1" indica que hai unha relación de 1:1 entre o ancho do dispositivo e o tamaño da ventana gráfica.

Podes ler un pouco máis sobre estas funcións [do metaelemento en MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_other_specifications) , pero polo momento só sabes que, na maioría dos casos, este metaelemento con esta configuración é o mellor para sitios web adaptados a dispositivos móbiles.

## Os `<title>`, `description`, e`author`

A seguinte sección do modelo HTML contén as seguintes tres liñas:

```markup
<title>A Basic HTML5 Template</title>
<meta name="description" content="A simple HTML5 Template for new projects.">
<meta name="author" content="SitePoint">
```

Estes elementos forman parte do HTML durante moito tempo, polo que non hai nada novo aquí. O `<title>`é o que aparece na barra de título do navegador (como cando pasa o rato sobre a pestana do navegador). Este elemento é o único elemento obrigatorio dentro do `<head>`.

Os outros dous son `<meta>`elementos opcionais que definen unha descrición para fins de SEO xunto cun autor. Todos os elementos no interior `<head>`son opcionais, excepto `<title>`. En realidade, pode pór [como moitos válidos ``elementos](https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element) no `<head>`momento.

## Open Graph Meta Elements para tarxetas sociais

Como se mencionou, todos os metaelementos son opcionais, pero moitos teñen beneficios para o SEO e o marketing en redes sociais. A seguinte sección do noso modelo HTML5 inclúe algunhas destas opcións de metaelementos:

```markup
<meta property="og:title" content="A Basic HTML5 Template">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.sitepoint.com/a-basic-html5-template/">
<meta property="og:description" content="A simple HTML5 Template for new projects.">
<meta property="og:image" content="image.png">
```

Estes `<meta>`elementos aproveitan algo chamado protocolo Open Graph, e hai moitos outros que podes usar. Estes son os que é probable que uses con máis frecuencia. Podes ver unha lista completa das meta opcións dispoñibles de Open Graph no [sitio web de Open Graph](https://ogp.me/) .

Os que incluímos aquí mellorarán a aparencia da páxina web cando estea ligada nunha publicación de redes sociais. Por exemplo, os cinco `<meta>`elementos incluídos aquí aparecerán nas tarxetas sociais que inclúen os seguintes datos:

- un título para o contido
- o tipo de contido que se entrega
- o URL canónico para o contido
- unha descrición do contido
- unha imaxe para asociar co contido

Cando ves unha publicación compartida nas redes sociais, moitas veces verás estes datos engadidos automaticamente á publicación das redes sociais. Por exemplo, a continuación móstrase o que aparecería nun tweet se incluíses unha ligazón á páxina de inicio de GitHub:

![Tarxeta GitHub](https://uploads.sitepoint.com/wp-content/uploads/2021/06/1624432100github-card.png)

<iframe frameborder="0" src="https://8a3a1affd7b9f05dbfd70710ff677661.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html" id="google_ads_iframe_/5376056,7448792/sitepoint_dynamic/dynamic_2_0" title="3rd party ad content" name="" scrolling="no" marginwidth="0" marginheight="0" width="728" height="90" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id="e" data-load-complete="true" style="box-sizing: border-box !important; border: 0px; vertical-align: bottom;"></iframe>



[Fonte da imaxe: GitHub](https://user-images.githubusercontent.com/558709/121095418-5218c200-c7be-11eb-97d3-75bbaf52e244.png)

## Favicons e iconas táctiles

A seguinte sección do modelo HTML5 inclúe `<link>`elementos que indican recursos para incluír como favicon e icona táctil de mazá:

```markup
<link rel="icon" href="/favicon.ico">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

O `favicon.ico`arquivo é para navegadores legados e non ten que estar incluído no código. Sempre que o `favicon.ico`arquivo estea incluído na raíz do proxecto, o navegador atoparao automaticamente. O `favicon.svg`arquivo é para navegadores modernos que admiten iconas SVG. O último elemento fai referencia á icona que se usa nos dispositivos Apple cando a páxina se engade á pantalla de inicio do usuario.

Hai outras opcións que pode incluír aquí, incluíndo un arquivo de manifesto de aplicación web que fai referencia a outras iconas. Para unha discusión completa, recomendamos a [publicación de Andrey Sitnik](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs) sobre o tema. Pero os incluídos aquí serán suficientes para un simple modelo de inicio.

## Incluíndo unha folla de estilo e scripts

As dúas últimas partes significativas do noso modelo HTML son a referencia a unha folla de estilo e un guión. Ambos son opcionais, por suposto:

```markup
  <link rel="stylesheet" href="css/styles.css?v=1.0">
```

A folla de estilo inclúese usando o `<link>`elemento cun `rel`atributo apropiado . Pódese incluír unha folla de estilo en calquera lugar dun documento, pero normalmente verá dentro do `<head>`. E a diferenza das versións antigas de HTML, non é necesario incluír un `type`atributo (que nunca foi necesario en primeiro lugar).

Do mesmo xeito que cos elementos de guión, verás case en calquera parte dun documento, pero normalmente están na parte inferior (xusto antes da `</body>`etiqueta de peche ) como mellor práctica.

```markup
<script src="js/scripts.js"></script>
```

Colocar o `<script>`elemento na parte inferior da páxina é para os efectos da velocidade de carga da páxina. Cando un navegador atopa un script, fará unha pausa na descarga e renderización do resto da páxina mentres analiza o script. Isto fai que a páxina se cargue moito máis lentamente cando se inclúen scripts grandes na parte superior da páxina antes de calquera contido. Así, a maioría dos scripts deberían colocarse na parte inferior da páxina, de xeito que só se analizarán despois de que se cargue o resto da páxina. Pero teña en conta que, nalgúns casos, é posible *que* o script *teña* que colocarse na cabeceira do documento, porque quere que teña efecto antes de que o navegador comece a renderizar a páxina.

Do mesmo xeito que as referencias ás follas de estilo, o `type`atributo nos scripts non é (e nunca foi) necesario. Xa que JavaScript é, para todos os efectos prácticos, a única linguaxe de secuencias de comandos real que se usa na web, e dado que todos os navegadores asumirán que estás a usar JavaScript aínda que non o declares explícitamente, podes deixar fóra con seguridade `type="text/javascript`, que moitas veces aparece no código heredado.

## Unha nota sobre os navegadores máis antigos e os novos elementos

Cando se introduciu HTML5, incluíu unha serie de elementos novos, como `<article>`e `<section>`. Poderías pensar que o soporte para elementos non recoñecidos sería un problema importante para os navegadores máis antigos, pero non o é! A maioría dos navegadores non lles importan as etiquetas que use. Se tiveses un documento HTML cun `<recipe>`elemento (ou incluso un `<ziggy>`elemento) nel e o teu CSS anexase algúns estilos a ese elemento, case todos os navegadores procederían coma se isto fose totalmente normal, aplicando o teu estilo sen queixas.

Por suposto, un documento tan hipotético non se validaría e pode ter problemas de accesibilidade, pero mostraríase correctamente en case todos os navegadores, a excepción das versións antigas de Internet Explorer (IE). Antes da versión 9, IE impedía que os elementos non recoñecidos recibisen estilo. Estes elementos misteriosos foron vistos polo motor de renderizado como "elementos descoñecidos", polo que non puideches cambiar o seu aspecto ou o seu comportamento. Isto inclúe non só os nosos elementos imaxinados, senón tamén todos os elementos que aínda non estaban por definir no momento en que se desenvolveron esas versións do navegador, incluídos os novos elementos HTML5.

Afortunadamente, os navegadores máis antigos que non admiten o estilo de elementos novos son practicamente inexistentes hoxe en día, polo que podes usar con seguridade calquera elemento HTML novo e sen preocupación en case calquera proxecto.

Dito isto, se *realmente* precisas admitir navegadores antigos, aínda podes usar o fiable [HTML5 Shiv](https://johnresig.com/blog/html5-shiv/) , unha sinxela peza de JavaScript desenvolvida orixinalmente por John Resig. [Inspirado no traballo de Sjoerd Visscher](https://www.paulirish.com/2011/the-history-of-the-html5-shiv/) , fixo que os novos elementos HTML5 fosen estilizados en versións antigas de IE. Realmente, porén, isto non debería ser necesario hoxe. Como indica [caniuse.com](https://caniuse.com/#feat=html5semantic) , os elementos HTML5 son compatibles con todos os navegadores en uso.

## O modelo completo de HTML5

Aquí tes o noso modelo HTML5 final, un modelo básico que podes usar para calquera proxecto:

```markup
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>A Basic HTML5 Template</title>
  <meta name="description" content="A simple HTML5 Template for new projects.">
  <meta name="author" content="SitePoint">

  <meta property="og:title" content="A Basic HTML5 Template">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.sitepoint.com/a-basic-html5-template/">
  <meta property="og:description" content="A simple HTML5 Template for new projects.">
  <meta property="og:image" content="image.png">

  <link rel="icon" href="/favicon.ico">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <link rel="stylesheet" href="css/styles.css?v=1.0">

</head>

<body>
  <!-- your content here... -->
  <script src="js/scripts.js"></script>
</body>
</html>
```

Hoxe podes soltar este modelo HTML5 sinxelo e listo para usar en calquera proxecto. Partindo diso, podes engadir o contido que queiras entre as etiquetas `<body>`e `</body>`.

## Próximos pasos

Unha boa forma de levar os teus deseños web ao seguinte nivel é con *[The Principles of Beautiful Web Design, 4th Edition](https://www.sitepoint.com/premium/books/the-principles-of-beautiful-web-design-4th-edition/?utm_source=blog&utm_medium=articles)* . Este libro ensinarache os principios do deseño *e* amosarache como implementalos na web. Foi completamente reescrito en setembro de 2020 e inclúe técnicas de vangarda das que non liches en ningún outro lugar.

Para mellorar os teus coñecementos de CSS, o noso currículo de [proxectos CSS modernos](https://www.sitepoint.com/master-modern-css-projects/) axudarache a dominar as últimas edicións avanzadas de CSS3.

Máis aló dese punto, pode levar o desenvolvemento do seu sitio web ou aplicación web ao seguinte nivel con interactividade e interfaces de usuario programáticas e reactivas. Consulte os amplos recursos de SitePoint sobre [JavaScript](https://www.sitepoint.com/javascript/) e [React](https://www.sitepoint.com/javascript/react/) , por exemplo. E descubre como [comezar novos proxectos máis rápido](https://www.sitepoint.com/start-new-projects-faster/) coa nosa guía das mellores ferramentas e bibliotecas web de andamios. Alternativamente, se queres crear experiencias web sen aprender a codificar, le o noso manual sobre o [movemento sen código](https://www.sitepoint.com/the-rise-of-the-no-code-movement/) . As últimas ferramentas sen código cambiaron o xogo. Por primeira vez, son o suficientemente potentes como para ofrecer unha alternativa seria á codificación en moitas situacións.


-----
_ref:
https://www.sitepoint.com/a-basic-html5-template/