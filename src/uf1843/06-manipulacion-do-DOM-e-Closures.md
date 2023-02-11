# Manipulación do DOM

[![DOM e un peche](https://github.com/microsoft/Web-Dev-For-Beginners/raw/main/sketchnotes/webdev101-js.png)](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/sketchnotes/webdev101-js.png)

> Sketchnote de [Tomomi Imura](https://twitter.com/girlie_mac)

### Introdución

A manipulación do DOM, ou "Document Object Model", é un aspecto clave do desenvolvemento web. 

Segundo [MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction) , o **"Document Object Model (DOM) é a representación de datos dos obxectos que compoñen a estrutura e o contido dun documento na web"**. Os desafíos en torno á manipulación de DOM na web foron moitas veces o impulso detrás do uso de marcos JavaScript en lugar de vainila JavaScript para xestionar o DOM. Pero os dous metodos seguen sendo viables.

Ademais, esta lección presentará a idea dun [peche de JavaScript](https://developer.mozilla.org/docs/Web/JavaScript/Closures) , que podes considerar como unha función encerrada por outra función para que a función interna teña acceso ao alcance da función externa.

> Os peches de JavaScript son un tema amplo e complexo. Un peche consiste nunha función interna e unha función externa construídas de forma que lle permitan o acceso da función interna ao ámbito da función externa. Para obter máis información sobre como funciona isto, visita a súa [extensa documentación](https://developer.mozilla.org/docs/Web/JavaScript/Closures) .

Pensa no DOM coma unha árbore, que representa todas as formas en que se pode manipular un documento de páxina web. Escribíronse varias API (Interfaces de programas de aplicacións) para que os programadores, utilizando a linguaxe de programación que prefiran, poidan acceder ao DOM e editalo, cambialo, reorganizalo e xestionalo doutro xeito.

[![Representación da árbore DOM](https://github.com/microsoft/Web-Dev-For-Beginners/raw/main/3-terrarium/3-intro-to-DOM-and-closures/images/dom-tree.png)](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/3-terrarium/3-intro-to-DOM-and-closures/images/dom-tree.png)

> Unha representación do DOM e do marcado HTML que fai referencia a el. De [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

### Requisito previo

Deberías ter o HTML e o CSS perfectamente construídos. 

> **Nota:** usa o atributo `defer` ao importar un arquivo Javascript externo no arquivo html para permitir que o Javascript se execute só despois de que todo o HTML estea completamente cargado. Tamén podes usar o atributo `async`, se o que queres é permitir que o script si se execute mentres se analiza o arquivo HTML. Dependendo do cometido e ámbito do script usaríase un ou o outro atributo.

------

## Elementos DOM

O primeiro que debes facer é crear referencias aos elementos que queres manipular no DOM. 

Despois de identificar cada elemento, se lle pasa ese elemento a unha función. Así, o elemento HTML queda a disposición da linguaxe de guión para realizar nel as manipulacións que queiras.



## As funcións elementDrag e stopElementDrag

Completarás o teu peche engadindo dúas funcións internas máis que xestionarán o que ocorre cando arrastras unha planta e deixas de arrastrala. O comportamento que queres é que podes arrastrar calquera planta en calquera momento e colocala en calquera lugar da pantalla. Esta interface non ten opinións (por exemplo, non hai unha zona de caída) para permitirche deseñar o teu terrario exactamente como lle gusta engadindo, eliminando e reposicionando plantas.

> `offsetTop`e `offsetLeft`son propiedades CSS que definen a posición dun elemento en función da do seu pai; o seu pai pode ser calquera elemento que non estea situado como `static`.

[![terrario acabado](https://github.com/microsoft/Web-Dev-For-Beginners/raw/main/3-terrarium/3-intro-to-DOM-and-closures/images/terrarium-final.png)](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/3-terrarium/3-intro-to-DOM-and-closures/images/terrarium-final.png)

------

Atopa máis información sobre eventos de punteiro nos [documentos](https://www.w3.org/TR/pointerevents1/) do [W3C](https://www.w3.org/TR/pointerevents1/) e nos [documentos web de MDN](https://developer.mozilla.org/docs/Web/API/Pointer_events) .

Comprobe sempre as capacidades do navegador usando [CanIUse.com](https://caniuse.com/) .





OUT 2021