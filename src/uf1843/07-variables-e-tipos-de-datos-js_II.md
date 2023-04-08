# Operacións de ensaio

Como propietario dunha xeadería e posto que xa adquiriches algunhas aptitudes de programación, decides desenvolver un software para o teu negocio. Pode que un día convértala xeadería nunha cadea.

En primeiro lugar, queres codificar todo o que sabe sobre o teu negocio, como os distintos xeados e os prezos. A continuación, queres simular interaccións de clientes. Por último, queres calcular os beneficios e obter máis información útil.

## Crear o negocio

En primeiro lugar, inicia teu imperio de xeaderías mediante a codificación de todos os sabores dos que dispós.

1. Crea un arquivo, e chámao *app.js* e engádelle o seguinte contido:

   ```javascript
   let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip", "Raspberry"];
   ```

2. A continuación, queres clasificar os sabores por tipo e asignarlle un prezo a cada un. Acaba por modificar o código da seguinte maneira:

   ```javascript
   let iceCreamFlavors = [
    { name: "Chocolate", type: "Chocolate", price: 2 }, 
    { name: "Strawberry", type: "Fruit", price: 1 }, 
    { name: "Vanilla", type: "Vanilla", price 2 }, 
    { name: "Pistachio", type: "Nuts", price: 1.5 }, 
    { name: "Neapolitan", type: "Chocolate", price: 2}, 
    { name: "Mint Chip", type: "Chocolate", price: 1.5 },
    { name: "Raspberry", type: "Fruit", price: 1},
   ];
   ```

   Agora o elemento da matriz pasou de cadea a obxecto. Realiza este cambio para anticiparse aos clientes que consultan os prezos o os tipos de xeado que tes.

## Recepción de clientes

Queres simular algúns escenarios de clientes no código, para asegurarse de que a maneira en que clasificaches o inventario é o suficientemente flexible.

1. Antes da primeira transacción de cliente, dáste conta de que necesitas unha matriz `transactions`. Empeza a pensar en que información desexas gardar en cada transacción. O prezo é definitivamente algo que debes gardar e probablemente tamén o que compran os clientes. Agrega o código seguinte:

   ```javascript
   // { scoops: [], total: }
   let transactions = []
   ```

2. A continuación, decide codificar transaccións mediante a adición do código seguinte:

   ```javascript
   transactions.push({ scoops: ["Chocolate", "Vanilla", "Mint Chip"], total: 5.5 })
   transactions.push({ scoops: ["Raspberry", "StrawBerry"], total: 2 })
   transactions.push({ scoops: ["Vanilla", "Vanilla"], total: 4 })
   ```

   Isto simula tres interaccións de clientes. A continuación, desexas analizar o resultado.

## Analizar o negocio

Cando se ten un negocio, os beneficios son importantes, pero non son o único que importa. Que é aquilo que se vende tanto que necesita asegurarse de que haia existencias suficientes? Tamén, que é o que non se vende tanto, polo que non é necesario ter tantas existencias?

1. Para calcular as ganancias, agrega o código seguinte:

   ```javascript
   const total = transactions.reduce((acc, curr) => acc + curr.total, 0);
   console.log(`You've made ${total} $ today`); // You've made 11.5 $ today
   ```

2. Para saber canto se vendeu de cada sabor, agrega o código:

   ```javascript
   let flavorDistribution = transactions.reduce((acc, curr) => {
     curr.scoops.forEach(scoop => {
       if (!acc[scoop]) {
         acc[scoop] = 0;
       }
       acc[scoop]++;
     })
     return acc;
   }, {}) // { Chocolate: 1, Vanilla: 3, Mint Chip: 1, Raspberry: 1, StrawBerry: 1 }
   ```

   O código anterior repasa todas as transaccións. Para cada transacción, comproba a cantidade de bolas de xeado e actualiza un dicionario coa frecuencia de compra de cada sabor. Si estas ventas foran reais, é probable que tiveras que ter máis existencias de vainilla.

Noraboa, abriches unha xeadería. Xa sabes como codificar sabores e transaccións mediante matrices e obxectos. Tamén aprendeches a facer un resumo das ganancias e a identificar a cantidade de xeado que se vendeu de cada sabor.

## Resumo

Agora que coñeces as matrices e bucles de JavaScript, podes empezar a pensar en formas de estruturar e organizar os datos no código JavaScript.

Para practicar o que aprendeches, visita algúns dos teus sitios web favoritos e ten en conta os tipos de datos que usan. Por exemplo, considere a forma en que se agregan e quitan elementos dun carro da compra en liña, ou  a forma como o equipo e as existencias dun xogador se agregan e quitan nun xogo baseado no explorador. Ten en conta por que e como se usan os bucles e matrices.

A medida que adquires máis coñecementos sobre matrices e bucles, empezarás a ter en conta estes tipos de datos e métodos de almacenamento nos sitios web que usas cada día.

 :pencil2: Suxestión:

As matrices de JavaScript teñen moitos métodos asociados que son útiles para a manipulación de datos. [Le estes métodos](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/) e proba algúns deles (como `push`, `pop`, `slice` e `splice`) nunha matriz que teñas creado.

_______

## Suposto con variables

Como novo programador de xogos, se te encarga a tarefa de crear xogos recreativos para Internet. A primeira tarefa consiste en empezar a traballar no xogo de cartas *Texas Hold'em*. En lugar de que os xogadores aposten diñeiro, se usarán puntos para representar as fichas de póker.

## Modelado do estado do xogo

Debes tomar o que sabes do *Texas Hold'em* e crear variables para almacenar valores de cartas. Ao facelo, debes pensar nos *valores de inicio* e nos valores que cambiarán co tempo.

Sabes que no *Texas Hold'em* hai xogadores, cartas iniciais e puntos. Intenta montar unha estrutura de xogo básica mediante variables.

1. Crea un arquivo denominado *app.js*:

```bash
touch app.js
code .
```

Agora deberías ter un editor aberto no shell.

Engade o seguinte código ao arquivo:

```javascript
let startingPokerChips = 100; // points
let players = 3;
let noOfStarterCards = 2;
```

Agora tes tres variables para representar o estado inicial do xogo.

Crea variables que representen a xogadores concretos. Agrega o código seguinte:

```javascript
let playerOnePoints = startingPokerChips;
let playerTwoPoints = startingPokerChips;
let playerThreePoints = startingPokerChips;
```

Creaches os puntos de partida de tres xogadores asignándolles a variable `startingPokerChips`, que conten o valor `100`.

Mostra unha ronda do xogo específica e como unha asignación pode representar un estado do xogo. Agrega as seguintes liñas ao código:

1. ```javascript
   playerOnePoints -= 50;
   playerTwoPoints -=25;
   playerThreePoints +=75;
   ```

Simulaches correctamente unha ronda do xogo na que o primeiro e o segundo xogador apostaron 50 e 25 puntos respectivamente. Dado que o terceiro xogador ten unha mellor man, este termina gañando a ronda. O xogo toma os puntos do primeiro e o segundo xogador e agrégaos ao bote do terceiro xogador.

## Refactorización a constantes

Neste punto, tes algunhas variables que representan partes do xogo de cartas. Lembra que tes constantes dispoñibles, que son variables que no deben cambiar o seu valor. Vexamos que variables se poderían prestar para representarse mellor como constantes no código fonte.

 :pencil2: Suxestión:

Dedica un ou dos minutos a pensar en que variables non deben cambiar e que variables poderían ter valores cambiantes. A continuación, desprázate cara abaixo para ver a solución.

1. Na parte superior do arquivo, cambia o código seguinte:

```javascript
let startingPokerChips = 100; // points
let players = 3;
let noOfStarterCards = 2;
```

... por este outro código:

```javascript
const STARTING_POKER_CHIPS = 100; // points
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;
```

Identificaches correctamente que variables son importantes para o xogo. Tamén describen como se xoga. As fichas iniciais dun xogador non cambiarán, incluso si o bote dun xogador determinado cambia durante o xogo. O número de xogadores tamén é constante, a menos que imaxines que poderías recompilar o xogo de forma que un xogador poida unirse en calquera momento. O número de cartas iniciais sempre son dúas no *Texas Hold'em*. Como programador de xogos, tes a capacidade de decidir en última instancia que debe ser modificable e que debe ser constante.

 :pencil2: Suxestión:

Unha excelente maneira de pensar nas variables é converter todas as variables en constantes para empezar. A continuación, decide si o valor dunha variable terá que cambiar no futuro. Nese caso, cámbiaa de `const` a `let`.

Asegúrate de cambiar o código dependente, para que o código se siga compilando:

1. ```javascript
   let playerOnePoints = STARTING_POKER_CHIPS;
   let playerTwoPoints = STARTING_POKER_CHIPS;
   let playerThreePoints = STARTING_POKER_CHIPS;
   ```

Noraboa! Empezaches a traballar nunha base de código de JavaScript que desenvolve *Texas Hold'em*. Ao facelo, determinaches cales son os valores de inicio, que valores poden cambiar e como cambiar eses valores.

_______

## Tipos de datos

## Exercicio - Tipos de datos

​         Completado        100 XP

- 3 minutos

Espacio aislado activado Tiempo restante:

​

​

Ha usado 1 dos 10 espacios aislados de hoy. Mañana habrá disponibles máis espacios aislados.

Su empresa está satisfecha con o modelado anterior do Texas  Hold'em e desea ver que sigue trabajando en su implementación. Xa sabes máis sobre os tipos de datos, así que imos a poñer eses coñecementos  en práctica.

## Adición de tipos de datos

Para empezar, vamos a revisar o código seguinte que ha creado hasta ahora:

JavaScript

```javascript
const STARTING_POKER_CHIPS = 100; // points
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

playerOnePoints -= 50;
playerTwoPoints -=25;
playerThreePoints +=75; 
```

Ten certos aspectos do xogo representados como variables, pero carece doutros aspectos, como saber si o xogo ha finalizado. Ademais, sería bo que os xogadores tiveran nomes.

1. Despois das tres constantes, agrega o seguinte código:

```javascript
let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";
```

Agora tes tres variables para representar os nomes dos xogadores. Vamos a agregar o texto de introdución para que se note que é un xogo. Despois do código seguinte:

```javascript
let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;
```

... engade o código para representar o inicio do xogo:

1. ```javascript
   console.log(`Welcome to Texas Hold'em. The championship title will be awarded to one of these three players: ${playerOneName}, ${playerTwoName} and ${playerThreeName}. Each player has ${STARTING_POKER_CHIPS} in their pot. We have an exciting game ahead of us. May the best player win!`)
   ```

## Adición dunha condición de fin

Unha partida de *Texas Hold'em* pode alargarse durante moitas rondas e normalmente finaliza cando un xogador ten todalas fichas e os demais xogadores perderon as súas. Debe agregar código para representar este estado. Nesta situación convén confiar nos  operadores e usar un tipo de datos booleano.

1. Agrega o código seguinte na parte superior do arquivo:

```javascript
let gameHasEnded = false;
```

Xa tes unha variable para representar o final do xogo. Máis adiante, deberás atopar unha maneira de volver a avaliar o valor desta variable e determinar si se debe deter o xogo e designar un gañador.

Engade o código seguinte para avaliar o estado do xogo:

```javascript
gameHasEnded = ((playerOnePoints + playerTwoPoints) == 0) || // three has won
               ((playerTwoPoints + playerThreePoints) == 0) ||  // one has won
               ((playerOnePoints + playerThreePoints) == 0);  // two has won 
console.log("Game has ended: ", gameHasEnded);
```

O código completo debe ser similar ao seguinte:

```javascript
const STARTING_POKER_CHIPS = 100; // points
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;
let gameHasEnded = false;

let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";

console.log(`Welcome to Texas Hold'em. The championship title will be awarded to one of these three players: ${playerOneName}, ${playerTwoName}, and ${playerThreeName}. Each player has ${STARTING_POKER_CHIPS} in their pot. We have an exciting game ahead of us. May the best player win!`);

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

playerOnePoints -= 50;
playerTwoPoints -=25;
playerThreePoints +=75; 

gameHasEnded = ((playerOnePoints + playerTwoPoints) == 0) || // three has one
               ((playerTwoPoints + playerThreePoints) == 0) ||  // one has won
               ((playerOnePoints + playerThreePoints) == 0);  // two has won 

console.log("Game has ended: ", gameHasEnded);
```

Para executar o xogo, escribe o código seguinte na terminal:

```javascript
node app.js
```

Debería aparecer a saída seguinte:

1. ```output
   Welcome to Texas Hold'em. The championship title will be awarded to one of these three players: Chloe, Jasmine, and Jen. Each player has 100 in their pot. We have an exciting game ahead of us. May the best player win!
   Game has ended: false
   ```

 :pencil2: Suxestión:

Proba a cambiar `playerOnePoints` e `playerTwoPoints` a `0` e volve a executar a aplicación. Hai alguna diferencia no resultado?

_______
