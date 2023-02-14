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
---

# Javascript

## 1. Introdución a JavaScript

JavaScript é unha das linguaxes de programación máis populares do mundo.

Creo que é unha excelente linguaxe para ser a túa primeira linguaxe de programación.

Usamos principalmente JavaScript para crear

- sitios web
- aplicacións web
- aplicacións do servidor usando Node.js

pero JavaScript non se limita a estas cousas, e tamén se pode usar para

- crear aplicacións móbiles usando ferramentas como React Native
- crear programas para microcontroladores e internet das cousas
- crear aplicacións de reloxos intelixentes

Basicamente pode facer calquera cousa. É tan popular que todo o novo que apareza terá algún tipo de integración de JavaScript nalgún momento.

JavaScript é unha linguaxe de programación que é:

- **nivel alto** : proporciona abstraccións que che permiten ignorar os detalles da máquina onde se está a executar. Xestiona a memoria automaticamente cun recolector de lixo, polo que podes  centrarte no código en lugar de xestionar a memoria como necesitarían  outras linguaxes como C, e ofrece moitas construcións que che permiten  tratar con variables e obxectos moi poderosos.
- **dinámico** : a diferenza das linguaxes de programación estáticas, unha linguaxe  dinámica executa en tempo de execución moitas das cousas que fai unha  linguaxe estática no momento da compilación. Isto ten pros e contras, e ofrécenos poderosas funcións como dixitación  dinámica, encadernación tardía, reflexión, programación funcional,  alteración do tempo de execución de obxectos, peches e moito máis. Non te preocupes se estas cousas son descoñecidas para ti, saberás todas elas ao final do curso.
- **tecleado dinámicamente** : unha variable non aplica un tipo. Pode reasignar calquera tipo a unha variable, por exemplo, asignando un número enteiro a unha variable que contén unha cadea.
- **escritos de forma vaga** : en oposición á dixitación forte, as linguaxes de tecleo laxa (ou  débilmente) non aplican o tipo dun obxecto, o que permite máis  flexibilidade, pero negándonos a seguridade e a comprobación de tipos  (algo que ofrece TypeScript, que se constrúe enriba de JavaScript).
- **interpretado** : coñécese comunmente como linguaxe interpretada, o que significa que  non precisa dunha fase de compilación para que un programa poida  executarse, a diferenza de C, Java ou Go, por exemplo. Na práctica, os navegadores compilan JavaScript antes de executalo, por  razóns de rendemento, pero isto é transparente para ti: non hai ningún  paso adicional.
- **multiparadigma** : a linguaxe non aplica ningún paradigma de programación en particular, a diferenza de Java, por exemplo, que obriga ao uso de programación  orientada a obxectos, ou C que obriga a programación imperativa. Podes escribir JavaScript usando un paradigma orientado a obxectos, usando  prototipos e a nova sintaxe de clases (a partir de ES6). Podes escribir JavaScript nun estilo de programación funcional, coas súas  funcións de primeira clase, ou mesmo nun estilo imperativo (como C).

Por se estás a preguntar, *JavaScript non ten nada que ver con Java* , é unha mala elección de nome pero temos que vivir con el.

## 2. Un pouco de historia

Creado en 1995, JavaScript percorreu un longo camiño desde os seus humildes inicios.

Foi a primeira linguaxe de script que foi soportada de forma nativa polos  navegadores web, e grazas a iso gañou unha vantaxe competitiva sobre  calquera outra linguaxe e hoxe en día segue a ser a única linguaxe de  script que podemos usar para crear Aplicacións web.

Existen outros idiomas, pero todos deben compilarse en JavaScript ou, máis  recentemente, en WebAssembly, pero esta é outra historia.

Ao principio, JavaScript non era tan poderoso como hoxe, e utilizábase  principalmente para animacións elegantes e a marabilla coñecida naquela  época como *HTML dinámico* .

Coas crecentes necesidades que demandaba (e segue demandando) a plataforma web, JavaScript *tivo* tamén a responsabilidade de crecer, para dar cabida ás necesidades dun dos ecosistemas máis utilizados do mundo.

JavaScript úsase moito tamén fóra do navegador. O ascenso de Node.js nos últimos anos desbloqueou o desenvolvemento do  backend, que antes era o dominio de Java, Ruby, Python, PHP e linguaxes  máis tradicionais do lado do servidor.

Agora JavaScript tamén é a linguaxe que alimenta as bases de datos e moitas  máis aplicacións, e mesmo é posible desenvolver aplicacións integradas,  aplicacións móbiles, aplicacións para televisores e moito máis. O que comezou como un pequeno idioma dentro do navegador é agora o idioma máis popular do mundo.

## 3. Só JavaScript

Ás veces é difícil separar JavaScript das características do entorno no que se usa.

Por exemplo, a `console.log()`liña que podes atopar en moitos exemplos de código non é JavaScript. Pola contra, forma parte da vasta biblioteca de API que nos proporciona o navegador. Do mesmo xeito, no servidor, ás veces pode ser difícil separar as funcións da linguaxe JavaScript das API proporcionadas por Node.js.

React ou Vue proporcionan unha función en particular? Ou é "JavaScript simple" ou "JavaScript vainilla", como se chama a miúdo?

Neste libro falo de JavaScript, a linguaxe, sen complicar o teu proceso de  aprendizaxe con cousas que están fóra dela, e proporcionadas por  ecosistemas externos.

## 4. Unha breve introdución á sintaxe de JavaScript

Nesta pequena introdución quero falarvos de 5 conceptos:

- espazo en branco
- sensibilidade entre maiúsculas e minúsculas
- literais
- identificadores
- comentarios

### 4.1. Espazo en branco

JavaScript non considera que os espazos en branco sexan significativos. Pódense engadir espazos e saltos de liña do xeito que che guste, aínda que isto sexa *en teoría* .

Na práctica, o máis probable é que manteña un estilo ben definido e se  adhira ao que a xente usa habitualmente, e o faga cumprir mediante un  linter ou unha ferramenta de estilo como *Prettier* .

Por exemplo, gústame usar sempre 2 caracteres para sangrar.

### 4.2. Sensible a maiúsculas e minúsculas

JavaScript distingue entre maiúsculas e minúsculas. Unha variable nomeada `something`é diferente de `Something`.

O mesmo ocorre con calquera identificador.

### 4.3. Literais

Definimos como **literal** un valor que está escrito no código fonte, por exemplo, un número, unha cadea, un booleano ou tamén construcións máis avanzadas, como Object  Literals ou Array Literals:

```
5
'Test'
true
['a', 'b']
{color: 'red', shape: 'Rectangle'}
```

### 4.4. Identificadores

Un **identificador** é unha secuencia de caracteres que se pode usar para identificar unha variable, unha función ou un obxecto. Pode comezar cunha letra, o signo de dólar `$`ou un guión baixo `_`e pode conter díxitos. Usando Unicode, unha letra pode ser calquera carácter permitido, por exemplo, un emoji 😄.

```
Test
test
TEST
_test
Test1
$test
```

O signo de dólar úsase habitualmente para facer referencia a elementos DOM.

Algúns nomes están reservados para uso interno de JavaScript e non podemos utilizalos como identificadores.

### 4.5. Comentarios

Os comentarios son unha das partes máis importantes de calquera programa. En calquera linguaxe de programación. Son importantes porque nos permiten anotar o código e engadir información  importante que, doutro xeito, non estaría dispoñible para outras persoas (ou para nós mesmos) lendo o código.

En JavaScript, podemos escribir un comentario nunha única liña usando `//`. Todo o que segue `//`non se considera código polo intérprete de JavaScript.

Como isto:

```
// a comment
true //another comment
```

Outro tipo de comentario é un comentario de varias liñas. Comeza `/*`e remata con `*/`.

Todo o intermedio non se considera código:

```
/* some kind
of
comment

*/
```

## 5. Punto e coma

Cada liña dun programa JavaScript termina opcionalmente usando puntos e coma.

Dixen opcionalmente, porque o intérprete de JavaScript é o suficientemente  intelixente como para introducir puntos e comas para ti.

Na maioría dos casos, pode omitir os puntos e coma por completo dos seus programas.

Este feito é moi controvertido, e sempre atoparás código que usa punto e coma e código que non.

A miña preferencia persoal é evitar sempre o punto e coma a non ser que sexa estritamente necesario.

## 6. Valores

Unha `hello`cadea é un **valor** . Un número como `12`é un **valor** .

`hello`e `12`son valores. `string`e `number`son os **tipos** deses valores.

O **tipo** é o tipo de valor, a súa categoría. Temos moitos tipos diferentes en JavaScript, e falaremos deles en detalle máis adiante. Cada tipo ten as súas propias características.

Cando necesitamos ter unha referencia a un valor, asignámolo a unha **variable** . A variable pode ter un nome e o valor é o que se almacena nunha variable, polo que despois podemos acceder a ese valor a través do nome da  variable.

## 7. Variables

Unha variable é un valor asignado a un identificador, polo que podes referencialo e utilizalo máis tarde no programa.

Isto débese a que JavaScript está **escrito de forma vaga** , un concepto do que escoitarás falar con frecuencia.

Unha variable debe ser declarada antes de poder usala.

Temos 2 formas principais de declarar variables. O primeiro é usar `const`:

```
const a = 0
```

A segunda forma é usar `let`:

```
let a = 0
```

Cal é a diferenza?

`const`define unha referencia constante a un valor. Isto significa que a referencia non se pode cambiar. Non pode reasignarlle un valor novo.

Usando `let`pode asignarlle un novo valor.

Por exemplo, non podes facer isto:

```
const a = 0
a = 1
```

Porque recibirá un erro: `TypeError: Assignment to constant variable.`.

Por outra banda, podes facelo usando `let`:

```
let a = 0
a = 1
```

`const`non significa "constante" como significan outras linguas como C. En particular, non significa que o valor non poida cambiar, senón que non se pode reasignar. Se a variable apunta a un obxecto ou unha matriz (veremos máis sobre  obxectos e matrices máis tarde) o contido do obxecto ou da matriz pode  cambiar libremente.

As variables constantes deben inicializarse no momento da declaración:

```
const a = 0
```

pero `let`os valores pódense inicializar máis tarde:

```
let a
a = 0
```

Podes declarar varias variables á vez na mesma declaración:

```
const a = 1,
  b = 2
let c = 1,
  d = 2
```

Pero non pode volver declarar a mesma variable máis dunha vez:

```
let a = 1
let a = 2
```

ou recibiría un erro de "declaración duplicada".

O meu consello é que use sempre `const`e só use `let`cando saiba que terá que reasignar un valor a esa variable. Por que? Porque canto menos poder teña o noso código, mellor. Se sabemos que un valor non se pode reasignar, é unha fonte menos de erros.

Agora que vimos como traballar con `const`e `let`, quero mencionar `var`.

Ata 2015, `var`era a única forma en que podíamos declarar unha variable en JavaScript. Hoxe, unha base de código moderna probablemente só use `const`e `let`. Hai algunhas diferenzas fundamentais que detallo [nesta publicación](https://flaviocopes-com.translate.goog/javascript-difference-let-var/?_x_tr_sl=auto&_x_tr_tl=gl&_x_tr_hl=es) , pero se estás comezando, quizais non che importen. Só usa `const`e `let`.

## 8. Tipos

As variables en JavaScript non teñen ningún tipo adxunto.

Están *sen escribir* .

Unha vez que lle asigne un valor con algún tipo a unha variable,  posteriormente pode reasignar a variable para aloxar un valor de  calquera outro tipo, sen ningún problema.

En JavaScript temos 2 tipos principais de tipos: **tipos primitivos** e **tipos de obxectos** .

### 8.1. Tipos primitivos

Os tipos primitivos son

- números
- cordas
- booleanos
- símbolos

E dous tipos especiais: `null`e `undefined`.

### 8.2. Tipos de obxectos

Calquera valor que non sexa de tipo primitivo (unha cadea, un número, un booleano, nulo ou indefinido) é un **obxecto** .

Os tipos de obxectos teñen **propiedades** e tamén teñen **métodos** que poden actuar sobre esas propiedades.

Máis adiante falaremos dos obxectos.

## 9. Expresións

Unha expresión é unha única unidade de código JavaScript que o motor JavaScript pode avaliar e devolver un valor.

As expresións poden variar en complexidade.

Partimos das moi sinxelas, chamadas expresións primarias:

```
2
0.02
;('something')
true
false
this //the current scope
undefined
i //where i is a variable or a constant
```

As expresións aritméticas son expresións que levan unha variable e un  operador (máis información sobre os operadores en breve) e dan como  resultado un número:

```
1 / 2
i++
i -= 2
i * 2
```

As expresións de cadea son expresións que resultan nunha cadea:

```
'A ' + 'string'
```

As expresións lóxicas fan uso de operadores lóxicos e resólvense nun valor booleano:

```
a && b
a || b
!a
```

As expresións máis avanzadas inclúen obxectos, funcións e matrices, e presentarémolos máis tarde.

## 10. Operadores

Os operadores permítenche obter dúas expresións sinxelas e combinalas para formar unha expresión máis complexa.

Podemos clasificar os operadores en función dos operandos cos que traballan. Algúns operadores traballan con 1 operando. A maioría con 2 operandos. Só un operador funciona con 3 operandos.

Nesta primeira introdución aos operadores, presentaremos os operadores cos  que probablemente estea familiarizado: os operadores binarios.

Xa introducín unha cando falo de variables: o operador de asignación `=`. Usa `=`para asignar un valor a unha variable:

```
let b = 2
```

Imos agora introducir outro conxunto de operadores binarios que xa está familiarizado, a partir das matemáticas básicas.

### 10.1. O operador de adición (+)

```
const three = 1 + 2
const four = three + 1
```

O `+`operador tamén serve como concatenación de cadeas se usa cadeas, así que preste atención:

```
const three = 1 + 2
three + 1 // 4
'three' + 1 // three1
```

### 10.2. O operador de resta (-)

```
const two = 4 - 2
```

### 10.3. O operador de división (/)

Devolve o cociente do primeiro operador e do segundo:

```
const result = 20 / 5 //result === 4
const result = 20 / 7 //result === 2.857142857142857
```

Se divides entre cero, JavaScript non xera ningún erro pero devolve o `Infinity`valor (ou `-Infinity`se o valor é negativo).

```
1 / 0 - //Infinity
  1 / 0 //-Infinity
```

### 10.4. O operador restante (%)

O resto é un cálculo moi útil en moitos casos de uso:

```
const result = 20 % 5 //result === 0
const result = 20 % 7 //result === 6
```

Un resto por cero é sempre `NaN`, un valor especial que significa "Non é un número":

```
1 % 0 //NaN
```

### 10.5. O operador de multiplicación (*)

Multiplica dous números

```
1 * 2 //2
1 * -2 //-2
```

### 10.6. O operador de exponenciación (**)

Eleve o primeiro operando á potencia do segundo operando

```
1 ** 2 //1
2 ** 1 //2
2 ** 2 //4
2 ** 8 //256
8 ** 2 //64
```

## 11. Regras de precedencia

Cada declaración complexa con varios operadores na mesma liña introducirá problemas de precedencia.

Tome este exemplo:

```
let a = 1 * 2 + ((5 / 2) % 2)
```

O resultado é 2,5, pero por que?

Que operacións se executan primeiro e cales hai que esperar?

Algunhas operacións teñen máis prioridade que outras. As regras de precedencia están listadas nesta táboa:

| Operador    | Descrición              |
| ----------- | ----------------------- |
| `*` `/` `%` | multiplicación/división |
| `+` `-`     | suma/resta              |
| `=`         | asignación              |

As operacións no mesmo nivel (como `+`e `-`) execútanse na orde en que se atopan, de esquerda a dereita.

Seguindo estas regras, a operación anterior pódese resolver deste xeito:

```
let a = 1 * 2 + ((5 / 2) % 2)
let a = 2 + ((5 / 2) % 2)
let a = 2 + (2.5 % 2)
let a = 2 + 0.5
let a = 2.5
```

## 12. Operadores de comparación

Despois dos operadores de asignación e matemáticos, o terceiro conxunto de  operadores que quero introducir son os operadores de comparación.

Podes usar os seguintes operadores para comparar dous números ou dúas cadeas.

Os operadores de comparación sempre devolven un booleano, un valor que é `true`ou `false`).

Estes son **operadores de comparación de desigualdade** :

- `<`significa "menos de"
- `<=`significa "menos que ou igual a"
- `>`significa "maior que"
- `>=`significa "maior que ou igual a"

Exemplo:

```
let a = 2
a >= 1 //true
```

Ademais destes, temos 4 **operadores de igualdade** . Aceptan dous valores e devolven un booleano:

- `===`comproba a igualdade
- `!==`comproba a desigualdade

Teña en conta que tamén temos `==`e `!=`en JavaScript, pero suxiro encarecidamente usar só `===`e `!==`porque poden evitar algúns problemas sutís.

## 13. Condicionais

Cos operadores de comparación existentes, podemos falar de condicionais.

Unha `if`instrución úsase para facer que o programa tome unha ruta, ou outra, dependendo do resultado dunha avaliación de expresións.

Este é o exemplo máis sinxelo, que sempre executa:

```
if (true) {
  //do something
}
```

pola contra, isto nunca se executa:

```
if (false) {
  //do something (? never ?)
}
```

O condicional verifica a expresión que lle pasa por un valor verdadeiro ou falso. Se pasas un número, sempre se avalía como verdadeiro a menos que sexa 0.  Se pasas unha cadea, sempre se avalía como verdadeiro a menos que sexa  unha cadea baleira. Esas son regras xerais de tipos de casting a un booleano.

Notaches as llaves rizadas? Iso chámase **bloque** e úsase para agrupar unha lista de instrucións diferentes.

Pódese poñer un bloque onde poida ter unha única declaración. E se tes unha única instrución para executar despois dos condicionais,  podes omitir o bloque e simplemente escribir a instrución:

```
if (true) doSomething()
```

Pero sempre me gusta usar llaves para ser máis claro.

### 13.1. Se non

Podes achegar unha segunda parte á `if`declaración: `else`.

Achega unha instrución que se vai executar se a `if`condición é falsa:

```
if (true) {
  //do something
} else {
  //do something else
}
```

Dado que `else`acepta unha declaración, pode aniñar outra declaración if/else dentro dela:

```
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

As matrices en JavaScript non son un *tipo* por si só.

As matrices son **obxectos** .

Podemos inicializar unha matriz baleira destas dúas formas diferentes:

```
const a = []
const a = Array()
```

O primeiro é usar a **sintaxe literal da matriz** . O segundo usa a función integrada Array.

Podes encher previamente a matriz usando esta sintaxe:

```
const a = [1, 2, 3]
const a = Array.of(1, 2, 3)
```

Unha matriz pode conter calquera valor, incluso valores de diferentes tipos:

```
const a = [1, 'Flavio', ['a', 'b']]
```

Dado que podemos engadir unha matriz a unha matriz, podemos crear matrices  multidimensionais, que teñen aplicacións moi útiles (por exemplo, unha  matriz):

```
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

matrix[0][0] //1
matrix[2][0] //7
```

Podes acceder a calquera elemento da matriz facendo referencia ao seu índice, que comeza desde cero:

```
a[0] //1
a[1] //2
a[2] //3
```

Podes inicializar unha nova matriz cun conxunto de valores usando esta  sintaxe, que primeiro inicializa unha matriz de 12 elementos e enche  cada elemento co número `0`:

```
Array(12).fill(0)
```

Podes obter o número de elementos da matriz comprobando a súa `length`propiedade:

```
const a = [1, 2, 3]
a.length //3
```

Teña en conta que pode definir a lonxitude da matriz. Se asignas un número maior que a capacidade actual da matriz, non pasa nada. Se asigna un número menor, a matriz córtase nesa posición:

```
const a = [1, 2, 3]
a //[ 1, 2, 3 ]
a.length = 2
a //[ 1, 2 ]
```

### 14.1. Como engadir un elemento a unha matriz

Podemos engadir un elemento ao final dunha matriz usando o `push()`método:

```
a.push(4)
```

Podemos engadir un elemento ao comezo dunha matriz usando o `unshift()`método:

```
a.unshift(0)
a.unshift(-2, -1)
```

### 14.2. Como eliminar un elemento dunha matriz

Podemos eliminar un elemento do final dunha matriz usando o `pop()`método:

```
a.pop()
```

Podemos eliminar un elemento do inicio dunha matriz usando o `shift()`método:

```
a.shift()
```

### 14.3. Como unir dúas ou máis matrices

Podes unir varias matrices usando `concat()`:

```
const a = [1, 2]
const b = [3, 4]
const c = a.concat(b) //[1,2,3,4]
a //[1,2]
b //[3,4]
```

Tamén pode usar o operador **de propagación**`...` ( ) deste xeito:

```
const a = [1, 2]
const b = [3, 4]
const c = [...a, ...b]
c //[1,2,3,4]
```

### 14.4. Como atopar un elemento específico na matriz

Podes usar o `find()`método dunha matriz:

```
a.find((element, index, array) => {
  //return true or false
})
```

Este método devolve o primeiro elemento que devolve `true`na función de devolución de chamada proporcionada. Devolve indefinido se nada devolve "verdadeiro".

É a súa responsabilidade definir o corpo da función de devolución de chamada, para que poida dicir `find()`o que está a buscar.

Unha sintaxe de uso común é:

```
const my_id = 3

a.find((x) => x.id === my_id)
```

A liña anterior devolverá o primeiro elemento da matriz que teña `id`igual a `3`, o valor de `my_id`.

`findIndex()`é outro método de matriz que funciona de forma similar a `find()`, pero devolve o índice do primeiro elemento que devolve verdadeiro, e se non se atopa, devolve `undefined`:

```
a.findIndex((element, index, array) => {
  //return true or false
})
```

Outro método útil é `includes()`:

```
a.includes(value)
```

Devolve verdadeiro se `a`contén `value`.

```
a.includes(value, i)
```

Devolve verdadeiro se `a`contén `value`despois da posición `i`.

## 15. Cordas

Unha cadea é unha secuencia de caracteres.

Tamén se pode definir como un literal de cadea, que se encerra entre comiñas ou comiñas dobres:

```
'A string'
'Another string'
```

Persoalmente, prefiro as comiñas simples todo o tempo e só uso comiñas dobres en HTML para definir atributos.

Asigna un valor de cadea a unha variable como esta:

```
const name = 'Flavio'
```

Podes determinar a lonxitude dunha cadea usando a `length`súa propiedade:

```
'Flavio'.length //6
const name = 'Flavio'
name.length //6
```

Esta é unha cadea baleira: `''`. A súa propiedade de lonxitude é 0:

```
''.length //0
```

Pódense unir dúas cadeas usando o `+`operador:

```
'A ' + 'string'
```

Podes usar o `+`operador para *interpolar* variables:

```
const name = 'Flavio'
'My name is ' + name //My name is Flavio
```

Outra forma de definir cadeas é usar unha sintaxe especial chamada **literal literal** , definida dentro de backticks. Son especialmente útiles para facer que as cadeas multiliña sexan moito máis sinxelas. Con comiñas simples ou dobres non pode definir facilmente unha cadea multiliña: necesitaría usar caracteres de escape.

Unha vez que se abre un literal de modelo co backtick, só tes que premer  Intro para crear unha nova liña, sen caracteres especiais, e  represéntase como está:

```
const string = `Hey
this

string
is awesome!`
```

Os literais de modelos tamén son excelentes porque proporcionan un xeito sinxelo de interpolar variables e expresións en cadeas.

Faino usando a `${...}`sintaxe:

```
const var = 'test'
const string = `something ${var}`
//something test
```

dentro do `${}`pode engadir calquera cousa, incluso expresións:

```
const string = `something ${1 + 2 + 3}`
const string2 = `something
  ${a > b ? 'a' : 'b'}`
```

## 16. Bucles

Os bucles son unha das principais estruturas de control de JavaScript.

Cun bucle podemos automatizar e repetir indefinidamente un bloque de código, cantas veces queremos que se execute.

JavaScript ofrece moitas formas de iterar a través de bucles.

Quero centrarme en 3 xeitos:

- bucles mentres
- para bucles
- para..de bucles

### 16.1.`while`

O bucle while é a estrutura de bucle máis sinxela que nos proporciona JavaScript.

Engadimos unha condición despois da `while`palabra clave e proporcionamos un bloque que se executa ata que a condición se avalía como `true`.

Exemplo:

```
const list = ['a', 'b', 'c']
let i = 0
while (i < list.length) {
  console.log(list[i]) //value
  console.log(i) //index
  i = i + 1
}
```

Podes interromper un `while`bucle usando a `break`palabra clave, así:

```
while (true) {
  if (somethingIsTrue) break
}
```

e se decides que no medio dun bucle queres saltar a iteración actual, podes ir á seguinte iteración usando `continue`:

```
while (true) {
  if (somethingIsTrue) continue

  //do something else
}
```

Moi semellante a `while`, temos `do..while`bucles. É basicamente o mesmo que `while`, excepto que a condición se avalía *despois de* executar o bloque de código.

Isto significa que o bloque sempre se executa *polo menos unha vez* .

Exemplo:

```
const list = ['a', 'b', 'c']
let i = 0
do {
  console.log(list[i]) //value
  console.log(i) //index
  i = i + 1
} while (i < list.length)
```

### 16.2.`for`

A segunda estrutura de bucle moi importante en JavaScript é o **bucle for** .

Usamos a `for`palabra clave e pasamos un conxunto de 3 instrucións: a inicialización, a condición e a parte de incremento.

Exemplo:

```
const list = ['a', 'b', 'c']

for (let i = 0; i < list.length; i++) {
  console.log(list[i]) //value
  console.log(i) //index
}
```

Do mesmo xeito que cos `while`bucles, pode interromper un `for`bucle usando `break`e pode avanzar rapidamente á seguinte iteración dun `for`bucle usando `continue`.

### 16.3.`for...of`

Este bucle é relativamente recente (introducido en 2015) e é unha versión simplificada do `for`bucle:

```
const list = ['a', 'b', 'c']

for (const value of list) {
  console.log(value) //value
}
```

## 17. Funcións

En calquera programa JavaScript moderadamente complexo, todo ocorre dentro das funcións.

As funcións son unha parte fundamental e esencial de JavaScript.

Que é unha función?

Unha función é un bloque de código, autónomo.

Aquí tes unha **declaración de función** :

```
function getData() {
  // do something
}
```

Pódese executar unha función cando queiras invocándoa, así:

```
getData()
```

Unha función pode ter un ou máis argumentos:

```
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

```
function getData(color, age) {
  //do something
}

getData('green', 24)
getData('black')
```

Teña en conta que na segunda invocación pasei o `black`parámetro cadea como `color`argumento, pero non `age`. Neste caso, `age`dentro da función está `undefined`.

Podemos comprobar se un valor non está indefinido usando este condicional:

```
function getData(color, age) {
  //do something
  if (typeof age !== 'undefined') {
    //...
  }
}
```

`typeof`é un operador unario que nos permite comprobar o tipo dunha variable.

Tamén podes consultar deste xeito:

```
function getData(color, age) {
  //do something
  if (age) {
    //...
  }
}
```

aínda que neste caso o condicional será falso se `age`é `null`, `0`ou unha cadea baleira.

Podes ter valores predeterminados para os parámetros, no caso de que non se pasen:

```
function getData(color = 'black', age = 25) {
  //do something
}
```

Podes pasar calquera valor como parámetro: números, cadeas, booleanos, matrices, obxectos e tamén funcións.

Unha función ten un valor de retorno. De forma predeterminada, unha función devolve `undefined`, a menos que engada unha `return`palabra clave cun valor:

```
function getData() {
  // do something
  return 'hi!'
}
```

Podemos asignar este valor de retorno a unha variable cando invocamos a función:

```
function getData() {
  // do something
  return 'hi!'
}

let result = getData()
```

`result`agora contén unha cadea co `hi!`valor.

Só podes devolver un valor.

Para devolver varios valores, podes devolver un obxecto ou unha matriz, así:

```
function getData() {
  return ['Flavio', 37]
}

let [name, age] = getData()
```

As funcións pódense definir dentro doutras funcións:

```
const getData = () => {
  const dosomething = () => {}
  dosomething()
  return 'test'
}
```

A función aniñada non se pode chamar desde o exterior da función que encerra.

Tamén podes devolver unha función desde unha función.

## 18. Funcións de frecha

As funcións de frecha son unha introdución recente a JavaScript.

Utilízanse con moita frecuencia en lugar de funcións “regulares”, a que describín no capítulo anterior. Atoparás as dúas formas utilizadas en todas partes.

Visualmente, permítenche escribir funcións cunha sintaxe máis curta, desde:

```
function getData() {
  //...
}
```

a

```
;() => {
  //...
}
```

Pero... fíxate que aquí non temos nome.

As funcións de frecha son anónimas. Debemos asignalos a unha variable.

Podemos asignar unha función regular a unha variable, como esta:

```
let getData = function getData() {
  //...
}
```

Cando o fagamos, podemos eliminar o nome da función:

```
let getData = function () {
  //...
}
```

e invoque a función usando o nome da variable:

```
let getData = function () {
  //...
}
getData()
```

É o mesmo que facemos coas funcións de frecha:

```
let getData = () => {
  //...
}
getData()
```

Se o corpo da función contén só unha única instrución, pode omitir os parénteses e escribir todo nunha única liña:

```
const getData = () => console.log('hi!')
```

Os parámetros pásanse entre parénteses:

```
const getData = (param1, param2) => console.log(param1, param2)
```

Se tes un (e só un) parámetro, podes omitir os parénteses por completo:

```
const getData = (param) => console.log(param)
```

As funcións de frecha permítenche ter un retorno implícito: os valores son devoltos sen ter que usar a `return`palabra clave.

Funciona cando hai unha instrución en liña no corpo da función:

```
const getData = () => 'test'

getData() //'test'
```

Do mesmo xeito que coas funcións habituais, podemos ter parámetros predeterminados:

Podes ter valores predeterminados para os parámetros, no caso de que non se pasen:

```
const getData = (color = 'black', age = 2) => {
  //do something
}
```

e só podemos devolver un valor.

As funcións de frecha poden conter outras funcións de frecha ou tamén funcións normais.

Son moi similares, así que podes preguntar por que se presentaron? A gran diferenza coas funcións regulares é cando se usan como métodos obxecto. Isto é algo que en breve analizaremos.

## 19. Obxectos

Calquera valor que non sexa de tipo primitivo (unha cadea, un número, un booleano, un símbolo, nulo ou indefinido) é un **obxecto** .

Así é como definimos un obxecto:

```
const car = {}
```

Esta é a sintaxe **literal do obxecto** , que é unha das cousas máis bonitas de JavaScript.

Tamén pode usar a `new Object`sintaxe:

```
const car = new Object()
```

Outra sintaxe é usar `Object.create()`:

```
const car = Object.create()
```

Tamén pode inicializar un obxecto usando a `new`palabra clave antes dunha función cunha letra maiúscula. Esta función serve como construtor para ese obxecto. Alí, podemos inicializar os argumentos que recibimos como parámetros, para configurar o estado inicial do obxecto:

```
function Car(brand, model) {
  this.brand = brand
  this.model = model
}
```

Inicializamos un novo obxecto usando

```
const myCar = new Car('Ford', 'Fiesta')
myCar.brand //'Ford'
myCar.model //'Fiesta'
```

Os obxectos **pásanse sempre por referencia** .

Se lle asignas a unha variable o mesmo valor doutra, se é un tipo primitivo como un número ou unha cadea, pásanse por valor:

Tome este exemplo:

```
let age = 36
let myAge = age
myAge = 37
age //36
const car = {
  color: 'blue',
}
const anotherCar = car
anotherCar.color = 'yellow'
car.color //'yellow'
```

Mesmo as matrices ou funcións están, baixo o capó, obxectos, polo que é moi importante entender como funcionan.

### 19.1. Propiedades do obxecto

Os obxectos teñen **propiedades** , que están compostas por unha etiqueta asociada a un valor.

O valor dunha propiedade pode ser de calquera tipo, o que significa que  pode ser unha matriz, unha función e mesmo pode ser un obxecto, xa que  os obxectos poden aniñar outros obxectos.

Esta é a sintaxe literal do obxecto que vimos no capítulo anterior:

```
const car = {}
```

Podemos definir unha `color`propiedade deste xeito:

```
const car = {
  color: 'blue',
}
```

aquí temos un `car`obxecto cunha propiedade chamada `color`, co valor `blue`.

As etiquetas poden ser calquera cadea, pero coidado cos caracteres  especiais: se quixese incluír un carácter non válido como nome de  variable no nome da propiedade, tería que usar comiñas ao redor:

```
const car = {
  color: 'blue',
  'the color': 'blue',
}
```

Os caracteres de nome de variable non válidos inclúen espazos, guións e outros caracteres especiais.

Como ves, cando temos varias propiedades, separamos cada propiedade cunha coma.

Podemos recuperar o valor dunha propiedade usando 2 sintaxes diferentes.

O primeiro é **a notación de puntos** :

```
car.color //'blue'
```

O segundo (que é o único que podemos usar para propiedades con nomes non válidos), é usar corchetes:

```
car['the color'] //'blue'
```

Se accedes a unha propiedade inexistente, obterás o `undefined`valor:

```
car.brand //undefined
```

Como se dixo, os obxectos poden ter obxectos aniñados como propiedades:

```
const car = {
  brand: {
    name: 'Ford',
  },
  color: 'blue',
}
```

Neste exemplo, podes acceder ao nome da marca usando

```
car.brand.name
```

ou

```
car['brand']['name']
```

Pode establecer o valor dunha propiedade cando define o obxecto.

Pero sempre podes actualizalo máis tarde:

```
const car = {
  color: 'blue',
}

car.color = 'yellow'
car['color'] = 'red'
```

E tamén pode engadir novas propiedades a un obxecto:

```
car.model = 'Fiesta'

car.model //'Fiesta'
```

Dado o obxecto

```
const car = {
  color: 'blue',
  brand: 'Ford',
}
```

pode eliminar unha propiedade deste obxecto usando

```
delete car.brand
```

### 19.2. Métodos de obxecto

Falei de funcións nun capítulo anterior.

As funcións pódense asignar a unha propiedade de función, e neste caso chámanse **métodos** .

Neste exemplo, a `start`propiedade ten unha función asignada e podemos invocala usando a sintaxe de puntos que usamos para as propiedades, cos parénteses ao final:

```
const car = {
  brand: 'Ford',
  model: 'Fiesta',
  start: function () {
    console.log('Started')
  },
}

car.start()
```

Dentro dun método definido mediante unha `function() {}`sintaxe temos acceso á instancia do obxecto facendo referencia a `this`.

No seguinte exemplo, temos acceso aos valores das propiedades `brand`and `model`usando `this.brand`and `this.model`:

```
const car = {
  brand: 'Ford',
  model: 'Fiesta',
  start: function () {
    console.log(`Started
      ${this.brand} ${this.model}`)
  },
}

car.start()
```

É importante ter en conta esta distinción entre funcións regulares e funcións de frecha: non temos acceso a `this`se usamos unha función de frecha:

```
const car = {
  brand: 'Ford',
  model: 'Fiesta',
  start: () => {
    console.log(`Started
      ${this.brand} ${this.model}`) //not going to work
  },
}

car.start()
```

Isto débese a que **as funcións de frecha non están vinculadas ao obxecto** .

Esta é a razón pola que as funcións regulares adoitan usarse como métodos de obxecto.

Os métodos poden aceptar parámetros, como funcións normais:

```
const car = {
  brand: 'Ford',
  model: 'Fiesta',
  goTo: function (destination) {
    console.log(`Going to ${destination}`)
  },
}

car.goTo('Rome')
```

## 20. Clases

Falamos dos obxectos, que son unha das partes máis interesantes de JavaScript.

Neste capítulo imos subir un nivel, introducindo clases.

Que son as clases? Son unha forma de definir un patrón común para varios obxectos.

Tomemos un obxecto persoa:

```
const person = {
  name: 'Flavio',
}
```

Podemos crear unha clase chamada `Person`(nótese na capital `P`, unha convención cando se usan clases), que teña unha `name`propiedade:

```
class Person {
  name
}
```

Agora desde esta clase, inicializamos un `flavio`obxecto como este:

```
const flavio = new Person()
```

`flavio`chámase unha *instancia* da clase Person.

Podemos establecer o valor da `name`propiedade:

```
flavio.name = 'Flavio'
```

e podemos acceder a el usando

```
flavio.name
```

como facemos coas propiedades dos obxectos.

As clases poden albergar propiedades, como `name`, e métodos.

Os métodos defínense deste xeito:

```
class Person {
  hello() {
    return 'Hello, I am Flavio'
  }
}
```

e podemos invocar métodos nunha instancia da clase:

```
class Person {
  hello() {
    return 'Hello, I am Flavio'
  }
}
const flavio = new Person()
flavio.hello()
```

Hai un método especial chamado `constructor()`que podemos usar para inicializar as propiedades da clase cando creamos unha nova instancia de obxecto.

Funciona así:

```
class Person {
  constructor(name) {
    this.name = name
  }

  hello() {
    return 'Hello, I am ' + this.name + '.'
  }
}
```

Teña en conta como usamos `this`para acceder á instancia do obxecto.

Agora podemos crear unha instancia dun novo obxecto da clase, pasando unha cadea, e cando chamemos a `hello`, obteremos unha mensaxe personalizada:

```
const flavio = new Person('flavio')
flavio.hello() //'Hello, I am flavio.'
```

Cando se inicializa o obxecto, `constructor`chámase ao método, pasando calquera parámetro.

Normalmente os métodos defínense na instancia do obxecto, non na clase.

Podes definir un método para `static`permitir que se execute na clase no seu lugar:

```
class Person {
  static genericHello() {
    return 'Hello'
  }
}

Person.genericHello() //Hello
```

Isto é moi útil, ás veces.

## 21. Herdanza

Unha clase pode **estender** outra clase e os obxectos inicializados usando esa clase herdan todos os métodos de ambas clases.

Supoñamos que temos unha clase `Person`:

```
class Person {
  hello() {
    return 'Hello, I am a Person'
  }
}
```

Podemos definir unha nova clase `Programmer`que se estenda `Person`:

```
class Programmer extends Person {}
```

Agora, se instanciamos un novo obxecto con class `Programmer`, ten acceso ao `hello()`método:

```
const flavio = new Programmer()
flavio.hello() //'Hello, I am a Person'
```

Dentro dunha clase filla, podes facer referencia á clase pai chamando `super()`:

```
class Programmer extends Person {
  hello() {
    return super.hello() + '. I am also a programmer.'
  }
}

const flavio = new Programmer()
flavio.hello()
```

O programa anterior imprime *Ola, son unha persoa. Tamén son programador.* .

## 22. Programación asíncrona e devolucións de chamada

Na maioría das veces, o código JavaScript execútase de forma sincronizada.

Isto significa que se executa unha liña de código, despois execútase a seguinte, etc.

Todo é como esperas e como funciona na maioría das linguaxes de programación.

Non obstante, hai momentos nos que non podes esperar a que se execute unha liña de código.

Non podes esperar 2 segundos a que se cargue un ficheiro grande e deter o programa por completo.

Non podes esperar a que se descargue un recurso de rede antes de facer outra cousa.

JavaScript resolve este problema usando **devolucións de chamada** .

Un dos exemplos máis sinxelos de como usar as devolucións de chamada son os temporizadores. Os temporizadores non forman parte de JavaScript, pero son proporcionados polo navegador e Node.js. Déixame falar dun dos temporizadores que temos: `setTimeout()`.

A `setTimeout()`función acepta 2 argumentos: unha función e un número. O número son os milisegundos que deben pasar antes de que se execute a función.

Exemplo:

```
setTimeout(() => {
  // runs after 2 seconds
  console.log('inside the function')
}, 2000)
```

A función que contén a `console.log('inside the function')`liña executarase despois de 2 segundos.

Se engades un `console.log('before')`anterior á función e `console.log('after')`despois:

```
console.log('before')
setTimeout(() => {
  // runs after 2 seconds
  console.log('inside the function')
}, 2000)
console.log('after')
```

Verás que isto ocorre na túa consola:

```
before
after
inside the function
```

A función de devolución de chamada execútase de forma asíncrona.

Este é un patrón moi común cando se traballa co sistema de ficheiros, a rede, os eventos ou o DOM no navegador.

Todas as cousas que mencionei non son JavaScript "esenciais", polo que non se explican neste manual, pero atoparás moitos exemplos nos meus outros  manuais dispoñibles en [flaviocopes.com](https://flaviocopes-com.translate.goog/book/read/js/?_x_tr_sl=auto&_x_tr_tl=gl&_x_tr_hl=es) .

Así é como podemos implementar as devolucións de chamada no noso código.

Definimos unha función que acepta un `callback`parámetro, que é unha función.

Cando o código está listo para invocar a devolución de chamada, invocámolo pasando o resultado:

```
const doSomething = (callback) => {
  //do things
  //do things
  const result = /* .. */ callback(result)
}
```

O código que usa esta función usaríao así:

```
doSomething((result) => {
  console.log(result)
})
```

## 23. Promesas

As promesas son unha forma alternativa de tratar o código asíncrono.

Como vimos no capítulo anterior, coas devolucións de chamada estaríamos  pasando unha función a outra chamada de función, que sería chamada cando a función remate de procesar.

Como isto:

```
doSomething((result) => {
  console.log(result)
})
```

Cando o `doSomething()`código remata, chama á función recibida como un parámetro:

```
const doSomething = (callback) => {
  //do things
  //do things
  const result = /* .. */ callback(result)
}
```

O principal problema con este enfoque é que se necesitamos usar o  resultado desta función no resto do noso código, todo o noso código debe estar aniñado dentro da devolución de chamada, e se temos que facer 2-3 devolucións de chamada introducimos o que é normalmente definido  "inferno de devolución de chamada" con moitos niveis de funcións sangría noutras funcións:

```
doSomething((result) => {
  doSomethingElse((anotherResult) => {
    doSomethingElseAgain((yetAnotherResult) => {
      console.log(result)
    })
  })
})
```

As promesas son unha forma de tratar con isto.

En vez de facer:

```
doSomething((result) => {
  console.log(result)
})
```

Chamamos unha función baseada en promesas deste xeito:

```
doSomething().then((result) => {
  console.log(result)
})
```

Primeiro chamamos á función, despois temos un `then()`método que se chama cando remata a función.

A sangría non importa, pero moitas veces usarás este estilo para obter claridade.

É común detectar erros mediante un `catch()`método:

```
doSomething()
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
```

Agora, para poder usar esta sintaxe, a `doSomething()`implementación da función debe ser un pouco especial. Debe usar a API de Promises.

En lugar de declaralo como unha función normal:

```
const doSomething = () => {}
```

Declaramos como obxecto de promesa:

```
const doSomething = new Promise()
```

e pasamos unha función no constructor Promise:

```
const doSomething = new Promise(() => {})
```

Esta función recibe 2 parámetros. A primeira é unha función que chamamos para resolver a promesa, a segunda é unha función que chamamos para rexeitar a promesa.

```
const doSomething = new Promise((resolve, reject) => {})
```

Resolver unha promesa significa cumprila con éxito (o que resulta en chamar ao `then()`método a quen o utiliza).

Rexeitar unha promesa significa rematala cun erro (o que resulta en chamar ao `catch()`método en quen a utiliza).

Aquí tes como:

```
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

Podemos pasar un parámetro ás funcións de resolución e rexeitamento, de calquera tipo que queiramos.

## 24. Async e Await

As funcións asíncronas son unha abstracción de nivel superior ás promesas.

Unha función asíncrona devolve unha promesa, como neste exemplo:

```
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('some data'), 2000)
  })
}
```

Calquera código que queira usar esta función usará a `await`palabra clave xusto antes da función:

```
const data = await getData()
```

e ao facelo, calquera dato que devolva a promesa asignarase á `data`variable.

No noso caso, os datos son a cadea "algúns datos".

Cunha advertencia particular: sempre que usemos a `await`palabra clave, debemos facelo dentro dunha función definida como `async`.

Como isto:

```
const doSomething = async () => {
  const data = await getData()
  console.log(data)
}
```

O dúo Async/wait permítenos ter un código máis limpo e un modelo mental sinxelo para traballar con código asíncrono.

Como podes ver no exemplo anterior, o noso código parece moi sinxelo. Compárao co código usando promesas ou funcións de devolución de chamada.

E este é un exemplo moi sinxelo, os principais beneficios xurdirán cando o código sexa moito máis complexo.

A modo de exemplo, vexa como obtería un recurso JSON usando a API Fetch e analizalo mediante promesas:

```
const getFirstUserData = () => {
  // get users list
  return (
    fetch('/users.json')
      // parse JSON
      .then((response) => response.json())
      // pick first user
      .then((users) => users[0])
      // get user data
      .then((user) => fetch(`/users/${user.name}`))
      // parse JSON
      .then((userResponse) => userResponse.json())
  )
}

getFirstUserData()
```

E aquí está a mesma funcionalidade proporcionada usando await/async:

```
const getFirstUserData = async () => {
  // get users list
  const response = await fetch('/users.json')
  // parse JSON
  const users = await response.json()
  // pick first user
  const user = users[0]
  // get user data
  const userResponse = await fetch(`/users/${user.name}`)
  // parse JSON
  const userData = await userResponse.json()
  return userData
}

getFirstUserData()
```

## 25. Ámbito das variables

Cando introducín variables, falei sobre o uso de `const`, `let`, e `var`.

O alcance é o conxunto de variables que é visible para unha parte do programa.

En JavaScript temos un ámbito global, un ámbito de bloque e un ámbito de función.

Se unha variable se define fóra dunha función ou bloque, está anexada ao  obxecto global e ten un alcance global, o que significa que está  dispoñible en todas as partes dun programa.

Hai unha diferenza moi importante entre `var`, `let`e `const`declaracións.

Unha variable definida como `var`dentro dunha función só é visible dentro desa función. Do mesmo xeito que os argumentos dunha función:

Unha variable definida como `const`ou `let`por outra banda só é visible dentro do **bloque** onde está definida.

Un bloque é un conxunto de instrucións agrupadas nun par de chaves, como as que podemos atopar dentro dunha `if`declaración ou dun `for`bucle. E unha función, tamén.

É importante entender que un bloque non define un novo ámbito para `var`, pero si para `let`e `const`.

Isto ten implicacións moi prácticas.

Supoña que define unha `var`variable dentro dun `if`condicional nunha función

```
function getData() {
  if (true) {
    var data = 'some data'
    console.log(data)
  }
}
```

Se chamas a esta función, imprimiráselle `some data`na consola.

Se tentas mover console.log(data) despois do `if`, aínda funciona:

```
function getData() {
  if (true) {
    var data = 'some data'
  }
  console.log(data)
}
```

Pero se cambias `var data`a `let data`:

```
function getData() {
  if (true) {
    let data = 'some data'
  }
  console.log(data)
}
```

Recibirás un erro: `ReferenceError: data is not defined`.

Isto débese `var`a que ten un ámbito de función, e aquí está a suceder unha cousa especial, chamada elevación. En resumo, `var`JavaScript move a declaración á parte superior da función máis próxima antes de executar o código. Máis ou menos este é o aspecto da función para JS, internamente:

```
function getData() {
  var data
  if (true) {
    data = 'some data'
  }
  console.log(data)
}
```

É por iso que tamén pode estar `console.log(data)`na parte superior dunha función, mesmo antes de que sexa declarada, e obterá `undefined`como valor para esa variable:

```
function getData() {
  console.log(data)
  if (true) {
    var data = 'some data'
  }
}
```

pero se cambias a `let`, terás un erro `ReferenceError: data is not defined`, porque o izado non ocorre coas `let`declaracións.

`const`segue as mesmas regras que `let`: é de ámbito de bloque.

Pode ser complicado ao principio, pero unha vez que te deas conta desta diferenza, verás por que `var`hoxe en día se considera unha mala práctica en comparación con `let`: teñen menos partes móbiles e o seu alcance limítase ao bloque, o que  tamén os fai moi boas como variables de bucle, porque deixan de existir  despois de que remate un bucle:

```
function doLoop() {
  for (var i = 0; i < 10; i++) {
    console.log(i)
  }
  console.log(i)
}

doLoop()
```

Cando saia do bucle, `i`será unha variable válida co valor 10.

Se cambia a `let`, se o intenta `console.log(i)`producirá un erro `ReferenceError: i is not defined`.



---

*in progress*