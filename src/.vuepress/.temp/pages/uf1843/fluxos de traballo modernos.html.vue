<template><div><h2 id="fluxos-de-traballo-modernos-de-desenvolvemento-web" tabindex="-1"><a class="header-anchor" href="#fluxos-de-traballo-modernos-de-desenvolvemento-web" aria-hidden="true">#</a> <strong>fluxos de traballo modernos de desenvolvemento web</strong></h2>
<p><em>_ref: <a href="https://www.xfive.co/blog/craft-perfect-websites-chisel/" target="_blank" rel="noopener noreferrer">https://www.xfive.co/blog/craft-perfect-websites-chisel/<ExternalLinkIcon/></a></em></p>
<p>xa nada parece tan sinxelo como cando desenvolver sitios web era tan simple como gardar un arquivo .html e logo abrilo con algún navegador.</p>
<h3 id="fluxos-de-traballo" tabindex="-1"><a class="header-anchor" href="#fluxos-de-traballo" aria-hidden="true">#</a> Fluxos de traballo</h3>
<h3 id="_1-desenvolvemento-web-da-vella-escola" tabindex="-1"><a class="header-anchor" href="#_1-desenvolvemento-web-da-vella-escola" aria-hidden="true">#</a> 1) Desenvolvemento web da vella escola</h3>
<p>O fluxo de traballo de desenvolvemento web d<strong>a vella escola</strong> é bastante  sinxelo: crea e edita ficheiros fonte como HTML, CSS ou JavaScript e  logo volve cargar a páxina no navegador para amosar a versión  actualizada do sitio web composta por estes ficheiros.</p>
<figure><img src="F:\wrks_vrs\aprendendo_cousas\assets\01-old-school-workflow.png" alt="Fluxo de traballo de desenvolvemento web Old School" tabindex="0" loading="lazy"><figcaption>Fluxo de traballo de desenvolvemento web Old School</figcaption></figure>
<p>Os ficheiros fonte cárganse no navegador a medida que se gardan no  disco, polo que non hai ningunha transformación.  Por exemplo, se  comparas a fonte de CSS no navegador debería ser o mesmo que no ficheiro que estás editando no editor de texto.</p>
<h4 id="pros" tabindex="-1"><a class="header-anchor" href="#pros" aria-hidden="true">#</a> Pros</h4>
<ul>
<li>Fácil de entender</li>
<li>Rápido para comezar incluso para principiantes</li>
<li>Non se precisa configuración</li>
<li>Non hai problemas co informe e a depuración de erros xa que os ficheiros non se transforman de ningún xeito</li>
</ul>
<h4 id="contra" tabindex="-1"><a class="header-anchor" href="#contra" aria-hidden="true">#</a> Contra</h4>
<ul>
<li>Non hai soporte para técnicas modernas como os preprocesadores CSS</li>
<li>Non se admite a optimización automática de datos (minificación CSS, optimización de imaxe, etc.)</li>
<li>Máis difícil de manter en proxectos medianos a grandes</li>
<li>Necesitas recargar manualmente o navegador despois de cada cambio</li>
</ul>
<h2 id="_2-a-vella-escola-con-modelos" tabindex="-1"><a class="header-anchor" href="#_2-a-vella-escola-con-modelos" aria-hidden="true">#</a> 2) A vella escola con modelos</h2>
<p>É só unha lixeira variación do primeiro.  Para aforrar tempo na configuración do proxecto, o programador ten ficheiros  preparados como modelos e cópiaos a un novo cartafol do proxecto.  Poden ter varios modelos preparados para varios tipos de proxectos.  O resto  do fluxo de traballo é o mesmo que o primeiro fluxo de traballo.</p>
<figure><img src="F:\wrks_vrs\aprendendo_cousas\assets\02-old-school-with-templates.png" alt="Fluxo de traballo da vella escola con modelos" tabindex="0" loading="lazy"><figcaption>Fluxo de traballo da vella escola con modelos</figcaption></figure>
<p>Pode parecer que este pequeno cambio non supón unha modificación substancial do fluxo de  traballo.  Non obstante, esta idea inicial dos modelos van a ser unha parte importante do concepto de xerador, que acabará incorporándose a moderna optimización  dos fluxos de traballo.</p>
<h3 id="_3-desenvolvemento-web-moderno" tabindex="-1"><a class="header-anchor" href="#_3-desenvolvemento-web-moderno" aria-hidden="true">#</a> 3) Desenvolvemento web moderno</h3>
<p>Os fluxos de traballo de desenvolvemento web modernos xurdiron cando  apareceron novas extensións ás linguaxes de desenvolvemento web, por  exemplo, <a href="http://sass-lang.com/" target="_blank" rel="noopener noreferrer">Sass <ExternalLinkIcon/></a>como extensión a CSS. Como os navegadores non entenden Sass, necesitamos <strong>transformar</strong> o ficheiro Sass orixinal en CSS antes de envialo ao navegador. En vez de  facer esta transformación manualmente usando ferramentas externas,  podemos <strong>configurar</strong>  <strong>ferramentas</strong> como parte do noso proxecto e <strong>definir tarefas</strong> que se encargarán destes cambios.</p>
<figure><img src="F:\wrks_vrs\aprendendo_cousas\assets\03-modern-workflow-v2.png" alt="Fluxo de traballo de desenvolvemento web moderno" tabindex="0" loading="lazy"><figcaption>Fluxo de traballo de desenvolvemento web moderno</figcaption></figure>
<p>As ferramentas adoitan ser varios <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js. <ExternalLinkIcon/></a>módulos <strong>Node.js</strong> é un <strong>tempo de execución de JavaScript</strong> que necesitamos instalar no noso ordenador para poder usar os módulos Node. Podemos instalar módulos de nodo usando o xestor de paquetes de nodos - <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm <ExternalLinkIcon/></a>. Hai miles de módulos para varias tarefas, por exemplo, o <a href="https://www.npmjs.com/package/gulp-sass" target="_blank" rel="noopener noreferrer">gulp-sass <ExternalLinkIcon/></a>módulo que transforma Sass en CSS.</p>
<p>Como instruímoslle ao ordenador as <strong>ferramentas para executar os</strong> nosos ficheiros de proxecto? Facémolo creando <strong>tarefas</strong> . As tarefas pódense executar manualmente desde a liña de comandos ou  automaticamente cando cambian os ficheiros. Isto conséguese cunha  especial de <strong>tarefa vixilancia</strong> que vixía os cambios nos ficheiros e executa outras tarefas cando os ficheiros cambian. En conxunto con outras tarefas para <strong>recargar automaticamente o sitio web nun navegador</strong> , pode crear un ambiente de desenvolvemento favorable.</p>
<p>As definicións de ferramentas e tarefas están escritas nun ficheiro especial - <strong>package.json</strong> . As tarefas tamén se definen a miúdo usando corredores de tarefas separados como <a href="http://gulpjs.com/" target="_blank" rel="noopener noreferrer">Gulp, <ExternalLinkIcon/></a>que poden permitir a personalización de tarefas adicionais.</p>
<p>Os ficheiros transformados por tarefas adoitan almacenarse nun especial <strong>cartafol dist</strong> . Dist significa distribución ou distribución e significa que estes  ficheiros están listos para o seu uso en produción (por exemplo, están  reducidos).</p>
<p>Hai unha gran cantidade de tarefas que podemos definir nos nosos proxectos, imos citar algunhas:</p>
<ul>
<li><em>Preprocesadores CSS</em> : transformando Sass ou <a href="http://lesscss.org/" target="_blank" rel="noopener noreferrer">Less <ExternalLinkIcon/></a>en CSS</li>
<li><em>idiomas de modelos</em> - por exemplo. convertendo <a href="http://twig.sensiolabs.org/" target="_blank" rel="noopener noreferrer">Twig <ExternalLinkIcon/></a>a HTML</li>
<li><em>concatenación de ficheiros</em> : facer un ficheiro a partir de máis ficheiros para reducir o número de solicitudes HTTP</li>
<li><em>minificación</em> : eliminar espazo en branco para reducir o tamaño do ficheiro</li>
<li><em>linting</em> : validación do ficheiro contra un conxunto de regras</li>
<li><em>Validación HTML</em></li>
<li><em>optimización de imaxe</em></li>
<li><em>en directo recargando</em></li>
<li>… e moitos máis</li>
</ul>
<h4 id="pros-1" tabindex="-1"><a class="header-anchor" href="#pros-1" aria-hidden="true">#</a> Pros</h4>
<ul>
<li>miles de módulos de nodo (ferramentas) para todas as tarefas comúns</li>
<li>elimina as tediosas tarefas manuais do fluxo de traballo de desenvolvemento</li>
<li>sen necesidade de recarga manual</li>
</ul>
<h4 id="contra-1" tabindex="-1"><a class="header-anchor" href="#contra-1" aria-hidden="true">#</a> Contra</h4>
<ul>
<li>tempo engadido para a transformación de ficheiros</li>
<li>a configuración inicial pode ser complicada para un principiante</li>
<li>novas ferramentas para aprender</li>
</ul>
<h3 id="fluxo-de-traballo-moderno-con-aplicacions" tabindex="-1"><a class="header-anchor" href="#fluxo-de-traballo-moderno-con-aplicacions" aria-hidden="true">#</a> Fluxo de traballo moderno con aplicacións</h3>
<p>Hai unha variación deste fluxo de traballo. Aplicacións como <a href="https://prepros.io/" target="_blank" rel="noopener noreferrer">Prepros <ExternalLinkIcon/></a>ou <a href="https://codekitapp.com/" target="_blank" rel="noopener noreferrer">Codekit <ExternalLinkIcon/></a>permiten a configuración rápida e admiten moitas tarefas mencionadas  anteriormente como preprocesadores, optimización de ficheiros, recarga  en directo.</p>
<h4 id="pros-2" tabindex="-1"><a class="header-anchor" href="#pros-2" aria-hidden="true">#</a> Pros</h4>
<ul>
<li>Configuración mínima.  Instala a aplicación e goza.</li>
<li>É bo comezar coas ferramentas modernas: podes comezar a aprendelas sen problemas.</li>
</ul>
<h4 id="contra-2" tabindex="-1"><a class="header-anchor" href="#contra-2" aria-hidden="true">#</a> Contra:</h4>
<ul>
<li>Estas aplicacións normalmente non son gratuítas.</li>
<li>Todas as persoas do teu equipo terán que usar a mesma aplicación  para asegurarte de compilar os mesmos ficheiros e aproveitar o fluxo de  traballo asociado.</li>
</ul>
<h2 id="_4-fluxo-de-traballo-moderno-con-modelos" tabindex="-1"><a class="header-anchor" href="#_4-fluxo-de-traballo-moderno-con-modelos" aria-hidden="true">#</a> 4) Fluxo de traballo moderno con modelos</h2>
<p>Este fluxo de traballo é como o anterior, pero usamos modelos para  aforrar tempo e evitar configurar o noso proxecto desde cero.  Esta vez  tamén empregamos modelos para a definición de tarefas e ferramentas.</p>
<figure><img src="F:\wrks_vrs\aprendendo_cousas\assets\04-modern-workflow-with-templates-v2.png" alt="Fluxo de traballo moderno con modelos" tabindex="0" loading="lazy"><figcaption>Fluxo de traballo moderno con modelos</figcaption></figure>
<p>Unha vez que copiamos os ficheiros necesarios, podemos editalos e axustalos ás necesidades específicas do proxecto.</p>
<h2 id="_5-modern-workflow-cun-xerador" tabindex="-1"><a class="header-anchor" href="#_5-modern-workflow-cun-xerador" aria-hidden="true">#</a> 5) Modern Workflow cun xerador</h2>
<p>O último enfoque é a evolución do fluxo de traballo moderno de desenvolvemento web. Usamos un <strong>xerador</strong> para configurar un proxecto segundo as nosas necesidades.</p>
<p>Nós <strong>executar o xerador na liña de comandos</strong> na nova carpeta de proxecto. O xerador fai un par de <strong>preguntas sobre as nosas preferencias</strong> para o proxecto concreto ás que respondemos directamente na liña de  comandos. Despois configura a estrutura e os ficheiros do proxecto e  tamén nos instala módulos Node. Este proceso tamén se denomina <strong>estada</strong> .</p>
<p>Un <strong>xerador ten modelos</strong> almacenados nel e ademais de copialos no cartafol do proxecto pode <strong>procesar o seu contido en</strong> función das nosas respostas. Así, por exemplo, pode encher os nomes dos  proxectos nos ficheiros. Ou pode crear determinados ficheiros e tarefas  dependendo das nosas respostas.</p>
<figure><img src="F:\wrks_vrs\aprendendo_cousas\assets\05-modern-workflow-with-a-generator-v2.png" alt="Fluxo de traballo moderno cun xerador" tabindex="0" loading="lazy"><figcaption>Fluxo de traballo moderno cun xerador</figcaption></figure>
<p>Un xerador tamén pode ter comandos individuais que nos permiten  realizar novas modificacións do proxecto incluso unha vez que o proxecto xa está configurado, por exemplo, para engadir novas páxinas ao noso  proxecto.</p>
<p>A ferramenta máis común para crear xeradores é <a href="http://yeoman.io/" target="_blank" rel="noopener noreferrer">Yeoman <ExternalLinkIcon/></a>. Hai unha serie de <a href="http://yeoman.io/generators/" target="_blank" rel="noopener noreferrer">xeradores, cada un deles para diferentes tipos de proxectos <ExternalLinkIcon/></a>. En primeiro lugar, debemos coller un que sexa adecuado para o noso tipo de proxecto. Nós <strong>instala-lo globalmente</strong> , e podemos comezar a usalo. Se non atopamos un xerador adecuado, podemos incluso <a href="http://yeoman.io/authoring/" target="_blank" rel="noopener noreferrer">crear o noso propio xerador <ExternalLinkIcon/></a>.</p>
<p>Algunhas das bibliotecas de desenvolvemento web máis populares, como <strong>React</strong> ou <strong>Vue.js,</strong> tamén teñen ferramentas para crear novos proxectos que usan conceptos  similares como os xeradores de Yeoman, aínda que non usen Yeoman. ( <a href="https://github.com/facebookincubator/create-react-app" target="_blank" rel="noopener noreferrer">Mire Crear aplicación React <ExternalLinkIcon/></a>ou <a href="https://github.com/vuejs/vue-cli" target="_blank" rel="noopener noreferrer">vue-cli <ExternalLinkIcon/></a>.)</p>
<h3 id="pros-3" tabindex="-1"><a class="header-anchor" href="#pros-3" aria-hidden="true">#</a> Pros</h3>
<ul>
<li>configuración inicial sinxela incluso para principiantes</li>
<li>número de xeradores para diferentes tipos de proxectos</li>
<li>permite unha maior personalización do proxecto segundo as súas necesidades</li>
<li>elimina a tediosa tarefa manual do fluxo de traballo de desenvolvemento</li>
<li>sen necesidade de recarga manual</li>
</ul>
<h3 id="contra-3" tabindex="-1"><a class="header-anchor" href="#contra-3" aria-hidden="true">#</a> Contra</h3>
<ul>
<li>tempo engadido para a transformación de ficheiros</li>
<li>é posible que precise axustar as tarefas e ferramentas xeradas se se precisa máis personalización</li>
</ul>
<h2 id="comparacion-de-fluxos-de-traballo" tabindex="-1"><a class="header-anchor" href="#comparacion-de-fluxos-de-traballo" aria-hidden="true">#</a> Comparación de fluxos de traballo</h2>
<p>Compare todos os fluxos de traballo uns ao lado dos outros nunha imaxe.</p>
<figure><img src="F:\wrks_vrs\aprendendo_cousas\assets\web-development-workflows-v2.png" alt="https://www.xfivecdn.com/xfive/wp-content/uploads/2017/03/21113854/web-development-workflows-v2.png" tabindex="0" loading="lazy"><figcaption><a href="https://www.xfivecdn.com/xfive/wp-content/uploads/2017/03/21113854/web-development-workflows-v2.png" target="_blank" rel="noopener noreferrer">https://www.xfivecdn.com/xfive/wp-content/uploads/2017/03/21113854/web-development-workflows-v2.png<ExternalLinkIcon/></a></figcaption></figure>
<h3 id="xeradores-modernos" tabindex="-1"><a class="header-anchor" href="#xeradores-modernos" aria-hidden="true">#</a> Xeradores modernos</h3>
<p>SSG</p>
<p><strong>Chisel</strong> é un xerador desenvolvido por <a href="https://www.xfive.co" target="_blank" rel="noopener noreferrer">Xfive<ExternalLinkIcon/></a>. En esencia  é un xerador de Yeoman para configurar e desenvolver proxectos front-end e/ou de WordPress.</p>
<p>E é por ese enfoque no desenvolvemento de WordPress polo que resulta especialmente atractivo. Con Chisel poderás desenvolver proxectos de WordPress baseados na <a href="https://www.upstatement.com/timber/" target="_blank" rel="noopener noreferrer">biblioteca Timber <ExternalLinkIcon/></a>.</p>
<p>Asemade Chisel  inclúe moitas funcións que soportan o desenvolvemento moderno de front-end desde cero.  Como:</p>
<h4 id="a-templating-system" tabindex="-1"><a class="header-anchor" href="#a-templating-system" aria-hidden="true">#</a> A Templating system</h4>
<ul>
<li><a href="http://twig.sensiolabs.org/" target="_blank" rel="noopener noreferrer">Twig<ExternalLinkIcon/></a> templating engine</li>
</ul>
<h4 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h4>
<ul>
<li>SCSS with <a href="https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/" target="_blank" rel="noopener noreferrer">ITCSS architecture<ExternalLinkIcon/></a></li>
</ul>
<h4 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h4>
<ul>
<li>optional ES6 with <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">Babel<ExternalLinkIcon/></a></li>
<li><a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">webpack<ExternalLinkIcon/></a></li>
<li>optional jQuery</li>
</ul>
<h4 id="linting-and-validation" tabindex="-1"><a class="header-anchor" href="#linting-and-validation" aria-hidden="true">#</a> Linting and validation</h4>
<ul>
<li><a href="http://stylelint.io/" target="_blank" rel="noopener noreferrer">stylelint<ExternalLinkIcon/></a></li>
<li><a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">Prettier<ExternalLinkIcon/></a></li>
<li><a href="http://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint<ExternalLinkIcon/></a> with <a href="https://github.com/xfiveco/eslint-config-chisel" target="_blank" rel="noopener noreferrer">config tailored for Chisel<ExternalLinkIcon/></a> and <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">Prettier<ExternalLinkIcon/></a> synced together for consistent and hassle free code formatting</li>
<li>HTML validation with <a href="https://github.com/bezoerb/gulp-htmlhint" target="_blank" rel="noopener noreferrer">htmlhint<ExternalLinkIcon/></a></li>
</ul>
<h4 id="build-and-dev-tools" tabindex="-1"><a class="header-anchor" href="#build-and-dev-tools" aria-hidden="true">#</a> Build and dev tools</h4>
<ul>
<li><a href="http://gulpjs.com/" target="_blank" rel="noopener noreferrer">Gulp<ExternalLinkIcon/></a> build system</li>
<li><a href="https://www.browsersync.io/" target="_blank" rel="noopener noreferrer">Browsersync<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/sindresorhus/gulp-rev" target="_blank" rel="noopener noreferrer">gulp-rev<ExternalLinkIcon/></a> support</li>
</ul>
<h4 id="wordpress-support" tabindex="-1"><a class="header-anchor" href="#wordpress-support" aria-hidden="true">#</a> WordPress support</h4>
<ul>
<li>Automatic <a href="http://wp-cli.org/" target="_blank" rel="noopener noreferrer">WP-CLI<ExternalLinkIcon/></a> based WordPress and plugins installation</li>
<li>Automatic <a href="http://upstatement.com/timber/" target="_blank" rel="noopener noreferrer">Timber<ExternalLinkIcon/></a> library facility to support Twig templates</li>
<li>Chisel starter theme with the same workflow as for front-end projects</li>
<li>WordPress page generation from command line</li>
</ul>
<h3 id="craft-perfect-websites-with-chisel" tabindex="-1"><a class="header-anchor" href="#craft-perfect-websites-with-chisel" aria-hidden="true">#</a> <a href="https://www.xfive.co/blog/craft-perfect-websites-chisel/" target="_blank" rel="noopener noreferrer">Craft Perfect Websites with Chisel<ExternalLinkIcon/></a></h3>
<p><a href="https://github.com/xfiveco/generator-chisel" target="_blank" rel="noopener noreferrer">Chisel<ExternalLinkIcon/></a> is a Yeoman generator for scaffolding and developing front-end and WordPress projects.</p>
<h2 id="wsl" tabindex="-1"><a class="header-anchor" href="#wsl" aria-hidden="true">#</a> WSL</h2>
<p>yo = yeoman</p>
<p>chisel    - wordpress developement / front en templates(?)</p>
<p>Primeiro instale <a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js <ExternalLinkIcon/></a>para que poida traballar con npm, o xestor de paquetes Node. É necesaria a versión 6+.</p>
<p>A continuación, instale <a href="http://yeoman.io/" target="_blank" rel="noopener noreferrer">Yeoman <ExternalLinkIcon/></a>, <a href="http://gulpjs.com/" target="_blank" rel="noopener noreferrer">Gulp <ExternalLinkIcon/></a>e Chisel desde a súa liña de comando.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span>g yo generator<span class="token operator">-</span>chisel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Xa está listo para usar Chisel.  Crea un novo cartafol de proxecto, abre unha liña de comandos nel e escribe:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> yo chisel
? <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
We<span class="token string">'re constantly looking for ways to make yo better!
May we anonymously report usage statistics to improve the tool over time?
More info: https://github.com/yeoman/insight &amp; http://yeoman.io
========================================================================== No

 *********************************************

  Welcome to Chisel

  https://github.com/xfiveco/generator-chisel

 *********************************************

? Please enter the project name: Pro Wp Dev
? Please enter author name: nunhes
? Please select project type: WordPress Website
? Include jQuery? Yes
? Would you like to configure vendor bundle for jQuery plugins? Yes

WORDPRESS SETUP

? Enter title for the new site: Pro Wp Dev
? Enter URL: http://pro-wp-dev.test/
? Enter admin user: aroela
? Enter admin password: [hidden]
? Enter admin email: nunhes@gmail.com
? Where do you want to place the '</span>src' folder: Project root folder
? Enter the database host: <span class="token number">127.0</span>.0.1
? Enter the database port: <span class="token number">3306</span>
? Enter the database name: pro-wp-dev
? Enter the database user: phpmyadmin
? Enter the database password: <span class="token punctuation">[</span>hidden<span class="token punctuation">]</span>
Error when testing database connection:
Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server<span class="token punctuation">;</span> consider upgrading MySQL client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p><em>Non ten por que ocorrer pero se xurde algún erro, deberemos proceder a solucionalo antes de avanzar. Algún erro na instalación de phpMyAdmin obrígame a resolver esta continxencia</em></p>
<p>Solución ao problema de privilexios de usuarios con phpmyadmin</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ALTER <span class="token environment constant">USER</span> <span class="token string">'phpmyadmin'</span>@<span class="token string">'localhost'</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">'admin'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Sacado de <a href="https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server" target="_blank" rel="noopener noreferrer">stackoverflow.com<ExternalLinkIcon/></a></em></p>
<p>Execute the following query in MYSQL Workbench</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Where <code v-pre>root</code> as your user <code v-pre>localhost</code> as your URL and <code v-pre>password</code> as your password</p>
<p>Then run this query to refresh privileges:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Try connecting using node after you do so.</p>
<p>If that doesn't work, try it without <code v-pre>@'localhost'</code> part.</p>
<hr>
<p><strong>…continuamos:</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>? Enter the database host: localhost
? Enter the database port: <span class="token number">3306</span>
? Enter the database name: pro-wp-dev
? Enter the database user: root
? Enter the database password: <span class="token punctuation">[</span>hidden<span class="token punctuation">]</span>
? Select optional plugins Classic Editor, Advanced Custom Fields Pro, Gravity Forms, WP Sync DB, WP Sync DB Media File Addon

INSTALLATION



I'm all done. Running <span class="token function">yarn</span> <span class="token function">install</span> <span class="token keyword">for</span> you to <span class="token function">install</span> the required dependencies. If this fails, try running the <span class="token builtin class-name">command</span> yourself.


   create package.json
    force .yo-rc.json
   create .babelrc
   create .browserslistrc
   create .editorconfig
   create .eslintignore
   create .eslintrc
   create .gitattributes
   create .htmlhintrc
   create .prettierignore
   create .prettierrc
   create .stylelintignore
   create .stylelintrc.yml
   create .gitignore
   create src/assets/fonts/.keep
   create src/assets/images/.keep
   create webpack.chisel.config.js
   create README.md
   <span class="token punctuation">..</span><span class="token punctuation">..</span>
   // <span class="token function">install</span> all Wordpress staff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Responde as preguntas do cincel segundo as necesidades do seu proxecto e agarde ata que finalice a instalación.</p>
<p>Despois, para engadir o tipo de primeira páxina:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>yo chisel<span class="token operator">:</span>page <span class="token string">"Home"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Finalmente inicia un servidor de desenvolvemento e tarefas que procesarán os teus modelos, estilos e scripts.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>O continuo <strong>desenvolvemento do proxecto existente tamén</strong> é  sinxelo; non esquezas que este proxecto xa se configurou con Chisel,  polo que non tes que configuralo de novo. Todo o que tes que facer cando clonaches o repositorio existente é executalo</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>para instalar módulos Node.  Entón podes correr</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Se <strong>continúas desenvolvendo</strong> un <strong>proxecto de WordPress</strong> , executa o seguinte comando, <em>wp-config</em> e <em>creará o -local.php dev-vhost.conf</em> ficheiro (se o necesitas)</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>yo chisel<span class="token operator">:</span>wp<span class="token operator">-</span>config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A continuación, cree unha base de datos, importe o volcado da base de datos e execute</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>para instalar módulos Node.  Finalmente, pode construír o proxecto usando</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ou executa a tarefa de desenvolvemento</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Para obter documentación detallada consulte <a href="https://www.getchisel.co/" target="_blank" rel="noopener noreferrer">getchisel.co <ExternalLinkIcon/></a></p>
<h1 id="non-funciona" tabindex="-1"><a class="header-anchor" href="#non-funciona" aria-hidden="true">#</a> Non funciona!!!</h1>
<h1 id="_2" tabindex="-1"><a class="header-anchor" href="#_2" aria-hidden="true">#</a> 2.</h1>
<p>Sitio estático</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> chisel-static
$ <span class="token builtin class-name">cd</span> chisel-static
$ chisel create
chisel: <span class="token builtin class-name">command</span> not found
$ yo chisel

 *********************************************

  Welcome to Chisel

  https://github.com/xfiveco/generator-chisel

 *********************************************

? Please enter the project name: Chisel Static
? Please enter author name: nunhes
? Please <span class="token keyword">select</span> project type: Front-end Templates
? Include jQuery? Yes
? Would you like to configure vendor bundle <span class="token keyword">for</span> jQuery plugins? Yes

INSTALLATION



I'm all done. Running <span class="token function">yarn</span> <span class="token function">install</span> <span class="token keyword">for</span> you to <span class="token function">install</span> the required dependencies. If this fails, try running the <span class="token builtin class-name">command</span> yourself.


   create package.json
    force .yo-rc.json
   create .babelrc
   create .browserslistrc
   create .editorconfig
   create .eslintignore
   create .eslintrc
   create .gitattributes
   create .htmlhintrc
   create .prettierignore
   create .prettierrc
   create .stylelintignore
   create .stylelintrc.yml
   create .gitignore
   create src/assets/fonts/.keep
   create src/assets/images/.keep
   create webpack.chisel.config.js
   create index/project-index.html
   create index/css/main.css
   create index.html
   create README.md
   create src/templates/components/footer.twig
   create src/templates/components/header.twig
   create src/templates/layouts/base.twig
   create src/templates/layouts/page.twig
   create src/styles/vendor/.keep
   create src/styles/main.scss
   create src/styles/components/_btn.scss
   create src/styles/components/_footer.scss
   create src/styles/components/_header.scss
   create src/styles/elements/_blockquote.scss
   create src/styles/elements/_headings.scss
   create src/styles/elements/_hr.scss
   create src/styles/elements/_html.scss
   create src/styles/elements/_images.scss
   create src/styles/elements/_links.scss
   create src/styles/elements/_lists.scss
   create src/styles/elements/_tables.scss
   create src/styles/generic/_box-sizing.scss
   create src/styles/generic/_font-face.scss
   create src/styles/generic/_normalize.scss
   create src/styles/generic/_reset.scss
   create src/styles/generic/_shared.scss
   create src/styles/objects/_layout.scss
   create src/styles/objects/_list-bare.scss
   create src/styles/objects/_list-inline.scss
   create src/styles/objects/_media.scss
   create src/styles/objects/_table.scss
   create src/styles/objects/_wrapper.scss
   create src/styles/settings/_global.scss
   create src/styles/tools/_breakpoints.scss
   create src/styles/tools/_clearfix.scss
   create src/styles/tools/_hidden.scss
   create src/styles/utilities/_align.scss
   create src/styles/utilities/_clearfix.scss
   create src/styles/utilities/_hide.scss
   create src/scripts/vendor/.keep
   create src/scripts/app.js
   create src/scripts/modules/greeting.js
   create src/scripts/vendor.json
   create gulpfile.js
   create gulp/NameAllModulesPlugin.js
   create gulp/helpers.js
   create gulp/prepareConfig.js
   create gulp/templatesFunctions.js
   create gulp/tasks/assets.js
   create gulp/tasks/build.js
   create gulp/tasks/lint.js
   create gulp/tasks/report.js
   create gulp/tasks/scripts.js
   create gulp/tasks/serve.js
   create gulp/tasks/styles.js
   create gulp/tasks/templates.js
   create gulp/tasks/vendor.js
<span class="token function">yarn</span> <span class="token function">install</span> v1.22.5
warning package.json: No license field
info No lockfile found.
warning chisel-static@0.0.1: No license field
<span class="token punctuation">[</span><span class="token number">1</span>/5<span class="token punctuation">]</span> Validating package.json<span class="token punctuation">..</span>.
warning chisel-static@0.0.1: No license field
error chisel-static@0.0.1: The engine <span class="token string">"node"</span> is incompatible with this module. Expected version <span class="token string">"^8.10.0 || ^10.13.0"</span><span class="token builtin class-name">.</span> Got <span class="token string">"14.17.5"</span>
error Found incompatible module.
info Visit https://yarnpkg.com/en/docs/cli/install <span class="token keyword">for</span> documentation about this command.
$ code <span class="token builtin class-name">.</span>
$ <span class="token function">yarn</span>

// <span class="token function">wait</span> to <span class="token function">install</span> all dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Cando actualizamos as dependencias dun repositorio e convinte eliminar o vello cartafol de modulos de Node e volver a encetar:</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span>

///or

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


