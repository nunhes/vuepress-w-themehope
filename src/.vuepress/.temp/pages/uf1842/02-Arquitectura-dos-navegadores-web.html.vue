<template><div><h1 id="arquitectura-dos-navegadores-web" tabindex="-1"><a class="header-anchor" href="#arquitectura-dos-navegadores-web" aria-hidden="true">#</a> Arquitectura dos navegadores web</h1>
<figure><img src="@source/uf1842/assets/image-20230122020030065-1674349246247-13.png" alt="bg image-20230122020030065" tabindex="0" loading="lazy"><figcaption>bg image-20230122020030065</figcaption></figure>
<hr>
<h3 id="como-funcionan-os-navegadores-web" tabindex="-1"><a class="header-anchor" href="#como-funcionan-os-navegadores-web" aria-hidden="true">#</a> Como funcionan os navegadores web?</h3>
<hr>
<figure><img src="@source/uf1842/assets/6szormeg21s9l02fcyek.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<hr>
<h4 id="interface-de-usuario" tabindex="-1"><a class="header-anchor" href="#interface-de-usuario" aria-hidden="true">#</a> Interface de usuario</h4>
<p>É a interface de usuario do navegador. Inclúe a barra de enderezos, o botón Atrás, as opcións de marcadores, o botón Actualizar, etc.</p>
<p>A interface de usuario do navegador non está definida en ningunha especificación formal, senón que se foi armando respondendo a prácticas comúns que ao longo de décadas de experiencia foron decantándose até facerse convencionais.</p>
<p><em>As diferencias ou novidades que poida aportar algún navegador, se alcanzan un certo grado de aceptación, case sempre son rapidamente imitadas polo resto de navegadores.</em></p>
<p>Como resultado, <strong>todos os navegadores teñen interfaces de usuario moi similares entre si</strong>.</p>
<hr>
<h4 id="o-motor-do-navegador" tabindex="-1"><a class="header-anchor" href="#o-motor-do-navegador" aria-hidden="true">#</a> O motor do navegador:</h4>
<p>O motor do navegador organiza as accións entre a interface de usuario do navegador e o motor de renderizado do navegador.</p>
<p>Cando escriba un novo sitio web e prema a tecla Intro, a IU do navegador indicaralle ao motor do navegador, que se comunicará co motor de renderizado.</p>
<hr>
<h4 id="o-motor-de-renderizado" tabindex="-1"><a class="header-anchor" href="#o-motor-de-renderizado" aria-hidden="true">#</a> O motor de renderizado:</h4>
<p>O motor de renderizado é o responsable de mostrar o contido solicitado.</p>
<p>O motor de renderización comezará obtendo o contido do documento solicitado da capa de rede.</p>
<p>Toma o código HTML e analízao para crear a árbore DOM (Document Object Model).</p>
<p>A continuación,...</p>
<hr>
<p>... o motor de renderizado analizará o CSS para construír o CSSOM (Modelo de obxectos CSS). É como o DOM, pero para o CSS e non para o HTML.</p>
<p>Mentres se analiza o CSS e se crea o CSSOM, o navegador está descargando outros recursos a través da capa de rede, como arquivos JavaScript.</p>
<p>O motor de renderizado comunícase co motor JavaScript para executar o código JavaScript e manipular o DOM e o CSSOM.</p>
<p>A continuación, o motor de renderizado toma o DOM e o CSSOM e combínaos para crear a árbore de renderizado.</p>
<hr>
<figure><img src="@source/uf1842/assets/render-tree-construction-1024x478.png" alt="bg https://www.humanlevel.com/articulos/desarrollo-web/optimizacion-de-javascript.html" tabindex="0" loading="lazy"><figcaption>bg <a href="https://www.humanlevel.com/articulos/desarrollo-web/optimizacion-de-javascript.html" target="_blank" rel="noopener noreferrer">https://www.humanlevel.com/articulos/desarrollo-web/optimizacion-de-javascript.html<ExternalLinkIcon/></a></figcaption></figure>
<hr>
<p>A continuación, o motor de renderizado usa o backend da IU para mostrar o sitio web na pantalla e, finalmente, pintar os píxeles na pantalla.</p>
<figure><img src="@source/uf1842/assets/bPlYx9xODQH4X1KuUNpc.png" alt="Rendering engine basic flow" tabindex="0" loading="lazy"><figcaption>Rendering engine basic flow</figcaption></figure>
<p>Todo o proceso polo que atravesa o motor de renderizado chámase Ruta crítica de renderizado.</p>
<hr>
<figure><img src="@source/uf1842/assets/critical-rendering-path.jpg" alt="bg https://weareadaptive.com/wp-content/uploads/2020/04/critical-rendering-path.jpg" tabindex="0" loading="lazy"><figcaption>bg <a href="https://weareadaptive.com/wp-content/uploads/2020/04/critical-rendering-path.jpg" target="_blank" rel="noopener noreferrer">https://weareadaptive.com/wp-content/uploads/2020/04/critical-rendering-path.jpg<ExternalLinkIcon/></a></figcaption></figure>
<hr>
<h5 id="exemplos-de-motor-de-renderizado-incluen" tabindex="-1"><a class="header-anchor" href="#exemplos-de-motor-de-renderizado-incluen" aria-hidden="true">#</a> Exemplos de motor de renderizado inclúen:</h5>
<ul>
<li><strong>Safari</strong> - Motor de renderizado WebKit</li>
<li><strong>Chrome</strong> - Blink Rendering Engine (Blink é un fork de WebKit)</li>
<li><strong>Firefox</strong> - Gecko Rendering Engine</li>
</ul>
<hr>
<!-- _class: invert -->
<figure><img src="@source/uf1842/assets/abc2e67154bbe50d5208ebed99865c6f.png" alt="bg " tabindex="0" loading="lazy"><figcaption>bg </figcaption></figure>
<p>Detalle do fluxo de WebKit</p>
<hr>
<!-- _class: invert -->
<figure><img src="@source/uf1842/assets/Tbif2mUJCUVyPdyXntZk.jpg" alt="Mozilla's Gecko rendering engine main flow." tabindex="0" loading="lazy"><figcaption>Mozilla's Gecko rendering engine main flow.</figcaption></figure>
<p>Mozilla's Gecko rendering engine main flow</p>
<hr>
<h4 id="capa-de-rede" tabindex="-1"><a class="header-anchor" href="#capa-de-rede" aria-hidden="true">#</a> Capa de rede</h4>
<p>A capa de rede é a responsable de facer chamadas de rede para obter recursos.</p>
<p>Impón os límites de conexión correctos, formatea as solicitudes, trata con proxies, caché e moito máis.</p>
<p>Podes ler máis sobre a capa de rede aquí.</p>
<hr>
<h4 id="motor-javascript" tabindex="-1"><a class="header-anchor" href="#motor-javascript" aria-hidden="true">#</a> Motor JavaScript</h4>
<p>O motor JavaScript úsase para analizar e executar código JavaScript no DOM ou CSSOM. O código JavaScript é proporcionado polo servidor web ou pode ser proporcionado polo navegador web (extensións do navegador ou funcións do navegador como o bloqueo automático de anuncios).</p>
<p>Os primeiros navegadores usaban intérpretes de JavaScript, pero os motores JavaScript modernos usan a compilación Just-In-Time para mellorar o rendemento.</p>
<hr>
<h5 id="exemplos-de-javascript-engine-incluen" tabindex="-1"><a class="header-anchor" href="#exemplos-de-javascript-engine-incluen" aria-hidden="true">#</a> Exemplos de JavaScript Engine inclúen</h5>
<ul>
<li><strong>Chrome</strong> - Motor JavaScript V8</li>
<li><strong>Safari</strong> - JavaScriptCore</li>
<li><strong>Firefox</strong> - SpiderMonkey Engine</li>
</ul>
<hr>
<h4 id="iu-da-backend" tabindex="-1"><a class="header-anchor" href="#iu-da-backend" aria-hidden="true">#</a> IU da Backend:</h4>
<p>Esta capa é a responsable de debuxar os widgets básicos como caixas de selección ou entrada e ventás. Debaixo usa métodos de IU do sistema operativo.</p>
<p>O motor de renderizado usa a capa de fondo da IU durante as fases de deseño e pintura para mostrar a páxina web no navegador.</p>
<hr>
<h4 id="almacenamento-de-datos" tabindex="-1"><a class="header-anchor" href="#almacenamento-de-datos" aria-hidden="true">#</a> Almacenamento de datos:</h4>
<p>O navegador necesita gardar datos localmente (cookies, caché, etc.) polo que o compoñente de almacenamento de datos xestiona esta parte.</p>
<p>Os navegadores modernos tamén admiten mecanismos de almacenamento como localStorage, IndexedDB e FileSystem. Este é un excelente artigo sobre todas as opcións de almacenamento no navegador.</p>
<p>Acabamos de cubrir o nivel de superficie aquí, se quere afondar sobre como funcionan os analizadores HTML e CSS, así como como funciona o motor JavaScript, le a publicación completa do blog <a href="https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/" target="_blank" rel="noopener noreferrer">aquí<ExternalLinkIcon/></a> .</p>
<hr>
<p><a href="https://dev.to/mahmoudessam/the-architecture-of-web-browsers-1o1k" target="_blank" rel="noopener noreferrer">https://dev.to/mahmoudessam/the-architecture-of-web-browsers-1o1k<ExternalLinkIcon/></a></p>
<p><a href="https://web.dev/howbrowserswork/" target="_blank" rel="noopener noreferrer">https://web.dev/howbrowserswork/<ExternalLinkIcon/></a></p>
</div></template>


