<!-- D:\odin\complete\11. The Document Object Model (DOM)

https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/A_first_splash :star:

[JavaScript Countdown Timer - Build a Countdown Timer from Scratch (javascripttutorial.net)](https://www.javascripttutorial.net/javascript-dom/javascript-countdown-timer/) :star:

[40 JavaScript Projects for Beginners – Easy Ideas to Get Started Coding JS (freecodecamp.org)](https://www.freecodecamp.org/news/javascript-projects-for-beginners/)

[Top 50 Javascript Projects For Beginners With Source Code | by JavaScript projects for beginners | Medium](https://medium.com/@tanoydadu/top-50-javascript-projects-for-beginners-with-source-code-351b54b88e3d)

[Practical Code Examples using JavaScript (guru99.com)](https://www.guru99.com/practical-code-examples-using-javascript.html)

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide

https://eloquentjavascript.net/14_dom.html

https://www.simplilearn.com/tutorials/javascript-tutorial/javascript-examples

[Simple Typing Carousel (codepen.io)](https://codepen.io/nunhes/pen/NoXwqr)

[dangconnie/movie-app: A movie app made with HTML, CSS, Javascript, jQuery and Bootstrap using API calls from The Movie Database (github.com)](https://github.com/dangconnie/movie-app)

-->
# O DOM, o código que amosa o navegador

O navegador crea un modelo da estrutura do documento e utiliza este modelo para debuxar a páxina na pantalla.

Esta representación do documento é un dos xoguetes que un programa JavaScript ten dispoñible no seu sandbox. É unha estrutura de datos que podes ler ou modificar. Actúa como unha estrutura de datos *en directo* : cando se modifica, a páxina da pantalla actualízase para reflectir os cambios.

## Estrutura do documento

Podes imaxinar un documento HTML como un conxunto anidado de caixas. Etiquetas como `<body>`e `</body>`inclúen outras etiquetas, que á súa vez conteñen outras etiquetas ou texto. Aquí está o documento de exemplo do [capítulo anterior](https://eloquentjavascript.net/13_browser.html) :

```html
<!doctype html> 
<html> 
  <head> 
    <title> A miña páxina de inicio </title> 
  </head> 
  <body> 
    <h1> A miña páxina de inicio </h1> 
    <p> Ola, son Marijn e esta é a miña páxina de inicio. </p> 
    <p> Eu tamén escribín un libro! Léao
       <a  href = "http://eloquentjavascript.net"> aquí <. </p> 
  </body> 
</html>
```

<!-- Esta páxina ten a seguinte estrutura:

![Documento HTML como caixas anidadas](./assets/html-boxes.svg)-->

A estrutura de datos que usa o navegador para representar o documento segue esta forma. Para cada caixa, hai un obxecto, co que podemos interactuar para descubrir cousas como que etiqueta HTML representa e que caixas e texto contén. Esta representación chámase *Modelo* de obxectos de documento ou DOM para abreviar.

A vinculación global `document`dános acceso a estes obxectos. A súa `documentElement`propiedade refírese ao obxecto que representa a `<html>`etiqueta. Dado que cada documento HTML ten un encabezado e un corpo, tamén ten `head`e `body`propiedades, apuntando a eses elementos.

---

<!--Outra forma de visualizar a nosa árbore de documentos é a seguinte:

![Documento HTML como árbore](./assets/html-tree.svg)-->

Os nós DOM conteñen unha gran cantidade de ligazóns a outros nós próximos.<!-- O seguinte diagrama ilustra isto: ![Ligazóns entre nodos DOM](./assets/html-links.svg) -->

Aínda que o diagrama mostra só unha ligazón de cada tipo, cada nodo ten unha propiedade `parentNode` que apunta ao nodo do que forma parte, se é o caso. Do mesmo xeito, cada nodo de elementos (tipo de nodo 1) ten unha propiedade `childNodes` que apunta a un obxecto tipo matriz que mantén os seus fillos.

En teoría, podes moverte a calquera parte da árbore usando só estas ligazóns para pais e fillos. Pero JavaScript tamén che dá acceso a unha serie de ligazóns de conveniencia adicionais. As propiedades `firstChild`e `lastChild` apuntan ao primeiro e último elementos fillos ou teñen o valor `null`para nodos sen fillos. Do mesmo xeito, `previousSibling` e `nextSibling`apunta a nós adxacentes, que son nós co mesmo pai que aparecen inmediatamente antes ou despois do propio nodo. Para un primeiro fillo, `previousSibling` será nulo, e para o último fillo, `nextSibling` será nulo

<!-- https://skillcrush.com/blog/projects-you-can-do-with-javascript/ -->