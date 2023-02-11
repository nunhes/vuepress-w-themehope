<template><div><h1 id="operacions-de-ensaio" tabindex="-1"><a class="header-anchor" href="#operacions-de-ensaio" aria-hidden="true">#</a> Operacións de ensaio</h1>
<p>Como propietario da xeadería e posto que ha adquirido algunas aptitudes de programación, ha decidido desarrollar un software para su negocio. Puede que un día convierta la heladería en unha cadena.</p>
<p>En primer lugar, quiere codificar todo lo que sabe sobre su negocio, como los distintos helados y los precios. A continuación, quiere simular interacciones de clientes. Por último, quiere calcular los beneficios y obtener más información útil.</p>
<h2 id="crear-negocio" tabindex="-1"><a class="header-anchor" href="#crear-negocio" aria-hidden="true">#</a> Crear negocio</h2>
<p>En primer lugar, inicie su imperio de heladerías mediante la codificación de todos los sabores de los que dispone.</p>
<ol>
<li>
<p>Cree un arquivo, llámelo <em>app.js</em> y agregue el siguiente contenido:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> iceCreamFlavors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Chocolate"</span><span class="token punctuation">,</span> <span class="token string">"Strawberry"</span><span class="token punctuation">,</span> <span class="token string">"Vanilla"</span><span class="token punctuation">,</span> <span class="token string">"Pistachio"</span><span class="token punctuation">,</span> <span class="token string">"Neapolitan"</span><span class="token punctuation">,</span> <span class="token string">"Mint Chip"</span><span class="token punctuation">,</span> <span class="token string">"Raspberry"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>A continuación, quiere clasificar los sabores por tipo y asignarle un precio a cada uno. Acaba por modificar el código de la siguiente manera:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> iceCreamFlavors <span class="token operator">=</span> <span class="token punctuation">[</span>
 <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Chocolate"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Chocolate"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
 <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Strawberry"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Fruit"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
 <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Vanilla"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Vanilla"</span><span class="token punctuation">,</span> price <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
 <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Pistachio"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Nuts"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">1.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
 <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Neapolitan"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Chocolate"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
 <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Mint Chip"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Chocolate"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">1.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Raspberry"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"Fruit"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ahora el elemento de la matriz ha pasado de cadenas a objetos. Ha realizado este cambio para anticiparse a los clientes que consultan los precios o los tipos de helado que tiene.</p>
</li>
</ol>
<h2 id="recepcion-de-clientes" tabindex="-1"><a class="header-anchor" href="#recepcion-de-clientes" aria-hidden="true">#</a> Recepción de clientes</h2>
<p>Quiere simular algunos escenarios de clientes en el código, para asegurarse de que la manera en que clasificó el inventario é lo suficientemente flexible.</p>
<ol>
<li>
<p>Antes de la primera transacción de cliente, se da cuenta de que necesita unha matriz <code v-pre>transactions</code>. Empieza a pensar en qué información desea guardar en cada transacción. El precio é definitivamente algo que debe guardar y probablemente también lo que compran los clientes. Agrega el código siguiente:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// { scoops: [], total: }</span>
<span class="token keyword">let</span> transactions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>A continuación, decide codificar transacciones mediante la adición del código siguiente:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>transactions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">scoops</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Chocolate"</span><span class="token punctuation">,</span> <span class="token string">"Vanilla"</span><span class="token punctuation">,</span> <span class="token string">"Mint Chip"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">5.5</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
transactions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">scoops</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Raspberry"</span><span class="token punctuation">,</span> <span class="token string">"StrawBerry"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
transactions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">scoops</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Vanilla"</span><span class="token punctuation">,</span> <span class="token string">"Vanilla"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Esto simula tres interacciones de clientes. A continuación, desea analizar el resultado.</p>
</li>
</ol>
<h2 id="analizar-el-negocio" tabindex="-1"><a class="header-anchor" href="#analizar-el-negocio" aria-hidden="true">#</a> Analizar el negocio</h2>
<p>Cuando se tiene un negocio, los beneficios son importantes, pero no son lo único que importa. ¿Qué é aquello que se vende tanto que necesita asegurarse de que haya existencias suficientes? También, ¿qué é lo que no se vende tanto, por lo que no é necesario tener tantas existencias?</p>
<ol>
<li>
<p>Para calcular las ganancias, agregue el código siguiente:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> total <span class="token operator">=</span> transactions<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> curr</span><span class="token punctuation">)</span> <span class="token operator">=></span> acc <span class="token operator">+</span> curr<span class="token punctuation">.</span>total<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">You've made </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>total<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> $ today</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// You've made 11.5 $ today</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Para averiguar cuánto ha vendido de cada sabor, agregue el código siguiente:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> flavorDistribution <span class="token operator">=</span> transactions<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> curr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  curr<span class="token punctuation">.</span>scoops<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">scoop</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>acc<span class="token punctuation">[</span>scoop<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      acc<span class="token punctuation">[</span>scoop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    acc<span class="token punctuation">[</span>scoop<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> acc<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// { Chocolate: 1, Vanilla: 3, Mint Chip: 1, Raspberry: 1, StrawBerry: 1 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>El código anterior repasa todas las transacciones. Para cada transacción, comprueba la cantidad de bolas de helado y actualiza un diccionario con la frecuencia de compra de cada sabor. Si estas ventas fueran reales, é probable que tuviera que tener más existencias de vainilla.</p>
</li>
</ol>
<p>Enhorabuena, ha abierto unha heladería. Ya sabe cómo codificar sabores y transacciones mediante matrices y objetos. También ha aprendido a hacer un resumen de sus ganancias y a identificar la cantidad de helado que ha vendido de cada sabor.</p>
<h1 id="resumen" tabindex="-1"><a class="header-anchor" href="#resumen" aria-hidden="true">#</a> Resumen</h1>
<p>Agora que conoce las matrices y bucles de JavaScript, puede empezar a pensar en formas de estructurar y organizar los datos en el código JavaScript.</p>
<p>Para practicar lo que ha aprendido, visite algunos de sus sitios web favoritos y tenga en cuenta los tipos de datos que usan. Por exemplo, considere la forma en que se agregan y quitan elementos de un carro de la compra en línea, o la forma como el equipo y las existencias de un jugador se agregan y quitan en un juego basado en explorador. Tenga en cuenta por qué y cómo se usan los bucles y matrices.</p>
<p>A medida que adquiera más conocimientos sobre matrices y bucles, empezará a tener en cuenta estos tipos de datos y métodos de almacenamiento en los sitios web que usa cada día.</p>
<p>✏️ Suxestión:</p>
<p>Las matrices de JavaScript tienen muchos métodos asociados que son útiles para la manipulación de datos. <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/" target="_blank" rel="noopener noreferrer">Lea estos métodos<ExternalLinkIcon/></a> y pruebe algunos de ellos (como <code v-pre>push</code>, <code v-pre>pop</code>, <code v-pre>slice</code> y <code v-pre>splice</code>) en unha matriz que haya creado.</p>
<hr>
<h1 id="suposto-con-variables" tabindex="-1"><a class="header-anchor" href="#suposto-con-variables" aria-hidden="true">#</a> Suposto con variables</h1>
<p>Como novo desarrollador de juegos, se le ha encargado la tarea de crear juegos recreativos para Internet. Su primera tarea consiste en  empezar a trabajar en el juego de cartas Texas Hold'em. En lugar de que  los jugadores apuesten dinero, usará puntos para representar las fichas  de póker.</p>
<h2 id="modelado-del-estado-del-juego" tabindex="-1"><a class="header-anchor" href="#modelado-del-estado-del-juego" aria-hidden="true">#</a> Modelado del estado del juego</h2>
<p>Debe tomar lo que sabe de Texas Hold'em y crear variables para almacenar valores de cartas. Al hacerlo, debe pensar en los <em>valores de inicio</em> y en los valores que cambiarán con el tiempo.</p>
<p>Sabe que en el Texas Hold'em hay jugadores, cartas iniciales y  puntos. Intente montar unha estructura de juego básica mediante  variables.</p>
<ol>
<li>
<p>Cree un arquivo denominado <em>app.js</em>:</p>
<p>Bash</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">touch</span> app.js
code <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ahora debería tener un editor abierto en el shell.</p>
<p>Agregue el siguiente código al arquivo:</p>
<p>JavaScript</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> startingPokerChips <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// points</span>
<span class="token keyword">let</span> players <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> noOfStarterCards <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ahora tiene tres variables para representar el estado inicial del juego.</p>
<p>Cree variables que representen a jugadores concretos. Agregue el código siguiente:</p>
<p>JavaScript</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> playerOnePoints <span class="token operator">=</span> startingPokerChips<span class="token punctuation">;</span>
<span class="token keyword">let</span> playerTwoPoints <span class="token operator">=</span> startingPokerChips<span class="token punctuation">;</span>
<span class="token keyword">let</span> playerThreePoints <span class="token operator">=</span> startingPokerChips<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ha creado los puntos de partida de tres jugadores asignándoles la variable <code v-pre>startingPokerChips</code>, que contiene el valor <code v-pre>100</code>.</p>
<p>Muestre unha ronda del juego específica y cómo unha asignación  puede representar un estado del juego. Agregue las siguientes líneas al  código:</p>
<p>JavaScript</p>
<ol>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>playerOnePoints <span class="token operator">-=</span> <span class="token number">50</span><span class="token punctuation">;</span>
playerTwoPoints <span class="token operator">-=</span><span class="token number">25</span><span class="token punctuation">;</span>
playerThreePoints <span class="token operator">+=</span><span class="token number">75</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>Ha simulado correctamente unha ronda del juego en la que el primer y  el segundo jugador han apostado 50 y 25 puntos respectivamente. Dado que el tercer jugador tiene unha mejor mano, este termina ganando la ronda.  El juego toma los puntos del primer y el segundo jugador y los agrega al bote del tercer jugador.</p>
<h2 id="refactorizacion-a-constantes" tabindex="-1"><a class="header-anchor" href="#refactorizacion-a-constantes" aria-hidden="true">#</a> Refactorización a constantes</h2>
<p>En este punto, tiene algunas variables que representan partes del  juego de cartas. Recuerde que tiene constantes disponibles, que son  variables que no deben cambiar su valor. Veamos qué variables se podrían prestar para representarse mejor como constantes en el código fuente.</p>
<p>✏️ Suxestión:</p>
<p>Dedique uno o dos minutos a pensar en qué variables no deben cambiar y qué variables podrían tener valores cambiantes. A continuación,  desplácese hacia abajo para ver la solución.</p>
<ol>
<li>
<p>En la parte superior del arquivo, cambie el código siguiente:</p>
<p>JavaScript</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> startingPokerChips <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// points</span>
<span class="token keyword">let</span> players <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> noOfStarterCards <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>... por este código:</p>
<p>JavaScript</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">STARTING_POKER_CHIPS</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// points</span>
<span class="token keyword">const</span> <span class="token constant">PLAYERS</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">NO_OF_STARTER_CARDS</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ha identificado correctamente qué variables son importantes para el  juego. También describen cómo se juega. Las fichas iniciales de un  jugador no cambiarán, incluso si el bote de un jugador determinado  cambia durante el juego. El número de jugadores también é constante, a  menos que imagine que podría recompilar el juego de forma que un jugador pueda unirse en cualquier momento. El número de cartas iniciales  siempre é dos en el Texas Hold'em. Como desarrollador de juegos, tiene  la capacidad de decidir en última instancia qué debe ser modificable y  qué debe ser constante.</p>
<p>✏️ Suxestión:</p>
<p>Una excelente manera de pensar en las variables é convertir todas  las variables en constantes para empezar. A continuación, decida si el  valor de unha variable tendrá que cambiar en el futuro. En tal caso,  cámbiela de <code v-pre>const</code> a <code v-pre>let</code>.</p>
<p>Asegúrese de cambiar el código dependiente, para que el código se siga compilando:</p>
<p>JavaScript</p>
<ol>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> playerOnePoints <span class="token operator">=</span> <span class="token constant">STARTING_POKER_CHIPS</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> playerTwoPoints <span class="token operator">=</span> <span class="token constant">STARTING_POKER_CHIPS</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> playerThreePoints <span class="token operator">=</span> <span class="token constant">STARTING_POKER_CHIPS</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>¡Enhorabuena! Ha empezado a trabajar en unha base de código de  JavaScript que implementa Texas Hold'em. Al hacerlo, ha determinado  cuáles son los valores de inicio, qué valores pueden cambiar y cómo  cambiar los valores.</p>
<hr>
<h2 id="siguiente-unidad-tipos-de-datos" tabindex="-1"><a class="header-anchor" href="#siguiente-unidad-tipos-de-datos" aria-hidden="true">#</a> Siguiente unidad: Tipos de datos</h2>
<h1 id="ejercicio-tipos-de-datos" tabindex="-1"><a class="header-anchor" href="#ejercicio-tipos-de-datos" aria-hidden="true">#</a> Ejercicio - Tipos de datos</h1>
<p>​				 				Completado 			 			100 XP</p>
<ul>
<li>3 minutos</li>
</ul>
<p>Espacio aislado activado Tiempo restante:</p>
<p>​</p>
<p>​</p>
<p>Ha usado 1 de los 10 espacios aislados de hoy. Mañana habrá disponibles más espacios aislados.</p>
<p>Su empresa está satisfecha con el modelado anterior del Texas  Hold'em y desea ver que sigue trabajando en su implementación. Ya sabe  más sobre los tipos de datos, así que vamos a poner esos conocimientos  en práctica.</p>
<h2 id="adicion-de-tipos-de-datos" tabindex="-1"><a class="header-anchor" href="#adicion-de-tipos-de-datos" aria-hidden="true">#</a> Adición de tipos de datos</h2>
<p>Para empezar, vamos a revisar el código siguiente que ha creado hasta ahora:</p>
<p>JavaScript</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">STARTING_POKER_CHIPS</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// points</span>
<span class="token keyword">const</span> <span class="token constant">PLAYERS</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">NO_OF_STARTER_CARDS</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> playerOnePoints <span class="token operator">=</span> <span class="token constant">STARTING_POKER_CHIPS</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> playerTwoPoints <span class="token operator">=</span> <span class="token constant">STARTING_POKER_CHIPS</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> playerThreePoints <span class="token operator">=</span> <span class="token constant">STARTING_POKER_CHIPS</span><span class="token punctuation">;</span>

playerOnePoints <span class="token operator">-=</span> <span class="token number">50</span><span class="token punctuation">;</span>
playerTwoPoints <span class="token operator">-=</span><span class="token number">25</span><span class="token punctuation">;</span>
playerThreePoints <span class="token operator">+=</span><span class="token number">75</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tiene ciertos aspectos del juego representados como variables, pero  carece de otros aspectos, como saber si el juego ha finalizado. Además,  sería bueno que los jugadores tuvieran nombres.</p>
<ol>
<li>
<p>Después de las tres constantes, agregue el siguiente código:</p>
<p>JavaScript</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> playerOneName <span class="token operator">=</span> <span class="token string">"Chloe"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> playerTwoName <span class="token operator">=</span> <span class="token string">"Jasmine"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> playerThreeName <span class="token operator">=</span> <span class="token string">"Jen"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ahora tiene tres variables para representar los nombres de los  jugadores. Vamos a agregar texto de introducción para que se note que é un juego. Después del código siguiente:</p>
<p>JavaScript</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> playerOnePoints <span class="token operator">=</span> <span class="token constant">STARTING_POKER_CHIPS</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> playerTwoPoints <span class="token operator">=</span> <span class="token constant">STARTING_POKER_CHIPS</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> playerThreePoints <span class="token operator">=</span> <span class="token constant">STARTING_POKER_CHIPS</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>... agregue código para representar el inicio del juego:</p>
<p>JavaScript</p>
<ol>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Welcome to Texas Hold'em. The championship title will be awarded to one of these three players: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>playerOneName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>playerTwoName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> and </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>playerThreeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. Each player has </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">STARTING_POKER_CHIPS</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> in their pot. We have an exciting game ahead of us. May the best player win!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="adicion-de-unha-condicion-de-fin" tabindex="-1"><a class="header-anchor" href="#adicion-de-unha-condicion-de-fin" aria-hidden="true">#</a> Adición de unha condición de fin</h2>
<p>Una partida de Texas Hold'em puede alargarse durante muchas rondas y  normalmente finaliza cuando un jugador tiene todas las fichas y los  demás jugadores han perdido las suyas. Debe agregar código para  representar este estado. En esta situación conviene confiar en los  operadores y usar un tipo de datos booleano.</p>
<ol>
<li>
<p>Agregue el código siguiente en la parte superior del arquivo:</p>
<p>JavaScript</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> gameHasEnded <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ya tiene unha variable para representar el final del juego. Más  adelante, deberá encontrar unha manera de volver a evaluar el valor de  esta variable y determinar si se debe detener el juego y designar un  ganador.</p>
<p>Agregue el código siguiente para evaluar el estado del juego:</p>
<p>JavaScript</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>gameHasEnded <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>playerOnePoints <span class="token operator">+</span> playerTwoPoints<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token comment">// three has won</span>
               <span class="token punctuation">(</span><span class="token punctuation">(</span>playerTwoPoints <span class="token operator">+</span> playerThreePoints<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span>  <span class="token comment">// one has won</span>
               <span class="token punctuation">(</span><span class="token punctuation">(</span>playerOnePoints <span class="token operator">+</span> playerThreePoints<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// two has won </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Game has ended: "</span><span class="token punctuation">,</span> gameHasEnded<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>El código completo debe ser similar al siguiente:</p>
<p>JavaScript</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">STARTING_POKER_CHIPS</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// points</span>
<span class="token keyword">const</span> <span class="token constant">PLAYERS</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">NO_OF_STARTER_CARDS</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> gameHasEnded <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> playerOneName <span class="token operator">=</span> <span class="token string">"Chloe"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> playerTwoName <span class="token operator">=</span> <span class="token string">"Jasmine"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> playerThreeName <span class="token operator">=</span> <span class="token string">"Jen"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Welcome to Texas Hold'em. The championship title will be awarded to one of these three players: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>playerOneName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>playerTwoName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, and </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>playerThreeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. Each player has </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">STARTING_POKER_CHIPS</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> in their pot. We have an exciting game ahead of us. May the best player win!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> playerOnePoints <span class="token operator">=</span> <span class="token constant">STARTING_POKER_CHIPS</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> playerTwoPoints <span class="token operator">=</span> <span class="token constant">STARTING_POKER_CHIPS</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> playerThreePoints <span class="token operator">=</span> <span class="token constant">STARTING_POKER_CHIPS</span><span class="token punctuation">;</span>

playerOnePoints <span class="token operator">-=</span> <span class="token number">50</span><span class="token punctuation">;</span>
playerTwoPoints <span class="token operator">-=</span><span class="token number">25</span><span class="token punctuation">;</span>
playerThreePoints <span class="token operator">+=</span><span class="token number">75</span><span class="token punctuation">;</span> 

gameHasEnded <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>playerOnePoints <span class="token operator">+</span> playerTwoPoints<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token comment">// three has one</span>
               <span class="token punctuation">(</span><span class="token punctuation">(</span>playerTwoPoints <span class="token operator">+</span> playerThreePoints<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span>  <span class="token comment">// one has won</span>
               <span class="token punctuation">(</span><span class="token punctuation">(</span>playerOnePoints <span class="token operator">+</span> playerThreePoints<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// two has won </span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Game has ended: "</span><span class="token punctuation">,</span> gameHasEnded<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Para ejecutar el juego, escriba el código siguiente en el terminal:</p>
<p>JavaScript</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>node app<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Debería aparecer la salida siguiente:</p>
<p>Resultados</p>
<ol>
<li>
<div class="language-output line-numbers-mode" data-ext="output"><pre v-pre class="language-output"><code>Welcome to Texas Hold'em. The championship title will be awarded to one of these three players: Chloe, Jasmine, and Jen. Each player has 100 in their pot. We have an exciting game ahead of us. May the best player win!
Game has ended: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>✏️ Suxestión:</p>
<p>Pruebe a cambiar <code v-pre>playerOnePoints</code> y <code v-pre>playerTwoPoints</code> a <code v-pre>0</code> y vuelva a ejecutar la aplicación. ¿Hay alguna diferencia en el resultado?</p>
<hr>
<h2 id="siguiente-unidad-resumen" tabindex="-1"><a class="header-anchor" href="#siguiente-unidad-resumen" aria-hidden="true">#</a> Siguiente unidad: Resumen</h2>
</div></template>


