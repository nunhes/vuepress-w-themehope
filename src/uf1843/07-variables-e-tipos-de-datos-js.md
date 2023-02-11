# Variables e tipos de datos de JavaScript

_*ref:*_ https://docs.microsoft.com/es-es/learn/modules/web-development-101-variables/



> Unha linguaxe de programación consta de moitos conceptos. Podes empregar eses conceptos para crear calquera cousa, desde unha pequena aplicación de liña de comandos ata un sistema empresarial a gran escala. Antes de crear unha aplicación, debes coñecer os aspectos básicos da linguaxe.

Un concepto fundamental importante é o das *variables*.  O código fonte pode ter desde 10 liñas ata moitos miles e pode presentarse nun único arquivo ou repartirse entre centos deles. As variables son referencias con nome que che axudan a controlar os valores importantes do programa.

Existen **varios tipos de valores**. É posible que queiras cambiar algúns e outros non. Dependendo de que tipo de valor se utilice, debe almacenarse como ese tipo.

Agora veremos cales son os tipos de variables e cales os seus tipos de  datos. Xunto có xeito no que se poden usar na programación con JavaScript.

Imos ver:

- Que son as variables e por que usalas.
- Cando usar constantes.
- Como almacenar valores como tipos diferentes pode aportar claridade no código.



# Introdución ás variables

Para comprender correctamente JavaScript (a linguaxe que proporciona interactividade en Internet), primeiro debes comprender os tipos de datos e variables da linguaxe e como se crean. E inda máis importante é comprender cando, onde e como usalos.

## Interactividade

Mediante o uso de variables, poderás realizar un **seguimento do estado**. Quizás necesites lembrar o valor da selección dun usuario ou gardar o resultado dun cálculo. Situacións como estas exixen o uso de variables.

Os tipos de datos melloran o uso de variables ao permitirche especificar a forma e o tamaño dos datos que necesitas almacenar. Os tipos de datos poden expresarse como números, cadeas ou incluso estruturas máis complexas.

Se xa aprendiches unha linguaxe de programación antes, é posible que observes algunhas similitudes entre dita linguaxe e JavaScript, se ben a sintaxe pode ser un pouco diferente. Se é a primeira vez que aprendes unha linguaxe de programación, non te preocupes. Imos ver os conceptos básicos de JavaScript que che axudarán a desempeñarte satisfactoriamente coma desenvolvedor web.

 :pencil2: ***Suxestión***: mira agora este [vídeo](https://youtu.be/JNIXfGiDWM8/) de introducción.



# Uso de variables para lembrar valores

Saber como usar correctamente variables e tipos de datos é esencial para escribir código en JavaScript. **As variables almacenan valores que se poden usar e cambiar** en todo o código, e **os tipos de datos axudan a describir que tipo de datos se almacena nesas variables**.

## Variables

Imaxina que tes un valor no código que queres lembrar para un uso futuro. Ao almacenar o valor, podes facer referencia a el máis adiante no código.

Podes crear e declarar unha variable mediante a seguinte sintaxe: `[keyword] [name]`. Coma neste exemplo dunha declaración de variable:

```js
var aVariable;
```

A palabra clave `var` indica que se desexa declarar unha variable, e `aVariable` é o nome da variable. O nome dunha variable é elixible e debe reflectir para que se usa.

## Palabra clave para traballar con variables

A palabra clave `let` foi introducida no estándar de JavaScript ECMAScript 6 (ES6). O uso de `let` proporciona o *ámbito de bloque* das variables. Recomendase usar `let` en lugar de `var` para administrar mellor o ámbito da aplicación.

JavaScript usa os diferentes tipos de ámbito, como o ámbito global e o ámbito de función, para determinar que variables están dispoñibles en que partes do código. Por exemplo, unha variable global está dispoñible dentro dunha función porque pertence ao ámbito global (o ámbito "externo"). As variables designadas coa  palabra clave `var` teñen o seu ámbito (os seus valores son visibles) dentro do corpo da función e as variables `let` teñen como ámbito o seu bloque de inclusión entre chaves. Isto significa que se usas `var`  nun bucle `for`, será visible fora do bucle `for`, o que podería provocar resultados inesperados. O uso de `let` é unha mellor opción porque só está dispoñible no bloque de inclusión (é dicir, o bucle `for`), polo que a súa dispoñibilidade podería ser máis previsible.

Para declarar unha variable mediante `let`, usa a sintaxe seguinte:

```javascript
let myVariable;
```

`myVariable` foi declarada agora mediante a palabra clave `let`. Actualmente non ten un valor, pero podes darlle un.

### Asignación dun valor

Para almacenar un valor nunha variable, usa o *operador de asignación* (`=`) seguido do valor esperado:

```javascript
myVariable = 123;
```

 :pencil2: ***Suxestión***: O uso do operador de asignación (`=`) neste exemplo establece un valor nunha variable. Difire dunha comparación, que usa dous ou tres operadores como `==` ou `===`.

Agora a `myVariable` *asignóuselle* o valor `123`.

### Inicialización explícita

Unha *inicialización* difire dunha asignación en que se declara o valor e se lle asigna un valor. Este é un exemplo dunha inicialización:

```javascript
let myVariable = 123;
```

Unha inicialización explícita se usa no lugar dunha asignación se se desexa que unha variable conteña un *valor de inicio*. Imaxina, por exemplo, que queres que todos os xogadores dun xogo de cartas teñan fichas de póker por valor de 100 puntos antes de empezar unha partida. Para representar ese estado, poderías declaralo da seguinte forma:

```javascript
let pokerChips = 100;
```

### Cambio de variables

É posible que queiras almacenar un valor nunha variable temporalmente. Un exemplo é a suma dun cálculo.

O código seguinte mostra como se usa o operador de asignación (`=`) e como se *asigna* un valor no lado dereito do operador:

```javascript
myVariable = 321;
```

 :pencil2: ***Suxestión***: Próbao para practicar. Podes escribir código JavaScript directamente no explorador. Abre unha xanela do explorador e vai a **Ferramentas de desenvolvemento**. Na consola, atoparás unha solicitude `>`. Escribe `let myVariable = 123` e, a continuación, `myVariable`. Que sucede?

\*\*\*

As veces non queres que se cambien os valores dunha variable. Esta situación pode acontecer cando se confía nunha constante matemática, coma por exemplo no valor de pi. Para satisfacer esta necesidade, JavaScript permite crear *constantes*.

## Constantes

A declaración e a inicialización dunha constante seguen os mesmos conceptos que unha variable, salvo que usa a palabra clave `const`:

```javascript
const MY_VARIABLE = 123;
```

 :pencil2: ***Suxestión***: Aínda que podes asignarlle a unha variable constante o nome que queiras, recoméndase que poñas todas as letras en maiúsculas.

As constantes son similares ás variables, con dúas excepcións:

- *Deben ter un valor*. As constantes se deben inicializar ou se producirá un erro ao executar o código.
- *A referencia non se pode cambiar*. Se a referencia dunha constante cambia despois de inicializarse, se producirá un erro ao executar o código.

Vexamos algúns exemplos:

- A seguinte sintaxe de código para un valor simple *non* está permitida:

  ```javascript
  const PI = 3;
  PI = 4; // non permitido
  ```

- A sintaxe seguinte ten unha referencia de obxecto protexido e *no*n está permitida:

  ```javascript
  const obj = { a: 3 };
  obj = { b: 5 } // non permitido
  ```

- A sintaxe seguinte ten un valor de obxecto que non está protexido. *Está* permitida porque vai a cambiar o valor do obxecto, pero non a propia referencia.

  ```javascript
  const obj = { a: 3 };
  obj.a = 5;  // permitido
  ```

:triangular_flag_on_post: **Nota:** A presencia de `const` significa que a referencia non se pode reasignar. Sen embargo, o valor non é *inmutable* e pode cambiar, especialmente se se trata dunha construcción complexa como un obxecto.



# Tipos de datos

As variables poden almacenar moitos tipos diferentes de valores, como números e texto. Estes valores se denominan *tipos de datos*.

Os tipos de datos son unha parte importante do desenvolvemento de software porque os desenvolvedores úsanos para tomar decisións sobre como se debe escribir o código e como debe executarse o software. Algúns tipos de datos teñen características únicas que axudan a transformar ou extraer información adicional dun valor.

Os tipos de datos tamén se denominan *primitivas de datos de JavaScript*, xa que son os tipos de datos de nivel máis baixo que proporciona a linguaxe. Hai **seis tipos de datos primitivos**: `string`, `number`, `bigint`, `boolean`, `undefined` e `symbol`.

 :pencil2: ***Suxestión***: Dedica un minuto a visualizar o que podería representar cada unha destes tipos primitivos. Que é unha cebra? E se se executa `0`? E se se executa `true`?

## Números

Na sección anterior, o valor de `myVariable` era un tipo de datos `number`:

```
let myVariable = 123;
```

As variables poden almacenar todos os tipos de números, incluídos decimais ou números negativos. Os números tamén se poden usar con *operadores aritméticos*.

Estes son algúns tipos de operadores que podes usar ao realizar funcións aritméticas:

| Símbolo | Descrición                                              | Exemplo                          |
| :------ | :------------------------------------------------------ | :------------------------------- |
| `+`     | **Suma**: calcúla a suma de dous números.               | `1 + 2 //expected answer is 3`   |
| `-`     | **Resta**: calcúla a diferencia de dous números.        | `1 - 2 //expected answer is -1`  |
| `*`     | **Multiplicación**: calcula o produto de dous números.  | `1 * 2 //expected answer is 2`   |
| `/`     | **División**: calcúla o cociente de dous números.       | `1 / 2 //expected answer is 0.5` |
| `%`     | **Resto**: calcúla o resto da división de dous números. | `1 % 2 //expected answer is 1`   |

 :pencil2: ***Suxestión***: Proba unha operación aritmética na consola do explorador. Que che parecen os resultados?

## Cadeas - *String*

As cadeas son conxuntos de caracteres que residen entre comiñas simples ou dobres.

- `'This is a string'`
- `"This is also a string"`
- `let myString = 'This is a string value stored in a variable';`

 :pencil2: ***Suxestión***: Lembra usar comiñas ao escribir unha cadea ou JavaScript asumirá que é un nome de variable.

As cadeas son textuais e é necesario aplicarlles formato ocasionalmente.

Para *concatenar* dúas ou máis cadeas ou unilas, emprega o operador `+`:

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

Por que `1 + 1 = 2` en JavaScript, pero `'1' + '1' = 11`? Pénsao. E que pasa con `'1' + 1`?

Os *literais de modelo* son outra maneira de dar formato ás cadeas, salvo que, en lugar de comiñas, usan acentos graves. Todo o que no sexa texto sen formato debe colocarse dentro de marcadores de posición `${ }`, incluídas as variables que poden ser cadeas. Este é un exemplo:

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Podes empregar calquera método para aplicar o formato que queiras, pero os literais de modelo respectarán todos os espazos e saltos de líña.

 :pencil2: ***Suxestión***: Dedica un momento a pensar nos casos de uso de diferentes tipos de cadea. Cando usarías un literal de modelo en lugar dunha cadea sen formato?

## Valores booleanos

Os valores booleanos só poden ser de dous tipos: `true` ou `false`. Os valores booleanos axudan a tomar decisións sobre que liñas de código se deben executar cando se cumpran certas condicións. En moitos casos, os operadores axudan a establecer o valor dun valor booleano. A miúdo observarás que as variables se inicializan cun operador ou que os seus valores se actualizan cun operador. Este é un exemplo:

- `let myTrueBool = true`
- `let myFalseBool = false`

Unha variable se pode considerar "verdadeira" se se evalúa como un valor booleano cuxo valor é `true`. En JavaScript, [todos os valores son verdadeiros a menos que se definan como "falsos"](https://developer.mozilla.org/docs/Glossary/Truthy/).

 :pencil2: ***Suxestión***: Explora os problemas comúns de JavaScript. Lembra que podes escribir JavaScript directamente no explorador. Abre unha xanela do explorador e vai a **Ferramentas de desenvolvemento**. Na consola, atoparás unha solicitude. Este código se resolve como `false`: `let age = 1`; `let Age = 2`; `age == Age`. Por que crees que é así e que outros problemas comúns pode atopar?



***



# Creación de código modular mediante funcións en JavaScript

**As funcións son os bloques de creación de calquera aplicación que se vaia a crear**. Coas funcións podes crear seccións de código con nome e reutilizables, para que sexa máis lexible e fácil de manter. Imos a explorar os conceptos básicos das funcións.

## Obxectivos de aprendizaxe

Neste módulo, aprenderás:

- Como escribir unha función básica.
- Que parámetros se proporcionan e como usalos.
- Como devolver valores dunha función.
- Como usar funcións anónimas.

## Introdución

Cando pensamos en escribir código, sempre queremos asegurarnos de que o código sexa lexible. Aínda que pareza contraditorio, **o código se lee moitas máis veces das que se escribe**.

A *función* é unha ferramenta clave no cadro de ferramentas dun desenvolvedor para garantir que o código se poida manter. Basicamente, unha función é un bloque de código que se pode executar a petición. Este código pode realizar unha tarefa, como ir a outra parte dun sitio web ou calcular un valor, como a suma de dous números.

Imos agora a ver:

- Como escribir unha función básica.
- Que parámetros se proporcionan e como usalos.
- Como devolver valores dunha función.
- Como usar funcións anónimas.

# Información xeral sobre as funcións

As funcións son bloques de creación clave para escribir código. Una función é unha colección de liñas de código reutilizable que fai que algo suceda dentro do programa.

As funcións son perfectas para escenarios nos que se necesita realizar a mesma tarefa varias veces. En lugar de duplicar a lóxica en varias localizacións, o que dificultaría a actualización do código máis adiante, podes centralizalo nunha úneca localización. Deste xeito, podes chamalo sempre que se necesite que a operación se realice de novo. Incluso podes chamar a funcións desde outras funcións.

Igual de importante é a posibilidade de asignarlle un nome a cada función. Inda que asignarlle un nome a unha función poida parecer trivial, o nome proporciona unha forma rápida de documentar unha sección de código. Pódese pensar na nomenclatura coma na etiqueta dun botón. Por exemplo, si seleccionas o botón "Cancelar temporizador", o relo deixará de correr.

## Creación e chamada a unha función

Unha función toma algunha entrada e logo devolve unha saída que transforma de algún modo a entrada. Por exemplo, unha función de suma pode tomar dous números enteiros e devolver a suma dos seus valores.

**As funcións están formadas por tres compoñentes diferentes**:

- Un *corpo de función*: un bloque de código que se executa cando se chama á función.
- Un *parámetro*: outro nome para a entrada que se lle pasa a unha función.
- E por último, un *valor devolto* ou saída da función.

A sintaxe dunha función vaise semellar ao código seguinte:

```javascript
function nameOfFunction(parameter) { // function definition with some input
// function body
}
```

Os parámetros e os valores devoltos son opcionais cando se escribe unha función. Para empezar, comprobemos algunhas funcións básicas que non toman ningunha entrada nin devolven valor ningún. Se queres crear unha función para mostrar un saúdo na [consola](https://developer.mozilla.org/docs/Web/API/console) de depuración do editor de código, podería ter este aspecto:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

A función se denomina `displayGreeting`. Ao executar a función, o texto "Hello, world!" se imprime na consola.

Sempre que queiras chamar á función ou invocala, usa o nome da función seguido dun par de parénteses (`()`). Merece a pena ter en conta que podes definir a función antes ou despois de que decidas chamala. En calquera caso, JavaScript a atopará por ti, sempre e cando se atope dentro do ámbito dende onde se chama.

```javascript
// chamando á función
displayGreeting();
```

:triangular_flag_on_post: **Nota**: Hai un tipo especial de función coñecido como *método*, que xa estiveches usando. De feito, miraches un método na demostración anterior cando usaches `console.log`. O que fai que un método sexa diferente dunha función é que está asociado a un obxecto (*console*, no exemplo); en cambio, unha función é flotante libre. Oirás que moitos desenvolvedores usan estes termos indistintamente.

## Procedementos recomendados

Ao crear funcións, ten en conta algúns procedementos recomendados:

- Usa nomes descritivos que indiquen o que pretenden facer as funcións. Por exemplo, o nome `displayGreeting` deixa claro que o propósito da función é mostrar un saúdo. Un nome como `greet`, para unha función que realiza esa mesma tarefa, é un pouco ambiguo. Podería mostrar un saúdo, pero tamén podería realizar unha operación diferente.
- Use unha mistura de maiúsculas e minúsculas para combinar palabras. Para escribir combinando maiúsculas e minúsculas, mantén a primeira palabra da variable ou función en minúsculas e escribe con maiúscula inicial cada palabra posterior. Dado que os nomes de función e variable non poden conter espazos, a combinación de maiúsculas e minúsculas facilita a lectura do código. Por exemplo, `displayGreeting` é máis fácil de ler que `displaygreeting`.
- Mantén as funcións centradas nunha tarefa específica. Isto non só facilita a reutilización dunha función nun programa, senón que tamén facilita a depuración do código. Se tes unha incidencia cunha función que non realiza a tarefa que considerabas que faría, saberás que o problema está dentro desa función.
- Usa texto comentado para anotar o código e describir o que fan as funcións. Para mellorar a lectura do código, inclúe no comentario unha breve descrición da tarefa de cada función. Para crear comentarios, escribe unha barra diagonal dobre (`//`), seguida da descrición. O comentario finaliza cando se inicia unha nova líña.

# Parámetros de función

Para que unha función sexa máis reutilizable, a miúdo quererás pasarlle información. Este tipo de entrada de información, a información en si, se denomina *parámetro*. Un parámetro, a veces tamén denominado "argumento", é información adicional que se envía a unha función.

Supoñamos que queres cambiar a función `displayGreeting` para poder saudar a unha persoa específica, en vez de imprimir só "Hello, world!" cada vez que se chama a esa función. Podes usar un parámetro para especificar o nome da persoa.

Os parámetros se enumeran na definición da función e se inclúen entre parénteses (`()`). Podes ter varios parámetros separados por comas, como se amosa aquí:

```javascript
function name(param, param2, param3) {

}
```

Podes actualizar a función `displayGreeting` para que tome o nome dunha persoa como entrada e imprimir unha mensaxe personalizada na consola, como se mostra... aquí:

```javascript
// function with a parameter called name
function displayGreeting(name) { 
    // creating a new local variable that inserts the name into a string   
    const message = `Hello, ${name}!`; 
    // printing the variable to the console
    console.log(message);
}
```

Se queres chamar á función e pasarlle o parámetro, é posible especificalo entre parénteses da seguinte forma:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Valores predeterminados

Podes facer que a función sexa inda máis flexible, engadindo máis parámetros. E que acontece se non queres requirir que se especifiquen tódolos valores? Se seguimos có exemplo do saúdo, podes manter `name`, segundo sexa necesario (debes saber a quen estás saudando), pero queres permitir que o saúdo se personalice. Se alguén non quere personalizalo, pode proporcionar un valor predeterminado no seu lugar. Para iso, establece o valor da mesma maneira que estableces un valor para unha variable: `parameterName = 'defaultValue'`. Por exemplo:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Ao chamar á función, podes decidir se estableces un valor para o saúdo, como aquí:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

------

# Valores devoltos

Ata este punto, as funcións que levas creado teñen saída na [consola](https://developer.mozilla.org/docs/Web/API/console). Isto pode ser exactamente o que buscas, especialmente cando se crean funcións que chaman a outros servizos. E que ocorre se queres crear unha función auxiliar para realizar un cálculo e despois proporcionar un valor que poida usarse noutro lugar?

Para iso, usa un *valor devolto*. A función devolve un valor devolto e pode almacenalo nunha variable igual que pode almacenar un valor literal, como unha cadea o un número.

Se unha función debe devolver algo, se usa a palabra clave `return`, seguida normalmente dun valor ou unha referencia ao que se devolve. Sin embargo, tamén pode usar `return`  sen máis para saír dunha función.

Este é un exemplo dunha instrución `return` que devolve un valor:

```javascript
return myVariable;
```

Aquí se mostra como se usaría `return` por si só:

```javascript
return;
```

Segundo o exemplo anterior, podería escribir unha función para crear unha mensaxe de saúdo e logo devolver o valor ao autor da chamada. Ter en conta que a palabra clave `return`  detén a execución da función e devolve o valor especificado, se o hai. Polo tanto, normalmente quererás usar `return` ao final da función, da seguinte maneira:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

:triangular_flag_on_post: **Nota**: Non se pode acceder ás variables que se definan dentro dunha función desde ningún lugar fora da función. Estas variables se denominan *variables locais*. Fora da función, se considera que están *fora do ámbito*.

Cando se chama a esta función, se almacena o valor nunha variable. Isto faise da mesma maneira que se establecería unha variable nun valor estático (por exemplo, `let name = 'Christopher'`), da seguinte maneira:



```javascript
let greetingMessage = createGreetingMessage('Christopher');
```

Os valores devoltos axudan a demostrar outra das razóns polas que as funcións son unha parte tan importante de JavaScript. Podes reutilizar a mesma función con argumentos diferentes para xerar varios valores devoltos.



# Exercicio: Crear unha función

Ao escribir código estarás creando funcións con frecuencia. Neste exemplo práctico imos crear unha función para mostrar un nome nunha páxina web. A función tomará un parámetro, o nome da persoa á que desexas saudar e despois devolverá a mensaxe. Logo chamará a esta función para mostrar a mensaxe.

:triangular_flag_on_post: **Nota**: Atoparás o código completo deste exemplo na parte inferior da páxina.

## Creación dunha páxina de exemplo

Empeza por crear unha nova páxina en Visual Studio Code.

1. Abre unha terminal ou ventana de comandos de Visual Studio Code.

2. Para crear un novo directorio e cambiar a este, executa un dos seguintes comandos:

   ```bash
   # Windows
   md functions && cd functions
   
   # macOS or Linux
   mkdir functions && cd functions
   ```
   
3. Para abrir o novo directorio en Visual Studio Code, executa o seguinte comando:

   ```bash
   code .
   ```
   
4. No panel **Explorador,** mantén punteiro sobre **funcións** e logo selecciona ó icono **Novo arquivo**.

   ![Captura de pantalla del panel del Explorador con el icono Nuevo arquivo resaltado](https://docs.microsoft.com/es-es/learn/modules/web-development-101-functions/media/functions-create-file.png) .

5. Asignalle o nome *index.html* ao novo arquivo e, logo, abreo no editor.

## Agregar o código para amosar a mensaxe

Agora podes agregar o código que servirá para amosar a mensaxe.

1. No arquivo *index.html* crea o núcleo do arquivo HTML, pegando o seguinte código HTML:

```html
<!DOCTYPE html>
<html>
   <head>
       <title>Message</title>
   </head>
   <body>
       <script>
           // TODO: Add hello code

           // TODO: Add setTimeout code
       
       </script>
   </body>
   </html>
```

:triangular_flag_on_post: **Nota**: Os comentarios `TODO` dentro da etiqueta de script son marcadores para agregar código tanto neste exemplo coma nun próximo.

2. No arquivo *index.html*, debaixo da liña comentada `//TODO: Add hello code`, crea unha función, agregando o seguinte código.

   ```javascript
   // TODO: Add hello code
   function getMessage(name) {
       return 'Hello, ' + name + '...';
   }
   ```

   A función toma un parámetro, denominado `name`, e devolve unha cadea que lle di "Ola" ao nome da persoa que proporciona a entrada.

3. Debaixo da chave de peche (`}`) no código que acabas de agregar, engade o código seguinte para obter a mensaxe e  `document.write` para mostralo na páxina web.

   ```javascript
   const message = getMessage('Ornella');
   document.write(message);
   ```
   
4. Garda o arquivo seleccionando **Archivo** > **Guardar**.

## Visualización da páxina

Xa creaches a páxina. Vexamos como funciona:

1. En Visual Studio Code, abre a **Paleta de comandos**, premendo Ctrl+Mayús+P (Windows) ou Cmd+Mayús+P nun equipo Mac.

2. Na **Paleta de comandos**, abra [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), escribindo **Live Server** e logo seleccionando **Live Server: Abrir con Live Server**.

   ![Captura de pantalla da Paleta de comandos con &quot;Live Server: Abrir con Live Server&quot; resaltado.](https://docs.microsoft.com/es-es/learn/modules/web-development-101-functions/media/launch-live-server.png)

   Live Server se abre no navegador e amósase a mensaxe mostrando a mensaxe "Ola, Ornella...".

   ![Captura de pantalla da ventana del explorador, en la que se muestra el mensaje &quot;Hola, Ornella...&quot;.](https://docs.microsoft.com/es-es/learn/modules/web-development-101-functions/media/hello-ornella.png)

Agora que xa creaches e chamaches a unha función para mostrar unha mensaxe. Podes intentar cambiar o nome e gardar o arquivo de novo para ver os resultados actualizados.

:pill: **Importante:** Manter Visual Studio Code e o explorador abertos para usalos na próxima unidade.

## Código completo

```html
<!DOCTYPE html>
<html>
<head>
    <title>Message</title>
</head>
<body>
    <script>
        // TODO: Add hello code
        function getMessage(name) {
            return 'Hello, ' + name + '...';
        }
        const message = getMessage('Ornella');
        document.write(message);

        // TODO: Add setTimeout code

    </script>
</body>
</html>
```

# funcións anónimas

Como ves, podes chamar a unha función a petición mediante o seu nome e pasando os parámetros axeitados. Pero, as veces, é imposible que queira permitir que outro proceso execute as funcións que creaches.

Imaxina a creación dunha páxina web con varios temporizadores. Cando finalice un temporizador, quererás executar código para mostrar unha mensaxe. O problema é que sabes que o temporizador expirará, pero, dado que a lonxitude do temporizador pode cambiar, non sabes exactamente *cando* expirará. Polo tanto, non sabes exactamente *cando* quere que se execute o código. Para admitir este tipo de escenario, podes usar unha *devolución de chamada*.

## Introdución ás devolucións de chamada

Basicamente, unha devolución de chamada é unha maneira de pasar unha función a outra función como parámetro. Este parámetro se comporta da mesma maneira que calquera outro parámetro, como unha cadea ou un número, salvo que se pode chamar por el porque é unha función.

Imaxina que un amigo teu vai á tenda e che pide que lle traias dous xeados, e o que é máis importante, que llos traia antes de que se derretan.

Na programación, esta situación se pode representar mediante unha devolución de chamada. Décheslle a teu amigo un conxunto de instrucións (vai á tenda, pide xeados). A devolución de chamada aquí sería unha instrución adicional para traelos antes de que se derretan.

É posible que teñas seleccionado outro compoñente clave sobre o tempo de execución: sabe que o seu amigo completará a tarefa, pero non sabe necesariamente *cando*.

As devolucións de chamada se usan con frecuencia nunha variedade de marcos e librerías para indicar o código que desexas executar cando algo sucede ou finaliza. Usarás unha devolución de chamada para indicar o que debe ocorrer cando, por exemplo, un usuario selecciona un botón, finaliza unha operación de execución longa ou expira un temporizador.

## Utilización dunha devolución de chamada

Unha devolución de chamada é unha función normal e podes creala como o farías con calquera función que teñas escrito no pasado. No exemplo `displayDone` seguinte, observarás que é unha función normal sen parámetros.

```javascript
function displayDone() {
    console.log('Done!');
}
```



Podes pasala a unha función, que acepta unha devolución de chamada como `setTimeout`. A devolución de chamada `setTimeout` é unha función integrada que permite crear un temporizador. Cando finaliza o temporizador, chama á función que se pasa como primeiro parámetro. O segundo parámetro indica o número de microsegundos que se esperarán ata que chame á función.

Se desexas establecer un tempo de espera de 3 segundos e facer que o código amose "Listo" ao rematar de executarse, poderías usar `setTimeout` da seguinte forma:



```javascript
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

 ?>**Importante**: Observa que `displayDone` non vai seguido dun par vacío de parénteses (`()`) cando se pasa coma un parámetro a `setTimeout`. Se escribes `setTimeout(displayDone(), 3000)`, estás indicando a JavaScript que execute `displayDone` inmediatamente. Dado que desexas pasar a función a `setTimeout` para chamar `setTimeout` cando transcorra o temporizador, só se usa `displayDone`.

## funcións anónimas

Inda que o código anterior é válido, este código pode crear o que algúns desenvolvedores chaman a "contaminación do espazo de nomes". É dicir, cando escribes código con numerosas variables, funcións e outras entidades con nomes, pode resultar confuso coñecer o propósito de cada unha delas e, as veces, pode que te quedes sen nomes axeitados. Neste exemplo, se o único lugar `displayDone` que se usará é con `setTimeout`, non é necesario darlle un nome. Podes crear unha *función anónima*.

Unha función anónima é unha función sen nome. As funcións anónimas se comportan da mesma maneira que as funcións normais e son a forma en que os desenvolvedores normalmente establecen as devolucións de chamada.

Podes crear unha función anónima coa mesma sintaxe que usarías para crear unha función normal, salvo que se omite o nome. Por exemplo:



```javascript
setTimeout(
    function() { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)
```

Este código realiza exactamente a mesma tarefa que o código anterior coa función `displayDone`. A diferencia clave é que se crea a función inserida (é dicir, dentro da chamada a `setTimeout`), sen un nome. Ao facelo así, o código se limpa un pouco.

## funcións de frecha

As funcións de *frecha* ou as de *frecha grosa*, son unha forma lixeiramente diferente de crear funcións anónimas. As funcións de frecha usan o operador `=>` para indicar o inicio do corpo da función. Podes volver a escribir o exemplo de función anónima anterior mediante a sintaxe de frechas grosas:



```javascript
setTimeout(
    () => { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)
```

Este código fai exactamente o mesmo que antes. A única diferencia é o uso do operador `=>`. Verás que moitos desenvolvedores prefiren a sintaxe concisa que proporcionan as funcións de frecha.

# Exercicio: Creación dunha función anónima

Neste exercicio usarás `setTimer` cunha función anónima para amosar unha mensaxe nunha páxina web. Crearás código que amosa a mensaxe despois dun retardo de 2 segundos.

Usarás o mesmo arquivo que usaches no exercicio anterior para completar este.

:triangular_flag_on_post: **Nota**: Pode atopar o código completo deste exemplo na parte inferior da páxina.

## Agregar o código para amosar a mensaxe

Agora agregarás o código para amosar a mensaxe, que terá un retardo de 2 segundos.

1. En Visual Studio Code, abre o arquivo *index.html*.

2. Debaixo da liña comentada `// TODO: Add setTimeout code`, agrega o código seguinte:

   

   ```javascript
   setTimeout(
       () => { document.write('...Hello again!')},
       2000
   );
   ```

3. Garda o arquivo seleccionando **Arquivo** > **Gardar**. LiveServer actualiza automaticamente a páxina ao gardar o arquivo.

## Visualización da páxina

Vexamos os resultados.

1. Volve á xanela do explorador.

   A mensaxe "...Hello again!" é posible que xa se amose, porque LiveServer xa terá actualizado a xanela.

2. Actualiza a xanela do explorador. Observa que se amosa a mensaxe orixinal e, despois de dous segundos, se substitúa por "... Hello again!". "Ola mundo".

   ![Captura de pantalla del explorador, en la que se muestra el mensaje &quot;... ¡Hola de nuevo!&quot;.](https://docs.microsoft.com/es-es/learn/modules/web-development-101-functions/media/hello-again.png)

Agora xa usaches unha función anónima para que apareza unha mensaxe despois dun retardo.

## Código completo

```html
<!DOCTYPE html>
<html>
<head>
    <title>Message</title>
</head>
<body>
    <script>
        // TODO: Add hello code
        function getMessage(name) {
            return 'Hello, ' + name + '...';
        }
        const message = getMessage('Ornella');
        document.write(message);

        // TODO: Add setTimeout code
        setTimeout(
            () => { document.write('...Hello again!')},
            2000
        );
    </script>
</body>
</html>
```

# Resumo

Ata agora exploraches como crear funcións en JavaScript. **Unha función é unha abstracción** excelente que se pode usar cando se necesita realizar a mesma tarefa varias veces e se quere evitar ter que duplicar o código. Tamén aprendiches a diferenza entre unha función e un método. Estes dous tipos son funcións, pero unha función está flotando libre e un método se asenta nun obxecto.

Despois, exploraches parámetros e variables como elementos importantes que lle permiten ás funcións traballar con datos.

Seguidamente, aprendiches sobre as variables de devolución. Un valor devolto son os datos que abandonan a función. Calquera invocador dunha función pode aproveitar o valor devolto ao asignalo a unha variable.

Por último, aprendiches sobre as funcións anónimas. Unha función anónima non ten un nome, pero é unha función que se pode pasar. Se usa normalmente nun contexto onde é necesario realizar unha tarefa que é asincrónica e finalizará nalgún momento no futuro. Os exemplos poden ser un tempo de espera ou a captura de datos a través da rede. Unha vez que finaliza a tarefa, se invoca a función anónima.

*****************

# Toma de decisións con JavaScript

Nesta lección, se tratan os conceptos básicos da toma de decisións `if/else` de JavaScript. Aprenderás como comparar variables e o uso de valores booleanos, e o uso de instrucións `if/else`  te permiten tomar decisións no código.

## Obxectivos de aprendizaxe

Agora, imos a:

- Revisar os valores booleanos.
- Aprender sobre os operadores de comparación.
- Explorar como se usan `if ` e  `else` en JavaScript.
- Descubrir como formar condiciones e tomar decisións con operadores lóxicos.

# Introdución

Algúns programas que se escriben se executan de arriba a abaixo. A miúdo, terás aplicacións cuxas rutas no código están determinadas polas diferentes condicións que configures.

Supoñamos que tes un programa para crear un arquivo de copia de seguridade de todos os arquivos dun directorio. Se o arquivo de copia de seguridade xa existe, non desexarás volver a crealo porque podería levar moito tempo. Este escenario é un exemplo no que se desexa poder expresar a lóxica condicional para que o código se execute de forma diferente en función de si se cumpre unha condición ou non.

Imos agora a traballar cos diferentes operadores que podes usar para expresar lóxica para crear varias rutas nos programas.

## Obxectivos da aprendizaxe

En este módulo, aprenderá a:

- Revisar los valores booleanos.
- Aprender sobre los operadores de comparación.
- Explorar como se usan ``if`` e ``else`` en JavaScript.
- Descubrir como formar condicións e tomar decisións con operadores lóxicos.

# Operadores lóxicos

As decisións poden requirir máis dunha comparación e se poden combinar con operadores lóxicos para xerar un valor booleano.

## Operadores lóxicos e valores booleanos

Hai operadores específicos que nos permiten conectar varias instrucións booleanas. O resultado é unha instrución máis complexa que en calquera caso se avalía como `true` ou `false`. Pode usar o seguinte conxunto de operadores para construír estas comparacións máis complexas:

| Símbolo | Descrición                                                   | Exemplo                                                      |
| :------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `&&`    | **AND lóxico**: compara dúas expresións booleanas. Devolve true *só* si ambos lados son verdadeiros - true. | `(5 > 6) && (5 < 6 ) //One side is false, other is true. Returns false` |
| `||`    | **OR lóxico**: compara dúas expresións booleanas. Devolve true se alo menos un lado é verdadeiro -true. | `(5 > 6) || (5 < 6) //One side is false, other is true. Returns true` |
| `!`     | **NOT lóxico**: devolve o valor oposto dunha expresión booleana. | `!(5 > 6) // 5 is not greater than 6, but "!" will return true` |

## Condicións e decisións con operadores lóxicos

Podes usar estes operadores complexos con ambas asignacións, pero tamén coas cláusulas `if` e `else`.

### Nas asignacións

Como parte da asignación dun valor a unha variable, podes usar un operador OR (`||`).

```javascript
let isHoliday = true;
let isMember = true;
let hasDiscount = isHoliday || isMember;
```

Co código anterior, se expresa se un cliente pode ter un desconto ou non. Só é necesario que unha das variables, `isMember` ou `hasDiscount`, teña un valor verdadeiro para que se asigne `true` á variable `hasDiscount`.

### En `if...else`

Tamén podes usar este tipo de operador lóxico nunha instrucción `if/else`. No exemplo de código que segue, dáse unha situación na que hai dous portátiles, un con desconto e outro vendido a prezo completo. Mediante o uso dun operador `||`, podes construír unha cláusula `if` de aspecto máis complexo.



```javascript
let currentMoney= 800;
let laptopPrice = 1000;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}
else {
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}
```

 :pencil2: ***Suxestión***: Lembras que falamos sobre aprender a ler código? Que nos di o código? Vas poder obter un equipo portátil novo? Podes probar o código por exemplo en [JSBin](https://jsbin.com) e ver o resultado.



## Operador de negación

Acabas de ver como se pode usar unha instrucción `if...else` para crear lóxica condicional. Todo o que vai a unha instrucción `if` se debe avaliar como `true` ou `false`. Mediante o operador `!`, podes *negar* a expresión. E terías algo similar ao que segue:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

## Expresións ternarias

O uso de `if...else` non é a única maneira de expresar a lóxica de decisión. Tamén podes usar algo chamado operador *ternario*. A sintaxe ten un aspecto similar ao seguinte:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Este é un exemplo máis tanxible.

```javascript
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
```

O código indica que, ou se lee como:

*Si `firstNumber` é maior que `secondNumber`, se asigna `firstNumber` a `biggestNumber`; do contrario, se asigna `secondNumber`.*

 :pencil2: ***Suxestión***: Tómate un minuto para ler este código unhas veces. Comprendes como funcionan estes operadores?

A expresión ternaria é unha forma compacta de escribir o seguinte código:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

 :pencil2: ***Suxestión***: Tómate un momento para reflexionar. Cal dos dous enfoques, expresións ternarias ou `if/else`, foi más fácil de entender?



# Proba con: If...else

Para completar este módulo, podes seguir a lección en [Microsoft Learn]( https://docs.microsoft.com/es-es/learn/modules/web-development-101-variables/). Desde aí podes activar un espazo illado en Azure para completar o exercicio. Un [espazo illado](https://docs.microsoft.com/en-us/learn/support/faq?pivots=sandbox) dáche acceso a recursos gratuítos. A subscrición persoal non se che cobrará. O espazo illado só se pode usar para realizar os cursos de Microsoft Learn. 



:carrot: Parabéns!



# Matrices e bucles de JavaScript

Aprende a manipular e almacenar datos en JavaScript.

## Obxectivos da aprendizaxe

Vexamos agora:

- Que son as matrices e para que se usan.
- Como usar bucles para traballar con matrices.
- Como aplicar operacións de matriz.

# Introdución

JavaScript é unha das principais tecnoloxías da World Wide Web. Os desenvolvedores o usan para crear contido interactivo en sitios web.

Dado que JavaScript é unha linguaxe de guión - *scripting*- do lado cliente, permite aos usuarios executar código nos seus dispositivos.

Imaxina ter que volver a cargar unha páxina web cada vez que cambias a información no dispositivo, non poder comprobar se os datos teñen o formato correcto antes de enviar un formulario ou non poder mover un obxecto de forma interactiva nunha pantalla. Sen JavaScript, estas tarefas serían imposibles na maioría dos sitios web.

Nesta sección obterás información do formato estrutural e os usos das matrices en JavaScript, e de como os bucles poden axudarche con tarefas repetitivas que implican aos datos de ditas matrices.

## Obxectivos da aprendizaxe

Imos coñecer:

- Que son as matrices e para que se usan.
- Como usar bucles para traballar con matrices.
- Como aplicar operacións de matriz.

# Manipulación de matrices

Para que os datos e información dos teus sitios web sexan interactivos, debes poder manipular e almacenar os datos no código. Por sorte, en JavaScript se poden almacenar varios elementos nunha *matriz*. O uso de matrices axudarache, entre outras cousas, a non ter que declarar moitas variables.

## Acerca das matrices

Unha matriz é un tipo de estrutura de datos que conten máis dun elemento. Imaxina un pedido de compra que conten varios artigos ou unha xeadería onde podes elixir entre varios sabores. En vez de almacenar, por exemplo, oito sabores diferentes de xeado como oito variables diferentes, podes usar unha soa matriz para almacenar toda esa información, como se ve a continuación:

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan"];
```

Neste código, ao encerrar todo o contido entre corchetes (`[]`), se esta a declarar unha matriz.

### Acceso a un elemento

O contido dunha matriz se soe coñecer como *elemento*. A miúdo se necesita acceder a un elemento específico para ler o valor, actualizalo ou quitalo incluso. Para acceder a un elemento específico, se usan corchetes máis a posición que interesa. Mira de que forma:

```javascript
array[<number>]
```

O primeiro elemento dunha matriz comenza por 0 e o último elemento é a lonxitude da matriz (número de elementos) menos 1. É dicir, se unha matriz ten tres elementos, 0 sería a primeira posición e 2 a súa última posición. Unha posición dunha matriz se coñece coma o seu *índice*. Se observas a matriz `iceCreamFlavors`, supoñamos que queres **Pistacho**. Para ler ese valor, podes escribir o código seguinte:

```javascript
iceCreamFlavors[3] // Pistachio
```

### Cambiar un valor

Para cambiar un valor nunha matriz, debes seleccionar o índice do elemento e asignarlle un novo valor mediante o operador de asignación de signo igual (`=`) e un valor á dereita do operador. A xeadería quedou sen "Napolitano", pero non te preocupes, atopaches "xeado de noz":

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changes "Neapolitan" to "Butter Pecan"
```

### Engade máis valores

O negocio de xeados medra e queres ofrecer máis sabores. Que pode facer? Podes usar o método `push()` para agregar máis sabores. O método `push()` toma un elemento como entrada e agrega o elemento á matriz orixinal. Por exemplo, para agregar "Menta con chocolate" como sabor, usarías o seguinte código:

```javascript
iceCreamFlavors.push("Mint Chip");
```

### Uso da lonxitude da matriz

Supón que alguén che pregunta, cantos sabores de xeado tes? Botas unha ollada ao almacén e todo o que ves é un mar de sabores que vas tardar moito tempo en contar. Pero, un momento, na matriz, existe o campo `length` que se pode usar para contar todos os sabores:

```javascript
iceCreamFlavors.length // 6 flavors, because you recently added "Mint Chip"
```

 :pencil2: ***Suxestión:*** Usa a consola do explorador para crear e manipular unha matriz da túa propia creación. Lembra que podes escribir código JavaScript directamente no explorador. Para facelo, abre unha xanela do navegador e diríxase a "Herramientas de desarrollo". Na consola, atoparás unha solicitude `>`. Experimenta coa manipulación dunha matriz con índices e propiedades como a que acabamos de ver.

### Quitar un valor

Para quitar un valor dunha matriz, podes usar `delete`. Supón que quedaches sen o sabor de "Menta con chocolate". O envase segue aí, pero xa non queda xeado de "Menta con chocolate". O código ten este aspecto:

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
delete iceCreamFlavors[iceCreamFlavors.length-1];
console.log(iceCreamFlavors[length-1]) // undefined
```

Tódolos elementos seguen aí, pero o envase, onde estaba o xeado de "Menta con chocolate", está baleiro. Agora podes asignarlle outro sabor, cal?

```javascript
iceCreamFlavor[iceCreamFlavor.length-1] = "your choice";
```

### Quitar un elemento

As veces, non basta con quitar o valor. Debes quitar o envase tamén. É posible que non tenas suficiente espazo na casa? Decides comerte todo o xeado de "vainilla" (probablemente haste de arrepentir) e tiras o envase. Para esa operación, usarás o método de matrices `splice()`. Toma unha posición e indica os elementos que hay que quitar, como se ve neste código:

```javascript
array.splice(<position index, <number of elements to remove>)
```

Para quitar un elemento (comerse todo o xeado de "vainilla" e tirar o envase), usa o método `splice()`, da seguinte forma:

```javascript
iceCreamFlavor.splice(2,1); 
iceCreamFlavor // [ 'Chocolate', 'Strawberry', 'Pistachio', 'Neapolitan', 'Mint Chip' ]
```





# Recorrer en iteración os elementos dunha matriz mediante bucles

Tes unha matriz, e agora que? Podes usar *bucles* para levar a cabo iteracións con cada elemento da mesma. Podes realizar operacións como imprimir cada elemento, sumalo ou buscar elementos específicos dada unha condición.

## Acerca dos bucles

Os bucles permiten tarefas repetitivas o *iterativas*, e poden aforrarche moito tempo e código. Unha iteración pode variar nas súas variables, valores e condicións. Hai diferentes tipos de bucles en JavaScript, cada un ten pequenas diferencias. Pero todos fan basicamente o mesmo: executan un bucle nos datos.

### Bucles `For`

Un bucle `for` requiere tres partes para iterar:

- **Contador**: variable que normalmente se inicializa cun número que conta o número de iteracións. Este é un exemplo:

  ```javascript
let i = 0;
  ```
  
  Normalmente, este valor úsase como a primeira posición á que se quere acceder nunha matriz.

- **Condición**: expresión que usa operadores de comparación para facer que o bucle se deteña cando `true`. Este é un exemplo dunha condición que se detén cando a matriz no ten índices:

  ```javascript
i < 10;   
  ```
  
  Neste exemplo, a expresión será `false` cando `i` sexa igual a `array.length`. Se se está recorrendo en bucle unha matriz, este é o resultado correcto. Non se recomenda abordar un índice fora dos límites da matriz.

- **Expresión de incremento**: expresión que se executa ao final de cada iteración, normalmente para cambiar o valor do contador. Podes incrementar tanto como queiras por cada iteración, pero é habitual aumentar de unha en una, como se mostra neste exemplo:

  ```javascript
  i++;
  i +=2; // this would work too and increases by 2
  ```

Cando as tres partes se usan xuntas, un bucle `for` pode ter este aspecto:

```javascript
for (let i = 0; i < 10; i++ ) {
  console.log(i);
}
```

 :pencil2: ***Suxestión:*** Executa este código nunha consola do explorador. Que ocorre cando se fan pequenos cambios no contador, condición ou expresión de incremento? Podes facer que se execute cara atrás e crear unha conta regresiva?

### Bucles `While`

A diferencia do bucle `for`, un bucle `while` require unha condición que deterá o bucle só cando a expresión do bucle `while` se avalíe coma `true`.

As condiciones dos bucles soen basearse noutros valores, coma os contadores, e deben administrarse durante o bucle.

Os valores iniciais dos contadores deben crearse fora do bucle e calquera expresión que cumpra unha condición, incluído o cambio do contador, debe manterse dentro do bucle. No exemplo seguinte, o bucle `while` se executa para 10 iteracións.



```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

 :triangular_flag_on_post: **Nota**: Por que elixir un bucle `for` ou un bucle `while`? En StackOverflow, [17 000 espectadores se facían a mesma pregunta](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript/), pode que che interesen algunhas das opinións.

As matrices sóense usar con bucles porque a maioría das condicións requiren a lonxitude da matriz para deter o bucle e o índice tamén pode ser o valor do contador.

## Bucles e matrices

Volvamos á lista de sabores de xeado. Un cliente pide o nome de todos os sabores antes de decidir cal comprar. Por sorte, coñécelos bucles `for`, así que usa un. Lembra que definiches unha condición sobre cando terminar a lista, da seguinte forma:

```javascript
i < 10
```

A matriz de sabores de xeado ten unha lonxitude arbitraria, o que significa que pode quitar o agregar elementos en calquera momento. Sabes que tes seis tipos de xeado, pero tamén podes usar o operador `length` na matriz, podes fiarse de el:



```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} // Ends when all flavors are printed
```

Aí está. Ha enumerado todos los sabores y el cliente ha elegido "Vainilla". ¿Qué sabor elegiría?

## O bucle `forEach()`

Ata agora, coñeces os bucles `for` e `while`. Hai outro bucle na propia matriz chamado `forEach()`. O bucle `forEach()` percorre os elementos na iteración e ofrece unha maneira simplificada de crear bucle, xa que non necesita un contador se o único que queres facer é crear bucle. Por exemplo:

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number)); // 1 2 3 4 5
```

Ademais, se queres acceder ao índice actual, tamén podes facelo cambiando lixeiramente o código anterior:

```javascript
numbers.forEach((number, index) => console.log(`Number ${number} ${index}`));
```

### Que construcción de bucle usar e cando

Os bucles `for` e `forEach()` permiten recorrer en bucle os elementos da matriz, pero a diferencia entre eles é que o bucle `for`  permíteche saír se se cumpre unha condición determinada.

Observa o código seguinte:

```javascript
let numbers = [1, 2, -1, 4, 5];
for(let i = 0; i< numbers.length; i++>) {
  if (numbers[i] < 0) {
    break;
  }
  console.log(numbers[i]);
}
```

Agregar `break` fai que o bucle se deteña nun elemento negativo. O bucle `forEach()` non pode facer iso.

 :pencil2: ***Suxestión***: Experimenta con bucles nunha matriz propia na consola do explorador. Se queres un desafío, hai outras maneiras de percorrer en bucle matrices que non sexan os bucles `for` e `while`. Hai bucles [`forEach`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [`for-of`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of/) e [`map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map/). Proba a reescribir o bucle de matriz mediante unha destas técnicas.



# Uso de operacións para consultar matrices

Xa tes moita información, inda así, as matrices son moito máis complexas que simplemente iterar por elas ou quitar e agregar elementos. Tamén podes consultalas ou realizar operacións en elas.

## Filtrado

Podes realizar moitas operacións útiles nunha matriz. Buscar e filtrar aquilo que necesitas son operacións que é probable que realices con frecuencia.

### Buscar un elemento mediante `find()`

Imaxina que alguén che pregunta, tes xeado de "Chocolate"? e, se o tes, posme un? E neste punto, podes usar o método `find()` na matriz, como se mostra aquí:

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
iceCreamFlavors.find(flavor => flavor === "Chocolate") // "Chocolate"
```

A operación `find()` executa a función que proporcionaches como entrada para cada elemento. Se a operación atopa o elemento que se busca, devolve o elemento. Se non atopa o elemento, devolve `undefined`.

### Filtrar elementos cunha propiedade común mediante `filter()`

Que ocorre se o cliente di: quero un xeado que *conteña* "Chocolate", que tes? Debes reordenar un pouco a xeadería e empezar a organizala por categorías. A consulta deste cliente debe devolver "Chocolate", "Napolitano" e "Menta con chocolate" como sabores que conteñen "Chocolate". Tendo isto en conta, opta por almacenar a matriz da seguinte maneira:



```javascript
let iceCreamFlavors = [
  { name: "Chocolate", type: "Chocolate" }, 
  { name: "Strawberry", type: "fruit"}, 
  { name: "Vanilla", type: "Vanilla"}, 
  { name: "Pistachio", type: "Nuts"}, 
  { name: "Neapolitan", type: "Chocolate"}, 
  { name: "Mint Chip", type: "Chocolate"}
];
```

Xa reorganizáchela oferta. O cliente pide un xeado que conteña chocolate e parece que quere unha bola de cada un dos tres sabores devoltos pola consulta. O mellor método para usar neste caso é a operación `filter()`. Toma unha expresión de filtro (unha función) e devolve calquera elemento que coincida coa expresión. Para axudarlle ao cliente a atopar o que quere, usa o seguinte código:



```javascript
iceCreamFlavors.filter(flavor => flavor.type === "Chocolate") // [{ name: "Chocolate", type: "Chocolate" }, { name: "Neapolitan", type: "Chocolate"}, { name: "Mint Chip", type: "Chocolate"}]
```

### Comprobación dunha condición mediante `some()`

Un dos clientes é alérxico ás "Noces" e primeiro quere saber sa algún dos xeados contén "Noces". Comproba o inventario mediante o método `some()`. O método usa unha función que comproba se alo menos un elemento cumpre unha condición.

```javascript
iceCreamFlavors.some(flavor => flavor.type === "Nuts") // true
```

Dado que o xeado de "Pistacho" contén noces, o método `some()` devolve *true*. Agora, o cliente quere saber que sabores *pode* escoller, o que te leva a executar este código:

```javascript
iceCreamFlavors.filter(flavor => flavor.type !== "Nuts") // returns everything except for Pistachio.
```

## Asignación de proxeccións

Unha proxección é intentar cambiar a matriz de algunha maneira. Imaxina, por exemplo, que toma a matriz orixinal `iceCreamFlavor` e desexas agregar unha propiedade `price` a cada sabor. Esta situación é axeitada para un método de proxección chamado `map()`. Imaxínate que fai bo día e decides que cada bola de xeado que vendes debe valer 1€. Escribes o código para que isto aconteza. Algún código como o que se mostra a continuación:

```javascript
let iceCreamFlavors = [
  { name: "Chocolate", type: "Chocolate" }, 
  { name: "Strawberry", type: "fruit"}, 
  { name: "Vanilla", type: "Vanilla"}, 
  { name: "Pistachio", type: "Nuts"}, 
  { name: "Neapolitan", type: "Chocolate"}, 
  { name: "Mint Chip", type: "Chocolate"}
];
iceCreamFlavors.map(flavor => {
  flavor.price = 1;
  return flavor;
}) // every item now has a new property price: 1 
```

O código pasa por cada elemento da lista, adxunta a propiedade `price`, proporciónalle o valor `1` e, a continuación, devolve o elemento.

## Agregacións

O negocio funciona. Hoxe fai máis sol e vendiches moitos xeados. Os recibos da caixa están almacenados nunha longa matriz, que se parece ao seguinte código:

```javascript
let sales = [{
 date : '2021-05-01',
 amount: 2
},
{
 date : '2021-05-01',
 amount: 1
}
// and so on...
]
```

Poderías usar un bucle `for` para sumalo todo, da seguinte maneira:

```javascript
let sum = 0;
for( let i =0; i< sales.length; i++) {
  sum += sales[i].amount; 
}
```

Este código funciona, pero hai unha estratexia máis elegante: é dicir, o método `reduce()`. O obxectivo deste método é *reducir* unha lista larga a un só elemento, que podería ser un obxecto ou un número, por exemplo. Para usar `reduce(),` debes proporcionarlle unha función que tome dous parámetros: un valor acumulado e o valor actual do bucle.

Dentro da función, debes volver a calcular o valor acumulado mediante o valor actual. O segundo argumento de `reduce()` é o valor de inicio. Dado que neste caso queres usar `reduce()` para calcular as ventas, a función debe actualizar o valor acumulado co valor do que hai na propiedade `amount` para cada elemento. O valor inicial debe ser `0`. Con isto en mente, o aspecto do código é o seguinte:

```javascript
sales.reduce((acc, curr) => acc + curr.amount, 0);
```

Como podes ver, non se necesita unha variable `sum`. Pode que tardes un pouco en acostumarte a esta estratexia, pero é eficaz e pódese usar en moitas situacións.



> Probas os pedazos de código que atopas no texto. Intenta facerte coas estratexias de guión - accións orientadas ao cambio- propias da linguaxe JavaScript



### ...continuará



Formaweb IV

NOV 2021

