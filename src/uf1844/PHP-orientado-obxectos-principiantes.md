# PHP orientado a obxectos, para principiantes

Para este tutorial, debes coñecer algúns conceptos básicos de PHP: funcións, variables, condicionais e bucles.

Para facilitar as cousas, o titorial divídese en 22 pasos.

## Paso 1

**O primeiro que debes facer é crear dúas páxinas PHP:**

- ``index.php``
- ``class_lib.php``

OOP consiste en crear código modular, así que o noso código PHP orientado a obxectos estará disposto en arquivos dedicados - *cun determinado cometido singular* - que inseriremos na nosa páxina usando *"includes"* de PHP.

Neste caso, todo o noso código PHP OO estará no arquivo:

- ``class_lib.php``

OOP xira arredor dunha construción denominada *"clase"*. As clases son *moldes de galletas*, modelos que se usan para definir obxectos. A instataciación da clase produce o obxecto.

## Paso 2

**Crear unha clase PHP sinxela (``class_lib.php``)**

Para deseñar os scripts ou librarías de código ao xeito OOP, mellor que ter unha morea de funcións, variables e código flotando por aí ás voltas,  terás que definir/crear as túas propias clases.

Se define unha clase comezando coa palabra clave ``class`` seguida do nome que queiras darlle á túa nova clase.

```php
<?php
 class persoa {
   // código da clase
 }
?>
```

**Nota:** encerra unha clase usando chaves ({ } )... igual que se fai coas funcións.

## Paso 3

**Engadir datos á clase**

As clases son os planos para os obxectos php. Unha das grandes diferenzas entre funcións e clases é que unha clase contén tanto datos (variables) como funcións, que forman un paquete chamado:  'obxecto'.

Cando se crea unha variable dentro dunha clase, chámase "propiedade".

```php
<?php
   class persoa {
    var $nome;
   }
?>
```

**Nota:** os datos/variables dentro dunha clase (por exemplo: *var $nome;* ) denomínanse "propiedades".

## Paso 4

**Engadir funcións/métodos á clase**

Do mesmo xeito que as variables reciben un nome diferente cando se declaran dentro dunha clase (*propiedades*) as funcións tamén contidas nas clases (pois non!) reciben - tamén- un nome diferente,  chámanse "métodos".

Os métodos dunha clase úsanse para manipular os seus propios datos/propiedades.

```php
<?php
 class persoa {
  var $nome;
  function set_nome($new_nome) {
   $this->nome = $new_nome;
  }
  function get_nome() {
   return $this->nome;
  }
 }
?>
```

**Nota:** non esquezas que nunha clase, as variables chámanse "propiedades" e as funcións "métodos".

## Paso 5

**Funcións de obtención e configuración**

Creamos dúas funcións/métodos interesantes: get_nome() e set_nome().

Estes métodos seguen unha convención de POO común que ves en moitos idiomas  (incluídos Java e Ruby), onde creas métodos para "definir" e "obter"  propiedades nunha clase.

Outra convención é que os nomes do getter e do setter deben coincidir cos nomes das propiedades.

```php
<?php
 class persoa {
  var $nome;
  function set_nome($new_nome) {
   $this->nome = $new_nome;
   }

  function get_nome() {
   return $this->nome;
  }
 }
?>
```

**Nota:** Observar que os nomes do *getter* e do *setter* coinciden co nome da propiedade asociada.

Deste xeito, cando outros programadores de PHP queiran usar os teus obxectos, saberán que se tes un método/función chamado '``set_nome()``', haberá unha  propiedade/variable chamada '``nome``'.

## Paso 6

**A variable '$this'**

Probablemente notaches esta liña de código:

```php
$this->nome = $new_nome;
```

``$this`` é unha variable integrada (en todos os obxectos) que apunta ao obxecto actual. Ou noutras palabras, ``$this`` é unha variable especial de auto referencia. Se usa ``$this`` para acceder ás propiedades e chamar aos métodos da clase actual.

```php
function get_nome() {
 return $this->nome;
}
```

**Nota:** Isto pode ser un pouco confuso para algúns... pero só é porque o estás a ver - si cadra por primeira vez-, unha desas capacidades OO integradas (no propio PHP) que fai cousas automaticamente por nós.

Polo momento, só pensa en ``$this`` como unha palabra clave especial de PHP OO. Cando PHP atopa ``$this``, o motor PHP xa sabe que facer… Esperemos que pronto, ti tamén! :smiley:

## Paso 7

**Usar a clase na páxina principal ( &rarr; ``index.php``)**

Nunca crees as túas clases de PHP directamente dentro das túas páxinas php principais, iso só contribuiría a botar ao traste o sentido e os propósitos do PHP orientado a obxectos.

Pola contra, a mellor práctica sempre é crear páxinas php separadas que só conteñan as túas clases. Logo accederás a eses obxectos/clases php incluíndoos nas túas páxinas php principais cun '``include``' ou un '``require``'.

```php
<?php include("class_lib.php"); ?>
```

**Nota:** Observar como aínda non fixemos nada coa nosa clase. Farémolo a continuación.

## Paso 8

**Instancia/crea o teu obxecto**

As clases son os moldes/modelos de obxectos php. As clases non se converten en obxectos ata que se fai algo denominado: *instanciación*.

Cando se instancia unha clase, isto é: se crea unha instancia desa clase... daquela se está creando así o obxecto.

Noutras palabras, a instanciación é o proceso de creación dunha **instancia** dun obxecto na memoria. Que memoria? A memoria do servidor, por suposto!

```php
<?php include("class_lib.php"); ?>

<?php
    // instanciación
 	$xian = new persoa();
?>
```

**Nota:**  a variable ``$xian`` convértese nun identificador(handle) ou referencia para o noso obxecto ``persoa`` recentemente creado. Chamámoslle 'handle'  a ``$xian`` , porque ímolo usar para controlar e usar o obxecto ``persoa``.

Se executas o código PHP agora, non verás nada nas túas páxinas. A razón disto é porque non lle dixemos a PHP que faga nada co obxecto que acabamos de crear.

## Paso 9

**A palabra clave "new".**

Para crear un obxecto fóra dunha clase, cómpre usar a palabra clave "``new``".

Ao empregar/*instanciar* unha clase, podes engadir corchetes opcionalmente ao nome da clase, como se ve no seguinte exemplo. E, para que quede claro, podes ver como no código a continuación, se poden crear varios obxectos da mesma clase.

… Desde o punto de vista do motor de PHP, cada obxecto é a súa propia entidade. Ten iso sentido?

```php
<?php include("class_lib.php"); ?>
<?php
 $xian = new persoa();
 $maria = new persoa;
?>
```

**Nota:**  ao crear un obxecto, asegúrate de non entrecomiñar o nome da clase. Por exemplo:

```php
$xian = new 'persoa';
```

... dará erro.

## Paso 10

**Establecer as propiedades dun obxecto**

Agora que creamos/instanciamos os nosos dous obxectos separados "``persoa``",  podemos establecer as súas propiedades usando os métodos (ou configuradores) que creamos.

Ter en conta que aínda que os dous obxectos ``persoa`` (``$xian`` e ``$maria``)  están baseados na mesma clase "``persoa``", no que a php se refire, son obxectos totalmente diferentes.

```php
<?php include("class_lib.php"); ?>
<?php
 $xian = new persoa();
 $maria = new persoa;
 $xian->set_nome("Xián Pelouro");
 $maria->set_nome("María Moure");
?>
```

## Paso 11

**Acceso aos datos dun obxecto**

Agora usamos os métodos ``getter`` para acceder aos datos almacenados nos nosos obxectos... estes son os mesmos datos que inserimos nos nosos obxectos usando os métodos ``setter``.

Ao acceder a métodos e propiedades dunha clase, usa o operador de frecha (``->``).

```php
<?php include("class_lib.php"); ?>
<?php
 $xian = new persoa();
 $maria = new persoa;

 $xian->set_nome("Xián Pelouro");
 $maria->set_nome("María Moure");

 echo "Nome completo de Xián: " . $xian->get_nome();
 echo "Nome completo de María: " . $maria->get_nome();
?>
```

**Nota:** O operador de frecha (``->``) non é o mesmo que se usa coas matrices asociativas: ``=>``.

**Parabéns**, chegaches a metade do titoría! É hora de tomar un pequeno descanso e tomar un té... Vale, quizais unha cervexa.

Nun curto período de tempo, tes:

- Deseño dunha clase PHP.
- Xerados/instanciados un par de obxectos baseados na túa clase.
- Datos inseridos nos teus obxectos.
- Datos recuperados dos teus obxectos.

Non está mal para o teu primeiro día no traballo OO PHP.

Se aínda non o fixeches, agora é un bo momento para escribir o código e velo en acción nas túas propias páxinas PHP.

## Paso 12

**Acceso directo ás propiedades: non o fagas!**

Non tes que usar métodos para acceder ás propiedades dos obxectos; podes acceder a eles directamente usando o operador de frecha (``->``) e o nome da variable.

Por exemplo: coa propiedade ``$nome`` (no obxecto ``$xian``) podes obter o seu valor así:

```php
$nome = $xian->nome;
```

Aínda que é factible, considérase unha mala práctica facelo porque pode provocar problemas no camiño. Deberías usar métodos *getter* no seu lugar; pero falaremos sobre iso máis tarde.

```php
<?php include("class_lib.php"); ?>
<?php
 $xian = new persoa();
 $maria = new persoa;

 $xian->set_nome("Xián Pelouro");
 $maria->set_nome("María Moure");

 // o acceso directo as propiedades da clase, aínda que permitido, non é recomendable.
 echo "Nome completo de Xián: ".$xian->nome;
?>
```

## Paso 13

**Construtores**

Todos os obxectos poden ter un método incorporado especial chamado "construtor". Os construtores permítenche inicializar as propiedades do teu obxecto  (**tradución:** darlle valores as túas propiedades) cando creas unha instancia dun obxecto.

**Nota:** Se creas unha función de construción -  ``function __construct($nomedafuncion)`` , PHP chamará  automaticamente ao método/función __construct() cando cree un obxecto da súa clase.

O método '``construct``' comeza con dous guións baixos (``__``) e a palabra '``construct``'.

```php
<?php
 class persoa {
  var $nome;
  function __construct($persoas_nome) {
   $this->nome = $persoas_nome;
  }

  function set_nome($new_nome) {
     $this->nome = $new_nome;
  }

  function get_nome() {
     return $this->nome;
   }
 }
?>
```

No resto da titoría, xa non insistiremos en lembrar que:

- As funcións na clase son métodos  // functions = methods
- E as variables da clase son propiedades   // variables = properties

Agora imos usar esta terminoloxía OO.

## Paso 14

**Crea un obxecto cun construtor**

Agora que creamos un método construtor, podemos proporcionar un valor para a propiedade ``$nome`` cando creamos os nosos obxectos persoa - `persoa`.

Debemos "alimentar" o método construtor proporcionando unha lista de argumentos (como se fai cunha función) despois do nome da clase.

**Por exemplo:**

```php
$xian = new persoa("Xián Pelouro");
```

Isto afórranos de ter que chamar ao método set_nome() reducindo a cantidade de código. Os construtores son comúns e úsanse a miúdo en PHP, Java, etc.

```php
<?php include("class_lib.php"); ?>
<?php
 $xian = new persoa("Xián Pelouro");
 echo "Nome completo de Xián: ".$xian->get_nome();
?>
```

Este é só un pequeno exemplo de como os mecanismos integrados en PHP OO poden aforrarche tempo e reducir a cantidade de código que necesitas escribir. Menos código significa menos erros.

## Paso 15

**Restrinxir o acceso ás propiedades mediante "modificadores de acceso"**

Un dos principios fundamentais da POO é a "**encapsulación**". A idea é que crees un código máis limpo e mellor, se restrinxes o acceso ás estruturas de datos (propiedades) dos teus obxectos.

Limitas o acceso ás propiedades da clase usando algo chamado **‘access modifiers’**. Hai 3 modificadores de acceso:

1. ``public`` (público)
2. ``private`` (privado)
3. ``protected`` (protexido)

'Público' é o modificador predeterminado.

```php
<?php
 class persoa {
 var $nome;
  public $altura;
  protected $nseguridade_social;
  private $numero_pin;

  function __construct($persoas_nome) {
   $this->nome = $persoas_nome;
  }

  function set_nome($new_nome) {
   $this->nome = $new_nome;
  }

  function get_nome() {
   return $this->nome;
  }

 }
?>
```

**Nota:** cando se declara unha propiedade coa palabra clave "``var``", esa propiedade considérase "pública".

## Paso 16

**Restrición de acceso ás propiedades: parte 2**

Cando declaras unha propiedade como "privada", só a mesma clase pode acceder á esa propiedade.

Cando unha propiedade é declarada "protexida", só a mesma clase e as clases derivadas desa clase poden acceder á propiedade; isto ten que ver coa  herdanza... do que falaremos máis tarde.

As propiedades declaradas como "públicas" non teñen restricións de acceso, é dicir, calquera pode acceder a elas.

Para comprender este (probablemente) aspecto neboento da POO, proba o seguinte código e observa como reacciona PHP. Consello: le os comentarios no código para obter máis información:

```php
<?php include("class_lib.php"); ?>
<?php
 $xian = new persoa("Xián Pelouro");
 echo "Nome completo de Xián : " .  $xian->get_nome() ;

 /*
 Since $numero_pin was declared private, this line of code
 will generate an error. Try it out!
 */

 echo "Falame de cousas privadas: ".$xian->numero_pin;
?>
```

**Nota:** Se tentas acceder a unha propiedade/variable privada fóra da clase, obterás isto:

```php
'Fatal error: Cannot access private property persoa::$numero_pin in ...'
```

## Paso 17

**Restrinxir o acceso aos métodos**

Do mesmo xeito que ás propiedades, podemos controlar o acceso aos métodos mediante un dos tres
modificadores de acceso:

1. ``public`` (público)
2. ``private`` (privado)
3. ``protected`` (protexido)

Por que temos modificadores de acceso?

**En poucas palabras:** trátase de controlar; pois ten sentido controlar como a xente usa as clases.

As razóns dos modificadores de acceso e outras construcións de OO poden ser complicadas de entender... especialmente porque aquí somos só principiantes. Así que dáte unha oportunidade! Non desistas.

Dito isto, podemos (resumir e) dicir que existen moitas construcións OOP coa idea de que moitos programadores poden estar traballando xuntos nun proxecto.

```php
<?php
 class persoa {
  var $nome;

  public $altura;
  protected $nseguridade_social;
  private $numero_pin;

  function __construct($persoas_nome){
     $this->nome = $persoas_nome;
  }

  private function get_numero_pin(){
   return
   $this->numero_pin;
  }
 }
?>
```

**Notas:** Dado que o método ``get_numero_pin()`` é 'privado', o único lugar onde podes usar este método é na mesma clase, normalmente noutro método. Se queres chamar/utilizar este método directamente nas túas páxinas PHP, terías que declaralo "público".

**Nota nerd:** de novo, é importante (a medida que avanzamos) que probes o código por ti mesmo. Veralo diferente!

## Paso 18

**Herdanza: reutilizando o código ao xeito OOP**

A herdanza é unha capacidade/construción fundamental en POO onde podes usar unha clase, como base/fundamento para outra clase... ou moitas outras clases.

**Por que facelo?**

**Facer isto permíteche reutilizar de forma eficiente o código que se atopa na túa clase base.**

Digamos, que querías crear unha nova clase de "empregado"...xa que podemos dicir que "empregado" é un tipo/modelo de "persoa", compartirán  propiedades e métodos comúns.

...Véslle algún sentido?

Neste tipo de situacións, a herdanza pode facer que o teu código sexa máis lixeiro... porque estás reutilizando o mesmo código en dúas clases diferentes. Pero a diferenza do PHP da "vella escola":

1. Só tes que escribir o código unha vez.
2. O código real que se está a reutilizar pódese reutilizar en moitas clases (ilimitadas), pero só se escribe nun lugar... conceptualmente, isto é algo así como unha especie PHP includes().

**Bótalle un ollo ao código PHP de mostra:**

```php
// 'extends' é a palabra clave que permite inheritance, a herdanza
class empregado extends persoa
{
 function __construct($empregado_nome) {
  $this->set_nome($empregado_nome);
 }
}
```

## Paso 19

**Reutilización de código con herdanza: parte 2**

Dado que a clase "empregado" está baseada na clase "persoa", "empregado" ten automaticamente todas as propiedades e métodos públicos e protexidos de "persoa".

**Nota nerd:** os novizos dirían que "empregado" é un **tipo** de persoa.

O código:

```php
class empregado extends persoa
{
 function __construct($empregado_nome){
  $this->set_nome($empregado_nome);
 }
}
```

Observar como podemos usar set_nome() en 'empregado', aínda que non declaramos ese método na clase 'empregado'. Isto é porque xa creamos set_nome() na clase 'persoa'.

**Nerd Nota:** a clase "persoa" chámase (polos nerds) a clase "base" ou a clase "pai" porque é a clase na que se basea a clase "empregado". Esta xerarquía de clases pode chegar a ser importante cando os teus proxectos se fan máis complexos.

## Paso 20

**Reutilización de código con herdanza: parte 3**

Como podes ver no fragmento de código que aparece a continuación, podemos chamar a get_nome no noso obxecto "empregado", cortesía de "persoa".

O código:

```php
<?php include("class_lib.php"); ?>
 <?php
  // Using our PHP objects in our PHP pages.
  $xian = new persoa("Xián Pelouro");
  echo "Nome completo de Xián: " . $xian->get_nome();
 
  $maria = new empregado("María Moure");
  echo "--> " . $maria->get_nome();
 ?>
```

Este é un exemplo clásico de como OOP pode reducir o número de liñas de  código (non tes que escribir os mesmos métodos dúas veces)  o  que manterá o teu código modular e moito máis fácil de manter.

## Paso 21

**Métodos de anulación**

Ás veces (ao usar a herdanza) podes ter que cambiar o funcionamento dun método desde a clase base.

Por exemplo, digamos que o método ``set_nome()`` na clase 'empregado' ten que facer algo diferente ao que fai na clase 'persoa'.

"Anula" a versión da clase "``persoa``" de ``set_nome()``, declarando o mesmo método en "``empregado``".

O fragmento de código:

```php
<?php
 class persoa
 {
  // ...
  protected function set_nome($new_nome) {
   if ($new_nome != "María Moure") {
    $this->nome = strtoupper($new_nome);
   }
  }
 }

 class empregado extends persoa
 {
  // ...
  protected function set_nome($new_nome) {
   if ($new_nome == "Xián Pelouro") {
    $this->nome = $new_nome;
   }
  }
 }
?>
```

Observe como set_nome() é diferente na clase "empregado" da versión que se atopa na clase pai: "persoa".

## Paso 22

**Métodos de anulación: parte 2**

Ás veces podes ter que acceder á versión dun método, da clase base, que se anulou na clase derivada (ás veces chamada clase "fillo" - *child class*).

No noso exemplo, substituímos o método set_nome() na clase 'empregado'. Agora usa este código:

```php
persoa::set_nome($new_nome);
```

... para acceder á versión (persoa) da clase pai do método set_nome().

**O código:**

```php
<?php
 class persoa
 {
  // agregar explícitamente propiedades de clase é opcional, pero
  // é unha boa practica
  var $nome;
  function __construct($persoas_nome) {
   $this->nome = $persoas_nome;
   }

   public function get_nome() {
    return $this->nome;
   }

   // os métodos e propiedades protexidos restrinxen o acceso a
         // eses elementos.
   protected function set_nome($new_nome) {
     if ($this->nome !=  "María Moure") {
      $this->nome = strtoupper($new_nome);
     }
  }
 }

 // 'extends' é a palabra clave que permite a herdanza
 class empregado extends persoa
 {
  protected function set_nome($new_nome) {
  if ($new_nome ==  "Xián Pelouro") {
   $this->nome = $new_nome;
  }
   else if ($new_nome ==  "María Moure") {
   persoa::set_nome($new_nome);
  }
 }

 function __construct($empregado_nome)
 {
  $this->set_nome($empregado_nome);
 }
}
?>
```

**Notas:** Usar o símbolo:

```php
::
```

... permíteche nomear especificamente a clase onde queres que PHP busque un método:

```php
'persoa::set_nome()'
```

... dille a PHP que busque set_nome() na clase "persoa".

Tamén hai un atallo se só queres facer referencia ao pai da clase actual, usando a palabra clave "pai".

O código:

```php
protected function set_nome($new_nome)
{
 if ($new_nome ==  "Xián Pelouro") {
  $this->nome = $new_nome;
  }
  else if ($new_nome ==  "María Moure") {
  parent::set_nome($new_nome);
 }
}
```

## Conclusión

Só falamos dos conceptos básicos de PHP OO. Pero debería ser información suficiente para sentirte cómodo avanzando.

Lembra que a mellor forma de incorporarte realmente a estas practicas é escribir código.

Suxeriría crear, digamos, 10 obxectos sinxelos que fagan cousas sinxelas, e despois usar eses obxectos en páxinas PHP reais. Unha vez feito iso, sentiraste máis cómodo cos obxectos.

---

Orixinal de Stefan Mischook

- [https://www.killerphp.com/tutorials/php-objects-page-1/](https://www.killerphp.com/tutorials/php-objects-page-1/)
