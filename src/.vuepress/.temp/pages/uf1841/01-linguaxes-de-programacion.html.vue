<template><div><h6 id="obxectivos" tabindex="-1"><a class="header-anchor" href="#obxectivos" aria-hidden="true">#</a> Obxectivos:</h6>
<ul>
<li><em>Explorar o concepto de programación.</em></li>
<li><em>Comprender o que son as linguaxes de programación de alto e baixo nivel.</em></li>
<li><em>Coñecer os elementos básicos dun programa.</em></li>
<li><em>Coñecer o software e as ferramentas empregadas polos desenvolvedores.</em></li>
</ul>
<h2 id="que-e-a-programacion" tabindex="-1"><a class="header-anchor" href="#que-e-a-programacion" aria-hidden="true">#</a> Que é a programación?</h2>
<p>A programación (tamén coñecida como codificación) é o proceso de escribir instrucións nun dispositivo, como un ordenador ou un dispositivo móbil.</p>
<p>Escribimos estas instrucións mediante unha linguaxe de programación, que despois é interpretada polo dispositivo. A estes conxuntos de instrucións se os pode denominar de diferentes xeitos: programa, programa de ordenador, aplicación (app) ou executable.</p>
<h3 id="un-programa-ou-aplicacion" tabindex="-1"><a class="header-anchor" href="#un-programa-ou-aplicacion" aria-hidden="true">#</a> Un programa (ou aplicación)</h3>
<p>Un programa pode ser calquera cousa que estea escrita con código e se execute nos nosos dispositivos:</p>
<ul>
<li>Sitios web</li>
<li>Xogos</li>
<li>Aplicacións de teléfono</li>
</ul>
<p>Un programa que se executa ou executa código está a realizar unha serie de instrucións programadas. O dispositivo que estás usando actualmente p.ex. está executando un programa que representa os contidos na túa pantalla.</p>
<h2 id="linguaxes-de-programacion" tabindex="-1"><a class="header-anchor" href="#linguaxes-de-programacion" aria-hidden="true">#</a> Linguaxes de programación</h2>
<p>O propósito principal das linguaxes de programación é que os desenvolvedores elaboren instrucións para enviar a un dispositivo.</p>
<p>As linguaxes de programación son un vehículo de comunicación entre humanos e ordenadores.</p>
<p>As linguaxes de programación teñen unha variedade de formatos e poden servir para diferentes fins. Por exemplo, JavaScript úsase principalmente para aplicacións web e Bash úsase principalmente para a xestión de sistemas operativos.</p>
<h3 id="linguaxes-de-baixo-e-de-alto-nivel" tabindex="-1"><a class="header-anchor" href="#linguaxes-de-baixo-e-de-alto-nivel" aria-hidden="true">#</a> Linguaxes de baixo e de alto nivel</h3>
<p>As linguaxes de baixo nivel soen necesitar menos pasos que as de alto nivel para ser interpretados por un dispositivo. Non obstante, o que fai populares as linguaxes de alto nivel é a súa lexibilidade e compatibilidade. JavaScript considérase unha linguaxe de alto nivel.</p>
<p>O código da seguinte sección ilustra a diferenza entre unha linguaxe de alto nivel, como JavaScript, e unha linguaxe ensambladora de baixo nivel.</p>
<h3 id="comparacion-de-codigos" tabindex="-1"><a class="header-anchor" href="#comparacion-de-codigos" aria-hidden="true">#</a> Comparación de códigos</h3>
<p>O seguinte código está escrito en JavaScript, unha linguaxe de alto nivel. Implementa un algoritmo empregando construcións como variables, bucles for e outras instrucións.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">let</span> n1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> n2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> nextTerm<span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> number<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    nextTerm <span class="token operator">=</span> n1 <span class="token operator">+</span> n2<span class="token punctuation">;</span>
    n1 <span class="token operator">=</span> n2<span class="token punctuation">;</span>
    n2 <span class="token operator">=</span> nextTerm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>O código anterior ilustra un algoritmo para implementar unha secuencia de Fibonacci. Agora, aquí está o código correspondente na linguaxe ensambladora:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,<span class="token comment">#00</span>
 sub r0,r0,<span class="token comment">#01</span>
 mov r1,<span class="token comment">#01</span>
 mov r4,<span class="token comment">#10</span>
 ldr r2,<span class="token operator">=</span>0x40000000
back <span class="token function">add</span> r0,r1
 str r0,<span class="token punctuation">[</span>r2<span class="token punctuation">]</span>
 <span class="token function">add</span> r2,<span class="token comment">#04</span>
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,<span class="token comment">#01</span>
 <span class="token function">cmp</span> r4,<span class="token comment">#00</span>
 bne back
 end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Créalo ou non, <em>ambos exemplos están facendo o mesmo</em>: representar unha secuencia de Fibonacci, ata 10.</p>
<p>✅ Unha sucesión de Fibonacci <a href="https://gl.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci" target="_blank" rel="noopener noreferrer">defínese<ExternalLinkIcon/></a> como un conxunto de números tal que cada número é a suma dos dous anteriores, comezando por 0 e 1.</p>
<h2 id="elementos-dun-programa" tabindex="-1"><a class="header-anchor" href="#elementos-dun-programa" aria-hidden="true">#</a> Elementos dun programa</h2>
<p>Os programas compóñense de instrucións. Polo xeral cada instrución ocupa un espazo delimitado. Dependendo da linguaxe os limites poden ser varios: o salto de liña, un punto e coma o final da instrución, ou un marcado especifico - corchetes,...-</p>
<p>Todas as instrucións expresadas nunha aplicación ou programa se inclúen para desenvolver un cometido concreto. Se algunha(s) instrución(s) non se executa carece de valor. A non execución dunha instrución pódese deber a múltiples razóns: un dispositivo ou interface incompatible, un erro na redacción ou un accidente inesperado. Parte fundamental do programador e testear o código que produce para correxir erros e evitar producir código <em>inservible</em>.</p>
<h2 id="ferramentas" tabindex="-1"><a class="header-anchor" href="#ferramentas" aria-hidden="true">#</a> Ferramentas</h2>
<p>Unha <strong>entorna de desenvolvemento</strong> é un conxunto de ferramentas que un programador usa para escribir, probar, producir ou publicar programas de todo tipo. Segundo os intereses específicos, unha entorna pode modificarse ao gusto do desenvolvedor e adaptarse a diferentes fluxos de traballo; p.ex.  cando se emprega unha ou outra linguaxe de programación.</p>
<p>Os entornas de desenvolvemento son tan únicas coma os desenvolvedores que os empregan.</p>
<h3 id="entorna-de-desenvolvemento" tabindex="-1"><a class="header-anchor" href="#entorna-de-desenvolvemento" aria-hidden="true">#</a> Entorna de desenvolvemento</h3>
<h4 id="editor" tabindex="-1"><a class="header-anchor" href="#editor" aria-hidden="true">#</a> Editor</h4>
<p>Unha das ferramentas esenciais para o desenvolvemento é o editor de código. Os editores son onde escribes o teu código e, ás veces, onde executarás o teu código.</p>
<p>Outras capacidades dun editor de código ben valoradas polos desenvolvedores son:</p>
<ul>
<li><em><strong>Depuración:</strong></em>  Axudas para detectar e depurar erros. Algúns editores dispoñen de capacidades de depuración ou permiten engadila para linguaxes de programación específicas.</li>
<li><em><strong>Resaltado de sintaxe:</strong></em> Uso de cores e formato de texto na representación do código, facilitando a lectura. A maioría dos editores permiten personalizar o resaltado de sintaxe.</li>
<li><em><strong>Extensións e integracións:</strong></em> Complementos especializados para desenvolvemento, que permiten acceder a ferramentas adicionais que non están integradas no editor base. P. ex., nalgún momento podes necesitar unha extensión de verificación ortográfica para comprobar se hai erros na redacción de contidos, ou outra que simplemente se encargue de organizar a disposición do código para que sexa máis lexible. Cada editor soe ter os seus complementos ou extensións propios; e, a maioría deles inclúen unha forma de manexar extensións: buscar, activar, desactivar, configurar segundo as necesidades,... Moitos permiten asemade que os desenvolvedores poidan crear as súas propias extensións.</li>
<li><em><strong>Personalización</strong></em> A maioría dos editores son extremadamente personalizables,  de xeito que cada programador pode ter a súa entorna de desenvolvemento única e adaptada ás súas necesidades.</li>
</ul>
<h5 id="editores-populares-e-extensions-de-desenvolvemento-web" tabindex="-1"><a class="header-anchor" href="#editores-populares-e-extensions-de-desenvolvemento-web" aria-hidden="true">#</a> Editores populares e extensións de desenvolvemento web</h5>
<ul>
<li>
<p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Code<ExternalLinkIcon/></a></p>
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker" target="_blank" rel="noopener noreferrer">Corrector ortográfico de código<ExternalLinkIcon/></a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank" rel="noopener noreferrer">LiveServer<ExternalLinkIcon/></a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">Prettier - Formateador de código<ExternalLinkIcon/></a></li>
<li><a href="https://www.tabnine.com/blog/top-42-free-vscode-extensions/" target="_blank" rel="noopener noreferrer">saber máis<ExternalLinkIcon/></a>...</li>
</ul>
</li>
<li>
<p><a href="https://atom.io/" target="_blank" rel="noopener noreferrer">Atom<ExternalLinkIcon/></a></p>
<ul>
<li><a href="https://atom.io/packages/spell-check" target="_blank" rel="noopener noreferrer">corrector ortográfico<ExternalLinkIcon/></a></li>
<li><a href="https://atom.io/packages/teletype" target="_blank" rel="noopener noreferrer">teletipo<ExternalLinkIcon/></a></li>
<li><a href="https://atom.io/packages/atom-beautify" target="_blank" rel="noopener noreferrer">embelecer átomo<ExternalLinkIcon/></a></li>
<li><a href="https://www.tabnine.com/blog/21-best-atom-packages-for-2021/" target="_blank" rel="noopener noreferrer">saber máis<ExternalLinkIcon/></a>...</li>
</ul>
</li>
<li>
<p><a href="http://www.sublimetext.com/" target="_blank" rel="noopener noreferrer">SublimeText<ExternalLinkIcon/></a></p>
<ul>
<li><a href="http://packagecontrol.io/" target="_blank" rel="noopener noreferrer">Package Control<ExternalLinkIcon/></a></li>
<li><a href="https://www.tabnine.com/blog/21-best-atom-packages-for-2021/" target="_blank" rel="noopener noreferrer">Emmet<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<p><a href="https://docs.github.com/en/codespaces" target="_blank" rel="noopener noreferrer">Codespace<ExternalLinkIcon/></a></p>
</li>
</ul>
<h4 id="navegador" tabindex="-1"><a class="header-anchor" href="#navegador" aria-hidden="true">#</a> Navegador</h4>
<p>Outra ferramenta crucial é o navegador. Os desenvolvedores web confían no navegador para ver como se executa o seu código.</p>
<p>Moitos navegadores inclúen <em>ferramentas para desenvolvedores</em> (DevTools) que conteñen un conxunto de funcións e información útiles para axudar aos desenvolvedores a recoller e capturar información importante sobre a súa aplicación. Por exemplo: se unha páxina web ten erros, ás veces é útil saber cando se produciron. DevTools nun navegador pódense configurar para capturar esta información.</p>
<h5 id="navegadores-populares-e-ferramentas-de-desenvolvemento" tabindex="-1"><a class="header-anchor" href="#navegadores-populares-e-ferramentas-de-desenvolvemento" aria-hidden="true">#</a> Navegadores populares e ferramentas de desenvolvemento</h5>
<ul>
<li><a href="https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-13441-cxa" target="_blank" rel="noopener noreferrer">Edge<ExternalLinkIcon/></a></li>
<li><a href="https://developers.google.com/web/tools/chrome-devtools/" target="_blank" rel="noopener noreferrer">Chrome<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/docs/Tools" target="_blank" rel="noopener noreferrer">Firefox<ExternalLinkIcon/></a></li>
<li><a href="https://www.opera.com/" target="_blank" rel="noopener noreferrer">Opera<ExternalLinkIcon/></a></li>
</ul>
<h4 id="ferramentas-de-lina-de-comandos" tabindex="-1"><a class="header-anchor" href="#ferramentas-de-lina-de-comandos" aria-hidden="true">#</a> Ferramentas de liña de comandos</h4>
<p>Para algunhas tarefas hai desenvolvedores que prefiren unha entorna máis áxil, inda que menos gráfica: a liña de comandos.</p>
<p>O desenvolvemento de código require unha cantidade significativa de tecleo. Para non interromper o fluxo de traballo podemos empregar os atallos de teclado: para cambiar entre as fiestras do escritorio, traballar en diferentes arquivos, usar ferramentas,... A maioría das tarefas pódense completar cun rato, pero unha vantaxe de usar a liña de comandos é que se pode facer moito coas ferramentas da liña de comandos sen necesidade de intercambiar entre o rato e o teclado. Outra vantaxe da liña de comandos é que se pode configurar e pode gardar a túa configuración personalizada, cambiala  e tamén importala a novas máquinas de desenvolvemento. Debido a que os ambientes de desenvolvemento son tan exclusivos para cada desenvolvedor, algúns evitarán usar a liña de comandos, outros confiarán nela por completo.</p>
<h5 id="opcions-populares-da-lina-de-comandos" tabindex="-1"><a class="header-anchor" href="#opcions-populares-da-lina-de-comandos" aria-hidden="true">#</a> Opcións populares da liña de comandos</h5>
<p>As opcións para a liña de comandos dependeran do sistema operativo que empregues.</p>
<h6 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h6>
<ul>
<li>
<p><a href="https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7?WT.mc_id=academic-13441-cxa" target="_blank" rel="noopener noreferrer">Powershell<ExternalLinkIcon/></a> 💻</p>
</li>
<li>
<p><a href="https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands?WT.mc_id=academic-13441-cxa" target="_blank" rel="noopener noreferrer">Liña de comandos<ExternalLinkIcon/></a> (tamén coñecida como CMD) 💻</p>
</li>
<li>
<p><a href="https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-13441-cxa" target="_blank" rel="noopener noreferrer">Terminal de Windows<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://mintty.github.io/" target="_blank" rel="noopener noreferrer">mintty<ExternalLinkIcon/></a></p>
</li>
</ul>
<h6 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> MacOS</h6>
<ul>
<li>
<p><a href="https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac" target="_blank" rel="noopener noreferrer">Terminal<ExternalLinkIcon/></a> 💻</p>
</li>
<li>
<p><a href="https://iterm2.com/" target="_blank" rel="noopener noreferrer">iTerm<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7?WT.mc_id=academic-13441-cxa" target="_blank" rel="noopener noreferrer">Powershell<ExternalLinkIcon/></a></p>
</li>
</ul>
<h6 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h6>
<ul>
<li><a href="https://www.gnu.org/software/bash/manual/html_node/index.html" target="_blank" rel="noopener noreferrer">bash<ExternalLinkIcon/></a> 💻</li>
<li><a href="https://docs.kde.org/trunk5/en/konsole/konsole/index.html" target="_blank" rel="noopener noreferrer">KDE Konsole<ExternalLinkIcon/></a></li>
<li><a href="https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7?WT.mc_id=academic-13441-cxa" target="_blank" rel="noopener noreferrer">Powershell<ExternalLinkIcon/></a></li>
</ul>
<h6 id="outras-ferramentas-de-lina-de-comandos-popular-command-line-tools" tabindex="-1"><a class="header-anchor" href="#outras-ferramentas-de-lina-de-comandos-popular-command-line-tools" aria-hidden="true">#</a> Outras ferramentas de liña de comandos - Popular Command Line Tools</h6>
<ul>
<li><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git<ExternalLinkIcon/></a> (💻 on most operating systems)</li>
<li><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">NPM<ExternalLinkIcon/></a></li>
<li><a href="https://classic.yarnpkg.com/en/docs/cli/" target="_blank" rel="noopener noreferrer">Yarn<ExternalLinkIcon/></a></li>
</ul>
<h2 id="documenta-o-teu-codigo" tabindex="-1"><a class="header-anchor" href="#documenta-o-teu-codigo" aria-hidden="true">#</a> Documenta o teu código</h2>
<p>Aprende as mellores prácticas. Non gañas nada buscando na nube de titorías en liña unha solución que a <strong>documentación oficial</strong> seguramente te soluciona en poucos pasos. Vai as fontes.</p>
<p><strong>Documenta os teus proxectos</strong>. Usa  os comentarios enxertados no teu código. Inda que acabes limpándoos cara a publicación.</p>
<h2 id="mais-sobre-desenvolvemento-web" tabindex="-1"><a class="header-anchor" href="#mais-sobre-desenvolvemento-web" aria-hidden="true">#</a> Máis sobre desenvolvemento web</h2>
<ul>
<li><a href="https://developer.mozilla.org/docs/Web" target="_blank" rel="noopener noreferrer">Mozilla Developer Network (MDN)<ExternalLinkIcon/></a>, de Mozilla, os publicadores do navegador <a href="https://www.mozilla.org/firefox/" target="_blank" rel="noopener noreferrer">Firefox<ExternalLinkIcon/></a></li>
<li><a href="https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers" target="_blank" rel="noopener noreferrer">Microsoft's developer docs<ExternalLinkIcon/></a>, para <a href="https://www.microsoft.com/edge" target="_blank" rel="noopener noreferrer">Microsoft Edge<ExternalLinkIcon/></a></li>
<li><a href="https://devdocs.io/" target="_blank" rel="noopener noreferrer">devdocs.io<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">w3schools<ExternalLinkIcon/></a></li>
<li><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freecodecamp.org<ExternalLinkIcon/></a></li>
<li><a href="https://code.org/" target="_blank" rel="noopener noreferrer">code.org<ExternalLinkIcon/></a></li>
<li><a href="https://frontendmasters.com/" target="_blank" rel="noopener noreferrer">https://frontendmasters.com/<ExternalLinkIcon/></a></li>
</ul>
<hr>
<p><strong>.ref:</strong> <a href="https://docs.microsoft.com/gl-es/learn/modules/web-development-101-introduction-programming/1-introduction" target="_blank" rel="noopener noreferrer">https://docs.microsoft.com/gl-es/learn/modules/web-development-101-introduction-programming/1-introduction<ExternalLinkIcon/></a></p>
<p>OUT 2021</p>
</div></template>


