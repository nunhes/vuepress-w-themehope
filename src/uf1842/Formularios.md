# Formularios e API Forms

Os formularios web son a interface máis importante xa que permiten as persoas enxertar datos, tomar decisións, comunicar información e cambiar o comportamento dunha aplicación.

Os formularios en HTML non cambiaron moito. A estrutura segue sendo a mesma, aínda que HTML5 agrega novos elementos, tipos de eido e atributos para expandilos tanto como sexa necesario e proveer así as funcións requiridas polas aplicacións web actuais.

```html
<!DOCTYPE html>
<html lang="gl">
  <head>
    <title>Formularios</title>
  </head>
  <body>
    <section>
      <form name="meuformulario" id="meuformulario" method="get">
        <input type="text" name="nome" id="nome" />
        <input type="submit" value="Enviar" />
      </form>
    </section>
  </body>
</html>
```

## Novos tipos de elementos

Con HTML5 se incorpora, de xeito estándar, nos navegadores a **capacidade de procesamento en tempo real da información enxertada en formularios**.

Os distintos tipos de elementos de formulario veñen preparados para adiantar a validación de datos desde a súa formulación no código:

```html
   <!--/* distintos tipos de eido <input> que validan os datos de forma nativa */-->
   <!-- tipo email -->
   <input type="email" name="meuemail" id="meuemail" />
   <!-- tipo search -->
   <input type="search" name="busca" id="busca" />
   <!-- tipo url -->
   <input type="url" name="minhaurl" id="minhaurl" />
   <!--tipo telefono -->
   <input type="tel" name="telefono" id="telefono" />
   <!--tipo numero -->
   <input type="number" name="numero" id="numero" min=”0” max=”10” step=”5”>
   <!--tipo rango -->
   <input type="range" name="numero" id="numero" min=”0” max=”10” step=”5”>
   <!--tipo data -->
   <input type="date" name="data" id="data">
   <!-- tipo semana -->
   <input type="week" name="semana" id="semana">
   <!-- tipo mes-->
   <input type="month" name="mes" id="mes">
   <!-- tipo hora-->
   <input type="time" name="hora" id="hora">
   <!--tipo datatime -->
   <input type="datetime" name="datahora" id="datahora">
   <!--tipo datatime-local -->
   <input type="datetime-local" name="datahoralocal" id="datahoralocal">
   <!--tipo cor -->
   <input type="color" name="meucolor" id="meucolor">
```

### Novos atributos

Tamén se engaden novos atributos como `autocomplete` - que amosa entradas previas como posibles valores - ou `novalidate` - que desactiva a autovalidación propia de HTML5 - e se poden aplicar a calquera eido.

Outros tipos de eido requiren da axuda de atributos máis específicos:

- `min` &rarr; o valor deste atributo determina o valor mínimo aceptado para o eido.
- `max` &rarr; o valor deste atributo determina o valor máximo aceptado para o eido.
- `step` &rarr; o valor deste atributo determina o tamaño no que o valor será incrementado ou diminuído en cada paso.
   *P.ex, si declaras un valor de 5 para o `step` dun eido que ten un valor mínimo de 0 e máximo de 10, o navegador non permitirá especificar valores entre 0 e 5 ou entre 5 e 10.(?)*

Outros tipos de eido requiren a asistencia de atributos para mellorar o seu rendimento ou determinar a súa importancia no proceso de validación.

- ``placeholder`` representa unha suxerencia para axudar a ingresar a información correcta.
  - &rarr; ``<input type="search" name="busca" id="busca" placeholder="escribe túa busca">``
- ``required`` índica a obrigatoriedade de completar o eido axeitadamente
  
  - &rarr; ``<input type="email" name="meuemail" id="meuemail" required>``
- ``multiple`` permite o ingreso de entradas múltiples, separadas por coma, no mesmo eido
  
  - &rarr; ``<input type="email" name="meu-email" id="meu-email" multiple>``
- ``autofocus`` sinala o elemento seleccionado se necesidade do focus() de js
  
  - &rarr; ``<input type="search" name="busca" id="busca" autofocus>``
- ``pattern`` permite crear regras de validación persoalizadas
  
  - &rarr; ``<input pattern=”[0-9]{5}" name="codigopostal" id="codigopostal” title=”insire os 5 números do teu código postal”>``
- ``form`` permite declarar elementos para un formulario fora do ámbito das etiquetas ``<form>...</form>``
  
  - &rarr; ``<nav>... <input type="search" name="busca" id="busca" form="formulario"> ...</nav>``

```html
<!DOCTYPE html>
<html lang="gl">
<head>
<title>Formularios</title>
</head>
<body>
<nav>
<input type="search" name="busca" id="busca"
form="formulario">
</nav>
<section>
<form name="formulario" id="formulario" method="get">
<input type="text" name="nome" id="nome">
<input type="submit" value="Enviar">
</form>
</section>
</body>
</html>
```

### Novos elementos

Novos elementos HTML incorporados coa intención de mellorar ou expandir as posibilidades dos formularios.

- ``<datalist>``
  
  Este é un elemento específico dos formularios usado para construir unha lista de ítems que logo, coa axuda do atributo `list`, será usada como suxestión nun eido do formulario.

  ```html
  <datalist id="informacion">
  <option value=”123123123” label=”Teléfono 1”>
  <option value=”456456456” label=”Teléfono 2”>
  </datalist>
  ```

  Este elemento utiliza o elemento `<option>` no seu interior para crear a lista de datos a suxestionares. Coa lista xa declarada, o que resta é referenciala desde un elemento `<input>` usando o atributo `list`:

  `<input type="tel" name="telefono" id="telefono" list="informacion">`

  O elemento co atributo `list` vai a mostrar os posibles valores como opcións para ser completado.

  IMPORTANTE: O elemento `<datalist>` de momento só foi incorporado por [algúns navegadores](https://caniuse.com/?search=datalist).

- ``<progress>``

  Este elemento non é específico dos formularios, pero xa que representa o progreso na realización dunha tarefa, e usualmente estas son comezadas e procesadas a través de formularios, se o pode incluír dentro do grupo de elementos para formularios.

  O elemento `<progress>` utiliza dous atributos para configurar o seu estado e límites. O atributo `value` indica que parte da tarefa xa foi procesada, e `max` declara o valor a alcanzar para que a tarefa se considere finalizada.

- ``<meter>``

  Similar a `<progress>`, se usa para mostrar unha escala, pero non de progreso. Pode representar unha medida, coma o tráfico do sitio web, por exemplo.

- `<output>`

  Representa o resultado dun cálculo. Normalmente axuda a mostrar os resultados do procesamento de valores provistos por un formulario. O atributo ``for`` asocia o elemento ``<output>`` co elemento fonte que participa do cálculo, pero este elemento deberá ser referenciado e modificado desde código Javascript.

## API Forms

Como cada un dos aspectos de HTML5, os formularios contan coa súa propia API para personalizar todos os aspectos de procesamento e validación.

Existen diferentes formas de aproveitar o proceso de validación en HTML5:

- usar os tipos de eido axeitados (p.ex., ``email``, ``tel``) - que detectarán calquera infracción-; ou,

- empregar atributo `required` nun eido calquera para indicar que se trata dun eido requirido

Tamén podemos crear tipos especiais de eido usando ``pattern`` para personalizar requisitos de validación. Pero, cando imos a aplicar mecanismos complexos de validación (p.ex., combinando eidos ou comprobando os resultados dun cálculo) deberemos recorrer aos recursos provistos por esta API.

&rarr; **setCustomValidity()**

Os navegadores amosan unha mensaxe de erro cando se intenta enviar un formulario que conten un campo non válido.
Podemos crear mensaxes propios para os nosos requisitos de validación usando o método ``setCustomValidity(mensaxe)``.

```html
<!DOCTYPE html>
<html lang="gl">
<head>
<title>Formularios</title>
<script>
  function iniciar(){
    nome1=document.getElementById("nome");
    nome2=document.getElementById("apelido");
    nome1.addEventListener("input", validacion, false);
    nome2.addEventListener("input", validacion, false);
    validacion();
  }

  function validacion(){
    if(nome1.value=='' && nome2.value==''){
      nome1.setCustomValidity('inserta alo menos un nome');
      nome1.style.background='#FFDDDD';
    }else{
      nome1.setCustomValidity('');
      nome1.style.background='#FFFFFF';
    }
  }
    
  window.addEventListener("load", iniciar, false);
</script>
</head>
<body>
<section>
<form name="rexistro" method="get">
Nome: <input type="text" name="nome" id="nome">
Apelido: <input type="text" name="apelido" id="apelido">
<input type="submit" id="send" value="ingresar">
</form>
</section>
</body>
</html>
```

---

### NOTAS

#### Referencias

- [https://caniuse.com/](https://caniuse.com/)  &rarr;  amosa táboas de compatibilidade coas tecnoloxías web front-end dos navegadores web de escritorio e móbiles.

---
xan2023
