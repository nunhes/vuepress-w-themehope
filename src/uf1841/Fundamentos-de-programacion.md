---
marp: true
---

# Fundamentos de programación

---

# 1

---

## Datos: Tipos de datos.

---

> ##### *Para computar usamos datos. Programamos para empregar datos, analizar datos, amosar datos, estudar datos, extraer datos de outros datos,... Os datos son a substancia sobre a que imos a programar.*

---

Usamos datos para crear instrucións, que despois serán interpretadas polo ordenador. Sabendo que ese grupo de instrucións ou valores debe ser válido e expresado de xeito idoneo para que poidan ser procesados correctamente.

---

Os tipos de datos en programación poden ser moi variados. Algúns tipos dependerán da linguaxe de programación que esteamos a empregar.

E, case sempre, vas poder tamén crear o teu propio tipo de datos mediante enumeracións e/ou estruturas.

---

Vexamos algúns exemplos de **tipos de datos básicos de uso común** e que se pode facer con eles:

---

- **Números**: podes sumar, restar, dividir, multiplicar, entre outras operacións.

---

- **Texto**: pódese comparar, substituír, engadir, etc.

---

- **Datas**: Mostralas, sumalas, restalas, comparalas, etc.

---

> ##### *Para tratar cos datos, usar datos e empregalos en programación debemos declaralos usando variables*. 

---

- *unha variable en programación é un elemento de datos cun valor, que pode cambiar durante o curso da execución dun programa*

- *unha variable en programación podemos dicir que é unha unidade de almacenamento e recuperación de datos con valores que poden cambiar, a cal se identifica cun nome único no código do programa*.

- *unha variable en programación se pode entender como un nome que representa un valor e se utiliza de forma periódica para almacenar diversos tipos de datos. Datos que se utilizarán nas operacións posteriores de codificación*.

- *unha variable ~~en Java~~ é como unha caixa en onde podemos almacenar o que queiramos, como, por exemplo, nomes, números, funcións, etc.*

---

  ![bg fit](./assets/AYEnBjStamps-CJ6HPv.png)

---

### Variables

Unha variable é unha peza de código que **almacena un valor**. 

As regras e restricións dependerán do **tipo de variable** utilizada, entre elas:

- **Número**: ``int``
- **Número real**: dobre ou flotante &rarr; ``double`` ou ``float``
- **Cadea**: carácter ou cadea &rarr; ``char`` ou ``string``
- **Booleano** (si/no, on/off,...)
- ...

---

#### Números

##### Tipo de datos do número: ``int``

Nunha linguaxe de programación, os números represéntanse de diferentes xeitos.

Só ter en conta:

- Cal será o tamaño que imos empregar?
- Se terá ou non números decimais.
- Se vai ser negativo.

 **`int`** representa calquera número sen decimais, sexa positivo ou negativo. Nalgunhas linguas se o coñece tamén como **`integer`.**

---

##### Tipo de datos Número real: **`double`** ou **`float`**

Se queremos usar un número con decimais, atopamos o tipo de datos **`double`** ou **`float`**, ou números de coma flotante.

Dependendo da precisión decimal que queiramos obter se declara como dun tipo ou do outro, .

A diferencia dunha variable cun valor de numero **`int`**, nunha **`float`** atoparás números con decimais, por exemplo: **5,89**

E tamén podes ver unha letra F ou D para distinguir si é **`float`** ou é **`double`**, por exemplo: **5.89D**.

---

#### Cadeas

##### Tipo de datos de cadea: ``char`` ou ``string``

**`char`** é un carácter Unicode e normalmente escribirase entre comiñas simples (' ').

Úsase **`string`** cunha cadea de caracteres, é dicir, caracteres seguidos un tras outro formando unha secuencia, 

O tipo **`string`** escríbese normalmente entre comiñas dobres (" "), aínda que pode variar dependendo da linguaxe.

---

#### Booleano

O tipo de datos **`boolean`**representa se unha condición é verdadeira ou non.

Normalmente ten dous valores identificados, **`true`**(verdadeiro) ou **`false`**(falso). Nalgunhas linguas pode ser equivalente aos números **0** e **1** .

> *As operacións precisan ser descritas de forma clara pola súa funcionalidade e sinaladas segundo a convención para poder ser resoltas*.

---

## Operadores

Os operadores en programación serven para realizar operacións cos datos: transformar datos dun tipo dado en novos datos.

---

### Tipos de operadores

Hai moitos tipos de operadores. Algúns deles tan familiares como os que usamos en matemáticas básicas, e outros máis novos que se crearon para as operacións informáticas.

Os tipos de operadores divídense do seguinte xeito:

- Aritméticos
  - Unarios
  - Binarios
- Booleanos
- De asignación
- Relacionais
- Lóxicos

---

#### Operadores Aritméticos

Transforman e manipulan datos, principalmente cando son números, con ou sen decimais.

Pódense distinguir dous tipos:

- Operadores unarios
- Operadores binarios

---

##### Operadores Unarios

Denominados así, porque só necesitan unha variable ou argumento para poder calcular o seu valor.

- **Negación**:        `not` ou `!`
- **Negativo**:         `-`  para devolver o valor ``-a``
- **Positivo**:           ``+`` ou ``+a``
- **Incremento**:    ``++`` (Aumenta +1)
- ***Decremento***:     ``--`` (Diminúe -1)

---

##### Operadores Binarios

Para os operadores binarios, se necesitan dúas variables ou argumentos, antes de realizar operacións.

- Suma: `+`
- Resta: `-`
- Multiplicación: `*`
- División: `/`
- División enteira: A diferencia da anterior, esta non devolve decimais. Se utiliza o símbolo `div`. Ex: ``7/2= 3,5``, pero `7 div 2 = 3`
- Resto o Módulo: Devolve o resto da división de dous números. Se utilizan os símbolos `%` o `mod`. Ex: `7 mod 2 = 1`

---

#### Operadores Booleanos

Serven para combinar `true` e `false`, só pode devolver un destes valores.

Permite tomar diferentes accións no código, baseándose en ditas condicións `true` (verdadeiro) ou `false` (falso).

---

#### Operadores de Asignación

Dan un valor a unha variable, se a variable tiña un valor, se substitúe polo novo.

Os operadores de asignación que se utilizan son:

- `=`: Asignar unha variable.
- `+=`: Acumular unha variable. Ex: `variable+=3`, engade 3 ao valor que tiña a variable. Se a variable valía 6 agora vale 3.
- `-=`: Decrementar ou restar o valor da variable. Ex: `variable = variable - 3`
- `*=`: Multiplicar o valor. Ex: `variable = variable * 3`
- `/=`: Dividir o valor. Ex: `variable = variable / 3`

---

#### Operadores Relacionais

Cos operadores relacionais pódense comparar dous valores, para saber si a operación ten un resultado verdadeiro (`true`) ou falso (`false`).

- Igual: `==`
- Distinto: `!=` ou `<>`
- Menor: <
- Menor ou igual: `<=`
- Maior: `>`
- Maior oi igual: `>=`

---

Ex:

```js
8 > 2 // devolve `true`
8 < 2 // devolve `false`
```

---

#### Operadores Lóxicos

Se utilizan para avaliar varias operacións á vez.

Se distinguen polo uso da palabra ``and`` e o marcado ``&&``, depende da linguaxe. Tamén dispomos do operador ``or`` ou o marcado ``||``.

- ``&&``: Devolve verdadeiro si as dúas expresións son verdadeiras, se unha é falsa devolverá falsa.
- ``||``: Devolve verdadeiro si só un dos dous valores o é.

---

## 2

---

## Condicionais

---

Un condicional en programación é unha instrución ou grupo de instrucións que se poden executar ou non, dependendo dunha condición establecida.

---

Condicionais comúns que podemos ver na maioría das linguaxes de programación son `if` e `else`.

- Avalíase unha condición dada na estrutura `if`(se), se é verdade execútanse as accións e se é falsa continúa coa execución do algoritmo.
- Se é necesario, está o bloque  `else` (pódese entender como *o demais*, *senón* ou *tamén*), no que se colocan as instrucións que se executarán cando non se cumpra a condición principal.

Son condicións lóxicas, que só devolverán `true` ou `false`, e executaranse se o seu valor é `true`.

---

## ``if``

Úsase `if` para avaliar unha expresión condicional:

- Se a condición é certa, executará un bloque de código.
- Se é falso, é posible executar outras instrucións.

---

Hai varias estruturas, as máis sinxelas serían:

```js
if (condicion) instruccion;
```

onde `condicion` é unha expresión booleana.

As instrucións  `instruccion` representan as liñas de código que se executarán se o resultado `condicion` é `true`.

---

A expresión condicional `if` funciona primeiro avaliando `condicion`, se o código satisfai (é  `true`) execútase o bloque de código `instruccion`; pero se o resultado é `false`, continúa coa instrución que segue no código, se a hai.

---

### ``if`` para varias instrucións

En xeral, se hai varias declaracións que avaliar, agrúpanse con chaves `{ }`:

```js
if (condicion)
{
	 instruccion1;
	 instruccion2;
	 ...
	 instruccionX;
}
```

---

## ``else``

Con **`else`**, temos a posibilidade de avaliar se **NON se** **cumpre** a condición. Significa que permite executar **outras instrucións** cando non se cumpre a condición inicial **`if`**.

A estrutura sinxela sería:

```js
if (condicion) instruccion1;
else instruccion2;
```
---

- `instruccion1` é un bloque de código que se executará se a expresión avaliada é `true`.
- `instruccion2` representa as liñas de código que se executarán se a expresión avaliada é `false`.

Na estrutura pódese ver que `condicion` segue sendo un booleano como antes e que como resultado só obteremos `true` ou `false`. Por iso usamos `else` cando queremos facer algo porque o `condicion` dános como resultado `false`.

---

### Agrupar varios enunciados con ``else``

Do mesmo xeito que `if`, a expresión `else` ten a mesma posibilidade de agrupar varios enunciados. A estrutura pódese visualizar do seguinte xeito:

```js
if (condicion)
{
	 instruccion1;
	 instruccion2;
}
else
{
	 instruccion3;
	 instruccion4;
}
```

---

## ``ìf`` aniñado

Nalgúns casos, unha instrución `if`  terá que ser executada como parte doutra instrución `if`, isto coñécese como instrucións aniñadas.

As declaracións `if`  fanse aniñadas para avaliar os valores de dúas variables.

Ex.:

```js
if (a > 25)
{
	 instruccion1;
	 if (b < 25);
	 {
	 instruccion2;
	 }
}
```

---

### Do exemplo anterior:

- Se o valor da variable `a` é maior que 25, executará unha instrución.
- A continuación, avaliará se `b` é menor que 25 e, se é verdade, executará outra instrución.
- Se a condición non se cumpre coa variable `a`, tampouco se avaliará `b`.

---

## Encadear ``if`` e ``else``

Algunhas linguaxes permítennos unir varias `if` dentro dunha mesma estrutura, realizando así diferentes accións, a estrutura sería:

```js
if (condicion1)
	 instruccion1;
else if (condicion2)
	 instruccion2;
else if (condicion3)
	 instruccion3;
else
	 instruccion4;
```

`if else` Utilízase na programación, por exemplo ao avaliar a mesma variable de xeito secuencial e dunha vez. Se vemos a estrutura, tal e como se está a avaliar, se ( `if`) o resultado é certo, executaría a instrución, se non ( `else`) valorará a seguinte opción, etc.

---

## 3

---

## Palabras reservadas

---

As palabras reservadas ou palabras clave, teñen un significado especial para o compilador da linguaxe de programación.

---

Serven para identificar os tipos de datos e as instrucións de programación que permita cada linguaxe, é dicir, dependerán da sintaxe da linguaxe que se empregue.

---

Xa vimos palabras reservadas antes:

- `if`
- `else`
- `string`

---

## Exemplos de palabras reservadas

Estes son algúns dos exemplos comúns que se ven na maioría das linguaxes de programación.

---

### Tipo de datos

- `bool`
- `int`
- `char`
- `byte`
- `long`
- `double`

---

### Diferentes instrucións de programación

- `if`
- `else`
- `while`
- `for`
- `switch`
- `case`
- `break`
- `try`
- `return`
- `void`

---

### En linguaxes de programación orientada a obxectos

- `public`
- `protected`
- `private`
- `class`
- `abstract`
- `interface`
- `this`
- `friend`

---

### Outras palabras reservadas nalgunhas linguaxes de programación

- `main`
- `new`
- `operator`
- `sizeof`
- `typedef`

---

## Resumo:

- Estas palabras NON SE PODEN usar para nomear variables, xa que provocarían un erro no código.
- Unha vez escollida linguaxe de programación, deberías aprender as diferentes palabras reservadas desa linguaxe.
- Se cambias de idioma, é posible que teñas que aprender novas palabras reservadas, e ademais cambiar a sintaxe.

---

## 4

---

## Arrays (matrices)

As matrices - ``arrays``- úsanse para agrupar obxectos. Podes declarar tipos ou clases de datos (como `string`, `number`, `boolean`) e dependerá da linguaxe de programación que esteas a usar.

Tamén se os coñece como *arreglos*, vectores ou matrices.

---

## Como declarar matrices?

Para declarar unha matriz a estrutura sería:

```js
char[] cadea;
Figura[] cuadrados; // Donde “Figura” é unha clase
```

- O tipo declárase seguido dos corchetes[] e despois o nome da variable.
- Isto dependerá moito da linguaxe de programación.

---

### Outra forma de declarar...

Tamén se pode declarar do seguinte xeito - máis convencional-, o exemplo sería:

```js
char cadena[];
Figura cuadrados[];
```

*Esta opción é estándar nas linguaxes C ou C++ e tamén se pode usar en Java*.

---

## Consellos e tamaño das matrices

O habitual ademais de declarar as matrices é definir o tamaño.

Ao declarar unha matriz, non estamos creando un obxecto, só unha referencia para usalo.

Os elementos dentro dunha matriz pódense cambiar, pero NON a declaración ou referencia da matriz.

Na programación orientada a obxectos, os arrays considéranse obxectos, isto quere dicir que ao declaralos non se está a crear o obxecto, senón unha referencia para poder utilizalo.

---

### Como configurar o tamaño da matriz...

Para inicializar unha matriz, úsase a palabra reservada `new`. (Nalgúns idiomas non é necesario `new`.)

Exemplo con matriz de tipo de datos `int`:

```js
s = new int[30];
// Un array de 30 valores que son números, neste caso sería 0.
```

Se queremos ver os números do 1 ao 30.

---

### Exemplo con matriz de tipo de datos `int:`

```js
for (int i = 0; i < 30; i++)
{
	 s[i] = i + 1;
}
// i: índice, é a posición dentro do array para localizar o valor que conten
```

Comeza por 0, e non por 1. Moi común nas linguaxes de programación, o primeiro valor do índice adoita ser o número 0.

Case todas as linguaxes de programación usan `length` para indicar o tamaño da matriz.

---

### Outro exemplo...

Outra forma máis sinxela de crear matrices:

```js
String[] nomes = {"Johnnie","Tomás","Daniel"}
```

---

Tamén se pode crear así:

```js
String[] nomes = {
   "Johnnie",
   "Tomás",
   "Daniel"
}
```

---

E sería equivalente a escribilo así:

```js
String[] nomes = new String[3];
nomes[0] = "Johnnie";
nomes[1] = "Tomás";
nomes[2] = "Daniel";
```

⚠️ *Lembra consultar a documentación da linguaxe de programación que estás utilizando. A forma de crear e manipular Arrays é específica para cada linguaxe.*

---

## Crear matrices de obxectos

---

Pódense crear:

```js
cadros = new Figuras[10]; // 10 referencias do tipo “Figuras” nun array
```

Con isto non creamos 10 obxectos, o valor en cada posición será `null`.

Para crealos:

```js
cadros = new Figuras[10];
for (int i = 0; i < 10; i++)
{
	 cadros[i] = new Figura();
}
```

---

## Matrices bidimensionais

Existen linguaxes de programación que permiten crear matrices bidimensionais (bidimensionais). Está creando matrices de matrices.

Exemplo con Python: Supoña que as temperaturas se rexistran durante 4 días consecutivos:

```
Dia 1: 11 12 5 2
Dia 2: 15 6 10
Dia 3: 10 8 12 5
Dia 4: 12 15 8 6
```

Represéntase como unha matriz bidimensional:

```python
T = [[11, 12, 5, 2], [15, 6,10], [10, 8, 12, 5], [12,15,8,6]]
```

---

## 5

---

## Loop ou Ciclo

Un ciclo ou bucle (*loop* en inglés), é unha secuencia de instrucións de código que se executa repetidas veces, hasta que a condición asignada a dito ciclo deixa de cumprirse.

Os tres ciclo más utilizados en programación son:

- **while**
- **for**
- **do while**

---

### Ciclo ``while`` 

O ciclo `while` itera ou repite un bloque de código mentres unha condición ten o valor **`true`**.

Pódese escribir:

```js
while (condicion)
{
	 instruccions;
}
```

---

Todos os ciclos teñen:

- A **`condicion`** que se avalía a **`true`** ou **`false`**, e se fai en cada repetición/iteración do ciclo.
- A **`instruccion`** o instrucións que representa las líneas de código, se ejecutan si la **`condicion`** es **`true`**.

Este ciclo se caracteriza porque a `condicion` é procesada antes de executar o código, é dicir, que si o resultado devolve `false`, as instrucións non serán executadas. Para estes casos, existen outros tipos de ciclos que veremos máis adiante.

---

#### Ciclo ``while`` aniñado

Un ciclo ``while`` aniñado:

```js
col = 0;
row = 0;
while ( row < 3)
{
	 while (col < 5)
	 {
		  print("#");
		  col++;
	 }
	 row++;
}
```

---

## 6

---

## Ciclos ``for``

Un bucle `for` úsase cando queremos repetir un conxunto de instrucións un número finito de veces.

Un exemplo de como escribir:

```js
for (i = 0; i < TOTAL; i++)
{
	 instruccions;
}
```

---

Dentro do ciclo `for` atopamos:

`i = 0`: Nesta posición asígnase o primeiro valor da variable, xeralmente é un **cero** .

`i < TOTAL`: Aquí é onde se verifica se a variable chegou ao final do ciclo, avaliando esta condición. `TOTAL`, pode cambiar , adoita ser un número, constante ou variable.

`i++`: é onde se cambia o valor `i` para a seguinte repetición ou iteración. O obxectivo é aumentar o seu valor, ata que nos acheguemos de ciclo en ciclo a `TOTAL`.

---

> Unha **iteración na programación** é cada unha das voltas que dá un ciclo, é dicir, cada unha das repeticións dun anaco de código.

---

É importante comprobar que a condición se cumpre nalgún momento, para evitar caer nun **bucle infinito** (que non remata nunca), e que daría un erro ao executar o programa.

---

## `break`e `continue` nun ciclo `for`

Algunhas linguaxes de programación teñen as palabras reservadas `break` e `continue` que compren a súa función:

- `break`: Úsase para saír do bucle e podemos decidir cando facelo, sen chegar ao final e **continuar coas seguintes iteracións**.
- `continue`: Permítenos omitir unha iteración de todo o bucle. Detén a execución do resto do código dentro do bloque de bucle.

---

Un exemplo de cada un:

```c
for(i = 10; i >= 0; --i) {
	if(i > 5) {
    continue; // Non seguimos si i é maior a 5
  }
  if(i == 2){
    break; // Saimos si i é igual a 2
  }
	console.log(i + 3); // Imprimimos o valor de i máis 3
}  
```

---

## Diferenza entre `while` e `for`

- **`while`**, o código repítese baseándose nunha **`condicion`**, é dicir, sempre que a **`condicion`**  sexa **`true`**(verdadeiro).
- **`for`**, as instrucións repítense o número de veces que se indica, normalmente poñemos un número (ou o valor dunha variable ou dunha constante).

---

## 7

---

## Ciclo ``do while``

É unha estrutura de control cíclica, que permite executar de maneira repetitiva un bloque de instrucións sen avaliar de forma inmediata unha condición específica.

Sino avaliándoa xusto despois de executar por primeira vez o bloque de instrucións.

---

Dependendo da linguaxe de programación, se pode escribir:

```js
do
{
	 instruccions;
} while (condicion)
```

---

## Exemplo de ciclo `do while`

Un exemplo coa linguaxe de programación C#, si queremos os números do 1 ao 10, sería:

```csharp
do
{
    i++;
    Console.println(i);
} while ( i < 25);
```

- Sabemos que, dentro das chaves `{ }` se atopa todo o que se repetirá.
- `i++` : Instrución que incrementa o valor de `i`.
- `Console.println(i)` : Instrución que imprime ou mostra en pantalla o valor de `i`. Ao estar dentro do bloque, significa que veremos en pantalla como se irá incrementando hasta que cumpra a condición `i < 25.`
- `i < 25.` : A condición para que se cumpra o ciclo. Neste caso, mentres o número sexa menor que 25.

---

## Diferencia entre ``do while`` e ``while``

A diferencia entre ambos é a orde do proceso:

- **`do while`**, primeiro executa o bloque de instrucións e logo avalía a condición.
- **`while`** primeiro avalía a condición e despois executa o bloque de instrucións.

Así que, é posible obter resultados diferentes ao utilizar **`do while`** en vez de **`while`**.

---

## 8

---

## Funcións

---

As funcións, tamén chamadas **métodos**, nos permiten dividir o traballo que fai un programa, en tarefas máis pequenas separadas da parte principal.

---

## Cómo definir una función?

---

A forma de declarar unha función sería:

```js
[Modificadores] tipo_retorno nombre_funcion ([argumentos])
{
	 bloque_código;
}
```

---

## Modificadores dunha función

---

Son varias palabras clave, ou palabras reservadas da linguaxe de programación, as que poden modificar a forma na que serán empregados os métodos ou funcións.

---

Algunos ejemplos: **`public`**, **`private`**, **`protected`**, **`virtual`**, **`static`**...

---

## Nome ou identificador dunha función

---

- Igual que cando declaramos unha variable, o nome da función non pode levar espazos.

  Ex: **`suma total`** sería incorrecto, logo deberíamos optar por algunha destas opcións: **`sumaTotal`**, **`suma_total`**, **`SumaTotal`**, etc.

- Tampouco debería de empezar cun número e desde logo non se pode usar ningunha palabra reservada.

---

#### Exemplo de funcións

```js
public void hola(nombre) {
  printf("Hola %s", nombre);
}

public int suma(int num1, int num2)
{
	 return num1 + num2;
}
```

---

## E cando ou como se poñen en marcha estas funcións?

---

## Return

---

A palabra reservada `return`, se utiliza para devolver un método ou función. Por exemplo, en el siguiente código, `return` devuelve el valor que tiene `result`.

```csharp
return result;
```

---

## Que facer cos valores devoltos?

---


No caso anterior, se invocou unha función que devolveu un valor. Se pode utilizar o valor devolto desde a función de onde foi chamado.

Un poco confuso :scare:. Vexamos un exemplo:

```js
public int sum(int a, int b)
{
    return a + b;
}
```

---

E se utilizaría da seguinte maneira:

```js
int resultado;
resultado = sum(4, 5);
printf(resultado); // Imprime el valor 9 -> 4 + 5
```

---

## Avantaxes do uso de funcións

- Os programas son máis lexibles e fáciles de manter.
- O desenvolvemento e o mantemento é máis rápido.
- Son utilizados para que o software sexa reusable.
- Se poden crear métodos para que outros programadores poidan usalos.
- Os métodos permiten separar os obxectos para comunicar e distribuir o traballo realizado polo programa.

---

## 9

---

## Diccionarios

---

Ao igual que os ***arrays***, os **dicionarios** son unha estrutura de datos.

Permiten almacenar múltiples valores dentro dunha mesma variable; presentandose, sen un orden estabrecido pero asociados coas chaves `{ }`.

---

### Crear dicionarios

---

Se crean usando llaves { }:

```js
telefonos = {'Tomas': 5552437, 'Johnnie': 5551428, 'Daniel': 5550012}
```

A cada elemento dun dicionario se o coñece como **propiedade**, e consta dun identificador e un valor.

Un diccionario baleiro pode ser creado usando **`{ }`** ou coa función **`dict()`**:

```js
d = {}
d = dict()
```

---

### Usos do dicionario

- **Agrupar valores**: se poden agrupar valores relacionados, dentro dunha mesma variable, facendo o código máis simple.
- **Array de dicionario**: se pode crear un array de obxectos, con múltiples propiedades

---

### Manipulación dun dicionario

---

- Nun diccionario podemos agregar ou eliminar propiedades, ao igual que os valores dos mesmos.
- Unha vez creado o dicionario, no código podemos indicarlle que facer con eses datos. Se poden crear todo tipos de instruccións.

---

# Que ven despois?

---

Unha vez que teñamos aprendido estes fundamentos básicos de programación:

 1. Elixe unha rama da programación que te guste, sigue a ruta de aprendizaxe da mesma e **practica**. Entre as áreas que che poden interesar están:

- Frontend &rarr; *JavaScript*
- Backend &rarr; *C#, Java, Python*
- Aplicaciones Móbiles &rarr; *Kotlin, Swift, Java*
- Videoxogos &rarr; *C#*
- Data Science &rarr; *Python*


---

XAN 2023

---

<!-- https://www.codealo.dev/curso/fundamentos-de-programacion?leccion=introduccion-fundamentos-de-programacion -->

https://learn.microsoft.com/en-us/training/modules/introduction-to-github-visual-studio-code/