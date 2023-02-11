<template><div><h1 id="fundamentos-de-programacion" tabindex="-1"><a class="header-anchor" href="#fundamentos-de-programacion" aria-hidden="true">#</a> Fundamentos de programación</h1>
<hr>
<h1 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1</h1>
<hr>
<h2 id="datos-tipos-de-datos" tabindex="-1"><a class="header-anchor" href="#datos-tipos-de-datos" aria-hidden="true">#</a> Datos: Tipos de datos.</h2>
<hr>
<blockquote>
<h5 id="para-computar-usamos-datos-programamos-para-empregar-datos-analizar-datos-amosar-datos-estudar-datos-extraer-datos-de-outros-datos-os-datos-son-a-substancia-sobre-a-que-imos-a-programar" tabindex="-1"><a class="header-anchor" href="#para-computar-usamos-datos-programamos-para-empregar-datos-analizar-datos-amosar-datos-estudar-datos-extraer-datos-de-outros-datos-os-datos-son-a-substancia-sobre-a-que-imos-a-programar" aria-hidden="true">#</a> <em>Para computar usamos datos. Programamos para empregar datos, analizar datos, amosar datos, estudar datos, extraer datos de outros datos,... Os datos son a substancia sobre a que imos a programar.</em></h5>
</blockquote>
<hr>
<p>Usamos datos para crear instrucións, que despois serán interpretadas polo ordenador. Sabendo que ese grupo de instrucións ou valores debe ser válido e expresado de xeito idoneo para que poidan ser procesados correctamente.</p>
<hr>
<p>Os tipos de datos en programación poden ser moi variados. Algúns tipos dependerán da linguaxe de programación que esteamos a empregar.</p>
<p>E, case sempre, vas poder tamén crear o teu propio tipo de datos mediante enumeracións e/ou estruturas.</p>
<hr>
<p>Vexamos algúns exemplos de <strong>tipos de datos básicos de uso común</strong> e que se pode facer con eles:</p>
<hr>
<ul>
<li><strong>Números</strong>: podes sumar, restar, dividir, multiplicar, entre outras operacións.</li>
</ul>
<hr>
<ul>
<li><strong>Texto</strong>: pódese comparar, substituír, engadir, etc.</li>
</ul>
<hr>
<ul>
<li><strong>Datas</strong>: Mostralas, sumalas, restalas, comparalas, etc.</li>
</ul>
<hr>
<blockquote>
<h5 id="para-tratar-cos-datos-usar-datos-e-empregalos-en-programacion-debemos-declaralos-usando-variables" tabindex="-1"><a class="header-anchor" href="#para-tratar-cos-datos-usar-datos-e-empregalos-en-programacion-debemos-declaralos-usando-variables" aria-hidden="true">#</a> <em>Para tratar cos datos, usar datos e empregalos en programación debemos declaralos usando variables</em>.</h5>
</blockquote>
<hr>
<ul>
<li>
<p><em>unha variable en programación é un elemento de datos cun valor, que pode cambiar durante o curso da execución dun programa</em></p>
</li>
<li>
<p><em>unha variable en programación podemos dicir que é unha unidade de almacenamento e recuperación de datos con valores que poden cambiar, a cal se identifica cun nome único no código do programa</em>.</p>
</li>
<li>
<p><em>unha variable en programación se pode entender como un nome que representa un valor e se utiliza de forma periódica para almacenar diversos tipos de datos. Datos que se utilizarán nas operacións posteriores de codificación</em>.</p>
</li>
<li>
<p><em>unha variable <s>en Java</s> é como unha caixa en onde podemos almacenar o que queiramos, como, por exemplo, nomes, números, funcións, etc.</em></p>
</li>
</ul>
<hr>
<figure><img src="@source/uf1842/assets/AYEnBjStamps-CJ6HPv.png" alt="bg fit" tabindex="0" loading="lazy"><figcaption>bg fit</figcaption></figure>
<hr>
<h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h3>
<p>Unha variable é unha peza de código que <strong>almacena un valor</strong>.</p>
<p>As regras e restricións dependerán do <strong>tipo de variable</strong> utilizada, entre elas:</p>
<ul>
<li><strong>Número</strong>: <code v-pre>int</code></li>
<li><strong>Número real</strong>: dobre ou flotante → <code v-pre>double</code> ou <code v-pre>float</code></li>
<li><strong>Cadea</strong>: carácter ou cadea → <code v-pre>char</code> ou <code v-pre>string</code></li>
<li><strong>Booleano</strong> (si/no, on/off,...)</li>
<li>...</li>
</ul>
<hr>
<h4 id="numeros" tabindex="-1"><a class="header-anchor" href="#numeros" aria-hidden="true">#</a> Números</h4>
<h5 id="tipo-de-datos-do-numero-int" tabindex="-1"><a class="header-anchor" href="#tipo-de-datos-do-numero-int" aria-hidden="true">#</a> Tipo de datos do número: <code v-pre>int</code></h5>
<p>Nunha linguaxe de programación, os números represéntanse de diferentes xeitos.</p>
<p>Só ter en conta:</p>
<ul>
<li>Cal será o tamaño que imos empregar?</li>
<li>Se terá ou non números decimais.</li>
<li>Se vai ser negativo.</li>
</ul>
<p><strong><code v-pre>int</code></strong> representa calquera número sen decimais, sexa positivo ou negativo. Nalgunhas linguas se o coñece tamén como <strong><code v-pre>integer</code>.</strong></p>
<hr>
<h5 id="tipo-de-datos-numero-real-double-ou-float" tabindex="-1"><a class="header-anchor" href="#tipo-de-datos-numero-real-double-ou-float" aria-hidden="true">#</a> Tipo de datos Número real: <strong><code v-pre>double</code></strong> ou <strong><code v-pre>float</code></strong></h5>
<p>Se queremos usar un número con decimais, atopamos o tipo de datos <strong><code v-pre>double</code></strong> ou <strong><code v-pre>float</code></strong>, ou números de coma flotante.</p>
<p>Dependendo da precisión decimal que queiramos obter se declara como dun tipo ou do outro, .</p>
<p>A diferencia dunha variable cun valor de numero <strong><code v-pre>int</code></strong>, nunha <strong><code v-pre>float</code></strong> atoparás números con decimais, por exemplo: <strong>5,89</strong></p>
<p>E tamén podes ver unha letra F ou D para distinguir si é <strong><code v-pre>float</code></strong> ou é <strong><code v-pre>double</code></strong>, por exemplo: <strong>5.89D</strong>.</p>
<hr>
<h4 id="cadeas" tabindex="-1"><a class="header-anchor" href="#cadeas" aria-hidden="true">#</a> Cadeas</h4>
<h5 id="tipo-de-datos-de-cadea-char-ou-string" tabindex="-1"><a class="header-anchor" href="#tipo-de-datos-de-cadea-char-ou-string" aria-hidden="true">#</a> Tipo de datos de cadea: <code v-pre>char</code> ou <code v-pre>string</code></h5>
<p><strong><code v-pre>char</code></strong> é un carácter Unicode e normalmente escribirase entre comiñas simples (' ').</p>
<p>Úsase <strong><code v-pre>string</code></strong> cunha cadea de caracteres, é dicir, caracteres seguidos un tras outro formando unha secuencia,</p>
<p>O tipo <strong><code v-pre>string</code></strong> escríbese normalmente entre comiñas dobres (&quot; &quot;), aínda que pode variar dependendo da linguaxe.</p>
<hr>
<h4 id="booleano" tabindex="-1"><a class="header-anchor" href="#booleano" aria-hidden="true">#</a> Booleano</h4>
<p>O tipo de datos **<code v-pre>boolean</code>**representa se unha condición é verdadeira ou non.</p>
<p>Normalmente ten dous valores identificados, <strong><code v-pre>true</code></strong>(verdadeiro) ou <strong><code v-pre>false</code></strong>(falso). Nalgunhas linguas pode ser equivalente aos números <strong>0</strong> e <strong>1</strong> .</p>
<blockquote>
<p><em>As operacións precisan ser descritas de forma clara pola súa funcionalidade e sinaladas segundo a convención para poder ser resoltas</em>.</p>
</blockquote>
<hr>
<h2 id="operadores" tabindex="-1"><a class="header-anchor" href="#operadores" aria-hidden="true">#</a> Operadores</h2>
<p>Os operadores en programación serven para realizar operacións cos datos: transformar datos dun tipo dado en novos datos.</p>
<hr>
<h3 id="tipos-de-operadores" tabindex="-1"><a class="header-anchor" href="#tipos-de-operadores" aria-hidden="true">#</a> Tipos de operadores</h3>
<p>Hai moitos tipos de operadores. Algúns deles tan familiares como os que usamos en matemáticas básicas, e outros máis novos que se crearon para as operacións informáticas.</p>
<p>Os tipos de operadores divídense do seguinte xeito:</p>
<ul>
<li>Aritméticos
<ul>
<li>Unarios</li>
<li>Binarios</li>
</ul>
</li>
<li>Booleanos</li>
<li>De asignación</li>
<li>Relacionais</li>
<li>Lóxicos</li>
</ul>
<hr>
<h4 id="operadores-aritmeticos" tabindex="-1"><a class="header-anchor" href="#operadores-aritmeticos" aria-hidden="true">#</a> Operadores Aritméticos</h4>
<p>Transforman e manipulan datos, principalmente cando son números, con ou sen decimais.</p>
<p>Pódense distinguir dous tipos:</p>
<ul>
<li>Operadores unarios</li>
<li>Operadores binarios</li>
</ul>
<hr>
<h5 id="operadores-unarios" tabindex="-1"><a class="header-anchor" href="#operadores-unarios" aria-hidden="true">#</a> Operadores Unarios</h5>
<p>Denominados así, porque só necesitan unha variable ou argumento para poder calcular o seu valor.</p>
<ul>
<li><strong>Negación</strong>:        <code v-pre>not</code> ou <code v-pre>!</code></li>
<li><strong>Negativo</strong>:         <code v-pre>-</code>  para devolver o valor <code v-pre>-a</code></li>
<li><strong>Positivo</strong>:           <code v-pre>+</code> ou <code v-pre>+a</code></li>
<li><strong>Incremento</strong>:    <code v-pre>++</code> (Aumenta +1)</li>
<li><em><strong>Decremento</strong></em>:     <code v-pre>--</code> (Diminúe -1)</li>
</ul>
<hr>
<h5 id="operadores-binarios" tabindex="-1"><a class="header-anchor" href="#operadores-binarios" aria-hidden="true">#</a> Operadores Binarios</h5>
<p>Para os operadores binarios, se necesitan dúas variables ou argumentos, antes de realizar operacións.</p>
<ul>
<li>Suma: <code v-pre>+</code></li>
<li>Resta: <code v-pre>-</code></li>
<li>Multiplicación: <code v-pre>*</code></li>
<li>División: <code v-pre>/</code></li>
<li>División enteira: A diferencia da anterior, esta non devolve decimais. Se utiliza o símbolo <code v-pre>div</code>. Ex: <code v-pre>7/2= 3,5</code>, pero <code v-pre>7 div 2 = 3</code></li>
<li>Resto o Módulo: Devolve o resto da división de dous números. Se utilizan os símbolos <code v-pre>%</code> o <code v-pre>mod</code>. Ex: <code v-pre>7 mod 2 = 1</code></li>
</ul>
<hr>
<h4 id="operadores-booleanos" tabindex="-1"><a class="header-anchor" href="#operadores-booleanos" aria-hidden="true">#</a> Operadores Booleanos</h4>
<p>Serven para combinar <code v-pre>true</code> e <code v-pre>false</code>, só pode devolver un destes valores.</p>
<p>Permite tomar diferentes accións no código, baseándose en ditas condicións <code v-pre>true</code> (verdadeiro) ou <code v-pre>false</code> (falso).</p>
<hr>
<h4 id="operadores-de-asignacion" tabindex="-1"><a class="header-anchor" href="#operadores-de-asignacion" aria-hidden="true">#</a> Operadores de Asignación</h4>
<p>Dan un valor a unha variable, se a variable tiña un valor, se substitúe polo novo.</p>
<p>Os operadores de asignación que se utilizan son:</p>
<ul>
<li><code v-pre>=</code>: Asignar unha variable.</li>
<li><code v-pre>+=</code>: Acumular unha variable. Ex: <code v-pre>variable+=3</code>, engade 3 ao valor que tiña a variable. Se a variable valía 6 agora vale 3.</li>
<li><code v-pre>-=</code>: Decrementar ou restar o valor da variable. Ex: <code v-pre>variable = variable - 3</code></li>
<li><code v-pre>*=</code>: Multiplicar o valor. Ex: <code v-pre>variable = variable * 3</code></li>
<li><code v-pre>/=</code>: Dividir o valor. Ex: <code v-pre>variable = variable / 3</code></li>
</ul>
<hr>
<h4 id="operadores-relacionais" tabindex="-1"><a class="header-anchor" href="#operadores-relacionais" aria-hidden="true">#</a> Operadores Relacionais</h4>
<p>Cos operadores relacionais pódense comparar dous valores, para saber si a operación ten un resultado verdadeiro (<code v-pre>true</code>) ou falso (<code v-pre>false</code>).</p>
<ul>
<li>Igual: <code v-pre>==</code></li>
<li>Distinto: <code v-pre>!=</code> ou <code v-pre>&lt;&gt;</code></li>
<li>Menor: &lt;</li>
<li>Menor ou igual: <code v-pre>&lt;=</code></li>
<li>Maior: <code v-pre>&gt;</code></li>
<li>Maior oi igual: <code v-pre>&gt;=</code></li>
</ul>
<hr>
<p>Ex:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token number">8</span> <span class="token operator">></span> <span class="token number">2</span> <span class="token comment">// devolve `true`</span>
<span class="token number">8</span> <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token comment">// devolve `false`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="operadores-loxicos" tabindex="-1"><a class="header-anchor" href="#operadores-loxicos" aria-hidden="true">#</a> Operadores Lóxicos</h4>
<p>Se utilizan para avaliar varias operacións á vez.</p>
<p>Se distinguen polo uso da palabra <code v-pre>and</code> e o marcado <code v-pre>&amp;&amp;</code>, depende da linguaxe. Tamén dispomos do operador <code v-pre>or</code> ou o marcado <code v-pre>||</code>.</p>
<ul>
<li><code v-pre>&amp;&amp;</code>: Devolve verdadeiro si as dúas expresións son verdadeiras, se unha é falsa devolverá falsa.</li>
<li><code v-pre>||</code>: Devolve verdadeiro si só un dos dous valores o é.</li>
</ul>
<hr>
<h2 id="_2" tabindex="-1"><a class="header-anchor" href="#_2" aria-hidden="true">#</a> 2</h2>
<hr>
<h2 id="condicionais" tabindex="-1"><a class="header-anchor" href="#condicionais" aria-hidden="true">#</a> Condicionais</h2>
<hr>
<p>Un condicional en programación é unha instrución ou grupo de instrucións que se poden executar ou non, dependendo dunha condición establecida.</p>
<hr>
<p>Condicionais comúns que podemos ver na maioría das linguaxes de programación son <code v-pre>if</code> e <code v-pre>else</code>.</p>
<ul>
<li>Avalíase unha condición dada na estrutura <code v-pre>if</code>(se), se é verdade execútanse as accións e se é falsa continúa coa execución do algoritmo.</li>
<li>Se é necesario, está o bloque  <code v-pre>else</code> (pódese entender como <em>o demais</em>, <em>senón</em> ou <em>tamén</em>), no que se colocan as instrucións que se executarán cando non se cumpra a condición principal.</li>
</ul>
<p>Son condicións lóxicas, que só devolverán <code v-pre>true</code> ou <code v-pre>false</code>, e executaranse se o seu valor é <code v-pre>true</code>.</p>
<hr>
<h2 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> <code v-pre>if</code></h2>
<p>Úsase <code v-pre>if</code> para avaliar unha expresión condicional:</p>
<ul>
<li>Se a condición é certa, executará un bloque de código.</li>
<li>Se é falso, é posible executar outras instrucións.</li>
</ul>
<hr>
<p>Hai varias estruturas, as máis sinxelas serían:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condicion<span class="token punctuation">)</span> instruccion<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>onde <code v-pre>condicion</code> é unha expresión booleana.</p>
<p>As instrucións  <code v-pre>instruccion</code> representan as liñas de código que se executarán se o resultado <code v-pre>condicion</code> é <code v-pre>true</code>.</p>
<hr>
<p>A expresión condicional <code v-pre>if</code> funciona primeiro avaliando <code v-pre>condicion</code>, se o código satisfai (é  <code v-pre>true</code>) execútase o bloque de código <code v-pre>instruccion</code>; pero se o resultado é <code v-pre>false</code>, continúa coa instrución que segue no código, se a hai.</p>
<hr>
<h3 id="if-para-varias-instrucions" tabindex="-1"><a class="header-anchor" href="#if-para-varias-instrucions" aria-hidden="true">#</a> <code v-pre>if</code> para varias instrucións</h3>
<p>En xeral, se hai varias declaracións que avaliar, agrúpanse con chaves <code v-pre>{ }</code>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condicion<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	 instruccion1<span class="token punctuation">;</span>
	 instruccion2<span class="token punctuation">;</span>
	 <span class="token operator">...</span>
	 instruccionX<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="else" tabindex="-1"><a class="header-anchor" href="#else" aria-hidden="true">#</a> <code v-pre>else</code></h2>
<p>Con <strong><code v-pre>else</code></strong>, temos a posibilidade de avaliar se <strong>NON se</strong> <strong>cumpre</strong> a condición. Significa que permite executar <strong>outras instrucións</strong> cando non se cumpre a condición inicial <strong><code v-pre>if</code></strong>.</p>
<p>A estrutura sinxela sería:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condicion<span class="token punctuation">)</span> instruccion1<span class="token punctuation">;</span>
<span class="token keyword">else</span> instruccion2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ul>
<li><code v-pre>instruccion1</code> é un bloque de código que se executará se a expresión avaliada é <code v-pre>true</code>.</li>
<li><code v-pre>instruccion2</code> representa as liñas de código que se executarán se a expresión avaliada é <code v-pre>false</code>.</li>
</ul>
<p>Na estrutura pódese ver que <code v-pre>condicion</code> segue sendo un booleano como antes e que como resultado só obteremos <code v-pre>true</code> ou <code v-pre>false</code>. Por iso usamos <code v-pre>else</code> cando queremos facer algo porque o <code v-pre>condicion</code> dános como resultado <code v-pre>false</code>.</p>
<hr>
<h3 id="agrupar-varios-enunciados-con-else" tabindex="-1"><a class="header-anchor" href="#agrupar-varios-enunciados-con-else" aria-hidden="true">#</a> Agrupar varios enunciados con <code v-pre>else</code></h3>
<p>Do mesmo xeito que <code v-pre>if</code>, a expresión <code v-pre>else</code> ten a mesma posibilidade de agrupar varios enunciados. A estrutura pódese visualizar do seguinte xeito:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condicion<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	 instruccion1<span class="token punctuation">;</span>
	 instruccion2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span>
<span class="token punctuation">{</span>
	 instruccion3<span class="token punctuation">;</span>
	 instruccion4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="if-aninado" tabindex="-1"><a class="header-anchor" href="#if-aninado" aria-hidden="true">#</a> <code v-pre>ìf</code> aniñado</h2>
<p>Nalgúns casos, unha instrución <code v-pre>if</code>  terá que ser executada como parte doutra instrución <code v-pre>if</code>, isto coñécese como instrucións aniñadas.</p>
<p>As declaracións <code v-pre>if</code>  fanse aniñadas para avaliar os valores de dúas variables.</p>
<p>Ex.:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">25</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	 instruccion1<span class="token punctuation">;</span>
	 <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 <span class="token punctuation">{</span>
	 instruccion2<span class="token punctuation">;</span>
	 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="do-exemplo-anterior" tabindex="-1"><a class="header-anchor" href="#do-exemplo-anterior" aria-hidden="true">#</a> Do exemplo anterior:</h3>
<ul>
<li>Se o valor da variable <code v-pre>a</code> é maior que 25, executará unha instrución.</li>
<li>A continuación, avaliará se <code v-pre>b</code> é menor que 25 e, se é verdade, executará outra instrución.</li>
<li>Se a condición non se cumpre coa variable <code v-pre>a</code>, tampouco se avaliará <code v-pre>b</code>.</li>
</ul>
<hr>
<h2 id="encadear-if-e-else" tabindex="-1"><a class="header-anchor" href="#encadear-if-e-else" aria-hidden="true">#</a> Encadear <code v-pre>if</code> e <code v-pre>else</code></h2>
<p>Algunhas linguaxes permítennos unir varias <code v-pre>if</code> dentro dunha mesma estrutura, realizando así diferentes accións, a estrutura sería:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condicion1<span class="token punctuation">)</span>
	 instruccion1<span class="token punctuation">;</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>condicion2<span class="token punctuation">)</span>
	 instruccion2<span class="token punctuation">;</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>condicion3<span class="token punctuation">)</span>
	 instruccion3<span class="token punctuation">;</span>
<span class="token keyword">else</span>
	 instruccion4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>if else</code> Utilízase na programación, por exemplo ao avaliar a mesma variable de xeito secuencial e dunha vez. Se vemos a estrutura, tal e como se está a avaliar, se ( <code v-pre>if</code>) o resultado é certo, executaría a instrución, se non ( <code v-pre>else</code>) valorará a seguinte opción, etc.</p>
<hr>
<h2 id="_3" tabindex="-1"><a class="header-anchor" href="#_3" aria-hidden="true">#</a> 3</h2>
<hr>
<h2 id="palabras-reservadas" tabindex="-1"><a class="header-anchor" href="#palabras-reservadas" aria-hidden="true">#</a> Palabras reservadas</h2>
<hr>
<p>As palabras reservadas ou palabras clave, teñen un significado especial para o compilador da linguaxe de programación.</p>
<hr>
<p>Serven para identificar os tipos de datos e as instrucións de programación que permita cada linguaxe, é dicir, dependerán da sintaxe da linguaxe que se empregue.</p>
<hr>
<p>Xa vimos palabras reservadas antes:</p>
<ul>
<li><code v-pre>if</code></li>
<li><code v-pre>else</code></li>
<li><code v-pre>string</code></li>
</ul>
<hr>
<h2 id="exemplos-de-palabras-reservadas" tabindex="-1"><a class="header-anchor" href="#exemplos-de-palabras-reservadas" aria-hidden="true">#</a> Exemplos de palabras reservadas</h2>
<p>Estes son algúns dos exemplos comúns que se ven na maioría das linguaxes de programación.</p>
<hr>
<h3 id="tipo-de-datos" tabindex="-1"><a class="header-anchor" href="#tipo-de-datos" aria-hidden="true">#</a> Tipo de datos</h3>
<ul>
<li><code v-pre>bool</code></li>
<li><code v-pre>int</code></li>
<li><code v-pre>char</code></li>
<li><code v-pre>byte</code></li>
<li><code v-pre>long</code></li>
<li><code v-pre>double</code></li>
</ul>
<hr>
<h3 id="diferentes-instrucions-de-programacion" tabindex="-1"><a class="header-anchor" href="#diferentes-instrucions-de-programacion" aria-hidden="true">#</a> Diferentes instrucións de programación</h3>
<ul>
<li><code v-pre>if</code></li>
<li><code v-pre>else</code></li>
<li><code v-pre>while</code></li>
<li><code v-pre>for</code></li>
<li><code v-pre>switch</code></li>
<li><code v-pre>case</code></li>
<li><code v-pre>break</code></li>
<li><code v-pre>try</code></li>
<li><code v-pre>return</code></li>
<li><code v-pre>void</code></li>
</ul>
<hr>
<h3 id="en-linguaxes-de-programacion-orientada-a-obxectos" tabindex="-1"><a class="header-anchor" href="#en-linguaxes-de-programacion-orientada-a-obxectos" aria-hidden="true">#</a> En linguaxes de programación orientada a obxectos</h3>
<ul>
<li><code v-pre>public</code></li>
<li><code v-pre>protected</code></li>
<li><code v-pre>private</code></li>
<li><code v-pre>class</code></li>
<li><code v-pre>abstract</code></li>
<li><code v-pre>interface</code></li>
<li><code v-pre>this</code></li>
<li><code v-pre>friend</code></li>
</ul>
<hr>
<h3 id="outras-palabras-reservadas-nalgunhas-linguaxes-de-programacion" tabindex="-1"><a class="header-anchor" href="#outras-palabras-reservadas-nalgunhas-linguaxes-de-programacion" aria-hidden="true">#</a> Outras palabras reservadas nalgunhas linguaxes de programación</h3>
<ul>
<li><code v-pre>main</code></li>
<li><code v-pre>new</code></li>
<li><code v-pre>operator</code></li>
<li><code v-pre>sizeof</code></li>
<li><code v-pre>typedef</code></li>
</ul>
<hr>
<h2 id="resumo" tabindex="-1"><a class="header-anchor" href="#resumo" aria-hidden="true">#</a> Resumo:</h2>
<ul>
<li>Estas palabras NON SE PODEN usar para nomear variables, xa que provocarían un erro no código.</li>
<li>Unha vez escollida linguaxe de programación, deberías aprender as diferentes palabras reservadas desa linguaxe.</li>
<li>Se cambias de idioma, é posible que teñas que aprender novas palabras reservadas, e ademais cambiar a sintaxe.</li>
</ul>
<hr>
<h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4" aria-hidden="true">#</a> 4</h2>
<hr>
<h2 id="arrays-matrices" tabindex="-1"><a class="header-anchor" href="#arrays-matrices" aria-hidden="true">#</a> Arrays (matrices)</h2>
<p>As matrices - <code v-pre>arrays</code>- úsanse para agrupar obxectos. Podes declarar tipos ou clases de datos (como <code v-pre>string</code>, <code v-pre>number</code>, <code v-pre>boolean</code>) e dependerá da linguaxe de programación que esteas a usar.</p>
<p>Tamén se os coñece como <em>arreglos</em>, vectores ou matrices.</p>
<hr>
<h2 id="como-declarar-matrices" tabindex="-1"><a class="header-anchor" href="#como-declarar-matrices" aria-hidden="true">#</a> Como declarar matrices?</h2>
<p>Para declarar unha matriz a estrutura sería:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>char<span class="token punctuation">[</span><span class="token punctuation">]</span> cadea<span class="token punctuation">;</span>
Figura<span class="token punctuation">[</span><span class="token punctuation">]</span> cuadrados<span class="token punctuation">;</span> <span class="token comment">// Donde “Figura” é unha clase</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>O tipo declárase seguido dos corchetes[] e despois o nome da variable.</li>
<li>Isto dependerá moito da linguaxe de programación.</li>
</ul>
<hr>
<h3 id="outra-forma-de-declarar" tabindex="-1"><a class="header-anchor" href="#outra-forma-de-declarar" aria-hidden="true">#</a> Outra forma de declarar...</h3>
<p>Tamén se pode declarar do seguinte xeito - máis convencional-, o exemplo sería:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>char cadena<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
Figura cuadrados<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Esta opción é estándar nas linguaxes C ou C++ e tamén se pode usar en Java</em>.</p>
<hr>
<h2 id="consellos-e-tamano-das-matrices" tabindex="-1"><a class="header-anchor" href="#consellos-e-tamano-das-matrices" aria-hidden="true">#</a> Consellos e tamaño das matrices</h2>
<p>O habitual ademais de declarar as matrices é definir o tamaño.</p>
<p>Ao declarar unha matriz, non estamos creando un obxecto, só unha referencia para usalo.</p>
<p>Os elementos dentro dunha matriz pódense cambiar, pero NON a declaración ou referencia da matriz.</p>
<p>Na programación orientada a obxectos, os arrays considéranse obxectos, isto quere dicir que ao declaralos non se está a crear o obxecto, senón unha referencia para poder utilizalo.</p>
<hr>
<h3 id="como-configurar-o-tamano-da-matriz" tabindex="-1"><a class="header-anchor" href="#como-configurar-o-tamano-da-matriz" aria-hidden="true">#</a> Como configurar o tamaño da matriz...</h3>
<p>Para inicializar unha matriz, úsase a palabra reservada <code v-pre>new</code>. (Nalgúns idiomas non é necesario <code v-pre>new</code>.)</p>
<p>Exemplo con matriz de tipo de datos <code v-pre>int</code>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">int</span><span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// Un array de 30 valores que son números, neste caso sería 0.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Se queremos ver os números do 1 ao 30.</p>
<hr>
<h3 id="exemplo-con-matriz-de-tipo-de-datos-int" tabindex="-1"><a class="header-anchor" href="#exemplo-con-matriz-de-tipo-de-datos-int" aria-hidden="true">#</a> Exemplo con matriz de tipo de datos <code v-pre>int:</code></h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>int i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">30</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	 s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// i: índice, é a posición dentro do array para localizar o valor que conten</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Comeza por 0, e non por 1. Moi común nas linguaxes de programación, o primeiro valor do índice adoita ser o número 0.</p>
<p>Case todas as linguaxes de programación usan <code v-pre>length</code> para indicar o tamaño da matriz.</p>
<hr>
<h3 id="outro-exemplo" tabindex="-1"><a class="header-anchor" href="#outro-exemplo" aria-hidden="true">#</a> Outro exemplo...</h3>
<p>Outra forma máis sinxela de crear matrices:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>String<span class="token punctuation">[</span><span class="token punctuation">]</span> nomes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"Johnnie"</span><span class="token punctuation">,</span><span class="token string">"Tomás"</span><span class="token punctuation">,</span><span class="token string">"Daniel"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<p>Tamén se pode crear así:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>String<span class="token punctuation">[</span><span class="token punctuation">]</span> nomes <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token string">"Johnnie"</span><span class="token punctuation">,</span>
   <span class="token string">"Tomás"</span><span class="token punctuation">,</span>
   <span class="token string">"Daniel"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>E sería equivalente a escribilo así:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>String<span class="token punctuation">[</span><span class="token punctuation">]</span> nomes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
nomes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Johnnie"</span><span class="token punctuation">;</span>
nomes<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Tomás"</span><span class="token punctuation">;</span>
nomes<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Daniel"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⚠️ <em>Lembra consultar a documentación da linguaxe de programación que estás utilizando. A forma de crear e manipular Arrays é específica para cada linguaxe.</em></p>
<hr>
<h2 id="crear-matrices-de-obxectos" tabindex="-1"><a class="header-anchor" href="#crear-matrices-de-obxectos" aria-hidden="true">#</a> Crear matrices de obxectos</h2>
<hr>
<p>Pódense crear:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>cadros <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Figuras</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 10 referencias do tipo “Figuras” nun array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Con isto non creamos 10 obxectos, o valor en cada posición será <code v-pre>null</code>.</p>
<p>Para crealos:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>cadros <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Figuras</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>int i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	 cadros<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Figura</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="matrices-bidimensionais" tabindex="-1"><a class="header-anchor" href="#matrices-bidimensionais" aria-hidden="true">#</a> Matrices bidimensionais</h2>
<p>Existen linguaxes de programación que permiten crear matrices bidimensionais (bidimensionais). Está creando matrices de matrices.</p>
<p>Exemplo con Python: Supoña que as temperaturas se rexistran durante 4 días consecutivos:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Dia 1: 11 12 5 2
Dia 2: 15 6 10
Dia 3: 10 8 12 5
Dia 4: 12 15 8 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Represéntase como unha matriz bidimensional:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>T <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="_5" tabindex="-1"><a class="header-anchor" href="#_5" aria-hidden="true">#</a> 5</h2>
<hr>
<h2 id="loop-ou-ciclo" tabindex="-1"><a class="header-anchor" href="#loop-ou-ciclo" aria-hidden="true">#</a> Loop ou Ciclo</h2>
<p>Un ciclo ou bucle (<em>loop</em> en inglés), é unha secuencia de instrucións de código que se executa repetidas veces, hasta que a condición asignada a dito ciclo deixa de cumprirse.</p>
<p>Os tres ciclo más utilizados en programación son:</p>
<ul>
<li><strong>while</strong></li>
<li><strong>for</strong></li>
<li><strong>do while</strong></li>
</ul>
<hr>
<h3 id="ciclo-while" tabindex="-1"><a class="header-anchor" href="#ciclo-while" aria-hidden="true">#</a> Ciclo <code v-pre>while</code></h3>
<p>O ciclo <code v-pre>while</code> itera ou repite un bloque de código mentres unha condición ten o valor <strong><code v-pre>true</code></strong>.</p>
<p>Pódese escribir:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>condicion<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	 instruccions<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>Todos os ciclos teñen:</p>
<ul>
<li>A <strong><code v-pre>condicion</code></strong> que se avalía a <strong><code v-pre>true</code></strong> ou <strong><code v-pre>false</code></strong>, e se fai en cada repetición/iteración do ciclo.</li>
<li>A <strong><code v-pre>instruccion</code></strong> o instrucións que representa las líneas de código, se ejecutan si la <strong><code v-pre>condicion</code></strong> es <strong><code v-pre>true</code></strong>.</li>
</ul>
<p>Este ciclo se caracteriza porque a <code v-pre>condicion</code> é procesada antes de executar o código, é dicir, que si o resultado devolve <code v-pre>false</code>, as instrucións non serán executadas. Para estes casos, existen outros tipos de ciclos que veremos máis adiante.</p>
<hr>
<h4 id="ciclo-while-aninado" tabindex="-1"><a class="header-anchor" href="#ciclo-while-aninado" aria-hidden="true">#</a> Ciclo <code v-pre>while</code> aniñado</h4>
<p>Un ciclo <code v-pre>while</code> aniñado:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span> row <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	 <span class="token keyword">while</span> <span class="token punctuation">(</span>col <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span>
	 <span class="token punctuation">{</span>
		  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"#"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		  col<span class="token operator">++</span><span class="token punctuation">;</span>
	 <span class="token punctuation">}</span>
	 row<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_6" tabindex="-1"><a class="header-anchor" href="#_6" aria-hidden="true">#</a> 6</h2>
<hr>
<h2 id="ciclos-for" tabindex="-1"><a class="header-anchor" href="#ciclos-for" aria-hidden="true">#</a> Ciclos <code v-pre>for</code></h2>
<p>Un bucle <code v-pre>for</code> úsase cando queremos repetir un conxunto de instrucións un número finito de veces.</p>
<p>Un exemplo de como escribir:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token constant">TOTAL</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	 instruccions<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>Dentro do ciclo <code v-pre>for</code> atopamos:</p>
<p><code v-pre>i = 0</code>: Nesta posición asígnase o primeiro valor da variable, xeralmente é un <strong>cero</strong> .</p>
<p><code v-pre>i &lt; TOTAL</code>: Aquí é onde se verifica se a variable chegou ao final do ciclo, avaliando esta condición. <code v-pre>TOTAL</code>, pode cambiar , adoita ser un número, constante ou variable.</p>
<p><code v-pre>i++</code>: é onde se cambia o valor <code v-pre>i</code> para a seguinte repetición ou iteración. O obxectivo é aumentar o seu valor, ata que nos acheguemos de ciclo en ciclo a <code v-pre>TOTAL</code>.</p>
<hr>
<blockquote>
<p>Unha <strong>iteración na programación</strong> é cada unha das voltas que dá un ciclo, é dicir, cada unha das repeticións dun anaco de código.</p>
</blockquote>
<hr>
<p>É importante comprobar que a condición se cumpre nalgún momento, para evitar caer nun <strong>bucle infinito</strong> (que non remata nunca), e que daría un erro ao executar o programa.</p>
<hr>
<h2 id="breake-continue-nun-ciclo-for" tabindex="-1"><a class="header-anchor" href="#breake-continue-nun-ciclo-for" aria-hidden="true">#</a> <code v-pre>break</code>e <code v-pre>continue</code> nun ciclo <code v-pre>for</code></h2>
<p>Algunhas linguaxes de programación teñen as palabras reservadas <code v-pre>break</code> e <code v-pre>continue</code> que compren a súa función:</p>
<ul>
<li><code v-pre>break</code>: Úsase para saír do bucle e podemos decidir cando facelo, sen chegar ao final e <strong>continuar coas seguintes iteracións</strong>.</li>
<li><code v-pre>continue</code>: Permítenos omitir unha iteración de todo o bucle. Detén a execución do resto do código dentro do bloque de bucle.</li>
</ul>
<hr>
<p>Un exemplo de cada un:</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">--</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// Non seguimos si i é maior a 5</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// Saimos si i é igual a 2</span>
  <span class="token punctuation">}</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Imprimimos o valor de i máis 3</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="diferenza-entre-while-e-for" tabindex="-1"><a class="header-anchor" href="#diferenza-entre-while-e-for" aria-hidden="true">#</a> Diferenza entre <code v-pre>while</code> e <code v-pre>for</code></h2>
<ul>
<li><strong><code v-pre>while</code></strong>, o código repítese baseándose nunha <strong><code v-pre>condicion</code></strong>, é dicir, sempre que a <strong><code v-pre>condicion</code></strong>  sexa <strong><code v-pre>true</code></strong>(verdadeiro).</li>
<li><strong><code v-pre>for</code></strong>, as instrucións repítense o número de veces que se indica, normalmente poñemos un número (ou o valor dunha variable ou dunha constante).</li>
</ul>
<hr>
<h2 id="_7" tabindex="-1"><a class="header-anchor" href="#_7" aria-hidden="true">#</a> 7</h2>
<hr>
<h2 id="ciclo-do-while" tabindex="-1"><a class="header-anchor" href="#ciclo-do-while" aria-hidden="true">#</a> Ciclo <code v-pre>do while</code></h2>
<p>É unha estrutura de control cíclica, que permite executar de maneira repetitiva un bloque de instrucións sen avaliar de forma inmediata unha condición específica.</p>
<p>Sino avaliándoa xusto despois de executar por primeira vez o bloque de instrucións.</p>
<hr>
<p>Dependendo da linguaxe de programación, se pode escribir:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">do</span>
<span class="token punctuation">{</span>
	 instruccions<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>condicion<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="exemplo-de-ciclo-do-while" tabindex="-1"><a class="header-anchor" href="#exemplo-de-ciclo-do-while" aria-hidden="true">#</a> Exemplo de ciclo <code v-pre>do while</code></h2>
<p>Un exemplo coa linguaxe de programación C#, si queremos os números do 1 ao 10, sería:</p>
<div class="language-csharp line-numbers-mode" data-ext="cs"><pre v-pre class="language-csharp"><code><span class="token keyword">do</span>
<span class="token punctuation">{</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span> i <span class="token operator">&lt;</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Sabemos que, dentro das chaves <code v-pre>{ }</code> se atopa todo o que se repetirá.</li>
<li><code v-pre>i++</code> : Instrución que incrementa o valor de <code v-pre>i</code>.</li>
<li><code v-pre>Console.println(i)</code> : Instrución que imprime ou mostra en pantalla o valor de <code v-pre>i</code>. Ao estar dentro do bloque, significa que veremos en pantalla como se irá incrementando hasta que cumpra a condición <code v-pre>i &lt; 25.</code></li>
<li><code v-pre>i &lt; 25.</code> : A condición para que se cumpra o ciclo. Neste caso, mentres o número sexa menor que 25.</li>
</ul>
<hr>
<h2 id="diferencia-entre-do-while-e-while" tabindex="-1"><a class="header-anchor" href="#diferencia-entre-do-while-e-while" aria-hidden="true">#</a> Diferencia entre <code v-pre>do while</code> e <code v-pre>while</code></h2>
<p>A diferencia entre ambos é a orde do proceso:</p>
<ul>
<li><strong><code v-pre>do while</code></strong>, primeiro executa o bloque de instrucións e logo avalía a condición.</li>
<li><strong><code v-pre>while</code></strong> primeiro avalía a condición e despois executa o bloque de instrucións.</li>
</ul>
<p>Así que, é posible obter resultados diferentes ao utilizar <strong><code v-pre>do while</code></strong> en vez de <strong><code v-pre>while</code></strong>.</p>
<hr>
<h2 id="_8" tabindex="-1"><a class="header-anchor" href="#_8" aria-hidden="true">#</a> 8</h2>
<hr>
<h2 id="funcions" tabindex="-1"><a class="header-anchor" href="#funcions" aria-hidden="true">#</a> Funcións</h2>
<hr>
<p>As funcións, tamén chamadas <strong>métodos</strong>, nos permiten dividir o traballo que fai un programa, en tarefas máis pequenas separadas da parte principal.</p>
<hr>
<h2 id="como-definir-una-funcion" tabindex="-1"><a class="header-anchor" href="#como-definir-una-funcion" aria-hidden="true">#</a> Cómo definir una función?</h2>
<hr>
<p>A forma de declarar unha función sería:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>Modificadores<span class="token punctuation">]</span> tipo_retorno <span class="token function">nombre_funcion</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>argumentos<span class="token punctuation">]</span></span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	 bloque_código<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="modificadores-dunha-funcion" tabindex="-1"><a class="header-anchor" href="#modificadores-dunha-funcion" aria-hidden="true">#</a> Modificadores dunha función</h2>
<hr>
<p>Son varias palabras clave, ou palabras reservadas da linguaxe de programación, as que poden modificar a forma na que serán empregados os métodos ou funcións.</p>
<hr>
<p>Algunos ejemplos: <strong><code v-pre>public</code></strong>, <strong><code v-pre>private</code></strong>, <strong><code v-pre>protected</code></strong>, <strong><code v-pre>virtual</code></strong>, <strong><code v-pre>static</code></strong>...</p>
<hr>
<h2 id="nome-ou-identificador-dunha-funcion" tabindex="-1"><a class="header-anchor" href="#nome-ou-identificador-dunha-funcion" aria-hidden="true">#</a> Nome ou identificador dunha función</h2>
<hr>
<ul>
<li>
<p>Igual que cando declaramos unha variable, o nome da función non pode levar espazos.</p>
<p>Ex: <strong><code v-pre>suma total</code></strong> sería incorrecto, logo deberíamos optar por algunha destas opcións: <strong><code v-pre>sumaTotal</code></strong>, <strong><code v-pre>suma_total</code></strong>, <strong><code v-pre>SumaTotal</code></strong>, etc.</p>
</li>
<li>
<p>Tampouco debería de empezar cun número e desde logo non se pode usar ningunha palabra reservada.</p>
</li>
</ul>
<hr>
<h4 id="exemplo-de-funcions" tabindex="-1"><a class="header-anchor" href="#exemplo-de-funcions" aria-hidden="true">#</a> Exemplo de funcións</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hola</span><span class="token punctuation">(</span><span class="token parameter">nombre</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Hola %s"</span><span class="token punctuation">,</span> nombre<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> int <span class="token function">suma</span><span class="token punctuation">(</span><span class="token parameter">int num1<span class="token punctuation">,</span> int num2</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	 <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="e-cando-ou-como-se-ponen-en-marcha-estas-funcions" tabindex="-1"><a class="header-anchor" href="#e-cando-ou-como-se-ponen-en-marcha-estas-funcions" aria-hidden="true">#</a> E cando ou como se poñen en marcha estas funcións?</h2>
<hr>
<h2 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> Return</h2>
<hr>
<p>A palabra reservada <code v-pre>return</code>, se utiliza para devolver un método ou función. Por exemplo, en el siguiente código, <code v-pre>return</code> devuelve el valor que tiene <code v-pre>result</code>.</p>
<div class="language-csharp line-numbers-mode" data-ext="cs"><pre v-pre class="language-csharp"><code><span class="token keyword">return</span> result<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="que-facer-cos-valores-devoltos" tabindex="-1"><a class="header-anchor" href="#que-facer-cos-valores-devoltos" aria-hidden="true">#</a> Que facer cos valores devoltos?</h2>
<hr>
<p>No caso anterior, se invocou unha función que devolveu un valor. Se pode utilizar o valor devolto desde a función de onde foi chamado.</p>
<p>Un poco confuso :scare:. Vexamos un exemplo:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">public</span> int <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">int a<span class="token punctuation">,</span> int b</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>E se utilizaría da seguinte maneira:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>int resultado<span class="token punctuation">;</span>
resultado <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span>resultado<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Imprime el valor 9 -> 4 + 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="avantaxes-do-uso-de-funcions" tabindex="-1"><a class="header-anchor" href="#avantaxes-do-uso-de-funcions" aria-hidden="true">#</a> Avantaxes do uso de funcións</h2>
<ul>
<li>Os programas son máis lexibles e fáciles de manter.</li>
<li>O desenvolvemento e o mantemento é máis rápido.</li>
<li>Son utilizados para que o software sexa reusable.</li>
<li>Se poden crear métodos para que outros programadores poidan usalos.</li>
<li>Os métodos permiten separar os obxectos para comunicar e distribuir o traballo realizado polo programa.</li>
</ul>
<hr>
<h2 id="_9" tabindex="-1"><a class="header-anchor" href="#_9" aria-hidden="true">#</a> 9</h2>
<hr>
<h2 id="diccionarios" tabindex="-1"><a class="header-anchor" href="#diccionarios" aria-hidden="true">#</a> Diccionarios</h2>
<hr>
<p>Ao igual que os <em><strong>arrays</strong></em>, os <strong>dicionarios</strong> son unha estrutura de datos.</p>
<p>Permiten almacenar múltiples valores dentro dunha mesma variable; presentandose, sen un orden estabrecido pero asociados coas chaves <code v-pre>{ }</code>.</p>
<hr>
<h3 id="crear-dicionarios" tabindex="-1"><a class="header-anchor" href="#crear-dicionarios" aria-hidden="true">#</a> Crear dicionarios</h3>
<hr>
<p>Se crean usando llaves { }:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>telefonos <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-property property">'Tomas'</span><span class="token operator">:</span> <span class="token number">5552437</span><span class="token punctuation">,</span> <span class="token string-property property">'Johnnie'</span><span class="token operator">:</span> <span class="token number">5551428</span><span class="token punctuation">,</span> <span class="token string-property property">'Daniel'</span><span class="token operator">:</span> <span class="token number">5550012</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A cada elemento dun dicionario se o coñece como <strong>propiedade</strong>, e consta dun identificador e un valor.</p>
<p>Un diccionario baleiro pode ser creado usando <strong><code v-pre>{ }</code></strong> ou coa función <strong><code v-pre>dict()</code></strong>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
d <span class="token operator">=</span> <span class="token function">dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="usos-do-dicionario" tabindex="-1"><a class="header-anchor" href="#usos-do-dicionario" aria-hidden="true">#</a> Usos do dicionario</h3>
<ul>
<li><strong>Agrupar valores</strong>: se poden agrupar valores relacionados, dentro dunha mesma variable, facendo o código máis simple.</li>
<li><strong>Array de dicionario</strong>: se pode crear un array de obxectos, con múltiples propiedades</li>
</ul>
<hr>
<h3 id="manipulacion-dun-dicionario" tabindex="-1"><a class="header-anchor" href="#manipulacion-dun-dicionario" aria-hidden="true">#</a> Manipulación dun dicionario</h3>
<hr>
<ul>
<li>Nun diccionario podemos agregar ou eliminar propiedades, ao igual que os valores dos mesmos.</li>
<li>Unha vez creado o dicionario, no código podemos indicarlle que facer con eses datos. Se poden crear todo tipos de instruccións.</li>
</ul>
<hr>
<h1 id="que-ven-despois" tabindex="-1"><a class="header-anchor" href="#que-ven-despois" aria-hidden="true">#</a> Que ven despois?</h1>
<hr>
<p>Unha vez que teñamos aprendido estes fundamentos básicos de programación:</p>
<ol>
<li>Elixe unha rama da programación que te guste, sigue a ruta de aprendizaxe da mesma e <strong>practica</strong>. Entre as áreas que che poden interesar están:</li>
</ol>
<ul>
<li>Frontend → <em>JavaScript</em></li>
<li>Backend → <em>C#, Java, Python</em></li>
<li>Aplicaciones Móbiles → <em>Kotlin, Swift, Java</em></li>
<li>Videoxogos → <em>C#</em></li>
<li>Data Science → <em>Python</em></li>
</ul>
<hr>
<p>XAN 2023</p>
<hr>
<!-- https://www.codealo.dev/curso/fundamentos-de-programacion?leccion=introduccion-fundamentos-de-programacion -->
<p><a href="https://learn.microsoft.com/en-us/training/modules/introduction-to-github-visual-studio-code/" target="_blank" rel="noopener noreferrer">https://learn.microsoft.com/en-us/training/modules/introduction-to-github-visual-studio-code/<ExternalLinkIcon/></a></p>
</div></template>


