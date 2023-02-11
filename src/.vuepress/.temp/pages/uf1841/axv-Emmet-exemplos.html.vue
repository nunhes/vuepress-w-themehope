<template><div><h1 id="emmet" tabindex="-1"><a class="header-anchor" href="#emmet" aria-hidden="true">#</a> Emmet</h1>
<p>Emmet é un recurso para a escritura rápida de código, dispoñible coma complemento para a maioría dos editores de código modernos, e agora integrada de inicio en VSCode.</p>
<p>Empregando as abreviaturas e comandos de Emmet podemos acortar o tempo de desenvolvemento.</p>
<p>Pódese empregar Emmet para acelerar o proceso de escritura de código HTML e tamén CSS.</p>
<p>As abreviaturas non son unha linguaxe de marcado, só un procedemento para acelerar o seu despregue.</p>
<h6 id="tampouco-e-necesario-que-perdas-moito-tempo-nin-te-preocupes-por-redactar-a-abreviatura-mais-complexa-e-extensa-posible-e-mais-aconsellable-despregar-pequenas-abreviaturas-para-solucionar-rapidamente-problemas-concretos" tabindex="-1"><a class="header-anchor" href="#tampouco-e-necesario-que-perdas-moito-tempo-nin-te-preocupes-por-redactar-a-abreviatura-mais-complexa-e-extensa-posible-e-mais-aconsellable-despregar-pequenas-abreviaturas-para-solucionar-rapidamente-problemas-concretos" aria-hidden="true">#</a> Tampouco é necesario que perdas moito tempo nin te preocupes por redactar a abreviatura máis complexa e extensa posible. E máis aconsellable despregar pequenas abreviaturas para solucionar rapidamente problemas concretos.</h6>
<h2 id="a-sintaxe-das-abreviaturas" tabindex="-1"><a class="header-anchor" href="#a-sintaxe-das-abreviaturas" aria-hidden="true">#</a> A sintaxe das abreviaturas</h2>
<p>Emmet usa unha sintaxe - similar aos selectores CSS- para <strong>describir as posicións dos elementos</strong> dentro da árbore xerada e os <strong>atributos dos elementos</strong>.</p>
<h3 id="elementos" tabindex="-1"><a class="header-anchor" href="#elementos" aria-hidden="true">#</a> Elementos</h3>
<p>Podes usar nomes de elementos como <code v-pre>div</code> ou <code v-pre>p</code> para <em>xerar</em> etiquetas HTML. Emmet non ten un conxunto predefinido de nomes de etiquetas dispoñibles, pode escribir calquera palabra e transformala nunha etiqueta: <code v-pre>div</code>→ <code v-pre>&lt;div&gt;&lt;/div&gt;</code>, <code v-pre>foo</code>→ <code v-pre>&lt;foo&gt;&lt;/foo&gt;</code>etc.</p>
<h3 id="operadores-de-aninado" tabindex="-1"><a class="header-anchor" href="#operadores-de-aninado" aria-hidden="true">#</a> Operadores de aniñado</h3>
<p>Os operadores de aniñado utilízanse para situar uns elementos da abreviatura dentro da árbore xerada: se debe colocarse dentro ou preto do elemento de referencia.</p>
<h4 id="neno" tabindex="-1"><a class="header-anchor" href="#neno" aria-hidden="true">#</a> Neno: <code v-pre>&gt;</code></h4>
<p>Podes usar o operador <code v-pre>&gt;</code> para aniñar elementos uns dentro doutros:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>div>ul>li
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>... xerará</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;div>
    &lt;ul>
        &lt;li>&lt;/li>
    &lt;/ul>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="irman" tabindex="-1"><a class="header-anchor" href="#irman" aria-hidden="true">#</a> Irmán: <code v-pre>+</code></h4>
<p>Use o operador <code v-pre>+</code> para colocar elementos uns preto dos outros, no mesmo nivel:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>div+p+bq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>... sairá</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;div>&lt;/div>
&lt;p>&lt;/p>
&lt;blockquote>&lt;/blockquote>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="subida" tabindex="-1"><a class="header-anchor" href="#subida" aria-hidden="true">#</a> Subida: <code v-pre>^</code></h4>
<p>Co operador <code v-pre>&gt;</code> estás avanzamos, baixando, pola árbore xerada e as posicións de todos os elementos irmáns resolveranse contra o elemento máis profundo:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>div+div>p>span+em 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>...ampliarase a</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;div>&lt;/div>
&lt;div>
    &lt;p>&lt;span>&lt;/span>&lt;em>&lt;/em>&lt;/p>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Co operador <code v-pre>^</code>, podese subir un nivel na árbore e cambiar o contexto onde deberían aparecer os seguintes elementos:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>div+div>p>span+em^bq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>...saídas para</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;div>&lt;/div>
&lt;div>
    &lt;p>&lt;span>&lt;/span>&lt;em>&lt;/em>&lt;/p>
    &lt;blockquote>&lt;/blockquote>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Podes usar tantos <code v-pre>^</code>operadores como queiras, cada operador subirá un nivel:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>div+div>p>span+em^^^bq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>... sairá a</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;div>&lt;/div>
&lt;div>
    &lt;p>&lt;span>&lt;/span>&lt;em>&lt;/em>&lt;/p>
&lt;/div>
&lt;blockquote>&lt;/blockquote>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="multiplicacion" tabindex="-1"><a class="header-anchor" href="#multiplicacion" aria-hidden="true">#</a> Multiplicación: <code v-pre>*</code></h4>
<p>Co operador <code v-pre>*</code>  podes definir cantas veces se debe xerar un elemento:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ul>li*5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>...producirá</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;ul>
    &lt;li>&lt;/li>
    &lt;li>&lt;/li>
    &lt;li>&lt;/li>
    &lt;li>&lt;/li>
    &lt;li>&lt;/li>
&lt;/ul>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="agrupacion" tabindex="-1"><a class="header-anchor" href="#agrupacion" aria-hidden="true">#</a> Agrupación: <code v-pre>()</code></h4>
<p>A medida que te afianzas co uso das abreviaturas de Emmet poderás aprender a empregar parénteses para agrupar subárbores en abreviaturas máis complexas:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>div>(header>ul>li*2>a)+footer>p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>...expándese a</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;div>
    &lt;header>
        &lt;ul>
            &lt;li>&lt;a href="">&lt;/a>&lt;/li>
            &lt;li>&lt;a href="">&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/header>
    &lt;footer>
        &lt;p>&lt;/p>
    &lt;/footer>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Se estás a traballar co DOM do navegador, podes pensar en grupos como fragmentos de documentos: cada grupo contén unha subárbore de abreviaturas e todos os seguintes elementos insírense ao mesmo nivel que o primeiro elemento do grupo.</p>
<p>Podes aniñar grupos uns dentro doutros e combinalos co operador <code v-pre>*</code> de multiplicación :</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>(div>dl>(dt+dd)*3)+footer>p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>...producirá</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;div>
    &lt;dl>
        &lt;dt>&lt;/dt>
        &lt;dd>&lt;/dd>
        &lt;dt>&lt;/dt>
        &lt;dd>&lt;/dd>
        &lt;dt>&lt;/dt>
        &lt;dd>&lt;/dd>
    &lt;/dl>
&lt;/div>
&lt;footer>
    &lt;p>&lt;/p>
&lt;/footer>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Empregando a agrupación, podes escribir o marcado da páxina completa cunha única abreviatura, pero mellor non o fagas.</p>
</blockquote>
<h3 id="operadores-de-atributos" tabindex="-1"><a class="header-anchor" href="#operadores-de-atributos" aria-hidden="true">#</a> Operadores de atributos</h3>
<p>Os operadores de atributos úsanse <strong>para modificar os atributos dos elementos</strong> xerados. Por exemplo, en HTML e XML pódense engadir rapidamente atributos <code v-pre>class</code> ao elemento que se vai xerar.</p>
<h4 id="id-e-clase" tabindex="-1"><a class="header-anchor" href="#id-e-clase" aria-hidden="true">#</a> ID e CLASE</h4>
<p>Para os atributos CSS, usaremos as notacións <code v-pre>elem#id</code> (un elemento seguido do seu ID) e  <code v-pre>elem.class</code> (un elemento seguido dunha clase) para asignarlle aos elementos os atributos <code v-pre>id</code> ou  <code v-pre>class</code> que conveña. En Emmet, podes repetir unha mesma abreviatura para <em>engadir</em> os atributos que queiras ao elemento especificado:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>div#header+div.page+div#footer.class1.class2.class3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>... sairá</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;div id="header">&lt;/div>
&lt;div class="page">&lt;/div>
&lt;div id="footer" class="class1 class2 class3">&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="atributos-personalizados" tabindex="-1"><a class="header-anchor" href="#atributos-personalizados" aria-hidden="true">#</a> Atributos personalizados</h4>
<p>Podes usar a notación<code v-pre>[attr]</code> (como en CSS) para engadir atributos personalizados a un elemento:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>td[title="!" colspan=3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>...o que producirá</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;td title="!" colspan="3">&lt;/td>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Podes colocar tantos atributos como queiras entre corchetes.</li>
<li>Non tes que especificar os valores dos atributos: <code v-pre>td[colspan title]</code> producirá <code v-pre>&lt;td colspan=&quot;&quot; title=&quot;&quot;&gt;</code> con tabulacións dentro de cada atributo baleiro (se o teu editor os admite).</li>
<li>Podes usar comiñas simples ou dobres para citar valores de atributos.</li>
<li>Non é necesario citar os valores se non conteñen espazos: <code v-pre>td[title=hello colspan=3]</code> tamén funcionará.</li>
</ul>
<p>Co operador <code v-pre>*</code> de multiplicación pódense repetir elementos, e con <code v-pre>$</code> poderás <em>numeralos</em>. Colocando o operador <code v-pre>$</code> dentro do <em>nome</em> do elemento - nome do atributo ou valor do atributo - se mostrará o número de cada elemento repetido:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ul>li.item$*5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>...dará como resultado</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;ul>
    &lt;li class="item1">&lt;/li>
    &lt;li class="item2">&lt;/li>
    &lt;li class="item3">&lt;/li>
    &lt;li class="item4">&lt;/li>
    &lt;li class="item5">&lt;/li>
&lt;/ul>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Podes usar varias liñas <code v-pre>$</code> seguidas para completar o número con ceros:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ul>li.item$$$*5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>...para obter</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;ul>
    &lt;li class="item001">&lt;/li>
    &lt;li class="item002">&lt;/li>
    &lt;li class="item003">&lt;/li>
    &lt;li class="item004">&lt;/li>
    &lt;li class="item005">&lt;/li>
&lt;/ul>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cambiando-a-base-de-numeracion-e-a-direccion" tabindex="-1"><a class="header-anchor" href="#cambiando-a-base-de-numeracion-e-a-direccion" aria-hidden="true">#</a> Cambiando a base de numeración e a dirección</h4>
<p>Co modificador <code v-pre>@</code>, podes cambiar a dirección da numeración (ascendente ou descendente) e a base (por exemplo, o valor inicial).</p>
<p>Por exemplo, para cambiar de dirección, engade <code v-pre>@-</code> despois de <code v-pre>$</code>:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ul>li.item$@-*5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>…para producir</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;ul>
    &lt;li class="item5">&lt;/li>
    &lt;li class="item4">&lt;/li>
    &lt;li class="item3">&lt;/li>
    &lt;li class="item2">&lt;/li>
    &lt;li class="item1">&lt;/li>
&lt;/ul>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Para cambiar o valor base do contador, engade un modificador <code v-pre>@N</code> a <code v-pre>$</code>:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ul>li.item$@3*5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>...transfórmase en</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;ul>
    &lt;li class="item3">&lt;/li>
    &lt;li class="item4">&lt;/li>
    &lt;li class="item5">&lt;/li>
    &lt;li class="item6">&lt;/li>
    &lt;li class="item7">&lt;/li>
&lt;/ul>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Podes usar estes modificadores xuntos:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ul>li.item$@-3*5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>...e transformarase en</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;ul>
    &lt;li class="item7">&lt;/li>
    &lt;li class="item6">&lt;/li>
    &lt;li class="item5">&lt;/li>
    &lt;li class="item4">&lt;/li>
    &lt;li class="item3">&lt;/li>
&lt;/ul>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="texto" tabindex="-1"><a class="header-anchor" href="#texto" aria-hidden="true">#</a> Texto: <code v-pre>{}</code></h3>
<p>Podes usar chaves para engadir contido textual a un elemento:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>a{Click me}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>... producirá</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;a href="">Click me&lt;/a>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ten en conta que <code v-pre>{text}</code> se usa e analiza como un elemento separado (como, <code v-pre>div</code>, <code v-pre>p</code> etc.) pero ten un significado especial cando se escribe inmediatamente despois do elemento. Por exemplo, <code v-pre>a{click}</code> e  <code v-pre>a&gt;{click}</code> producirán a mesma saída, pero <code v-pre>a{click}+b{here}</code> e  <code v-pre>a&gt;{click}+b{here}</code> non:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;!-- a{click}+b{here} -->
&lt;a href="">click&lt;/a>&lt;b>here&lt;/b>

&lt;!-- a>{click}+b{here} -->
&lt;a href="">click&lt;b>here&lt;/b>&lt;/a>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>No segundo exemplo, o elemento <code v-pre>&lt;b&gt;</code> colócase <em>dentro do</em> elemento <code v-pre>&lt;a&gt;</code> . Esa é a diferenza: cando <code v-pre>{text}</code> se escribe xusto despois do elemento, non cambia o contexto principal. Aquí tes un exemplo máis complexo que mostra por que é importante:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>p>{Click }+a{here}+{ to continue}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>...produce</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;p>Click &lt;a href="">here&lt;/a> to continue&lt;/p>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Neste exemplo, para escribir <code v-pre>Click here to continue</code> dentro do elemento  <code v-pre>&lt;p&gt;</code> temos que movernos explicitamente cara abaixo da árbore co operador <code v-pre>&gt;</code> despois de <code v-pre>p</code>, pero no caso do elemento <code v-pre>a</code> non é necesario, xa que necesitamos un elemento <code v-pre>&lt;a&gt;</code> só coa palabra <code v-pre>here</code>, sen cambiar o contexto pai.</p>
<p>Para comparación, aquí está a mesma abreviatura escrita sen o operador <code v-pre>&gt;</code> fillo :</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>p{Click }+a{here}+{ to continue}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>...que produce</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;p>Click &lt;/p>
&lt;a href="">here&lt;/a> to continue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="notas-sobre-o-formato-das-abreviaturas" tabindex="-1"><a class="header-anchor" href="#notas-sobre-o-formato-das-abreviaturas" aria-hidden="true">#</a> Notas sobre o formato das abreviaturas</h3>
<p>Cando te familiarices coa sintaxe das abreviaturas de Emmet, podes querer usar algún formato para que as túas abreviaturas sexan máis lexibles. Por exemplo, usando espazos entre elementos e operadores, como aquí:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>(header > ul.nav > li*5) + footer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Pero non funcionará, porque o espazo é un <em>símbolo de parada</em> onde Emmet deixa de analizar abreviaturas.</p>
<p>Moitos usuarios pensan que cada abreviatura debe escribirse nunha nova liña, pero non é así: podes escribir e ampliar unha abreviatura <em>en calquera lugar do texto</em>.</p>
<p><strong>Lembra</strong>:</p>
<ul>
<li>As abreviaturas non son unha linguaxe de marcado.</li>
<li>Non perdas tempo escribindo abreviaturas complexas. Construír unha única abreviatura complexa é moito máis lento e propenso a erros que construír e escribir algunhas curtas.</li>
</ul>
<h2 id="alguns-exemplos" tabindex="-1"><a class="header-anchor" href="#alguns-exemplos" aria-hidden="true">#</a> Algúns exemplos:</h2>
<h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h3>
<p><strong>#menu$<em>6&gt;ul&gt;li</em>0&gt;a{Link Here}</strong> + [Crtl]+E</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link Here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link Here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link Here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link Here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link Here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link Here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>article#front.main</strong> + [Crtl]+E</p>
<p><code v-pre>&lt;article id=&quot;front&quot; class=&quot;main&quot;&gt;&lt;/article&gt;</code></p>
<p>*<em>article&gt;p{Text here...}+bq&gt;{Text here...}^p{Text here...}<em>3</em></em>  + [Ctrl]+E</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>																			       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Text here...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>																	     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span><span class="token punctuation">></span></span>Text here...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Text here...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Text here...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Text here...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>														   
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>table+</strong>	     + [Ctrl]+E</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>tr+</strong>		 	+ [Ctrl]+E 		<code v-pre>&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;</code></p>
<p><strong>colg+</strong>	        + [Ctrl]+E 		<code v-pre>&lt;colgroup&gt;&lt;col&gt;&lt;/colgroup&gt;</code></p>
<hr>
<h3 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h3>
<p><strong>p.class1.class2.class3</strong></p>
<p><code v-pre>&lt;p class=&quot;class1 class2 class3&quot;&gt;&lt;/p&gt;</code></p>
<p><strong>pos</strong>		    + [Ctrl]+E 		position: relative;
<strong>pos:s</strong>		 + [Ctrl]+E 		position: static;
<strong>t:a</strong>			  + [Ctrl]+E 		top: auto;
<strong>z</strong>			     + [Ctrl]+E 		z-index: ;
<strong>va:t</strong>		    + [Ctrl]+E 		vertical-align: top;
<strong>tsh:ra</strong>        + [Ctrl]+E 		text-shadow: h v blur rgba(0, 0, 0, .5);
<strong>bdtli:c</strong>	   + [Ctrl]+E 		border-top-left-image: continue;
<strong>d</strong>			    + [Ctrl]+E 	    display: block;
<strong>bxsh:ra</strong>	 + [Ctrl]+E 		-webkit-box-shadow: inset h v blur spread rgba(0, 0, 0, .5);
-moz-box-shadow: inset h v blur spread rgba(0, 0, 0, .5);
box-shadow: inset h v blur spread rgba(0, 0, 0, .5);</p>
<p><strong>@kf</strong>			+ [Ctrl]+E</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@-webkit-keyframes</span> identifier</span> <span class="token punctuation">{</span>
		<span class="token selector">from</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span>
		<span class="token selector">to</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@-o-keyframes</span> identifier</span> <span class="token punctuation">{</span>
		<span class="token selector">from</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span>
		<span class="token selector">to</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@-moz-keyframes</span> identifier</span> <span class="token punctuation">{</span>
		<span class="token selector">from</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span>
		<span class="token selector">to</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> identifier</span> <span class="token punctuation">{</span>
		<span class="token selector">from</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span>
		<span class="token selector">to</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>c:ra</strong>				+ [Ctrl]+E 		color: rgba(0, 0, 0, .5);
<strong>ff:ss</strong>			   + [Ctrl]+E 		font-family: sans-serif;
<strong>cps:b</strong>			 + [Ctrl]+E 		caption-side: bottom;
<strong>bgi:n</strong>			 + [Ctrl]+E 		background-image: none;
<strong>pgbb:r</strong>		  + [Ctrl]+E 		page-break-before: right;</p>
<hr>
<p><em>Máis info:</em></p>
<ul>
<li><a href="https://emmet.io/" target="_blank" rel="noopener noreferrer">https://emmet.io/<ExternalLinkIcon/></a></li>
<li><a href="https://docs.emmet.io/" target="_blank" rel="noopener noreferrer">https://docs.emmet.io/<ExternalLinkIcon/></a></li>
<li><a href="http://docs.emmet.io/cheat-sheet/" target="_blank" rel="noopener noreferrer">http://docs.emmet.io/cheat-sheet/<ExternalLinkIcon/></a></li>
<li><a href="https://docs.emmet.io/abbreviations/syntax/" target="_blank" rel="noopener noreferrer">https://docs.emmet.io/abbreviations/syntax/<ExternalLinkIcon/></a></li>
</ul>
<p>OUT 2021</p>
</div></template>


