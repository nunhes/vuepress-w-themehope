<template><div><h1 id="variables-e-tipos-de-datos-de-javascript" tabindex="-1"><a class="header-anchor" href="#variables-e-tipos-de-datos-de-javascript" aria-hidden="true">#</a> Variables e tipos de datos de JavaScript</h1>
<p><em><em>ref:</em></em> <a href="https://docs.microsoft.com/es-es/learn/modules/web-development-101-variables/" target="_blank" rel="noopener noreferrer">https://docs.microsoft.com/es-es/learn/modules/web-development-101-variables/<ExternalLinkIcon/></a></p>
<blockquote>
<p>Unha linguaxe de programación consta de moitos conceptos. Podes empregar eses conceptos para crear calquera cousa, desde unha pequena aplicación de liña de comandos ata un sistema empresarial a gran escala. Antes de crear unha aplicación, debes coñecer os aspectos básicos da linguaxe.</p>
</blockquote>
<p>Un concepto fundamental importante é o das <em>variables</em>.  O código fonte pode ter desde 10 liñas ata moitos miles e pode presentarse nun único arquivo ou repartirse entre centos deles. As variables son referencias con nome que che axudan a controlar os valores importantes do programa.</p>
<p>Existen <strong>varios tipos de valores</strong>. É posible que queiras cambiar algúns e outros non. Dependendo de que tipo de valor se utilice, debe almacenarse como ese tipo.</p>
<p>Agora veremos cales son os tipos de variables e cales os seus tipos de  datos. Xunto có xeito no que se poden usar na programación con JavaScript.</p>
<p>Imos ver:</p>
<ul>
<li>Que son as variables e por que usalas.</li>
<li>Cando usar constantes.</li>
<li>Como almacenar valores como tipos diferentes pode aportar claridade no código.</li>
</ul>
<h1 id="introducion-as-variables" tabindex="-1"><a class="header-anchor" href="#introducion-as-variables" aria-hidden="true">#</a> Introdución ás variables</h1>
<p>Para comprender correctamente JavaScript (a linguaxe que proporciona interactividade en Internet), primeiro debes comprender os tipos de datos e variables da linguaxe e como se crean. E inda máis importante é comprender cando, onde e como usalos.</p>
<h2 id="interactividade" tabindex="-1"><a class="header-anchor" href="#interactividade" aria-hidden="true">#</a> Interactividade</h2>
<p>Mediante o uso de variables, poderás realizar un <strong>seguimento do estado</strong>. Quizás necesites lembrar o valor da selección dun usuario ou gardar o resultado dun cálculo. Situacións como estas exixen o uso de variables.</p>
<p>Os tipos de datos melloran o uso de variables ao permitirche especificar a forma e o tamaño dos datos que necesitas almacenar. Os tipos de datos poden expresarse como números, cadeas ou incluso estruturas máis complexas.</p>
<p>Se xa aprendiches unha linguaxe de programación antes, é posible que observes algunhas similitudes entre dita linguaxe e JavaScript, se ben a sintaxe pode ser un pouco diferente. Se é a primeira vez que aprendes unha linguaxe de programación, non te preocupes. Imos ver os conceptos básicos de JavaScript que che axudarán a desempeñarte satisfactoriamente coma desenvolvedor web.</p>
<p>✏️ <em><strong>Suxestión</strong></em>: mira agora este <a href="https://youtu.be/JNIXfGiDWM8/" target="_blank" rel="noopener noreferrer">vídeo<ExternalLinkIcon/></a> de introducción.</p>
<h1 id="uso-de-variables-para-lembrar-valores" tabindex="-1"><a class="header-anchor" href="#uso-de-variables-para-lembrar-valores" aria-hidden="true">#</a> Uso de variables para lembrar valores</h1>
<p>Saber como usar correctamente variables e tipos de datos é esencial para escribir código en JavaScript. <strong>As variables almacenan valores que se poden usar e cambiar</strong> en todo o código, e <strong>os tipos de datos axudan a describir que tipo de datos se almacena nesas variables</strong>.</p>
<h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2>
<p>Imaxina que tes un valor no código que queres lembrar para un uso futuro. Ao almacenar o valor, podes facer referencia a el máis adiante no código.</p>
<p>Podes crear e declarar unha variable mediante a seguinte sintaxe: <code v-pre>[keyword] [name]</code>. Coma neste exemplo dunha declaración de variable:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> aVariable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A palabra clave <code v-pre>var</code> indica que se desexa declarar unha variable, e <code v-pre>aVariable</code> é o nome da variable. O nome dunha variable é elixible e debe reflectir para que se usa.</p>
<h2 id="palabra-clave-para-traballar-con-variables" tabindex="-1"><a class="header-anchor" href="#palabra-clave-para-traballar-con-variables" aria-hidden="true">#</a> Palabra clave para traballar con variables</h2>
<p>A palabra clave <code v-pre>let</code> foi introducida no estándar de JavaScript ECMAScript 6 (ES6). O uso de <code v-pre>let</code> proporciona o <em>ámbito de bloque</em> das variables. Recomendase usar <code v-pre>let</code> en lugar de <code v-pre>var</code> para administrar mellor o ámbito da aplicación.</p>
<p>JavaScript usa os diferentes tipos de ámbito, como o ámbito global e o ámbito de función, para determinar que variables están dispoñibles en que partes do código. Por exemplo, unha variable global está dispoñible dentro dunha función porque pertence ao ámbito global (o ámbito &quot;externo&quot;). As variables designadas coa  palabra clave <code v-pre>var</code> teñen o seu ámbito (os seus valores son visibles) dentro do corpo da función e as variables <code v-pre>let</code> teñen como ámbito o seu bloque de inclusión entre chaves. Isto significa que se usas <code v-pre>var</code>  nun bucle <code v-pre>for</code>, será visible fora do bucle <code v-pre>for</code>, o que podería provocar resultados inesperados. O uso de <code v-pre>let</code> é unha mellor opción porque só está dispoñible no bloque de inclusión (é dicir, o bucle <code v-pre>for</code>), polo que a súa dispoñibilidade podería ser máis previsible.</p>
<p>Para declarar unha variable mediante <code v-pre>let</code>, usa a sintaxe seguinte:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> myVariable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>myVariable</code> foi declarada agora mediante a palabra clave <code v-pre>let</code>. Actualmente non ten un valor, pero podes darlle un.</p>
<h3 id="asignacion-dun-valor" tabindex="-1"><a class="header-anchor" href="#asignacion-dun-valor" aria-hidden="true">#</a> Asignación dun valor</h3>
<p>Para almacenar un valor nunha variable, usa o <em>operador de asignación</em> (<code v-pre>=</code>) seguido do valor esperado:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>myVariable <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>✏️ <em><strong>Suxestión</strong></em>: O uso do operador de asignación (<code v-pre>=</code>) neste exemplo establece un valor nunha variable. Difire dunha comparación, que usa dous ou tres operadores como <code v-pre>==</code> ou <code v-pre>===</code>.</p>
<p>Agora a <code v-pre>myVariable</code> <em>asignóuselle</em> o valor <code v-pre>123</code>.</p>
<h3 id="inicializacion-explicita" tabindex="-1"><a class="header-anchor" href="#inicializacion-explicita" aria-hidden="true">#</a> Inicialización explícita</h3>
<p>Unha <em>inicialización</em> difire dunha asignación en que se declara o valor e se lle asigna un valor. Este é un exemplo dunha inicialización:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> myVariable <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Unha inicialización explícita se usa no lugar dunha asignación se se desexa que unha variable conteña un <em>valor de inicio</em>. Imaxina, por exemplo, que queres que todos os xogadores dun xogo de cartas teñan fichas de póker por valor de 100 puntos antes de empezar unha partida. Para representar ese estado, poderías declaralo da seguinte forma:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> pokerChips <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cambio-de-variables" tabindex="-1"><a class="header-anchor" href="#cambio-de-variables" aria-hidden="true">#</a> Cambio de variables</h3>
<p>É posible que queiras almacenar un valor nunha variable temporalmente. Un exemplo é a suma dun cálculo.</p>
<p>O código seguinte mostra como se usa o operador de asignación (<code v-pre>=</code>) e como se <em>asigna</em> un valor no lado dereito do operador:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>myVariable <span class="token operator">=</span> <span class="token number">321</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>✏️ <em><strong>Suxestión</strong></em>: Próbao para practicar. Podes escribir código JavaScript directamente no explorador. Abre unha xanela do explorador e vai a <strong>Ferramentas de desenvolvemento</strong>. Na consola, atoparás unha solicitude <code v-pre>&gt;</code>. Escribe <code v-pre>let myVariable = 123</code> e, a continuación, <code v-pre>myVariable</code>. Que sucede?</p>
<p>***</p>
<p>As veces non queres que se cambien os valores dunha variable. Esta situación pode acontecer cando se confía nunha constante matemática, coma por exemplo no valor de pi. Para satisfacer esta necesidade, JavaScript permite crear <em>constantes</em>.</p>
<h2 id="constantes" tabindex="-1"><a class="header-anchor" href="#constantes" aria-hidden="true">#</a> Constantes</h2>
<p>A declaración e a inicialización dunha constante seguen os mesmos conceptos que unha variable, salvo que usa a palabra clave <code v-pre>const</code>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">MY_VARIABLE</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>✏️ <em><strong>Suxestión</strong></em>: Aínda que podes asignarlle a unha variable constante o nome que queiras, recoméndase que poñas todas as letras en maiúsculas.</p>
<p>As constantes son similares ás variables, con dúas excepcións:</p>
<ul>
<li><em>Deben ter un valor</em>. As constantes se deben inicializar ou se producirá un erro ao executar o código.</li>
<li><em>A referencia non se pode cambiar</em>. Se a referencia dunha constante cambia despois de inicializarse, se producirá un erro ao executar o código.</li>
</ul>
<p>Vexamos algúns exemplos:</p>
<ul>
<li>
<p>A seguinte sintaxe de código para un valor simple <em>non</em> está permitida:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// non permitido</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>A sintaxe seguinte ten unha referencia de obxecto protexido e <em>no</em>n está permitida:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span> <span class="token comment">// non permitido</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>A sintaxe seguinte ten un valor de obxecto que non está protexido. <em>Está</em> permitida porque vai a cambiar o valor do obxecto, pero non a propia referencia.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>  <span class="token comment">// permitido</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>🚩 <strong>Nota:</strong> A presencia de <code v-pre>const</code> significa que a referencia non se pode reasignar. Sen embargo, o valor non é <em>inmutable</em> e pode cambiar, especialmente se se trata dunha construcción complexa como un obxecto.</p>
<h1 id="tipos-de-datos" tabindex="-1"><a class="header-anchor" href="#tipos-de-datos" aria-hidden="true">#</a> Tipos de datos</h1>
<p>As variables poden almacenar moitos tipos diferentes de valores, como números e texto. Estes valores se denominan <em>tipos de datos</em>.</p>
<p>Os tipos de datos son unha parte importante do desenvolvemento de software porque os desenvolvedores úsanos para tomar decisións sobre como se debe escribir o código e como debe executarse o software. Algúns tipos de datos teñen características únicas que axudan a transformar ou extraer información adicional dun valor.</p>
<p>Os tipos de datos tamén se denominan <em>primitivas de datos de JavaScript</em>, xa que son os tipos de datos de nivel máis baixo que proporciona a linguaxe. Hai <strong>seis tipos de datos primitivos</strong>: <code v-pre>string</code>, <code v-pre>number</code>, <code v-pre>bigint</code>, <code v-pre>boolean</code>, <code v-pre>undefined</code> e <code v-pre>symbol</code>.</p>
<p>✏️ <em><strong>Suxestión</strong></em>: Dedica un minuto a visualizar o que podería representar cada unha destes tipos primitivos. Que é unha cebra? E se se executa <code v-pre>0</code>? E se se executa <code v-pre>true</code>?</p>
<h2 id="numeros" tabindex="-1"><a class="header-anchor" href="#numeros" aria-hidden="true">#</a> Números</h2>
<p>Na sección anterior, o valor de <code v-pre>myVariable</code> era un tipo de datos <code v-pre>number</code>:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let myVariable = 123;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>As variables poden almacenar todos os tipos de números, incluídos decimais ou números negativos. Os números tamén se poden usar con <em>operadores aritméticos</em>.</p>
<p>Estes son algúns tipos de operadores que podes usar ao realizar funcións aritméticas:</p>
<table>
<thead>
<tr>
<th style="text-align:left">Símbolo</th>
<th style="text-align:left">Descrición</th>
<th style="text-align:left">Exemplo</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>+</code></td>
<td style="text-align:left"><strong>Suma</strong>: calcúla a suma de dous números.</td>
<td style="text-align:left"><code v-pre>1 + 2 //expected answer is 3</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>-</code></td>
<td style="text-align:left"><strong>Resta</strong>: calcúla a diferencia de dous números.</td>
<td style="text-align:left"><code v-pre>1 - 2 //expected answer is -1</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>*</code></td>
<td style="text-align:left"><strong>Multiplicación</strong>: calcula o produto de dous números.</td>
<td style="text-align:left"><code v-pre>1 * 2 //expected answer is 2</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>/</code></td>
<td style="text-align:left"><strong>División</strong>: calcúla o cociente de dous números.</td>
<td style="text-align:left"><code v-pre>1 / 2 //expected answer is 0.5</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>%</code></td>
<td style="text-align:left"><strong>Resto</strong>: calcúla o resto da división de dous números.</td>
<td style="text-align:left"><code v-pre>1 % 2 //expected answer is 1</code></td>
</tr>
</tbody>
</table>
<p>✏️ <em><strong>Suxestión</strong></em>: Proba unha operación aritmética na consola do explorador. Que che parecen os resultados?</p>
<h2 id="cadeas-string" tabindex="-1"><a class="header-anchor" href="#cadeas-string" aria-hidden="true">#</a> Cadeas - <em>String</em></h2>
<p>As cadeas son conxuntos de caracteres que residen entre comiñas simples ou dobres.</p>
<ul>
<li><code v-pre>'This is a string'</code></li>
<li><code v-pre>&quot;This is also a string&quot;</code></li>
<li><code v-pre>let myString = 'This is a string value stored in a variable';</code></li>
</ul>
<p>✏️ <em><strong>Suxestión</strong></em>: Lembra usar comiñas ao escribir unha cadea ou JavaScript asumirá que é un nome de variable.</p>
<p>As cadeas son textuais e é necesario aplicarlles formato ocasionalmente.</p>
<p>Para <em>concatenar</em> dúas ou máis cadeas ou unilas, emprega o operador <code v-pre>+</code>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> myString1 <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> myString2 <span class="token operator">=</span> <span class="token string">"World"</span><span class="token punctuation">;</span>

myString1 <span class="token operator">+</span> myString2 <span class="token operator">+</span> <span class="token string">"!"</span><span class="token punctuation">;</span> <span class="token comment">//HelloWorld!</span>
myString1 <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> myString2 <span class="token operator">+</span> <span class="token string">"!"</span><span class="token punctuation">;</span> <span class="token comment">//Hello World!</span>
myString1 <span class="token operator">+</span> <span class="token string">", "</span> <span class="token operator">+</span> myString2 <span class="token operator">+</span> <span class="token string">"!"</span><span class="token punctuation">;</span> <span class="token comment">//Hello, World!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Por que <code v-pre>1 + 1 = 2</code> en JavaScript, pero <code v-pre>'1' + '1' = 11</code>? Pénsao. E que pasa con <code v-pre>'1' + 1</code>?</p>
<p>Os <em>literais de modelo</em> son outra maneira de dar formato ás cadeas, salvo que, en lugar de comiñas, usan acentos graves. Todo o que no sexa texto sen formato debe colocarse dentro de marcadores de posición <code v-pre>${ }</code>, incluídas as variables que poden ser cadeas. Este é un exemplo:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> myString1 <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> myString2 <span class="token operator">=</span> <span class="token string">"World"</span><span class="token punctuation">;</span>

<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myString1<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myString2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span> <span class="token comment">//Hello World!</span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myString1<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myString2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span> <span class="token comment">//Hello, World!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Podes empregar calquera método para aplicar o formato que queiras, pero os literais de modelo respectarán todos os espazos e saltos de líña.</p>
<p>✏️ <em><strong>Suxestión</strong></em>: Dedica un momento a pensar nos casos de uso de diferentes tipos de cadea. Cando usarías un literal de modelo en lugar dunha cadea sen formato?</p>
<h2 id="valores-booleanos" tabindex="-1"><a class="header-anchor" href="#valores-booleanos" aria-hidden="true">#</a> Valores booleanos</h2>
<p>Os valores booleanos só poden ser de dous tipos: <code v-pre>true</code> ou <code v-pre>false</code>. Os valores booleanos axudan a tomar decisións sobre que liñas de código se deben executar cando se cumpran certas condicións. En moitos casos, os operadores axudan a establecer o valor dun valor booleano. A miúdo observarás que as variables se inicializan cun operador ou que os seus valores se actualizan cun operador. Este é un exemplo:</p>
<ul>
<li><code v-pre>let myTrueBool = true</code></li>
<li><code v-pre>let myFalseBool = false</code></li>
</ul>
<p>Unha variable se pode considerar &quot;verdadeira&quot; se se evalúa como un valor booleano cuxo valor é <code v-pre>true</code>. En JavaScript, <a href="https://developer.mozilla.org/docs/Glossary/Truthy/" target="_blank" rel="noopener noreferrer">todos os valores son verdadeiros a menos que se definan como &quot;falsos&quot;<ExternalLinkIcon/></a>.</p>
<p>✏️ <em><strong>Suxestión</strong></em>: Explora os problemas comúns de JavaScript. Lembra que podes escribir JavaScript directamente no explorador. Abre unha xanela do explorador e vai a <strong>Ferramentas de desenvolvemento</strong>. Na consola, atoparás unha solicitude. Este código se resolve como <code v-pre>false</code>: <code v-pre>let age = 1</code>; <code v-pre>let Age = 2</code>; <code v-pre>age == Age</code>. Por que crees que é así e que outros problemas comúns pode atopar?</p>
<hr>
<h1 id="creacion-de-codigo-modular-mediante-funcions-en-javascript" tabindex="-1"><a class="header-anchor" href="#creacion-de-codigo-modular-mediante-funcions-en-javascript" aria-hidden="true">#</a> Creación de código modular mediante funcións en JavaScript</h1>
<p><strong>As funcións son os bloques de creación de calquera aplicación que se vaia a crear</strong>. Coas funcións podes crear seccións de código con nome e reutilizables, para que sexa máis lexible e fácil de manter. Imos a explorar os conceptos básicos das funcións.</p>
<h2 id="obxectivos-de-aprendizaxe" tabindex="-1"><a class="header-anchor" href="#obxectivos-de-aprendizaxe" aria-hidden="true">#</a> Obxectivos de aprendizaxe</h2>
<p>Neste módulo, aprenderás:</p>
<ul>
<li>Como escribir unha función básica.</li>
<li>Que parámetros se proporcionan e como usalos.</li>
<li>Como devolver valores dunha función.</li>
<li>Como usar funcións anónimas.</li>
</ul>
<h2 id="introducion" tabindex="-1"><a class="header-anchor" href="#introducion" aria-hidden="true">#</a> Introdución</h2>
<p>Cando pensamos en escribir código, sempre queremos asegurarnos de que o código sexa lexible. Aínda que pareza contraditorio, <strong>o código se lee moitas máis veces das que se escribe</strong>.</p>
<p>A <em>función</em> é unha ferramenta clave no cadro de ferramentas dun desenvolvedor para garantir que o código se poida manter. Basicamente, unha función é un bloque de código que se pode executar a petición. Este código pode realizar unha tarefa, como ir a outra parte dun sitio web ou calcular un valor, como a suma de dous números.</p>
<p>Imos agora a ver:</p>
<ul>
<li>Como escribir unha función básica.</li>
<li>Que parámetros se proporcionan e como usalos.</li>
<li>Como devolver valores dunha función.</li>
<li>Como usar funcións anónimas.</li>
</ul>
<h1 id="informacion-xeral-sobre-as-funcions" tabindex="-1"><a class="header-anchor" href="#informacion-xeral-sobre-as-funcions" aria-hidden="true">#</a> Información xeral sobre as funcións</h1>
<p>As funcións son bloques de creación clave para escribir código. Una función é unha colección de liñas de código reutilizable que fai que algo suceda dentro do programa.</p>
<p>As funcións son perfectas para escenarios nos que se necesita realizar a mesma tarefa varias veces. En lugar de duplicar a lóxica en varias localizacións, o que dificultaría a actualización do código máis adiante, podes centralizalo nunha úneca localización. Deste xeito, podes chamalo sempre que se necesite que a operación se realice de novo. Incluso podes chamar a funcións desde outras funcións.</p>
<p>Igual de importante é a posibilidade de asignarlle un nome a cada función. Inda que asignarlle un nome a unha función poida parecer trivial, o nome proporciona unha forma rápida de documentar unha sección de código. Pódese pensar na nomenclatura coma na etiqueta dun botón. Por exemplo, si seleccionas o botón &quot;Cancelar temporizador&quot;, o relo deixará de correr.</p>
<h2 id="creacion-e-chamada-a-unha-funcion" tabindex="-1"><a class="header-anchor" href="#creacion-e-chamada-a-unha-funcion" aria-hidden="true">#</a> Creación e chamada a unha función</h2>
<p>Unha función toma algunha entrada e logo devolve unha saída que transforma de algún modo a entrada. Por exemplo, unha función de suma pode tomar dous números enteiros e devolver a suma dos seus valores.</p>
<p><strong>As funcións están formadas por tres compoñentes diferentes</strong>:</p>
<ul>
<li>Un <em>corpo de función</em>: un bloque de código que se executa cando se chama á función.</li>
<li>Un <em>parámetro</em>: outro nome para a entrada que se lle pasa a unha función.</li>
<li>E por último, un <em>valor devolto</em> ou saída da función.</li>
</ul>
<p>A sintaxe dunha función vaise semellar ao código seguinte:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">nameOfFunction</span><span class="token punctuation">(</span><span class="token parameter">parameter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// function definition with some input</span>
<span class="token comment">// function body</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Os parámetros e os valores devoltos son opcionais cando se escribe unha función. Para empezar, comprobemos algunhas funcións básicas que non toman ningunha entrada nin devolven valor ningún. Se queres crear unha función para mostrar un saúdo na <a href="https://developer.mozilla.org/docs/Web/API/console" target="_blank" rel="noopener noreferrer">consola<ExternalLinkIcon/></a> de depuración do editor de código, podería ter este aspecto:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">displayGreeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, world!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A función se denomina <code v-pre>displayGreeting</code>. Ao executar a función, o texto &quot;Hello, world!&quot; se imprime na consola.</p>
<p>Sempre que queiras chamar á función ou invocala, usa o nome da función seguido dun par de parénteses (<code v-pre>()</code>). Merece a pena ter en conta que podes definir a función antes ou despois de que decidas chamala. En calquera caso, JavaScript a atopará por ti, sempre e cando se atope dentro do ámbito dende onde se chama.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// chamando á función</span>
<span class="token function">displayGreeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>🚩 <strong>Nota</strong>: Hai un tipo especial de función coñecido como <em>método</em>, que xa estiveches usando. De feito, miraches un método na demostración anterior cando usaches <code v-pre>console.log</code>. O que fai que un método sexa diferente dunha función é que está asociado a un obxecto (<em>console</em>, no exemplo); en cambio, unha función é flotante libre. Oirás que moitos desenvolvedores usan estes termos indistintamente.</p>
<h2 id="procedementos-recomendados" tabindex="-1"><a class="header-anchor" href="#procedementos-recomendados" aria-hidden="true">#</a> Procedementos recomendados</h2>
<p>Ao crear funcións, ten en conta algúns procedementos recomendados:</p>
<ul>
<li>Usa nomes descritivos que indiquen o que pretenden facer as funcións. Por exemplo, o nome <code v-pre>displayGreeting</code> deixa claro que o propósito da función é mostrar un saúdo. Un nome como <code v-pre>greet</code>, para unha función que realiza esa mesma tarefa, é un pouco ambiguo. Podería mostrar un saúdo, pero tamén podería realizar unha operación diferente.</li>
<li>Use unha mistura de maiúsculas e minúsculas para combinar palabras. Para escribir combinando maiúsculas e minúsculas, mantén a primeira palabra da variable ou función en minúsculas e escribe con maiúscula inicial cada palabra posterior. Dado que os nomes de función e variable non poden conter espazos, a combinación de maiúsculas e minúsculas facilita a lectura do código. Por exemplo, <code v-pre>displayGreeting</code> é máis fácil de ler que <code v-pre>displaygreeting</code>.</li>
<li>Mantén as funcións centradas nunha tarefa específica. Isto non só facilita a reutilización dunha función nun programa, senón que tamén facilita a depuración do código. Se tes unha incidencia cunha función que non realiza a tarefa que considerabas que faría, saberás que o problema está dentro desa función.</li>
<li>Usa texto comentado para anotar o código e describir o que fan as funcións. Para mellorar a lectura do código, inclúe no comentario unha breve descrición da tarefa de cada función. Para crear comentarios, escribe unha barra diagonal dobre (<code v-pre>//</code>), seguida da descrición. O comentario finaliza cando se inicia unha nova líña.</li>
</ul>
<h1 id="parametros-de-funcion" tabindex="-1"><a class="header-anchor" href="#parametros-de-funcion" aria-hidden="true">#</a> Parámetros de función</h1>
<p>Para que unha función sexa máis reutilizable, a miúdo quererás pasarlle información. Este tipo de entrada de información, a información en si, se denomina <em>parámetro</em>. Un parámetro, a veces tamén denominado &quot;argumento&quot;, é información adicional que se envía a unha función.</p>
<p>Supoñamos que queres cambiar a función <code v-pre>displayGreeting</code> para poder saudar a unha persoa específica, en vez de imprimir só &quot;Hello, world!&quot; cada vez que se chama a esa función. Podes usar un parámetro para especificar o nome da persoa.</p>
<p>Os parámetros se enumeran na definición da función e se inclúen entre parénteses (<code v-pre>()</code>). Podes ter varios parámetros separados por comas, como se amosa aquí:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">param<span class="token punctuation">,</span> param2<span class="token punctuation">,</span> param3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Podes actualizar a función <code v-pre>displayGreeting</code> para que tome o nome dunha persoa como entrada e imprimir unha mensaxe personalizada na consola, como se mostra... aquí:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// function with a parameter called name</span>
<span class="token keyword">function</span> <span class="token function">displayGreeting</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token comment">// creating a new local variable that inserts the name into a string   </span>
    <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span> 
    <span class="token comment">// printing the variable to the console</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Se queres chamar á función e pasarlle o parámetro, é posible especificalo entre parénteses da seguinte forma:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">displayGreeting</span><span class="token punctuation">(</span><span class="token string">'Christopher'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// displays "Hello, Christopher!" when run</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="valores-predeterminados" tabindex="-1"><a class="header-anchor" href="#valores-predeterminados" aria-hidden="true">#</a> Valores predeterminados</h2>
<p>Podes facer que a función sexa inda máis flexible, engadindo máis parámetros. E que acontece se non queres requirir que se especifiquen tódolos valores? Se seguimos có exemplo do saúdo, podes manter <code v-pre>name</code>, segundo sexa necesario (debes saber a quen estás saudando), pero queres permitir que o saúdo se personalice. Se alguén non quere personalizalo, pode proporcionar un valor predeterminado no seu lugar. Para iso, establece o valor da mesma maneira que estableces un valor para unha variable: <code v-pre>parameterName = 'defaultValue'</code>. Por exemplo:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">displayGreeting</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> salutation<span class="token operator">=</span><span class="token string">'Hello'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>salutation<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ao chamar á función, podes decidir se estableces un valor para o saúdo, como aquí:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">displayGreeting</span><span class="token punctuation">(</span><span class="token string">'Christopher'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// displays "Hello, Christopher"</span>

<span class="token function">displayGreeting</span><span class="token punctuation">(</span><span class="token string">'Christopher'</span><span class="token punctuation">,</span> <span class="token string">'Hi'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// displays "Hi, Christopher"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h1 id="valores-devoltos" tabindex="-1"><a class="header-anchor" href="#valores-devoltos" aria-hidden="true">#</a> Valores devoltos</h1>
<p>Ata este punto, as funcións que levas creado teñen saída na <a href="https://developer.mozilla.org/docs/Web/API/console" target="_blank" rel="noopener noreferrer">consola<ExternalLinkIcon/></a>. Isto pode ser exactamente o que buscas, especialmente cando se crean funcións que chaman a outros servizos. E que ocorre se queres crear unha función auxiliar para realizar un cálculo e despois proporcionar un valor que poida usarse noutro lugar?</p>
<p>Para iso, usa un <em>valor devolto</em>. A función devolve un valor devolto e pode almacenalo nunha variable igual que pode almacenar un valor literal, como unha cadea o un número.</p>
<p>Se unha función debe devolver algo, se usa a palabra clave <code v-pre>return</code>, seguida normalmente dun valor ou unha referencia ao que se devolve. Sin embargo, tamén pode usar <code v-pre>return</code>  sen máis para saír dunha función.</p>
<p>Este é un exemplo dunha instrución <code v-pre>return</code> que devolve un valor:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> myVariable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Aquí se mostra como se usaría <code v-pre>return</code> por si só:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Segundo o exemplo anterior, podería escribir unha función para crear unha mensaxe de saúdo e logo devolver o valor ao autor da chamada. Ter en conta que a palabra clave <code v-pre>return</code>  detén a execución da función e devolve o valor especificado, se o hai. Polo tanto, normalmente quererás usar <code v-pre>return</code> ao final da función, da seguinte maneira:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createGreetingMessage</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> message<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚩 <strong>Nota</strong>: Non se pode acceder ás variables que se definan dentro dunha función desde ningún lugar fora da función. Estas variables se denominan <em>variables locais</em>. Fora da función, se considera que están <em>fora do ámbito</em>.</p>
<p>Cando se chama a esta función, se almacena o valor nunha variable. Isto faise da mesma maneira que se establecería unha variable nun valor estático (por exemplo, <code v-pre>let name = 'Christopher'</code>), da seguinte maneira:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> greetingMessage <span class="token operator">=</span> <span class="token function">createGreetingMessage</span><span class="token punctuation">(</span><span class="token string">'Christopher'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Os valores devoltos axudan a demostrar outra das razóns polas que as funcións son unha parte tan importante de JavaScript. Podes reutilizar a mesma función con argumentos diferentes para xerar varios valores devoltos.</p>
<h1 id="exercicio-crear-unha-funcion" tabindex="-1"><a class="header-anchor" href="#exercicio-crear-unha-funcion" aria-hidden="true">#</a> Exercicio: Crear unha función</h1>
<p>Ao escribir código estarás creando funcións con frecuencia. Neste exemplo práctico imos crear unha función para mostrar un nome nunha páxina web. A función tomará un parámetro, o nome da persoa á que desexas saudar e despois devolverá a mensaxe. Logo chamará a esta función para mostrar a mensaxe.</p>
<p>🚩 <strong>Nota</strong>: Atoparás o código completo deste exemplo na parte inferior da páxina.</p>
<h2 id="creacion-dunha-paxina-de-exemplo" tabindex="-1"><a class="header-anchor" href="#creacion-dunha-paxina-de-exemplo" aria-hidden="true">#</a> Creación dunha páxina de exemplo</h2>
<p>Empeza por crear unha nova páxina en Visual Studio Code.</p>
<ol>
<li>
<p>Abre unha terminal ou ventana de comandos de Visual Studio Code.</p>
</li>
<li>
<p>Para crear un novo directorio e cambiar a este, executa un dos seguintes comandos:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Windows</span>
md functions <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> functions

<span class="token comment"># macOS or Linux</span>
<span class="token function">mkdir</span> functions <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> functions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Para abrir o novo directorio en Visual Studio Code, executa o seguinte comando:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>code <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>No panel <strong>Explorador,</strong> mantén punteiro sobre <strong>funcións</strong> e logo selecciona ó icono <strong>Novo arquivo</strong>.</p>
<p><img src="https://docs.microsoft.com/es-es/learn/modules/web-development-101-functions/media/functions-create-file.png" alt="Captura de pantalla del panel del Explorador con el icono Nuevo arquivo resaltado" loading="lazy"> .</p>
</li>
<li>
<p>Asignalle o nome <em>index.html</em> ao novo arquivo e, logo, abreo no editor.</p>
</li>
</ol>
<h2 id="agregar-o-codigo-para-amosar-a-mensaxe" tabindex="-1"><a class="header-anchor" href="#agregar-o-codigo-para-amosar-a-mensaxe" aria-hidden="true">#</a> Agregar o código para amosar a mensaxe</h2>
<p>Agora podes agregar o código que servirá para amosar a mensaxe.</p>
<ol>
<li>No arquivo <em>index.html</em> crea o núcleo do arquivo HTML, pegando o seguinte código HTML:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
           <span class="token comment">// TODO: Add hello code</span>

           <span class="token comment">// TODO: Add setTimeout code</span>
       
       </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚩 <strong>Nota</strong>: Os comentarios <code v-pre>TODO</code> dentro da etiqueta de script son marcadores para agregar código tanto neste exemplo coma nun próximo.</p>
<ol start="2">
<li>
<p>No arquivo <em>index.html</em>, debaixo da liña comentada <code v-pre>//TODO: Add hello code</code>, crea unha función, agregando o seguinte código.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// TODO: Add hello code</span>
<span class="token keyword">function</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'Hello, '</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">'...'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A función toma un parámetro, denominado <code v-pre>name</code>, e devolve unha cadea que lle di &quot;Ola&quot; ao nome da persoa que proporciona a entrada.</p>
</li>
<li>
<p>Debaixo da chave de peche (<code v-pre>}</code>) no código que acabas de agregar, engade o código seguinte para obter a mensaxe e  <code v-pre>document.write</code> para mostralo na páxina web.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token string">'Ornella'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Garda o arquivo seleccionando <strong>Archivo</strong> &gt; <strong>Guardar</strong>.</p>
</li>
</ol>
<h2 id="visualizacion-da-paxina" tabindex="-1"><a class="header-anchor" href="#visualizacion-da-paxina" aria-hidden="true">#</a> Visualización da páxina</h2>
<p>Xa creaches a páxina. Vexamos como funciona:</p>
<ol>
<li>
<p>En Visual Studio Code, abre a <strong>Paleta de comandos</strong>, premendo Ctrl+Mayús+P (Windows) ou Cmd+Mayús+P nun equipo Mac.</p>
</li>
<li>
<p>Na <strong>Paleta de comandos</strong>, abra <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank" rel="noopener noreferrer">Live Server<ExternalLinkIcon/></a>, escribindo <strong>Live Server</strong> e logo seleccionando <strong>Live Server: Abrir con Live Server</strong>.</p>
<figure><img src="https://docs.microsoft.com/es-es/learn/modules/web-development-101-functions/media/launch-live-server.png" alt="Captura de pantalla da Paleta de comandos con Live Server: Abrir con Live Server resaltado." tabindex="0" loading="lazy"><figcaption>Captura de pantalla da Paleta de comandos con &quot;Live Server: Abrir con Live Server&quot; resaltado.</figcaption></figure>
<p>Live Server se abre no navegador e amósase a mensaxe mostrando a mensaxe &quot;Ola, Ornella...&quot;.</p>
<figure><img src="https://docs.microsoft.com/es-es/learn/modules/web-development-101-functions/media/hello-ornella.png" alt="Captura de pantalla da ventana del explorador, en la que se muestra el mensaje Hola, Ornella...." tabindex="0" loading="lazy"><figcaption>Captura de pantalla da ventana del explorador, en la que se muestra el mensaje &quot;Hola, Ornella...&quot;.</figcaption></figure>
</li>
</ol>
<p>Agora que xa creaches e chamaches a unha función para mostrar unha mensaxe. Podes intentar cambiar o nome e gardar o arquivo de novo para ver os resultados actualizados.</p>
<p>💊 <strong>Importante:</strong> Manter Visual Studio Code e o explorador abertos para usalos na próxima unidade.</p>
<h2 id="codigo-completo" tabindex="-1"><a class="header-anchor" href="#codigo-completo" aria-hidden="true">#</a> Código completo</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// TODO: Add hello code</span>
        <span class="token keyword">function</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">'Hello, '</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">'...'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token string">'Ornella'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// TODO: Add setTimeout code</span>

    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="funcions-anonimas" tabindex="-1"><a class="header-anchor" href="#funcions-anonimas" aria-hidden="true">#</a> funcións anónimas</h1>
<p>Como ves, podes chamar a unha función a petición mediante o seu nome e pasando os parámetros axeitados. Pero, as veces, é imposible que queira permitir que outro proceso execute as funcións que creaches.</p>
<p>Imaxina a creación dunha páxina web con varios temporizadores. Cando finalice un temporizador, quererás executar código para mostrar unha mensaxe. O problema é que sabes que o temporizador expirará, pero, dado que a lonxitude do temporizador pode cambiar, non sabes exactamente <em>cando</em> expirará. Polo tanto, non sabes exactamente <em>cando</em> quere que se execute o código. Para admitir este tipo de escenario, podes usar unha <em>devolución de chamada</em>.</p>
<h2 id="introducion-as-devolucions-de-chamada" tabindex="-1"><a class="header-anchor" href="#introducion-as-devolucions-de-chamada" aria-hidden="true">#</a> Introdución ás devolucións de chamada</h2>
<p>Basicamente, unha devolución de chamada é unha maneira de pasar unha función a outra función como parámetro. Este parámetro se comporta da mesma maneira que calquera outro parámetro, como unha cadea ou un número, salvo que se pode chamar por el porque é unha función.</p>
<p>Imaxina que un amigo teu vai á tenda e che pide que lle traias dous xeados, e o que é máis importante, que llos traia antes de que se derretan.</p>
<p>Na programación, esta situación se pode representar mediante unha devolución de chamada. Décheslle a teu amigo un conxunto de instrucións (vai á tenda, pide xeados). A devolución de chamada aquí sería unha instrución adicional para traelos antes de que se derretan.</p>
<p>É posible que teñas seleccionado outro compoñente clave sobre o tempo de execución: sabe que o seu amigo completará a tarefa, pero non sabe necesariamente <em>cando</em>.</p>
<p>As devolucións de chamada se usan con frecuencia nunha variedade de marcos e librerías para indicar o código que desexas executar cando algo sucede ou finaliza. Usarás unha devolución de chamada para indicar o que debe ocorrer cando, por exemplo, un usuario selecciona un botón, finaliza unha operación de execución longa ou expira un temporizador.</p>
<h2 id="utilizacion-dunha-devolucion-de-chamada" tabindex="-1"><a class="header-anchor" href="#utilizacion-dunha-devolucion-de-chamada" aria-hidden="true">#</a> Utilización dunha devolución de chamada</h2>
<p>Unha devolución de chamada é unha función normal e podes creala como o farías con calquera función que teñas escrito no pasado. No exemplo <code v-pre>displayDone</code> seguinte, observarás que é unha función normal sen parámetros.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">displayDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Done!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Podes pasala a unha función, que acepta unha devolución de chamada como <code v-pre>setTimeout</code>. A devolución de chamada <code v-pre>setTimeout</code> é unha función integrada que permite crear un temporizador. Cando finaliza o temporizador, chama á función que se pasa como primeiro parámetro. O segundo parámetro indica o número de microsegundos que se esperarán ata que chame á función.</p>
<p>Se desexas establecer un tempo de espera de 3 segundos e facer que o código amose &quot;Listo&quot; ao rematar de executarse, poderías usar <code v-pre>setTimeout</code> da seguinte forma:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// timer value is in milliseconds</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span>displayDone<span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>?&gt;<strong>Importante</strong>: Observa que <code v-pre>displayDone</code> non vai seguido dun par vacío de parénteses (<code v-pre>()</code>) cando se pasa coma un parámetro a <code v-pre>setTimeout</code>. Se escribes <code v-pre>setTimeout(displayDone(), 3000)</code>, estás indicando a JavaScript que execute <code v-pre>displayDone</code> inmediatamente. Dado que desexas pasar a función a <code v-pre>setTimeout</code> para chamar <code v-pre>setTimeout</code> cando transcorra o temporizador, só se usa <code v-pre>displayDone</code>.</p>
<h2 id="funcions-anonimas-1" tabindex="-1"><a class="header-anchor" href="#funcions-anonimas-1" aria-hidden="true">#</a> funcións anónimas</h2>
<p>Inda que o código anterior é válido, este código pode crear o que algúns desenvolvedores chaman a &quot;contaminación do espazo de nomes&quot;. É dicir, cando escribes código con numerosas variables, funcións e outras entidades con nomes, pode resultar confuso coñecer o propósito de cada unha delas e, as veces, pode que te quedes sen nomes axeitados. Neste exemplo, se o único lugar <code v-pre>displayDone</code> que se usará é con <code v-pre>setTimeout</code>, non é necesario darlle un nome. Podes crear unha <em>función anónima</em>.</p>
<p>Unha función anónima é unha función sen nome. As funcións anónimas se comportan da mesma maneira que as funcións normais e son a forma en que os desenvolvedores normalmente establecen as devolucións de chamada.</p>
<p>Podes crear unha función anónima coa mesma sintaxe que usarías para crear unha función normal, salvo que se omite o nome. Por exemplo:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span>
    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// anonymous function</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Done!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token number">3000</span> <span class="token comment">// 3000 milliseconds (3 seconds)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Este código realiza exactamente a mesma tarefa que o código anterior coa función <code v-pre>displayDone</code>. A diferencia clave é que se crea a función inserida (é dicir, dentro da chamada a <code v-pre>setTimeout</code>), sen un nome. Ao facelo así, o código se limpa un pouco.</p>
<h2 id="funcions-de-frecha" tabindex="-1"><a class="header-anchor" href="#funcions-de-frecha" aria-hidden="true">#</a> funcións de frecha</h2>
<p>As funcións de <em>frecha</em> ou as de <em>frecha grosa</em>, son unha forma lixeiramente diferente de crear funcións anónimas. As funcións de frecha usan o operador <code v-pre>=&gt;</code> para indicar o inicio do corpo da función. Podes volver a escribir o exemplo de función anónima anterior mediante a sintaxe de frechas grosas:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// anonymous function</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Done!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token number">3000</span> <span class="token comment">// 3000 milliseconds (3 seconds)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Este código fai exactamente o mesmo que antes. A única diferencia é o uso do operador <code v-pre>=&gt;</code>. Verás que moitos desenvolvedores prefiren a sintaxe concisa que proporcionan as funcións de frecha.</p>
<h1 id="exercicio-creacion-dunha-funcion-anonima" tabindex="-1"><a class="header-anchor" href="#exercicio-creacion-dunha-funcion-anonima" aria-hidden="true">#</a> Exercicio: Creación dunha función anónima</h1>
<p>Neste exercicio usarás <code v-pre>setTimer</code> cunha función anónima para amosar unha mensaxe nunha páxina web. Crearás código que amosa a mensaxe despois dun retardo de 2 segundos.</p>
<p>Usarás o mesmo arquivo que usaches no exercicio anterior para completar este.</p>
<p>🚩 <strong>Nota</strong>: Pode atopar o código completo deste exemplo na parte inferior da páxina.</p>
<h2 id="agregar-o-codigo-para-amosar-a-mensaxe-1" tabindex="-1"><a class="header-anchor" href="#agregar-o-codigo-para-amosar-a-mensaxe-1" aria-hidden="true">#</a> Agregar o código para amosar a mensaxe</h2>
<p>Agora agregarás o código para amosar a mensaxe, que terá un retardo de 2 segundos.</p>
<ol>
<li>
<p>En Visual Studio Code, abre o arquivo <em>index.html</em>.</p>
</li>
<li>
<p>Debaixo da liña comentada <code v-pre>// TODO: Add setTimeout code</code>, agrega o código seguinte:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'...Hello again!'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token number">2000</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Garda o arquivo seleccionando <strong>Arquivo</strong> &gt; <strong>Gardar</strong>. LiveServer actualiza automaticamente a páxina ao gardar o arquivo.</p>
</li>
</ol>
<h2 id="visualizacion-da-paxina-1" tabindex="-1"><a class="header-anchor" href="#visualizacion-da-paxina-1" aria-hidden="true">#</a> Visualización da páxina</h2>
<p>Vexamos os resultados.</p>
<ol>
<li>
<p>Volve á xanela do explorador.</p>
<p>A mensaxe &quot;...Hello again!&quot; é posible que xa se amose, porque LiveServer xa terá actualizado a xanela.</p>
</li>
<li>
<p>Actualiza a xanela do explorador. Observa que se amosa a mensaxe orixinal e, despois de dous segundos, se substitúa por &quot;... Hello again!&quot;. &quot;Ola mundo&quot;.</p>
<figure><img src="https://docs.microsoft.com/es-es/learn/modules/web-development-101-functions/media/hello-again.png" alt="Captura de pantalla del explorador, en la que se muestra el mensaje ... ¡Hola de nuevo!." tabindex="0" loading="lazy"><figcaption>Captura de pantalla del explorador, en la que se muestra el mensaje &quot;... ¡Hola de nuevo!&quot;.</figcaption></figure>
</li>
</ol>
<p>Agora xa usaches unha función anónima para que apareza unha mensaxe despois dun retardo.</p>
<h2 id="codigo-completo-1" tabindex="-1"><a class="header-anchor" href="#codigo-completo-1" aria-hidden="true">#</a> Código completo</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// TODO: Add hello code</span>
        <span class="token keyword">function</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">'Hello, '</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">'...'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token string">'Ornella'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// TODO: Add setTimeout code</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'...Hello again!'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token number">2000</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="resumo" tabindex="-1"><a class="header-anchor" href="#resumo" aria-hidden="true">#</a> Resumo</h1>
<p>Ata agora exploraches como crear funcións en JavaScript. <strong>Unha función é unha abstracción</strong> excelente que se pode usar cando se necesita realizar a mesma tarefa varias veces e se quere evitar ter que duplicar o código. Tamén aprendiches a diferenza entre unha función e un método. Estes dous tipos son funcións, pero unha función está flotando libre e un método se asenta nun obxecto.</p>
<p>Despois, exploraches parámetros e variables como elementos importantes que lle permiten ás funcións traballar con datos.</p>
<p>Seguidamente, aprendiches sobre as variables de devolución. Un valor devolto son os datos que abandonan a función. Calquera invocador dunha función pode aproveitar o valor devolto ao asignalo a unha variable.</p>
<p>Por último, aprendiches sobre as funcións anónimas. Unha función anónima non ten un nome, pero é unha función que se pode pasar. Se usa normalmente nun contexto onde é necesario realizar unha tarefa que é asincrónica e finalizará nalgún momento no futuro. Os exemplos poden ser un tempo de espera ou a captura de datos a través da rede. Unha vez que finaliza a tarefa, se invoca a función anónima.</p>
<hr>
<h1 id="toma-de-decisions-con-javascript" tabindex="-1"><a class="header-anchor" href="#toma-de-decisions-con-javascript" aria-hidden="true">#</a> Toma de decisións con JavaScript</h1>
<p>Nesta lección, se tratan os conceptos básicos da toma de decisións <code v-pre>if/else</code> de JavaScript. Aprenderás como comparar variables e o uso de valores booleanos, e o uso de instrucións <code v-pre>if/else</code>  te permiten tomar decisións no código.</p>
<h2 id="obxectivos-de-aprendizaxe-1" tabindex="-1"><a class="header-anchor" href="#obxectivos-de-aprendizaxe-1" aria-hidden="true">#</a> Obxectivos de aprendizaxe</h2>
<p>Agora, imos a:</p>
<ul>
<li>Revisar os valores booleanos.</li>
<li>Aprender sobre os operadores de comparación.</li>
<li>Explorar como se usan <code v-pre>if </code> e  <code v-pre>else</code> en JavaScript.</li>
<li>Descubrir como formar condiciones e tomar decisións con operadores lóxicos.</li>
</ul>
<h1 id="introducion-1" tabindex="-1"><a class="header-anchor" href="#introducion-1" aria-hidden="true">#</a> Introdución</h1>
<p>Algúns programas que se escriben se executan de arriba a abaixo. A miúdo, terás aplicacións cuxas rutas no código están determinadas polas diferentes condicións que configures.</p>
<p>Supoñamos que tes un programa para crear un arquivo de copia de seguridade de todos os arquivos dun directorio. Se o arquivo de copia de seguridade xa existe, non desexarás volver a crealo porque podería levar moito tempo. Este escenario é un exemplo no que se desexa poder expresar a lóxica condicional para que o código se execute de forma diferente en función de si se cumpre unha condición ou non.</p>
<p>Imos agora a traballar cos diferentes operadores que podes usar para expresar lóxica para crear varias rutas nos programas.</p>
<h2 id="obxectivos-da-aprendizaxe" tabindex="-1"><a class="header-anchor" href="#obxectivos-da-aprendizaxe" aria-hidden="true">#</a> Obxectivos da aprendizaxe</h2>
<p>En este módulo, aprenderá a:</p>
<ul>
<li>Revisar los valores booleanos.</li>
<li>Aprender sobre los operadores de comparación.</li>
<li>Explorar como se usan <code v-pre>if</code> e <code v-pre>else</code> en JavaScript.</li>
<li>Descubrir como formar condicións e tomar decisións con operadores lóxicos.</li>
</ul>
<h1 id="operadores-loxicos" tabindex="-1"><a class="header-anchor" href="#operadores-loxicos" aria-hidden="true">#</a> Operadores lóxicos</h1>
<p>As decisións poden requirir máis dunha comparación e se poden combinar con operadores lóxicos para xerar un valor booleano.</p>
<h2 id="operadores-loxicos-e-valores-booleanos" tabindex="-1"><a class="header-anchor" href="#operadores-loxicos-e-valores-booleanos" aria-hidden="true">#</a> Operadores lóxicos e valores booleanos</h2>
<p>Hai operadores específicos que nos permiten conectar varias instrucións booleanas. O resultado é unha instrución máis complexa que en calquera caso se avalía como <code v-pre>true</code> ou <code v-pre>false</code>. Pode usar o seguinte conxunto de operadores para construír estas comparacións máis complexas:</p>
<table>
<thead>
<tr>
<th style="text-align:left">Símbolo</th>
<th style="text-align:left">Descrición</th>
<th style="text-align:left">Exemplo</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>&amp;&amp;</code></td>
<td style="text-align:left"><strong>AND lóxico</strong>: compara dúas expresións booleanas. Devolve true <em>só</em> si ambos lados son verdadeiros - true.</td>
<td style="text-align:left"><code v-pre>(5 &gt; 6) &amp;&amp; (5 &lt; 6 ) //One side is false, other is true. Returns false</code></td>
</tr>
<tr>
<td style="text-align:left">`</td>
<td style="text-align:left"></td>
<td style="text-align:left">`</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>!</code></td>
<td style="text-align:left"><strong>NOT lóxico</strong>: devolve o valor oposto dunha expresión booleana.</td>
<td style="text-align:left"><code v-pre>!(5 &gt; 6) // 5 is not greater than 6, but &quot;!&quot; will return true</code></td>
</tr>
</tbody>
</table>
<h2 id="condicions-e-decisions-con-operadores-loxicos" tabindex="-1"><a class="header-anchor" href="#condicions-e-decisions-con-operadores-loxicos" aria-hidden="true">#</a> Condicións e decisións con operadores lóxicos</h2>
<p>Podes usar estes operadores complexos con ambas asignacións, pero tamén coas cláusulas <code v-pre>if</code> e <code v-pre>else</code>.</p>
<h3 id="nas-asignacions" tabindex="-1"><a class="header-anchor" href="#nas-asignacions" aria-hidden="true">#</a> Nas asignacións</h3>
<p>Como parte da asignación dun valor a unha variable, podes usar un operador OR (<code v-pre>||</code>).</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> isHoliday <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> isMember <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hasDiscount <span class="token operator">=</span> isHoliday <span class="token operator">||</span> isMember<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Co código anterior, se expresa se un cliente pode ter un desconto ou non. Só é necesario que unha das variables, <code v-pre>isMember</code> ou <code v-pre>hasDiscount</code>, teña un valor verdadeiro para que se asigne <code v-pre>true</code> á variable <code v-pre>hasDiscount</code>.</p>
<h3 id="en-if-else" tabindex="-1"><a class="header-anchor" href="#en-if-else" aria-hidden="true">#</a> En <code v-pre>if...else</code></h3>
<p>Tamén podes usar este tipo de operador lóxico nunha instrucción <code v-pre>if/else</code>. No exemplo de código que segue, dáse unha situación na que hai dous portátiles, un con desconto e outro vendido a prezo completo. Mediante o uso dun operador <code v-pre>||</code>, podes construír unha cláusula <code v-pre>if</code> de aspecto máis complexo.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> currentMoney<span class="token operator">=</span> <span class="token number">800</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> laptopPrice <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> laptopDiscountPrice <span class="token operator">=</span> laptopPrice <span class="token operator">-</span> <span class="token punctuation">(</span>laptopPrice <span class="token operator">*</span> <span class="token number">.20</span><span class="token punctuation">)</span> <span class="token comment">//Laptop price at 20 percent off</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>currentMoney <span class="token operator">>=</span> laptopPrice <span class="token operator">||</span> currentMoney <span class="token operator">>=</span> laptopDiscountPrice<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//Condition was true. Code in this block will run.</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Getting a new laptop!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">//Condition was true. Code in this block will run.</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Can't afford a new laptop, yet!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✏️ <em><strong>Suxestión</strong></em>: Lembras que falamos sobre aprender a ler código? Que nos di o código? Vas poder obter un equipo portátil novo? Podes probar o código por exemplo en <a href="https://jsbin.com" target="_blank" rel="noopener noreferrer">JSBin<ExternalLinkIcon/></a> e ver o resultado.</p>
<h2 id="operador-de-negacion" tabindex="-1"><a class="header-anchor" href="#operador-de-negacion" aria-hidden="true">#</a> Operador de negación</h2>
<p>Acabas de ver como se pode usar unha instrucción <code v-pre>if...else</code> para crear lóxica condicional. Todo o que vai a unha instrucción <code v-pre>if</code> se debe avaliar como <code v-pre>true</code> ou <code v-pre>false</code>. Mediante o operador <code v-pre>!</code>, podes <em>negar</em> a expresión. E terías algo similar ao que segue:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// runs if condition is false</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// runs if condition is true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="expresions-ternarias" tabindex="-1"><a class="header-anchor" href="#expresions-ternarias" aria-hidden="true">#</a> Expresións ternarias</h2>
<p>O uso de <code v-pre>if...else</code> non é a única maneira de expresar a lóxica de decisión. Tamén podes usar algo chamado operador <em>ternario</em>. A sintaxe ten un aspecto similar ao seguinte:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> variable <span class="token operator">=</span> condition <span class="token operator">?</span> <span class="token operator">&lt;</span><span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token keyword">if</span> <span class="token boolean">true</span><span class="token operator">></span> <span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token keyword">if</span> <span class="token boolean">false</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Este é un exemplo máis tanxible.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> firstNumber <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> secondNumber <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">let</span> biggestNumber <span class="token operator">=</span> firstNumber <span class="token operator">></span> secondNumber <span class="token operator">?</span> firstNumber<span class="token operator">:</span> secondNumber<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>O código indica que, ou se lee como:</p>
<p><em>Si <code v-pre>firstNumber</code> é maior que <code v-pre>secondNumber</code>, se asigna <code v-pre>firstNumber</code> a <code v-pre>biggestNumber</code>; do contrario, se asigna <code v-pre>secondNumber</code>.</em></p>
<p>✏️ <em><strong>Suxestión</strong></em>: Tómate un minuto para ler este código unhas veces. Comprendes como funcionan estes operadores?</p>
<p>A expresión ternaria é unha forma compacta de escribir o seguinte código:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> biggestNumber<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>firstNumber <span class="token operator">></span> secondNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  biggestNumber <span class="token operator">=</span> firstNumber<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  biggestNumber <span class="token operator">=</span> secondNumber<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✏️ <em><strong>Suxestión</strong></em>: Tómate un momento para reflexionar. Cal dos dous enfoques, expresións ternarias ou <code v-pre>if/else</code>, foi más fácil de entender?</p>
<h1 id="proba-con-if-else" tabindex="-1"><a class="header-anchor" href="#proba-con-if-else" aria-hidden="true">#</a> Proba con: If...else</h1>
<p>Para completar este módulo, podes seguir a lección en <a href="https://docs.microsoft.com/es-es/learn/modules/web-development-101-variables/" target="_blank" rel="noopener noreferrer">Microsoft Learn<ExternalLinkIcon/></a>. Desde aí podes activar un espazo illado en Azure para completar o exercicio. Un <a href="https://docs.microsoft.com/en-us/learn/support/faq?pivots=sandbox" target="_blank" rel="noopener noreferrer">espazo illado<ExternalLinkIcon/></a> dáche acceso a recursos gratuítos. A subscrición persoal non se che cobrará. O espazo illado só se pode usar para realizar os cursos de Microsoft Learn.</p>
<p>🥕 Parabéns!</p>
<h1 id="matrices-e-bucles-de-javascript" tabindex="-1"><a class="header-anchor" href="#matrices-e-bucles-de-javascript" aria-hidden="true">#</a> Matrices e bucles de JavaScript</h1>
<p>Aprende a manipular e almacenar datos en JavaScript.</p>
<h2 id="obxectivos-da-aprendizaxe-1" tabindex="-1"><a class="header-anchor" href="#obxectivos-da-aprendizaxe-1" aria-hidden="true">#</a> Obxectivos da aprendizaxe</h2>
<p>Vexamos agora:</p>
<ul>
<li>Que son as matrices e para que se usan.</li>
<li>Como usar bucles para traballar con matrices.</li>
<li>Como aplicar operacións de matriz.</li>
</ul>
<h1 id="introducion-2" tabindex="-1"><a class="header-anchor" href="#introducion-2" aria-hidden="true">#</a> Introdución</h1>
<p>JavaScript é unha das principais tecnoloxías da World Wide Web. Os desenvolvedores o usan para crear contido interactivo en sitios web.</p>
<p>Dado que JavaScript é unha linguaxe de guión - <em>scripting</em>- do lado cliente, permite aos usuarios executar código nos seus dispositivos.</p>
<p>Imaxina ter que volver a cargar unha páxina web cada vez que cambias a información no dispositivo, non poder comprobar se os datos teñen o formato correcto antes de enviar un formulario ou non poder mover un obxecto de forma interactiva nunha pantalla. Sen JavaScript, estas tarefas serían imposibles na maioría dos sitios web.</p>
<p>Nesta sección obterás información do formato estrutural e os usos das matrices en JavaScript, e de como os bucles poden axudarche con tarefas repetitivas que implican aos datos de ditas matrices.</p>
<h2 id="obxectivos-da-aprendizaxe-2" tabindex="-1"><a class="header-anchor" href="#obxectivos-da-aprendizaxe-2" aria-hidden="true">#</a> Obxectivos da aprendizaxe</h2>
<p>Imos coñecer:</p>
<ul>
<li>Que son as matrices e para que se usan.</li>
<li>Como usar bucles para traballar con matrices.</li>
<li>Como aplicar operacións de matriz.</li>
</ul>
<h1 id="manipulacion-de-matrices" tabindex="-1"><a class="header-anchor" href="#manipulacion-de-matrices" aria-hidden="true">#</a> Manipulación de matrices</h1>
<p>Para que os datos e información dos teus sitios web sexan interactivos, debes poder manipular e almacenar os datos no código. Por sorte, en JavaScript se poden almacenar varios elementos nunha <em>matriz</em>. O uso de matrices axudarache, entre outras cousas, a non ter que declarar moitas variables.</p>
<h2 id="acerca-das-matrices" tabindex="-1"><a class="header-anchor" href="#acerca-das-matrices" aria-hidden="true">#</a> Acerca das matrices</h2>
<p>Unha matriz é un tipo de estrutura de datos que conten máis dun elemento. Imaxina un pedido de compra que conten varios artigos ou unha xeadería onde podes elixir entre varios sabores. En vez de almacenar, por exemplo, oito sabores diferentes de xeado como oito variables diferentes, podes usar unha soa matriz para almacenar toda esa información, como se ve a continuación:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> iceCreamFlavors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Chocolate"</span><span class="token punctuation">,</span> <span class="token string">"Strawberry"</span><span class="token punctuation">,</span> <span class="token string">"Vanilla"</span><span class="token punctuation">,</span> <span class="token string">"Pistachio"</span><span class="token punctuation">,</span> <span class="token string">"Neapolitan"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Neste código, ao encerrar todo o contido entre corchetes (<code v-pre>[]</code>), se esta a declarar unha matriz.</p>
<h3 id="acceso-a-un-elemento" tabindex="-1"><a class="header-anchor" href="#acceso-a-un-elemento" aria-hidden="true">#</a> Acceso a un elemento</h3>
<p>O contido dunha matriz se soe coñecer como <em>elemento</em>. A miúdo se necesita acceder a un elemento específico para ler o valor, actualizalo ou quitalo incluso. Para acceder a un elemento específico, se usan corchetes máis a posición que interesa. Mira de que forma:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>array<span class="token punctuation">[</span><span class="token operator">&lt;</span>number<span class="token operator">></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>O primeiro elemento dunha matriz comenza por 0 e o último elemento é a lonxitude da matriz (número de elementos) menos 1. É dicir, se unha matriz ten tres elementos, 0 sería a primeira posición e 2 a súa última posición. Unha posición dunha matriz se coñece coma o seu <em>índice</em>. Se observas a matriz <code v-pre>iceCreamFlavors</code>, supoñamos que queres <strong>Pistacho</strong>. Para ler ese valor, podes escribir o código seguinte:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>iceCreamFlavors<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">// Pistachio</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cambiar-un-valor" tabindex="-1"><a class="header-anchor" href="#cambiar-un-valor" aria-hidden="true">#</a> Cambiar un valor</h3>
<p>Para cambiar un valor nunha matriz, debes seleccionar o índice do elemento e asignarlle un novo valor mediante o operador de asignación de signo igual (<code v-pre>=</code>) e un valor á dereita do operador. A xeadería quedou sen &quot;Napolitano&quot;, pero non te preocupes, atopaches &quot;xeado de noz&quot;:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>iceCreamFlavors<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Butter Pecan"</span><span class="token punctuation">;</span> <span class="token comment">//Changes "Neapolitan" to "Butter Pecan"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="engade-mais-valores" tabindex="-1"><a class="header-anchor" href="#engade-mais-valores" aria-hidden="true">#</a> Engade máis valores</h3>
<p>O negocio de xeados medra e queres ofrecer máis sabores. Que pode facer? Podes usar o método <code v-pre>push()</code> para agregar máis sabores. O método <code v-pre>push()</code> toma un elemento como entrada e agrega o elemento á matriz orixinal. Por exemplo, para agregar &quot;Menta con chocolate&quot; como sabor, usarías o seguinte código:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>iceCreamFlavors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"Mint Chip"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="uso-da-lonxitude-da-matriz" tabindex="-1"><a class="header-anchor" href="#uso-da-lonxitude-da-matriz" aria-hidden="true">#</a> Uso da lonxitude da matriz</h3>
<p>Supón que alguén che pregunta, cantos sabores de xeado tes? Botas unha ollada ao almacén e todo o que ves é un mar de sabores que vas tardar moito tempo en contar. Pero, un momento, na matriz, existe o campo <code v-pre>length</code> que se pode usar para contar todos os sabores:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>iceCreamFlavors<span class="token punctuation">.</span>length <span class="token comment">// 6 flavors, because you recently added "Mint Chip"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>✏️ <em><strong>Suxestión:</strong></em> Usa a consola do explorador para crear e manipular unha matriz da túa propia creación. Lembra que podes escribir código JavaScript directamente no explorador. Para facelo, abre unha xanela do navegador e diríxase a &quot;Herramientas de desarrollo&quot;. Na consola, atoparás unha solicitude <code v-pre>&gt;</code>. Experimenta coa manipulación dunha matriz con índices e propiedades como a que acabamos de ver.</p>
<h3 id="quitar-un-valor" tabindex="-1"><a class="header-anchor" href="#quitar-un-valor" aria-hidden="true">#</a> Quitar un valor</h3>
<p>Para quitar un valor dunha matriz, podes usar <code v-pre>delete</code>. Supón que quedaches sen o sabor de &quot;Menta con chocolate&quot;. O envase segue aí, pero xa non queda xeado de &quot;Menta con chocolate&quot;. O código ten este aspecto:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> iceCreamFlavors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Chocolate"</span><span class="token punctuation">,</span> <span class="token string">"Strawberry"</span><span class="token punctuation">,</span> <span class="token string">"Vanilla"</span><span class="token punctuation">,</span> <span class="token string">"Pistachio"</span><span class="token punctuation">,</span> <span class="token string">"Neapolitan"</span><span class="token punctuation">,</span> <span class="token string">"Mint Chip"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">delete</span> iceCreamFlavors<span class="token punctuation">[</span>iceCreamFlavors<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iceCreamFlavors<span class="token punctuation">[</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tódolos elementos seguen aí, pero o envase, onde estaba o xeado de &quot;Menta con chocolate&quot;, está baleiro. Agora podes asignarlle outro sabor, cal?</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>iceCreamFlavor<span class="token punctuation">[</span>iceCreamFlavor<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"your choice"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="quitar-un-elemento" tabindex="-1"><a class="header-anchor" href="#quitar-un-elemento" aria-hidden="true">#</a> Quitar un elemento</h3>
<p>As veces, non basta con quitar o valor. Debes quitar o envase tamén. É posible que non tenas suficiente espazo na casa? Decides comerte todo o xeado de &quot;vainilla&quot; (probablemente haste de arrepentir) e tiras o envase. Para esa operación, usarás o método de matrices <code v-pre>splice()</code>. Toma unha posición e indica os elementos que hay que quitar, como se ve neste código:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>array<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>position index<span class="token punctuation">,</span> <span class="token operator">&lt;</span>number <span class="token keyword">of</span> elements to remove<span class="token operator">></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Para quitar un elemento (comerse todo o xeado de &quot;vainilla&quot; e tirar o envase), usa o método <code v-pre>splice()</code>, da seguinte forma:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>iceCreamFlavor<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
iceCreamFlavor <span class="token comment">// [ 'Chocolate', 'Strawberry', 'Pistachio', 'Neapolitan', 'Mint Chip' ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="recorrer-en-iteracion-os-elementos-dunha-matriz-mediante-bucles" tabindex="-1"><a class="header-anchor" href="#recorrer-en-iteracion-os-elementos-dunha-matriz-mediante-bucles" aria-hidden="true">#</a> Recorrer en iteración os elementos dunha matriz mediante bucles</h1>
<p>Tes unha matriz, e agora que? Podes usar <em>bucles</em> para levar a cabo iteracións con cada elemento da mesma. Podes realizar operacións como imprimir cada elemento, sumalo ou buscar elementos específicos dada unha condición.</p>
<h2 id="acerca-dos-bucles" tabindex="-1"><a class="header-anchor" href="#acerca-dos-bucles" aria-hidden="true">#</a> Acerca dos bucles</h2>
<p>Os bucles permiten tarefas repetitivas o <em>iterativas</em>, e poden aforrarche moito tempo e código. Unha iteración pode variar nas súas variables, valores e condicións. Hai diferentes tipos de bucles en JavaScript, cada un ten pequenas diferencias. Pero todos fan basicamente o mesmo: executan un bucle nos datos.</p>
<h3 id="bucles-for" tabindex="-1"><a class="header-anchor" href="#bucles-for" aria-hidden="true">#</a> Bucles <code v-pre>For</code></h3>
<p>Un bucle <code v-pre>for</code> requiere tres partes para iterar:</p>
<ul>
<li>
<p><strong>Contador</strong>: variable que normalmente se inicializa cun número que conta o número de iteracións. Este é un exemplo:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></li>
</ul>
<p>let i = 0;</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
Normalmente, este valor úsase como a primeira posición á que se quere acceder nunha matriz.

- **Condición**: expresión que usa operadores de comparación para facer que o bucle se deteña cando `true`. Este é un exemplo dunha condición que se detén cando a matriz no ten índices:

```javascript
i &lt; 10;   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Neste exemplo, a expresión será <code v-pre>false</code> cando <code v-pre>i</code> sexa igual a <code v-pre>array.length</code>. Se se está recorrendo en bucle unha matriz, este é o resultado correcto. Non se recomenda abordar un índice fora dos límites da matriz.</p>
<ul>
<li>
<p><strong>Expresión de incremento</strong>: expresión que se executa ao final de cada iteración, normalmente para cambiar o valor do contador. Podes incrementar tanto como queiras por cada iteración, pero é habitual aumentar de unha en una, como se mostra neste exemplo:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>i<span class="token operator">++</span><span class="token punctuation">;</span>
i <span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// this would work too and increases by 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>Cando as tres partes se usan xuntas, un bucle <code v-pre>for</code> pode ter este aspecto:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✏️ <em><strong>Suxestión:</strong></em> Executa este código nunha consola do explorador. Que ocorre cando se fan pequenos cambios no contador, condición ou expresión de incremento? Podes facer que se execute cara atrás e crear unha conta regresiva?</p>
<h3 id="bucles-while" tabindex="-1"><a class="header-anchor" href="#bucles-while" aria-hidden="true">#</a> Bucles <code v-pre>While</code></h3>
<p>A diferencia do bucle <code v-pre>for</code>, un bucle <code v-pre>while</code> require unha condición que deterá o bucle só cando a expresión do bucle <code v-pre>while</code> se avalíe coma <code v-pre>true</code>.</p>
<p>As condiciones dos bucles soen basearse noutros valores, coma os contadores, e deben administrarse durante o bucle.</p>
<p>Os valores iniciais dos contadores deben crearse fora do bucle e calquera expresión que cumpra unha condición, incluído o cambio do contador, debe manterse dentro do bucle. No exemplo seguinte, o bucle <code v-pre>while</code> se executa para 10 iteracións.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//Counting up to 10</span>
<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
 i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚩 <strong>Nota</strong>: Por que elixir un bucle <code v-pre>for</code> ou un bucle <code v-pre>while</code>? En StackOverflow, <a href="https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript/" target="_blank" rel="noopener noreferrer">17 000 espectadores se facían a mesma pregunta<ExternalLinkIcon/></a>, pode que che interesen algunhas das opinións.</p>
<p>As matrices sóense usar con bucles porque a maioría das condicións requiren a lonxitude da matriz para deter o bucle e o índice tamén pode ser o valor do contador.</p>
<h2 id="bucles-e-matrices" tabindex="-1"><a class="header-anchor" href="#bucles-e-matrices" aria-hidden="true">#</a> Bucles e matrices</h2>
<p>Volvamos á lista de sabores de xeado. Un cliente pide o nome de todos os sabores antes de decidir cal comprar. Por sorte, coñécelos bucles <code v-pre>for</code>, así que usa un. Lembra que definiches unha condición sobre cando terminar a lista, da seguinte forma:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>i <span class="token operator">&lt;</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A matriz de sabores de xeado ten unha lonxitude arbitraria, o que significa que pode quitar o agregar elementos en calquera momento. Sabes que tes seis tipos de xeado, pero tamén podes usar o operador <code v-pre>length</code> na matriz, podes fiarse de el:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> iceCreamFlavors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Chocolate"</span><span class="token punctuation">,</span> <span class="token string">"Strawberry"</span><span class="token punctuation">,</span> <span class="token string">"Vanilla"</span><span class="token punctuation">,</span> <span class="token string">"Pistachio"</span><span class="token punctuation">,</span> <span class="token string">"Neapolitan"</span><span class="token punctuation">,</span> <span class="token string">"Mint Chip"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> iceCreamFlavors<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iceCreamFlavors<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">// Ends when all flavors are printed</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Aí está. Ha enumerado todos los sabores y el cliente ha elegido &quot;Vainilla&quot;. ¿Qué sabor elegiría?</p>
<h2 id="o-bucle-foreach" tabindex="-1"><a class="header-anchor" href="#o-bucle-foreach" aria-hidden="true">#</a> O bucle <code v-pre>forEach()</code></h2>
<p>Ata agora, coñeces os bucles <code v-pre>for</code> e <code v-pre>while</code>. Hai outro bucle na propia matriz chamado <code v-pre>forEach()</code>. O bucle <code v-pre>forEach()</code> percorre os elementos na iteración e ofrece unha maneira simplificada de crear bucle, xa que non necesita un contador se o único que queres facer é crear bucle. Por exemplo:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">number</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 2 3 4 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ademais, se queres acceder ao índice actual, tamén podes facelo cambiando lixeiramente o código anterior:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Number </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="que-construccion-de-bucle-usar-e-cando" tabindex="-1"><a class="header-anchor" href="#que-construccion-de-bucle-usar-e-cando" aria-hidden="true">#</a> Que construcción de bucle usar e cando</h3>
<p>Os bucles <code v-pre>for</code> e <code v-pre>forEach()</code> permiten recorrer en bucle os elementos da matriz, pero a diferencia entre eles é que o bucle <code v-pre>for</code>  permíteche saír se se cumpre unha condición determinada.</p>
<p>Observa o código seguinte:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Agregar <code v-pre>break</code> fai que o bucle se deteña nun elemento negativo. O bucle <code v-pre>forEach()</code> non pode facer iso.</p>
<p>✏️ <em><strong>Suxestión</strong></em>: Experimenta con bucles nunha matriz propia na consola do explorador. Se queres un desafío, hai outras maneiras de percorrer en bucle matrices que non sexan os bucles <code v-pre>for</code> e <code v-pre>while</code>. Hai bucles <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank" rel="noopener noreferrer"><code v-pre>forEach</code><ExternalLinkIcon/></a>, <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of/" target="_blank" rel="noopener noreferrer"><code v-pre>for-of</code><ExternalLinkIcon/></a> e <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map/" target="_blank" rel="noopener noreferrer"><code v-pre>map</code><ExternalLinkIcon/></a>. Proba a reescribir o bucle de matriz mediante unha destas técnicas.</p>
<h1 id="uso-de-operacions-para-consultar-matrices" tabindex="-1"><a class="header-anchor" href="#uso-de-operacions-para-consultar-matrices" aria-hidden="true">#</a> Uso de operacións para consultar matrices</h1>
<p>Xa tes moita información, inda así, as matrices son moito máis complexas que simplemente iterar por elas ou quitar e agregar elementos. Tamén podes consultalas ou realizar operacións en elas.</p>
<h2 id="filtrado" tabindex="-1"><a class="header-anchor" href="#filtrado" aria-hidden="true">#</a> Filtrado</h2>
<p>Podes realizar moitas operacións útiles nunha matriz. Buscar e filtrar aquilo que necesitas son operacións que é probable que realices con frecuencia.</p>
<h3 id="buscar-un-elemento-mediante-find" tabindex="-1"><a class="header-anchor" href="#buscar-un-elemento-mediante-find" aria-hidden="true">#</a> Buscar un elemento mediante <code v-pre>find()</code></h3>
<p>Imaxina que alguén che pregunta, tes xeado de &quot;Chocolate&quot;? e, se o tes, posme un? E neste punto, podes usar o método <code v-pre>find()</code> na matriz, como se mostra aquí:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> iceCreamFlavors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Chocolate"</span><span class="token punctuation">,</span> <span class="token string">"Strawberry"</span><span class="token punctuation">,</span> <span class="token string">"Vanilla"</span><span class="token punctuation">,</span> <span class="token string">"Pistachio"</span><span class="token punctuation">,</span> <span class="token string">"Neapolitan"</span><span class="token punctuation">,</span> <span class="token string">"Mint Chip"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
iceCreamFlavors<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">flavor</span> <span class="token operator">=></span> flavor <span class="token operator">===</span> <span class="token string">"Chocolate"</span><span class="token punctuation">)</span> <span class="token comment">// "Chocolate"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>A operación <code v-pre>find()</code> executa a función que proporcionaches como entrada para cada elemento. Se a operación atopa o elemento que se busca, devolve o elemento. Se non atopa o elemento, devolve <code v-pre>undefined</code>.</p>
<h3 id="filtrar-elementos-cunha-propiedade-comun-mediante-filter" tabindex="-1"><a class="header-anchor" href="#filtrar-elementos-cunha-propiedade-comun-mediante-filter" aria-hidden="true">#</a> Filtrar elementos cunha propiedade común mediante <code v-pre>filter()</code></h3>
<p>Que ocorre se o cliente di: quero un xeado que <em>conteña</em> &quot;Chocolate&quot;, que tes? Debes reordenar un pouco a xeadería e empezar a organizala por categorías. A consulta deste cliente debe devolver &quot;Chocolate&quot;, &quot;Napolitano&quot; e &quot;Menta con chocolate&quot; como sabores que conteñen &quot;Chocolate&quot;. Tendo isto en conta, opta por almacenar a matriz da seguinte maneira:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> iceCreamFlavors <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Chocolate"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Chocolate"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Strawberry"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"fruit"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Vanilla"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Vanilla"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Pistachio"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Nuts"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Neapolitan"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Chocolate"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Mint Chip"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Chocolate"</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Xa reorganizáchela oferta. O cliente pide un xeado que conteña chocolate e parece que quere unha bola de cada un dos tres sabores devoltos pola consulta. O mellor método para usar neste caso é a operación <code v-pre>filter()</code>. Toma unha expresión de filtro (unha función) e devolve calquera elemento que coincida coa expresión. Para axudarlle ao cliente a atopar o que quere, usa o seguinte código:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>iceCreamFlavors<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">flavor</span> <span class="token operator">=></span> flavor<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">"Chocolate"</span><span class="token punctuation">)</span> <span class="token comment">// [{ name: "Chocolate", type: "Chocolate" }, { name: "Neapolitan", type: "Chocolate"}, { name: "Mint Chip", type: "Chocolate"}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="comprobacion-dunha-condicion-mediante-some" tabindex="-1"><a class="header-anchor" href="#comprobacion-dunha-condicion-mediante-some" aria-hidden="true">#</a> Comprobación dunha condición mediante <code v-pre>some()</code></h3>
<p>Un dos clientes é alérxico ás &quot;Noces&quot; e primeiro quere saber sa algún dos xeados contén &quot;Noces&quot;. Comproba o inventario mediante o método <code v-pre>some()</code>. O método usa unha función que comproba se alo menos un elemento cumpre unha condición.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>iceCreamFlavors<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">flavor</span> <span class="token operator">=></span> flavor<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">"Nuts"</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Dado que o xeado de &quot;Pistacho&quot; contén noces, o método <code v-pre>some()</code> devolve <em>true</em>. Agora, o cliente quere saber que sabores <em>pode</em> escoller, o que te leva a executar este código:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>iceCreamFlavors<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">flavor</span> <span class="token operator">=></span> flavor<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">"Nuts"</span><span class="token punctuation">)</span> <span class="token comment">// returns everything except for Pistachio.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="asignacion-de-proxeccions" tabindex="-1"><a class="header-anchor" href="#asignacion-de-proxeccions" aria-hidden="true">#</a> Asignación de proxeccións</h2>
<p>Unha proxección é intentar cambiar a matriz de algunha maneira. Imaxina, por exemplo, que toma a matriz orixinal <code v-pre>iceCreamFlavor</code> e desexas agregar unha propiedade <code v-pre>price</code> a cada sabor. Esta situación é axeitada para un método de proxección chamado <code v-pre>map()</code>. Imaxínate que fai bo día e decides que cada bola de xeado que vendes debe valer 1€. Escribes o código para que isto aconteza. Algún código como o que se mostra a continuación:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> iceCreamFlavors <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Chocolate"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Chocolate"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Strawberry"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"fruit"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Vanilla"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Vanilla"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Pistachio"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Nuts"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Neapolitan"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Chocolate"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Mint Chip"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Chocolate"</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
iceCreamFlavors<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">flavor</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  flavor<span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> flavor<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// every item now has a new property price: 1 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>O código pasa por cada elemento da lista, adxunta a propiedade <code v-pre>price</code>, proporciónalle o valor <code v-pre>1</code> e, a continuación, devolve o elemento.</p>
<h2 id="agregacions" tabindex="-1"><a class="header-anchor" href="#agregacions" aria-hidden="true">#</a> Agregacións</h2>
<p>O negocio funciona. Hoxe fai máis sol e vendiches moitos xeados. Os recibos da caixa están almacenados nunha longa matriz, que se parece ao seguinte código:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> sales <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
 <span class="token literal-property property">date</span> <span class="token operator">:</span> <span class="token string">'2021-05-01'</span><span class="token punctuation">,</span>
 <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
 <span class="token literal-property property">date</span> <span class="token operator">:</span> <span class="token string">'2021-05-01'</span><span class="token punctuation">,</span>
 <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token comment">// and so on...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Poderías usar un bucle <code v-pre>for</code> para sumalo todo, da seguinte maneira:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span> <span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> sales<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sum <span class="token operator">+=</span> sales<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>amount<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Este código funciona, pero hai unha estratexia máis elegante: é dicir, o método <code v-pre>reduce()</code>. O obxectivo deste método é <em>reducir</em> unha lista larga a un só elemento, que podería ser un obxecto ou un número, por exemplo. Para usar <code v-pre>reduce(),</code> debes proporcionarlle unha función que tome dous parámetros: un valor acumulado e o valor actual do bucle.</p>
<p>Dentro da función, debes volver a calcular o valor acumulado mediante o valor actual. O segundo argumento de <code v-pre>reduce()</code> é o valor de inicio. Dado que neste caso queres usar <code v-pre>reduce()</code> para calcular as ventas, a función debe actualizar o valor acumulado co valor do que hai na propiedade <code v-pre>amount</code> para cada elemento. O valor inicial debe ser <code v-pre>0</code>. Con isto en mente, o aspecto do código é o seguinte:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>sales<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> curr</span><span class="token punctuation">)</span> <span class="token operator">=></span> acc <span class="token operator">+</span> curr<span class="token punctuation">.</span>amount<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Como podes ver, non se necesita unha variable <code v-pre>sum</code>. Pode que tardes un pouco en acostumarte a esta estratexia, pero é eficaz e pódese usar en moitas situacións.</p>
<blockquote>
<p>Probas os pedazos de código que atopas no texto. Intenta facerte coas estratexias de guión - accións orientadas ao cambio- propias da linguaxe JavaScript</p>
</blockquote>
<h3 id="continuara" tabindex="-1"><a class="header-anchor" href="#continuara" aria-hidden="true">#</a> ...continuará</h3>
<p>Formaweb IV</p>
<p>NOV 2021</p>
</div></template>


