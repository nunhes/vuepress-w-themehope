# JavaScript

Benvido, estás a piques de comezar a aprender JavaScript, e este é só un repaso rápido para ensinarache a leer/escribir código.

Para crear aplicacións web con **HTML, CSS, JavaScript**. JavaScript é a linguaxe de programación que permite crear aplicacións web (páxinas web, sitio web), engadir interactividade e enriquecer a experiencia de usuario xa que permite facer un seguimento das accións dunha persoa no nosos sitio. JS non soe actuar soa. Para empregar JavaScript tamén imos ter que empregar , dun xeito ou outro, HTML e CSS.

Se empregas JavaScript desde o propio documento HTML escribe código JavaScript dentro de **``<script></script>``**:

```html
<script type="text/javascript">
  alert("This alert box was called with the onload event");
</script>
```

Se non, enlaza o teu arquivo *\*.js*, na cabeceira da páxina ou antes do peche de `</body>` e sempre despois das follas de estilos, por se tiveras algunha dependencia alí.

```HTML
<script type="text/javascript" src="path-to-javascript-file.js"></script>
```

## Variables

As variables son o primeiro que necesitamos entender, as variables axúdan a declarar o tipo de información que vas almacenar, podes almacenar: **Números, Texto, Obxectos**,... As variables se declaran usando as palabras clave **var** ou **let**.

***String* (cadea)** :  
almacena datos de tipo texto. Coma nos seguintes exemplos:

```js
var fullName = "Auterpio Lumbreras";
```

```js
let country = "Nova Caledonia";
```

***Number*(número)** :
calquera número, coma nos seguintes exemplos:

```js
var productQty = 10;
```

```js
var productPrice = 2,50;
```

**Booleano** :
podese usar cando se requira resolver unha decisión, o booleano é unha decisión que se resolve coma `true` (verdadeira) ou `false` (falsa). Os seguintes son exemplos de tipos de datos **booleanos** .

``var isValid = true;``

``var isDone = false;``

***Object* (obxecto)** : o
un obxecto úsase para almacenar outros contidos de referencia como propiedades de matrices. O seguinte é un exemplo do tipo de datos **Object** .

```js
var Produto = {
       "Name": "Apple",
    "Price": 1.50,
    "Quantity": 2,
    }
```

Neste exemplo de variable obxecto describimos o seguinte:
O produto é unha variable.
Nome, Prezo e Cantidade son propiedades seguidas do seu valor. Propiedade e valor desa propiedade van separados por puntos dobres `:`.  

## Comentarios

Os comentarios son partes de texto que podes incluír en calquera parte do teu código para documentar o que estas a facer, para que serve,... . Podes usar **`//`** para comentar unha soa liña de texto no teu código ou **``/* */``** para comentar varias liñas. O comentario non se executará aínda que teñas código nel, JavaScript ignora o bloque de comentarios, a sintaxe é a seguinte.

``//Este é un comentario nunha soa liña.``

```/*  

```

## Operadores

Os operadores poden ser de tipo **Numeric, Boolean, String, Assignment** **(*numérico, booleano, cadea e asignación*)**

### Operadores numéricos

Os **operadores numéricos** úsanse no cálculo matemático **`+`(sumar) `-`(restar) `*`(multiplicar) `/`(dividir)** . :eye: O signo **`+`** tamén se usa como concatenación de cadeas(*string*). Os seguintes son exemplos de operadores numéricos:

```js
 var addiction = 5 + 2;
 var subtraction = 6 - 2;
 var multiplication = 8 * 3;
 var division = 4 / 2;
 var increment +=1;
 var decrement -=1; 
```

## Concatenación de cadeas (*strings*)

A concatenación de cadeas úsase cando necesitamos converter o valor de texto de diferentes variables nunha soa variable. Para iso se usa o signo  **`+`**, para concatenar o valor dos textos como segue.

```js
var concatenation = "O ceo é azul " + "con moitas nubes brancas";
var firstName = "Melvin";
var lastName = "Hernandez";
var fullName = firstName + " " + lastName;
document.write(fullName);
```

## Operadores relacionais

Os operadores relacionais utilízanse cando necesitamos tomar unha decisión entre dous valores a partir de certas variables. Para o que usamos **== *(igual)*** ou **!= *(non iguais)***

O seguinte exemplo devolve **`true` *(verdadeiro)*** porque o **prezo** e **inputPrice** non son iguais

```js
var price = 20.5;
var inputPrice = 10.50;
document.write(inputPrice = price );
```

O seguinte exemplo devolve **`false` *(falso)*** porque o **price** e **inputPrice** non son iguais

```js
var price = 20.5;
var inputPrice = 10.50;
document.write(inputPrice == price );
```

## Operadores de comparación

Os operadores de comparación úsanse cando necesitamos comparar valores de números ou valores de cadea, usamos  
**<**  *(menor que)*  
**<=**   *(menor que ou igual)*  

**\>**    *(maior que)*  
**\> =**  *(maior que ou igual)*

O seguinte exemplo compara **num1** con **num2** e **num3** o valor de saída é verdadeiro ou falso dependendo da comparación solicitada.

```javascript
var num1 = 20;  
var num2 = 12;  
var num3 = 20;

document.write(num1 > num2);
document.write(num1 >= num2);
document.write(num1 > num3);
document.write(num1 >= num3);

document.write(num1 < num2);
document.write(num1 <= num2);
document.write(num1 < num3);
document.write(num1 <= num3); 
```

## Operadores lóxicos

Os operadores lóxicos utilízanse cando necesitamos comparar valores entre 2 ou máis valores.  
**&&      *(descrito como "AND")*  
||    *(descrito como "OR")*  
!        *(descrito como "NON")***  

Exemplo de cando utilizar operadores lóxicos pódese facer como segue: Tes unha lista de produtos cos seus respectivos prezos:  
**produto1 = "Mazá", Prezo = 1,99**  
**produto2 = "Mango", Prezo = 1,29**  
**produto3 = "Uva", Prezo = 1,99**  
**produto4 = "Sandía", Prezo = 1,69**  
**produto5 = "Limón", Prezo = 1,39**  

Queres atopar todos os produtos cun prezo de **1,99** e **1,29**, pero non incluir as mazas  o código pódese escribir como segue.

```js
var products = [];
products[0] = ["Apple", 1.99];
products[1] = ["Mango", 1.29];
products[2] = ["Grape", 1.99];
products[3] = ["Watermelon", 1.69];
products[4] = ["Lemon", 1.39];
document.write("<h1>Found products</h1>");
for (var prod in products) {

var productName = products[prod][0];
var productPrice = products[prod][1];
if (productName != "Apple" && productPrice == 1.99 || productPrice == 1.29) {
document.write(productName + " $" + productPrice + "<br>");
}
} 

```

Inda que este era un exemplo para mostrar como usar os **operadores lóxicos**, vemos como se crea un código JavaScript avanzado que inclúe **matriz, bucle, control de fluxo e operadores loxicos**,. Terás que usar **if, else** cando, p.ex., fagas unha comparación.

## Control de fluxo

As instrucións de control de fluxo baséanse en iteracións condicionais de *bucles* -**loop**- e saltos para fóra deses bucles. ~~no exemplo utilizamos operadores lóxicos, usamos control de fluxo, condicional e iteración en bucle.~~

## Declaracións condicionais

A declaración condicional baséase en **if, if/else, switch** usamos esta declaración cando necesitamos cumprir unha condición entre os valores dun bloque de código.

## A declaración if, if/else

A declaración **if, if/else** axúdanos a verificar se se cumpren algúns criterios, se os criterios se cumpren podemos realizar outras accións ou saír do código. A sintaxe da instrución **if, if/else** úsase como segue.

```js
if (condition) {  
// bloque de código a executar se a condición é certa:  
}
```

```js
if (condition) {  
// bloque de código a executar se a condición é verdadeira:  
} else {  
// bloque de código a executar se a condición é falsa  
}
```

O seguinte exemplo executa o bloque de código **if** e devolve a mensaxe **O prezo do produto é alto** .

```js
var price = 99;
if (price > 70) {
document.write("The product price is high");
} else {
document.write("The product price is lower");
} 
```

O seguinte exemplo executa o bloque de código **else** e devolve a mensaxe **O prezo do produto é inferior** .

```js
var price = 99;
if (price < 70) {
document.write("The product price is high.");
} else {
document.write("The product price is lower.");
}
```

## A declaración de cambio - *switch statement*

A instrución switch permíte seleccionar un valor entre moitos resultados posibles do código que queremos analizar. A sintaxe sería algo así:

```js
switch (expression) {

case value1:
value1_Return;
break;
case value2:
value2_Return;
break;
case value3:
value3_Return;
break;
default:
default_value_Return;
break;
} 
```

Podes usar a instrución switch como o seguinte exemplo.

```javascript
var selection = 1;
var answer;
switch (selection) {

case 0:
answer = 'Red';
break;
case 1:
answer = 'Blue';
break;
case 2:
answer = 'Yellow';
break;
case 3:
answer = 'Green';
break;
};
document.write(answer); 
```

Pódese cambiar o valor da variable de **selección** para ver un resultado diferente.

## Loops

Os bucles úsanse para recuperar unha lista de elementos e saír cando se atopa un condicional

## A declaración *while* - mentres

Se a avaliación cumpre a condición de expresión detense e sae do bucle. a sintaxe **while** é a seguinte

```js
while (expression) {
//code to execute
} 
```

O seguinte exemplo mostra como usar a instrución **while** , se a variable **i** é inferior a **10** continúa en bucle, se **i** chega a 10 sairá.

```js
var text = "";
var i = 0;
while (i < 10) {

text += "<br>The number is " + i;
i++;
};
document.write(text); 
```

## A declaración do/while

A instrución **do/while** é case a mesma que **mentres** o diferente é que o **while se** executa primeiro e despois realiza a condición, a sintaxe do/while é a seguinte.

```js
do {
//code to execute
}
while (expression); 
```

O seguinte exemplo mostra como usar a instrución **while** , se a variable **i** é inferior a **10** continúa en bucle, se **i** chega a 10 sairá.

```js
var text = "";
var i = 0;
do {

text += "<br>The number is " + i;
i++;
}
while (i < 10);
document.write(text); 
```

## A declaración *for* - para

A instrución **for** funciona en base a pasos que se recorren nun reconto coñecido de elementos da lista ou desde o número inicial ata o número final, o **for** úsase máis cando precisa obter todos os elementos dunha lista de elementos dunha **matriz** , a sintaxe é a seguinte.

``for (int_start; expresión; incremento){  
//código a executar  
};``

O seguinte exemplo mostra como usar a declaración **for**.

```js
var fruits = ['Apple', 'Melon', 'Mango'];
var text = "";
for (var i = 0; i < fruits.length; i++){

text += fruits[i] + "<br>";
};
document.write(text); 
```

Normalmente podes escribir moitas liñas que queiras.

```js
var write1000lines = "";
for (var i = 0; i <= 1000; i++){

write1000lines += "I don't have to forget my homework <br>";
};
document.write(write1000lines); 
```

## A declaración `for/in`

A instrución **``for/in``** é case a mesma que a instrución **for** , pero **for/in** non require un número de inicio, un número final, un incremento, senón que usa o **in** onde vai para contar o número de elementos que están na **matriz,** a sintaxe é como acompañamento.

```js
for (variable in elements_array) {
//code to execute
}; 
```

O seguinte exemplo mostra como usar a instrución **for/in**

```js
var fruits = ['Apple', 'Melon', 'Mango'];
var text = "";
for (var i in fruits) {

text += fruits[i] + "<br>";
};
document.write(text); 
```

Podes usar o **for/in** para contar letras nunha cadea e obter cada unha á vez.

```js
var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var text = "";
for (var i in abc) {

text += abc[i] + "<br>";
};
document.write(text); 
```

## Obxectos

Os obxectos son unha colección de nomes coñecidos como **Propiedades.** Calquera propiedade pode ter o seu propio tipo de datos, vostede declara o obxecto do mesmo xeito que se declara variables. Os obxectos adoitan facer referencia a un **espazo de nomes** , accede ás propiedades mediante a súa declaración, poden aniñarse noutros obxectos. a sintaxe é a seguinte.

```js
var namespace = {
"oject1":value,
"oject2":value,
"oject3":value,
} 
```

O seguinte exemplo crea un obxecto con propiedades e recuperamos o valor das propiedades.

```js
//Object
var Product = {

"Name":"Apple",
"Price":2.99,
}
//Get product information
document.write(Product.Name +" is priced at "+ Product.Price); 
```

## Obxectos con obxectos aniñados

O seguinte exemplo crea un obxecto e ten un **obxecto aniñado** con propiedades, e recuperamos o valor das propiedades.

```js
//Object
var Product = {

"Name":"Apple",
"Price":2.99,
//Nested object
CannedFruit:{
"UPC":123456789101,
"Description":"Pineapple",
"Price":5.99
}
}
//Get the first product information
document.write(Product.Name +" is priced at "+ Product.Price);

//Get the Canned fruit information
document.write("<br>" + Product.CannedFruit.Description + " with UPC "+ Product.CannedFruit.UPC +" is priced at "+ Product.CannedFruit.Price); 
```

## Obxectos con `arrays`

````js
//Object
var GroceryStore = {

Departments : {
Deli:["Yougurt","Juice","Milk"],
Produce:["Vegetables","Fruits"],
}
}
for(var i in GroceryStore.Departments.Deli){

document.write(GroceryStore.Departments.Deli[i] +"<br><br>");
}
for(var i in GroceryStore.Departments.Produce){

document.write(GroceryStore.Departments.Produce[i] + "<br><br>");
} 
````

## Obxectos con métodos

```js
//Object
var Customer = {

Name:"Melvin",
LastName:"Hernandez",
GetFullName:function(){
return this.Name + " " + this.LastName;
}
}
//Get full name
document.write(Customer.GetFullName()); 
```

## Propiedades dos obxectos dinámicos

Podes engadir propiedades ao obxecto despois de que o obxecto fose declarado, o seguinte exemplo crea un obxecto chamado **Dispositivo** e engadimos 3 propiedades **Nome, Descrición, Tipo**

```js
//Object
var Device = {}

//Add properties with values
Device.Name ="Surface Book 3";
Device.Description = "Silver with 500GB Hard drive";
Device.Type = "Laptop";

//Get property value
document.write("Name: " + Device.Name);
document.write("<br><br>");
document.write("Description: " + Device.Description);
document.write("<br><br>");
document.write("Type: " + Device.Type); 
```

## Construtor de obxectos

O construtor de obxectos créase coa palabra clave **new** , o seguinte exemplo crea un **obxecto Coche** e engadimos propiedades **Marca, Cor, Portas** e un método **GetDescription()** .

```js
//Object
var Car = new Object();
//Add properties
Car.Brand = "Tesla";
Car.Color = "Black";
Car.Doors = 4;
//Add property as method
Car.GetDescription = function(){

return "The " + Car.Brand + " car is color " + Car.Color + " and has "+ Car.Doors + " doors.";
}
//Get the car description by calling the "GetDescription()" method.
document.write(Car.GetDescription()); 
```

```js
//Object
var Car = function(brand, color, doors){

this.Brand = brand;
this.Color = color;
this.Doors = doors;
this.GetDescription = function(){
return "The " + this.Brand + " car is color " + this.Color + " and has "+ this.Doors + " doors.";
}
};

var teslaCar = new Car("Tesla","Red","2");
var bmwCar = new Car("BMW","Blue","4");

document.write(teslaCar.GetDescription());
document.write("<br><br>");
document.write(bmwCar.GetDescription()); 
```

## Arrays

As matrices son listas de elementos indexados por posición numérica. As matrices pódense declarar como segue.

``var froitas = ["Mazá", "melón", "mango"];``

``var froitas = new Array ("Mazá", "Melon", "Mango");``

Podes engadir máis elementos a un **Array** usando o método **push()** como segue

```js
var fruits = ["Apple", "Melon", "Mango"];
//Adds new item to Array
fruits.push("Grape"); 
```

Podes eliminar elementos de **Array** usando o método **splice() do** seguinte xeito

```js
var fruits = ["Apple", "Melon", "Mango"];
// splice syntax splice(remove_item_position, item_count_to_remove)
//Removes "Apple" item from Array
fruits.splice(1,1) 
```

Podes obter máis información sobre Arrays e os seus membros completos en [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Métodos/funcións

As funcións ás veces chámanse métodos, as funcións son útiles e calquera linguaxe de programación a inclúe. As funcións son bloques de código que se executan cando se chama. podes chamar á función que crees desde calquera parte do teu código. A sintaxe é a seguinte.

```js
función functionName(){  
//Bloque de código  
}
```

```js
función functionName(parametro1, parametro2,..){  
//Bloque de código  
}
```

Os seguintes exemplos mostran como usar as funcións

```js
function programmingLanguages(){

document.write("JavaScript, C#, VB.NET");
}
//Call the function
programmingLanguages(); 
```

```js
var prog = function(languages){

return languages;
}
//Call the function;
document.write(prog ("JavaScript, C#, VB.NET")); 
```

as funcións tamén devolven valor

```js
function programmingLanguages(languages){

return languages;
}
//Call the function
document.write(programmingLanguages("JavaScript, C#, VB.NET")); 
```

## cont. (?)

### JavaScript Frameworks

Un ***framework*** ou marco de traballo é basicamente unha biblioteca de código destinada a unha determinada linguaxe. Xeralmente, o marco de traballo abstrae tarefas comúns e fai que os deseñadores e desenvolvedores escriban o seu código específico de xeito máis sinxelo e rápido. Os frameworks non fan nada por si sós, só proporcionan unha plataforma máis sinxela para que as persoas poidan construír.

Marcos JavaScript comúns:

- [JQuery](http://jquery.com/)
- [Prototype](http://www.prototypejs.org/)
- [MooTools](http://mootools.net/)
- [script.aculo.us](http://script.aculo.us/)

Destes frameworks, jQuery é actualmente o máis popular.

NOV 2021
