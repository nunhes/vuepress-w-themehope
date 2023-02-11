# HTML5

<img src="./assets/HTML5.png" alt="HTML5" style="zoom:150%;" />



Se denomina HTML5 á nova xeración de HTML que ven a converterse no novo estándar para HTML, XHTML e HTML DOM. A versión anterior de HTML databa do ano 1999. E a web cambiou moito dende ese ano.

HTML segue evolucionando, aínda que con outra filosofía disposta a ampliar o estandar e ir dandolle tempo aos diferentes navegadores a adaptarse as novas tecnoloxias que se despreguen. E sempre permitindo a compatibilidade cos estandares anteriores.

**Como comezou HTML5?**

HTML5 é o resultado da cooperación entre o W3C (*World Wide Web Consortium*) e WHATWG (*Web Hypertext Application Technology Working Group*). Mentras a WHATWG traballaba no campo dos formularios e aplicacións, a  W3C perseguía un estandar coherente cos antecedentes XML e traballaba na versión XHTML 2.0. A versión máis práctica e menos estrita da WHATWG ía gañando terreo entre os desenvolvedores mási audaces, poñendo o estandar XHTML nun serio dilema. Así no ano 2006, as dúas organizacións tiveron a ben revisar o camiño de ruta para seguir evoluindo a linguaxe e decidiron cooperar e crear a nova versión de HTML.

Así se estableceron algunhas das regras para seguir mellorando HTML:

- As novas características estarán baseadas en HTML, CSS, DOM e Javascript.
- Redución da necesidade de uso de plugins externos (como Flash, snippets de Java,...).
- Mellora da xestión de erros.
- Máis emprego de etiquetas para remprazar o scripting.
- HTML debe ser independente do dispositivo.
- O proceso de desenvolvemento será visible ao público.

## Novas características

Algunhas das novas características máis destacables en HTML5:

- O elemento canvas para debuxo.
- Os elementos audio e video para reprodución multimedia.
- Mellor soporte para almacenamento local.
- Novos elementos específicos de contido, como article, footer, header, nav, section.
- Novos controles de formulario como, calendar, date, time, email, url, search.

## Novos elementos en HTML5

Internet cambiou moito dende que o HTML 4.01 se converteu en estándar no ano 1999.

Hoxe en día algúns dos elementos HTML 4.01 están obsoletos, non se usan ou non se usan do mesmo xeito no que foron definidos. Todos estes  elementos foron borrados ou re-escritos no HTML5.

Para xestionar mellor o uso de internet, HTML 5 inclúe novos elementos para estruturar, debuxar, xestionar o contido multimedia e  mellorar a xestión dos formularios.

O cometido destas novas etiquetas é tamén formular unha linguaxe máis semantica que amplie a accesibilidade.

### Novas etiquetas

| Etiqueta         | Descrición                                                   |
| ---------------- | ------------------------------------------------------------ |
| **`<article>`**    | Para contido externo como novas dun artigo, blogue, forum ou calquera outro tipo de contido externo. |
| **`<command>`**    | Un botón, un radiobutton ou un checkbox.                     |
| **`<details>`**    | Para describir detalles sobre o documento, ou partes dun documento. |
| **`<summary>`**    | Unha lenda ou sumario dentro dos detalles do elemento.       |
| **`<figure>`**     | Para agrupar unha sección de contido autónomo, podería ser un video. |
| **`<figcaption>`** | A lenda da sección figure.                                   |
| **`<footer>`**     | Para indicar un pe dun documento. Podería incluír o nome do autor, a data do documento, información de contacto e copyright. |
| **`<header>`**     | Para introducir un documento ou sección. Podería incluír a navegación. |
| **`<hgroup>`**     | Para indicar unha sección de cabeceiras, usando h1 ata h6, onde a  máis grande é a parte principal da sección e as outras son  subcabeceiras. |
| **`<mark>`**       | Para resaltar texto.                                         |
| **`<meter>`**      | Para medir, usado soamente se se coñecen os valores máximo e mínimo. |
| **`<nav>`**        | Para unha sección de navegación.                             |
| **`<progress>`**   | O estado dun traballo en progreso.                           |
| **`<ruby>`**       | Para anotacións ruby (notas chinesas ou outros caracteres).  |
| **`<rt>`**         | Para explicar a anotación ruby.                              |
| **`<rp>`**         | Para amosar naqueles navegadores que non soportan o elemento ruby. |
| **`<section>`**    | Para a sección nun documento. Tales como capítulos, cabeceiras, pes ou outras seccións do documento. |
| **`<time>`**       | Para definir unha hora, data ou ambas.                       |
| **`<wbr>`**        | Para definir un cambio de liña ou continuación de palabra. (word break). |

### Novos elementos multimedia

HTML5 proporciona un novo estándar para o contido multimedia:

| Etiqueta     | Descrición                                                   |
| ------------ | ------------------------------------------------------------ |
| **`<audio>`**  | Para contido multimedia, sons, música ou outros audio streams. |
| **`<video>`**  | Para contido de video, tales como clips de películas ou outros video streams. |
| **`<source>`** | Para recursos multimedia definidos dentro dos elementos de  video ou audio. |
| **`<embed>`**  | Para contido embebido, tales como un plug-in.                |

### Elemento canvas

O elemento canvas emprega Javascript para facer debuxos nunha páxina web.

| Etiqueta     | Descrición                     |
| ------------ | ------------------------------ |
| **`<canvas>`** | Para facer debuxos cun script. |

### Novos elementos de formulario

HTML5 ofrece máis elementos de formulario con máis funcionalidade:

| Etiqueta       | Descrición                                                   |
| -------------- | ------------------------------------------------------------ |
| **`<datalist>`** | Unha lista de opcións para valores input.                    |
| **`<keygen>`**   | Xenera claves para autenticar a usuarios.                    |
| **`<output>`**   | Para diferentes tipos de saída tales como a saída que produce un script. |

### Novos tipos de atributos para input

A etiqueta input ten novos tipos de atributos para xestionar mellor a entrada de datos antes de envialos ao servidor:

| Etiqueta             | Descrición                                                   |
| -------------------- | ------------------------------------------------------------ |
| **`<tel>`**            | O tipo de dato introducido é un número de teléfono.          |
| **`<search>`**         | O tipo de dato introducido é un campo de busca.              |
| **`<url>`**            | O tipo de dato introducido é unha URL.                       |
| **`<email>`**          | O tipo de dato introducido é unha ou máis direccións de correo electrónico. |
| **`<datetime>`**       | O tipo de dato introducido é unha data e/ou hora.            |
| **`<date>`**           | O tipo de dato introducido é unha data.                      |
| **`<month>`**          | O tipo de dato introducido é un mes.                         |
| **`<week>`**           | O tipo de dato introducido é unha semana.                    |
| **`<time>`**           | O tipo de dato introducido é de tipo tempo.                  |
| **`<datetime-local>`** | O tipo de dato introducido é de tipo data/tempo.             |
| **`<number>`**         | O tipo de dato introducido é un número.                      |
| **`<range>`**          | O tipo de dato introducido é un número dentro do rango indicado. |
| **`<color>`**          | O tipo de dato introducido é unha cor en formato hexadecimal, como #FF8811 |

### HTML5 video

O HTML5 proporciona un estándar que permite amosar vídeo sen recorrer a complementos ou complexos scripts. Ata agora non había un estándar para amosar vídeos nunha páxina web.  Hoxe en día a maior parte dos vídeos amosábanse empregando plugins (como no seu día Flash), sen embargo non todos os navegadores usan os mesmos plugins.

**Formatos de vídeo**

Actualmente, a etiqueta video soporta dous formatos de vídeo: Ogg e MPEG 4.

- **Ogg**: Emprega o codec Theodora para imaxe e Vorbis para o audio. 

- **MPEG4**: Emprega vídeo en formato H.264 e audio en formato AAC.

**Como funciona?**

Para amosar un vídeo en HTML5 o único que necesitamos é:

```html
<video src="movie.ogg" controls="controls">
</video>
```

O atributo control é para engadir os botóns de play, pause e volume.  Tamén é unha boa idea o incluír os atributos width e height. 

Entre as etiquetas <video> </video> inseriremos a  mensaxe para aqueles navegadores que non soporten o elemento video de  HTML5.

**Exemplo 1:**

```html
<video src="movie.ogg" width="320" height="240" controls="controls">
O seu navegador non soporta a etiqueta video de HTML5.
</video>
```

**Exemplo 2:**

```html
<video width="320" height="240" controls="controls">
  <source src="movie.ogg" type="video/ogg" />
  <source src="movie.mp4" type="video/mp4" />
O seu navegador non soporta a etiqueta video de HTML5.
</video>
```

**Atributos da etiqueta video:**

| Atributo       | Valor    | Descrición                                                   |
| -------------- | -------- | ------------------------------------------------------------ |
| **`<autoplay>`** | autoplay | Especifica que o vídeo comezará automaticamente tan pronto estea dispoñible. |
| **`<controls>`** | controls | Especifica que se amosarán os controis do vídeo (play, pause, stop..). |
| **`<height>`**   | *pixels* | Especifica a altura en píxels do reprodutor de vídeo.        |
| **`<loop>`**     | loop     | Especifica que o vídeo estará sempre reproducíndose. Cando remate volverá a comezar automaticamente. |
| **`<preload>`**  | preload  | Especifica que o vídeo comezará a precargarse cando se cargue a  páxina web. Si a opción autoplay está presente esta opción será  ignorada. |
| **`<src>`**      | *url*    | Especifica a URL do vídeo a reproducir.                      |
| **`<width>`**    | *pixels* | Especifica o largo en píxels do reprodutor de vídeo.         |

### HTML5 audio

O HTML 5 proporciona un estándar que nos permite reproducir audio nunha páxina web.

Ata agora non había un estándar para amosar audio nunha páxina  web. Hoxe en día a maior parte dos vídeos son amosados empregando  plugins (como Flash), porén non todos os navegadores teñen os memos plugins.

HTML 5 especifica a forma de incluír audio na páxina web, coa etiqueta audio.

**Formatos de audio**

Actualmente, a etiqueta audio soporta tres formatos de audio: Ogg Vorbis, MP3 e WAV.

**Como funciona?**

Para reproducir audio en HTML5 o único que necesitamos é crear o marcado correcto:

```html
<audio src="song.ogg" controls="controls">
</audio>
```

O atributo `controls` é para engadir os botóns de play, pause en volume.

Entre as etiquetas de <audio> e </audio> inseriremos a mensaxe para aqueles navegadores que non soporten o elemento video de  HTML5.

**Exemplo 1:** Este exemplo funcionará correctamente en Safari, Firefox, Chrome e Opera.

```html
<audio src="song.ogg" controls="controls">
O seu navegador non soporta audio en HTML 5.
</audio>
```


 **Exemplo 2:** O elemento audio soporta múltiples elementos orixe. O navegador  empregará o primeiro deles que recoñeza da lista e comezará a  reproducilo.

```html
<audio controls="controls">
  <source src="song.ogg" type="audio/ogg" />
  <source src="song.mp3" type="audio/mpeg" />
O seu navegador non soporta audio en HTML 5.
</audio>
```

**Atributos da etiqueta AUDIO:**

| Atributo       | Valor    | Descrición                                                   |
| -------------- | -------- | ------------------------------------------------------------ |
| **`<autoplay>`** | autoplay | Especifica que o audio comezará automaticamente tan pronto estea dispoñible. |
| **`<controls>`** | controls | Especifica que se amosarán os controis do audio (play, pause, stop..). |
| **`<loop>`**     | loop     | Especifica que o audio estará sempre reproducíndose. Cando remate volverá a comezar automaticamente. |
| **`<preload>`**  | preload  | Especifica que o audio comezará a precargarse cando se cargue a  páxina web. Si a opción autoplay está presente esta opción será  ignorada. |
| **`<src>`**      | *url*    | Especifica a URL do audio a reproducir.                      |

### HTML5 canvas

O elemento canvas de HTML5 emprega Javascript para facer debuxos nunha páxina web. Un canvas é unha área rectangular, na que podemos controlar cada píxel que hai dentro dela. A etiqueta canvas ten varios métodos para debuxar liñas, cadros, círculos, caracteres e engadir imaxes.

**Crear un elemento canvas.**

Para engadir un elemento canvas indicando o seu id, largo e alto faremos:

```html
<canvas id="areadebuxo" width="200" height="100"></canvas>
```

**Debuxar con Javascript:** Para poder debuxar no canvas teremos que empregar Javascript.

```javascript
<script type="text/javascript">
	var c=document.getElementById("areadebuxo");
	var cxt=c.getContext("2d");
	cxt.fillStyle="#FF0000";
	cxt.fillRect(0,0,150,75);
</script>
```

Javascript emprega o id para atopar o elemento canvas:

```javascript
var c=document.getElementById("areadebuxo");
```

A continuación, crea un obxecto:

```javascript
var cxt=c.getContext("2d");
```

O obxecto getContext("2d") está integrado no HTML5, e dispón de moitos métodos de debuxo. As seguintes dúas liñas debuxan un rectángulo vermello:

```javascript
cxt.fillStyle="#FF0000";
cxt.fillRect(0,0,150,75);
```

O método fillStyle indica o color vermello, e o método fillRect especifica a forma, posición e tamaño.

**Entendendo as coordenadas:**

O método fillRect ten os seguintes parámetros: (0,0,150,75).

Isto quere dicir: debuxar un rectángulo de 150x75, comezando na esquina superior esquerda (0,0).

As coordenadas X e Y empréganse para posicionar os debuxos dentro do canvas.

### HTML5 almacenamento web

O HTML5 ofrece dous novos métodos de almacenar datos no cliente:

- **`localStorage`** - almacena datos sen límite de tempo.
- **`sessionStorage`**  - almacena datos durante unha sesión.

Anteriormente isto facíase empregando cookies. As cookies non son  aconsellables para grandes cantidades de datos, xa que *se pasan* con cada petición ao servidor, facéndoas moi lentas e ineficaces.

En HTML5, os datos non son enviados en cada petición ao servidor, soamente se envían cando sexan solicitados. Por iso é posible almacenar grandes cantidades de datos sen que afecte ao rendemento da web.

Os datos almacénanse en diferentes areas para as diferentes webs, e soamente unha web poderá acceder ós datos almacenados por ela mesma.

HTML5 emprega JavaScript para almacenar e acceder ós datos.

**O método `localStorage`:**

O método **`localStorage`**  almacena os datos sen limitación de tempo. Os datos estarán dispoñibles o seguinte día, semana ou ano.


 **Como crear e acceder a `localStorage`:**

**Exemplo:**

```javascript
<script type="text/javascript">
	localStorage.lastname="Smith";
	document.write(localStorage.lastname);
</script>
```

O seguinte exemplo conta o número de veces cun usuario visitou unha páxina: Exemplo:

```javascript
<script type="text/javascript">
	if (localStorage.pagecount)
      {
  		localStorage.pagecount=Number(localStorage.pagecount) +1;
  	  }
	else
  	  {
  		localStorage.pagecount=1;
      }
    document.write("Visits "+ localStorage.pagecount + " time(s).");
</script>
```



**O método `sessionStorage`:**

O método `sessionStorage` almacena os datos durante unha sesión. Os datos serán automaticamente borrados cando o usuario pecha o navegador.

**Como crear e acceder a `sessionStorage`:**

**Exemplo:**

```javascript
<script type="text/javascript">
	sessionStorage.lastname="Smith";
	document.write(sessionStorage.lastname);
</script>
```

O seguinte exemplo conta o número de veces cun usuario visitou unha páxina, na sesión actual:

```javascript
<script type="text/javascript">
	if (sessionStorage.pagecount)
  		{
  		sessionStorage.pagecount=Number(sessionStorage.pagecount) +1;
  		}
	else
  		{
  		sessionStorage.pagecount=1;
  		}
	document.write("Visits "+sessionStorage.pagecount+" time(s) this session.");
</script>
```

## window.postMessage en HTML5

Nos seguintes artigos podes ler información sobre intercambio de  mensaxes entre dominios diferentes, semellante ao envío de mensaxes en  Ajax pero coa vantaxe de poder facerse entre dominios distintos (cousa que non permitía Ajax).

https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage



http://davidwalsh.name/window-postmessage

## Demos e exemplos de HTML5

Visita esta páxina para ver máis demostracións e exemplos de HTML5.

http://html5demos.com/

Outro titorial sobre HTML5 moi interesante:

http://diveintohtml5.org/

## Plantilla para un arquivo novo en HTML5

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<title></title>
	</head>
	<body>


	</body>
</html>
```

- [Snippets moi útiles en HTML5](http://www.1stwebdesigner.com/design/snippets-html5-boilerplate/)

___

_*ref:*_ https://manuais.iessanclemente.net/index.php/HTML5
