<template><div><h1 id="flexbox-vs-css-grid" tabindex="-1"><a class="header-anchor" href="#flexbox-vs-css-grid" aria-hidden="true">#</a> Flexbox vs. CSS Grid</h1>
<h2 id="ou" tabindex="-1"><a class="header-anchor" href="#ou" aria-hidden="true">#</a> ou</h2>
<h1 id="css-grid-flexbox" tabindex="-1"><a class="header-anchor" href="#css-grid-flexbox" aria-hidden="true">#</a> CSS Grid + Flexbox</h1>
<p>Pódes usar por separado tanto <a href="https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout" target="_blank" rel="noopener noreferrer">CSS Grid<ExternalLinkIcon/></a> como <a href="https://medium.com/swlh/how-i-use-flexbox-to-create-a-one-page-website-81db78e61738" target="_blank" rel="noopener noreferrer">Flexbox<ExternalLinkIcon/></a> para o deseño dunha páxina web, pero en outros moitos casos se poden usar a un tempo, explotando as caracteristicas de cada un deles onde sexan máis operativas ou convenientes.</p>
<p>Neses casos, e sen que sexa unha norma xeral, CSS Grid adoita usarse para deseños estruturais de páxina mentres que Flexbox adoita usarse para aliñar os elementos da UI.</p>
<p>Para ver como se desenvolve isto en código real imos crear unha pequena páxina web.</p>
<figure><img src="@source/posts/assets/1ia4V5qfk6Ki3iWIn-SmErw.png" alt="bg left:55% 135%" tabindex="0" loading="lazy"><figcaption>bg left:55% 135%</figcaption></figure>
<h2 id="paso-1-planificar-antes-de-codificar" tabindex="-1"><a class="header-anchor" href="#paso-1-planificar-antes-de-codificar" aria-hidden="true">#</a> Paso 1:<br>planificar antes de codificar</h2>
<p>O truco para non dar paus de cego ao codificar é planificar previamente.</p>
<p>← <em>Partimos dun deseño xenérico e sinxelo</em>
Primeiro se identifican os elementos pai e fillo en función da idea de deseño que se quere representar.</p>
<figure><img src="@source/posts/assets/1HfMITcXB0gGY7yNPrQ1c3g.png" alt="bg left:55% 110%" tabindex="0" loading="lazy"><figcaption>bg left:55% 110%</figcaption></figure>
<h3 id="determinar-o-numero-de-filas" tabindex="-1"><a class="header-anchor" href="#determinar-o-numero-de-filas" aria-hidden="true">#</a> Determinar o número de filas</h3>
<p>Ordear os elementos da páxina horizontalmente, vendo cantas filas se precisan para distribuilos.</p>
<p><em>Debuxa os elementos como caixas. Os que están na mesma liña horizontal (imaxinaria) estarán na mesma fila, por exemplo <code v-pre>aside</code>, e <code v-pre>article</code>.</em></p>
<hr>
<figure><img src="@source/posts/assets/1Nx5IvOf6rNHBdT0WVsd0yg.png" alt="bg right:55% 110%" tabindex="0" loading="lazy"><figcaption>bg right:55% 110%</figcaption></figure>
<h3 id="determinar-o-numero-de-columnas" tabindex="-1"><a class="header-anchor" href="#determinar-o-numero-de-columnas" aria-hidden="true">#</a> Determinar o número de columnas</h3>
<p>Ordear os elementos en grupos verticalmente. Os elementos ao longo da mesma liña vertical (imaxinaria) consideraranse na mesma columna.</p>
<p><em>Ter en conta que a herda da grella só chega aos fillos directos do contedor da grella; así os elementos dentro de <code v-pre>article</code> serán ignorados e xa non herdarán nada da mesma.</em></p>
<hr>
<h2 id="crear-unha-guia" tabindex="-1"><a class="header-anchor" href="#crear-unha-guia" aria-hidden="true">#</a> Crear unha guía</h2>
<p>Despois de determinar o número de columnas e filas, temos unha guía que poderemos seguir ao codificar. Marca as liñas da grella e anota os elementos pai e fillo.</p>
<figure><img src="@source/posts/assets/1ig7jocX1p2mYc-us5geb2w.png" alt="bg left:65% 110%" tabindex="0" loading="lazy"><figcaption>bg left:65% 110%</figcaption></figure>
<hr>
<h1 id="paso-2-comenzar-co-html" tabindex="-1"><a class="header-anchor" href="#paso-2-comenzar-co-html" aria-hidden="true">#</a> Paso 2: comenzar co HTML</h1>
<!-- Como se trata dun esquema sinxelo podes escribir todo o html e logo traballar no CSS.-->
<hr>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
      Header
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Aside<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reprehenderit inventore ipsum est omnis, totam deserunt temporibus rem optio quia obcaecati excepturi consectetur, harum facilis alias veniam laborum iure! Expedita?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Article<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi ratione pariatur eius et ullam odio temporibus corrupti autem atque quaerat soluta saepe, ex dolorum laboriosam dolore minus repudiandae. Iste! Odit velit amet quisquam ut
        placeat quia tempore molestiae consectetur ab facilis eius necessitatibus veniam autem, veritatis magnam magni ea tempora et. Perferendis molestiae cum saepe voluptas tenetur aperiam optio! Corporis officia consectetur ipsa explicabo ipsum debitis.
        Voluptate excepturi aspernatur ipsa recusandae aliquam tempore officiis ullam quis, enim eveniet magnam amet unde temporibus veniam, culpa reiciendis aliquid corrupti! Quaerat, magni.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h1 id="paso-3-crear-a-folla-de-estilos-css-e-enlazala-co-arquivo-html" tabindex="-1"><a class="header-anchor" href="#paso-3-crear-a-folla-de-estilos-css-e-enlazala-co-arquivo-html" aria-hidden="true">#</a> Paso 3: crear a folla de estilos CSS e enlazala co arquivo html.</h1>
<p>Tamén podes engadir algún reset á folla de estilos, ou importar algun recurso para usar na páxina: fontes, iconas,...</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/*  reset xenerico - mellorar en proxectos complexos */</span>
<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* determinar a altura do elemento raíz - root */</span>
<span class="token selector">html, body</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="crear-a-cuadricula" tabindex="-1"><a class="header-anchor" href="#crear-a-cuadricula" aria-hidden="true">#</a> Crear a cuadrícula</h2>
<blockquote>
<p>CSS Grid pode ser intimidante ao principio xa que hai varias formas de crear unha grella. <!-- Polo tanto, é menos confuso manter unha sintaxe determinada ao aprender. --></p>
</blockquote>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.grid-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span> <span class="token comment">/* declaración da raíz da grella*/</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Isto transfórma  <code v-pre>div.grid-wrapper</code> nun contedor de grella. Os seus fillos directos son agora elementos da cuadrícula. Sen embargo os elementos que están dentro dos seus fillos directos non se verán afectados.</p>
<hr>
<p>A continuación, especificamolo ancho das filas e a altura das columnas da grella.</p>
<ul>
<li><strong>Filas:</strong> faremos que <code v-pre>header</code> e <code v-pre>footer</code> se expandan para cubrir o ancho total da páxina:</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">aside, article, footer</span> <span class="token punctuation">{</span>
  <span class="token comment">/* indicamos as areas da grella e o seu comportamento */</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> min-content auto min-content<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>Columnas:</strong> queremos que <code v-pre>aside</code> ocupe 1/4 do ancho da páxina e <code v-pre>article</code> o resto:</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 3fr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>A unidade <code v-pre>fr</code> representa unha fracción do espazo dispoñible no contedor da grella. En canto a <code v-pre>header</code>e <code v-pre>footer</code>, non teño que pensar nelas xa que se espallaban polas dúas columnas, ocupando un ancho de <code v-pre>4fr</code>.</p>
</blockquote>
<hr>
<h2 id="colocar-os-elementos-nas-celas-da-grella" tabindex="-1"><a class="header-anchor" href="#colocar-os-elementos-nas-celas-da-grella" aria-hidden="true">#</a> Colocar os elementos nas celas da grella</h2>
<p>Especificar o tamaño de cada elemento da cuadrícula e a posición de localización usando as propiedades <code v-pre>grid-column</code> e <code v-pre>grid-row</code>.</p>
<p>O encabezado e o pé de páxina cubrirán a área de 2 columnas. A modo longo de <code v-pre>grid-column: 1/3</code> é:</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">grid-column-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token property">grid-column-end</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Só significa que comeza na primeira liña vertical e remata na terceira liña vertical.</p>
<hr>
<p>Así mesmo, a declaración <code v-pre>grid-row: 2/3</code>significa que comeza na segunda liña horizontal e remata na terceira liña horizontal.</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">grid-row-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token property">grid-row-end</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">aside</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/2<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 2/3<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #5EB7B7<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">header</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/3<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1/2<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #96D1C7<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">footer</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/3<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 3/4<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #96D1C7<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">article</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 2/3<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 2/3<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #FC7978<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<figure><img src="@source/posts/assets/1WvXHcHME22K38q5O5UUdSw.png" alt="bg fit" tabindex="0" loading="lazy"><figcaption>bg fit</figcaption></figure>
<hr>
<h2 id="creando-flex-container-e-flex-child" tabindex="-1"><a class="header-anchor" href="#creando-flex-container-e-flex-child" aria-hidden="true">#</a> Creando <code v-pre>flex-container</code> e <code v-pre>flex-child</code></h2>
<p>A continuación, traballamos no espazo entre os elementos dentro de <code v-pre>article</code>.</p>
<p>Un <code v-pre>div</code> coa clase <code v-pre>flex-wrap</code> é a envoltura arredor dos elementos de clase <code v-pre>image</code>.</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">. flex-wra</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Non é necesario cambiar a dirección dos elementos flexibles, xa que estarán dispostos de esquerda a dereita por defecto</em>.</p>
<hr>
<p>Para mellorar a capacidade de resposta da páxina, comporbamos que o ancho dos elementos flexibles se axuste segundo o ancho da páxina.</p>
<p>Isto pódese conseguir configurando as tres imaxes <code v-pre>flex-grow: 1 </code>.</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.image</span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<figure><img src="@source/posts/assets/1if2C1c1qOFjNY9_mTJSjeg.png" alt="bg fit" tabindex="0" loading="lazy"><figcaption>bg fit</figcaption></figure>
<hr>
<h2 id="vista-mobil" tabindex="-1"><a class="header-anchor" href="#vista-mobil" aria-hidden="true">#</a> Vista móbil</h2>
<p>En móbiles, tendemos a colocar as cousas cara abaixo en lugar de dispoñelas lateralmente xa que o tamaño da pantalla é limitado. Para conseguilo:</p>
<p>Engade unha consulta multimedia para aplicar <code v-pre>display: block</code>no meu contedor de reixa cando o tamaño da pantalla sexa pequeno. Ese é un xeito moi bo non?</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
<span class="token selector">.grid-wrapper</span> <span class="token punctuation">{</span> 
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/posts/assets/1cvpC4eJte3KewtelxtLkpA.png" alt="bg right:30%" tabindex="0" loading="lazy"><figcaption>bg right:30%</figcaption></figure>
<hr>
<p>Os elementos flexibles dentro de <code v-pre>article</code> necesitan máis traballo xa que aínda están dispostos nunha fila. Para cambiar de fila a columna, <code v-pre>flex-direction: column </code></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
<span class="token selector">...

.flex-wrap</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>Para fins de estilo, tamén engadimos un <code v-pre>margin-bottom</code>a cada elemento flexible para crear un espazo entre as imaxes.</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
<span class="token selector">...

.image</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 12px
<span class="token punctuation">}</span>
<span class="token selector">.image:last-child</span><span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/posts/assets/1LypVwaD3bkJvpSEEZZts-Q.png" alt="bg right:30% " tabindex="0" loading="lazy"><figcaption>bg right:30% </figcaption></figure>
<hr>
<p>Como sempre, o último paso será comprobar se hai algún problema de aliñamento en diferentes puntos de interrupción cambiando o ancho do navegador.</p>
<figure><img src="https://miro.medium.com/max/640/1*Rj3jmHn4SWk86vG15VWjuw.gif" alt="bg left:60% 110%" tabindex="0" loading="lazy"><figcaption>bg left:60% 110%</figcaption></figure>
<hr>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">aside, header, footer, article, span</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">html, body</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.grid-wrapper</span> <span class="token punctuation">{</span>
  <span class="token comment">/*changed the height from 100% to auto as the layout breaks when the height of the content 'overflows'.*/</span>
  <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 3fr<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> min-content auto min-content<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #FFAFB0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">aside</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/2<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 2/3<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #5EB7B7<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">header</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/3<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1/2<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #96D1C7<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">footer</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/3<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 3/4<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #96D1C7<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">article</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 2/3<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 2/3<span class="token punctuation">;</span>
<span class="token comment">/*   background-color: #FC7978; */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token selector">.image</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1500px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 1500px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #D6D5D5<span class="token punctuation">;</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1, h4, p</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

 <span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 850px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

   <span class="token comment">/*changes to code to arrange aside below article. */</span>
 <span class="token selector">.grid-wrapper</span> <span class="token punctuation">{</span>
     <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
     <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
   <span class="token punctuation">}</span> 
   
   <span class="token selector">aside</span> <span class="token punctuation">{</span>
     <span class="token property">order</span><span class="token punctuation">:</span> 1
   <span class="token punctuation">}</span>
   
   <span class="token selector">footer</span> <span class="token punctuation">{</span>
     <span class="token property">order</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token comment">/*end of changes*/</span>
   
   <span class="token selector">.flex-wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
   
   <span class="token selector">.image</span> <span class="token punctuation">{</span>
     <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="reixa" tabindex="-1"><a class="header-anchor" href="#reixa" aria-hidden="true">#</a> Reixa</h2>
<ul>
<li><code v-pre>display: grid</code></li>
<li><code v-pre>grid-template-columns</code>e <code v-pre>grid-template-rows</code>(nótese na forma plural)</li>
<li><code v-pre>grid-column</code>e <code v-pre>grid-row</code>(nótese na forma singular)</li>
</ul>
<h2 id="flexbox" tabindex="-1"><a class="header-anchor" href="#flexbox" aria-hidden="true">#</a> Flexbox</h2>
<ul>
<li><code v-pre>display: flex</code></li>
<li><code v-pre>flex-direction</code></li>
<li><code v-pre>flex-grow</code></li>
</ul>
<hr>
<blockquote>
<p><strong>Nota posterior:</strong></p>
<p>Editei o CSS no meu CodePen despois de dous comentarios de dous lectores. Grazas aos dous!</p>
<p>- nas liñas 68 a 79 para cambiar a orde de vista <code v-pre>aside</code>e <code v-pre>article</code>na vista móbil.</p>
<p>- na liña 18 para cambiar a altura do 100% a automática. Isto evitará que o deseño se rompa cando o contido do envoltorio de grade desborde.</p>
<p>Tamén publiquei a <a href="https://medium.com/@lim.aliceyt/how-i-use-css-grid-and-flexbox-to-create-a-one-page-website-part-2-e575edb422fe" target="_blank" rel="noopener noreferrer">parte 2 deste artigo<ExternalLinkIcon/></a> onde modifiquei o modelo para crear un sitio real. Lea se estás interesado!</p>
</blockquote>
<hr>
<h1 id="_2" tabindex="-1"><a class="header-anchor" href="#_2" aria-hidden="true">#</a> 2</h1>
<h2 id="coa-axuda-do-modelo-creado-na-parte-1" tabindex="-1"><a class="header-anchor" href="#coa-axuda-do-modelo-creado-na-parte-1" aria-hidden="true">#</a> Coa axuda do modelo creado na parte 1</h2>
<p>Crear un sitio web desde cero pode levar moito tempo. Non obstante, dado que moitos sitios web teñen un aspecto estándar, podemos reducir o tempo de desenvolvemento creando os nosos propios modelos que podemos crear e modificar cando sexa necesario.</p>
<hr>
<figure><img src="@source/posts/assets/1jRmpu49E796jd54fzzbxLg-1674677418280-32.png" alt="bg fit" tabindex="0" loading="lazy"><figcaption>bg fit</figcaption></figure>
<hr>
<!-- O modelo que estou a usar é do meu [último artigo sobre como uso CSS Grid e Flexbox para crear un sitio web dunha soa páxina](https://medium.com/swlh/how-i-use-css-grid-and-flexbox-to-create-a-one-page-website-262aeea3592a) .-->
<figure><img src="@source/posts/assets/1if2C1c1qOFjNY9_mTJSjeg-1674677414622-29.png" alt="bg fit" tabindex="0" loading="lazy"><figcaption>bg fit</figcaption></figure>
<hr>
<h1 id="paso-1-planificacion-antes-de-codificar" tabindex="-1"><a class="header-anchor" href="#paso-1-planificacion-antes-de-codificar" aria-hidden="true">#</a> Paso 1. Planificación antes de codificar</h1>
<p>Axustar o deseño:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>header
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Engadir envoltorio de navegación e ligazóns de navegación na esquina dereita.</li>
<li>Cambiar a navegación a un contedor flexible para que as ligazóns de navegación se mostren nunha fila nunha pantalla grande e nunha columna nunha pantalla pequena.</li>
<li>Engadir un logotipo na esquina superior esquerda.</li>
</ul>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>aside
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Conservar <code v-pre>aside</code> para o contido destacado.</li>
<li>Engadir un subtítulo con texto - en maiúsculas.</li>
<li>Cambiar a contedor flexible para que poida usar <code v-pre>flex-grow</code> para encher o espazo</li>
</ul>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>article
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Cambia <code v-pre>article</code> a <code v-pre>div</code> para incluir unha imaxe destacada.</li>
<li>Engadir imaxe usando a propiedade <code v-pre>background-image</code> xa que buscamos que cambie o tamaño segundo o tamaño da pantalla.</li>
<li>Elimina o resto de contido.</li>
</ul>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>footer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Engadir tres iconas e aliñalas no lado esquerdo.</li>
</ul>
<hr>
<h1 id="paso-2-modificar-html-e-css" tabindex="-1"><a class="header-anchor" href="#paso-2-modificar-html-e-css" aria-hidden="true">#</a> Paso 2. Modificar HTML e CSS</h1>
<p>Tendo en conta os cambios anteriores, vexamos como queda o HTML e o CSS.</p>
<hr>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>XTC<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigation<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>About us<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Services<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Contact us<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>get-started<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Get started<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Web design<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Landing page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reprehenderit inventore ipsum est omnis, totam deserunt temporibus rem optio quia obcaecati excepturi consectetur, harum facilis alias veniam laborum iure! Expedita?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Dolor sit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>background<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fab fa-instagram<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fab fa-twitter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fab fa-facebook-f<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>Engádir dúas etiquetas <code v-pre>link</code> na cabeceira a <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Font<ExternalLinkIcon/></a> e <a href="https://fontawesome.com/?from=io" target="_blank" rel="noopener noreferrer">Font Awesome<ExternalLinkIcon/></a> para poder usar a fonte seleccionada de Google Font e iconas de Font Awesome.</p>
<hr>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- /* google fonts*/ --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preconnect<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preconnect<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.gstatic.com<span class="token punctuation">"</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com/css2?family=Poppins&amp;display=swap<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- /*fontawesome*/ --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">integrity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==<span class="token punctuation">"</span></span> <span class="token attr-name">crossorigin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>anonymous<span class="token punctuation">"</span></span> <span class="token attr-name">referrerpolicy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-referrer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<figure><img src="@source/posts/assets/1-jGWVVNnomNRZz5nX37LiQ.png" alt="bg right:70% 90%" tabindex="0" loading="lazy"><figcaption>bg right:70% 90%</figcaption></figure>
<h2 id="modificar-os-estilos-→" tabindex="-1"><a class="header-anchor" href="#modificar-os-estilos-→" aria-hidden="true">#</a> Modificar os estilos →</h2>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>body
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Cambiar a fonte predeterminada.</p>
<p>No selector do corpo. Como as propiedades da fonte son propiedades herdadas, esta aplicarase a fonte especificada en toda a páxina web a non ser que o anule.</p>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>header
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Engadir un logotipo na esquina superior esquerda.</li>
<li>Manter o menu a dereita</li>
</ul>
<p>Para crear un deseño onde os dous elementos se coloquen en extremos opostos, transformar <code v-pre>header</code> nun contedor de cuadrícula.</p>
<hr>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">header</span> <span class="token punctuation">{</span>
 <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
 <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Os elementos dentro de <code v-pre>header</code>, o logotipo e as ligazóns de navegación, agora son elementos de grade.</p>
<hr>
<figure><img src="@source/posts/assets/10JYXllv2FICk0JMyMojoiQ.png" alt="bg fit" tabindex="0" loading="lazy"><figcaption>bg fit</figcaption></figure>
<hr>
<ul>
<li>Cambiar a navegación a un contedor flexible para que as ligazóns de navegación se mostren nunha fila nunha pantalla grande e nunha columna nunha pantalla pequena.</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">#nav</span><span class="token punctuation">{</span>
   <span class="token property">display</span><span class="token punctuation">:</span> flex
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ul>
<li>
<p>Engadir envoltorio de navegación e ligazóns de navegación na esquina dereita.</p>
</li>
<li>
<p>Engadir <code v-pre>justify-content: flex-end</code> para empuxar as ligazóns de navegación ao final da fila.</p>
</li>
<li>
<p>Quitar o estilo de lista nas ligazóns de navegación coa declaración <code v-pre>list-style-type:none</code>.</p>
</li>
</ul>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>aside
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Engadir un subtítulo con texto en maiúscula.</li>
</ul>
<p>Para o subtítulo, declarar</p>
<p><code v-pre>text-transform: uppercase</code></p>
<p>para cambiar o texto a maiúscula.</p>
<ul>
<li>
<p>Aumentar o tamaño de letra predeterminado do título e do subtítulo para que destaquen na páxina.</p>
</li>
<li>
<p>En canto ás cores, reutilizar as cores máis escuras da imaxe destacada para as cores das fontes para manter a paleta de cores consistente.</p>
</li>
<li>
<p>Ampliar a posición de <code v-pre>aside</code> para superpoñelo coa cabeceira cambiando a propiedade <code v-pre>grid-column</code>. Isto é para subir o contido xa que o deseño parece desequilibrado doutro xeito.</p>
</li>
</ul>
<hr>
<figure><img src="@source/posts/assets/1283-jzTvbkrWCQyq34XekA.png" alt="bg fit" tabindex="0" loading="lazy"><figcaption>bg fit</figcaption></figure>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.background
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>Cambiar <code v-pre>article</code> a <code v-pre>div</code> para conter a imaxe destacada.</p>
</li>
<li>
<p>Cambiar <code v-pre>article</code> polo selector <code v-pre>div.background</code> e no HTML reemprazar <code v-pre>article</code> por <code v-pre>div class=&quot;background&quot;</code>.</p>
</li>
<li>
<p>Engadir a imaxe usando a propiedade <code v-pre>background-image </code> para que cambie o tamaño segundo o tamaño da pantalla.</p>
</li>
</ul>
<hr>
<figure><img src="@source/posts/assets/1RxF2jHaniCgveZBgznbZRg.png" alt="bg" tabindex="0" loading="lazy"><figcaption>bg</figcaption></figure>
<!-- Deseñado por [Freepik](http://www.freepik.com/) -->
<hr>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.background</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"/background2.png"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> left center<span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>O valor de <code v-pre>cover</code> para <code v-pre>background-size</code> escala a imaxe sen deformala. Posicionamento da imaxe  <code v-pre>background-position: left center</code>.</p>
</li>
<li>
<p>Cambiar a posición do novo selector  <code v-pre>.background</code> na grella para que a imaxe se solape cos <code v-pre>header</code> e <code v-pre>footer</code>.</p>
</li>
</ul>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>footer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Engadir tres iconas en HTML - se aliñaran no lado esquerdo por defecto-. Espacialos aumentando as marxes entre as iconas.</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.fab</span> <span class="token punctuation">{</span> 
<span class="token property">font-size</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span>5rem<span class="token punctuation">;</span> 
<span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Unha vista previa do sitio. (Hai que facer algún traballo máis antes de poder dalo por rematado).</p>
<hr>
<figure><img src="@source/posts/assets/1HMIkc71qDR6DGc8hXQekkw.png" alt="bg fit" tabindex="0" loading="lazy"><figcaption>bg fit</figcaption></figure>
<hr>
<ul>
<li>Eliminar as cores de fondo do modelo orixinal.</li>
<li>Cambiar a cor do tipo de letra a negro declarando <code v-pre>color: black</code> no selector <code v-pre>body</code>.</li>
</ul>
<p>De novo, confiamos nas propiedades herdadas onde a cor da fonte será herdada polos fillos do elemento <code v-pre>body</code> (e netos e bisnetos... etc.).</p>
<hr>
<figure><img src="https://miro.medium.com/max/700/1*sHH8SUbryhZRMR_Atqh5-A.png" alt="bg fit" tabindex="0" loading="lazy"><figcaption>bg fit</figcaption></figure>
<hr>
<p><strong>Unha ligazón con estilo como un botón</strong></p>
<ul>
<li>
<p>Engadir estilos á ligazón de navegación para <em>Comezar</em>. <code v-pre>color: white</code></p>
</li>
<li>
<p>Engadir unha altura e un ancho ao logotipo e convertelo nun círculo usando a propiedade <code v-pre>border-radius</code>.</p>
</li>
</ul>
<p><em>Sempre que a altura e a anchura teñan a mesma lonxitude e o raio do bordo teña un valor igual ou superior ao 50 %, o elemento transformarase dun cadrado a un círculo.</em></p>
<hr>
<figure><img src="https://miro.medium.com/max/700/1*dTFhsOL_VzqZAixGjfJllg.png" alt="bg fit" tabindex="0" loading="lazy"><figcaption>bg fit</figcaption></figure>
<hr>
<ul>
<li>cambiar a propiedade <code v-pre>z-index</code> do logotipo</li>
<li>ou cambiar o <code v-pre>z-index</code> da cabeceira, que establece ao mesmo tempo o <code v-pre>z-index</code> dos seus fillos, é dicir, as ligazóns de navegación.</li>
</ul>
<p>Como os elementos superpostos cun <code v-pre>z-index</code> maior cobren os que teñen un máis pequeno, damos un valor de 1 para que sexa superior ao valor da imaxe.</p>
<hr>
<figure><img src="https://miro.medium.com/max/700/1*UVgFFQf4fnj9AFb59-fsOw.png" alt="bg fit" tabindex="0" loading="lazy"><figcaption>bg fit</figcaption></figure>
<hr>
<figure><img src="https://miro.medium.com/max/700/1*7XtCVkBJNnMseqT1B-H2YQ.png" alt="bg fit" tabindex="0" loading="lazy"><figcaption>bg fit</figcaption></figure>
<hr>
<h1 id="vista-mobil-1" tabindex="-1"><a class="header-anchor" href="#vista-mobil-1" aria-hidden="true">#</a> Vista móbil</h1>
<p>a imaxe destacada desaparece na vista do móbil?</p>
<p>Isto ocorre porque eliminamos a grella cando a páxina se mostra nunha pantalla pequena e o div que contén a imaxe agora ten unha altura de 0 xa que non lle declaramos unha altura nin ten contido <code v-pre>real</code>.</p>
<p>En lugar de engadirlle algo de altura, imos redeseñar a vista móbil.</p>
<hr>
<p>Engadir a imaxe usando a propiedade <code v-pre>background-image</code> do selector  <code v-pre>.grid-wrapper</code> e cambiamos o deseño de navegación de fila a columna.</p>
<p>Ter en conta que usaremos outra imaxe na que non se eliminaron os bordos. A imaxe anterior non se pode usar debido á <code v-pre>background-blend-mode</code>propiedade que vou usar.</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.grid-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>“/background.jpg”<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> lightgray<span class="token punctuation">;</span>
  <span class="token property">background-blend-mode</span><span class="token punctuation">:</span> screen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>Agora, o texto non se pode ler facilmente contra a imaxe debido ao choque de cores. Polo tanto, o xeito máis sinxelo é desvanecer as cores da imaxe de fondo. Non podo usar a propiedade <code v-pre>opacity</code> xa que iso tamén esvae o texto. Polo tanto, podemos usar o seguinte método:</p>
<ul>
<li>Engadir unha cor de fondo máis clara á imaxe de fondo e mestúraas ambas aplicando a declaración <code v-pre>background-blend-mode: screen</code>.</li>
</ul>
<hr>
<p>Aínda no texto, reduzo o espazo entre letras do subtítulo &quot;Páxina de destino&quot; para que se poida mostrar nunha soa liña.</p>
<hr>
<figure><img src="@source/posts/assets/1iTcM-GBIyoUDJkaVMwY8yw.png" alt="bg" tabindex="0" loading="lazy"><figcaption>bg</figcaption></figure>
<hr>
<h1 id="segunda-revision" tabindex="-1"><a class="header-anchor" href="#segunda-revision" aria-hidden="true">#</a> Segunda revisión</h1>
<p>A continuación, comprobar outros puntos de interrupción comprobando os diferentes tamaños de pantalla usando Chrome <a href="https://developers.google.com/web/tools/chrome-devtools" target="_blank" rel="noopener noreferrer">DevTools<ExternalLinkIcon/></a> .</p>
<p>Caramba... O meu pé de páxina xa non está fixado na parte inferior da páxina despois de que elimine a grade na vista móbil. Parece ben pero son un pouco esixente.</p>
<hr>
<figure><img src="@source/posts/assets/1PV1PPz836Uu4fz17RNRdoQ.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<hr>
<p>Para solucionar este problema, cambio <code v-pre>.grid-wrapper</code> a un contedor flexible e engadir un crecemento flexible a <code v-pre>aside</code> para que o pé de páxina volva ao fondo.</p>
<hr>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.grid-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">aside</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="final" tabindex="-1"><a class="header-anchor" href="#final" aria-hidden="true">#</a> Final</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com/css?family=Poppins&amp;display=swap<span class="token punctuation">"</span></span>
      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://use.fontawesome.com/releases/v5.5.0/css/all.css<span class="token punctuation">"</span></span>
      <span class="token attr-name">integrity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU<span class="token punctuation">"</span></span>
      <span class="token attr-name">crossorigin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>anonymous<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>ayt - demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigation<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>About Us<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Services<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Contact Us<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>get-started<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Get Started<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Web Design<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Landing Page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          reprehenderit inventore ipsum est omnis, totam deserunt temporibus rem
          optio quia obcaecati excepturi consectetur, harum facilis alias veniam
          laborum iure! Expedita?
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Learn More<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>background<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fab fa-instagram<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fab fa-twitter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fab fa-facebook-f<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sign-off<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          Created by
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://medium.com/@lim.aliceyt<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>aliceyt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>.
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">aside,
header,
footer,
article,
span</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">html,
body</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> san-serif<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.grid-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 3fr<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> min-content auto min-content<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">aside</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/2<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 2/3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">header</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/3<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1/2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">footer</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/3<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 3/4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1,
p</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 850px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.grid-wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.flex-wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.image</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*additional styles*/</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> -apple-system<span class="token punctuation">,</span> BlinkMacSystemFont<span class="token punctuation">,</span> <span class="token string">"Segoe UI"</span><span class="token punctuation">,</span> Roboto<span class="token punctuation">,</span> Oxygen<span class="token punctuation">,</span>
    Ubuntu<span class="token punctuation">,</span> Cantarell<span class="token punctuation">,</span> <span class="token string">"Open Sans"</span><span class="token punctuation">,</span> <span class="token string">"Helvetica Neue"</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">header</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1.5fr<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.logo</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.3rem<span class="token punctuation">;</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/2<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1/3<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #5d6bc0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">li</span> <span class="token punctuation">{</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#navigation</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 2/3<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1/2<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">aside</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/2<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1/3<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 6.5rem<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #074fe2<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 5rem<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 15px 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h3</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #03b19f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #074fe2<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 2px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.14<span class="token punctuation">)</span><span class="token punctuation">,</span>
    0 3px 1px -2px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.12<span class="token punctuation">)</span><span class="token punctuation">,</span> 0 1px 5px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.get-started</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 2px 10px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #074fe2<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.background</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 2/3<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1/4<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"./background2.png"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> left center<span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.fab</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.4rem<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 850px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.grid-wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"./background.jpg"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> lightgray<span class="token punctuation">;</span>
    <span class="token property">background-blend-mode</span><span class="token punctuation">:</span> screen<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 5.5rem<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">h3</span> <span class="token punctuation">{</span>
    <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 0.8rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">ul</span> <span class="token punctuation">{</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">justify-self</span><span class="token punctuation">:</span> end<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">li</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1px 5px 1px 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">li:last-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 5px 0<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">aside</span> <span class="token punctuation">{</span>
    <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.sign-off</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ul>
<li>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target="_blank" rel="noopener noreferrer">Basic Concepts of Flexbox by MDN<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" target="_blank" rel="noopener noreferrer">Flexbox by MDN<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" target="_blank" rel="noopener noreferrer">CSS Grid Layout by MDN<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noopener noreferrer">https://css-tricks.com/snippets/css/complete-guide-grid/<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://webdesign.tutsplus.com/articles/flexbox-vs-css-grid-which-should-you-use--cms-30184" target="_blank" rel="noopener noreferrer">CSS Grid vs. Flexbox: Which Should You Use and When? (tutsplus.com)<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.octobot.io/blog/grid-vs-flexbox/" target="_blank" rel="noopener noreferrer">Grid vs. Flexbox: What to Use and When? (octobot.io)<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://webdesign.tutsplus.com/series/understanding-the-css-grid-layout-module--cms-1079" target="_blank" rel="noopener noreferrer">Understanding the CSS Grid Layout Module<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://webdesign.tutsplus.com/tutorials/a-comprehensive-guide-to-flexbox-ordering-reordering--cms-31564" target="_blank" rel="noopener noreferrer">A Comprehensive Guide to Flexbox Ordering &amp; Reordering<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://webdesign.tutsplus.com/tutorials/a-comprehensive-guide-to-flexbox-sizing--cms-31948" target="_blank" rel="noopener noreferrer">A Comprehensive Guide to Flexbox Sizing<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://webdesign.tutsplus.com/tutorials/a-comprehensive-guide-to-flexbox-alignment--cms-30183" target="_blank" rel="noopener noreferrer">A Comprehensive Guide to Flexbox Alignment<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://medium.com/swlh/how-i-use-flexbox-to-create-a-one-page-website-81db78e61738" target="_blank" rel="noopener noreferrer">https://medium.com/swlh/how-i-use-flexbox-to-create-a-one-page-website-81db78e61738<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://betterprogramming.pub/how-i-use-css-grid-and-flexbox-to-create-a-one-page-website-part-2-e575edb422fe" target="_blank" rel="noopener noreferrer">https://betterprogramming.pub/how-i-use-css-grid-and-flexbox-to-create-a-one-page-website-part-2-e575edb422fe<ExternalLinkIcon/></a></p>
</li>
<li>
<p>Xeradores:</p>
<ul>
<li><a href="https://dev.to/theme_selection/css-grid-generator-55l9" target="_blank" rel="noopener noreferrer">https://dev.to/theme_selection/css-grid-generator-55l9<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<hr>
<p>xan2023</p>
</div></template>


