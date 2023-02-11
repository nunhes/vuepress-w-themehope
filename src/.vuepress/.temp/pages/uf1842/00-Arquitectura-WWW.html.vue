<template><div><h1 id="arquitectura-da-www" tabindex="-1"><a class="header-anchor" href="#arquitectura-da-www" aria-hidden="true">#</a> Arquitectura da WWW</h1>
<hr>
<p>A arquitectura da <a href="https://www.cloudflare.com/es-es/learning/network-layer/how-does-the-internet-work/" target="_blank" rel="noopener noreferrer">WWW<ExternalLinkIcon/></a> pódese ver desde dous puntos de vista:</p>
<ul>
<li>Arquitectura Física</li>
<li>Arquitectura Lóxica.</li>
</ul>
<hr>
<p>Dentro da arquitectura física podemos mencionar os distintos tipos de redes:</p>
<ul>
<li>
<p>Ordenadores persoais (PC)(<a href="https://www.cloudflare.com/es-es/learning/network-layer/what-is-a-personal-area-network/" target="_blank" rel="noopener noreferrer">PAN<ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>Redes de área local (<a href="https://www.cloudflare.com/es-es/learning/network-layer/what-is-a-lan/" target="_blank" rel="noopener noreferrer">LAN<ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>Redes de área global (<a href="https://www.cloudflare.com/es-es/learning/network-layer/what-is-a-wan/" target="_blank" rel="noopener noreferrer">WAN<ExternalLinkIcon/></a>) → (<a href="https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" target="_blank" rel="noopener noreferrer">CDN<ExternalLinkIcon/></a>)</p>
</li>
</ul>
<hr>
<p>Os ordenadores persoais teñen as seguintes características</p>
<ul>
<li>
<p>Conexión a Internet esporádica.</p>
</li>
<li>
<p>É necesaria a colaboración doutro ordenador que estea continuamente conectado a Internet (ISP Internet Service Provider).</p>
</li>
<li>
<p>Debe establecerse un diálogo co ISP a través dalgunha canle de comunicación.</p>
</li>
</ul>
<hr>
<p><strong>Tipos de conexión a Internet</strong></p>
<p>As <a href="https://tarify.win/guias/tipos-conexion-internet/" target="_blank" rel="noopener noreferrer">formas de conexión<ExternalLinkIcon/></a> poden ser:</p>
<hr>
<ol>
<li>Liña telefónica estándar ou Rede Telefónica Conmutada (RTC)
<ul>
<li>É necesario o uso de hardware que actúe como interface entre o ordenador e a liña telefónica (módem) e un provedor de acceso.</li>
<li>Non necesita apenas infraestrutura adicional.</li>
<li>É  a rede de máis baixa velocidade e calidade de sinal.</li>
</ul>
</li>
</ol>
<hr>
<ol start="2">
<li>RDSI (Rede Dixital de Servizos Integrados).
<ul>
<li>Liña dixital moi estendida ate fai algún tempo. Agora en práctico desuso.</li>
<li>Aínda precisa un hardware específico (módem RDSI) que actúe como interface entre a liña e o ordenador.</li>
<li>Posibilidade de conexión simultánea a Internet e á liña telefónica.</li>
<li>Posibilidade de videoconferencia punto a punto.</li>
</ul>
</li>
</ol>
<hr>
<ol start="3">
<li>ADSL (Asymmetric Digital Subscriber Line - Liña de abonado dixital asimétrica).
<ul>
<li>Liña de comunicación de alta velocidade e <strong>módem ADSL</strong>.</li>
<li>Utiliza o par de cables de cobre da liña telefónica estándar como soporte.</li>
<li>Velocidade de comunicación asimétrica</li>
</ul>
</li>
</ol>
<hr>
<ol start="4">
<li>Cable.
<ul>
<li>Neste tipo de conexión se procede a instalar a televisión por cable que ofrece a posibilidade de acceder a Internet <strong>por medio dunha liña de cable coaxial</strong>(electrico) que se subitue paulatinamente pola fibra optica que permite o enviao d edatos <strong>a partir de impulsos luminosos e non eléctricos</strong>.</li>
<li>Adoita prestarse en conxunto con outros servizos (televisión, teléfono, etc.).</li>
</ul>
</li>
</ol>
<hr>
<ol start="5">
<li>Satélite.
<ul>
<li>Como o ADSL, é unha canle de comunicación asimétrica.</li>
<li>Os datos de saída xeralmente viaxan por teléfono.</li>
<li>A recepción realízase a través dunha ou varias canles de vídeo emitidas por un satélite.</li>
</ul>
</li>
</ol>
<hr>
<p><strong>Redes de área local (LAN)</strong></p>
<ul>
<li>
<p>Utilízase para enlazar ordenadores situados xeralmente nun mesmo edificio ou grupo de edificios.</p>
</li>
<li>
<p>Na rede poden coexistir sistemas actuando como servidores e como clientes.</p>
</li>
<li>
<p>Os ordenadores únense formando topoloxías (lineais, en anel, en estrela,...).</p>
</li>
<li>
<p>Se precisa hardware dedicado para actuar como interface entre o ordenador e a rede (tarxeta de rede).</p>
</li>
</ul>
<hr>
<p><strong>A unión de varias WAN en todo o mundo é o que se coñece como Internet</strong>.</p>
<hr>
<h3 id="arquitectura-loxica-de-internet" tabindex="-1"><a class="header-anchor" href="#arquitectura-loxica-de-internet" aria-hidden="true">#</a> Arquitectura lóxica de Internet.</h3>
<hr>
<p>Normalmente en Internet utilízase a arquitectura cliente-servidor. Este tipo de organización baséase en que: entre todos os equipos que están na rede, uns ofrecen servizos (os denominados servidores) e outros utilizan eses servizos (os denominados clientes). Cando o cliente visita unha páxina, accede a un servizo ofrecido polo servidor de páxinas web.</p>
<hr>
<p>Os sistemas cliente-servidor están construídos de tal xeito que as aplicacións poden residir nun servidor e compartirse con todos os usuarios.</p>
<hr>
<p>A arquitectura de Internet a nivel lóxico está estruturada polo que se coñece como capas de servizo.</p>
<hr>
<h4 id="modelo-osi-de-7-capas" tabindex="-1"><a class="header-anchor" href="#modelo-osi-de-7-capas" aria-hidden="true">#</a> Modelo OSI de 7 capas:</h4>
<hr>
<p><strong>Capa física</strong>: a capa física do modelo de referencia OSI é a responsable das conexións físicas do ordenador á rede, tanto no que se refire ao medio físico (medios guiados: <a href="http://es.wikipedia.org/wiki/Cable_coaxial" target="_blank" rel="noopener noreferrer">cable coaxial<ExternalLinkIcon/></a> l, <a href="http://es.wikipedia.org/wiki/Par_trenzado" target="_blank" rel="noopener noreferrer">cable de par trenzado, <ExternalLinkIcon/></a><a href="http://es.wikipedia.org/wiki/Fibra_%C3%B3ptica" target="_blank" rel="noopener noreferrer">fibra óptica<ExternalLinkIcon/></a> e outros ). tipos de <a href="http://es.wikipedia.org/wiki/Cableado_estructurado" target="_blank" rel="noopener noreferrer">cables<ExternalLinkIcon/></a> ; medios non guiados: <a href="http://es.wikipedia.org/wiki/Red_por_radio" target="_blank" rel="noopener noreferrer">radio<ExternalLinkIcon/></a> , <a href="http://es.wikipedia.org/wiki/Red_por_infrarrojos" target="_blank" rel="noopener noreferrer">infravermellos<ExternalLinkIcon/></a> , <a href="http://es.wikipedia.org/wiki/Red_por_microondas" target="_blank" rel="noopener noreferrer">microondas<ExternalLinkIcon/></a> , <a href="http://es.wikipedia.org/w/index.php?title=Red_por_l%C3%A1ser&amp;action=edit" target="_blank" rel="noopener noreferrer">láser e<ExternalLinkIcon/></a> outras <a href="http://es.wikipedia.org/wiki/Red_inal%C3%A1mbrica" target="_blank" rel="noopener noreferrer">redes sen fíos<ExternalLinkIcon/></a> );</p>
<hr>
<p><strong>Capa de datos</strong>: a capa de enlace de datos ocupa o enderezo físico, a topoloxía da rede, o acceso á rede, a notificación de erros, a orde de tramas e o control de fluxo.</p>
<hr>
<p><strong>Capa de rede</strong>: a tarefa da capa de rede é facer que os datos cheguen dende a fonte ata o destino, aínda que ambos non estean conectados directamente. Os dispositivos que facilitan esta tarefa chámanse routers, aínda que é máis habitual atopar o nome inglés routers.</p>
<hr>
<p><strong>Capa de transporte</strong>: a súa función básica é aceptar os datos enviados polas capas superiores, dividilos en pequenas partes se é necesario, e pasalos á capa de rede, tamén se asegura de que chegue correctamente ao outro lado da comunicación.</p>
<hr>
<p><strong>Capa de sesión</strong>: esta capa encárgase de manter o vínculo entre os dous equipos que están a transmitir arquivos, ofrece varios servizos que son fundamentais para a comunicación, como son:</p>
<ul>
<li>Control da sesión a establecer entre o emisor e o receptor (quen transmite, que escoita e vixila).</li>
<li>Control de concorrencia (que dúas comunicacións á mesma operación crítica non se realicen ao mesmo tempo).</li>
<li>Manter puntos de verificación, que sirvan para que, en caso de interrupción da transmisión por calquera causa, se poida retomar dende o último punto de verificación en lugar de repetilo dende o principio.</li>
</ul>
<hr>
<p><strong>Capa de presentación</strong>: a finalidade da capa de presentación é coidar a representación da información, de xeito que aínda que diferentes ordenadores poidan ter diferentes representacións internas de caracteres ( <a href="http://es.wikipedia.org/wiki/ASCII" target="_blank" rel="noopener noreferrer">ASCII, <ExternalLinkIcon/></a><a href="http://es.wikipedia.org/wiki/Unicode" target="_blank" rel="noopener noreferrer">Unicode<ExternalLinkIcon/></a> , <a href="http://es.wikipedia.org/wiki/EBCDIC" target="_blank" rel="noopener noreferrer">EBCDIC)<ExternalLinkIcon/></a> , números ( tipo Intel <a href="http://es.wikipedia.org/wiki/Little-endian" target="_blank" rel="noopener noreferrer">little-endian , <ExternalLinkIcon/></a><a href="http://es.wikipedia.org/wiki/Big-endian" target="_blank" rel="noopener noreferrer">big -endian tipo<ExternalLinkIcon/></a> Motorola), son ou imaxes, os datos chegan dun xeito recoñecible.</p>
<hr>
<p><strong>Capa de aplicación</strong>: ofrece ás aplicacións (usuario ou non) a posibilidade de acceder aos servizos das outras capas e define os protocolos que utilizan as aplicacións para intercambiar datos, como <a href="http://es.wikipedia.org/wiki/Correo_electr%C3%B3nico" target="_blank" rel="noopener noreferrer">correo electrónico <ExternalLinkIcon/></a><a href="http://es.wikipedia.org/wiki/POP" target="_blank" rel="noopener noreferrer">(POP e <ExternalLinkIcon/></a><a href="http://es.wikipedia.org/wiki/SMTP" target="_blank" rel="noopener noreferrer">SMTP),<ExternalLinkIcon/></a> xestores de mensaxes, etc. bases de datos e <a href="http://es.wikipedia.org/w/index.php?title=Servidor_de_ficheros&amp;action=edit" target="_blank" rel="noopener noreferrer">servidor de ficheiros ( <ExternalLinkIcon/></a><a href="http://es.wikipedia.org/wiki/FTP" target="_blank" rel="noopener noreferrer">FTP<ExternalLinkIcon/></a> ).</p>
<hr>
<p>...</p>
<p><a href="https://www.cloudflare.com/learning/" target="_blank" rel="noopener noreferrer">https://www.cloudflare.com/learning/<ExternalLinkIcon/></a></p>
<hr>
<p>XAN 2023</p>
</div></template>


