---
title: JavaScript
icon: slides
layout: Slide
---

<!-- markdownlint-disable MD024 MD033 MD051 -->

@slidestart

<!-- .slide: data-transition="slide r-fit-text" -->

## Javascript

---

<!-- .slide: data-transition="slide" data-auto-animate -->

1.

<!-- .slide -->
*JavaScript* foi creado para *“dar vida a ás páxinas web”*.

---

<!-- .slide: data-transition="slide" data-auto-animate -->

Os programas nesta linguaxe denomínanse *scripts*.
<!-- .element: class="r-fit-text" -->
Os *scripts* pódense escribir directamente no HTML dunha páxina web, ou importarse da rede, e executarse automaticamente a medida que se carga a páxina.
<!-- .element: class="r-fit-text" -->
Os scripts se proporcionan e executan como texto plano. Non necesitan preparación especial ou compilación algunha para executarse.

---

<!-- .slide: class="r-fit-text" -->

Nacido co nome de “LiveScript”, pronto adoptou, por cuestións de marketing, o nome de Javascript, aínda que nada ten que ver ca linguaxe Java.

A medida que foi evolucionando, JavaScript converteuse nunha linguaxe completamente independente coa súa propia especificación: [ECMAScript](https://es.wikipedia.org/wiki/ECMAScript).

Hoxe, JavaScript pode executarse non só nos navegadores, senón tamén en servidores ou incluso en calquera dispositivo que conte cun [motor ou intérprete de JavaScript](https://es.wikipedia.org/wiki/Intérprete_de_JavaScript).

Todo navegador dispón dun motor embebido, chamado as veces “Máquina virtual de JavaScript”.

---

<!-- .slide: data-transition="slide" data-auto-animate -->

Todo navegador dispón dun motor embebido, chamado as veces “Máquina virtual de JavaScript”.

Os distintos motores teñen diferentes “nomes en clave”. Por exemplo:

- [V8](https://es.wikipedia.org/wiki/Chrome_V8) – en Chrome, Opera ou Edge.
- [SpiderMonkey](https://es.wikipedia.org/wiki/SpiderMonkey) – en Firefox.
- …“Chakra” para o finado IE , “JavaScriptCore”, “Nitro” e “SquirrelFish” para Safari, etc.

<!-- .element: class="r-fit-text" -->

### Como traballan os motores?

Os motores son complicados, aínda que seus fundamentos son sinxelos:

1. O motor (embebido se se trata dun navegador) lee (“analiza”) o script.
2. Logo converte (“compila”) o script a linguaxe de máquina.
3. Por último, o código máquina se executa, moi rápido.

O motor aplica optimizacións en cada paso do proceso. Incluso observa como o script compilado se executa, analiza os datos que flúen a través del e aplica optimizacións ao código maquina baseadas nese coñecemento.

<!-- .element: class="fragment fade-in" -->

## Que pode facer JavaScript no navegador?

O JavaScript moderno é unha linguaxe de programación “segura”, e non proporciona acceso de baixo nivel nin á memoria nin á CPU; xa que se creou inicialmente para os navegadores, os cales non requiren esta funcionalidade.

Pero as capacidades de JavaScript medraron co tempo e agora dependen en gran medida da entorna na que se executa. Unha cousa é o que se pode facer nun navegador e outra diferente é, por exemplo, unha entorna baseada en [Node.JS](https://es.wikipedia.org/wiki/Node.js) que soporta funcións que permiten a JavaScript ler e escribir arquivos arbitrariamente, realizar solicitudes de rede, etc.

<!-- .element: class="fragment fade-in" -->

No navegador JavaScript permite realizar *case* calquera cousa relacionada coa manipulación dunha páxina web, a interacción co usuario e co servidor web, entre outras...

---

... por exemplo, no navegador, JavaScript é capaz de:

- Agregar novo HTML á páxina, cambiar o contido existente e modificar estilos.
- Reaccionar ás accións do usuario e executarse cos clics do rato, os movementos do punteiro e ao premer teclas.
- Enviar solicitudes de rede a servidores remotos, descargar e cargar arquivos (con tecnoloxías como [AJAX](https://es.wikipedia.org/wiki/AJAX) e [COMET](https://es.wikipedia.org/wiki/Comet)).
- Obter e configurar cookies, facer preguntas ao visitante e mostrar mensaxes.
- Recordar datos no lado do cliente co almacenamento local (“local storage”).

<!-- .element: class="fragment fade-in" -->

## Que NON PODE facer JavaScript no navegador?

As capacidades de JavaScript no navegador están limitadas para protexer a seguridade de usuario. O obxectivo é evitar que unha páxina maliciosa acceda a información privada ou dane os datos do usuario.

<!-- .element: class="fragment fade-in" -->

Exemplos destas restricións inclúen:

- JavaScript no navegador non pode ler e escribir arbitrariamente arquivos no disco duro, copialos ou executar programas. Non ten acceso directo a funciones do Sistema Operativo (OS).

  Os navegadores máis modernos permítenlle traballar con arquivos, pero o acceso é limitado e só permitido se o usuario realiza certas acciones, como “arrastrar” un arquivo á xanela do navegador ou seleccionalo por medio dunha etiqueta `<input`>.

  Existen maneiras de interactuar coa cámara, o micrófono e outros dispositivos, pero iso require o permiso explícito do usuario. Polo tanto, unha páxina habilitada para JavaScript non pode habilitar unha cámara web para observar o entorno e enviar a información á [NSA](https://es.wikipedia.org/wiki/Agencia_de_Seguridad_Nacional).

<!-- .slide: data-transition="slide" data-auto-animate -->

Diferentes pestanas e xanelas xeralmente non se coñecen entre elas. Ás veces si o fan: por exemplo, cando unha xanela usa JavaScript para abrir outra. Pero incluso nese caso, JavaScript non pode acceder á outra se proveñen de diferentes sitios (de diferente dominio, protocolo ou porto).

Esta restrición se coñece como “política do mesmo orixe” (“Same Origin Policy”). É posible a comunicación, pero ambas páxinas deben acordar o intercambio de datos e tamén deben conter o código especial de JavaScript que permite controlalo.

De novo: esta limitación é para a seguridade do usuario. Unha páxina de `http://algunsitio.com`, que o usuario abre, non debe ser capaz de acceder a outra pestana do navegador coa URL `http://gmail.com` e roubar a información de esta outra páxina.

<!-- .element: class="r-fit-text" -->

JavaScript pode facilmente comunicarse co servidor de onde proven a paxina actual a través da rede. Pero a súa capacidade para recibir información de outros sitios e dominios está bloqueada. Aínda que sexa posible, isto require un acordo explícito (expresado nos encabezados HTTP) desde o sitio remoto. Unha vez máis se trata dunha limitación de seguridade.

<!-- .element: class="r-fit-text" -->

Estas limitacións non existen se JavaScript é empregado fora do navegador; por exemplo, nun servidor. Os navegadores modernos tamén permiten complementos e extensións que poden solicitar permisos estendidos.

<!-- .slide: data-auto-animate -->

## Que fai a JavaScript único?

Existen alo menos *tres* cousas salientables en JavaScript:

- A súa completa integración con HTML e CSS.
- As cousas simples se fan de maneira simple.
- Soportado pola maioría dos navegadores e habilitado de forma predeterminada.

JavaScript é a única tecnoloxía dos navegadores que combina estas tres cousas. Por iso é a ferramenta máis estendida para crear interfaces de navegador.

JavaScript tamén permite crear servidores, aplicacións móbiles, etc.

---

<!-- .slide: data-auto-animate -->

1. ## Linguaxes “por encima de” JavaScript

   A sintaxe de JavaScript non se adapta ás necesidades de todos. Persoas diferentes quererán características diferentes. E os proxectos e requirimentos son distintos para cada persoa.

   Así que van aparecendo gran cantidade de novas linguaxes, os cales son *transpilados* (convertidos) a JavaScript antes de ser executados no navegador.

   As ferramentas modernas fan a conversión (transpilación) rápida e transparente, permitindo aos desenvolvedores codificar noutras linguaxes e convertelo automaticamente por detrás de escena.

---

<!-- .slide: data-auto-animate -->

Exemplos desas linguaxes:

- [CoffeeScript](https://coffeescript.org/) Unha “sintaxe doce” para JavaScript. Introduce unha sintaxe curta que permite escribir un código máis claro e preciso. Usualmente desenvolvedores de Ruby prefiren esta linguaxe.
- [TypeScript](https://www.typescriptlang.org/) se concentra en agregar “tipado estrito” (“strict data typing”) para simplificar o desenvolvemento e soporte de sistemas complexos. Desenvolto por Microsoft.
- [FLow](https://flow.org/) tamén agrega a escritura de datos, pero dunha maneira diferente. Desenvolto por Facebook.
- [Dart](https://www.dartlang.org/) é unha linguaxe independente, ten o seu propio motor que se executa en entornas que non son de navegador (como aplicacións móbiles), pero que tamén se pode converter/transpilar a JavaScript. Desenvolto por Google.
- [Brython](https://brython.info/) é un transpilador de Python a JavaScript que permite escribir aplicacións en Python puro sen JavaScript.
- [Kotlin](https://kotlinlang.org/docs/reference/js-overview.html) é unha linguaxe moderna, segura e concisa que pode apuntar ao navegador ou a NodeJS.

E hai máis. Aínda así, deberíamos coñecer JavaScript para realmente entender que estamos a facer.

---

<!-- .slide: data-auto-animate -->

## Resumo

Creado inicialmente como unha linguaxe só para o navegador, pero agora se emprega tamén noutras moitas entornas.

- Hoxe, JavaScript tnunha posición única coma linguaxe máis estendido e adoptado de navegador, cunha integración completa con HTML e CSS.
- Existen moitas linguaxes que se converten ou transpilan a JavaScript e aportan certas características. E é recomendable botarlles unha ollada, alo menos brevemente, despois de dominar JavaScript.

---

<!-- .slide: data-auto-animate -->

## 2

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## Especificación

[A especificación ECMA-262](https://www.ecma-international.org/publications/standards/Ecma-262.htm) conten a información máis exhaustiva, detallada e formal sobre JavaScript. Nela se define a linguaxe. Polo se estilo formal, é difícil de entender de primeiras. É a fonte de información máis fiable sobre os detalles da linguaxe, pero non para o uso diario.

Cada ano se publica unha nova especificación. Mentres, o último borrador da especificación se pode consultar en [https://tc39.es/ecma262/](https://tc39.es/ecma262/).

Para ler acerca das novas prestacións de vangarda da linguaxe, incluíndo aquelas que son “case-estándar” (o denominado “stage 3”): [https://github.com/tc39/proposals](https://github.com/tc39/proposals).

<!-- .element: class="r-fit-text" -->

### Manuais

**[MDN (Mozilla) JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference.)** é o manual principal, con exemplos e outras informacións.

<!-- .slide: data-auto-animate  -->

## Compatibilidade

JavaScript é unha linguaxe en evolución, regularmente se agregan novas características.

Para ver a compatibilidade cos navegadores e outros motores, consultar:

- [https://caniuse.com](https://caniuse.com) – táboas de compatibilidade por característica. Por exemplo, para comprobar que motores soportan funcións modernas de criptografía: [https://caniuse.com/#feat=cryptography](https://caniuse.com/#feat=cryptography).
- [https://kangax.github.io/compat-table](https://kangax.github.io/compat-table) – táboa de compatibilidade das prestacións da linguaxe por motor.

<!-- .element: class="r-fit-text" -->

👆 The `r-fit-text` class makes text as large as possible without overflowing the slide.

---

<!-- .slide: data-auto-animate  -->

## O código é propenso a erros. Así que *definitivamente* vas a cometer erros

![Logo](/logo.svg)

<!-- .element: class="r-stretch" -->

Pero o navegador, de forma predeterminada, non mostra os errores ao usuario. Daquela si algo sae mal co *script*, non veremos o que está roto e non poderemos arranxalo.

Para ver os erros, e obter outra moita información útil sobre os scripts, se incorporaron as **ferramentas de desenvolvemento** nos navegadores.

Moitos desenvolvedores se inclinan por Chrome ou Firefox, porque teñen as mellores ferramentas. Pero os outros navegadores tamén proporcionan ferramentas de desenvolvemento, as veces con características especiais, aínda que xogando a poñerse ao par con Chrome ou Firefox.

- As ferramentas para desenvolvedores nos permiten ver erros, executar comandos, examinar variables e moito máis.
- Se poden abrir con F12 na maioría dos navegadores de Windows. Ou seleccionando *Inspeccionar* no menú contextual - botón dereito do rato na pantalla do navegador-.

--

<!-- .slide: data-auto-animate data-background-color="rgb(70, 70, 255)" -->

**Regra xeral**: só os scripts máis simples se colocan no HTML. Os máis complexos residen en arquivos separados.

A avantaxe dun arquivo separado é que o navegador o descargará e ou almacenará en [caché](https://es.wikipedia.org/wiki/Caché_(informática)).

Outras páxinas que fan referencia ao mesmo script o tomarán da caché en lugar de descargalo, polo que o arquivo só se descarga unha vez. Iso reduce o tráfico e fai que as páxinas sexan máis rápidas.

---

<!-- .slide: data-auto-animate -->

:warning: Unha soa etiqueta `<script>` non pode ter o atributo `src` e código dentro. Si se establece `src`, se ignorará o contido do script.  E non funcionará:

```html
<script src="file.js">
  alert(1); // o contido se ignora porque se estableceu src
</script>
```

Debemos elixir un `<script src="…">` externo o un `<script>` normal con código.

Así que para que funcione usaríamos dous scripts:

```html
<script src="file.js"></script>
<script>
  alert(1);
</script>
```

<!-- .element: class="r-fit-text" -->

---

<!-- .slide: data-auto-animate -->

**Os atributos `type` e `language` non son necesarios.**

---

```html
<!DOCTYPE html>
<html>

<body>

  <script>
    alert( "Son JavaScript!" );
  </script>

</body>

</html>
```

<!-- .element: class="r-fit-text" -->

## Estrutura do código

O primeiro que veremos son os bloques de construción do código.

### Sentenzas

As sentenzas son construcións sintácticas e comandos que realizan accións.

Unha sentenza:

```js
alert('Ola mundo!');
```

Podemos ter tantas sentenzas no código como queiramos. E pódense separar cun punto e coma.

---

Por exemplo, aquí separamos “Ola Mundo” en dúas alertas:

```javascript
alert('Ola');
alert('Mundo');
```

Xeralmente, as sentencias se escriben en liñas separadas para facer que o código máis lexible:

```javascript
alert('Ola');
alert('Mundo');
```

---

<!-- .slide: data-auto-animate -->

## Punto e coma

Se pode omitir un punto e coma na maioría dos casos cando existe un salto de líña.

Isto tamén funcionaría:

```javascript
alert('Ola')
alert('Mundo')
```

Aquí, JavaScript interpreta o salto de liña como un punto e coma “implícito”. Isto se denomina [inserción automática de punto e coma](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion).

**Na maioría dos casos, unha nova liña implica un punto e coma. Pero “na maioría dos casos” non significa “sempre”!**

---

Hai casos nos que **unha nova liña non significa** un punto e coma. Por exemplo:

```javascript
alert(3 +
1
+ 2);
```

O código da como resultado `6` porque JavaScript no enxerta punto e coma aquí. É intuitivamente obvio que si a liña termina cun signo `"+"`, se trata dunha “expresión incompleta”, un punto e coma aquí sería incorrecto. E neste caso se obvian os saltos de carro.

---

**Pero hai situacións nas que JavaScript “falla” ao asumir un punto e coma onde realmente se necesita.** Os erros que ocorren neses casos son bastante difíciles de atopar e corrixir.

Por curiosidade aquí vese un exemplo concreto de tal erro, mira este código:

```javascript
alert("Ola");

[1, 2].forEach(alert);
```

*Non é necesario pensar no significado dos corchetes `[]` e `forEach` aínda.*

O resultado do código mostra `Ola`, logo `1`, e logo `2`.

---

Quitemos o punto e coma do ``alert``:

```javascript
alert("Ola")

[1, 2].forEach(alert);
```

A diferencia, comparando co código anterior, é de só un carácter: falta o punto e coma ao final da primeira liña.

---

Esta vez, se executamos o código, só se ve o primeiro `Ola` (e un erro! pero necesitarás abrir a consola para velo). Agora os números xa non aparecen máis.

Isto ocorre porque JavaScript non asume un punto e coma antes dos corchetes `[...]`, entón o código do primeiro exemplo se trata como unha soa sentencia.

Así é como o ve o motor:

```javascript
alert("Hello")[1, 2].forEach(alert);
```

Tal unión é simplemente incorrecta. Necesitamos poñer un punto e coma despois da primeira sentenza `alert` para que o código funcione ben.

---

Isto tamén pode suceder en outras situacións!.

Recomendamos colocar puntos e coma entre as sentencias, incluso si están separadas por saltos de liña. Resulta máis seguro poñelos puntos e coma, polo menos mentres aprendes a usalos.

---

## Comentarios

Os scripts poden acadar moita complexidade rapidamente. Polo que non estará de máis agregar *comentarios* que describan o que fai o código e por que.

Os comentarios se poden poñer en calquera lugar dun script. Non afectan a súa execución porque o motor simplemente os ignora.

**Os comentarios dunha liña comezan con dous caracteres de barra diagonal `//`.**

O resto da liña é un comentario.  

---

```js
// Este comentario ocupa unha liña propia.
alert('Ola');

alert('Mundo'); // Este comentario sigue á sentenza.
```

---

**Os comentarios de varias liñas comezan cunha barra inclinada e un asterisco `/*` e terminan cun asterisco e unha barra inclinada `*/`.**

```javascript
/* Un exemplo con dúas mensaxes.
Este é un comentario multilínea.
*/
alert('Ola');
alert('Mundo');
```

O contido dos comentarios se ignora.

---

As veces pode ser útil deshabilitar temporalmente unha parte do código. Si colocamos o código dentro de `/* … */`, non se executará.

```javascript
/* Comentando o código
alert('Ola');
*/
alert('Mundo');
```

Moitos editores, usan *Ctrl+/* , para un comentario de liña e algo como *Ctrl+Shift+/*, para comentarios de varias liñas (selecciona unha parte do código e preme o acceso rápido).

---

Non se permiten os comentarios aniñados!

Non pode haber `/*...*/` dentro doutro `/*...*/`.

```javascript
/*
 /* comentario anidado ?!? */
*/
alert( 'Mundo' );
```

---

:eye: Os comentarios aumentan o tamaño xeral do código, pero iso no é un problema en absoluto. Hai moitas ferramentas que minimizan o código antes de publicalo nun servidor de produción. Eliminan os comentarios, polo que só aparecen nos scripts de traballo. Así que os comentarios non teñen ningún efecto negativo na produción.

---

## O modo *moderno*, "use strict"

Durante moito tempo, JavaScript evolucionou sen problemas de compatibilidade. Engadíanse novas características á linguaxe sen que a funcionalidade existente cambiase.

Isto tiña o beneficio de que non se rompía o código existente, pero o malo era que calquera erro ou decisión incorrecta tomada polos creadores de JavaScript quedábase para sempre na linguaxe.

Isto foi así ata 2009, cando apareceu ECMAScript 5 (ES5). Esta versión engadiu novas características á linguaxe e modificou algunhas das xa existentes. Para manter o código antigo funcionando, a maior parte das modificacións están desactivadas por defecto. Tes que activalas explicitamente usando unha directiva especial: `"use strict"`.

---

## “use strict”

A directiva semella un string: `"use strict"`. E cando se sitúa ao principio dun script, o script enteiro vai funcionar da *"maneira moderna"*.

---

Por exemplo:

```javascript
"use strict";

// este código funciona da maneira moderna
...
```

Veremos as funcións (unha maneira de agrupar comandos) en breve, pero adiantemos que `"use strict"` se pode poñer ao inicio dunha función. Desta maneira, se activa o modo estrito unicamente nesa función. Pero, normalmente se emprega para o script enteiro.

---

### Asegúrate de que “use strict” está ao inicio

Por favor, asegúrate de que `"use strict"` está ao principio dos teus scripts. Se non, o modo estrito podería non activarse.

Como ocorre aquí:

```javascript
alert("algo de código");
// la directiva "use strict" de abajo é ignorada, tiene que estar al principio

"use strict";

// o modo estricto no está activado
```

---

- Por encima de `"use strict"` só  poden aparecer comentarios .

- Unha vez declarado, non hai maneira de cancelar `use strict.

- Unha vez entramos en modo estrito, non hai volta atrás.

---

## Consola do navegador

Cando utilices a [consola do navegador](https://es.javascript.info/devtools) para executar código, ten en conta que por defecto non utiliza `use strict`.

Así que en ocasións, onde `use strict` cause diferencia, obterás resultados incorrectos.

Entón, **como utilizar `use strict` na consola?**

Para ingresar múltiples liñas e poñer `use strict` ao principio, podes intentar pulsando Shift+Enter:

```javascript
'use strict'; <Shift+Enter para unha nova liña>
//  ...teu código
<Intro para executar>
```

---

Isto funciona para a maioría dos navegadores, especificamente Firefox e Chrome.

---

Se isto non funciona, como nos vellos navegadores, hai unha fea pero fiable maneira de asegurar `use strict`. Poñelo dentro desta especie de envoltura:

```javascript
(function() {
  'use strict';

  // ...tu código...
})()
```

---

## Deberíamos utilizar “use strict”?

A pregunta podería parecer obvia, pero non o é.

Un podería recomendar que se inicien os scripts con `"use strict"`… Pero,... O JavaScript moderno admite “clases” e “módulos”, estruturas de  linguaxe avanzadas, que  automaticamente habilitan `use strict`. Logo, se as usamos non necesitamos agregar a directiva `"use strict"`.

**Entón, por agora `"use strict";` é un invitado benvido ao alcance de teus scripts. Aínda que, cando o teu código sexa todo clases e módulos, podes omitilo.**

A partir de agora temos que saber acerca de `use strict` en xeral.

---

Iremos aprendendo as características da linguaxe e veremos as diferencias entre o modo estrito e o  antigo. Afortunadamente non hai moitas e realmente as que hai fan a nosa vida mellor.

Tódolos exemplos nesta titoría asumen o modo estrito salvo que (moi raramente) se especifique o contrario.

---

## Variables

A maioría do tempo, unha aplicación de JavaScript necesita traballar con información. Aquí hai 2 exemplos:

1. Unha tenda en liña – A información pode incluír os bens á venda e un “carriño de compras”.
2. Unha aplicación de chat – A información pode incluír os usuarios, mensaxes, e moito máis.

Utilizamos as variables para almacenar esta información.

---

## Unha variable

Unha [variable](https://es.wikipedia.org/wiki/Variable_(programación)) é un “almacén cun nome” para gardar datos. Podemos usar variables para almacenar gominolas, visitantes, e outros datos.

Para xerar unha variable en JavaScript, se usa a palabra clave `let`.

A seguinte declaración xera (*declara* ou *define*) unha variable co nome “message”:

```javascript
let message;
```

---

Agora podemos introducir datos nela ao utilizar o operador de asignación `=`:

```javascript
let message;

message = 'Ola'; // almacenar a cadea 'Ola' na variable chamada message
```

A cadea agora está almacenada no área da memoria asociada coa variable. E podemos acceder a ela utilizando o nome da variable:

```javascript
let message;
message = 'Ola!';

alert(message); // mostra o contido da variable
```

---

Para ser máis concisos - escribir menos código-, podemos combinar a declaración da variable e a súa asignación nunha soa liña:

```javascript
let message = 'Ola!'; // define a variable e asigna un valor

alert(message); // Ola!
```

---

Tamén podemos declarar variables múltiples nunha soa liña:

```javascript
let user = 'Lois', age = 25, message = 'Ola';
```

Isto pode parecer máis curto, pero non resulta recomendable. Polo ben da lexibilidade, por favor utiliza unha liña por variable.

---

A versión de liñas múltiples é un pouco máis longa, pero é máis fácil de ler:

```javascript
let user = 'Lois';
let age = 25;
let message = 'Ola';
```

Algunhas persoas tamén definen variables múltiples estilo multiliña:

```javascript
let user = 'Lois',
  age = 25,
  message = 'Ola';
```

…incluso neste estilo “coma primeiro”:

```javascript
let user = 'Lois'
  , age = 25
  , message = 'Ola';
```

---

Tecnicamente, todas estas variantes fan o mesmo. Así que, é cuestión de gusto persoal e preferencia estética.

---

```js
var` en vez de `let
```

Nos scripts máis vellos, ás veces se atopa outra palabra clave: `var` en lugar de `let`:

```javascript
var message = 'Ola';
```

A palabra clave `var` é *case* o mesmo que `let`. Tamén fai a declaración dunha variable, aínda que dun modo lixeiramente distinto, e máis antigo.

Existen lixeiras diferenzas entre `let` e `var`, pero non nos interesan neste momento. Para saber máis ver [A vella "var"](https://es.javascript.info/var).

---

## Una analoxía da vida real

Podemos comprender facilmente o concepto dunha “variable” se nola imaxinamos como unha “caixa” cunha etiqueta de nome único pegada nela.

Por exemplo, podemos imaxinar a variable `message` como unha caixa etiquetada `"message"` cun valor `"Ola!"` dentro:

---

```javascript
let message;
// Podemos introducir calquera valor á caixa.
message = 'Ola!';

// Tamén a podemos cambiar cantas veces queiramos
message = 'Mundo!'; // valor alterado

// Cando o valor sexa alterado, os datos antigos serán removidos da variable
alert(message);
```

---

Tamén podemos declarar dúas variables e copiar datos dunha á outra.

```javascript
let hello = 'Ola mundo!';

let message;

// copia 'Ola mundo' de hello a message
message = hello;

// agora, ambas variables conteñen os mesmos datos
alert(hello); // Ola mundo!
alert(message); // Ola mundo!
```

---

Declarar dúas veces lanza un erro.

Unha variable debe ser declarada só unha vez.

Unha declaración repetida da mesma variable é un erro:

```javascript
let message = "Isto";

// 'let' repetidos da un erro
let message = "Iso"; // SyntaxError: 'message' xa foi declarado
```

Debemos declarar unha variable unha sola vez e desde entón referirnos a ela sen `let`.

---

### Linguaxes funcionais

É interesante notar a existencia da [programación funcional](https://es.wikipedia.org/wiki/Programación_funcional). As linguaxes funcionais “puras”, como [Haskell](https://es.wikipedia.org/wiki/Haskell), prohiben cambiar o valor das variables.

En tales linguaxes, unha vez que a variable foi almacenada “na caixa”, permanece alí para sempre. Se necesitamos almacenar algo máis, a linguaxe nos obriga a crear unha nova caixa (xerar unha nova  variable). Non podemos re-usar a antiga.

Aínda que a primeira vista pode parecer un pouco extrano, estas linguaxes son moi capaces de desenvolvemento serio. Máis aínda: existen áreas, como a computación en paralelo, nas cales esta limitación outorga certas  avantaxas.

---

## Nomeando variables

Existen dúas limitacións de nome de variables en JavaScript:

1. O nome unicamente pode incluír letras, díxitos, ou os símbolos `$` e `_`.
2. O primeiro carácter non pode ser un díxito.

Exemplos de nomes válidos:

```javascript
let userName;
let test123;
```

---

Cando o nome conten varias palabras, se soe usar o estilo [camelCase](https://es.wikipedia.org/wiki/Camel_case) (capitalización en camelo), onde as palabras van pegadas unha detrás doutra, con cada inicial en maiúscula: `meuNomeMoiLongo`.

É interesante notar que o símbolo do dólar `'$'` e o guión baixo `'_'` tamén se utilizan en nomes. Son símbolos comúns, tal como as letras, sen ningún significado especial.

Os seguintes nomes son válidos:

```javascript
let $ = 1; // Declara unha variable co nome "$"
let _ = 2; // e agora unha variable co nome "_"

alert($ + _); // 3
```

---

Exemplos de nomes incorrectos:

```javascript
let 1a; // non pode encetar cun díxito

let my-name; // os guiones '-' non están permitidos nos nomes
```

---

A Capitalización é Importante

Dúas variables con nomes `mazan` e `MAZAN` son variables distintas.

As letras que non son do alfabeto inglés están permitidas, pero non se recomendan

É posible utilizar letras de calquera alfabeto, incluíndo letras do cirílico, logogramas chinos, etc.:

```javascript
let имя = '...';
let 我 = '...';
```

---

Tecnicamente, non existe ningún erro aquí. Tales nomes  están permitidos, pero existe unha tradición internacional de utilizar inglés ao nomear variables. Incluso si estamos escribindo un script pequeno, este pode ter unha longa vida por diante. Pode ser necesario que xente de outros países deban lelo nalgún momento.

---

### Nomes reservados

...

---

### Animation class

- `fade-in`
<!-- .element: class="fragment fade-in" -->

- `fade-out`
<!-- .element: class="fragment fade-out" -->

- `fade-up`
<!-- .element: class="fragment fade-up" -->

<!-- list break -->

- `fade-down`
<!-- .element: class="fragment fade-down" -->

- `fade-left`
<!-- .element: class="fragment fade-left" -->

- `fade-right`
<!-- .element: class="fragment fade-right" -->

<!-- list break -->

- `fade-in-then-out`
<!-- .element: class="fragment fade-in-then-out" -->

- `fade-in-then-semi-out`
<!-- .element: class="fragment fade-in-then-semi-out" -->

--

<!-- .slide: data-auto-animate -->

## Fragment

### Animation class

- `grow`
<!-- .element: class="fragment grow" -->

- `shrink`
<!-- .element: class="fragment shrink" -->

- `strike`
<!-- .element: class="fragment strike" -->

<!-- list break -->

- `highlight-red`
<!-- .element: class="fragment highlight-red" -->

- `highlight-green`
<!-- .element: class="fragment highlight-green" -->

- `highlight-blue`
<!-- .element: class="fragment highlight-blue" -->

<!-- list break -->

- `highlight-current-red`
<!-- .element: class="fragment highlight-current-red" -->

- `highlight-current-green`
<!-- .element: class="fragment highlight-current-green" -->

- `highlight-current-blue`
<!-- .element: class="fragment highlight-current-blue" -->

--

<!-- .slide: data-auto-animate -->

## Fragment

### Multiple fragments

Multiple fragments can be applied to the same element sequentially by wrapping it

<span class="fragment fade-in">
  <span class="fragment highlight-red">
    <span class="fragment fade-out">
      Fade in > Turn red > Fade out
    </span>
  </span>
</span>

--

<!-- .slide: data-auto-animate -->

## Fragment

### Order

Order can be changed using the `data-fragment-index` attribute.

Multiple elements can appear at the same index.

- Appears last
<!-- .element: class="fragment" data-fragment-index="3"-->

- Appears second
<!-- .element: class="fragment" data-fragment-index="2"-->

<!-- list break -->

- Appears first
<!-- .element: class="fragment" data-fragment-index="1"-->

- Appears second
<!-- .element: class="fragment" data-fragment-index="2"-->

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## Transition

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## Transition

<!-- .element: class="r-fit-text" -->

Transition can be changed by setting the `transition` config option globally or `data-transition` attribute on specific slide.

Possible values:

- none
- fade
- slide

<!-- list break -->

- convex
- concave
- zoom

--

<!-- .slide: data-auto-animate -->

## Transition

<!-- .element: class="r-fit-text" -->

### Auto animate

`data-auto-animate` can be added on nearby slides to make an animation on unchanged elements.

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## Functions

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## Functions

<!-- .element: class="r-fit-text" -->

### Code

By enabling `highlight` plugin, you can highlight code blocks.

You can use `[a-b|c-d]` syntax to highlight lines by steps.

```js [1-2|3|4]
let a = 1;
let b = 2;
let c = (x) => 1 + 2 + x;
c(3);
```

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## Functions

<!-- .element: class="r-fit-text" -->

### Overview

Press `Esc` or `O` to enter overview mode when the presentation is active

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## Functions

<!-- .element: class="r-fit-text" -->

### Full Screen

Press `F` or `F11` to enter fullscreen when the presentation is active

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## Functions

<!-- .element: class="r-fit-text" -->

### Zoom

Hold down the `alt` key (`ctrl` in Linux) and click on any element to zoom towards it.

Click again to zoom back out.

---

<!-- .element: class="r-fit-text" -->

## The End

@slideend
