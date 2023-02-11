<template><div><h1 id="unidades-de-medida-en-css" tabindex="-1"><a class="header-anchor" href="#unidades-de-medida-en-css" aria-hidden="true">#</a> Unidades de medida en CSS</h1>
<hr>
<p>En CSS tamén hai tipos de datos, as unidades de medida en CSS son un tipo de dato.</p>
<hr>
<p>Os tipos de datos basicamente son o valor que asignamos a calquera propiedade.</p>
<hr>
<p>Estes valores (tipos de datos) poden ser de diferentes tipos, por exemplo as unidades CSS son un tipo de dato</p>
<p>Outros tipos son as <code v-pre>keywords</code> palabras reservadas ou ou palabras clave como <code v-pre>auto</code>, <code v-pre>solid</code>, <code v-pre>all</code>,... ou os valores de cor - <code v-pre>#aabbcc</code>, <code v-pre>transparent,...</code>.</p>
<hr>
<p>Algunhas propiedades CSS, como por exemplo <code v-pre>width</code>, <code v-pre>margin</code>, <code v-pre>font-size</code> reciben valores de lonxitude (<code v-pre>px</code>, <code v-pre>em</code>, <code v-pre>rem</code>, etc..). Este tipo de dato <em>denota medidas de distancia e serven para expresar unha dimensión</em>.</p>
<hr>
<p>Dito doutro xeito: as unidades de medida - sexa cal sexa a que escollas - son fundamentais no código CSS da túa páxina.</p>
<p>Están presentes en practicamente todo o proxecto no modelo de caixa, o posicionamento, os tamaños dos elementos,...  Así que as veremos en propiedades como <code v-pre>font-size</code> , <code v-pre>margin</code> , <code v-pre>padding</code> , etc.</p>
<hr>
<p>Todas se representa por un número seguido da súa unidade de medida (sen espazos).</p>
<hr>
<p>De xeito xenérico podemos distribuílos en dous grandes grupos: <strong>medidas absolutas</strong> e <strong>medidas relativas</strong>.</p>
<hr>
<h2 id="medidas-absolutas" tabindex="-1"><a class="header-anchor" href="#medidas-absolutas" aria-hidden="true">#</a> medidas absolutas</h2>
<p>As <strong>medidas absolutas</strong> son <em>medidas físicas</em> (<code v-pre>cm, in, mm, pc, pt</code>) e a unidade <code v-pre>px</code>.</p>
<p>Estas unidades se representan exactamente no tamaño que se lle da. O valor dado é o que se aplica sen mediar calculo ou referencia algunha.</p>
<p>As medidas absolutas,  <strong>non son nada recomendables para a pantalla</strong> . Aínda que sexan as máis axeitadas <strong>para imprimir</strong>, xa que os medios impresos adoitan medirse nesas unidades.</p>
<hr>
<figure><img src="@source/uf1841/assets/unidades-absolutas.png" alt="Unidades absolutas en CSS" tabindex="0" loading="lazy"><figcaption>Unidades absolutas en CSS</figcaption></figure>
<hr>
<p>Só para facernos unha idea, a relación entre as medidas físicas absolutas é a seguinte:</p>
<h2 id="_1in-2-54cm-25-4mm-72pt-6pc" tabindex="-1"><a class="header-anchor" href="#_1in-2-54cm-25-4mm-72pt-6pc" aria-hidden="true">#</a> <strong>1in = 2.54cm = 25.4mm = 72pt = 6pc</strong></h2>
<hr>
<p>Por outra banda, e dentro deste mesmo grupo de <strong>medidas absolutas</strong>, temos a unidade <code v-pre>px</code>: o píxel.</p>
<p>Un píxel CSS é igual a un píxel do dispositivo, ou o que é o mesmo, a un punto da pantalla.</p>
<hr>
<h2 id="medidas-relativas" tabindex="-1"><a class="header-anchor" href="#medidas-relativas" aria-hidden="true">#</a> medidas relativas</h2>
<p>Como o nome indica, son relativas a outro valor e exprésanse en relación porcentual con dito valor referencial.</p>
<p>Son escalables con respecto ao mesmo.</p>
<hr>
<p>A vantaxe é que manterán as proporcións do deseño da páxina, polo que son moi <strong>recomendables para traballar na pantalla</strong>.</p>
<hr>
<p>Estes valores establécense tomando como referencia:</p>
<h3 id="a-o-tamano-das-fontes" tabindex="-1"><a class="header-anchor" href="#a-o-tamano-das-fontes" aria-hidden="true">#</a> a) o tamaño das fontes</h3>
<hr>
<ol>
<li><strong>rem:</strong> É sempre relativo ao tamaño de fonte do elemento raíz que é <code v-pre>html</code>. Por defecto, a etiqueta <code v-pre>html</code>ten un tamaño de fonte de <code v-pre>16px</code>, polo que <code v-pre>1rem</code> será igual a <code v-pre>16px</code>. A maioría dos navegadores teñen este estándar no tamaño base da fonte que se asigna ao texto que vemos nun documento HTML - excluíndo os encabezados e o elemento <code v-pre>small</code>, entre outros-.</li>
</ol>
<hr>
<ol start="2">
<li><strong>em:</strong> As unidades <code v-pre>em</code> para a propiedade <code v-pre>font-size</code>serán relativas ao <code v-pre>font-size</code> do elemento pai. Noutras propiedades que non sexan <code v-pre>font-size</code> serán relativas ao <code v-pre>font-size</code> elemento actual.</li>
</ol>
<hr>
<ol start="3">
<li>
<p><strong>ex:</strong> Baseada na altura da “x” minúscula da fonte do elemento (depende da tipografía utilizada). A unidade <code v-pre>ex</code> é a metade do tamaño da fonte establecida polo navegador do usuario - que polo regular é <code v-pre>16px = 1em</code>, entón a metade de <code v-pre>16px</code> é <code v-pre>8</code>, polo que <code v-pre>8/16 = 0.5</code>, polo que <code v-pre>1ex</code> é igual a <code v-pre>.5em</code>.</p>
<hr>
<figure><img src="@source/uf1841/assets/x-height.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<hr>
</li>
<li>
<p><strong>cap:</strong> Baseada na altura das letras maiúsculas da fonte actual do elemento.</p>
</li>
<li>
<p><strong>ch:</strong> Baseada na anchura do glifo “0” da letra do elemento.</p>
<hr>
<figure><img src="@source/uf1841/assets/o3h1avbum3sw47a3coch.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<hr>
</li>
<li>
<p><strong>ic:</strong> É unha medida nova que ten que ver coa anchura dos glifos. Para máis información pode consultar a especificación do w3c.</p>
</li>
<li>
<p><strong>lh:</strong> Altura de liña do elemento.</p>
</li>
<li>
<p><strong>rlh:</strong> Altura de liña do elemento raíz (html).</p>
</li>
</ol>
<hr>
<h3 id="b-o-viewport-fiestra-ou-pantalla-de-visualizacion" tabindex="-1"><a class="header-anchor" href="#b-o-viewport-fiestra-ou-pantalla-de-visualizacion" aria-hidden="true">#</a> b) o viewport - fiestra ou pantalla de visualización</h3>
<ol>
<li>Fiestra ou pantalla de visualización <strong>vw</strong> : en relación ao ancho da pantalla.</li>
<li><strong>vh</strong> – Relativo á altura da pantalla.</li>
<li><strong>vmin</strong> – Toma como referencia o valor máis pequeno entre vw e vh.</li>
<li><strong>vmax</strong> – Toma como referencia o maior valor entre vw e vh.</li>
</ol>
<hr>
<figure><img src="@source/uf1841/assets/unidades-relativas-em.png" alt="bg fit" tabindex="0" loading="lazy"><figcaption>bg fit</figcaption></figure>
<hr>
<table>
<thead>
<tr>
<th><strong>medidas absolutas</strong></th>
<th><strong>medidas relativas</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>px</strong> píxel<br>Aínda que é unha medida absoluta, é realmente relativa ao dispositivo de visualización (sexa impresión ou pantalla)<br><strong>1px CSS = 1 punto de pantalla</strong>.<br>O píxel utilízase cando se quere ter un maior control das dimensións pero non sempre é a mellor opción cando se trata de páxinas web que se adaptan a calquera dispositivo (responsive) xa que o resultado será idéntico en todas as pantallas independentemente do tamaño.</td>
<td><strong>em</strong><br>Relativo ao tamaño da fonte do elemento pai.<br>Se ese elemento non ten un tamaño de letra definido, hérdao do pai, avó, etc. ata chegar ao html ou raíz (:root).<br><strong>1em</strong> será igual ao valor da propiedade <code v-pre>font-size</code> que se está a usar por defecto, que sen cambios no documento CSS calculase como <strong>1 em = 16 píxeles</strong><br><strong><code v-pre>.container { font-size: 1.3em; }</code> = <code v-pre>.container { font-size: 20,8 px; }</code></strong></td>
</tr>
<tr>
<td><strong>mm</strong> milímetro</td>
<td><strong>rem</strong> raíz em<br>Relativo ao tamaño da fonte do html ou raíz (:root).<br>Dado que por defecto, un documento HTML ten un tamaño de letra de 16px, 1rem sempre será igual a 16px <strong>a non ser que o cambiemos no elemento raíz</strong>.</td>
</tr>
<tr>
<td><strong>cm</strong> centímetro1 cm = 10 mm = 37,8 píxeles</td>
<td><strong>ex</strong><br>Relativo á altura x da fonte.<br><strong>1ex = 0,5 em</strong><br>A diferenza da unidade <code v-pre>em</code>, a unidade <code v-pre>ex</code> cambia o seu valor se se cambia a familia de fontes.</td>
</tr>
<tr>
<td><strong>en</strong> polgada1 polgada = 2,54 cm = 96 píxeles</td>
<td><strong>ch</strong> <br>Relativo a 0 (cero)Funciona igual que a unidade anterior excepto polo glifo ao que fai referencia. Ademais, o seu tamaño tamén cambia se se cambia a familia de fontes á súa vez.</td>
</tr>
<tr>
<td><strong>pt</strong> punto1 punto = 1/72 polgadaEsta medida adoita utilizarse para imprimir.</td>
<td><strong>vw</strong> ancho da vista<br>Relativo ao ancho da pantalla.1vw = 1% do ancho da pantalla.</td>
</tr>
<tr>
<td><strong>pc</strong> pica1 unidade = 12 puntos</td>
<td><strong>vh</strong> altura da vista<br>Relativo á altura da pantalla.<br><strong>1vh = 1% da altura da pantalla</strong>.</td>
</tr>
<tr>
<td></td>
<td><strong>vmin</strong><br>Toma como referencia o menor valor existente entre <code v-pre>vw</code> e <code v-pre>vh</code>.<br><strong>1vmin = 1%</strong> do valor máis baixo da pantalla (<code v-pre>vw</code> ou <code v-pre>vh</code>)</td>
</tr>
<tr>
<td></td>
<td><strong>vmax</strong> <br>Toma como referencia o maior valor existente entre <code v-pre>vw</code> e <code v-pre>vh</code>. <br><strong>1vmax = 1 % do valor máis grande na pantalla (<code v-pre>vw</code> ou <code v-pre>vh</code>)</strong>.</td>
</tr>
<tr>
<td></td>
<td><strong>%</strong> porcentaxe <br>Relativo á medida da mesma propiedade do seu elemento pai. <br>Por exemplo, se un elemento ten un ancho ancho: 1200px; e o seu fillo ten un ancho: 50%; o valor será igual á metade de 1200px.</td>
</tr>
</tbody>
</table>
<p>As <strong>medidas relativas son máis vantaxosas para traballar en pantalla porque son escalables e flexibles</strong> . Máis se se busca adaptar o deseño a calquera dispositivo ( <strong>responsivo</strong> ).</p>
<hr>
<figure><img src="@source/uf1841/assets/em-ex-normal-font.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<hr>
<p>Elixir unha ou outra depende de ti: a que te faga sentir máis cómodo e por suposto, a que mellor se adapte ao tipo de proxecto no que estás a traballar será unha boa opción.</p>
<hr>
<figure><img src="@source/uf1841/assets/vmin.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<hr>
<h2 id="calculo-de-ancho-e-alto" tabindex="-1"><a class="header-anchor" href="#calculo-de-ancho-e-alto" aria-hidden="true">#</a> Cálculo de ancho e alto</h2>
<p>Os atributos <strong>width</strong> e <strong>height</strong> definen o ancho e o alto dos elementos HTML, son moi utilizados para definir a disposición da páxina, especialmente nos elementos contenedores (div, p, etc.). É importante ter en conta a que se refiren estes valores, xa que ás veces se comete o erro de crer que inclúen partes que realmente non inclúen.</p>
<p>Os atributos <strong>width</strong> e <strong>height</strong> definen o ancho e o alto dos elementos HTML, pero só inclúen o contido da etiqueta, non o <strong>recheo</strong> <strong>,</strong> a marxe <strong>ou</strong> o <strong>bordo</strong> .</p>
<p>Imos explicar o caso do <strong>ancho</strong> co seguinte esquema (a <strong>altura</strong> sería similar):</p>
<figure><img src="@source/uf1841/assets/modelo_cajas_anchos.svg" alt="Modelo de caixa CSS.  Anchura total box-sizing: content-box" tabindex="0" loading="lazy"><figcaption>Modelo de caixa CSS.  Anchura total box-sizing: content-box</figcaption></figure>
 <img src="@source/uf1841/assets/screencapture-aulaclic-es-html-graficos-modelo-cajas-anchos-svg-2023-01-24-23_26_35.png" alt="screencapture-aulaclic-es-html-graficos-modelo-cajas-anchos-svg-2023-01-24-23_26_35" style="zoom:50%;" />
<p>O esquema corresponde á definición dun contedor (por exemplo div ) con estes atributos:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>div {ancho: 200px; ancho do bordo: 5px; acolchado: 20px; marxe: 100px }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Por defecto (sen definir o <strong>tamaño da caixa</strong> ) debemos reservar un espazo de 450 px na nosa disposición de páxina, xa que debemos engadir o <strong>recheo</strong> e o <strong>bordo ao</strong> <strong>ancho</strong> do contido , e despois engadir a <strong>marxe</strong> . É dicir, 200 px, que ocupa o contido, máis 100 px, para cada lado da <strong>marxe</strong> ; outros 5px. a cada lado da <strong>fronteira</strong> ; outros 20px. para cada lado do <strong>acolchado</strong> .</p>
<p>Esta forma de calcular o ancho do modelo de caixa non é a máis intuitiva, e provocou numerosos erros no deseño, nalgúns casos pola súa complexidade e noutros por descoñecemento de como se calcula o ancho.</p>
<p>Afortunadamente, está a propiedade <strong>do tamaño da caixa</strong> que imos ver a continuación.</p>
<hr>
<h2 id="box-sizing" tabindex="-1"><a class="header-anchor" href="#box-sizing" aria-hidden="true">#</a> box-sizing</h2>
<p>A propiedad <strong>box-sizing</strong> indica cómo se calcula el ancho y alto de la etiqueta correspondiente. Tiene dos valores: <strong>content-box</strong> y <strong>border-box</strong>:</p>
<p>- <strong>content-box</strong>, el ancho y el alto se calculan teniendo en cuenta sólo el <strong>contenido</strong>, <strong>sin incluir</strong> el <strong>border</strong> y el <strong>padding</strong>. Es el valor por defecto.</p>
<p>- <strong>border-box</strong>, el ancho y el alto se calculan teniendo en cuenta el <strong>contenido</strong> y <strong>también</strong> el <strong>border</strong> y el <strong>padding</strong>. Es decir, el <strong>border</strong> y el <strong>padding</strong> están incluidos en el ancho y alto.</p>
<p>El caso de <strong>content-box</strong> lo hemos explicado en el punto anterior, ahora vamos a ver un esquema para ver el caso de <strong>border-box</strong>:</p>
<figure><img src="@source/uf1841/assets/modelo_cajas_anchos_border.svg+xml" alt="Modelo de caja CSS. Anchura total box-sizing: border-box" tabindex="0" loading="lazy"><figcaption>Modelo de caja CSS. Anchura total box-sizing: border-box</figcaption></figure>
<p>El esquema corresponde a la definición de un contenedor (por ejemplo div) con estos atributos:</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span> 
    <span class="token property">box-size</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span> 
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> 
    <span class="token property">border-width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span> 
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> 
    <span class="token property">margin</span><span class="token punctuation">:</span> 100px <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>El espacio que debemos reservar en nuestro diseño de la página es de 400 px., que corresponden al <strong>width</strong> del contenido y al <strong>margin</strong>. Es decir, 200 px, que ocupa el contenido, más 100 px, por cada lado del margin. En este caso los 5 px. por cada lado del <strong>border</strong>, y los 20 px. por cada lado del <strong>padding</strong>, <strong>ya están incluidos</strong> en el <strong>width</strong> del contenido.</p>
<p>A continuación puedes ver un primer ejemplo con box-sizing: border-box y un segundo ejemplo con el valor por defecto, box-sizing: content-box.</p>
<p>El resto de valores son igual para ambos ejemplos: border-width: 5px; border-style: solid; border-color: royalblue; padding: 20px; width: 200px; margin-left: 100px; margin-right: 100px;</p>
<p>Observa la diferencia de anchura.</p>
<p>Ejemplo con box-sizing: border-box :</p>
<p>Párrafo uno. Lorem ipsum dolor sit amet, consectetur adipisicing elit. eligendi porro ius soluta in voluptates voluptatem, nesciunt dolorem obcaecati nemo eligendi porro iusto, earum debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<p>Ejemplo con box-sizing: content-box :</p>
<p>Párrafo uno. Lorem ipsum dolor sit amet, consectetur adipisicing elit. eligendi porro ius soluta in voluptates voluptatem, nesciunt dolorem obcaecati nemo eligendi porro iusto, earum debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<hr>
<p>XAN2023</p>
<hr>
<p><a href="https://pensandoenweb.es/unidades-medida-css/" target="_blank" rel="noopener noreferrer">Tipos de unidades de medida en CSS. Recomendaciones para trabajar. (pensandoenweb.es)<ExternalLinkIcon/></a></p>
<p><a href="https://dev.to/lupitacode/unidades-de-medida-en-css-fundamentos-4n0g" target="_blank" rel="noopener noreferrer">https://dev.to/lupitacode/unidades-de-medida-en-css-fundamentos-4n0g<ExternalLinkIcon/></a></p>
<p><a href="https://www.freecodecamp.org/news/html-role-attribute/" target="_blank" rel="noopener noreferrer">https://www.freecodecamp.org/news/html-role-attribute/<ExternalLinkIcon/></a></p>
</div></template>


