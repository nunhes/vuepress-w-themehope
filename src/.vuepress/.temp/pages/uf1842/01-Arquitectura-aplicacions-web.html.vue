<template><div><h2 id="arquitectura-das-aplicacions-web" tabindex="-1"><a class="header-anchor" href="#arquitectura-das-aplicacions-web" aria-hidden="true">#</a> Arquitectura das aplicacións web</h2>
<p>Antes de falar sobre arquitectura web, vexamos - de xeito sinxelo - como funciona a web:</p>
<hr>
<ol>
<li>O usuario introduce a URL da túa aplicación na barra de enderezos do navegador ou fai clic nunha ligazón.</li>
<li>O navegador <a href="https://kinsta.com/es/blog/propagacion-del-dns/" target="_blank" rel="noopener noreferrer">busca o URL nos servidores DNS<ExternalLinkIcon/></a> e identifica o enderezo IP da túa aplicación.</li>
<li>O navegador envía unha <a href="https://kinsta.com/es/base-de-conocimiento/que-es-una-peticion-http/" target="_blank" rel="noopener noreferrer">solicitude HTTP<ExternalLinkIcon/></a> á túa aplicación.</li>
<li>A túa aplicación responde co contido correcto (normalmente unha páxina web).</li>
<li>O navegador mostra a páxina web na pantalla.</li>
</ol>
<hr>
<p>Máis en detalle, velaí como xestionaría unha solicitude unha <em>aplicación web</em>:</p>
<ol>
<li>O usuario envía unha solicitude á súa aplicación a través da interface de usuario - frontend.</li>
<li>Se tes configurada unha caché relevante, a aplicación comprobaraa primeiro para ver se ten un rexistro válido que se pode enviar de volta ao cliente directamente. Se é así, devolverase o contido almacenado na caché e a solicitude marcarase como completa.</li>
<li>Se non hai caché, a solicitude envíase ao equilibrador de carga.</li>
<li>O equilibrador de carga identifica unha instancia do servidor que está dispoñible para xestionar a solicitude e reenvíaa.</li>
<li>A instancia do servidor procesa a solicitude e <a href="https://kinsta.com/es/base-de-conocimiento/punto-final-de-la-api/" target="_blank" rel="noopener noreferrer">chama a calquera API externa<ExternalLinkIcon/></a> se é necesario.</li>
<li>Despois de recoller os resultados nun só lugar, o servidor devolve a resposta ao equilibrador de carga.</li>
<li>O equilibrador de carga devolve a resposta á pasarela da API, que á súa vez envíalla ao usuario no cliente frontend. A solicitude márcase entón como completa.</li>
</ol>
<p>---<img src="@source/uf1842/assets/arquitectura-aplicaciones-web-1024x512.png" alt="bg" loading="lazy"></p>
<hr>
<p>Do mesmo xeito que un edificio precisa dunha planificación baseada en <strong>criterios técnicos, formais e funcionais</strong>; tamén a www precisa dunha detida planificación que <strong>establece os puntos de acceso, os sistemas de busca e recuperación de información de calquera aplicación soportada na web, e como se estruturan, organizan e etiquetan os contidos, con fin de que as persoas poidan satisfacer seus obxectivos e a súa experiencia sexa óptima</strong>.</p>
<hr>
<p>O mundo se amplía en Internet: <strong>as aplicacións web son os novos lugares de traballo, comercio e ocio</strong>.</p>
<hr>
<p>Para dar cabida á variedade de propósitos aos que serven as aplicacións web actuais, cada unha delas ten que estar deseñada para ofrecer un alto rendemento e persoalización.</p>
<hr>
<p>A(s) arquitectura(s) da(s) aplicación(s) web resolven este problema definindo como se estruturan os distintos compoñentes dunha aplicación baseada na web.</p>
<hr>
<p>De xeito sinxelo pódese ver como un esquema de como interactúan entre si os distintos compoñentes dunha aplicación web dada.</p>
<hr>
<p>Pode ser tan simple como definir a relación entre o cliente e o servidor. Ou tan complexa como definir as interpelacións entre un enxame de servidores backend en contedores, equilibradores de carga, pasarelas API e frontends dunha soa páxina orientados ao usuario.</p>
<hr>
<figure><img src="@source/uf1842/assets/Arquitectura-Tres-Niveles-Aplicación-Web.jpg" alt="bg Arquitectura de 3 niveis" tabindex="0" loading="lazy"><figcaption>bg Arquitectura de 3 niveis</figcaption></figure>
<p><small><em>Arquitectura de 3 capas</em></small></p>
<hr>
<figure><img src="@source/uf1842/assets/identityMgr_high_availability.gif" alt="bg Arquitectura de alta dispoñibilidade" tabindex="0" loading="lazy"><figcaption>bg Arquitectura de alta dispoñibilidade</figcaption></figure>
<p><small><em><a href="https://ws001.sspa.juntadeandalucia.es/confluence/display/GOBP/Soluciones+web%2C+arquitectura+de+referencia" target="_blank" rel="noopener noreferrer">Arquitectura<ExternalLinkIcon/></a> de alta dispoñibilidade</em></small></p>
<hr>
<figure><img src="@source/uf1842/assets/web-app-architecture-components.jpg" alt="bg Diagrama de componentes de una aplicación web de recomendación que muestra cómo interactúan los distintos componentes, como los clientes, las instancias de la base de datos, los servicios, etc." tabindex="0" loading="lazy"><figcaption>bg Diagrama de componentes de una aplicación web de recomendación que muestra cómo interactúan los distintos componentes, como los clientes, las instancias de la base de datos, los servicios, etc.</figcaption></figure>
<p><small><em>Diagrama de arquitectura dunha aplicación de recomendación. (Fonte: <a href="https://www.wikipedia.org/" target="_blank" rel="noopener noreferrer">Wikipedia<ExternalLinkIcon/></a>)</em></small></p>
<hr>
<p>A arquitectura dunha aplicación web é, sen dubida, unha das partes máis importantes da produción dunha aplicación web.</p>
<p>E cada aplicación requirirá unha arquitectura específica.</p>
<hr>
<figure><img src="@source/uf1842/assets/google2.gif" alt="bg" tabindex="0" loading="lazy"><figcaption>bg</figcaption></figure>
<hr>
<h2 id="sen-dubida-tratase-de-algo-mais-relevante-que-escoller-o-framework-ou-editor-de-codigo-a-empregar" tabindex="-1"><a class="header-anchor" href="#sen-dubida-tratase-de-algo-mais-relevante-que-escoller-o-framework-ou-editor-de-codigo-a-empregar" aria-hidden="true">#</a> <span style="font-size: 3.8rem">👁️</span> Sen dubida trátase de algo máis relevante que escoller o framework ou editor de código a empregar.</h2>
<hr>
<figure><img src="@source/uf1842/assets/1000_F_350175156_9EiYwgPigBnOg7wlO55f9fqWBtqVVdYU.jpg" alt="bg " tabindex="0" loading="lazy"><figcaption>bg </figcaption></figure>
<h2 id="fagamos-unha-aproximacion-rapida" tabindex="-1"><a class="header-anchor" href="#fagamos-unha-aproximacion-rapida" aria-hidden="true">#</a> <em>Fagamos unha aproximación rápida!</em></h2>
<hr>
<p>Unha aplicación web é dispensada por un servidor web e usada polos usuarios que se conectan, desde calquera punto, a través de clientes web (navegadores). Daquela: toda arquitectura web ten (alo menos) 3 actores ou capas:</p>
<ul>
<li>un servidor web</li>
<li>unha conexión de rede</li>
<li>un (ou máis) cliente(s)</li>
</ul>
<hr>
<p>O servidor web distribúe páxinas de información <strong>con formato</strong> aos clientes que as soliciten.</p>
<hr>
<p>As solicitudes realízanse a través dunha conexión de rede, e para iso utilízase o protocolo HTTP.</p>
<hr>
<p>Unha vez feita a solicitude, a través do protocolo HTTP, o servidor web recíbea, localiza a páxina web no seu sistema de arquivos e envíaa de novo ao navegador que a solicitou.</p>
<hr>
<figure><img src="@source/uf1842/assets/Web-Application-Architecture-diagram-3.png" alt="bg" tabindex="0" loading="lazy"><figcaption>bg</figcaption></figure>
<hr>
<p>As aplicacións web baséanse no modelo (ou arquitectura) <strong>Cliente/Servidor</strong> que xestiona servidores web e utiliza páxinas web como interfaces.</p>
<hr>
<p>As páxinas web son o compoñente principal dunha aplicación ou sitio web.</p>
<hr>
<p>Os navegadores solicitan páxinas (almacenadas ou creadas de forma dinámica*) con información aos servidores web.</p>
<p>* <em>Nalgunhas contornas de desenvolvemento de aplicacións web, as páxinas conteñen, ademais ou xunto ao código HTML, scripts dinámicos que son executados polo servidor antes de entregar a páxina. Falamos entón de <a href="https://blog.hubspot.es/website/paginas-web-dinamicas-y-estaticas" target="_blank" rel="noopener noreferrer">paxinas dinamicas<ExternalLinkIcon/></a>, en oposición a aquelas que so dispensan contidos previamente marcados e almacenados e que non requiren a participación das linguaxes de guión</em>.</p>
<hr>
<p>Unha vez entregada a páxina ou documento solicitado, rómpese a conexión entre o navegador e o servidor web.</p>
<p>É dicir, a lóxica de negocio no servidor só se activa coa execución dos scripts das páxinas solicitadas polo navegador (no servidor, non no cliente).</p>
<hr>
<p>Cando o navegador executa un script no cliente, o cliente non ten acceso directo aos recursos do servidor.</p>
<hr>
<p>Hai outros compoñentes que non son scripts, como as miniaplicacións (unha aplicación especial que se executa dentro dun navegador) ou os compoñentes ActiveX(💀).</p>
<hr>
<p>Os scripts do cliente adoitan ser código JavaScript - tamén <a href="https://desarrolloweb.com/manuales/tutorial-visual-basic-script-manual.html" target="_blank" rel="noopener noreferrer">VBSscript<ExternalLinkIcon/></a>- mesturado con código HTML.</p>
<hr>
<p><em>As páxinas solicitadas en Internet son en gran parte dinámicas (ASP, PHP, etc.). Estas páxinas agrúpanse loxicamente para ofrecer un servizo ao usuario.</em></p>
<hr>
<p>O acceso ás páxinas tamén se asocia ao tempo que un usuario permanece interactuando co sitio (sesión).</p>
<hr>
<h3 id="componentes-dunha-aplicacion-web" tabindex="-1"><a class="header-anchor" href="#componentes-dunha-aplicacion-web" aria-hidden="true">#</a> Compoñentes dunha aplicación web:</h3>
<hr>
<h4 id="_1-loxica-de-negocio" tabindex="-1"><a class="header-anchor" href="#_1-loxica-de-negocio" aria-hidden="true">#</a> 1. Lóxica de negocio.</h4>
<ul>
<li>Define os procesos implicados na funcionalidade da aplicación.</li>
<li>Conxunto de operacións necesarias para prestar o servizo.</li>
</ul>
<hr>
<h4 id="_2-xestion-de-datos" tabindex="-1"><a class="header-anchor" href="#_2-xestion-de-datos" aria-hidden="true">#</a> 2. Xestión de datos.</h4>
<ul>
<li>Manexo da información,  bases de datos, compoñentes e arquivos.</li>
</ul>
<hr>
<h4 id="_3-interface-ui-ux" tabindex="-1"><a class="header-anchor" href="#_3-interface-ui-ux" aria-hidden="true">#</a> 3. Interface (UI/UX)</h4>
<ul>
<li>Os usuarios acceden a través de navegadores, móbiles, PDA, etc. → <em>Responsividade</em></li>
<li>Funcionalidade accesible a través do navegador. → <em>Accesibilidade</em></li>
<li>Limitado e dirixido pola aplicación. → <em>Usabilidade</em></li>
</ul>
<hr>
<p>As aplicacións web modélanse mediante o que se coñece como <strong>modelo de capa</strong>. Unha capa representa un elemento que procesa ou trata información. Segundo as capas que interveñen nunha aplicación atopamos:</p>
<ul>
<li>Modelo de dúas capas: a información atravesa dúas capas entre a interface e a administración dos datos.</li>
<li>Modelo n-capa: A información pasa por varias capas - por exemplo no modelo de tres capas.</li>
</ul>
<hr>
<h2 id="modelo-de-duas-capas" tabindex="-1"><a class="header-anchor" href="#modelo-de-duas-capas" aria-hidden="true">#</a> *<em>Modelo de dúas capas</em></h2>
<hr>
<p>Gran parte da aplicación execútase no lado do cliente (<em>fat client</em>).</p>
<hr>
<p>As capas son:</p>
<ul>
<li>Cliente (<em>fat client</em>): a lóxica de negocio está incrustada dentro da aplicación que presenta a interface de usuario no lado do cliente.</li>
<li>Servidor: xestiona os datos.</li>
</ul>
<hr>
<p>As limitacións deste modelo son</p>
<ul>
<li>Escasa <em>escalabilidade</em></li>
<li>Permite un número reducido de conexións simultáneas</li>
<li>Alta carga de rede</li>
<li>Flexibilidade restrinxida</li>
<li>Funcionalidade limitada</li>
</ul>
<hr>
<figure><img src="@source/uf1842/assets/mod2capas.png" alt="bg mod2capas" tabindex="0" loading="lazy"><figcaption>bg mod2capas</figcaption></figure>
<hr>
<figure><img src="@source/uf1842/assets/figura-1-1-tif.jpg" alt="bg left" tabindex="0" loading="lazy"><figcaption>bg left</figcaption></figure>
<p><em>As arquitecturas de dúas capas foron as primeiras en aproveitarse da estrutura Cliente/Servidor</em>.</p>
<hr>
<ul>
<li>
<p><strong>Capa da aplicación</strong>:</p>
<p>É onde se atopa a interface do sistema e é da que o usuario pode dispoñer para realizar a súa actividade co sistema.</p>
</li>
<li>
<p><strong>Capa de datos</strong>:</p>
<p>É o repositorio ou almacén de datos, é a capa onde se almacena toda a información ingresada no sistema e que reside nel de forma permanente. É o nivel da base de datos.</p>
</li>
</ul>
<hr>
<h2 id="modelo-de-tres-capas" tabindex="-1"><a class="header-anchor" href="#modelo-de-tres-capas" aria-hidden="true">#</a> <strong>Modelo de tres capas.</strong></h2>
<hr>
<figure><img src="@source/uf1842/assets/aplicacion_en_n_capas.jpg" alt="bg" tabindex="0" loading="lazy"><figcaption>bg</figcaption></figure>
<hr>
<p>Deseñado para superar as limitacións das arquitecturas co modelo de dous niveis, introduce unha capa intermedia:</p>
<ul>
<li><strong>a capa de proceso</strong>.</li>
</ul>
<hr>
<p>Entre a presentación e os datos, os procesos pódense xestionar por separado da interface de usuario e dos datos.</p>
<p>Esta capa intermedia centraliza a lóxica de negocio, facilita a administración dos datos que se poden integrar desde múltiples fontes,...</p>
<p>As aplicacións web actuais prefiren este modelo - e aínda arquitecturas máis complexas-.</p>
<hr>
<p>As capas deste modelo son:</p>
<hr>
<h3 id="_1-capa-de-presentacion-parte-no-cliente-e-parte-no-servidor" tabindex="-1"><a class="header-anchor" href="#_1-capa-de-presentacion-parte-no-cliente-e-parte-no-servidor" aria-hidden="true">#</a> 1. Capa de presentación (parte no cliente e parte no servidor)</h3>
<ul>
<li>Recolle a información do usuario e envíaa ao servidor (cliente)</li>
<li>Envía información á capa de proceso para procesala</li>
<li>Recibe os resultados da capa de proceso</li>
<li>Xerar a presentación</li>
<li>Ver a presentación ao usuario (cliente)</li>
</ul>
<hr>
<h3 id="_2-capa-de-proceso-servidor-web" tabindex="-1"><a class="header-anchor" href="#_2-capa-de-proceso-servidor-web" aria-hidden="true">#</a> 2. Capa de proceso (servidor web)</h3>
<ul>
<li>Recibe entrada de datos da capa de presentación</li>
<li>Interactúa coa capa de datos para realizar operacións</li>
<li>Envía os resultados procesados á capa de presentación</li>
</ul>
<hr>
<h3 id="_3-capa-de-datos-servidor-de-datos" tabindex="-1"><a class="header-anchor" href="#_3-capa-de-datos-servidor-de-datos" aria-hidden="true">#</a> <strong>3. Capa de datos (servidor de datos)</strong></h3>
<ul>
<li>Almacena os datos</li>
<li>recuperar datos</li>
<li>Mantén os datos</li>
<li>protexer a integridade dos datos</li>
</ul>
<hr>
<figure><img src="@source/uf1842/assets/3cap.png" alt="bg 3 cap" tabindex="0" loading="lazy"><figcaption>bg 3 cap</figcaption></figure>
<hr>
<p>XAN 2023</p>
<hr>
<p><a href="https://cynoteck.com/es/blog-post/reasons-to-treat-web-application-architecture-seriously/" target="_blank" rel="noopener noreferrer">https://cynoteck.com/es/blog-post/reasons-to-treat-web-application-architecture-seriously/<ExternalLinkIcon/></a> ⭐</p>
<p><a href="https://kinsta.com/es/blog/arquitectura-aplicaciones-web/#qu-es-la-arquitectura-de-las-aplicaciones-web" target="_blank" rel="noopener noreferrer">https://kinsta.com/es/blog/arquitectura-aplicaciones-web/#qu-es-la-arquitectura-de-las-aplicaciones-web<ExternalLinkIcon/></a></p>
</div></template>


