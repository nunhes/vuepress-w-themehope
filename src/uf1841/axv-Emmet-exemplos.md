# Emmet

Emmet é un recurso para a escritura rápida de código, dispoñible coma complemento para a maioría dos editores de código modernos, e agora integrada de inicio en VSCode.

Empregando as abreviaturas e comandos de Emmet podemos acortar o tempo de desenvolvemento.

Pódese empregar Emmet para acelerar o proceso de escritura de código HTML e tamén CSS.

As abreviaturas non son unha linguaxe de marcado, só un procedemento para acelerar o seu despregue.

\* **Tampouco é necesario que perdas moito tempo nin te preocupes por redactar a abreviatura máis complexa e extensa posible. E máis aconsellable despregar pequenas abreviaturas para solucionar rapidamente problemas concretos.**

## A sintaxe das abreviaturas

Emmet usa unha sintaxe - similar aos selectores CSS- para **describir as posicións dos elementos** dentro da árbore xerada e os **atributos dos elementos**.

### Elementos

Podes usar nomes de elementos como `div` ou `p` para *xerar* etiquetas HTML. Emmet non ten un conxunto predefinido de nomes de etiquetas dispoñibles, pode escribir calquera palabra e transformala nunha etiqueta: `div`→ `<div></div>`, `foo`→ `<foo></foo>`etc.

### Operadores de aniñado

Os operadores de aniñado utilízanse para situar uns elementos da abreviatura dentro da árbore xerada: se debe colocarse dentro ou preto do elemento de referencia.

#### Neno: `>`

Podes usar o operador `>` para aniñar elementos uns dentro doutros:

```css
div>ul>li
```

... xerará

```html
<div>
    <ul>
        <li></li>
    </ul>
</div>
```

#### Irmán: `+`

Use o operador `+` para colocar elementos uns preto dos outros, no mesmo nivel:

```bash
div+p+bq
```

... sairá

```html
<div></div>
<p></p>
<blockquote></blockquote>
```

#### Subida: `^`

Co operador `>` estás avanzamos, baixando, pola árbore xerada e as posicións de todos os elementos irmáns resolveranse contra o elemento máis profundo:

```css
div+div>p>span+em 
```

...ampliarase a

```html
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
```

Co operador `^`, podese subir un nivel na árbore e cambiar o contexto onde deberían aparecer os seguintes elementos:

```css
div+div>p>span+em^bq
```

...saídas para

```html
<div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div>
```

Podes usar tantos `^`operadores como queiras, cada operador subirá un nivel:

```css
div+div>p>span+em^^^bq
```

... sairá a

```html
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```

#### Multiplicación: `*`

Co operador `*`  podes definir cantas veces se debe xerar un elemento:

```css
ul>li*5
```

...producirá

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

#### Agrupación: `()`

A medida que te afianzas co uso das abreviaturas de Emmet poderás aprender a empregar parénteses para agrupar subárbores en abreviaturas máis complexas:

```css
div>(header>ul>li*2>a)+footer>p
```

...expándese a

```html
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```

Se estás a traballar co DOM do navegador, podes pensar en grupos como fragmentos de documentos: cada grupo contén unha subárbore de abreviaturas e todos os seguintes elementos insírense ao mesmo nivel que o primeiro elemento do grupo.

Podes aniñar grupos uns dentro doutros e combinalos co operador `*` de multiplicación :

```html
(div>dl>(dt+dd)*3)+footer>p
```

...producirá

```html
<div>
    <dl>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
    </dl>
</div>
<footer>
    <p></p>
</footer>
```

> Empregando a agrupación, podes escribir o marcado da páxina completa cunha única abreviatura, pero mellor non o fagas.

### Operadores de atributos

Os operadores de atributos úsanse **para modificar os atributos dos elementos** xerados. Por exemplo, en HTML e XML pódense engadir rapidamente atributos `class` ao elemento que se vai xerar.

#### ID e CLASE

Para os atributos CSS, usaremos as notacións `elem#id` (un elemento seguido do seu ID) e  `elem.class` (un elemento seguido dunha clase) para asignarlle aos elementos os atributos `id` ou  `class` que conveña. En Emmet, podes repetir unha mesma abreviatura para *engadir* os atributos que queiras ao elemento especificado:

```html
div#header+div.page+div#footer.class1.class2.class3
```

... sairá

```html
<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>
```

#### Atributos personalizados

Podes usar a notación`[attr]` (como en CSS) para engadir atributos personalizados a un elemento:

```html
td[title="!" colspan=3]
```

...o que producirá

```html
<td title="!" colspan="3"></td>
```

- Podes colocar tantos atributos como queiras entre corchetes.
- Non tes que especificar os valores dos atributos: `td[colspan title]` producirá `<td colspan="" title="">` con tabulacións dentro de cada atributo baleiro (se o teu editor os admite).
- Podes usar comiñas simples ou dobres para citar valores de atributos.
- Non é necesario citar os valores se non conteñen espazos: `td[title=hello colspan=3]` tamén funcionará.

 Co operador `*` de multiplicación pódense repetir elementos, e con `$` poderás *numeralos*. Colocando o operador `$` dentro do *nome* do elemento - nome do atributo ou valor do atributo - se mostrará o número de cada elemento repetido:

```html
ul>li.item$*5
```

...dará como resultado

```html
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>
```

Podes usar varias liñas `$` seguidas para completar o número con ceros:

```html
ul>li.item$$$*5
```

...para obter

```html
<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
    <li class="item004"></li>
    <li class="item005"></li>
</ul>
```

#### Cambiando a base de numeración e a dirección

Co modificador `@`, podes cambiar a dirección da numeración (ascendente ou descendente) e a base (por exemplo, o valor inicial).

Por exemplo, para cambiar de dirección, engade `@-` despois de `$`:

```html
ul>li.item$@-*5
```

…para producir

```html
<ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>
```

Para cambiar o valor base do contador, engade un modificador `@N` a `$`:

```html
ul>li.item$@3*5
```

...transfórmase en

```html
<ul>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
    <li class="item6"></li>
    <li class="item7"></li>
</ul>
```

Podes usar estes modificadores xuntos:

```html
ul>li.item$@-3*5
```

...e transformarase en

```html
<ul>
    <li class="item7"></li>
    <li class="item6"></li>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
</ul>
```

### Texto: `{}`

Podes usar chaves para engadir contido textual a un elemento:

```html
a{Click me}
```

... producirá

```html
<a href="">Click me</a>
```

Ten en conta que `{text}` se usa e analiza como un elemento separado (como, `div`, `p` etc.) pero ten un significado especial cando se escribe inmediatamente despois do elemento. Por exemplo, `a{click}` e  `a>{click}` producirán a mesma saída, pero `a{click}+b{here}` e  `a>{click}+b{here}` non:

```html
<!-- a{click}+b{here} -->
<a href="">click</a><b>here</b>

<!-- a>{click}+b{here} -->
<a href="">click<b>here</b></a>
```

No segundo exemplo, o elemento `<b>` colócase *dentro do* elemento `<a>` . Esa é a diferenza: cando `{text}` se escribe xusto despois do elemento, non cambia o contexto principal. Aquí tes un exemplo máis complexo que mostra por que é importante:

```html
p>{Click }+a{here}+{ to continue}
```

...produce

```html
<p>Click <a href="">here</a> to continue</p>
```

Neste exemplo, para escribir `Click here to continue` dentro do elemento  `<p>` temos que movernos explicitamente cara abaixo da árbore co operador `>` despois de `p`, pero no caso do elemento `a` non é necesario, xa que necesitamos un elemento `<a>` só coa palabra `here`, sen cambiar o contexto pai.

Para comparación, aquí está a mesma abreviatura escrita sen o operador `>` fillo :

```html
p{Click }+a{here}+{ to continue}
```

...que produce

```html
<p>Click </p>
<a href="">here</a> to continue
```

### Notas sobre o formato das abreviaturas

Cando te familiarices coa sintaxe das abreviaturas de Emmet, podes querer usar algún formato para que as túas abreviaturas sexan máis lexibles. Por exemplo, usando espazos entre elementos e operadores, como aquí:

```html
(header > ul.nav > li*5) + footer
```

Pero non funcionará, porque o espazo é un *símbolo de parada* onde Emmet deixa de analizar abreviaturas.

Moitos usuarios pensan que cada abreviatura debe escribirse nunha nova liña, pero non é así: podes escribir e ampliar unha abreviatura *en calquera lugar do texto*.

**Lembra**:

- As abreviaturas non son unha linguaxe de marcado.
- Non perdas tempo escribindo abreviaturas complexas. Construír unha única abreviatura complexa é moito máis lento e propenso a erros que construír e escribir algunhas curtas.

## Algúns exemplos

### HTML

**#menu$*6>ul>li*0>a{Link Here}** + [Crtl]+E

```html
<div id="menu">
<ul>
    <li><a href="">Link Here</a></li>
    <li><a href="">Link Here</a></li>
    <li><a href="">Link Here</a></li>
    <li><a href="">Link Here</a></li>
    <li><a href="">Link Here</a></li>
    <li><a href="">Link Here</a></li>
    </ul>
</div>
```

**article#front.main** + [Crtl]+E

``<article id="front" class="main"></article>``

**article>p{Text here...}+bq>{Text here...}^p{Text here...}*3**  + [Ctrl]+E

```html
<article>
    <p>Text here...</p>
    <blockquote>Text here...</blockquote>
    <p>Text here...</p>
    <p>Text here...</p>
    <p>Text here...</p>
</article>
```

**table+** + [Ctrl]+E

```html
<table>
    <tr>
        <td></td>
    </tr>
</table>
```

**tr+** + [Ctrl]+E          ``<tr><td></td></tr>``

**colg+**        + [Ctrl]+E             ``<colgroup><col></colgroup>``

******************************************

### CSS

\- **p.class1.class2.class3**

``<p class="class1 class2 class3"></p>``

**pos**      + [Ctrl]+E   position: relative;
**pos:s**   + [Ctrl]+E   position: static;
**t:a**     + [Ctrl]+E   top: auto;
**z**        + [Ctrl]+E   z-index: ;
**va:t**      + [Ctrl]+E   vertical-align: top;
**tsh:ra**        + [Ctrl]+E   text-shadow: h v blur rgba(0, 0, 0, .5);
**bdtli:c**    + [Ctrl]+E   border-top-left-image: continue;
**d**       + [Ctrl]+E      display: block;
**bxsh:ra**  + [Ctrl]+E   -webkit-box-shadow: inset h v blur spread rgba(0, 0, 0, .5);
           -moz-box-shadow: inset h v blur spread rgba(0, 0, 0, .5);
           box-shadow: inset h v blur spread rgba(0, 0, 0, .5);

**@kf**   + [Ctrl]+E

```css
@-webkit-keyframes identifier {
  from {  }
  to {  }
}

@-o-keyframes identifier {
  from {  }
  to {  }
}

@-moz-keyframes identifier {
  from {  }
  to {  }
}

@keyframes identifier {
  from {  }
  to {  }
}
```

**c:ra**    + [Ctrl]+E   color: rgba(0, 0, 0, .5);
**ff:ss**      + [Ctrl]+E   font-family: sans-serif;
**cps:b**    + [Ctrl]+E   caption-side: bottom;
**bgi:n**    + [Ctrl]+E   background-image: none;
**pgbb:r**    + [Ctrl]+E   page-break-before: right;

******************************************

*Máis info:*

- <https://emmet.io/>
- <https://docs.emmet.io/>
- <http://docs.emmet.io/cheat-sheet/>
- <https://docs.emmet.io/abbreviations/syntax/>

OUT 2021
