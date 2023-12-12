---
icon: edit
date: 2023-02-09
category:
  - Javascript
tag:
  - javascript

sticky: true
# this page will appear in starred articles
star: true
---

# Javascript

## 1. Introdución a JavaScript

JavaScript é das linguaxes de programación máis populares do mundo. E unha linguaxe moi axeitada para ser a túa primeira linguaxe de programación.

JavaScript pódese empregar para infinidade de cousas. Unhas máis evidentes:

- sitios web
- aplicacións web
- aplicacións do servidor usando Node.js

pero JavaScript non se limita a estas cousas, e tamén se pode usar para

- crear aplicacións móbiles usando ferramentas como React Native
- crear programas para microcontroladores e internet das cousas
- crear aplicacións de reloxos intelixentes

Basicamente pode facer calquera cousa. É tan popular que todo o novo que apareza terá algún tipo de integración de JavaScript nalgún momento.

JavaScript é unha linguaxe de programación:

- de **alto nivel**: proporciona abstraccións que che permiten ignorar os detalles da máquina onde se está a executar. Xestiona a memoria automaticamente cun recolector de lixo, polo que podes centrarte no código en lugar de xestionar a memoria como necesitarían outras linguaxes como C, e ofrece moitas construcións que che permiten tratar con variables e obxectos moi poderosos.
- **dinámico**: a diferenza das linguaxes de programación estáticas, unha linguaxe dinámica executa en tempo de execución moitas das cousas que fai unha linguaxe estática no momento da compilación. Isto ten pros e contras, e ofrécenos poderosas funcións como dixitación dinámica, encadernación tardía, reflexión, programación funcional, alteración do tempo de execución de obxectos, peches e moito máis. Non te preocupes se estas cousas son descoñecidas para ti, saberás todas elas ao final do curso.
- de **tipo dinámico**:  non aplica un tipo a unha variable. E pode reasignar calquera tipo a unha variable, por exemplo, asignando un número enteiro a unha variable que contén unha cadea.
- **escrito de forma vaga**: en oposición á dixitación forte, as linguaxes de tecleo laxo (ou debilmente tipados) non aplican o tipo dun obxecto, o que permite máis flexibilidade, pero negándonos a seguridade e a comprobación de tipos (algo que ofrece TypeScript, que se constrúe enriba de JavaScript).
- **interpretado**: coñécese comunmente como linguaxe interpretada, o que significa que non precisa dunha fase de compilación para que un programa poida executarse, a diferenza de C, Java ou Go, por exemplo. Na práctica, os navegadores compilan JavaScript antes de executalo, por razóns de rendemento, pero isto é transparente para ti: non hai ningún paso adicional.
- **multiparadigma**: a linguaxe non aplica ningún paradigma de programación en particular, a diferenza de Java, por exemplo, que obriga ao uso de programación orientada a obxectos, ou C que obriga a programación imperativa. Podes escribir JavaScript usando un paradigma orientado a obxectos, usando prototipos e a nova sintaxe de clases (a partir de ES6). Podes escribir JavaScript nun estilo de programación funcional, coas súas funcións de primeira clase, ou mesmo nun estilo imperativo (como C).

Por se te estás a preguntar se _JavaScript ten algo que ver con Java_, a verdade é que non; só se trata dunha mala elección de nome, pero hai que vivir con el.

## 2. Un pouco de historia

Creado en 1995, JavaScript percorreu un longo camiño desde os seus humildes inicios.

Foi a primeira linguaxe de script que foi soportada de forma nativa polos navegadores web, e grazas a iso gañou unha vantaxe competitiva sobre calquera outra linguaxe e hoxe en día segue a ser a única linguaxe de script que podemos usar para crear Aplicacións web.

Existen outros idiomas, pero todos deben compilarse en JavaScript ou, máis recentemente, en WebAssembly, pero esta é outra historia.

Ao principio, JavaScript non era tan poderoso como hoxe, e utilizábase principalmente para animacións elegantes e a marabilla coñecida naquela época como _HTML dinámico_ .

Coas crecentes necesidades que demandaba (e segue demandando) a plataforma web, JavaScript _tivo_ tamén a responsabilidade de crecer, para dar cabida ás necesidades dun dos ecosistemas máis utilizados do mundo.

JavaScript úsase moito tamén fóra do navegador. O ascenso de Node.js nos últimos anos desbloqueou o desenvolvemento do backend, que antes era o dominio de Java, Ruby, Python, PHP e linguaxes máis tradicionais do lado do servidor.

Agora JavaScript tamén é a linguaxe que alimenta as bases de datos e moitas máis aplicacións, e mesmo é posible desenvolver aplicacións integradas, aplicacións móbiles, aplicacións para televisores e moito máis. O que comezou como un pequeno idioma dentro do navegador é agora o idioma máis popular do mundo.

## 3. Só JavaScript

Ás veces é difícil separar JavaScript das características do entorno no que se usa.

Por exemplo, a liña `console.log()` que podes atopar en moitos exemplos de código non é JavaScript. Pola contra, forma parte da vasta biblioteca de API que nos proporciona o navegador. Do mesmo xeito, no servidor, ás veces pode ser difícil separar as funcións da linguaxe JavaScript das API proporcionadas por Node.js.

React ou Vue proporcionan unha función en particular? Ou é "JavaScript simple" ou "JavaScript vainilla", como se lle chama a miúdo?

Neste artigo falaremos de JavaScript, a linguaxe sen complicar e o seu proceso de aprendizaxe, e tamén de cousas que están fóra dela, e son proporcionadas por ecosistemas externos.

## 4. Unha breve introdución á sintaxe de JavaScript

Nesta pequena introdución quero falarvos de 5 conceptos:

- espazo en branco
- sensibilidade entre maiúsculas e minúsculas
- literais
- identificadores
- comentarios

### 4.1. Espazo en branco

JavaScript non considera que os espazos en branco sexan significativos. Pódense engadir espazos e saltos de liña do xeito que che guste, aínda que isto sexa só _en teoría_.

Na práctica, o máis probable é que manteñas un estilo ben definido e te adhiras ao que a xente usa habitualmente. E seguramente o fagas mediante un linter ou unha ferramenta de estilo como _Prettier_. 

E iso está ben, así que deixa que as ferramentas fagan ese traballo para ti.

### 4.2. Sensible a maiúsculas e minúsculas

JavaScript distingue entre maiúsculas e minúsculas. Unha variable nomeada `something` é diferente de outra chamada `Something`.

E o mesmo ocorre con calquera outro identificador.

### 4.3. Literais

Definimos como **literal** un valor que está escrito no código fonte, por exemplo, un número, unha cadea, un booleano ou tamén construcións máis avanzadas, como Object Literals ou Array Literals:

```js
5
'Test'
true
['a', 'b']
{color: 'red', shape: 'Rectangle'}
```

### 4.4. Identificadores

Un **identificador** é unha secuencia de caracteres que se pode usar para identificar unha variable, unha función ou un obxecto. Pode comezar cunha letra, o signo de dólar `$` ou un guión baixo `_` , e pode conter díxitos. Usando Unicode, unha letra pode ser calquera carácter permitido, por exemplo, un emoji 😄.

```js
Test;
test;
TEST;
_test;
Test1;
$test;
```

O signo de dólar úsase habitualmente para facer referencia a elementos DOM.

Algunhas palabras están reservadas para uso interno de JavaScript e non se poden usar como identificadores.

### 4.5. Comentarios

Os comentarios son unha das partes máis importantes de calquera programa. En calquera linguaxe de programación son importantes porque nos permiten anotar o código e engadir información importante que, doutro xeito, non estaría dispoñible para outras persoas (ou para nós mesmos) cando lemos o código.

En JavaScript, podemos escribir un comentario nunha única liña usando `//`. O  intérprete de JavaScript ignorará todo o que segue a `//`, e non será considerado código.

Como isto:

```js
// un comentario
true; // outro comentario
```

Tamén se pode crear un comentario de varias liñas. Comezando con `/*` e rematándoo con `*/`.

Todo o  contido intermedio non se considera código:

```js
/* algún tipo
de
comentario
de varias liñas
*/
```

## 5. Punto e coma

Cada liña dun programa JavaScript termina opcionalmente usando puntos e coma.

Dixen opcionalmente, porque o intérprete de JavaScript é o suficientemente intelixente como para introducir puntos e comas para ti.

Na maioría dos casos, poderías omitir por completo os puntos e coma dos seus programas.

Este é un caso ben debatido, e seguro atoparás código que usa punto e coma tras cada sentenza e código que non o usa en absoluto. As preferencias son varias.

O meu consello é que empregues o punto e coma mentres estás aprendendo, axudarache a ler mellor o código e entender onde acaba unha sentenza e enceta outra. Co tempo aprenderás a obviar esta regra e evitar o punto e coma a non ser que sexa estritamente necesario.

## 6. Valores

Unha cadea `hello` é un **valor** . Un número como `12`é un **valor** .

`hello`  e `12`  son valores. `string` e `number`son os **tipos** deses valores.

O **tipo** é o tipo de valor, a súa categoría. Temos moitos tipos diferentes en JavaScript, e falaremos deles en detalle máis adiante. Cada tipo ten as súas propias características.

Cando necesitamos ter unha referencia a un valor, asignámolo a unha **variable**. A variable pode ter un nome, e o valor é o que se almacena nunha variable, polo que despois podemos acceder a ese valor a través do nome da variable. 

## 7. Variables

Unha variable é un valor asignado a un identificador, polo que poderás usar ese valor máis tarde con só referencialo polo nome da variable.

JavaScript está **escrito de forma vaga**, polo que as variables non teñen un tipo concreto. E o contido desa variable o que aclara de que tipo de dato se trata cada unha. 

Unha variable debe ser declarada antes de poder usala.

Temos 2 formas principais de declarar variables. O primeiro é usar `const`:

```js
const a = 0;
```

A segunda forma é usar `let`:

```js
let a = 0;
```

Cal é a diferenza?

`const`define unha referencia constante a un valor. Isto significa que a referencia non se pode cambiar. Non se lle pode resignar un valor novo.

Usando `let` o valor asignado pode cambiar e pódese asignar un novo valor.

Por exemplo, non podes facer isto:

```js
const a = 0;
a = 1;
```

Porque recibirá un erro: `TypeError: Assignment to constant variable.`.

Por outra banda, podes facer iso usando `let`:

```js
let a = 0;
a = 1;
```

`const`non significa "constante" como noutras linguaxes, como C. En particular, non significa que o valor non poida cambiar, senón que non se pode reasignar. Se a variable apunta a un obxecto ou unha matriz (veremos máis sobre obxectos e matrices máis tarde) o contido do obxecto ou da matriz pode cambiar libremente.

As variables constantes deben inicializarse no momento da declaración, isto é que deben ter un valor:

```js
const a = 0;
```

pero con `let `os valores pódense asignar máis tarde:

```js
let a;
a = 0;
```

Podes declarar varias variables á vez na mesma declaración:

```js
const a = 1,
  b = 2;
let c = 1,
  d = 2;
```

Pero non se pode volver declarar a mesma variable máis dunha vez:

```js
let a = 1;
let a = 2;
```

ou recibiría un erro de "declaración duplicada".

O meu consello é que sempre uses `const` e só uses `let` cando saibas que vas ter que reasignarlle un valor a esa variable. Se sabemos que un valor non se pode reasignar, é unha fonte menos de erros.

Agora que vimos como traballar con `const` e `let`, imos mencionar `var`.

Ata 2015, `var` era a única forma en que podíamos declarar unha variable en JavaScript. Hoxe, unha base de código moderna probablemente só use `const` e `let`. Hai algunhas diferenzas fundamentais que se detallan [nesta publicación](https://flaviocopes.com/javascript-difference-let-var/) , pero se estás comezando, quizais non che importe. Así que ti só usa `const` e `let` a partir de agora.

## 8. Tipos

As variables en JavaScript non teñen ningún tipo adxunto.

Están _sen escribir_ .

Unha vez que lle asigne un valor ou dato de algún tipo a unha variable, ese será o tipo da variable. Aínda que posteriormente poderás reasignarlle a variable un valor ou dato de calquera outro tipo, sen ningún problema. Así se cambia o tipo de dato tamén o fai o tipo de variable, pero iso non debe preocuparte.

En JavaScript temos 2 tipos principais de datos: **tipos primitivos** e **tipos de obxectos**.

### 8.1. Tipos primitivos

Os tipos primitivos son

- números
- cadeas
- booleanos
- símbolos

E dous tipos especiais: `null` e `undefined`.

### 8.2. Tipos de obxectos

Calquera valor que non sexa de tipo primitivo (unha cadea, un número, un booleano, nulo ou indefinido) é un **obxecto**.

Os tipos de obxectos teñen **propiedades** e tamén teñen **métodos** que poden actuar sobre esas propiedades.

Máis adiante falaremos dos obxectos.

## 9. Expresións

Unha expresión é unha única unidade de código JavaScript que o motor JavaScript pode avaliar e devolver un valor.

As expresións poden variar en complexidade.

Partimos das moi sinxelas, chamadas expresións primarias:

```js
2;
0.02;
("something");
true;
false;
this; // the current scope - ámbito actual
undefined;
i; //where i is a variable or a constant
```

As expresións aritméticas son expresións que levan unha variable e un operador (máis información sobre os operadores en breve) e dan como resultado un número:

```js
1 / 2;
i++;
i -= 2;
i * 2;
```

As expresións de cadea son expresións que resultan nunha cadea:

```js
"A " + "string";
```

As expresións lóxicas fan uso de operadores lóxicos e resólvense nun valor booleano:

```js
a && b;
a || b;
!a;
```

As expresións máis avanzadas inclúen obxectos, funcións e matrices, e presentarémolos máis tarde.

## 10. Operadores

Os operadores permítenche usar dúas expresións sinxelas e combinalas para formar unha expresión máis complexa.

Podemos clasificar os operadores en función dos operandos cos que traballan. Algúns operadores traballan con 1 operando. A maioría con 2 operandos. Só un operador funciona con 3 operandos.

Nesta primeira introdución aos operadores, presentaremos os operadores cos que probablemente estea familiarizado: os operadores binarios.

Xa vimos un operador cando falamos de variables: o operador de asignación `=`. 

Usamos `=` para asignar un valor a unha variable:

```js
let b = 2;
```

Imos agora introducir outro conxunto de operadores binarios, cos que xa estás familiarizado a partir das matemáticas básicas.

### 10.1. O operador de adición (+)

```js
const three = 1 + 2;
const four = three + 1;
```

O operador `+` tamén serve para a concatenación de cadeas - *strings*-. Así que presta atención se usas cadeas:

```js
const three = 1 + 2;
three + 1; // 4
"three" + 1; // three1
```

### 10.2. O operador de substración (-)

```js
const two = 4 - 2;
```

### 10.3. O operador de división (/)

Devolve o cociente de dividir o primeiro operador entre o segundo:

```js
const result = 20 / 5; //result === 4
const result = 20 / 7; //result === 2.857142857142857
```

Se divides entre cero, JavaScript non xera ningún erro pero devolve o valor `Infinity` (ou `-Infinity` se o valor é negativo).

```js
1 / 0  //Infinity
-1 / 0; //-Infinity
```

### 10.4. O operador resto (%)

Devolve o resto de dividir o primeiro operador entre o segundo. O resto é un cálculo moi útil en moitos casos de uso:

```js
const result = 20 % 5; //result === 0
const result = 20 % 7; //result === 6
```

Un resto por cero é sempre `NaN`, un valor especial que significa "Non é un número":

```js
1 % 0; //NaN
```

### 10.5. O operador de multiplicación (\*)

Multiplica dous números

```js
1 * 2; //2
1 * -2; //-2
```

### 10.6. O operador de exponenciación (\*\*)

Eleva o primeiro operando á potencia do segundo operando

```js
1 ** 2; //1
2 ** 1; //2
2 ** 2; //4
2 ** 8; //256
8 ** 2; //64
```

## 11. Regras de precedencia

Cada declaración complexa con varios operadores na mesma liña introducirá problemas de precedencia.

Tome este exemplo:

```js
let a = 1 * 2 + ((5 / 2) % 2);
```

O resultado é 2,5, pero por que?

*Que operacións se executan primeiro e cales hai que esperar?*

Algunhas operacións teñen máis prioridade que outras. As regras de precedencia están listadas nesta táboa:

| Operador    | Descrición              |
| ----------- | ----------------------- |
| `*` `/` `%` | multiplicación/división |
| `+` `-`     | suma/resta              |
| `=`         | asignación              |

As operacións no mesmo nivel (como `+` e `-`) execútanse na orde en que se atopan, de esquerda a dereita.

Seguindo estas regras, a operación anterior pódese resolver deste xeito:

```js
let a = 1 * 2 + ((5 / 2) % 2);
let a = 2 + ((5 / 2) % 2);
let a = 2 + (2.5 % 2);
let a = 2 + 0.5;
let a = 2.5;
```

## 12. Operadores de comparación

Despois dos operadores de asignación e matemáticos, o terceiro conxunto de operadores que imos ver son os operadores de comparación.

Podes usar os seguintes operadores para comparar dous números ou dúas cadeas.

Os operadores de comparación sempre devolven un booleano, un valor que só pode ser `true` ou `false`.

Estes son **operadores de comparación de desigualdade**:

- `<`    significa "menos de"
- `<=`  significa "menos que ou igual a"
- `>`    significa "maior que"
- `>=`  significa "maior que ou igual a"

Exemplo:

```js
let a = 2;
a >= 1; //true
```

Ademais destes 4, temos outro 2 **operadores de igualdade** . Aceptan dous valores e devolven un booleano:

- `===`comproba a igualdade
- `!==`comproba a desigualdade

Ter en conta que en JavaScript tamén temos `==` e `!=`, aínda que se  suxire usar só, ou preferentemente, `===` e `!==` porque poden evitar algúns problemas, complexos aínda que sutís.

## 13. Condicionais

Cos operadores de comparación existentes podemos compoñer estruturas condicionais.

Unha instrución `if` úsase para facer que o programa tome unha ruta, ou outra, dependendo do resultado dunha avaliación de expresións.

Este é o exemplo máis sinxelo, que sempre executa:

```js
if (true) {
  //do something
}
```

pola contra, isto nunca se executa:

```js
if (false) {
  //do something (? never ?)
}
```

O condicional verifica un valor verdadeiro ou falso en base á expresión que se lle pasa. Se pasas un número, sempre se avalía como verdadeiro a menos que sexa 0. Se pasas unha cadea, sempre se avalía como verdadeiro a menos que sexa unha cadea baleira. Esas son regras xerais de tipos de avaliación - *casting* -  a un booleano.

Notaches os corchetes ou chaves rizadas? Iso chámase **bloque** e úsase para agrupar unha lista de instrucións diferentes.

Pódese poñer un bloque onde poida ter unha única declaración. E se tes unha única instrución para executar despois dos condicionais, podes omitir o bloque e simplemente escribir a instrución:

```js
if (true) doSomething();
```

Aínda que usar chaves pode resultar máis claro.

```js
if (true) {
    doSomething()
};
```

### 13.1. `if not` - Se non

Podes achegar unha segunda parte á declaración `if`: `else`.

Achega unha instrución que se vai executar se a condición `if` é falsa:

```js
if (true) {
  //do something
} else {
  //do something else
}
```

Dado que `else` acepta unha declaración, podes aniñar outra declaración if/else dentro dela:

```js
if (a === true) {
  //do something
} else if (b === true) {
  //do something else
} else {
  //fallback
}
```

## 14. Arrays

Unha matriz é unha colección de elementos.

As matrices en JavaScript non son un _tipo_ por si só.

As matrices son **obxectos** .

Podemos inicializar unha matriz baleira destas dúas formas diferentes:

```js
const a = [];
const a = Array();
```

O primeiro usa a **sintaxe literal da matriz** . O segundo usa a función integrada Array.

Podes encher previamente a matriz usando esta sintaxe:

```js
const a = [1, 2, 3];
const a = Array.of(1, 2, 3);
```

Unha matriz pode conter calquera valor, incluso valores de diferentes tipos:

```js
const a = [1, "Flavio", ["a", "b"]];
```

Dado que podemos engadir unha matriz a unha matriz, podemos crear matrices multidimensionais, que teñen aplicacións moi útiles:

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

matrix[0][0]; //1
matrix[2][0]; //7
```

:eye:  *É habitual que en programación a primeira posición - número- dunha iteración sexa 0*

Podes acceder a calquera elemento da matriz facendo referencia ao seu índice, que comeza desde cero:

```js
a[0]; //1
a[1]; //2
a[2]; //3
```

Podes inicializar unha nova matriz cun conxunto de valores usando esta sintaxe, que primeiro inicializa unha matriz de 12 elementos e enche cada elemento co número `0`:

```js
Array(12).fill(0);
```

Podes obter o número de elementos da matriz comprobando a súa propiedade `length`:

```js
const a = [1, 2, 3];
a.length; //3
```

Ter en conta que se pode definir a lonxitude da matriz. Se asignas un número maior que a capacidade actual da matriz, non pasa nada. Se asignas un número menor, a matriz córtase nesa posición:

```js
const a = [1, 2, 3];
a; //[ 1, 2, 3 ]
a.length = 2;
a; //[ 1, 2 ]
```

### 14.1. Como engadir un elemento a unha matriz

Podemos engadir un elemento ao final dunha matriz usando o método `push()`:

```js
a.push(4);
```

Podemos engadir un elemento ao comezo dunha matriz usando o método `unshift()`:

```js
a.unshift(0);
a.unshift(-2, -1);
```

### 14.2. Como eliminar un elemento dunha matriz

Podemos eliminar un elemento do final dunha matriz usando o método `pop()`:

```js
a.pop();
```

Podemos eliminar un elemento do inicio dunha matriz usando o método `shift()`

```js
a.shift();
```

### 14.3. Como unir dúas ou máis matrices

Podes unir varias matrices usando o método `concat()`:

```js
const a = [1, 2];
const b = [3, 4];
const c = a.concat(b); //[1,2,3,4]
a; //[1,2]
b; //[3,4]
```

Tamén pode usar o operador **de propagación**`...` ( ) deste xeito:

```js
const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b];
c; //[1,2,3,4]
```

### 14.4. Como atopar un elemento específico na matriz

Podes usar o método `find()` nunha matriz:

```js
a.find((element, index, array) => {
  //return true or false
});
```

Este método devolve o primeiro elemento que devolve `true` na función de devolución de chamada proporcionada. Devolve indefinido -`undefined`-  se nada devolve "verdadeiro" - `true`.

É responsabilidade do programador definir o corpo da función de devolución de chamada, para que `find()` poida dicir o que está a buscar.

Unha sintaxe de uso común é:

```js
const my_id = 3;

a.find((x) => x.id === my_id);
```

A liña anterior devolverá o primeiro elemento da matriz que teña `id`  igual a `3`, o valor de `my_id`.

`findIndex()` é outro método de matriz que funciona de forma similar a `find()`, pero devolve o índice do primeiro elemento que devolve verdadeiro, e se non se atopa, devolve `undefined`:

```js
a.findIndex((element, index, array) => {
  //return true or false
});
```

Outro método útil é `includes()`:

```js
a.includes(value);
```

Devolve verdadeiro se `a` contén `value`.

```js
a.includes(value, i);
```

Devolve verdadeiro se `a` contén `value` despois da posición `i`.

## 15. Cadeas

Unha cadea é unha secuencia de caracteres.

Tamén se pode definir como un literal de cadea, que se encerra entre comiñas ou comiñas dobres:

```js
"Unha string ou cadea";
"Outra string";
```

É indistinto usar unhas ou outras, pero se coherente e non as mestures. 

Asigna un valor de cadea a unha variable como esta:

```js
const name = "Xian";
```

Podes calcular a lonxitude dunha cadea usando a súa propiedade `length`:

```js
"Xian".length; //4
const name = "Xian";
name.length; //4
```

Esta é unha cadea baleira: `''`. A súa propiedade de lonxitude é 0:

```js
"".length; //0
```

Pódense unir dúas cadeas usando o operador  `+`:

```js
"A " + "string";
```

Podes usar o operador  `+`  para _interpolar_ variables:

```js
const name = "Xian";
"Meu nome é " + name; //Meu nome é Xian
```

Outra forma de definir cadeas é usar unha sintaxe especial chamada **literal** , definida dentro de acentos inversos - *backticks* \` \`. Son especialmente útiles para facer que as cadeas multiliña sexan moito máis sinxelas. Coas comiñas simples ou dobres non se pode definir facilmente unha cadea multiliña: necesitarías usar caracteres de escape.

Unha vez que se abre un literal de modelo con *backtick*, só tes que premer Intro para crear unha nova liña, sen caracteres especiais, e representarase como está:

```js
const string = `Hey
this

string
is awesome!`;
```

Os modelos literais tamén son excelentes porque proporcionan un xeito sinxelo de interpolar variables e expresións en cadeas.

Faino usando a sintaxe `${...}`:

```js
const var = 'test'
const string = `something ${var}`
//something test
```

dentro do marcado `${}` podes engadir calquera cousa, incluso expresións:

```js
const string = `something ${1 + 2 + 3}`;
const string2 = `something
  ${a > b ? "a" : "b"}`;
```

## 16. Bucles

Os bucles son unha das principais **estruturas de control** de JavaScript.

Cun bucle podemos automatizar e repetir indefinidamente un bloque de código, cantas veces queiramos que se execute.

JavaScript ofrece moitas formas de iterar a través de bucles.

Pero centrémonos nestes 3 xeitos:

- bucles `while`
- bucles `for`
- bucles `for ... of`

### 16.1.`while`

O bucle while é a estrutura de bucle máis sinxela que nos proporciona JavaScript.

Engadimos unha condición despois da palabra clave `while` e proporcionamos un bloque que se executa ata que a condición se avalía como `true`.

Exemplo:

```js
const list = ["a", "b", "c"];
let i = 0;
while (i < list.length) {
  console.log(list[i]); //value
  console.log(i); //index
  i = i + 1;
}
```

Podes interromper un bucle `while` usando a palabra clave `break`, así:

```js
while (true) {
  if (somethingIsTrue) break;
}
```

e se decides que no medio dun bucle queres saltarte a iteración actual, podes ir á seguinte iteración usando `continue`:

```js
while (true) {
  if (somethingIsTrue) continue;

  //do something else
}
```

Moi semellante a `while`, temos os bucles `do..while`. É basicamente o mesmo que `while`, excepto que a condición se avalía _despois de_ executar o bloque de código.

Isto significa que o bloque sempre se executa _polo menos unha vez_.

Exemplo:

```js
const list = ["a", "b", "c"];
let i = 0;
do {
  console.log(list[i]); //value
  console.log(i); //index
  i = i + 1;
} while (i < list.length);
```

### 16.2.`for`

A segunda estrutura de bucle, moi importante en JavaScript, é o bucle **for** .

Usamos a palabra clave `for` e pasamos un conxunto de 3 instrucións: a inicialización, a condición e a parte de incremento.

Exemplo:

```js
const list = ["a", "b", "c"];

for (let i = 0; i < list.length; i++) {
  console.log(list[i]); //value
  console.log(i); //index
}
```

Do mesmo xeito que cos bucles `while`, podes interromper un bucle `for` usando `break`, e podes avanzar rapidamente á seguinte iteración dun bucle `for` usando `continue`.

### 16.3.`for...of`

Este bucle é relativamente recente (introducido en 2015) e é unha versión simplificada do bucle `for`:

```js
const list = ["a", "b", "c"];

for (const value of list) {
  console.log(value); //value
}
```

## 17. Funcións

En calquera programa JavaScript moderadamente complexo, todo ocorre dentro das funcións.

As funcións son unha parte fundamental e esencial de JavaScript.

**Que é unha función?**

Unha función é un bloque de código, autónomo.

Aquí tes unha **declaración de función** :

```js
function getData() {
  // do something
}
```

Pódese executar unha función cando queiras invocándoa polo seu nome, así:

```js
getData();
```

Unha función pode ter un ou máis argumentos:

```js
function getData() {
  //do something
}

function getData(color) {
  //do something
}

function getData(color, age) {
  //do something
}
```

Cando podemos pasar un argumento, invocamos a función pasando parámetros:

```js
function getData(color, age) {
  //do something
}

getData("green", 24);
getData("black");
```

Ter en conta que na segunda invocación se pasa o parámetro cadea `black` como argumento `color`, pero non o parámetro `age`. Neste caso, dentro da función,  `age` está `undefined`.

Podemos comprobar se un valor non está indefinido usando este condicional:

```js
function getData(color, age) {
  //do something
  if (typeof age !== "undefined") {
    //...
  }
}
```

`typeof` é un operador unario - só necesita un único operando- que nos permite comprobar o tipo dunha variable.

Tamén o podes consultar deste xeito:

```js
function getData(color, age) {
  //do something
  if (age) {
    //...
  }
}
```

aínda que neste caso o condicional será falso se `age` é `null`, `0` ou unha cadea baleira.

Podes ter valores predeterminados para os parámetros, no caso de que non se pasen:

```js
function getData(color = "black", age = 25) {
  //do something
}
```

Podes pasar calquera valor como parámetro: números, cadeas, booleanos, matrices, obxectos e tamén funcións.

Unha función ten un valor de retorno. De forma predeterminada, unha función devolve `undefined`, a menos que se engada unha palabra clave `return` cun valor:

```js
function getData() {
  // do something
  return "hi!";
}
```

Podemos asignar este valor de retorno a unha variable cando invocamos a función:

```js
function getData() {
  // do something
  return "hi!";
}

let result = getData();
```

`result` agora contén unha cadea co valor  `hi!`.

Só podes devolver un valor.

Para devolver varios valores, podes devolver un obxecto ou unha matriz, así:

```js
function getData() {
  return ["Xian", 37];
}

let [name, age] = getData();
```

As funcións pódense definir dentro doutras funcións:

```js
const getData = () => {
  const dosomething = () => {};
  dosomething();
  return "test";
};
```

A función aniñada non se pode chamar desde o exterior da función que a encerra.

Tamén se pode devolver unha función desde unha función.

## 18. Funcións de frecha

As funcións de frecha son unha introdución recente a JavaScript.

Utilízanse con moita frecuencia en lugar de funcións “regulares”, que acabamos de describir no apartado anterior. Atoparás as dúas formas utilizadas en todas partes.

Visualmente, permítenche escribir funcións cunha sintaxe máis curta, desde:

```js
function getData() {
  //...
}
```

a

```js
() => {
  //...
};
```

Pero... fíxate que aquí non temos nome.

As funcións de frecha son anónimas. Debemos asignalas a unha variable.

Podemos asignar unha función regular a unha variable, como esta:

```js
let getData = function getData() {
  //...
};
```

Cando o fagamos, podemos eliminar o nome da función:

```js
let getData = function () {
  //...
};
```

e invocar a función usando o nome da variable:

```js
let getData = function () {
  //...
};
getData();
```

É o mesmo que facemos coas funcións de frecha:

```js
let getData = () => {
  //...
};
getData();
```

Se o corpo da función contén só unha única instrución, pode omitir os parénteses e escribir todo nunha única liña:

```js
const getData = () => console.log("hi!");
```

Os parámetros pásanse entre parénteses:

```js
const getData = (param1, param2) => console.log(param1, param2);
```

Se tes un (e só un) parámetro, podes omitir os parénteses por completo:

```js
const getData = (param) => console.log(param);
```

As funcións de frecha permítenche ter un retorno implícito: os valores son devoltos sen ter que usar a palabra clave `return`.

Funciona cando hai unha instrución en liña no corpo da función:

```js
const getData = () => "test";

getData(); //'test'
```

Do mesmo xeito que coas funcións habituais, podemos ter parámetros predeterminados:

Podes ter valores predeterminados para os parámetros, no caso de que non se pasen:

```js
const getData = (color = "black", age = 2) => {
  //do something
};
```

e só podemos devolver un valor.

As funcións de frecha poden conter outras funcións de frecha ou tamén funcións normais.

Son moi similares, así que pódeste preguntar por que se engadiron? A gran diferenza coas funcións regulares é cando se usan como métodos obxecto. Algo que analizaremos en breve.

## 19. Obxectos

Calquera valor que non sexa de tipo primitivo (unha cadea, un número, un booleano, un símbolo, nulo ou indefinido) é un **obxecto** .

E así é como definimos un obxecto:

```js
const car = {};
```

Esta é a sintaxe **literal do obxecto**.

Tamén se pode usar a sintaxe `new Object`:

```js
const car = new Object();
```

Outra sintaxe é usar `Object.create()`:

```js
const car = Object.create();
```

Tamén pode inicializar un obxecto usando a palabra clave `new` antes dunha función cunha letra maiúscula. Esta función serve como construtor para ese obxecto. Alí, podemos inicializar os argumentos que recibimos como parámetros, para configurar o estado inicial do obxecto:

```js
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}
```

Inicializamos un novo obxecto usando

```js
const myCar = new Car("Ford", "Fiesta");
myCar.brand; //'Ford'
myCar.model; //'Fiesta'
```

Os obxectos **pásanse sempre por referencia** .

Se lle asignas a unha variable o mesmo valor doutra, se é un tipo primitivo como un número ou unha cadea, pásanse por valor:

Tome este exemplo:

```js
let age = 36;
let myAge = age;
myAge = 37;
age; //36
const car = {
  color: "blue",
};
const anotherCar = car;
anotherCar.color = "yellow";
car.color; //'yellow'
```

Mesmo as matrices ou as funcións están, baixo a denominación de obxecto, polo que é importante entender como funcionan.

### 19.1. Propiedades do obxecto

Os obxectos teñen **propiedades**, que están compostas por unha etiqueta asociada a un valor.

O valor dunha propiedade pode ser de calquera tipo, o que significa que pode ser unha matriz, unha función e mesmo pode ser un obxecto, xa que os obxectos poden aniñar outros obxectos.

Esta é a sintaxe literal do obxecto que vimos no apartado anterior:

```js
const car = {};
```

Podemos definir unha propiedade `color` deste xeito:

```js
const car = {
  color: "blue",
};
```

aquí temos un obxecto `car` cunha propiedade chamada `color`, co valor `blue`.

As etiquetas poden ser calquera cadea, pero coidado cos caracteres especiais: se se quixese incluír un carácter non válido como nome de variable no nome da propiedade, tería que usar comiñas ao redor:

```js
const car = {
  color: "blue",
  "the color": "blue",
};
```

Os caracteres de nome de variable non válidos inclúen espazos, guións e outros caracteres especiais.

Como ves, cando temos varias propiedades, separamos cada propiedade cunha coma.

Podemos recuperar o valor dunha propiedade usando 2 sintaxes diferentes.

A primeira é **a notación de puntos** :

```js
car.color; //'blue'
```

A segunda (que é a única que podemos usar para propiedades con nomes non válidos), é usar corchetes:

```js
car["the color"]; //'blue'
```

Se accedes a unha propiedade inexistente, obterás o valor `undefined`:

```js
car.brand; //undefined
```

Como se dixo, os obxectos poden ter obxectos aniñados como propiedades:

```js
const car = {
  brand: {
    name: "Ford",
  },
  color: "blue",
};
```

Neste exemplo, podes acceder ao nome da marca usando

```js
car.brand.name;
```

ou

```js
car["brand"]["name"];
```

Podes establecer o valor dunha propiedade cando defines o obxecto.

Pero sempre podes actualizalo máis tarde:

```js
const car = {
  color: "blue",
};

car.color = "yellow";
car["color"] = "red";
```

E tamén podes engadir novas propiedades a un obxecto:

```js
car.model = "Fiesta";

car.model; //'Fiesta'
```

Dado o obxecto

```js
const car = {
  color: "blue",
  brand: "Ford",
};
```

podes eliminar unha propiedade deste obxecto usando

```js
delete car.brand;
```

### 19.2. Métodos de obxecto

Falouse das funcións nun apartado anterior.

As funcións pódense asignar a unha propiedade de función, e neste caso chámanse **métodos** .

Neste exemplo, a propiedade `start` ten unha función asignada e podemos invocala usando a sintaxe de puntos que usamos para as propiedades, cos parénteses ao final:

```js
const car = {
  brand: "Ford",
  model: "Fiesta",
  start: function () {
    console.log("Started");
  },
};

car.start();
```

Dentro dun método definido mediante unha sintaxe  `function() {}` temos acceso á instancia do obxecto facendo referencia a `this`.

No seguinte exemplo, temos acceso aos valores das propiedades `brand` e `model` usando `this.brand` e `this.model`:

```js
const car = {
  brand: "Ford",
  model: "Fiesta",
  start: function () {
    console.log(`Started
      ${this.brand} ${this.model}`);
  },
};

car.start();
```

É importante ter en conta esta distinción entre funcións regulares e funcións de frecha: non temos acceso a `this` se usamos unha función de frecha:

```js
const car = {
  brand: "Ford",
  model: "Fiesta",
  start: () => {
    console.log(`Started
      ${this.brand} ${this.model}`); //not going to work
  },
};

car.start();
```

Isto débese a que **as funcións de frecha non están vinculadas ao obxecto** .

Esta é a razón pola que as funcións regulares adoitan usarse como métodos de obxecto.

Os métodos poden aceptar parámetros, como funcións normais:

```js
const car = {
  brand: "Ford",
  model: "Fiesta",
  goTo: function (destination) {
    console.log(`Going to ${destination}`);
  },
};

car.goTo("Rome");
```

## 20. Clases

Falamos dos obxectos, que son unha das partes máis interesantes de JavaScript.

Neste apartado imos introducir as clases.

**Que son as clases?** Son unha forma de definir un patrón común para varios obxectos.

Tomemos un obxecto persoa:

```js
const person = {
  name: "Xian",
};
```

Podemos crear unha clase chamada `Person` (fíxate na capital `P`, unha convención cando se usan clases e nomealas coa primeira letra maiúscula), que teña unha propiedade `name`:

```js
class Person {
  name;
}
```

Agora desde esta clase, inicializamos un obxecto `xian` como este:

```js
const xian = new Person();
```

Chamamos  `xian` a unha _instancia_ da clase Person.

Podemos establecer o valor da propiedade `name`:

```js
xian.name = "Xian";
```

e podemos acceder a el usando

```js
xian.name;
```

como facemos coas propiedades dos obxectos.

As clases poden albergar propiedades, como `name`, e métodos.

Os métodos defínense deste xeito:

```js
class Person {
  hello() {
    return "Hello, I am Xian";
  }
}
```

e podemos invocar métodos nunha instancia da clase:

```js
class Person {
  hello() {
    return "Hello, I am Xian";
  }
}
const xian = new Person();
xian.hello();
```

Hai un método especial chamado `constructor()` que podemos usar para inicializar as propiedades da clase cando creamos unha nova instancia de obxecto.

Funciona así:

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return "Hello, I am " + this.name + ".";
  }
}
```

Ter en conta como usamos `this`  para acceder á instancia do obxecto.

Agora podemos crear unha instancia dun novo obxecto da clase, pasando unha cadea, e cando chamemos a `hello`, obteremos unha mensaxe personalizada:

```js
const xian = new Person("xian");
xian.hello(); //'Hello, I am Xian.'
```

Cando se inicializa o obxecto, chámase ao método `constructor`, pasando calquera parámetro.

Normalmente os métodos defínense na instancia do obxecto, non na clase.

Podes definir un método para permitir que se execute `static` na clase no seu lugar:

```js
class Person {
  static genericHello() {
    return "Hello";
  }
}

Person.genericHello(); //Hello
```

O que, ás veces, resulta moi útil.

## 21. Herdanza

Unha clase pode **estender** outra clase e os obxectos inicializados usando esa clase herdan todos os métodos de ambas clases.

Supoñamos que temos unha clase `Person`:

```js
class Person {
  hello() {
    return "Hello, I am a Person";
  }
}
```

Podemos definir unha nova clase `Programmer` que se estenda `Person`:

```js
class Programmer extends Person {}
```

Agora, se instanciamos un novo obxecto coa clase  `Programmer`, ten acceso ao método  `hello()`:

```js
const xian = new Programmer();
xian.hello(); //'Hello, I am a Person'
```

Dentro dunha clase filla, podes facer referencia á clase pai chamando `super()`:

```js
class Programmer extends Person {
  hello() {
    return super.hello() + ". I am also a programmer.";
  }
}

const xian = new Programmer();
xian.hello();
```

O programa anterior imprime _Ola, son unha persoa. Tamén son programador._ .

## 22. Programación asíncrona e devolucións de chamada

Na maioría das veces, o código JavaScript execútase de forma sincronizada.

Isto significa que se executa unha liña de código, despois execútase a seguinte, etc.

Todo é como esperas e funciona como na maioría das linguaxes de programación.

Non obstante, hai momentos nos que non podes esperar a que se execute unha liña de código.

Non podes esperar 2 segundos a que se cargue un arquivo grande e deter o programa por completo.

Non podes esperar a que se descargue un recurso de rede antes de facer outra cousa.

JavaScript resolve este problema usando **devolucións de chamada** .

Un dos exemplos máis sinxelos de como usar as devolucións de chamada son os temporizadores. Os temporizadores non forman parte de JavaScript, pero son proporcionados polo navegador e por Node.js. 

Falemos dun dos temporizadores dispoñibles: `setTimeout()`.

A función `setTimeout()` acepta dous argumentos: unha función e un número. 

O número son os milisegundos que deben pasar antes de que se execute a función.

Exemplo:

```js
setTimeout(() => {
  // runs after 2 seconds
  console.log("dentro da función");
}, 2000);
```

A función que contén a liña `console.log('dentro da función')` executarase despois de 2 segundos.

Se engades un `console.log('before')` anterior á función e un `console.log('after')` despois:

```js
console.log("before");
setTimeout(() => {
  // runs after 2 seconds
  console.log("dentro da función");
}, 2000);
console.log("after");
```

Verás que na túa consola ocorre isto:

```js
before
after
dentro da función
```

A función de devolución de chamada execútase de forma asíncrona.

Este é un patrón moi común cando se traballa co sistema de arquivos, a rede, os eventos ou o DOM no navegador.

Todas as cousas que mencionei non son JavaScript "esenciais", polo que non se explican neste manual, pero atoparás moitos exemplos noutros manuais dispoñibles. Proba en [flaviocopes.com](https://flaviocopes.com/book/read/js/) .

Así é como podemos implementar as devolucións de chamada no noso código.

Definimos unha función que acepta un parámetro `callback`, que é unha función.

Cando o código está listo para invocar a devolución de chamada, invocámolo pasando o resultado:

```js
const doSomething = (callback) => {
  //do things
  //do things
  const result = /* .. */ callback(result);
};
```

O código que usa esta función usaríao así:

```js
doSomething((result) => {
  console.log(result);
});
```

## 23. Promesas

As promesas son unha forma alternativa de tratar o código asíncrono.

Como vimos no apartado anterior, coas devolucións de chamada estaríamos pasando unha función a outra chamada de función, que sería chamada cando a función se remate de procesar.

Como isto:

```js
doSomething((result) => {
  console.log(result);
});
```

Cando o código `doSomething()` remata, chama á función recibida como un parámetro:

```js
const doSomething = (callback) => {
  //do things
  //do things
  const result = /* .. */ callback(result);
};
```

O principal problema con este enfoque é que se necesitamos usar o resultado desta función no resto do noso código, todo o noso código debe estar aniñado dentro da devolución de chamada, e se temos que facer 2-3 devolucións de chamada introducimos o que é normalmente definido como "inferno de devolución de chamada" con moitos niveis de funcións sangrados noutras funcións:

```js
doSomething((result) => {
  doSomethingElse((anotherResult) => {
    doSomethingElseAgain((yetAnotherResult) => {
      console.log(result);
    });
  });
});
```

As promesas son unha forma de tratar con isto.

En vez de facer:

```js
doSomething((result) => {
  console.log(result);
});
```

Chamamos unha función baseada en promesas deste xeito:

```js
doSomething().then((result) => {
  console.log(result);
});
```

Primeiro chamamos á función, despois temos un método `then()` que se chama cando remata a función.

A sangría non importa, pero moitas veces usarás este estilo para obter claridade.

É común detectar erros mediante un método `catch()`:

```js
doSomething()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

Agora, para poder usar esta sintaxe, a implementación da función  `doSomething()`  debe ser un pouco especial. Debe usar a API de Promises.

En lugar de declarala como unha función normal:

```js
const doSomething = () => {};
```

Declarámola como obxecto de promesa:

```js
const doSomething = new Promise();
```

e pasamos unha función no constructor Promise:

```js
const doSomething = new Promise(() => {});
```

Esta función recibe 2 parámetros. A primeira é unha función que chamamos para resolver a promesa, a segunda é unha función que chamamos para rexeitar a promesa.

```js
const doSomething = new Promise((resolve, reject) => {});
```

Resolver unha promesa significa cumprila con éxito (o que resulta en chamar ao método `then()` a quen o utiliza).

Rexeitar unha promesa significa rematala cun erro (o que resulta en chamar ao método `catch()` en quen a utiliza).

Aquí tes como:

```js
const doSomething = new Promise(
  (resolve, reject) => {
    //some code
    const success = /* ... */
    if (success) {
      resolve('ok')
    } else {
      reject('this error occurred')
    }
  }
)
```

Podemos pasar un parámetro, de calquera tipo que queiramos, ás funcións de resolución e rexeitamento.

## 24. ``async`` e ``await``

As funcións asíncronas son unha abstracción de nivel superior ás promesas.

Unha función asíncrona devolve unha promesa, como neste exemplo:

```js
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("algúns datos"), 2000);
  });
};
```

Calquera código que queira usar esta función usará a palabra clave `await` xusto antes da función:

```js
const data = await getData();
```

e ao facelo, calquera dato que devolva a promesa asignarase á variable  `data`.

No noso caso, os datos son a cadea ``"algúns datos"``.

Cunha advertencia particular: sempre que usemos a palabra clave `await`, debemos facelo dentro dunha función definida como `async`.

Como isto:

```js
const doSomething = async () => {
  const data = await getData();
  console.log(data);
};
```

O dúo ``async/await`` permítenos ter un código máis limpo e un modelo mental sinxelo para traballar con código asíncrono.

Como podes ver no exemplo anterior, o noso código parece moi sinxelo. Compárao co código usando promesas ou funcións de devolución de chamada.

E este é un exemplo moi sinxelo, os principais beneficios xurdirán cando o código sexa moito máis complexo.

A modo de exemplo, vexa como obtería un recurso JSON usando a API Fetch e analizalo mediante promesas:

```js
const getFirstUserData = () => {
  // get users list
  return (
    fetch("/users.json")
      // parse JSON
      .then((response) => response.json())
      // pick first user
      .then((users) => users[0])
      // get user data
      .then((user) => fetch(`/users/${user.name}`))
      // parse JSON
      .then((userResponse) => userResponse.json())
  );
};

getFirstUserData();
```

E aquí está a mesma funcionalidade proporcionada usando ``await/async``:

```js
const getFirstUserData = async () => {
  // get users list
  const response = await fetch("/users.json");
  // parse JSON
  const users = await response.json();
  // pick first user
  const user = users[0];
  // get user data
  const userResponse = await fetch(`/users/${user.name}`);
  // parse JSON
  const userData = await userResponse.json();
  return userData;
};

getFirstUserData();
```

## 25. Ámbito das variables

Cando falamos das variables, falamos sobre o uso de `const`, `let`, e `var`.

O alcance - *scope*- é o conxunto de variables que é visible para unha parte do programa.

En JavaScript temos un ámbito global, un ámbito de bloque e un ámbito de función.

Se unha variable se define fóra dunha función ou bloque, está anexada ao obxecto global e ten un alcance global, o que significa que está dispoñible en todas as partes dun programa.

Hai unha diferenza moi importante entre `var`, `let` e `const` declaracións.

Unha variable definida como `var` dentro dunha función só é visible dentro desa función. Do mesmo xeito que os argumentos dunha función.

Por outra banda, unha variable definida como `const` ou `let` só é visible dentro do **bloque** onde está definida.

Un bloque é un conxunto de instrucións agrupadas nun par de chaves, como as que podemos atopar dentro dunha declaración `if` ou dun bucle `for`. E unha función, tamén.

É importante entender que un bloque non define un novo ámbito para `var`, pero si para `let` e `const`.

Isto ten implicacións moi prácticas.

Supoña que define unha variable  `var` dentro dun condicional `if`  dentro dunha función:

```js
function getData() {
  if (true) {
    var data = "algún dato";
    console.log(data);
  }
}
```

Se chamas a esta función, imprimiráselle a cadea `algún dato` na consola.

Se tentas mover ``console.log(data)`` despois do `if`, aínda funciona:

```js
function getData() {
  if (true) {
    var data = "algún dato";
  }
  console.log(data);
}
```

Pero se cambias `var data` a `let data`:

```js
function getData() {
  if (true) {
    let data = "algún dato";
  }
  console.log(data);
}
```

Recibirás un erro: `ReferenceError: data is not defined`.

Isto débese a que `var` ten un ámbito de función, e aquí está a suceder unha cousa especial, chamada elevación. En resumo,  JavaScript move a declaración `var` á parte superior da función máis próxima antes de executar o código. Máis ou menos este é o aspecto da función para JS, internamente:

```js
function getData() {
  var data;
  if (true) {
    data = "algún dato";
  }
  console.log(data);
}
```

É por iso que  `console.log(data)` tamén pode estar na parte superior dunha función, mesmo antes de que sexa declarada, e obterá `undefined` como valor para esa variable:

```js
function getData() {
  console.log(data);
  if (true) {
    var data = "algún dato";
  }
}
```

pero se cambias a `let`, terás un erro `ReferenceError: data is not defined`, porque a elevación non ocorre coas declaracións `let`.

`const` segue as mesmas regras que `let`: é de ámbito de bloque.

Pode ser complicado ao principio, pero unha vez que te deas conta desta diferenza, verás por que hoxe en día  `var` se considera unha mala práctica en comparación con `let` ou `const`: teñen menos partes móbiles e o seu alcance limítase ao bloque, o que tamén as fai máis axeitadas como variables de bucle, porque deixan de existir despois de que remate un bucle:

```js
function doLoop() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
}

doLoop();
```

Cando saia do bucle, `i` será unha variable válida co valor 10.

Se cambia a `let`, se o intenta `console.log(i)` producirá un erro `ReferenceError: i is not defined`.

---

\* _in progress_

*última revisión nov.2023*
