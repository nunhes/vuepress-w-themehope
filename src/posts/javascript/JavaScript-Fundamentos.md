# JavaScript: Fundamentos, funcionalidades e boas prácticas

JavaScript é unha linguaxe de programación amplamente utilizado que permite agregar interactividade e funcionalidades avanzadas ás páxinas web. JavaScript é un estándar no desenvolvemento web e é compatible con todos os navegadores modernos.

### A consola JavaScript

A consola JavaScript é unha ferramenta integrada nos navegadores que permite aos desenvolvedores executar e depurar código JavaScript en tempo real. Ofrece varias funcións para mostrar información e erros, como ``console.log()`` e ``console.error()``, facilitando a identificación e a solución de problemas no código.

### Exemplo: Uso de “console.log()” e “console.error()”

```javascript
console.log("Ola, mundo!"); // Mostra "Ola, mundo!" na consola
console.error("Houbo un erro na execución do código"); // Mostra unha mensaxe de erro na consola

```

## Como funciona JavaScript?

JavaScript funciona a través da interpretación e execución de código no navegador, permitindo agregar interactividade e funcionalidades avanzadas ás páxinas web.

### Cargar un arquivo JavaScript

Os arquivos JavaScript poden cargarse nunha páxina HTML utilizando a etiqueta `<script>` co atributo `src` que apunta ao arquivo JavaScript.

```html
<script src="arquivo.js"></script>
```

### Conceptos básicos

Os conceptos básicos de JavaScript inclúen **variables**, **operadores**, **estruturas de control de fluxo**, **funcións** e **obxectos**.

### Palabras comúns usadas en programación

Algunhas palabras comúns na programación con JavaScript son: **variable**, **función**, **obxecto**, **array**, **bucle**, **condición**, **evento** e **erro**.

### A especificación ECMAScript

ECMAScript é a especificación que define a linguaxe de programación JavaScript e as súas características. JavaScript é unha implementación desta especificación.

### Normas e regras de funcionamento de JavaScript

JavaScript sigue certas normas e regras, como a sensibilidade a maiúsculas e minúsculas, o uso de punto e coma para separar instrucións e a declaración de variables antes do seu uso.

### Exemplo: Cargar un arquivo JavaScript en HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Miña páxina</title>
    <script src="arquivo.js"></script>
</head>
<body>
    <!-- Contido da páxina -->
</body>
</html>
```

## Comentarios de código

Os comentarios de código son anotacións que se poden agregar ao código fonte para proporcionar información adicional, aclaracións ou axuda para o mantemento e comprensión do código. Estes comentarios non afectan a funcionalidade do programa.

### Indicacións e axuda extra para o noso código

Os comentarios en JavaScript poden ser de dous tipos: comentarios dunha liña e comentarios de varias liñas. Os comentarios dunha liña comezan con dúas barras diagonais (``//``), mentres que os comentarios de varias liñas comezan cunha barra diagonal e un asterisco (``/*``) e terminan cun asterisco e unha barra diagonal (``*/``).

### Exemplo: Comentarios dunha liña e de varias liñas en JavaScript

```javascript
// Comentario dunha liña: Isto non se executará

/*
Comentario de varias liñas:
Isto é un comentario que abarca
múltiples liñas e tampouco se executará
*/

console.log("Ola, mundo!"); // Comentario dunha liña despois dunha instrucción

```

## Estruturas de control

As estruturas de control en JavaScript permiten controlar o fluxo de execución do código e tomar decisións segundo as condicións establecidas.

### Control do código en JavaScript

JavaScript ofrece varias estruturas de control, como `if`, `if-else`, `switch`, `for`, `while` ou `do-while`, que permiten controlar o fluxo do programa en función de condicións o iteracións específicas.

### Bucles e iteracións

Os bucles en JavaScript permiten a execución repetitiva dun bloque de código mentres se cumpla unha condición. Os bucles máis comúns son `for`, `while` e `do-while`.

### Simplificando tarefas repetitivas en JavaScript

As estruturas de control de bucles permiten simplificar tarefas repetitivas en JavaScript, automatizando a execución de bloques de código sen necesidade de escribir as mesmas instrucións múltiples veces.

### Exemplo: Estruturas de control en JavaScript

```javascript
// Estrutura if
if (condicion) {
    // Código a executar si a condición é verdadeira
}

// Estrutura if-else
if (condicion) {
    // Código a executar si a condición é verdadeira
} else {
    // Código a executar si a condición é falsa
}

// Bucle for
for (let i = 0; i < 10; i++) {
    // Código a executar en cada iteración
}

// Bucle while
while (condicion) {
    // Código a executar mentres a condición sexa verdadeira
}

// Bucle do-while
do {
    // Código a executar alo menos unha vez e mentres a condición sexa verdadeira
} while (condicion);

```

## Operadores básicos e avanzados

Os operadores en JavaScript permiten realizar diversas operacións con valores e variables, como asignacións, comparacións e cálculos matemáticos.

### Operadores básicos en JavaScript

Os operadores básicos en JavaScript inclúen operadores aritméticos, de asignación e de comparación. Algúns exemplos son:

- Aritméticos: `+`, `-`, `*`, `/`, `%`
- Asignación: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- Comparación: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`

### Operadores avanzados en JavaScript

Os operadores avanzados en JavaScript inclúen operadores lóxicos, ternarios e de tipo. Algúns exemplos son:

- Lóxicos: `&&` (AND), `||` (OR), `!` (NOT)
- Ternario: `? :`
- Tipo: `typeof`, `instanceof`

### Exemplo: Uso de operadores básicos e avanzados en JavaScript

```javascript
// Operadores aritméticos
let suma = 5 + 3; // 8
let resta = 5 - 3; // 2
let producto = 5 * 3; // 15
let division = 5 / 3; // 1.666666...
let modulo = 5 % 3; // 2

// Operadores de asignación
let num = 5; // Asigna 5 á variable num
num += 3; // Incrementa num en 3 (num = num + 3)
num -= 2; // Decrementa num en 2 (num = num - 2)

// Operadores de comparación
let isEqual = 5 == "5"; // true
let isStrictEqual = 5 === "5"; // false

// Operadores lóxicos
let andResult = true && false; // false
let orResult = true || false; // true
let notResult = !true; // false

// Operador ternario
let age = 18;
let canVote = age >= 18 ? "Yes" : "No"; // "Yes"

// Operadores de tipo
let type = typeof "Hello"; // "string"
let isInstance = [1, 2, 3] instanceof Array; // true
```

## Indentación de código e convencións de nomes

A indentación de código e as convencións de nomes son prácticas fundamentais para manter a lixibilidade e o mantemento do código en JavaScript. Estas prácticas axudan a organizar o código de maneira clara e a facilitar a comprensión da súa estrutura e funcionamento.

### Introdución á lixibilidade en JavaScript

A lixibilidade do código é crucial para que outros desenvolvedores poidan entendelo facilmente e realizar modificacións si é necesario. A indentación apropiada e as convencións de nomes son dous aspectos clave para mellorar a lixibilidade do código.

### Bases para elixir nomes

Ao elixir nomes para variables, funcións e obxectos en JavaScript, é importante seguir certas convencións e prácticas recomendadas:

1. Utilizar nomes descritivos e significativos que indiquen claramente o propósito da variable, función ou obxecto.
2. Utilizar a notación *camelCase* para variables e funcións, onde a primeira letra de cada palabra, excepto a primeira, se escribe en maiúsculas. Exemplo: `unhaVariable`.
3. Utilizar a notación *PascalCase* para nomes de clases e construtores, onde a primeira letra de cada palabra se escribe en maiúsculas. Exemplo: `UnhaClase`.
4. Utilizar nomes en maiúsculas con guións baixos para constantes. Exemplo: `UNHA_CONSTANTE`.
5. Evitar o uso de nomes dunha soa letra, a menos que sexan variables de iteración en bucles, como `i`, `j` ou `k`.
6. Non utilizar nomes reservados por JavaScript, como `function`, `var`, `let`, `const`, entre outros.

### Exemplo: Uso de indentación e convencións de nomes en JavaScript

```javascript
// Declaración de variables con nomes descritivos
let userAge = 30;
let userName = "John";

// Declaración de funcións con nomes descritivos
function calculateArea(width, height) {
    return width * height;
}

// Uso de indentación en funcións e estruturas de control
function checkAge(age) {
    if (age >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}
```

## Fundamentos de JavaScript

Os fundamentos de JavaScript inclúen aspectos básicos da linguaxe, como tipos de datos, variables e constantes, e funcións básicas.

### Tipos de datos

JavaScript ten varios tipos de datos, como:

- **String**: cadeas de texto, representadas entre comiñas simples ou dobres (`'Ola'` o `"Ola"`).
- **Number**: números enteiros e decimais (exemplo: `42`, `3.14`).
- **Boolean**: valores de verdade, representados por `true` ou `false`.
- **Null**: representa un valor nulo ou “sen valor”.
- **Undefined**: indica que unha variable non foi asignada a ningún valor.
- **Object**: obxectos e coleccións de datos como arrays e funcións.

### Variables e constantes

As variables e constantes en JavaScript permiten almacenar e manipular valores. Se poden declarar usando as palabras chave `var`, `let` e `const`.

- `var`: permite declarar variables cun alcance de función.
- `let`: permite declarar variables cun alcance de bloque.
- `const`: permite declarar constantes cun valor que non vai ser modificado despois da súa asignación.

### Funcións básicas

As funcións en JavaScript son bloques de código reutilizables que poden ser chamados e executados cando se requiran. Para declarar unha función, se utiliza a palabra chave `function` seguida do nome da función, parénteses e un bloque de código entre chaves.

### Introdución ás funcións en JavaScript

As funcións en JavaScript poden aceptar argumentos ou parámetros, que son valores pasados á función cando se invoca; e poden devolver un valor usando a palabra clave `return`.

### Exemplo: Fundamentos de JavaScript

```javascript
// Tipos de datos
let myString = 'Ola, mundo!';
let myNumber = 42;
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;

// Variables e constantes
var myVar = 'Variable var';
let myLet = 'Variable let';
const MY_CONST = 'Constante';

// Funcións básicas
function greet(name) {
    return 'Ola, ' + name + '!';
}

// Invocar unha función
let greeting = greet('Xián ');
console.log(greeting); // Saida: "Ola, Xián !"

```

## Number, BigInt e conversións numéricas

JavaScript ofrece tipos de datos numéricos como ``Number`` e ``BigInt``, xunto con ferramentas para realizar operacións matemáticas e conversións numéricas.

### Que é un Number?

``Number`` é un tipo de dato en JavaScript que representa números enteiros e decimais. Pode almacenar valores numéricos en formato decimal, binario, octal e hexadecimal.

### Que é NaN (Not A Number)?

``NaN`` é un valor especial de JavaScript que representa o resultado dunha operación matemática non válida ou indefinida. ``NaN`` é único porque non é igual a ningún valor, incluso a si mesmo.

### O obxecto Math

JavaScript proporciona o obxecto Math, que contén propiedades e métodos para realizar operacións matemáticas comúns, como redondeo, xeración de números aleatorios e cálculo de funcións trigonométricas.

### Operacións matemáticas

As operacións matemáticas básicas en JavaScript, como suma, resta, multiplicación e división, se poden realizar utilizando os operadores aritméticos (`+`, `-`, `*`, `/`). Para operacións máis avanzadas, se pode utilizar o obxecto ``Math``.

### O tipo BigInt

``BigInt`` é un tipo de dato numérico en JavaScript que permite representar números enteiros máis grandes que o máximo representable polo tipo ``Number`` (2^53 – 1). Os ``BigInt`` se crean agregando unha ``n`` ao final dun número enteiro.

### Conversións numéricas

JavaScript permite converter valores entre diferentes tipos numéricos utilizando métodos como `parseInt()`, `parseFloat()` e `Number()`, así como o uso de operadores como `+` e `*`.

### Exemplo: Number, BigInt e conversións numéricas en JavaScript

```javascript
// Number
let num = 42;

// NaN
let notANumber = 0 / 0;

// Obxecto Math
let randomNum = Math.random(); // Número aleatorio entre 0 e 1
let roundedNum = Math.round(3.5); // 4

// Operacións matemáticas
let suma = 5 + 3;
let resta = 5 - 3;
let producto = 5 * 3;
let division = 5 / 3;

// BigInt
let bigInt = 1234567890123456789012345678901234567890n;

// Conversións numéricas
let str = "42";
let numFromStr = parseInt(str); // 42
let floatFromStr = parseFloat("3.14"); // 3.14
let numFromString = Number("42"); // 42
```

## Strings

Os strings en JavaScript son secuencias de caracteres que representan algún tipo de texto. Poden ser manipulados e modificados mediante unha variedade de métodos e propiedades.

### Que é un String?

Un string é un tipo de dato en JavaScript que representa unha cadea de caracteres. Se poden crear utilizando comiñas simples (`'texto'`), comiñas dobres (`"texto"`), ou comiñas invertidas (\`texto`).

### Posicións e substrings

Os caracteres dentro dun string teñen posicións indexadas, comezando desde 0. Se poden acceder e extraer substrings utilizando métodos como `charAt()`, `substring()`, `slice()` e `substr()`.

### Buscar e reemprazar

Os strings en JavaScript ofrecen métodos para buscar e reemprazar contido, como `indexOf()`, `lastIndexOf()`, `includes()`, `startsWith()`, `endsWith()`, `replace()` e `replaceAll()`.

### Modificar cadeas de texto

Se poden realizar modificacións e transformacións nos strings utilizando métodos como `concat()`, `toUpperCase()`, `toLowerCase()`, `trim()`, `padStart()` e `padEnd()`.

### Contido de texto

Unicode JavaScript admite o estándar Unicode para representar caracteres en strings, o que permite incluír caracteres de diversos idiomas e símbolos especiais. Para traballar con caracteres Unicode, se poden utilizar métodos como `fromCharCode()`, `fromCodePoint()`, `charCodeAt()` e `codePointAt()`.

### Exemplo: Strings en JavaScript

```javascript
// Crear un string
let myString = 'Ola, mundo!';

// Posicións e substrings
let firstChar = myString.charAt(0); // 'O'
let mySubstring = myString.substring(0, 3); // 'Ola'

// Buscar e reemprazar
let position = myString.indexOf('mundo'); // 7
let replacedString = myString.replace('mundo', 'amigo'); // 'Ola, amigo!'

// Modificar cadeas de texto
let upperCaseString = myString.toUpperCase(); // 'OLA, MUNDO!'
let trimmedString = '  Ola, mundo!  '.trim(); // 'Ola, mundo!'

// Contido de texto Unicode
let unicodeChar = String.fromCodePoint(128512); // '😀'
let codePoint = '😀'.codePointAt(0); // 128512
```

## Obxectos e Arrays

JavaScript ofrece estruturas de datos como obxectos e arrays para almacenar e organizar información de maneira estruturada e facilmente accesible.

### Que son os obxectos?

Os obxectos en JavaScript son coleccións de pares clave-valor, onde cada clave se asocia cun valor. Os obxectos se crean utilizando chaves (`{}`) e poden almacenar datos, funcións e outros obxectos.

### Estruturas de datos tipo dicionario

Os obxectos en JavaScript poden actuar como dicionarios, onde cada clave é única e se asocia a un valor específico.

### Formato JSON

JSON (JavaScript Object Notation) é un formato lixeiro para o intercambio de datos, que utiliza unha sintaxes similar a os obxectos de JavaScript. JSON se pode convertir a obxectos e viceversa utilizando `JSON.parse()` e `JSON.stringify()`.

### Desestruturación de obxectos

A desestruturación de obxectos permite extraer propiedades dun obxecto e asignalas a variables individuais de maneira máis concisa.

### Iteradores de obxectos

Se poden iterar as propiedades dun obxecto utilizando bucles `for...in` ou métodos como `Object.keys()`, `Object.values()` e `Object.entries()`.

### Que é un Array?

Os arrays en JavaScript son obxectos que representan listas ordenadas de elementos. Se crean utilizando corchetes (`[]`) e poden almacenar calquera tipo de dato, incluídos outros arrays (arrays multidimensionais).

### Buscar elementos nun array

Se poden buscar elementos nun array utilizando métodos como `indexOf()`, `lastIndexOf()`, `includes()`, `find()` e `findIndex()`.

### Modificar ou crear subarrays

Os arrays poden ser modificados ou se poden crear subarrays utilizando métodos como `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `slice()` e `concat()`.

### Ordenación dun array

Os arrays poden ordenarse utilizando o método `sort()`, que acepta unha función de comparación opcional para personalizar o ordenamento.

### Array functions

Os arrays en JavaScript ofrecen funcións de alto orde como `map()`, `filter()`, `reduce()`, `forEach()` e `some()` para transformar, filtrar e procesar os seus elementos.

### Desestruturación de arrays

A desestruturación de arrays permite extraer elementos dun array e asignalos a variables individuais de maneira máis concisa.

### Exemplo: Obxectos e arrays en JavaScript

```javascript
// Crear un obxecto
let obj = {
  clave: 'valor',
  saludo: function() {
    console.log('Ola, mundo!');
  },
};

// Desestruturación de obxectos
let {clave, saludo} = obj;

// Crear un array
let arr = [1, 2, 3, 4, 5];

// Buscar elementos nun array
let index = arr.indexOf(3); // 2, isto ocorre porque o indice de JS enceta en 0

// Modificar un array
arr.push(6); // [1, 2, 3, 4, 5, 6]

// Ordear un array
arr.sort((a, b) => a - b); // [1, 2, 3, 4, 5, 6]

// Array functions
let squares = arr.map((num) => num * num); // [1, 4, 9, 16, 25, 36]

// Desestruturación de arrays
let [first, second, ...rest] = arr;	
```

### Exemplo: Uso de JSON, iteradores de obxectos e funcións de array

```javascript
// JSON
let jsonString = '{"nome": "Xan", "idade": 30}';
let jsonObj = JSON.parse(jsonString); // {nome: "Xan", idade: 30}
let jsonStringify = JSON.stringify(jsonObj); // '{"nome":"Xan","idade":30}'

// Iteradores de obxectos
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

let keys = Object.keys(obj); // ['clave', 'saudo']
let values = Object.values(obj); // ['valor', function]

// Funcións de array
let evenNumbers = arr.filter((num) => num % 2 === 0); // [2, 4, 6]
let sum = arr.reduce((acc, num) => acc + num, 0); // 21
arr.forEach((num) => console.log(num));
let anyGreaterThan4 = arr.some((num) => num > 4); // true
```

## Set / Map

JavaScript ofrece estruturas de datos adicionais como Set e Map para almacenar e organizar información de maneira eficiente e fácil de usar.

### Que é un Set?

Un Set é unha estrutura de datos en JavaScript que representa unha colección de valores únicos, sen duplicados. Se crea utilizando a palabra clave `new Set()` e pode almacenar calquera tipo de dato.

### Operacións de conxuntos

Os conxuntos (Set) en JavaScript ofrecen varios métodos para realizar operacións comúns, como agregar elementos (`add()`), eliminar elementos (`delete()`), verificar si un conxunto conten un elemento (`has()`), e obter o tamaño do conxunto (`size`). Tamén é posible iterar sobre os elementos dun conxunto utilizando bucles `for...of` o o método `forEach()`.

### Que é un Map?

Un Map é unha estrutura de datos en JavaScript que representa unha colección de pares clave-valor, similar a un obxecto. Sen embargo, a diferenza dos obxectos, as claves nun Map poden ser de calquera tipo, incluídos obxectos e funcións. Os Map se crean utilizando a palabra clave `new Map()`.

### Mapa: Estrutura de datos de pares clave-valor

Os Map en JavaScript ofrecen varios métodos para realizar operacións comúns, como agregar pares clave-valor (`set()`), obter o valor asociado a unha clave (`get()`), eliminar un par clave-valor (`delete()`), verificar si un Map contén unha clave (`has()`), e obter o tamaño do Map (`size`). Tamén é posible iterar sobre as claves, valores o pares clave-valor dun Map utilizando bucles `for...of` ou os métodos `keys()`, `values()` e `entries()`.

### Exemplo: Uso de Set e Map en JavaScript

```javascript
// Crear un Set
let mySet = new Set();

// Operacións de conxuntos
mySet.add(1);
mySet.add(2);
mySet.add(2); // Non se agregará porque xa existe no Set
console.log(mySet.size); // 2
console.log(mySet.has(1)); // true
mySet.delete(1);
console.log(mySet.size); // 1

// Crear un Map
let myMap = new Map();

// Estrutura de datos de pares clave-valor
myMap.set('clave', 'valor');
myMap.set('nome', 'Xián ');
console.log(myMap.size); // 2
console.log(myMap.get('nome')); // 'Xián '
console.log(myMap.has('nome')); // true
myMap.delete('nome');
console.log(myMap.size); // 1
```

## Calidade de código

Manter un alto nivel de calidade no código é esencial para garantir a lixibilidade, o mantemento e escadabilidade de calquera proxecto de desenvolvemento. Ferramentas como linters e formatadores de código poden axudar a mellorar a calidade do código en proxectos de JavaScript.

### ESLint: Linter Javascript

ESLint é un linter de código aberto para JavaScript que analiza o código fonte e detecta problemas de estilo, erros de programación e malas prácticas. ESLint utiliza un conxunto de regras configurables para aplicar estilos de codificación consistentes e previr erros comúns.

### Revisión de erros o problemas

Al usar ESLint, se identifican automaticamente erros e problemas no código, e se proporcionan mensaxes descritivos para axudar aos desenvolvedores a solucionalos. ESLint tamén pode corrixir automaticamente algúns problemas, como erros de formato e estilo, ao executar o comando `eslint --fix`.

### Exemplo: Configuración de ESLint nun proxecto de JavaScript

1. Instalar ESLint globalmente ou como unha dependencia de desenvolvemento no proxecto:

```bash
npm install -g eslint
```

ou

```bash
npm install --save-dev eslint
```

2. Inicializar a configuración de ESLint no proxecto executando o siguiente comando e siguiendo as instruccións:

```bash
eslint --init
```
3. Crear un arquivo de configuración `.eslintrc.json` na raíz do proxecto e agregar as reglas deseadas. Por exemplo:

```json
{
  "extends": "eslint:recommended",
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
}
```
4. Executar ESLint nos arquivos de JavaScript do proxecto:

```bash
eslint yourfile.js
```
5. Para corregir automáticamente algunos problemas, executar:

```bash
eslint --fix yourfile.js
```
## Módulos

Os módulos son unha forma de organizar e dividir o código en diferentes arquivos e compoñentes, o que facilita a organización, o mantemento e a reutilización do código en proxectos de JavaScript. Coa introdución de ECMAScript 2015 (ES6), os módulos ECMAScript (ESM) se converteron nunha característica nativa de JavaScript, permitindo unha xestión máis eficiente das dependencias e a carga de módulos.

### Que son os módulos (ESM)?

Os módulos ECMAScript(ESM) son unha forma de organizar o código en arquivos separados que poden exportar e importar funcións, variables, obxectos e clases entre eles. Isto permite crear estruturas de código máis limpas e modulares, e facilita a reutilización de código en diferentes partes dunha aplicación o en múltiples proxectos.

### Exportar módulos

Para facer que unha función, variable, obxecto ou clase estea dispoñible para ser utilizada noutros módulos, se debe exportar utilizando a palabra chave `export`. Podes utilizar a exportación nomeada ou a exportación predeterminada:

- **Exportación nomeada:** Permite exportar múltiples elementos desde un módulo e debe ser importada usando o mesmo nome.

```javascript
// myModule.js
export const myFunction = () => {...};
export const myVariable = 42;
```

- **Exportación predeterminada:** Só pode haber unha exportación predeterminada por módulo, e se pode importar con calquera nome.

```javascript
// defaultModule.js
export default function() {...};
```

### Importar módulos

Para utilizar as funcións, variables, obxectos ou clases exportadas desde outros módulos, se deben importar utilizando a palabra chave `import`:

- **Importación nomeada:** Importa elementos exportados con nomes específicos.

```javascript
// main.js
import { myFunction, myVariable } from './myModule.js';
```

- **Importación predeterminada:** Importa o elemento exportado por defecto dun módulo.

```javascript
// main.js
import myDefaultFunction from './defaultModule.js';
```

### Import dinámico en JavaScript

O `import` dinámico é unha característica de JavaScript que permite importar módulos de forma dinámica en tempo de execución. Isto pode ser útil para cargar módulos baixo demanda, por exemplo, en aplicacións dunha soa páxina (SPA) con rutas e compoñentes específicas.

```javascript
// dynamicImport.js
async function loadModule() {
  const module = await import('./myModule.js');
  module.myFunction();
}

loadModule();
```

## Orientación a obxectos (OOP)

A programación orientada a obxectos (OOP) é un paradigma de programación que utiliza obxectos e as súas interaccións para deseñar e estruturar aplicacións e software. Os obxectos son instancias de clases, que son modelos que definen as propiedades e comportamentos - métodos- que os obxectos deben ter. A OOP permite organizar e *modularizar* o código de maneira máis eficiente, e facilita o mantemento e a reutilización do código.

### Que é a orientación a obxectos?

A orientación a obxectos é un enfoque de diseño e programación que se centra na creación de entidades chamadas obxectos, que representan elementos do mundo real ou conceptos abstractos. Os obxectos encapsulan datos (propiedades) e comportamentos (métodos) nunha única entidade e poden interactuar entre si para realizar tarefas complexas.

### Clases en Javascript

A partir de ECMAScript 2015 (ES6), JavaScript introduciu o soporte nativo para clases, o que facilita a creación de obxectos utilizando a sintaxe de clase. As clases son modelos que definen as propiedades e métodos dos obxectos que se crean a partir delas.

```javascript
class MyClass {
  constructor(param) {
    this.property = param;
  }

  myMethod() {
    console.log(this.property);
  }
}

const myObject = new MyClass('Ola, mundo!');
myObject.myMethod(); // Output: 'Ola, mundo!'
```

### Propiedades de clase

As propiedades de clase son variables que almacenan valores específicos de cada instancia dunha clase. Se definen dentro do constructor da clase utilizando a palabra clave `this`:

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}
```

### Métodos de clase

Os métodos de clase son funcións asociadas a unha clase que poden ser chamadas polas instancias da clase. Os métodos poden acceder e modificar as propiedades da instancia utilizando a palabra chave `this`:

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getDescription() {
    return `This car is a ${this.brand} ${this.model}`;
  }
}
```

### Herdanza de Clases

A herdanza é un mecanismo da OOP que permite crear unha nova clase a partir dunha clase existente, heredando sus propiedades e métodos. En JavaScript, a herdanza de clases se logra utilizando a palabra chave `extends`:

```javascript
class Vehicle {
  constructor(wheels) {
    this.wheels = wheels;
  }

  getWheelCount() {
    return this.wheels;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(4);
    this.brand = brand;
    this.model = model;
  }

  getDescription() {
    return `This car is a ${this.brand} ${this.model} with ${this.getWheelCount()} wheels`;
  }
}
```

## DOM

O Document Object Model (DOM) é unha representación en forma de obxecto da estrutura dun documento HTML ou XML. Permite a os desenvolvedores interactuar e manipular o contido, estrutura e estilo da páxina web mediante JavaScript ou outras linguaxes de programación.

### Que é o DOM?

O DOM é unha interfaz de programación que proporciona unha representación en forma de árbore dos elementos dunha páxina web e as súas relacións. Cada nodo da árbore representa un elemento do documento, como un elemento HTML, un atributo ou un texto. Ao interactuar có DOM, é posible crear, modificar ou eliminar elementos e atributos, cambiar o contido de texto e aplicar estilos CSS.

### Seleccionar elementos do DOM

Para interactuar coos elementos dunha páxina web, primeiro debes seleccionalos utilizando diferentes métodos proporcionados polo DOM:

- `getElementById`: Selecciona un elemento polo seu atributo “id”.

```javascript
const element = document.getElementById('myElement');
```

- `querySelector`: Selecciona o primeiro elemento que coincida có selector CSS proporcionado.

```javascript
const element = document.querySelector('.myClass');
```

- `querySelectorAll`: Selecciona tódolos elementos que coincidan có selector CSS proporcionado.

```javascript
const elements = document.querySelectorAll('.myClass');
```

### Crear elementos no DOM

Podes crear novos elementos do DOM utilizando o método `createElement`:

```javascript
const newElement = document.createElement('div');
```

### Inserir elementos no DOM

Para agregar un elemento ao DOM, debes inserilo como fillo dun elemento existente. Algúns métodos para inserir elementos no DOM inclúen:

- `appendChild`: Insire un elemento como último fillo do elemento seleccionado.

```javascript
const parentElement = document.querySelector('#parent');
parentElement.appendChild(newElement);
```

- `insertBefore`: Insire un elemento antes de outro elemento fillo do elemento seleccionado.

```javascript
const referenceElement = document.querySelector('#reference');
parentElement.insertBefore(newElement, referenceElement);
```

### A API classList de Javascript

A API `classList` proporciona unha forma fácil de agregar, eliminar e alternar clases CSS en elementos do DOM:

```javascript
element.classList.add('myClass'); // Agrega a clase 'myClass'.
element.classList.remove('myClass'); // Elimina a clase 'myClass'.
element.classList.toggle('myClass'); // Alterna a clase 'myClass'.
```

### Navegar polos elementos do DOM

Podes navegar polos elementos do DOM utilizando as súas propiedades de relación, como `parentNode`, `firstChild`, `lastChild`, `previousSibling` e `nextSibling`:

```javascript
const parent = element.parentNode;
const firstChild = element.firstChild;
const lastChild = element.lastChild;
const previousSibling = element.previousSibling;
const nextSibling = element.nextSibling;
```

## Eventos

Os eventos son accións ou interaccións do usuario ou o sistema que poden ser detectadas e manexadas polo código JavaScript nunha páxina web. Algúns exemplos de eventos inclúen clics do rato, pulsacións de teclas, cambios en elementos de formulario e carga de páxinas.

### Que son os eventos?

Os eventos son sinais enviadas polo navegador ou o usuario para indicar que algo sucedeu na páxina web. Os desenvolvedores poden escoitar e responder a estes eventos utilizando manexadores de eventos en JavaScript, o que permite interactuar cos usuarios e realizar accións baseadas nas súas interaccións. 

### Eventos mediante HTML

Podes agregar manexadores de eventos directamente no HTML utilizando atributos “on” seguidos do nome do evento, como “``onclick``”, “``onmouseover``” o “``onkeyup``”:

```html
<button onclick="myFunction()">Click me!</button>
```

### Eventos mediante Javascript

Para agregar manexadores de eventos en JavaScript, podes asignar unha función á propiedade “``on``” seguida do nome do evento no elemento do DOM:

```javascript
const button = document.querySelector('button');
button.onclick = function() {
  console.log('Button clicked!');
};
```

### O método ``addEventListener``

O método `addEventListener` permite agregar múltiples manexadores de eventos para un mesmo evento nun elemento do DOM:

```javascript
button.addEventListener('click', function() {
  console.log('Button clicked!');
});

button.addEventListener('click', function() {
  console.log('Another button clicked!');
});
```

### Escoitar eventos e handleEvent

Podes utilizar a interface `EventListener` e o seu método `handleEvent` para manexar eventos dunha maneira máis estruturada e orientada a obxectos:

```javascript
class MyEventListener {
  handleEvent(event) {
    console.log('Event:', event.type);
  }
}

const myListener = new MyEventListener();
button.addEventListener('click', myListener);
```

### Eventos nativos

Os eventos nativos son eventos integrados no navegador, como “``click``”, “``keydown``”, “``submit``” e “``load``”. Estes eventos son xerados automáticamente polo navegador en resposta a interaccións do usuario ou cambios na páxina.

### Eventos personalizados

Podes crear e emitir os teus propios eventos personalizados utilizando a clase `CustomEvent`:

```javascript
const customEvent = new CustomEvent('myEvent', { detail: { message: 'Ola, mundo!' } });
element.dispatchEvent(customEvent);
```

### Eventos do navegador

Os eventos do navegador son eventos globais que ocorren no obxecto `window`, como “``resize``”, “``scroll``” e “``beforeunload``”.

### Emisión de eventos

Para emitir un evento, utiliza o método `dispatchEvent` no elemento do DOM ao que desexas asociar o evento:

```javascript
element.dispatchEvent(customEvent);
```

### Propagación de eventos

Os eventos no DOM se propagan seguindo dúas fases: captura e burbulla. Durante a fase de captura, o evento descende desde o elemento raíz hasta o elemento obxectivo. Durante a fase de burbulla, o evento ascende desde o elemento obxectivo hasta o elemento raíz. Podes deter a propagación dun evento utilizando o método `stopPropagation` no obxecto do evento 

```javascript
button.addEventListener('click', function(event) {
  event.stopPropagation();
  console.log('Button clicked!');
});	
```

## Datas e horas

JavaScript ofrece un obxecto `Date` para traballar con datas e horas, permitindo a os desenvolvedores obter, establecer e manipular información de tempo e data.

### O tipo Date

O obxecto `Date` en JavaScript é unha clase que representa unha única data e hora. Podes crear unha instancia de `Date` utilizando o construtor `Date`:

```javascript
const now = new Date(); // Crea unha instancia de Date cunha data e hora actuales.
const specificDate = new Date('2023-03-25T00:00:00'); // Crea unha instancia de Date cunha data e hora específicas.
```

O obxecto `Date` proporciona varios métodos para obter e establecer compoñentes individuais de data e hora, como ano, mes, día, hora, minuto, segundo e milisegundo:

```javascript
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();
const millisecond = now.getMilliseconds();
```

### Formatar datas con Intl

A API `Intl.DateTimeFormat` é unha clase incorporada en JavaScript que permite formatar datas e horas de acordo coas convencións locais e os formatos específicos dun idioma:

```javascript
const formatter = new Intl.DateTimeFormat('es-ES', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const formattedDate = formatter.format(now);
console.log(formattedDate); // Exemplo de saída: '25 de marzo de 2023'
```

### Formatar datas relativas con Intl

A API `Intl.RelativeTimeFormat` é unha clase incorporada en JavaScript que permite formatar as diferenzas de tempo en forma de texto relativo, como “fai 3 días” ou “en 2 horas”:

```javascript
const relativeFormatter = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });

const daysDifference = -3;
console.log(relativeFormatter.format(daysDifference, 'day')); // Exemplo de saída: 'fai 3 días'
```

### Formatear datas con dayjs

``Day.js`` é unha biblioteca liviana e fácil de usar para manipular e formatear datas e horas en JavaScript. Podes utilizar ``Day.js`` para formatear datas de maneira similar ás solucións nativas:

```javascript
// Primeiro, instala Day.js mediante npm, pnpm ou yarn:
// npm install dayjs
// yarn add dayjs
// pnpm add dayjs

// Importa Day.js no teu arquivo JavaScript:
import dayjs from 'dayjs';

// Utiliza Day.js para formatear datas:
const formattedDateWithDayjs = dayjs(now).format('MMMM D, YYYY');
console.log(formattedDateWithDayjs); // Exemplo de saída: 'March 25, 2023'
```

## Expresións regulares

As expresións regulares, tamén coñecidas como ``regex`` o ``regexp``, son patróns de busca de texto que permiten atopar coincidencias, reemprazar e manipular cadeas de caracteres en función de ditos patróns.

### Que é unha expresión regular?

Una expresión regular é unha secuencia de caracteres que define un patrón de busca, utilizado principalmente para busca de patróns de cadeas de caracteres ou operacións de substitución.

### Propiedades e flags

As expresións regulares en JavaScript poden ter certas propiedades o bandeiras que modifican o seu comportamento:

- `g`: Global, busca todas as coincidencias en lugar de deterse na primeira.
- `i`: Insensible a maiúsculas e minúsculas, trata as letras maiúsculas e minúsculas como iguais.
- `m`: Multiliña, permite que os caracteres `^` e `$` coincidan có inicio e o final dunha liña, respectivamente, en lugar do inicio e o final da cadea completa.
- `s`: Permite que o punto (.) coincida con caracteres de nova liña.
- `u`: Trata a cadea como texto Unicode e permite o uso de escape Unicode.
- `y`: Modo “sticky”, busca coincidencias só ao principio ou na posición indicada.

### Buscar e capturar textos

Podes utilizar expresións regulares en JavaScript cos métodos `match`, `search`, `replace`, `split` e `test` dos obxectos `String` e `RegExp`. Por exemplo:

```javascript
const regex = /ola/gi;
const text = 'Ola, como estás? Ola de novo.';

const matches = text.match(regex); // ['Ola', 'Ola']
const searchResult = text.search(regex); // 0 (índice da primeira coincidencia)
const replacedText = text.replace(regex, 'adios'); // 'Adios, como estás? Adios de novo.'
const splitText = text.split(regex); // ['', ', ¿cómo estás? ', ' de novo.']
const testResult = regex.test(text); // true (hai alo menos unha coincidencia)
```

### Como crear expresións regulares

Podes crear expresións regulares en JavaScript de dúas maneiras:

- Notación literal: `/patron/flags`
- Construtor de RegExp: `new RegExp('patrón', 'flags')`

```javascript
const regexLiteral = /ola/gi;
const regexConstructor = new RegExp('ola', 'gi');
```

### Caracteres especiais dentro das expresións regulares

As expresións regulares utilizan caracteres especiais para definir patróns de búsqueda:

- `^`: Coincide có inicio da cadea ou liña.
- `$`: Coincide có final da cadea ou liña.
- `.`: Coincide con calquera carácter, excepto os caracteres de nova liña.
- `*`: Coincide con cero ou máis ocorrencias do carácter ou patrón anterior.
- `+`: Coincide con unha ou máis ocorrencias do carácter ou patrón anterior.
- `?`: Coincide con cero ou unha ocorrencia do carácter ou patrón anterior.
- `{n}`: Coincide exactamente con `n` ocorrencias do carácter ou patrón anterior.
- `{n,}`: Coincide con alo menos `n` ocorrencias do carácter ou patrón anterior.
- `{n,m}`: Coincide con alo menos `n` e como máximo `m` ocorrencias do carácter ou patrón anterior.
- `(x|y)`: Coincide con `x` ou `y`.
- `[xyz]`: Coincide con calquera carácter dos que aparecen dentro dos corchetes.
- `[^xyz]`: Coincide con calquera carácter que NON estea dentro dos corchetes.
- `\d`: Coincide cun díxito decimal (0-9).
- `\D`: Coincide con calquera carácter que non sexa un díxito decimal.
- `\w`: Coincide con calquera carácter alfanumérico ou guión baixo.
- `\W`: Coincide con calquera carácter que non sexa alfanumérico ou guión baixo.
- `\s`: Coincide cun carácter de espazo en branco (espazo, tabulador, nova liña, etc.).
- `\S`: Coincide con calquera carácter que non sexa un espazo en branco.
- `\b`: Coincide cun límite de palabra (posición entre un carácter \w e un carácter \W).
- `\B`: Coincide cunha posición que non sexa un límite de palabra.
- `x(?=y)`: Coincide con `x` só si é seguido por `y`.
- `x(?!y)`: Coincide con `x` só si non é seguido por `y`.
- `(?<=y)x`: Coincide con `x` só si é precedido por `y`.
- `(?<!y)x`: Coincide con `x` só si non é precedido por `y`.

## Multimedia

A web moderna ofrece un conxunto de ferramentas para traballar con arquivos multimedia como imaxes, audio e vídeo. JavaScript proporciona APIs para interactuar con estes medios, permitindo manipulalos e controlar a súa reprodución.

### API de Audio Javascript

A API de audio en JavaScript, conocida como Web Audio API, proporciona un entorno de programación avanzado para traballar con audio en aplicacións web. Permite xerar audio, analizalo, crear visualizacións de audio, aplicar efectos e moito máis. Aquí hai un exemplo básico de como reproducir un arquivo de audio:

```javascript
const audio = new Audio('ruta/ao/arquivo/audio.mp3');

// Reproducir audio
audio.play();

// Pausar audio
audio.pause();

```

### API multimedia para reproducir audio o video

O elemento HTML `<audio>` e `<video>` se poden utilizar para reproducir arquivos multimedia. Podes controlar a reprodución destes elementos utilizando JavaScript. Aquí hai un exemplo básico de como reproducir un arquivo de vídeo:

```html
<video id="miVideo" width="320" height="240" controls>
  <source src="ruta/al/arquivo/video.mp4" type="video/mp4">
  Tu navegador no soporta o elemento de video.
</video>

<script>
  const video = document.getElementById('miVideo');

  // Reproducir video
  video.play();

  // Pausar video
  video.pause();
</script>
```

## Asincronía

A asincronía en JavaScript permite executar tarefas sin bloquear a execución do resto do código, como solicitudes a un servidor, lectura de arquivos, entre outros. Isto é crucial para evitar que as aplicacións web se conxelen mentres esperan a finalización de tarefas que consumen tempo.

### Funcións callbacks

As funcións ``callback`` son funcións que se pasan como argumentos a outras funcións e se executan despois de que a función principal teña terminado. Estas se utilizan frecuentemente en JavaScript para manexar operacións asíncronas.

```javascript
function exemploCallback(mensaje, callback) {
  console.log(mensaje);
  callback();
}

exemploCallback('Mensaje 1', function() {
  console.log('Mensaje 2 (callback)');
});
```
### Que son as promesas?

As promesas son obxectos que representan o resultado final dunha operación asíncrona. Permiten manexar o fluxo de control de forma máis clara e lexible en comparación cos *callbacks*. Unha promesa ten tres estados: pendente, resolta (cumprida) ou rexeitada.

```javascript
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Operación completada');
  }, 1000);
});

promesa.then(resultado => {
  console.log(resultado);
}).catch(error => {
  console.error(error);
});
```

### Promesas en grupo (Promise API)

A API de promesas ofrece métodos como `Promise.all()`, `Promise.race()`, `Promise.allSettled()` e `Promise.any()` para traballar con múltiples promesas simultaneamente.

```javascript
const promesa1 = Promise.resolve('Promesa 1 completada');
const promesa2 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Promesa 2 completada'));

Promise.all([promesa1, promesa2]).then(resultados => {
  console.log(resultados);
});
```

### Async/Await

A sintaxis `async/await` permite escribir código asíncrono de maneira máis lexible e fácil de entender, utilizando un estilo similar ao código síncrono. As funcións `async` sempre devolven unha promesa e as expresións `await` deteñen a execución da función hasta que a promesa se resolva.

```javascript
async function exemploAsync() {
  const resultado = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Operación completada');
    }, 1000);
  });

  console.log(resultado);
}

exemploAsync();
```

## Peticións HTTP

As peticións HTTP permiten ás aplicacións web comunicarse con servidores e APIs para intercambiar información. JavaScript ofrece varias ferramentas para realizar peticións HTTP, como AJAX, XMLHttpRequest e Fetch.

### AJAX: Peticións HTTP

AJAX (Asynchronous JavaScript and XML) é unha técnica que permite ás aplicacións web cargar e procesar datos en segundo plano sen interromper a páxina actual. Aínda que o nome inclúe “XML”, AJAX tamén pode traballar con outros formatos de datos, como JSON.

### XHR: XMLHttpRequest

XMLHttpRequest é unha API de JavaScript que permite realizar peticións HTTP asíncronas. É a base de AJAX e foi a forma máis común de realizar peticións HTTP en JavaScript ata a aparición da API Fetch.

```javascript
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};

xhr.open('GET', 'https://api.example.com/data', true);
xhr.send();
```

### Fetch: Peticións Asíncronas

A API Fetch proporciona unha interface moderna e máis fácil de usar para realizar peticións HTTP. Fetch utiliza promesas, o que permite un mellor manexo de erros e unha estrutura de código máis limpa.

```javascript
fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```

### URL en Javascript

A API URL en JavaScript permite analizar e construír URLs. Tamén se pode utilizar para modificar e construir parámetros de consulta para peticións HTTP.

```javascript
const url = new URL('https://api.example.com/data');
url.searchParams.append('param', 'value');
console.log(url.toString()); // https://api.example.com/data?param=value
```

### Política CORS

A política de intercambio de recursos entre orixes (CORS, Cross-Origin Resource Sharing) é unha medida de seguridade implementada polos navegadores para previr solicitudes non autorizadas a recursos en servidores remotos. Para realizar peticións HTTP a outros dominios, o servidor debe incluír encabezados específicos na resposta que permitan o acceso.

...