<template><div><h1 id="html-con-vscode" tabindex="-1"><a class="header-anchor" href="#html-con-vscode" aria-hidden="true">#</a> HTML con VSCode</h1>
<p>Visual Studio Code ofrece soporte básico para a programación HTML.</p>
<p>Resaltado de sintaxe, completado intelixente con IntelliSense, formato personalizable e soporte integrado para abreviaturas de Emmet.</p>
<h2 id="intellisense" tabindex="-1"><a class="header-anchor" href="#intellisense" aria-hidden="true">#</a> IntelliSense</h2>
<p>Ofrece suxestións de código que axudan a completar a escritura do mesmo.</p>
<figure><img src="@source/uf1841/assets/htmlintellisense.png" alt="HTML IntelliSense" tabindex="0" loading="lazy"><figcaption>HTML IntelliSense</figcaption></figure>
<p>Tamén podes traballar con CSS e JavaScript incorporados. Pero este soporte de linguaxe só mira o contido HTML.</p>
<p>Podes activar as suxestións en calquera momento premendo <code v-pre>Ctrl+Espazo</code>.</p>
<p>Se prefires non ver as suxestións correspondentes, podes variar a configuración de usuario ou a do espazo de traballo:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// Configures if the built-in HTML language suggests HTML5 tags, properties and values.</span>
<span class="token property">"html.suggest.html5"</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Podes activar/desactivar o peche automático das etiquetas coa seguinte <a href="https://code.visualstudio.com/docs/getstarted/settings" target="_blank" rel="noopener noreferrer">configuración<ExternalLinkIcon/></a> :</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"html.autoClosingTags"</span><span class="token operator">:</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="selector-de-cores" tabindex="-1"><a class="header-anchor" href="#selector-de-cores" aria-hidden="true">#</a> Selector de cores</h2>
<p>Selector de cores dispoñible nas seccións de estilo HTML.</p>
<figure><img src="@source/uf1841/assets/color-picker-html.png" alt="selector de cores en HTML" tabindex="0" loading="lazy"><figcaption>selector de cores en HTML</figcaption></figure>
<p>O selector aparece ao pasar o rato sobre unha definición de cor.</p>
<h2 id="pasa-o-rato" tabindex="-1"><a class="header-anchor" href="#pasa-o-rato" aria-hidden="true">#</a> Pasa o rato</h2>
<p>Move o rato sobre as etiquetas HTML ou estilos incrustados e JavaScript para obter máis información sobre o símbolo baixo o cursor.</p>
<figure><img src="@source/uf1841/assets/htmlhover.png" alt="Hover HTML" tabindex="0" loading="lazy"><figcaption>Hover HTML</figcaption></figure>
<h2 id="validacion" tabindex="-1"><a class="header-anchor" href="#validacion" aria-hidden="true">#</a> Validación</h2>
<p>O soporte de linguaxe HTML realiza a validación de todos os JavaScript e CSS incorporados.</p>
<p>Podes desactivar esa validación cos seguintes axustes:</p>
<div class="language-JSON line-numbers-mode" data-ext="JSON"><pre v-pre class="language-JSON"><code>// Configures if the built-in HTML language support validates embedded scripts.
&quot;html.validate.scripts&quot;: true,

// Configures if the built-in HTML language support validates embedded styles.
&quot;html.validate.styles&quot;: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pregado-de-codigo" tabindex="-1"><a class="header-anchor" href="#pregado-de-codigo" aria-hidden="true">#</a> Pregado de código</h2>
<p>Podes pregar rexións do código usando as iconas de dobrado da beira entre os números de liña e o inicio da liña.</p>
<p>Tamén podes crear os teus propios marcadores con comentarios para definir unha rexión para pregar:</p>
<p><code v-pre>&lt;!-- #region --&gt;</code>  ........... <code v-pre>&lt;!-- endregion --&gt;</code></p>
<h2 id="formato" tabindex="-1"><a class="header-anchor" href="#formato" aria-hidden="true">#</a> Formato</h2>
<p>Podes usar o comando <strong>Formatar documento</strong> <code v-pre>Maiúsculas+Alt+F</code>para formatar todo o arquivo ou <strong>Formatar a selección</strong> <code v-pre>Ctrl+K Ctrl+F</code> para formatar só o texto seleccionado.</p>
<h2 id="fragmentos-de-emmet" tabindex="-1"><a class="header-anchor" href="#fragmentos-de-emmet" aria-hidden="true">#</a> Fragmentos de Emmet</h2>
<p>VS Code admite a expansión de <a href="https://emmet.io/" target="_blank" rel="noopener noreferrer">fragmentos de Emmet<ExternalLinkIcon/></a> . As abreviaturas de Emmet aparecen xunto con outras suxestións e fragmentos na lista de autocompletado do editor.</p>
<figure><img src="https://code.visualstudio.com/assets/docs/languages/html/emmetsnippet.gif" alt="Soporte HTML de Emmet integrado" tabindex="0" loading="lazy"><figcaption>Soporte HTML de Emmet integrado</figcaption></figure>
<blockquote>
<p><strong>Consello:</strong> consulta a sección HTML da <a href="https://docs.emmet.io/cheat-sheet" target="_blank" rel="noopener noreferrer">folla de trucos de Emmet<ExternalLinkIcon/></a> para obter abreviaturas válidas.</p>
</blockquote>
<h3 id="proximos-pasos" tabindex="-1"><a class="header-anchor" href="#proximos-pasos" aria-hidden="true">#</a> Próximos pasos</h3>
<ul>
<li><a href="https://code.visualstudio.com/docs/editor/emmet" target="_blank" rel="noopener noreferrer">Emmet<ExternalLinkIcon/></a> : aprende sobre o poderoso soporte integrado de Emmet de VS Code.</li>
<li><a href="https://docs.emmet.io/" target="_blank" rel="noopener noreferrer">Documentación oficial de Emmet<ExternalLinkIcon/></a> - Emmet, o conxunto de ferramentas esencial para desenvolvedores web.</li>
</ul>
<p>NOV 2021</p>
<hr>
<h6 id="referencia" tabindex="-1"><a class="header-anchor" href="#referencia" aria-hidden="true">#</a> REFERENCIA</h6>
<ul>
<li><a href="https://code.visualstudio.com/docs/languages/html" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/docs/languages/html<ExternalLinkIcon/></a></li>
</ul>
</div></template>


