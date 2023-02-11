# Elementos HTML5

# HTML: Linguaxe de marcado de hipertexto

**HTML** (HyperText Markup Language) é o bloque de construción máis básico da Web. Define o significado e a estrutura do contido web. Outras tecnoloxías ademais de HTML úsanse xeralmente para describir a aparencia/presentación ( [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) ) ou a funcionalidade/comportamento ( [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) ) da páxina web.

> "Hipertexto" refírese as ligazóns que conectan distintas páxinas web entre si, ben dentro dun único sitio web ou entre diferentes sitios web. As ligazóns son un aspecto fundamental da Web. Ao cargar contido en Internet e enlazalo con páxinas creadas por outras persoas, te convertes nun participante activo da World Wide Web.

HTML usa "marcas" para inserir texto, imaxes e outros contidos que logo se van a mostrar nun navegador web. HTML Markup inclúe "elementos" especiais, como

<p>HTML usa "marcas" para enxertar texto, imaxes e outro contido que logo se vai a mostrar nun navegador web. O marcado con HTML inclúe "elementos" especiais, como <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"><code>&lt;head&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title"><code>&lt;title&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body"><code>&lt;body&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header"><code>&lt;header&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer"><code>&lt;footer&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article"><code>&lt;article&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section"><code>&lt;section&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"><code>&lt;p&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"><code>&lt;div&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"><code>&lt;span&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"><code>&lt;img&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside"><code>&lt;aside&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio"><code>&lt;audio&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas"><code>&lt;canvas&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist"><code>&lt;datalist&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details"><code>&lt;details&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed"><code>&lt;embed&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav"><code>&lt;nav&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output"><code>&lt;output&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress"><code>&lt;progress&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video"><code>&lt;video&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"><code>&lt;ul&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"><code>&lt;ol&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li"><code>&lt;li&gt;</code></a> e moitos outros.</p>

A seguir se amosa unha lista dos elementos do estándar HTML5, descritos pola súa etiqueta de apertura e agrupados pola súa función. 

Esta non é unha lista pechada e pode que estes ou outros elementos desaparezan, se engadan ou se modifiquen ou estendan para ir actualizando a especificación HTML5. 

Aquí se enumeran todos os [elementos ](https://developer.mozilla.org/en-US/docs/Glossary/Element)[HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML) , que se crean mediante [etiquetas](https://developer.mozilla.org/en-US/docs/Glossary/Tag) .

Agrupados pola súa función para que sexa máis sinxelo atopar o que precisas. 

**Nota: para** obter máis información sobre os conceptos básicos dos elementos e atributos HTML, consulte [a sección sobre elementos do artigo Introdución ao HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML#elements_—_the_basic_building_blocks) .

## Raíz principal

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) | Representa a raíz (elemento de nivel superior) dun documento HTML, polo que tamén se denomina *elemento raíz*. Todos os demais elementos deben ser descendentes deste. |

## Metadatos do documento

Os metadatos contén información sobre a páxina. Isto inclúe información sobre estilos, scripts e datos para axudar ao software ( [motores de busca](https://developer.mozilla.org/en-US/docs/Glossary/Search_engine) , [navegadores](https://developer.mozilla.org/en-US/docs/Glossary/Browser) , etc.) a utilizar e renderizar a páxina. Os metadatos para estilos e guións pódense definir na páxina ou ligazón a outro ficheiro que conteña a información.

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) | Especifica a URL base a usar para todos *as* URL *relativas* nun documento. Só pode haber un elemento `<base>` nun documento. |
| [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) | Contén información sobre o documento lexible por máquina (metadatos) e importantes para os axentes cliente - navegadores, lectores de pantalla,..-, como son o  [título](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) , [guións](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) e [follas de estilo](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) . |
| [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) | Especifica as relacións entre o documento actual e un recurso externo. Este elemento úsase habitualmente para enlazar as follas de estilo CSS, para establecer iconas identificadoras dos sitios (tanto iconas de estilo "favicon" como iconas para a pantalla de inicio e aplicacións en dispositivos móbiles), ou recursos externos como as fontes de Google, entre outras cousas. |
| [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) | Incorpora metadatos que non poden ser representados por outros elementos meta como  `base`,`link`,`script`,`style` ou `title`. Polo xeral estas etiquetas levan os atributos `name` e  `content` para indicar o seu cometido e o contido que ese cometido require. `author`. `keywords` ou `description` son algunhas aplicacións usuais desta etiqueta. |
| [`<style>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) | Contén información de estilo para un documento ou parte dun documento. O seu contido é código CSS, que se aplica ao contido do documento. |
| [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) | Define o título do documento, que se mostra na barra de título do navegador ou na pestana dunha páxina. Só contén texto; as etiquetas dentro deste elemento son ignoradas. |

## Raíz dos contidos

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) | Representa o contido dun documento HTML. Só pode haber un elemento **`<body>`**  nun documento. |

## Disposición dos contidos

Os elementos para a disposición de contido permítenche organizar o contido do documento en pezas lóxicas. Usa estes elementos de seccionado para crear un esquema xeral para a disposición do contido da páxina, incluíndo a navegación, as cabeceiras, pés de páxina e elementos de título para identificar seccións de contido.

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<address>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address) | Indica que o HTML adxunto proporciona información de contacto para unha persoa ou persoas ou para unha organización. |
| [`<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) | Representa unha composición autónoma nun documento, páxina, aplicación ou sitio, que se pretende construír. Como composición autónoma tamén se pode distribuír ou reutilizar de forma independente noutro contexto html. Os exemplos inclúen: unha publicación nun foro, unha revista ou un artigo de xornal, ou unha entrada nun blog, unha tarxeta de produto, un comentario enviado polo usuario, un widget ou gadget interactivo ou calquera outro contido independente. |
| [`<aside>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) | Representa unha parte dun documento cuxo contido só está indirectamente relacionado co contido principal do documento. Os `aside` preséntanse frecuentemente como barras laterais ou caixas para contido arbitrario -banner- ou chamadas á acción. |
| [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) | Representa un pé de páxina para o [contido de sección](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#sectioning_content) máis próximo ou para o elemento [raíz de seccionamento](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#sectioning_root) .   `<footer>` normalmente contén información sobre o autor da sección, datos de copyright ou ligazóns a documentos relacionados. |
| [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) | Representa contido introdutorio, normalmente un grupo de informacións claves e/ou de navegación. Pode conter algúns elementos coma título ou tamén un logotipo, un formulario de busca, un nome de autor.... |
| [`<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) | Os elementos **`<h*>`** representan seis niveis de títulares de sección. `<h1>` é o nivel de sección máis alto e `<h6>` é o máis baixo. Son de grande axuda para a xerarquización de contidos, para a indexación e para a accesibilidade. |
| [`<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) | Representa o contido principal do documento. Esta área consiste nunha ou varias seccións co contido principal. |
| [`<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) | Representa unha sección dunha páxina cuxa finalidade é proporcionar ligazóns de navegación, ben dentro do documento actual ou cara outros documentos. Exemplos comúns de seccións de navegación son os menús, as táboas de contidos e os índices. |
| [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) | Representa unha sección lóxica independente dun documento, e que non ten un elemento semántico máis específico para representalo. En xeral é unha bóa práctica que as seccións teñan un título. |

## Contido de texto

Os elementos HTML para contido de texto serven para organizar bloques ou seccións de contido colocadas entre as etiquetas de apertura [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)e de peche `</body>`. Asemade son elementos  importantes para a [accesibilidade](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility) e o [SEO](https://developer.mozilla.org/en-US/docs/Glossary/SEO) , xa que estes elementos identifican a finalidade ou a estrutura dese contido.

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<blockquote>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote) | Indica que o texto adxunto é unha cita ampliada. Normalmente, isto faise visualmente mediante sangría (ver [Notas](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#usage_notes) para saber como cambialo). Ao tempo que se presenta o texto da cita, pódese proporcionar a URL da fonte da cita usando o atributo **cite**. |
| [`<dd>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd) | Proporciona a descrición, definición ou valor para o termo precedente (`dt`) nunha lista de descrición ( `dl`). |
| [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) | É o contedor xenérico para o contido de fluxo. Non ten ningún efecto sobre o contido ou o deseño ata que se lle aplica un estilo mediante CSS (por exemplo, aplicándolle unha clase de estilo directamente, ou aplicando algún tipo de modelo de deseño coma Grid ou [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) ao elemento principal). |
| [`<dl>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) | Representa unha lista de descrición. O elemento inclúe unha lista de grupos de termos (especificados mediante o elemento `dt`) e descricións (proporcionadas por elementos `dd`). Os usos comúns deste elemento son implementar un glosario ou mostrar metadatos (nunha lista de pares clave-valor). |
| [`<dt>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt) | Especifica un termo nunha lista de descricións ou definicións e, como tal, debe usarse dentro dun elemento  `dl`. Adoita ir seguido dun elemento `dd`; non obstante, varios elementos `<dt>` seguidos, sen alternar con elementos `<dd>` indican que varios termos están definidos polo elemento `<dd>` inmediatamente seguinte. |
| [`<figcaption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption) | Representa unha lenda ou pé de foto que describe o resto do contido do seu elemento `figure` principal. |
| [`<figure>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) | Representa contido autónomo, que pode levar ou non un título opcional, que se especifica mediante o elemento `figcaption`. A imaxe, a súa lenda e o seu contido están referenciados como unha única unidade **<figure>`**. |
| [`<hr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr) | É un separador. Representa unha ruptura temática entre elementos a nivel de parágrafo: por exemplo, un cambio de escena nunha historia ou un cambio de tema dentro dunha sección. |
| [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) | Úsase para representar un elemento nunha lista. Debe estar contida nun elemento principal: unha lista ordenada (`ol` ), unha lista non ordenada (`ul` ) ou un menú (`nav` ). Nos menús e listas non ordenadas, os elementos da lista adoitan mostrarse mediante viñetas. Nas listas ordenadas, adoitan mostrarse cun contador ascendente á esquerda, como un número ou unha letra. |
| [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) | Representa unha lista ordenada de elementos, normalmente representada como unha lista numerada. |
| [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) | Representa un parágrafo. Os parágrafos adoitan representarse nos medios visuais como bloques de texto separados de bloques adxacentes mediante liñas en branco e/ou sangría de primeira liña, pero os parágrafos HTML poden ser calquera agrupación estrutural de contido relacionado, coma imaxes ou campos de formulario. |
| [`<pre>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre) | Representa texto preformatado que se presentará exactamente como está escrito no arquivo HTML. O texto adoita representarse usando un texto non proporcional ou un tipo de letra [monoespazado](https://en.wikipedia.org/wiki/Monospaced_font). O espazo en branco dentro deste elemento móstrase tal e como está escrito. |
| [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) | Representa unha lista de elementos non ordenada, normalmente representada como unha lista con viñetas. |

## Semántica do texto en liña

É importante empregar a semántica HTML de texto en liña para definir o significado, a estrutura ou o estilo dunha palabra, liña ou calquera peza de texto arbitraria.

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) | É o elemento de enlace (ou elemento de *áncora* ), que grazas ao seu [atributo `href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#href), crea unha hiperligazón a páxinas web, arquivos, enderezos de correo electrónico, localizacións na mesma páxina ou a calquera outra cousa que unha URL poida abordar. |
| [`<abbr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr) | Representa unha abreviatura ou acrónimo; o atributo opcional  `title`  pode proporcionar unha expansión ou descrición para a abreviatura. Se está presente,  `title`  debe conter esta descrición completa e nada máis. |
| [`<b>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b) | Utilízase para chamar a atención do lector sobre o contido dun elemento, ao que doutro xeito non se lle concede especial importancia. Antes coñecido como o elemento *negriña*, a maioría dos navegadores aínda io interpretan así: texto en negriña. Non obstante, non se debería usar para darlle estilo ao texto; en vez diso, deberías usar a propiedade CSS `font-weight`para crear texto en negriña ou o elemento `<strong>` para indicar que o texto é de especial importancia. |
| [`<bdi>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi) | Indica ao algoritmo bidireccional do navegador que trate o texto que contén illado do texto circundante. É especialmente útil cando un sitio web insire de forma dinámica algún texto e non coñece a direccionalidade do texto que se está a inserir. |
| [`<bdo>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo) | Anula a direccionalidade actual do texto, de xeito que o texto que contén se representa nunha dirección diferente. |
| [`<br>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br) | Produce un salto de liña no texto (retorno de carro). É útil para escribir un poema ou un enderezo, onde a división de liñas ten significado. |
| [`<cite>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite) | Úsase para describir unha referencia a unha obra creativa citada e debe incluír o título dese traballo. A referencia pode estar nunha forma abreviada segundo convencións adecuadas ao contexto relacionadas cos metadatos das citas. |
| [`<code>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code) | Amosa os seus contidos cun estilo destinado a indicar que o texto é un pequeno fragmento de código informático. De forma predeterminada, o texto do contido móstrase mediante a fonte monoespazo predeterminada do axente de usuario. |
| [`<data>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data) | Vincula un determinado contido cunha tradución lexible por máquina. Se o contido está relacionado coa hora ou a data, debe utilizarse o elemento `time`. |
| [`<dfn>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn) | Úsase para indicar o termo que se está a definir no contexto dunha frase ou frase de definición. O elemento `<p>`, o emparellamento  `dt`/`dd`   ou o elemento `section` que está máis apegado ao elemento antecesor máis próximo a `<dfn>` é considerado como a definición do termo. |
| [`<em>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em) | Marca o texto con énfase. O elemento `<em>`pódese aniñar, indicando con cada nivel de aniñado un maior grao de énfase. |
| [`<i>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i) | Representa un rango de texto que se diferencia do texto normal por algún motivo, como texto idiomático, termos técnicos, designacións taxonómicas, entre outros. Historicamente, presentábase en cursiva, a fonte orixinal da denominación deste elemento. O que desviou a ese cometido equivocado o uso do elemento. Algúns frameworks emprégano como punto de entrada a indicadores e iconas de valor informativo. |
| [`<kbd>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd) | Representa unha franxa de texto en liña que indica a entrada textual do usuario desde un teclado, entrada de voz ou calquera outro dispositivo de entrada de texto. Por convención, o axente de usuario mostra por defecto o contido dun elemento usando o seu tipo de letra monoespazo predeterminado, aínda que isto non sexa obrigado segundo o estándar HTML. |
| [`<mark>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark) | Representa texto que está **marcado** ou **destacado** para propósitos de referencia ou notación, debido á relevancia ou importancia da pasaxe marcada no contexto que encerra. |
| [`<q>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q) | Indica que o texto adxunto é unha breve cita en liña. A maioría dos navegadores modernos implementan isto rodeando o texto entre comiñas. Este elemento está pensado para citas curtas que non requiren saltos de parágrafo; para citas longas use o elemento`blockquote`. |
| [`<rp>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp) | Utilízase para proporcionar parénteses alternativos para os navegadores que non admiten a visualización de anotacións de rubí mediante o elemento `<ruby>`. Un elemento `<rp>` debe incluír cada un dos parénteses de apertura e peche que envolven o elemento `rt` que contén o texto da anotación. |
| [`<rt>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt) | Especifica o compoñente de texto ruby dunha anotación ruby, que se usa para proporcionar información de pronuncia, tradución ou transliteración para a tipografía do leste asiático. O elemento `<rt>`debe estar sempre contido dentro dun elemento `ruby`. |
| [`<ruby>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby) | Representa pequenas anotacións que se presentan enriba, debaixo ou xunto ao texto base, normalmente usadas para mostrar a pronuncia de caracteres do leste asiático. Tamén se pode usar para anotar outros tipos de texto, pero este uso é menos común. |
| [`<s>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s) | Representa o texto cun riscado ou liña que o atravesa. Usa o elemento `<s>` para representar cousas que xa non son relevantes ou que xa non son precisas. Non obstante, non é apropiado usar `<s>` cando se indican edicións de documentos; para iso, usa os elementos `del` e `ins`  , segundo corresponda. |
| [`<samp>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp) | Utilízase para encerrar texto en liña que representa a saída de mostra (ou citada) dun programa informático. Os seus contidos adoitan mostrarse usando o tipo de letra monoespazo predeterminado do navegador (como Courier ou Lucida Console). |
| [`<small>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small) | Representa comentarios secundarios e letra pequena, como copyright e texto legal, independentemente do seu estilo de presentación. De forma predeterminada, fai que o texto dentro da etiqueta teña un tamaño de letra máis pequeno, como `small` a `x-small` |
| [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span) | É un contedor en liña xenérico para redactar contido, que non representa nada inherentemente. Pódese usar para agrupar elementos con fins de estilo (usando os atributos `class`  ou `id` ), ou porque compartan valores de atributos, como `lang`. Debe usarse só cando ningún outro elemento semántico sexa apropiado. É moi parecido ao elemento `div`, pero `div` é un [elemento de bloque](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) mentres que `span`  é un [elemento en liña](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) . |
| [`<strong>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong) | Indica que os seus contidos teñen unha gran importancia, seriedade ou urxencia. Os navegadores adoitan mostrar o contido en negriña. |
| [`<sub>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub) | Especifica texto en liña que debe mostrarse coma subíndice só por motivos tipográficos. Os subíndices adoitan representarse cunha liña de base reducida utilizando texto máis pequeno. |
| [`<sup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup) | Especifica texto en liña que se mostrará como superíndice só por motivos tipográficos. Os superíndices adoitan representarse cunha liña base elevada usando texto máis pequeno. |
| [`<time>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time) | Representa un período específico de tempo. Pode incluír o atributo `datetime` para traducir datas a un formato lexible por máquina, o que permite mellores resultados nos motores de busca ou en funcións personalizadas, como recordatorios. |
| [`<u>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u) | Representa un tramo de texto en liña que se debe representar de forma que indique que ten unha anotación non textual. Isto preséntase por defecto como un simple subliñado sólido, pero pódese modificar mediante CSS. |
| [`<var>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var) | Representa o nome dunha variable nunha expresión matemática ou nun contexto de programación. Normalmente preséntase cunha versión en cursiva da tipografía actual, aínda que ese comportamento depende do navegador. |
| [`<wbr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr) | Representa unha oportunidade de quebra de palabra: unha posición dentro do texto onde o navegador pode romper unha liña opcionalmente, aínda que as súas regras de quebra de liña non crearían unha ruptura nesa localización. |

## Imaxe e multimedia

HTML admite varios recursos multimedia como imaxes, son e vídeo.

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<area>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) | Define unha área dentro dun mapa de imaxe que ten zonas predefinidas nas que se pode facer clic. Un *mapa de imaxes* permite asociar áreas xeométricas nunha imaxe con hipervínculos. |
| [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) | Úsase para inserir contido de son nos documentos. Pode conter unha ou varias fontes de audio, representadas mediante o atributo `src` ou o elemento `source`: o navegador escollerá a máis axeitada. Tamén pode ser o destino para a transmisión de medios, usando un `MediaStream`. |
| [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) | Incorpora unha imaxe no documento.                           |
| [`<map>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map) | Utilízase con elementos `area` para definir un mapa de imaxes (unha área de ligazón na que se pode facer clic). |
| [`<track>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track) | Úsase como fillo dos elementos multimedia `audio` e  `video`. Permíteche especificar pistas de texto cronometradas (ou datos baseados no tempo), por exemplo para xestionar automaticamente os subtítulos. As pistas están almacenadas en [formato WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) ( arquivos  `.vtt`) — Web Video Text Tracks. |
| [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) | Incorpora un reprodutor multimedia que admite a reprodución de vídeo no documento. Tamén se pode usar para contido de audio, inda que para iso o elemento `audio` pode proporcionar unha experiencia de usuario máis axeitada. |

## Contido incrustado

Ademais do contido multimedia normal, HTML permite incluír unha variedade de outros contidos, aínda que non sempre sexa fácil interactuar con eles.

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<embed>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed) | Incorpora contido externo nun punto especificado do documento. Este contido é proporcionado por unha aplicación externa ou outra fonte de contido interactivo, como un complemento do navegador. |
| [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) | Representa un contexto de navegación aniñado, incorporando outra páxina HTML dentro da actual. |
| [`<object>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object) | Representa un recurso externo, que se pode tratar como unha imaxe, un contexto de navegación aniñado ou un recurso que debe ser xestionado por un complemento. |
| [`<param>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param) | Define os parámetros dun elemento `object`.                  |
| [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) | Contén cero ou máis elementos `source` e un elemento `img` para ofrecer versións alternativas dunha imaxe para diferentes escenarios de visualización/dispositivo. |
| [`<portal>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/portal) | Permite incorporar outra páxina HTML na actual co fin de permitir unha navegación máis fluída nas páxinas novas. |
| [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source) | Especifica varios recursos multimedia para o elemento `picture`, o elemento `audio`  ou o elemento `video`. É un elemento baleiro, o que significa que non ten contido e non ten unha etiqueta de peche. Utilízase habitualmente para ofrecer o mesmo contido multimedia en varios formatos de arquivo co fin de ofrecer compatibilidade cunha ampla gama de navegadores. Máis información sobre [formatos de arquivo de imaxe](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types) e [formatos de arquivo multimedia](https://developer.mozilla.org/en-US/docs/Web/Media/Formats). |

## SVG e MathML

Podes inserir contido [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) e [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML) directamente en documentos HTML, utilizando os elementos [`svg`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg) e `<math>`.

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<svg>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg) | O elemento  `svg` é un contedor que define un novo sistema de coordenadas e unha [vista](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox). Utilízase como o elemento máis externo dos documentos SVG, pero tamén se pode usar para inserir un fragmento SVG dentro dun documento SVG ou HTML. |
| [`<math>`](https://developer.mozilla.org/en-US/docs/Web/MathML/Element/math) | O elemento de nivel superior en MathML é `<math>`. Toda instancia de MathML válida debe estar envolta en etiquetas `<math>`. Ademais, non debes aniñar un elemento `<math>`dentro de outro, pero podes ter un número arbitrario de elementos fillo dentro del. |

## Scripting

Para crear contido dinámico e aplicacións web, HTML admite o uso de linguaxes de script, sobre todo JavaScript. Algúns elementos apoian esta capacidade.

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) | Usa o elemento`<canvas>` coa [API de scripts de lenzo](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) ou coa [API WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) para debuxar gráficos e animacións. |
| [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) | Define unha sección de HTML que se inserirá se un tipo de script na páxina non é compatible ou se o script está desactivado no navegador. |
| [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) | Úsase para incrustar código ou datos executables; normalmente úsase para incrustar ou referirse a código JavaScript. O elemento `<script>` tamén se pode usar con outras linguaxes, como a linguaxe de programación GLSL de [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) e [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON). |

## Edicións delimitadas

Estes elementos permítenche indicar que partes específicas do texto foron alteradas.

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<del>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del) | Representa un rango de texto que foi eliminado dun documento. Isto pódese usar cando se representa "seguir os cambios" ou a información de diferenzas do código fonte, por exemplo. O elemento `ins` pódese utilizar co propósito contrario: indicar o texto que se engadiu ao documento. |
| [`<ins>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins) | Representa un rango de texto que se engadiu a un documento. Podes usar o elemento  `del` para representar de forma similar un intervalo de texto que foi eliminado do documento. |

## Contido en táboa

Os elementos aquí úsanse para crear e manexar datos tabulares.

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<caption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption) | Especifica o asunto (ou título) dunha táboa.                 |
| [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col) | Define unha columna dentro dunha táboa e úsase para definir a semántica común en todas as celas comúns. Xeralmente atópase dentro dun elemento  `colgroup` . |
| [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup) | Define un grupo de columnas dentro dunha táboa.              |
| [``<table>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) | Representa datos tabulares, é dicir, información presentada nunha táboa formada por filas e columnas de celas que conteñen datos. |
| [`<tbody>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody) | Delimita un conxunto de filas da táboa ( elementos `tr`), indicando que pertencen o corpo da táboa (`table`). |
| [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td) | Define unha cela dunha táboa que contén datos. Participa no *modelo de táboa*. |
| [`<tfoot>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot) | Define un conxunto de filas que resumen as columnas da táboa. |
| [`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) | Define unha cela como cabeceira dun grupo de celas da táboa. A natureza exacta deste grupo está definida polos atributos `scope` e `headers` . |
| [`<thead>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead) | Define un conxunto de filas que definen a cabeceira das columnas da táboa. |
| [`<tr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr) | Define unha fila de celas nunha táboa. As celas da fila pódense establecer entón mediante unha mestura de elementos `td` (cela de datos) e `tr`(cela de cabeceira). |

## Formularios

HTML ofrece unha serie de elementos que se poden combinar para crear formularios que o usuario pode cubrir e enviar ao sitio web ou á aplicación. Podes atopar máis información sobre isto na [guía de formularios HTML](https://developer.mozilla.org/en-US/docs/Learn/Forms) de MDN.

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) | Representa un botón no que se pode facer clic, usado para enviar [formularios](https://developer.mozilla.org/en-US/docs/Learn/Forms) ou en calquera lugar dun documento para obter unha funcionalidade de botón estándar accesible. |
| [`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) | Contén un conxunto de elementos `option` que representan as opcións permitidas ou recomendadas dispoñibles para escoller dentro doutros controis. |
| [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) | Úsase para agrupar varios controis, así como etiquetas (`label` ) dentro dun formulario web. |
| [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) | Representa unha sección de documento que contén controis interactivos para enviar información. |
| [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | Úsase para crear controis interactivos para formularios baseados na web co fin de aceptar datos do usuario; hai dispoñibles unha gran variedade de tipos de datos de entrada e widgets de control, dependendo do dispositivo e do axente de usuario. O elemento `<input>` é un dos máis poderosos e complexos de todo o HTML debido á gran cantidade de combinacións de tipos de entrada e atributos. |
| [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) | Representa un título para un elemento nunha interface de usuario. |
| [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend) | Representa un título para o contido do seu `fieldset`  pai.  |
| [`<meter>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter) | Representa un valor escalar dentro dun intervalo coñecido ou un valor fraccionario. |
| [`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup) | Crea unha agrupación de opcións dentro dun elemento  `select`. |
| [`<option>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option) | Úsase para definir un elemento contido nun elemento `select`, un `optgroup`, ou unha `datalist` . Como tal,  `<option>` pode representar elementos de menú en ventás emerxentes e outras listas de elementos nun documento HTML. |
| [`<output>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output) | É un elemento contedor no que un sitio ou aplicación pode inxectar os resultados dun cálculo ou o resultado dunha acción do usuario. |
| [`<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) | Mostra un indicador que amosa o progreso de finalización dunha tarefa, normalmente mostrado como unha barra de progreso. |
| [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) | Representa un control que proporciona un menú de opcións.    |
| [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) | Representa un control de edición de texto simple de varias liñas, útil cando quere permitir aos usuarios introducir unha cantidade considerable de texto en formato libre, por exemplo, unha mensaxe nun formulario de revisión ou de comentarios. |

## Elementos interactivos

HTML ofrece unha selección de elementos que axudan a crear obxectos interactivos de interface de usuario.

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) | Crea un widget de divulgación no que a información só é visible cando o widget se cambia a un estado "aberto". Debe proporcionarse un resumo ou etiqueta utilizando o elemento  `summary`. |
| [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) | Representa unha caixa de diálogo ou outro compoñente interactivo, como unha alerta, un inspector ou unha subxanela que se pode descartar. |
| [`<menu>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu) | É unha alternativa semántica a `ul`. Representa unha lista non ordenada de elementos (representados por elementos `li`), cada un destes representa unha ligazón ou outro comando que o usuario pode activar. |
| [`<summary>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) | Especifica un resumo, título ou lenda para a caixa de divulgación dun elemento `details`. Ao facer clic no elemento `<summary>` alterna o estado do elemento `<details>` pai aberto e pechado. |

## Compoñentes web

Web Components é unha tecnoloxía relacionada co HTML que fai posible, esencialmente, crear e utilizar elementos personalizados coma se fose HTML normal. Ademais, pode crear versións personalizadas de elementos HTML estándar.

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<slot>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) | Parte da suite tecnolóxica de [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) , é un marcador de posición dentro dun compoñente web que se pode encher co seu propio marcado, o que lle permite crear árbores DOM separadas e presentalos xuntos. |
| [`<template>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) | É un mecanismo para manter HTML que non se mostrará inmediatamente cando se carga unha páxina, pero da que se pode crear unha instancia posterior durante o tempo de execución usando JavaScript. |

## Elementos obsoletos e en desuso

**Aviso:** estes son elementos HTML antigos que están en desuso e non se deben usar. **Nunca deberías usalos en proxectos novos e deberías substituílos en proxectos antigos tan pronto como poidas.** Están listados aquí só para completar.

| Elemento                                                     | Descrición                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`<acronym>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym) | Permitía aos autores indicar claramente unha secuencia de caracteres que compoñen un acrónimo ou abreviatura dunha palabra. |
| [`<applet>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet) | Permitía incorpora un applet Java no documento; este elemento quedou en desuso en favor de `object`. |
| [`<basefont>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/basefont) | Establecía un tipo de letra, un tamaño e unha cor predeterminados para os outros elementos descendentes. Con este conxunto, o tamaño da fonte pódese variar en relación ao tamaño base usando o elemento `font`. |
| [``<bgsound>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bgsound) | Configuraba un arquivo de son para reproducilo en segundo plano mentres se usa a páxina; usa `audio` no seu lugar. |
| [`<big>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big) | Mostra o texto marcado cun tamaño de fonte un nivel maior que o texto circundante (  `medium` convértese en `large` , por exemplo). |
| [`<blink>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blink) | Elemento non estándar que fai que o texto palpabrexe levemente. |
| [`<center>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center) | Era un [elemento a nivel de bloque](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) que mostra o seu contido centrado horizontalmente dentro do elemento que o contén. |
| [`<content>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/content) | Unha parte obsoleta do conxunto de tecnoloxías [Web Components,](https://developer.mozilla.org/en-US/docs/Web/Web_Components) utilizouse dentro de [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) como punto de inserción e non estaba pensado para usarse en HTML normal. Agora foi substituído polo elemento  `slot`, que crea un punto no DOM no que se pode inserir un DOM de sombra. |
| [`<dir>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dir) | Úsase como contedor para un directorio de arquivos e/ou cartafoles, posiblemente con estilos e iconas aplicados polo axente de usuario. Non use este elemento obsoleto; en vez diso, deberías usar o elemento `ul` para listas, incluídas listas de arquivos. |
| [`<font>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font) | Define o tamaño da fonte, a cor e o tipo.                    |
| [`<frame>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame) | Define unha área particular na que se pode mostrar outro documento HTML. |
| [`<frameset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset) | Úsase para conter elementos `frame`.                         |
| [`<hgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup) | Representa un título de varios niveis para unha sección dun documento. Agrupa un conxunto de elementos`h1 - h6`. |
| [`<image>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/image) | Resto obsoleto dunha versión antiga de HTML perdida na néboa dos tempos; usa `img`. |
| [`<keygen>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen) | Existe para facilitar a xeración de material clave e o envío da chave pública como parte dun [formulario HTML](https://developer.mozilla.org/en-US/docs/Learn/Forms) . |
| [`<marquee>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee) | Úsase para inserir unha área de texto en desprazamento.      |
| [`<menuitem>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem) | Representa un comando que un usuario pode invocar a través dun menú emerxente. Isto inclúe menús contextuales, así como menús que poden estar anexados a un botón de menú. |
| [`<nobr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nobr) | Impide que o texto que contén se axuste automaticamente a varias liñas, o que pode provocar que o usuario teña que desprazarse horizontalmente para ver todo o ancho do texto. |
| [`<noembed>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noembed) | Un xeito obsoleto e non estándar de proporcionar contido alternativo para navegadores que non admiten o elemento `embed` ou `object`. Este elemento quedou en desuso en HTML 4.01 e superior. |
| [`<noframes>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noframes) | Proporciona contido para ser presentado en navegadores que non admiten (ou teñen desactivado o soporte para) o elemento `frame`. Aínda que os navegadores máis utilizados admiten marcos, hai excepcións, incluíndo certos navegadores de uso especial, incluídos algúns navegadores móbiles, así como navegadores en modo texto. |
| [`<plaintext>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/plaintext) | Representa todo o que segue a etiqueta de inicio como texto en bruto, ignorando calquera HTML seguinte. Non hai unha etiqueta de peche, xa que todo o que está despois considérase texto en bruto. |
| [`<rb>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rb) | Úsase para delimitar o compoñente de texto base dunha anotación `ruby` , é dicir, o texto que se está a anotar. Un elemento `<rb>` debe envolver cada segmento atómico separado do texto base. |
| [`<rtc>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rtc) | Abarca anotacións semánticas de caracteres presentados nun rubí de elementos utilizados dentro do elemento. os elementos poden ter anotacións de pronuncia ( ) e semánticas ( ).**`<rtc>`** `rb``ruby``rb``rt``rtc` |
| [`<shadow>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/shadow) | É unha das partes obsoletas da suite tecnolóxica de [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) , estaba pensado para ser usado como punto de inserción de DOM en sombra. Quizais o utilizaches se creou varias raíces de sombra baixo un servidor de sombra. Non é útil en HTML normal.**``** |
| [`<spacer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/spacer) | O elemento [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) é un elemento HTML obsoleto que permitía a inserción de espazos baleiros nas páxinas. Foi ideado por Netscape para lograr o mesmo efecto que unha imaxe de deseño dun só píxel, que era algo que os deseñadores web adoitaban usar para engadir espazos en branco ás páxinas web sen usar realmente unha imaxe. Non obstante, xa non é compatible con ningún navegador principal e agora pódense conseguir os mesmos efectos usando CSS simple. |
| [`<strike>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike) | Coloca un tachado (liña horizontal) sobre o texto.           |
| [`<tt>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt) | Crea texto en liña que se presenta utilizando a fonte monoespazo predeterminada do axente de usuario. Este elemento foi creado co propósito de renderizar texto xa que se mostraría nunha pantalla de ancho fixo, como unha pantalla de teletipo, só texto ou unha impresora de liñas. |
| [`<xmp>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/xmp) | Renderiza o texto entre as etiquetas de inicio e final sen interpretar o HTML no medio e utilizando unha fonte monoespazo. A especificación HTML2 recomendou que se faga o suficientemente ancho como para permitir 80 caracteres por liña. |

**_ref:_** [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)



NOV 2021

