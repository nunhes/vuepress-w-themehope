<template><div><h1 id="manipulacion-do-dom" tabindex="-1"><a class="header-anchor" href="#manipulacion-do-dom" aria-hidden="true">#</a> Manipulación do DOM</h1>
<figure><a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/sketchnotes/webdev101-js.png" target="_blank" rel="noopener noreferrer"><img src="https://github.com/microsoft/Web-Dev-For-Beginners/raw/main/sketchnotes/webdev101-js.png" alt="DOM e un peche" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>DOM e un peche</figcaption></figure>
<blockquote>
<p>Sketchnote de <a href="https://twitter.com/girlie_mac" target="_blank" rel="noopener noreferrer">Tomomi Imura<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="introducion" tabindex="-1"><a class="header-anchor" href="#introducion" aria-hidden="true">#</a> Introdución</h3>
<p>A manipulación do DOM, ou &quot;Document Object Model&quot;, é un aspecto clave do desenvolvemento web.</p>
<p>Segundo <a href="https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction" target="_blank" rel="noopener noreferrer">MDN<ExternalLinkIcon/></a> , o <strong>&quot;Document Object Model (DOM) é a representación de datos dos obxectos que compoñen a estrutura e o contido dun documento na web&quot;</strong>. Os desafíos en torno á manipulación de DOM na web foron moitas veces o impulso detrás do uso de marcos JavaScript en lugar de vainila JavaScript para xestionar o DOM. Pero os dous metodos seguen sendo viables.</p>
<p>Ademais, esta lección presentará a idea dun <a href="https://developer.mozilla.org/docs/Web/JavaScript/Closures" target="_blank" rel="noopener noreferrer">peche de JavaScript<ExternalLinkIcon/></a> , que podes considerar como unha función encerrada por outra función para que a función interna teña acceso ao alcance da función externa.</p>
<blockquote>
<p>Os peches de JavaScript son un tema amplo e complexo. Un peche consiste nunha función interna e unha función externa construídas de forma que lle permitan o acceso da función interna ao ámbito da función externa. Para obter máis información sobre como funciona isto, visita a súa <a href="https://developer.mozilla.org/docs/Web/JavaScript/Closures" target="_blank" rel="noopener noreferrer">extensa documentación<ExternalLinkIcon/></a> .</p>
</blockquote>
<p>Pensa no DOM coma unha árbore, que representa todas as formas en que se pode manipular un documento de páxina web. Escribíronse varias API (Interfaces de programas de aplicacións) para que os programadores, utilizando a linguaxe de programación que prefiran, poidan acceder ao DOM e editalo, cambialo, reorganizalo e xestionalo doutro xeito.</p>
<figure><a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/3-terrarium/3-intro-to-DOM-and-closures/images/dom-tree.png" target="_blank" rel="noopener noreferrer"><img src="https://github.com/microsoft/Web-Dev-For-Beginners/raw/main/3-terrarium/3-intro-to-DOM-and-closures/images/dom-tree.png" alt="Representación da árbore DOM" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>Representación da árbore DOM</figcaption></figure>
<blockquote>
<p>Unha representación do DOM e do marcado HTML que fai referencia a el. De <a href="https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites" target="_blank" rel="noopener noreferrer">Olfa Nasraoui<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="requisito-previo" tabindex="-1"><a class="header-anchor" href="#requisito-previo" aria-hidden="true">#</a> Requisito previo</h3>
<p>Deberías ter o HTML e o CSS perfectamente construídos.</p>
<blockquote>
<p><strong>Nota:</strong> usa o atributo <code v-pre>defer</code> ao importar un arquivo Javascript externo no arquivo html para permitir que o Javascript se execute só despois de que todo o HTML estea completamente cargado. Tamén podes usar o atributo <code v-pre>async</code>, se o que queres é permitir que o script si se execute mentres se analiza o arquivo HTML. Dependendo do cometido e ámbito do script usaríase un ou o outro atributo.</p>
</blockquote>
<hr>
<h2 id="elementos-dom" tabindex="-1"><a class="header-anchor" href="#elementos-dom" aria-hidden="true">#</a> Elementos DOM</h2>
<p>O primeiro que debes facer é crear referencias aos elementos que queres manipular no DOM.</p>
<p>Despois de identificar cada elemento, se lle pasa ese elemento a unha función. Así, o elemento HTML queda a disposición da linguaxe de guión para realizar nel as manipulacións que queiras.</p>
<h2 id="as-funcions-elementdrag-e-stopelementdrag" tabindex="-1"><a class="header-anchor" href="#as-funcions-elementdrag-e-stopelementdrag" aria-hidden="true">#</a> As funcións elementDrag e stopElementDrag</h2>
<p>Completarás o teu peche engadindo dúas funcións internas máis que xestionarán o que ocorre cando arrastras unha planta e deixas de arrastrala. O comportamento que queres é que podes arrastrar calquera planta en calquera momento e colocala en calquera lugar da pantalla. Esta interface non ten opinións (por exemplo, non hai unha zona de caída) para permitirche deseñar o teu terrario exactamente como lle gusta engadindo, eliminando e reposicionando plantas.</p>
<blockquote>
<p><code v-pre>offsetTop</code>e <code v-pre>offsetLeft</code>son propiedades CSS que definen a posición dun elemento en función da do seu pai; o seu pai pode ser calquera elemento que non estea situado como <code v-pre>static</code>.</p>
</blockquote>
<figure><a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/3-terrarium/3-intro-to-DOM-and-closures/images/terrarium-final.png" target="_blank" rel="noopener noreferrer"><img src="https://github.com/microsoft/Web-Dev-For-Beginners/raw/main/3-terrarium/3-intro-to-DOM-and-closures/images/terrarium-final.png" alt="terrario acabado" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>terrario acabado</figcaption></figure>
<hr>
<p>Atopa máis información sobre eventos de punteiro nos <a href="https://www.w3.org/TR/pointerevents1/" target="_blank" rel="noopener noreferrer">documentos<ExternalLinkIcon/></a> do <a href="https://www.w3.org/TR/pointerevents1/" target="_blank" rel="noopener noreferrer">W3C<ExternalLinkIcon/></a> e nos <a href="https://developer.mozilla.org/docs/Web/API/Pointer_events" target="_blank" rel="noopener noreferrer">documentos web de MDN<ExternalLinkIcon/></a> .</p>
<p>Comprobe sempre as capacidades do navegador usando <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">CanIUse.com<ExternalLinkIcon/></a> .</p>
<p>OUT 2021</p>
</div></template>


