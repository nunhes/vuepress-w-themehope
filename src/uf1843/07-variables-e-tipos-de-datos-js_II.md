# Operacións de ensaio

Como propietario da xeadería e posto que ha adquirido algunas aptitudes de programación, ha decidido desarrollar un software para su negocio. Puede que un día convierta la heladería en unha cadena.

En primer lugar, quiere codificar todo lo que sabe sobre su negocio, como los distintos helados y los precios. A continuación, quiere simular interacciones de clientes. Por último, quiere calcular los beneficios y obtener más información útil.

## Crear negocio

En primer lugar, inicie su imperio de heladerías mediante la codificación de todos los sabores de los que dispone.

1. Cree un arquivo, llámelo *app.js* y agregue el siguiente contenido:

   

   ```javascript
   let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip", "Raspberry"];
   ```

2. A continuación, quiere clasificar los sabores por tipo y asignarle un precio a cada uno. Acaba por modificar el código de la siguiente manera:

   

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

   Ahora el elemento de la matriz ha pasado de cadenas a objetos. Ha realizado este cambio para anticiparse a los clientes que consultan los precios o los tipos de helado que tiene.

## Recepción de clientes

Quiere simular algunos escenarios de clientes en el código, para asegurarse de que la manera en que clasificó el inventario é lo suficientemente flexible.

1. Antes de la primera transacción de cliente, se da cuenta de que necesita unha matriz `transactions`. Empieza a pensar en qué información desea guardar en cada transacción. El precio é definitivamente algo que debe guardar y probablemente también lo que compran los clientes. Agrega el código siguiente:

   

   ```javascript
   // { scoops: [], total: }
   let transactions = []
   ```

2. A continuación, decide codificar transacciones mediante la adición del código siguiente:

   

   ```javascript
   transactions.push({ scoops: ["Chocolate", "Vanilla", "Mint Chip"], total: 5.5 })
   transactions.push({ scoops: ["Raspberry", "StrawBerry"], total: 2 })
   transactions.push({ scoops: ["Vanilla", "Vanilla"], total: 4 })
   ```

   Esto simula tres interacciones de clientes. A continuación, desea analizar el resultado.

## Analizar el negocio

Cuando se tiene un negocio, los beneficios son importantes, pero no son lo único que importa. ¿Qué é aquello que se vende tanto que necesita asegurarse de que haya existencias suficientes? También, ¿qué é lo que no se vende tanto, por lo que no é necesario tener tantas existencias?

1. Para calcular las ganancias, agregue el código siguiente:

   

   ```javascript
   const total = transactions.reduce((acc, curr) => acc + curr.total, 0);
   console.log(`You've made ${total} $ today`); // You've made 11.5 $ today
   ```

2. Para averiguar cuánto ha vendido de cada sabor, agregue el código siguiente:

   

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

   El código anterior repasa todas las transacciones. Para cada transacción, comprueba la cantidad de bolas de helado y actualiza un diccionario con la frecuencia de compra de cada sabor. Si estas ventas fueran reales, é probable que tuviera que tener más existencias de vainilla.

Enhorabuena, ha abierto unha heladería. Ya sabe cómo codificar sabores y transacciones mediante matrices y objetos. También ha aprendido a hacer un resumen de sus ganancias y a identificar la cantidad de helado que ha vendido de cada sabor.



# Resumen

Agora que conoce las matrices y bucles de JavaScript, puede empezar a pensar en formas de estructurar y organizar los datos en el código JavaScript.

Para practicar lo que ha aprendido, visite algunos de sus sitios web favoritos y tenga en cuenta los tipos de datos que usan. Por exemplo, considere la forma en que se agregan y quitan elementos de un carro de la compra en línea, o la forma como el equipo y las existencias de un jugador se agregan y quitan en un juego basado en explorador. Tenga en cuenta por qué y cómo se usan los bucles y matrices.

A medida que adquiera más conocimientos sobre matrices y bucles, empezará a tener en cuenta estos tipos de datos y métodos de almacenamiento en los sitios web que usa cada día.

 :pencil2: Suxestión:

Las matrices de JavaScript tienen muchos métodos asociados que son útiles para la manipulación de datos. [Lea estos métodos](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/) y pruebe algunos de ellos (como `push`, `pop`, `slice` y `splice`) en unha matriz que haya creado.









_______



# Suposto con variables

Como novo desarrollador de juegos, se le ha encargado la tarea de crear juegos recreativos para Internet. Su primera tarea consiste en  empezar a trabajar en el juego de cartas Texas Hold'em. En lugar de que  los jugadores apuesten dinero, usará puntos para representar las fichas  de póker.

## Modelado del estado del juego

Debe tomar lo que sabe de Texas Hold'em y crear variables para almacenar valores de cartas. Al hacerlo, debe pensar en los *valores de inicio* y en los valores que cambiarán con el tiempo.

Sabe que en el Texas Hold'em hay jugadores, cartas iniciales y  puntos. Intente montar unha estructura de juego básica mediante  variables.

1. Cree un arquivo denominado *app.js*:

   Bash

```bash
touch app.js
code .
```

Ahora debería tener un editor abierto en el shell.

Agregue el siguiente código al arquivo:

JavaScript

```javascript
let startingPokerChips = 100; // points
let players = 3;
let noOfStarterCards = 2;
```

Ahora tiene tres variables para representar el estado inicial del juego.

Cree variables que representen a jugadores concretos. Agregue el código siguiente:

JavaScript

```javascript
let playerOnePoints = startingPokerChips;
let playerTwoPoints = startingPokerChips;
let playerThreePoints = startingPokerChips;
```

Ha creado los puntos de partida de tres jugadores asignándoles la variable `startingPokerChips`, que contiene el valor `100`.

Muestre unha ronda del juego específica y cómo unha asignación  puede representar un estado del juego. Agregue las siguientes líneas al  código:

JavaScript

1. ```javascript
   playerOnePoints -= 50;
   playerTwoPoints -=25;
   playerThreePoints +=75; 
   ```

Ha simulado correctamente unha ronda del juego en la que el primer y  el segundo jugador han apostado 50 y 25 puntos respectivamente. Dado que el tercer jugador tiene unha mejor mano, este termina ganando la ronda.  El juego toma los puntos del primer y el segundo jugador y los agrega al bote del tercer jugador.

## Refactorización a constantes

En este punto, tiene algunas variables que representan partes del  juego de cartas. Recuerde que tiene constantes disponibles, que son  variables que no deben cambiar su valor. Veamos qué variables se podrían prestar para representarse mejor como constantes en el código fuente.

 :pencil2: Suxestión:

Dedique uno o dos minutos a pensar en qué variables no deben cambiar y qué variables podrían tener valores cambiantes. A continuación,  desplácese hacia abajo para ver la solución.

1. En la parte superior del arquivo, cambie el código siguiente:

   JavaScript

```javascript
let startingPokerChips = 100; // points
let players = 3;
let noOfStarterCards = 2;
```

... por este código:

JavaScript

```javascript
const STARTING_POKER_CHIPS = 100; // points
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;
```

Ha identificado correctamente qué variables son importantes para el  juego. También describen cómo se juega. Las fichas iniciales de un  jugador no cambiarán, incluso si el bote de un jugador determinado  cambia durante el juego. El número de jugadores también é constante, a  menos que imagine que podría recompilar el juego de forma que un jugador pueda unirse en cualquier momento. El número de cartas iniciales  siempre é dos en el Texas Hold'em. Como desarrollador de juegos, tiene  la capacidad de decidir en última instancia qué debe ser modificable y  qué debe ser constante.

 :pencil2: Suxestión:

Una excelente manera de pensar en las variables é convertir todas  las variables en constantes para empezar. A continuación, decida si el  valor de unha variable tendrá que cambiar en el futuro. En tal caso,  cámbiela de `const` a `let`.

Asegúrese de cambiar el código dependiente, para que el código se siga compilando:

JavaScript

1. ```javascript
   let playerOnePoints = STARTING_POKER_CHIPS;
   let playerTwoPoints = STARTING_POKER_CHIPS;
   let playerThreePoints = STARTING_POKER_CHIPS;
   ```

¡Enhorabuena! Ha empezado a trabajar en unha base de código de  JavaScript que implementa Texas Hold'em. Al hacerlo, ha determinado  cuáles son los valores de inicio, qué valores pueden cambiar y cómo  cambiar los valores.

------

## Siguiente unidad: Tipos de datos

# Ejercicio - Tipos de datos

​				 				Completado 			 			100 XP 		

- 3 minutos

Espacio aislado activado Tiempo restante:

​			

​			 	

Ha usado 1 de los 10 espacios aislados de hoy. Mañana habrá disponibles más espacios aislados.

Su empresa está satisfecha con el modelado anterior del Texas  Hold'em y desea ver que sigue trabajando en su implementación. Ya sabe  más sobre los tipos de datos, así que vamos a poner esos conocimientos  en práctica.

## Adición de tipos de datos

Para empezar, vamos a revisar el código siguiente que ha creado hasta ahora:

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

Tiene ciertos aspectos del juego representados como variables, pero  carece de otros aspectos, como saber si el juego ha finalizado. Además,  sería bueno que los jugadores tuvieran nombres.

1. Después de las tres constantes, agregue el siguiente código:

   JavaScript

```javascript
let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";
```

Ahora tiene tres variables para representar los nombres de los  jugadores. Vamos a agregar texto de introducción para que se note que é un juego. Después del código siguiente:

JavaScript

```javascript
let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;
```

... agregue código para representar el inicio del juego:

JavaScript

1. ```javascript
   console.log(`Welcome to Texas Hold'em. The championship title will be awarded to one of these three players: ${playerOneName}, ${playerTwoName} and ${playerThreeName}. Each player has ${STARTING_POKER_CHIPS} in their pot. We have an exciting game ahead of us. May the best player win!`)
   ```

## Adición de unha condición de fin

Una partida de Texas Hold'em puede alargarse durante muchas rondas y  normalmente finaliza cuando un jugador tiene todas las fichas y los  demás jugadores han perdido las suyas. Debe agregar código para  representar este estado. En esta situación conviene confiar en los  operadores y usar un tipo de datos booleano.

1. Agregue el código siguiente en la parte superior del arquivo:

   JavaScript

```javascript
let gameHasEnded = false;
```

Ya tiene unha variable para representar el final del juego. Más  adelante, deberá encontrar unha manera de volver a evaluar el valor de  esta variable y determinar si se debe detener el juego y designar un  ganador.

Agregue el código siguiente para evaluar el estado del juego:

JavaScript

```javascript
gameHasEnded = ((playerOnePoints + playerTwoPoints) == 0) || // three has won
               ((playerTwoPoints + playerThreePoints) == 0) ||  // one has won
               ((playerOnePoints + playerThreePoints) == 0);  // two has won 
console.log("Game has ended: ", gameHasEnded);
```

El código completo debe ser similar al siguiente:

JavaScript

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

Para ejecutar el juego, escriba el código siguiente en el terminal:

JavaScript

```javascript
node app.js
```

Debería aparecer la salida siguiente:

Resultados

1. ```output
   Welcome to Texas Hold'em. The championship title will be awarded to one of these three players: Chloe, Jasmine, and Jen. Each player has 100 in their pot. We have an exciting game ahead of us. May the best player win!
   Game has ended: false
   ```

 :pencil2: Suxestión:

Pruebe a cambiar `playerOnePoints` y `playerTwoPoints` a `0` y vuelva a ejecutar la aplicación. ¿Hay alguna diferencia en el resultado?

------

## Siguiente unidad: Resumen