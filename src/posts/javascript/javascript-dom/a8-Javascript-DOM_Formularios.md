---
title: Javascript DOM - Formularios
date: 2023-11-08
description: Uso de javascript na arbore do modelo de obxecto do documento
---

# Formulario JavaScript

**Resumo** : neste tutorial, aprenderá sobre a API do formulario JavaScript: acceder ao formulario, obter valores dos elementos, validar os datos do formulario e enviar o formulario.

## Conceptos básicos do formulario

Para crear un formulario en HTML, usa o `<form>`elemento:

```
<form action="/signup" method="post" id="signup">
</form>
```

O `<form>`elemento ten dous atributos importantes: `action`e `method`.

- O `action`atributo especifica un URL que procesará o envío do formulario. Neste exemplo, a acción é o `/signup`URL.
- O `method`atributo especifica o método HTTP co que enviar o formulario. Normalmente, o método é `post`ou `get`.

Xeralmente, úsase o `get`método cando quere recuperar datos do servidor e o `post`método cando quere cambiar os datos do servidor.

JavaScript usa o `HTMLFormElement`obxecto para representar un formulario. Ten `HTMLFormElement`as seguintes propiedades que se corresponden cos atributos HTML:

- `action`– é o URL que procesa os datos do formulario. É equivalente ao `action`atributo do `<form>`elemento.
- `method`– é o método HTTP que é equivalente ao `method`atributo do `<form>`elemento.

O `HTMLFormElement`elemento tamén ofrece os seguintes métodos útiles:

- `submit()`- enviar o formulario.
- `reset()`- restablecer o formulario.

## Formularios de referencia

Para facer referencia ao `<form>`elemento, pode usar métodos de selección DOM como `getElementById()`:

```
const form = document.getElementById('subscribe');
```

Un documento HTML pode ter varios formularios. A `document.forms`propiedade devolve unha colección de formularios ( `HTMLFormControlsCollection`) no documento:

```
document.forms
```

Para facer referencia a un formulario, usa un índice. Por exemplo, a seguinte instrución devolve a primeira forma do documento HTML:

```
document.forms[0]Idioma do código:  CSS  ( css )
```

## Envío dun formulario

Normalmente, un formulario ten un botón de envío. Cando fai clic nel, o navegador envía os datos do formulario ao servidor. Para crear un botón de envío, usa `<input>`ou `<button>`elemento co tipo `submit`:

```
<input type="submit" value="Subscribe">
```

Ou

```
<button type="submit">Subscribe</button>
```

Se o botón enviar ten foco e premes a `Enter`tecla, o navegador tamén envía os datos do formulario.

Cando envía o formulario, o `submit`evento desenvólvese antes de enviar a solicitude ao servidor. Isto dálle a oportunidade de validar os datos do formulario. Se os datos do formulario non son válidos, podes deixar de enviar o formulario.

Para anexar un detector de eventos ao `submit`evento, utiliza o `addEventListener()`método do elemento de formulario do seguinte xeito:

```
const form  = document.getElementById('signup');

form.addEventListener('submit', (event) => {
    // handle the form data
});
```

Para evitar que o formulario se envíe, chama ao `preventDefault()`método do `event`obxecto dentro do `submit`controlador de eventos deste xeito:

```
form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
});Idioma do código:  PHP  ( php )
```

Normalmente, chama ao `event.preventDefault()`método se os datos do formulario non son válidos. Para enviar o formulario en JavaScript, chama ao `submit()`método do obxecto do formulario:

```
form.submit();Idioma do código:  CSS  ( css )
```

Teña en conta que `form.submit()`non dispara o `submit`evento. Polo tanto, sempre debes [validar o formulario](https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/) antes de chamar a este método.

## Acceso aos campos do formulario

Para acceder aos campos do formulario, pode usar métodos DOM como `getElementsByName()`, `getElementById()`, `querySelector()`, etc.

Ademais, pode usar a `elements`propiedade do `form`obxecto. A `form.elements`propiedade almacena unha colección de elementos do formulario.

JavaScript permítelle acceder a un elemento por índice, ID ou nome. Supoña que tes o seguinte formulario de rexistro con dous `<input>`elementos:

```
<form action="signup.html" method="post" id="signup">
	<h1>Sign Up</h1>
	<div class="field">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" placeholder="Enter your fullname" />
		<small></small>
	</div>
	<div class="field">
		<label for="email">Email:</label>
		<input type="text" id="email" name="email" placeholder="Enter your email address" />
		<small></small>
	</div>
	<button type="submit">Subscribe</button>
</form>

```

Para acceder aos elementos do formulario, primeiro obtén o elemento do formulario:

```
const form = document.getElementById('signup');
```

E usa índice, id ou nome para acceder ao elemento. O seguinte accede ao primeiro elemento do formulario:

```
form.elements[0]; // by index
form.elements['name']; // by name
form.elements['name']; // by id (name & id are the same in this case)
```

O seguinte accede ao segundo elemento de entrada:

```
form.elements[1]; // by index
form.elements['email']; //  by name
form.elements['email']; // by id
```

Despois de acceder a un campo de formulario, pode usar a `value`propiedade para acceder ao seu valor, por exemplo:

```
const form = document.getElementById('signup');
const name = form.elements['name'];
const email = form.elements['email'];

// getting the element's value
let fullName = name.value;
let emailAddress = email.value;
```

## Xúntalo todo: formulario de inscrición

O seguinte ilustra o documento HTML que ten un formulario de rexistro. [Consulta aquí a demostración en directo](https://www.javascripttutorial.net/sample/dom/form/signup.html) .

<iframe src="https://www.javascripttutorial.net/sample/dom/form/signup.html" width="500px" height="400px" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>JavaScript Form Demo</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="css/style.css" />
	</head>
	<body>
		<div class="container">
			<form action="signup.html" method="post" id="signup">
				<h1>Sign Up</h1>
				<div class="field">
					<label for="name">Name:</label>
					<input type="text" id="name" name="name" placeholder="Enter your fullname" />
					<small></small>
				</div>
				<div class="field">
					<label for="email">Email:</label>
					<input type="text" id="email" name="email" placeholder="Enter your email address" />
					<small></small>
				</div>
				<div class="field">
					<button type="submit" class="full">Subscribe</button>
				</div>
			</form>
		</div>
		<script src="js/app.js"></script>
	</body>
</html>

```

O documento HTML fai referencia aos ficheiros `style.css`e `app.js`. Usa o `<small>`elemento para mostrar unha mensaxe de erro no caso de que o `<input>`elemento teña datos non válidos.

O envío do formulario sen proporcionar ningunha información dará lugar ao seguinte erro:

[![img](https://www.javascripttutorial.net/wp-content/uploads/2021/07/JavaScript-Form-Example.png)](https://www.javascripttutorial.net/wp-content/uploads/2021/07/JavaScript-Form-Example.png)

O envío do formulario co nome pero o formato de enderezo de correo electrónico non é válido producirá o seguinte erro:

[![img](https://www.javascripttutorial.net/wp-content/uploads/2021/07/JavaScript-Form-validate-email-address.png)](https://www.javascripttutorial.net/wp-content/uploads/2021/07/JavaScript-Form-validate-email-address.png)

O seguinte mostra o `app.js`ficheiro completo:

```
// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (nameValid && emailValid) {
		alert("Demo only. No form was posted.");
	}
});


```

Cómo funciona.

### A función showMessage().

A `showMessage()`función acepta un elemento de entrada, unha mensaxe e un tipo:

```
// show a message with a type of the input
function showMessage(input, message, type) {
	// get the <small> element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}
```

O seguinte mostra o campo de entrada de nome no formulario:

```
<div class="field">
	<label for="name">Name:</label>
	<input type="text" id="name" name="name" placeholder="Enter your fullname" />
	<small></small>
</div>
```

Se o valor do nome está en branco, primeiro debes obter o seu pai, que é o `<div>`coa clase "campo".

```
input.parentNodeIdioma do código:  CSS  ( css )
```

A continuación, cómpre seleccionar o `<small>`elemento:

```
const msg = input.parentNode.querySelector("small");
```

A continuación, actualiza a mensaxe:

```
msg.innerText = message;
```

Despois diso, cambiamos a clase CSS do campo de entrada en función do valor do parámetro tipo. Se o tipo é verdadeiro, cambiamos a clase da entrada a éxito. En caso contrario, cambiamos a clase a erro.

```
input.className = type ? "success" : "error";
```

Finalmente, devolve o valor do tipo:

```
return type;
```

### As funcións showError() e showSuccess().

As funcións `showError()`e `showSuccess()`chaman á `showMessage()`función. A `showError()`función sempre devolve `false`mentres que a `showSuccess()`función sempre devolve `true`. Ademais, a `showSuccess()`función establece a mensaxe de erro nunha cadea baleira.

```
function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}
```

### A función hasValue().

A `hasValue()`función comproba se un elemento de entrada ten un valor ou non e mostra unha mensaxe de erro usando a función `showError()`ou en consecuencia:`showSuccess()`

```
function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}
```

### A función validateEmail().

A `validateEmail()`función valida se un campo de correo electrónico contén un enderezo de correo electrónico válido:

```
function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}Idioma do código:  PHP  ( php )
```

A `validateEmail()`función chama á `hasValue()`función para comprobar se o valor do campo está baleiro. Se o campo de entrada está baleiro, mostra o `requiredMsg`.

Para validar o correo electrónico, usa unha [expresión regular](https://www.javascripttutorial.net/javascript-regular-expression/) . Se o correo electrónico non é válido, a `validateEmail()`función mostra o `invalidMsg`.

### O controlador de eventos de envío

En primeiro lugar, selecciona o formulario de inscrición polo seu ID usando o `querySelector()`método:

```
const form = document.querySelector("#signup");
```

En segundo lugar, define algunhas constantes para almacenar as mensaxes de erro:

```
const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";
```

En terceiro lugar, engade o `submit`escoitador de eventos do formulario de rexistro mediante o `addEventListener()`método:

```
form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (nameValid && emailValid) {
		alert("Demo only. No form was posted.");
	}
});

```

No manejador de eventos de envío:

1. Detén o envío do formulario chamando ao `event.preventDefault()`método.
2. Valide os campos de nome e correo electrónico mediante as funcións `hasValue()`e `validateEmail()`.
3. Se o nome e o correo electrónico son válidos, mostra unha alerta. Nunha aplicación do mundo real, cómpre chamar ao `form.submit()`método para enviar o formulario.

## Resumo

- Use o `<form>`elemento para crear un formulario HTML.
- Use métodos DOM como `getElementById()`e `querySelector()`para seleccionar un `<form>`elemento. Tamén `document.forms[index]`devolve o elemento do formulario mediante un índice numérico.
- Use `form.elements`para acceder a elementos do formulario.
- O `submit`evento desenvólvese cando os usuarios fan clic no botón Enviar no formulario.

# Caixa de verificación de JavaScript

**Resumo** : neste tutorial, aprenderás a usar JavaScript para probar se unha caixa de verificación está marcada, obter os valores das caixas de verificación seleccionadas e seleccionar/desmarcar todas as caixas de verificación.

## Creando unha caixa de verificación HTML

Para crear unha caixa de verificación, use o `<input>`elemento co `type`de `checkbox`como segue:

```
<input type="checkbox" id="accept"> Accept
```

É unha boa práctica asociar sempre unha caixa de verificación cunha etiqueta para mellorar a usabilidade e a accesibilidade. Ao facelo, ao facer clic na etiqueta tamén se marca ou desmarca a caixa de verificación.

```
<label for="accept">
   <input type="checkbox" id="accept" name="accept" value="yes">  Accept
</label>
```

Ou:

```
<input type="checkbox" id="accept" name="accept" value="yes">
<label for="accept"> Accept </label>
```

Teña en conta que o valor do atributo for da etiqueta debe coincidir co id da caixa de verificación.

O seguinte funciona pero é unha mala práctica, polo que debes evitalo:

```
<input type="checkbox" id="accept" name="accept" value="yes"> Accept
```

## Comprobando se unha caixa de verificación está marcada

Unha caixa de verificación ten dous estados: marcada e desmarcada.

Para obter o estado dunha caixa de verificación, siga estes pasos:

- En primeiro lugar, seleccione a caixa de verificación mediante un método DOM como `getElementById()`ou `querySelector()`.
- A continuación, acceda á `checked`propiedade do elemento da caixa de verificación. Se a súa `checked`propiedade é `true`, entón a caixa de verificación está marcada; se non, non o é.

Vexa o seguinte exemplo:

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Checkbox</title>
</head>
<body>
    <label for="accept">
        <input type="checkbox" id="accept" name="accept" value="yes"> Accept
    </label>

    <script>
        const cb = document.querySelector('#accept');
        console.log(cb.checked); // false
    </script>

</body>

</html>
```

Neste exemplo:

En primeiro lugar, cree o elemento da caixa de verificación HTML:

```
<label for="accept">
   <input type="checkbox" id="accept" name="accept" value="yes"> Accept
</label>
```

En segundo lugar, seleccione a caixa de verificación con id `#accept`e examine a `checked`propiedade:

```
const cb = document.querySelector('#accept');
console.log(cb.checked);
```

Como a caixa de verificación está desmarcada, verás `false`na consola:

```
false
```

Considere outro exemplo:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Checkbox</title>
</head>

<body>
    <label for="accept">
        <input type="checkbox" id="accept" name="accept" value="yes"> Accept
    </label>

    <script>
        const checked = document.querySelector('#accept:checked') !== null;
        console.log(checked); // false
    </script>

</body>
</html>
```

Neste exemplo, o selector `#accept:checked`selecciona o elemento co id `#accept`e ten o atributo `checked`. Por exemplo, coincide co seguinte elemento:

```
<input type="checkbox" id="accept" checked> Accept
```

Pero non este:

```
<input type="checkbox" id="accept"> Accept
```

Polo tanto, se o elemento da caixa de verificación co id `#accept`está marcado, o `document.querySelector()`devolverá. Na xanela da consola, verás o valor `false`porque a caixa de verificación está desmarcada:

```
false
```

## Obtención de valores de caixa de verificación

A páxina seguinte mostra unha caixa de verificación e un botón. Cando fas clic no botón, verás o valor da caixa de verificación na xanela da consola:

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Checkbox</title>
</head>

<body>
    <label for="accept">
        <input type="checkbox" id="accept" name="accept"> Accept
    </label>

    <button id="btn">Submit</button>
    <script>
        const cb = document.querySelector('#accept');
        const btn = document.querySelector('#btn');
        btn.onclick = () => {
           alert(cb.value);
        };
    </script>
</body>

</html>
```

Cando obtén o `value`atributo dunha caixa de verificación, sempre obtén a `'on'`cadea se a caixa de verificación está marcada ou non.

<iframe height="100px" src="https://www.javascripttutorial.net/sample/dom/checkbox/checkbox.html" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>

## Obtención de valores de varias caixas de verificación seleccionadas

A páxina seguinte mostra tres caixas de verificación. Se selecciona unha ou máis caixas de verificación e fai clic no botón, mostrará os valores da caixa de verificación seleccionada:

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Checkboxes</title>
</head>

<body>
    <p>Select your favorite colors:</p>
    <label for="c1"> <input type="checkbox" name="color" value="red" id="c1">Red</label>
    <label for="c2"><input type="checkbox" name="color" value="green" id="c2"> Green</label>
    <label for="c3"><input type="checkbox" name="color" value="blue" id="c3">Blue</label>
    <p>
        <button id="btn">Get Selected Colors</button>
    </p>

    <script>
        const btn = document.querySelector('#btn');
        btn.addEventListener('click', (event) => {
            let checkboxes = document.querySelectorAll('input[name="color"]:checked');
            let values = [];
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.value);
            });
            alert(values);
        });
    </script>

</body>

</html>
```

Cómo funciona.

No HTML, creamos tres elementos de caixa de verificación co mesmo nome (cor) pero con valores distintos:

```
<label for="c1"><input type="checkbox" name="color" value="red" id="c1">Red</label>
<label for="c2"><input type="checkbox" name="color" value="green" id="c2">Green</label>
<label for="c3"><input type="checkbox" name="color" value="blue" id="c3">Blue</label>
```

No JavaScript:

Primeiro, engade o controlador de eventos de clic ao botón:

```
const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
   // ...
});
```

En segundo lugar, seleccione as caixas de verificación seleccionadas usando o `document.querySelectorAll()`método dentro do controlador de eventos de clic:

```
let checkboxes = document.querySelectorAll('input[name="color"]:checked');
```

En terceiro lugar, empurra os valores das caixas de verificación seleccionadas a unha matriz:

```
let values = [];
checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
});

alert(values);
```

Demostración:

<iframe src="https://www.javascripttutorial.net/sample/dom/checkbox/checkboxes.html" height="250px" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>

## Marque / Desmarque todas as caixas de verificación

A páxina seguinte ten tres caixas de verificación e un botón. Cando fas clic no botón, se as caixas de verificación están marcadas, desmarcaranse e viceversa:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Check/uncheck checkboxes</title>
</head>
<body>
    <p>
        <button id="btn">Check / Uncheck All</button>
    </p>
    <label for="c1"><input type="checkbox" name="color" value="red" id="c1"> Red</label>
    <label for="c2"><input type="checkbox" name="color" value="green" id="c2"> Green</label>
    <label for="c3"> <input type="checkbox" name="color" value="blue" id="c3">Blue</label>

    <script>
        function check(checked = true) {
            const checkboxes = document.querySelectorAll('input[name="color"]');
            checkboxes.forEach((checkbox) => {
                checkbox.checked = checked;
            });
        }

        function checkAll() {
            select();
            this.onclick = uncheckAll;
        }

        function uncheckAll() {
            select(false);
            this.onclick = checkAll;
        }

        const btn = document.querySelector('#btn');
        btn.onclick = checkAll;
    </script>

</body>
</html>
```

Cómo funciona:

En primeiro lugar, define a `check()`función que marca ou desmarca todas as caixas de verificación co nome `"color"`:

```
function check(checked = true) {
  const checkboxes = document.querySelectorAll('input[name="color"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = checked;
  });
}
```

Cando fai clic no botón, marcou todas as caixas de verificación. E. Se fai clic de novo no botón, debería desmarcar todas as caixas de verificación. Para facer este cambio, cómpre reasignar o controlador de eventos de clic sempre que se desencadee o evento de clic.

En segundo lugar, selecciona o `#btn`botón e asigna a `checkAll()`función á `onclick`propiedade do botón:

```
const btn = document.querySelector('#btn');
btn.onclick = checkAll;
```

En terceiro lugar, define a `checkAll()`función que marca todas as caixas de verificación:

```
function checkAll() {
  check();
  this.onclick = uncheckAll;
}

```

Finalmente, define a `uncheckAll()`función que desmarca todas as caixas de verificación:

```
function uncheckAll() {
  check(false);
  this.onclick = checkAll;
}
```

Demostración:

<iframe height="250px" src="https://www.javascripttutorial.net/sample/dom/checkbox/checkall.html" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>

## Creando caixas de verificación de forma dinámica

O seguinte exemplo mostra como crear caixas de verificación dinámicamente usando JavaScript:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Checkboxes</title>
</head>
<body>
    <div id="root"></div>
    <script>
        const colors = ["Red","Green","Blue"];
        colors.forEach((color)=>{
            //  generate id
            const id = `color-${color}`;

            // create a label
            const label = document.createElement('label');
            label.setAttribute("for", id);

            // create a checkbox
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "color";
            checkbox.value = color;
            checkbox.id = id;

            // place the checkbox inside a label
            label.appendChild(checkbox);
            // create text node
            label.appendChild(document.createTextNode(color));
            // add the label to the root
            document.querySelector("#root").appendChild(label);
        });
    </script>
</body>
</html>
```

Saída:

```
<div class="output-cont"><div class="output">
<iframe height="250px" src="https://www.javascripttutorial.net/sample/dom/checkbox/checkbox-dynamic.html"></iframe>
</div></div>
```

Cómo funciona.

En primeiro lugar, define unha matriz que consta de tres cadeas. Na práctica, pode ter a matriz que vén do resultado dunha chamada á API:

```
const colors = ["Red","Green","Blue"];
```

En segundo lugar, itera sobre os elementos da matriz e:

1. Xera un ID único para cada caixa de verificación:

```
const id = `color-${color}`;
```

2. Cree unha etiqueta e asigne o id ao atributo for:

```
const label = document.createElement('label');
label.setAttribute("for", id);
```

3. Crea unha caixa de verificación:

```
const checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "color";
checkbox.value = color;
checkbox.id = id;
```

4. Coloque a caixa de verificación dentro da etiqueta:

```
label.appendChild(checkbox);Idioma do código:  CSS  ( css )
```

5. Crea un nodo de texto e engádeo á etiqueta:

```
label.appendChild(document.createTextNode(color));Idioma do código:  CSS  ( css )
```

6. Engade a etiqueta ao elemento raíz:

```
 document.querySelector("#root").appendChild(label);Idioma do código:  CSS  ( css )
```

O seguinte exemplo tamén xera caixas de verificación dinámicamente como o exemplo anterior:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Checkboxes</title>
</head>
<body>
    <div id="root"></div>
    <script>
        const colors = ["Red","Green","Blue"];
        const html = colors.map(color => `<label for="color-${color}">
                <input type="checkbox" name="color" id="color-${color}" value="${color}"> ${color}
            </label>`
        ).join(' ');
       document.querySelector("#root").innerHTML = html;
    </script>
</body>
</html>
```

Neste exemplo:

- En primeiro lugar, xera unha etiqueta e un elemento de caixa de verificación utilizando o `map()`método Array e [os literales de modelo](https://www.javascripttutorial.net/es6/javascript-template-literals/) .
- En segundo lugar, une as cadeas HTML nun único HTML usando o `join()`método String.
- En terceiro lugar, engade o HTML ao `#root`elemento.

## Resumo

- Use o `<input>`elemento co tipo `checkbox`para crear un elemento de caixa de verificación.
- Coloque unha caixa de verificación dentro dun elemento de etiqueta para mellorar a usabilidade e a accesibilidade.
- Use `checkbox.checked`a propiedade ou `:check`o selector para probar se unha caixa de verificación está marcada.
- Obter o `value`atributo para obter o valor dunha caixa de verificación.

# Botón de radio JavaScript

**Resumo** : neste tutorial aprenderás a usar JavaScript para comprobar que botón de radio dun grupo de radio está marcado.

## Introdución ao botón de radio JavaScript

Os botóns de opción permítenche seleccionar só unha dun conxunto predefinido de opcións mutuamente excluíntes. Para crear un botón de opción, usa o `<input>`elemento co tipo `radio`. Un grupo de botóns de opción chámase grupo de radio.

Para formar un grupo de radio, usa un nome común para todos os botóns de radio. Por exemplo:

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Radio Button</title>
</head>

<body>
    <p>Select your size:</p>
    <div>
        <input type="radio" name="size" value="XS" id="xs">
        <label for="xs">XS</label>
    </div>
    <div>
        <input type="radio" name="size" value="S" id="s">
        <label for="s">S</label>
    </div>
    <div>
        <input type="radio" name="size" value="M" id="m">
        <label for="m">M</label>
    </div>
    <div>
        <input type="radio" name="size" value="L" id="l">
        <label for="l">L</label>
    </div>
    <div>
        <input type="radio" name="size" value="XL" id="xl">
        <label for="xl">XL</label>
    </div>
    <div>
        <input type="radio" name="size" value="XXL" id="xxl">
        <label for="xxl">XXL</label>
    </div>
</body>
</html>
```

Neste exemplo, todos os botóns de opción teñen o mesmo tamaño de nome pero valores diferentes. Por iso, só pode seleccionar un botón de opción á vez.

Para atopar o botón de opción seleccionado, siga estes pasos:

- Seleccione todos os botóns de opción usando un método DOM como `querySelectorAll()`o método.
- Obter a `checked`propiedade do botón de opción. Se a `checked`propiedade é `true`, o botón de opción está marcado; en caso contrario, está desmarcado.

Para saber que botón de opción está marcado, usa o `value`atributo. Por exemplo:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Radio Button</title>
</head>
<body>
    <p>Select your size:</p>
    <div>
        <input type="radio" name="size" value="XS" id="xs">
        <label for="xs">XS</label>
    </div>
    <div>
        <input type="radio" name="size" value="S" id="s">
        <label for="s">S</label>
    </div>
    <div>
        <input type="radio" name="size" value="M" id="m">
        <label for="m">M</label>
    </div>
    <div>
        <input type="radio" name="size" value="L" id="l">
        <label for="l">L</label>
    </div>
    <div>
        <input type="radio" name="size" value="XL" id="xl">
        <label for="xl">XL</label>
    </div>
    <div>
        <input type="radio" name="size" value="XXL" id="xxl">
        <label for="xxl">XXL</label>
    </div>
    <p>
        <button id="btn">Show Selected Value</button>
    </p>

    <p id="output"></p>

    <script>
        const btn = document.querySelector('#btn');
        const radioButtons = document.querySelectorAll('input[name="size"]');
        btn.addEventListener("click", () => {
            let selectedSize;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedSize = radioButton.value;
                    break;
                }
            }
            // show the output:
            output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
        });
    </script>
</body>
</html>
```

<iframe src="https://www.javascripttutorial.net/sample/dom/radiobutton/radiobutton.html" height="300" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>

Cómo funciona.

En primeiro lugar, selecciona o botón con `#btn`id, o elemento de saída co `#output`id e todos os botóns de opción co nome `size`:

```
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');

const radioButtons = document.querySelectorAll('input[name="size"]');

```

En segundo lugar, rexistra un oínte de eventos de clic no elemento botón:

```
btn.addEventListener('click', () => {
});Idioma do código:  PHP  ( php )
```

En terceiro lugar, itera sobre os botóns de opción e obtén o valor do botón de opción seleccionado:

```
let selectedSize;
for (const radioButton of radioButtons) {
  if (radioButton.checked) {
    selectedSize = radioButton.value;
    break;
  }
}
```

Se se marca un botón de opción, a súa `checked`propiedade é `true`. Despois, asignamos o `value`botón de opción seleccionado á `selectedSize`variable.

Dado que só se pode comprobar un botón de radio nun grupo de radio á vez, o bucle termina inmediatamente pola `break`instrución.

Finalmente, configure a mensaxe para o elemento de saída:

```
 output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
```

## Evento de cambio do botón de radio

Cando marcas ou desmarcas un botón de opción, activa o evento de cambio. Para escoitar o evento de cambio, usa o método addEventListener() deste xeito:

```
radioButton.addEventListener('change',function(e){

});
```

Dentro do controlador de eventos de cambio, pode acceder á `this`palabra clave para acceder ao botón de opción. Para comprobar se o botón de opción está marcado, pode usar a propiedade marcada:

```
if(this.checked) {
  //
}
```

Para obter o valor do botón marcado, usa a propiedade value:

```
if(this.checked) {
    console.log(this.value);
}
```

Quedará así:

```
radioButton.addEventListener('change', function (e) {
  if (this.checked) {
    console.log(this.value);
  }
});
```

O seguinte exemplo xera dinámicamente un grupo de radio e mostra o valor seleccionado cando se marca un botón de radio:

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Radio Button</title>
</head>

<body>
    <p>Select your size:</p>
    <div id="group">
    </div>

    <p id="output"></p>

    <script>
        const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

        // generate the radio groups
        const group = document.querySelector("#group");
        group.innerHTML = sizes.map((size) => `<div>
                <input type="radio" name="size" value="${size}" id="${size}">
                 <label for="${size}">${size}</label>
            </div>`).join(' ');

        // add an event listener for the change event
        const radioButtons = document.querySelectorAll('input[name="size"]');
        for(const radioButton of radioButtons){
            radioButton.addEventListener('change', showSelected);
        }

        function showSelected(e) {
            console.log(e);
            if (this.checked) {
                document.querySelector('#output').innerText = `You selected ${this.value}`;
            }
        }
    </script>
</body>

</html>
```

<iframe src="https://www.javascripttutorial.net/sample/dom/radiobutton/radiobutton-change.html" height="300" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>

Cómo funciona.

En primeiro lugar, define unha matriz de cadeas que conteñan os tamaños. Na práctica, pode obter estes valores dunha base de datos no back-end ou do resultado dunha chamada á API:

```
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
```

En segundo lugar, xera os grupos de radio a partir dos elementos da matriz de tamaños:

```
const group = document.querySelector('#group');
group.innerHTML = sizes
  .map(
    (size) => `<div>
                <input type="radio" name="size" value="${size}" id="${size}">
                 <label for="${size}">${size}</label>
            </div>`
  )
  .join(' ');

```

Neste código:

1. Seleccione o elemento con id #group.
2. Xera un grupo de radio usando o método map() con literal de modelo; cada elemento da matriz corresponde a un botón de opción HTML.
3. Unir cadeas HTML do botón de opción nunha cadea HTML usando o método join().
4. Asigne o HTML ao HTML interno do elemento de saída.

En terceiro lugar, selecciona todos os botóns de opción co tamaño do nome e engade o escoitador de eventos de cambio:

```
const radioButtons = document.querySelectorAll('input[name="size"]');
for (const radioButton of radioButtons) {
  radioButton.addEventListener('change', showSelected);
}
```

Finalmente, defina o controlador de eventos de cambio:

```
function showSelected(e) {
  if (this.checked) {
    document.querySelector('#output').innerText = `You selected ${this.value}`;
  }
}
```

## Resumo

- Use o `<input>`elemento co tipo `radio`para crear un botón de opción.
- Asigne un nome a varios botóns de opción para formar un grupo de radio. Só se pode seleccionar un botón de opción do grupo.
- Se o botón de opción está seleccionado, a súa `checked`propiedade é `true`.

# Elemento de selección de JavaScript

**Resumo** : neste tutorial aprenderás a manexar o `<select>`elemento en JavaScript.

## Introdución aos elementos de selección HTML

Un `<select>`elemento ofrécelle unha lista de opcións. Un `<select>`elemento permítelle seleccionar unha ou varias opcións.

Para crear un `<select>`elemento, usa os elementos `<select>`e `<option>`. Por exemplo:

```
<select id="framework">
    <option value="1">Angular</option>
    <option value="2">React</option>
    <option value="3">Vue.js</option>
    <option value="4">Ember.js</option>
</select>
```

AngularReaccionarVue.jsEmber.js

O `<select>`elemento anterior permítelle seleccionar unha única opción á vez.

Para activar varias seleccións, engade un `multiple`atributo ao `<select>`elemento do seguinte xeito:

```
<select id="framework" multiple>
    <option value="1">Angular</option>
    <option value="2">React</option>
    <option value="3">Vue.js</option>
    <option value="4">Ember.js</option>
</select>
```

AngularReaccionarVue.jsEmber.js

## O `HTMLSelectElement`tipo

Para interactuar co `<select>`elemento en JavaScript, usa o `HTMLSelectElement`tipo.

O `HTMLSelectElement`tipo ten as seguintes propiedades útiles:

- `selectedIndex`– devolve o índice baseado en cero da opción seleccionada. O `selectedIndex`é `-1`se non se selecciona ningunha opción. Se o `<select>`elemento permite varias seleccións, `selectedIndex`devolve a `value`primeira opción.
- `value`– devolve a `value`propiedade do primeiro elemento de opción seleccionado se o hai. En caso contrario, devolve unha cadea baleira.
- `multiple`– devolve `true`se o `<select>`elemento permite varias seleccións. É equivalente ao `multiple`atributo.

### A `selectedIndex`propiedade

Para seleccionar un `<select>`elemento, usa a API DOM como `getElementById()`ou `querySelector()`.

O seguinte exemplo ilustra como obter o índice da opción seleccionada:

```
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Select Element Demo</title>
    <link href="css/selectbox.css" rel="stylesheet">
</head>
<body>
    <form>
        <label for="framework">Select a JS Framework</label>
        <select id="framework">
            <option value="1">Angular</option>
            <option value="2">React</option>
            <option value="3">Vue.js</option>
            <option value="4">Ember.js</option>
        </select>
        <button id="btn">Get the Selected Index</button>
    </form>
    <script>
        const btn = document.querySelector('#btn');
        const sb = document.querySelector('#framework')
        btn.onclick = (event) => {
            event.preventDefault();
            // show the selected index
            alert(sb.selectedIndex);
        };
    </script>
</body>
</html>
```

<iframe src="https://www.javascripttutorial.net/sample/dom/selectbox/selected-index.html" height="400" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>

Cómo funciona:

- En primeiro lugar, seleccione os elementos `<button>`e `<select>`utilizando o `querySelector()`método.
- A continuación, anexa un detector de eventos de clic ao botón e amose o índice seleccionado mediante o `alert()`método cando se preme no botón.

### A `value`propiedade

A `value`propiedade do `<select>`elemento depende do `<option>`elemento e do seu `multiple`atributo HTML:

- Se non se selecciona ningunha opción, a `value`propiedade da caixa de selección é unha cadea baleira.
- Se se selecciona unha opción e ten un `value`atributo, a `value`propiedade da caixa de selección é o valor da opción seleccionada.
- Se se selecciona unha opción e non ten ningún `value`atributo, a `value`propiedade da caixa de selección é o texto da opción seleccionada.
- Se se seleccionan varias opcións, a `value`propiedade da caixa de selección derívase da primeira opción seleccionada en función das dúas regras anteriores.

Vexa o seguinte exemplo:

```
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Selected Value</title>
    <link href="css/selectbox.css" rel="stylesheet">
</head>
<body>
    <div id="container">
        <form>
            <label for="framework">Select a JS Framework:</label>
            <select id="framework">
                <option value="">Angular</option>
                <option value="1">React</option>
                <option value="2">Vue.js</option>
                <option>Ember.js</option>
            </select>
            <button id="btn">Get the Selected Value</button>
        </form>
    </div>
    <script>
        const btn = document.querySelector('#btn');
        const sb = document.querySelector('#framework')
        btn.onclick = (event) => {
            event.preventDefault();
            alert(sb.value);
        };
    </script>
</body>
</html>
```

<iframe src="https://www.javascripttutorial.net/sample/dom/selectbox/selected-value.html" height="400" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>

Neste exemplo:

- Se selecciona a primeira opción, a `value`propiedade do `<select>`está baleira.
- Se selecciona a última opción, a `value`propiedade da caixa de selección é `Ember.js`porque a opción seleccionada non ten ningún `value`atributo.
- Se selecciona a segunda ou terceira opción, a propiedade value será `"1"`ou `"2"`.

## O `HTMLOptionElement`tipo

En JavaScript, o `HTMLOptionElement`tipo representa o `<option>`elemento.

O `HTMLOptionElement`tipo ten as seguintes propiedades útiles:

- `index`– o índice da opción dentro da colección de opcións.
- `selected`– volve `true`cando se selecciona a opción. Definiches esta propiedade para `true`seleccionar unha opción.
- `text`– devolve o texto da opción.
- `value`– devolve o atributo de valor HTML.

O `<select>`elemento ten a `options`propiedade que che permite acceder ás opcións de recollida:

```
selectBox.optionsIdioma do código:  CSS  ( css )
```

Por exemplo, para acceder á `text`e `value`da segunda opción, utiliza o seguinte:

```
const text = selectBox.options[1].text;
const value = selectBox.options[1].value;
```

Para obter a opción seleccionada dun `<select>`elemento cunha única selección, utiliza o seguinte código:

```
let selectedOption = selectBox.options[selectBox.selectedIndex];
```

A continuación, pode acceder á `text`e `value`da opción seleccionada a través de `text`e `value`propiedades:

```
const selectedText = selectedOption.text;
const selectedValue = selectedOption.value;
```

Cando un `<select>`elemento permite seleccións múltiples, pode usar a `selected`propiedade para determinar cales son as opcións seleccionadas:

```
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Select Box</title>
    <link rel="stylesheet" href="css/selectbox.css">
</head>
<body>
    <div id="container">
        <form>
            <label for="framework">Select one or more JS Frameworks:</label>
            <select id="framework" multiple>
                <option value="1">Angular</option>
                <option value="2">React</option>
                <option value="3">Vue.js</option>
                <option value="4">Ember.js</option>
            </select>
            <button id="btn">Get Selected Frameworks</button>
        </form>
    </div>
    <script>
        const btn = document.querySelector('#btn');
        const sb = document.querySelector('#framework');

        btn.onclick = (e) => {
            e.preventDefault();
            const selectedValues = [].filter
                .call(sb.options, option => option.selected)
                .map(option => option.text);
            alert(selectedValues);
        };
    </script>
</body>
</html>
```

<iframe src="https://www.javascripttutorial.net/sample/dom/selectbox/select-multiple.html" height="400" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>

Neste exemplo, `sb.options`é un obxecto similar a unha matriz, polo que non ten os [`filter()`](https://www.javascripttutorial.net/javascript-array-filter/)métodos como un `Array`obxecto.

Para tomar prestados estes métodos do `Array`obxecto, usa o `call()`método. Por exemplo, o seguinte devolve unha matriz de opcións seleccionadas:

```
[].filter.call(sb.options, option => option.selected)Idioma do código:  PHP  ( php )
```

E para obter a `text`propiedade das opcións, encadea o resultado do `filter()`método co `map()`método, así:

```
.map(option => option.text);
```

## Resumo

- O `<select>`elemento permítelle seleccionar unha ou varias opcións. Engade o `multiple`atributo ao `<select>`elemento para activar varias seleccións.
- O `HTMLSelectElement`representa o `<select>`elemento. Use `selectedIndex`e `value`para obter o índice e o valor da opción seleccionada.
- O `HTMLOptionElement`representa o `<option>`elemento. Se se selecciona a opción, a `selected`propiedade é verdadeira. As propiedades `selectedText`e `selectedValue`devolven o `text`e `value`da opción seleccionada.

# JavaScript: opcións de engadir e eliminar dinámicamente

**Resumo** : neste tutorial, aprenderás a engadir e eliminar opcións de forma dinámica a un [elemento seleccionado](https://www.javascripttutorial.net/javascript-dom/javascript-select-box/) en JavaScript.

O `HTMLSelectElement`tipo representa o `<select>`elemento. Ten o `add()`método que engade dinámicamente unha opción ao `<select>`elemento e o `remove()`método que elimina unha opción do `<select>`elemento:

- `add(option,existingOption)`– engade un novo `<option>`elemento á `<select>`opción anterior a unha existente.
- `remove(index)`– elimina unha opción especificada polo índice dun `<select>`.

## Engadindo opcións

Para engadir unha opción dinámicamente a un `<select>`elemento, debes seguir estes pasos:

- En primeiro lugar, crea unha nova opción.
- En segundo lugar, engade a opción ao elemento de selección.

Hai varias formas de crear unha opción de forma dinámica e engadila a unha `<select>`en JavaScript.

### 1) Usando o `Option`construtor e `add()`o método

Primeiro, use o `Option`construtor para crear unha nova opción co texto e o valor da opción especificado:

```
let newOption = new Option('Option Text','Option Value');
```

A continuación, chame ao `add()`método do `HTMLSelectElement`elemento:

```
const select = document.querySelector('select');
select.add(newOption,undefined);
```

O `add()`método acepta dous argumentos. O primeiro argumento é a nova opción e o segundo é unha opción existente.

Neste exemplo, pasamos `undefined`no segundo argumento, o `add()`método do método engadirá a nova opción ao final da lista de opcións.

### 2) Usando os métodos DOM

Primeiro, constrúe unha nova opción usando métodos DOM:

```
// create option using DOM
const newOption = document.createElement('option');
const optionText = document.createTextNode('Option Text');
// set option text
newOption.appendChild(optionText);
// and option value
newOption.setAttribute('value','Option Value');
```

En segundo lugar, engade a nova opción ao elemento select usando o `appendChild()`método:

```
const select = document.querySelector('select');
select.appendChild(newOption);
```

## Eliminación de opcións

Tamén hai varias formas de eliminar de forma dinámica as opcións dun elemento seleccionado.

A primeira forma é usar o `remove()`método do `HTMLSelectElement`tipo. O seguinte ilustra como eliminar a primeira opción:

```
select.remove(0); Idioma do código:  CSS  ( css )
```

A segunda forma de eliminar unha opción é facer referencia á opción polo seu índice usando a `options`colección e establecer o seu valor en `null`:

```
select.options[0] = null;
```

A terceira forma é usar o `removeChild()`método e eliminar unha opción especificada. O seguinte código elimina o primeiro elemento dun `selectBox`:

```
// remove the first element:
select.removeChild(selectBox.options[0]);
```

Para eliminar todas as opcións dun elemento seleccionado, utiliza o seguinte código:

```
function removeAll(selectBox) {
    while (selectBox.options.length > 0) {
        select.remove(0);
    }
}
```

Cando elimina a primeira opción, o elemento de selección move outra opción como primeira opción. A `removeAll()`función elimina repetidamente a primeira opción no elemento de selección, polo tanto, elimina todas as opcións.

## Poñelo todo xunto

Crearemos unha [aplicación](https://javascripttutorial.net//sample/dom/select-options/) que permita aos usuarios engadir unha nova opción a partir do valor dun texto de entrada e eliminar unha ou máis opcións seleccionadas.

Velaquí a estrutura do proxecto:

```
├── css
|  └── style.css
├── js
|  └── app.js
└── index.html
```

O índice.html:

```
<!DOCTYPE html>
<html>

    <head>
        <title>JavaScript Selected Value</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
        <div id="container">
            <form>
                <label for="framework">Framework:</label>
                <input type="text" id="framework" placeholder="Enter a framework" autocomplete="off">

                <button id="btnAdd">Add</button>

                <label for="list">Framework List:</label>
                <select id="list" name="list" multiple>

                </select>
                <button id="btnRemove">Remove Selected Framework</button>
            </form>
        </div>
        <script src="js/app.js"></script>
    </body>

</html>
```

js/app.js

```
const btnAdd = document.querySelector('#btnAdd');
const btnRemove = document.querySelector('#btnRemove');
const listbox = document.querySelector('#list');
const framework = document.querySelector('#framework');

btnAdd.onclick = (e) => {
  e.preventDefault();

  // validate the option
  if (framework.value == '') {
    alert('Please enter the name.');
    return;
  }
  // create a new option
  const option = new Option(framework.value, framework.value);
  // add it to the list
  listbox.add(option, undefined);

  // reset the value of the input
  framework.value = '';
  framework.focus();
};

// remove selected option
btnRemove.onclick = (e) => {
  e.preventDefault();

  // save the selected options
  let selected = [];

  for (let i = 0; i < listbox.options.length; i++) {
    selected[i] = listbox.options[i].selected;
  }

  // remove all selected option
  let index = listbox.options.length;
  while (index--) {
    if (selected[index]) {
      listbox.remove(index);
    }
  }
};

```

O estilo pódese [atopar aquí](https://javascripttutorial.net/sample/dom/select-options/css/style.css) .

<iframe src="https://www.javascripttutorial.net/sample/dom/selectbox/select-dynamic.html" height="500" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>

Cómo funciona:

En primeiro lugar, use o `querySelector()`método para seleccionar elementos, incluíndo o texto de entrada, o botón e a caixa de selección:

```js
const btnAdd = document.querySelector("#btnAdd");
const btnRemove = document.querySelector("#btnRemove");
const listbox = document.querySelector("#list");
const framework = document.querySelector("#framework");
```

En segundo lugar, anexa o escoitador de eventos de clic ao `btnAdd`botón.

Se o valor do texto de entrada está en branco, mostramos unha [alerta](https://www.javascripttutorial.net/javascript-bom/javascript-alert/) para informar aos usuarios de que se require o nome. En caso contrario, creamos unha nova opción e engadímola á caixa de selección. Despois de engadir a opción, restablecemos o texto introducido do texto introducido e fixamos o foco nel.

```
btnAdd.addEventListener('click', (e) => {
  e.preventDefault();

  // validate the option
  if (framework.value.trim() === '') {
    alert('Please enter the name.');
    return;
  }
  // create a new option
  const option = new Option(framework.value, framework.value);

  // add it to the list
  listbox.add(option, undefined);

  // reset the value of the input
  framework.value = '';
  framework.focus();
});
```

En terceiro lugar, rexistra un oínte de eventos de clic no `btnRemove`botón. No oínte de eventos, gardamos as opcións seleccionadas nunha matriz e eliminamos cada unha delas.

```js
btnRemove.addEventListener("click", (e) => {
  e.preventDefault();

  // save the selected options
  let selected = [];

  for (let i = 0; i < listbox.options.length; i++) {
    selected[i] = listbox.options[i].selected;
  }

  // remove all selected option
  let index = listbox.options.length;
  while (index--) {
    if (selected[index]) {
      listbox.remove(index);
    }
  }
});
```

## Resumo

- JavaScript usa o `HTMLSelectElement`tipo para representar o `<select>`elemento.
- Use o `add()`método do `HTMLSelectElement`para engadir unha opción ao `<select>`elemento.
- Use o `remove()`método do `HTMLSelectElement`para eliminar unha opción do `<select>`elemento.

# Eliminar elementos dun elemento seleccionado de forma condicional

**Resumo** : neste tutorial, aprenderás a usar JavaScript para eliminar elementos dun elemento seleccionado en función dunha condición.

JavaScript usa a `HTMLSelectElement` clase para representar o `<select>`elemento. Para eliminar unha opción dun elemento seleccionado, usa o `remove()`método do `HTMLSelectElement` obxecto.

Supoñamos que o `<select>`elemento ten tres `<option>`elementos co índice correspondente 0, 1 e 2:

Por exemplo:

| Valor | Texto      | Índice |
| :---- | :--------- | :----- |
| A     | Elemento A | 0      |
| B     | Elemento B | 1      |
| C     | Elemento C | 2      |

Cando chame ao `remove()`método para eliminar un elemento, o índice cambiará inmediatamente.

Por exemplo, se elimina o segundo elemento ( `B`) co índice 1, o índice do terceiro elemento ( `C`) pasará a ser 1:

| Valor | Texto      | Índice |
| :---- | :--------- | :----- |
| A     | Elemento A | 0      |
| C     | Elemento C | 1      |

Un erro común é iterar sobre as opcións dun `<select>`elemento e eliminar o elemento dentro do bucle sen ser consciente de que os índices foron axustados.

Por exemplo, os seguintes intentos de eliminar elementos cos valores `B`e `C`. Non obstante, só elimina o elemento `B`pero non `C`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demo</title>
  </head>

  <body>
    <label for="list">Alphabet</label>
    <select id="list">
      <option value="A">Item A</option>
      <option value="B">Item B</option>
      <option value="C">Item C</option>
    </select>
    <script>
      const select = document.querySelector("#list");
      for (let i = 0; i < select.options.length; i++) {
        const value = select.options[i].value;
        if (value === "B" || value === "C") {
          select.remove(i);
          // index of C will become 1 but the value of i is 2
          // therefore C will be not removed
        }
      }
    </script>
  </body>
</html>
```

Saída:

<iframe src="https://www.javascripttutorial.net/sample/dom/select-remove-options/demo.html" height="80" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>

Para eliminar un elemento `C`, cómpre diminuír o índice despois de eliminar o elemento `B`. O seguinte exemplo funcionará correctamente:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demo</title>
  </head>

  <body>
    <label for="list">Alphabet</label>
    <select id="list">
      <option value="A">Item A</option>
      <option value="B">Item B</option>
      <option value="C">Item C</option>
    </select>
    <script>
      const select = document.querySelector("#list");
      let indices = [];
      for (let i = 0; i < select.options.length; i++) {
        const value = select.options[i].value;
        if (value === "B" || value === "C") {
          select.remove(i);
          // decrease i by one because the index has been
          // adjusted
          i--;
        }
      }
    </script>
  </body>
</html>
```

Saída:

<iframe src="https://www.javascripttutorial.net/sample/dom/select-remove-options/demo2.html" height="80" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>

## Un exemplo práctico

O seguinte exemplo ilustra como eliminar elementos dunha lista onde o texto do elemento remata coa cadea `js`.

Aquí está a estrutura do proxecto:

```
├── css
|  └── style.css
├── js
|  └── app.js
└── index.html
```

### índice.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Demo</title>
  </head>
  <body>
    <main>
      <label for="framework">Framework:</label>
      <select id="framework" multiple>
        <option value="1">Angular</option>
        <option value="2">React</option>
        <option value="3">Vue.js</option>
        <option value="4">Ember.js</option>
        <option value="5">Svelte</option>
        <option value="6">Next.js</option>
      </select>
      <p>
        Click the Remove button to remove framework ended with js like Vue.js
      </p>
      <button class="btn">Remove</button>
    </main>
    <script src="js/app.js"></script>
  </body>
</html>
```

### aplicación.js

```js
const select = document.querySelector("#framework");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  for (let i = 0; i < select.options.length; i++) {
    const text = select.options[i].text;
    if (text.endsWith("js")) {
      select.remove(i);
      i--;
    }
  }
});
```

Saída:

<iframe src="https://www.javascripttutorial.net/sample/dom/select-remove-options/index.html" height="400" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>
