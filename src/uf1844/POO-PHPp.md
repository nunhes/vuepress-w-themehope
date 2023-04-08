---
tag:
  - php
  - oop
---
# Programación Orientada a Obxectos en PHP para Principiantes

Para moitos programadores de PHP, a programación orientada a obxectos é un tema aterrador, cheo de sintaxe complicada e outros obstáculos. A programación orientada a obxectos (POO), é un estilo de programación no que as accións relacionadas se agrupan nas clases; para lograr un código máis compacto e eficiente.

## Entendendo a Programación Orientada a Obxectos

A Programación Orientada a Obxectos é un estilo de programación que permite aos desenvolvedores agrupar áreas similares en **clases.** O que axuda a manter o código de acordo ao principio DRY ["No te repitas"](https://en.wikipedia.org/wiki/Don't_repeat_yourself) facilitando tamén así o seu mantemento.

Un dos maiores beneficios da programación DRY é que; si algunha parte da información cambia, xeralmente **só é necesario un cambio para actualizar o código**. Un dos máis grandes pesadelos para os desenvolvedores é o mantemento do código onde os datos son declarados un a un, parte por parte. Calquera cambio no programa pode converterse nun xogo infinitamente máis frustrante que o 'Onde está Wally?', mentres se perseguen datos e funcionalidades duplicadas.

A POO é intimidante para moitos desenvolvedores porque introduce novas sintaxis. Xa a primeira vista, parece máis complexa que a simple programación procedimental, ou lineal. Sen embargo, observando máis de cerca, a POO é ao final un enfoque máis sinxelo e máis sinxelo de programar.

## Entendendo Obxectos e Clases

Antes de profundizar na POO, é necesario un entendemento básico das diferenzas entre **obxectos** e **clases**. As súas diferentes capacidades e algúns dos seus usos

### Recoñecendo as diferenzas entre obxectos e clases

![img](https://s3.amazonaws.com/nettuts/734_oop/images/blueprint-houses.jpg)<br><small>Fotos por: [Istant Jefferson](http://www.flickr.com/photos/instantjefferson/) e [John Wardell](http://www.flickr.com/photos/johnwardell/)</small>

> Os programadores comezan falando de obxectos e clases, como se estes fóran términos intercambiables Sin embargo, esto non é certo.

Unha clase, por exemplo, é como **os planos dunha casa.** Define a forma da casa en papel, coas relacións entre diferentes partes da casa planeadas e definidas de maneira precisa, aínda cando a casa non existe.

En cambio, un obxecto é **a casa** construída de acordo ao plano. Os datos almacenados no obxecto son como a madeira, os cables e o cemento que conforman a casa: se non son colocados de acordo ao plano, só formarán un montón de cousas inútiles. Non obstante, cando todo se xunta, se converte nunha organizada e útil casa.

**As Clases forman a estrutura dos datos e as accións e usan esa información para construír obxectos.** Máis dun obxecto único pode ser construído da mesma clase e ao mesmo tempo, e cada un de xeito independente dos outros. Continuando coa nosa analoxía da construción, é similar ao modo en que unha urbanización pode ser construída co mesmo plano: 150 casas diferentes que lucen iguais pero teñen diferentes
familias e decoracións no interior.

### Estrcturación dunha Clase

A sintaxis para crear unha clase é bastante sinxela: se declara unha clase usando a palabra reservada `class`, seguida do nome da clase e un par de corchetes ( `{}`):

```php
<?php

class MyClass
{
  // As propiedades e os métodos da clase van aquí
}

?>
```

Despois da creación, unha nova clase pode ser instanciada e almacenada nunha variable usando a palabra reservada `new`:

```php
$obj = new MyClass;
```

para ver o contido da clase, usaremos `var_dump()`:

```php
var_dump($obj);
```

Proba este proceso colocando todo o código anterior nun arquivo novo chamado `test.php` na túa carpeta [local] de proba:

```php
<?php

class MyClass
{
  // As propiedades e os métodos da clase van aquí
}

$obj = new MyClass;

var_dump($obj);

?>
```

Carga a páxina no teu navegador colocando a dirección `http://localhost/test.php` e deberías mostrar o seguinte:

```php
obxecto(MyClass)#1 (0) { }
```

**Na súa forma máis sinxela, completouse o teu primer script de POO.**

## Definindo Propiedades dunha Clase

Para agregar datos a unha clase; se empregan/declaran variables específicas da clase que son as **propiedades** da clase. Estas traballan igual que variables regulares, só que están unidas ao obxecto e polo tanto só se pode acceder a elas usando o obxecto.

Para agregar unha propiedade a `MyClass`, engade o seguinte script de código:

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";
}

$obj = new MyClass;

var_dump($obj);

?>
```

A palabra reservada `public` determina a visibilidade da propiedade, do cal xa falaremos máis adiante. Despois, a propiedade é denominada usando a sintaxis estándar de nome de variable, e se lle asigna un valor (aínda que as propiedades de clase non necesitan un valor inicial).

Para leer esta propiedade e mostrarla no navegador, referencia o obxecto desde o cal leer a propiedade a ser leída:

```php
echo $obj->prop1;
```

Dado que poden existir múltiples instancias dunha clase, se o obxecto individual non está referenciado, o script sería incapaz de determinar que obxecto leer. O uso da flecha ( `->`) é unha construción da POO que accede ás propiedades e métodos contidos dun obxecto dado.

Modifica o script en `test.php` para leer a propiedade no lugar de volcar o contido enteiro da clase modificando o código como se mostra:

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";
}

$obj = new MyClass;

echo $obj->prop1; // Sae a propiedade

?>
```

Recargando o teu navegador agora mostrará a seguinte saída:

```text
Son unha propiedade de clase!
```

## Definiendo Métodos de Clase

Os **Métodos** son funcións específicas da clase. As accións individuais que un obxecto será capaz de realizar son definidas no interior da clase como métodos.

Por exemplo, para crear métodos que establecerán(set) e devolverán(get) o valor da propiedade de clase `$prop1`, engade o seguinte código

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function public getProperty()
  {
      return $this->prop1 . "<br />";
  }
}

$obj = new MyClass;

echo $obj->prop1;

?>
```

Nota — POO permite que os obxectos se refiran a si mesmos usando `$this`. Cando se traballa dentro dun método, se usa `$this` da mesma forma que se utiliza o nome do obxecto fóra da clase.

Para usar estes métodos, chámalos tal e como as funcións normais, pero primeiro, referenciando o obxecto ao que pertencen. Lee a propiedade de `MyClass`, cambia o seu valor, e léelo de novo facendo as modificacións mostradas abaixo:

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function public getProperty()
  {
      return $this->prop1 . "<br />";
  }
}

$obj = new MyClass;

echo $obj->getProperty(); // Obter o valor da propiedade

$obj->setProperty("Son un novo valor de propiedade!"); // Establece un novo

echo $obj->getProperty(); // Léao de novo para mostrar o cambio

?>
```

Recarga o teu navegador, e verás o seguinte:

```text
Son unha propiedade de clase!
Son un novo valor de propiedade!
```

> "O poder da POO se fai patente cando se usan múltiples instancias da
> mesma clase."

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function public getProperty()
  {
      return $this->prop1 . "<br />";
  }
}

// Crea dous obxectos
$obj = new MyClass;
$obj2 = new MyClass;

// Obtén o valor de $prop1 dos dous obxectos
echo $obj->getProperty();
echo $obj2->getProperty();

// Establece novos valores para ambos obxectos
$obj->setProperty("Son un novo valor de propiedade!");
$obj2->setProperty("Pertenzo á segunda instancia!");

// Sae o valor $prop1 dos dous obxectos
echo $obj->getProperty();
echo $obj2->getProperty();

?>
```

Cando cargas os resultados no teu navegador, leen como segue:

```text
Son unha propiedade de clase!
Son unha propiedade de clase!
Son un novo valor de propiedade!
Eu pertenzo á segunda instancia!
```

Como se ve, a **POO mantén os obxectos como entidades separadas**, o que fai máis fácil a separación de diferentes pedazos de código en lotes pequenos e relacionados.

## Métodos Máxicos en POO

Para facer o uso de obxectos máis fácil, PHP tamén proba un número de **métodos máxicos**, ou métodos especiais que son chamados cando certas accións comúns ocorren dentro dos obxectos. Isto permite aos desenvolvedores levar a cabo un número de áreas útiles con relativa facilidade.

### Usando Constructores e Destructores

Cando un obxecto é instanciado, é a miúdo desexable establecer algunhas cousas de inmediato. Para manexar isto, PHP nos dá o método máxico `__construct()`, o cal é chamado automaticamente en canto un novo obxecto é creado.

Co propósito de ilustrar o concepto de construtores, engade un constructor a `MyClass` que mostrará unha mensaxe sempre que unha nova instancia da clase sea creada:

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  function public __construct()
  {
      echo 'Iniciouse a clase "', __CLASS__, '"!<br />';
  }

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function public getProperty()
  {
      return $this->prop1 . "<br />";
  }
}

// Crea un novo obxecto
$obj = new MyClass;

// Obtén o valor de $prop1
echo $obj->getProperty();

// Sae unha mensaxe ao final do arquivo
echo "Fin do arquivo.<br />";

?>
```

**Nota —** `__CLASS__` devolve o nome da clase desde a que é chamada; isto é o que se coñece como [constante máxica](http://us3.php.net/manual/en/language.constants.predefined.php). Hai moitas constantes máxicas dispoñibles, sobre as que podes ler máis no manual de PHP.

Recarga o arquivo no teu navegador para producir o seguinte resultado:

```text
A clase "MyClass" foi iniciada!
Son unha propiedade de clase!
Fin do arquivo.
```

Para chamar a unha función cando o obxecto está destruído, o método máxico `__destruct()` está dispoñible. Esto é útil para facer a limpeza da clase (cerrar conexións á base de datos, por exemplo).

Mostra unha mensaxe cando o obxecto está destruído definindo o método máxico `__destruct()` en `MyClass`:

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  function public __construct()
  {
      echo 'Iniciouse a clase "', __CLASS__, '"!<br />';
  }

  function public __destruct()
  {
      echo 'A clase "', __CLASS__, '" foi destruída.<br />';
  }

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function public getProperty()
  {
      return $this->prop1 . "<br />";
  }
}

// Crea un novo obxecto
$obj = new MyClass;

// Obtén o valor de $prop1
echo $obj->getProperty();

// Sae unha mensaxe ao final do arquivo
echo "Fin do arquivo.<br />";

?>
```

Cun destrutor definido, recargando o arquivo que mostra a seguinte saída:

```text
A clase "MyClass" foi iniciada!
Son unha propiedade de clase!
Fin do arquivo.
A clase "MyClass" foi destruída.
```

> "Cando se alcanza o final dun arquivo, PHP libera automaticamente todos os recursos."

Para lanzar explícitamente o destructor, podes destruír os obxectos usando a función `unset()`:

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  function public __construct()
  {
      echo 'Iniciouse a clase "', __CLASS__, '"!<br />';
  }

  function public __destruct()
  {
      echo 'A clase "', __CLASS__, '" foi destruída.<br />';
  }

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function public getProperty()
  {
      return $this->prop1 . "<br />";
  }
}

// Crea un novo obxecto
$obj = new MyClass;

// Obtén o valor de $prop1
echo $obj->getProperty();

// Destruír o obxecto
unset($obj);

// Sae unha mensaxe ao final do arquivo
echo "Fin do arquivo.<br />";

?>
```

Agora os resultados cambian cando recargas o teu navegador:

```text
A clase "MyClass" foi iniciada!
Son unha propiedade de clase!
A clase "MyClass" foi destruída.
Fin do arquivo.
```

### Converter nunha cadea

Para evitar erros se un script intenta escribir `MyClass` como unha cadea, se usa outro método máxico chamado `__toString()`.

Sin `__troString()`, *intentar escribir o obxecto como unha cadea provoca un erro fatal* . Trata de usar `echo` para escribir o obxecto sen usar un método máxico no seu lugar:

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  function public __construct()
  {
      echo 'Iniciouse a clase "', __CLASS__, '"!<br />';
  }

  function public __destruct()
  {
      echo 'A clase "', __CLASS__, '" foi destruída.<br />';
  }

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function public getProperty()
  {
      return $this->prop1 . "<br />";
  }
}

// Crea un novo obxecto
$obj = new MyClass;

// Sae o obxecto como unha cadea
eco $obj;

// Destruír o obxecto
unset($obj);

// Sae unha mensaxe ao final do arquivo
echo "Fin do arquivo.<br />";

?>
```

Esto produce o seguinte resultado:

```text
A clase "MyClass" foi iniciada!

Erro fatal detectable: o obxecto da clase MyClass non se puido converter en cadea en /Applications/XAMPP/xamppfiles/htdocs/testing/test.php na liña 40
```

Para evitar este erro, engade un método `__toString()`:

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  function public __construct()
  {
      echo 'Iniciouse a clase "', __CLASS__, '"!<br />';
  }

  function public __destruct()
  {
      echo 'A clase "', __CLASS__, '" foi destruída.<br />';
  }

  function public __toString()
  {
      echo "Uso do método toString: ";
      return $this->getProperty();
  }

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function public getProperty()
  {
      return $this->prop1 . "<br />";
  }
}

// Crea un novo obxecto
$obj = new MyClass;

// Sae o obxecto como unha cadea
echo $obj;

// Destruír o obxecto
unset($obj);

// Sae unha mensaxe ao final do arquivo
echo "Fin do arquivo.<br />";

?>
```

Neste caso, intentar converter o obxecto nunha cadea acaba cunha chamada ao método `getProperty()`. Carga o script test no teu navegador para ver o resultado:

```php
A clase "MyClass" foi iniciada!
Usando o método toString: son unha propiedade de clase!
A clase "MyClass" foi destruída.
Fin do arquivo.
```

**Consello** — Ademais dos métodos máxicos tratados nesta sección, hai outros moitos dispoñibles. Para unha lista completa dos métodos máxicos, mira a [páxina do manual PHP](http://us2.php.net/manual/en/language.oop5.magic.php)

## Usando Herencia de Clase

**As clases poden heredar os métodos e propiedades de outra clase** usando a palabra reservada `extends`. Por exemplo, para crear unha segunda clase que extenda `MyClass` e engada un método, engadirías o seguinte no teu arquivo test:

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  function public __construct()
  {
      echo 'Iniciouse a clase "', __CLASS__, '"!<br />';
  }

  function public __destruct()
  {
      echo 'A clase "', __CLASS__, '" foi destruída.<br />';
  }

  function public __toString()
  {
      echo "Uso do método toString: ";
      return $this->getProperty();
  }

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function public getProperty()
  {
      return $this->prop1 . "<br />";
  }
}

class MyOtherClass extends MyClass
{
  function public newMethod()
  {
      echo "Desde un novo método en " . __CLASE__ . ".<br />";
  }
}

// Crea un novo obxecto
$newobj = novo MyOtherClass;

// Sae o obxecto como unha cadea
echo $newobj->newMethod();

// Usa un método da clase pai
echo $newobj->getProperty();

?>
```

En canto recargues o teu arquivo proba no teu navegador, mostrará o seguinte:

```text
A clase "MyClass" foi iniciada!
Desde un novo método en MyOtherClass.
Son unha propiedade de clase!
A clase "MyClass" foi destruída.
```

### Sobreescribindo Propiedades e Métodos Heredados

Para cambiar o comportamento dunha propiedade ou método existente na nova clase, simplemente sobreescríbelo declarando de novo na nova clase:

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  function public __construct()
  {
      echo 'Iniciouse a clase "', __CLASS__, '"!<br />';
  }

  function public __destruct()
  {
      echo 'A clase "', __CLASS__, '" foi destruída.<br />';
  }

  function public __toString()
  {
      echo "Uso do método toString: ";
      return $this->getProperty();
  }

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function public getProperty()
  {
      return $this->prop1 . "<br />";
  }
}

class MyOtherClass extends MyClass
{
  function public __construct()
  {
      echo "Un novo construtor en " . __CLASE__ . ".<br />";
  }

  function public newMethod()
  {
      echo "Desde un novo método en " . __CLASE__ . ".<br />";
  }
}

// Crea un novo obxecto
$newobj = new MyOtherClass;

// Sae o obxecto como unha cadea
echo $newobj->newMethod();

// Usa un método da clase pai
echo $newobj->getProperty();

?>
```

Isto cambia a saída no navegador a:

```text
Un novo construtor en MyOtherClass.
Desde un novo método en MyOtherClass.
Son unha propiedade de clase!
A clase "MyClass" foi destruída.
```

### Preservar a Funcionalidade Orixinal do Método Mentras se Sobreescriben Métodos

Para engadir unha nova funcionalidade a un método heredado mentres se mantén o método orixinal intacto, se usa a palabra reservada `parent` co **operador de resolución de ámbito** ( `::`):

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  function public __construct()
  {
      echo 'Iniciouse a clase "', __CLASS__, '"!<br />';
  }

  function public __destruct()
  {
      echo 'A clase "', __CLASS__, '" foi destruída.<br />';
  }

  function public __toString()
  {
      echo "Uso do método toString: ";
      return $this->getProperty();
  }

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function public getProperty()
  {
      return $this->prop1 . "<br />";
  }
}

class MyOtherClass extends MyClass
{
  function public __construct()
  {
      parent::__construct(); // Chama ao construtor da clase pai
      echo "Un novo construtor en " . __CLASE__ . ".<br />";
  }

  function public newMethod()
  {
      echo "Desde un novo método en " . __CLASE__ . ".<br />";
  }
}

// Crea un novo obxecto
$newobj = new MyOtherClass;

// Sae o obxecto como unha cadea
echo $newobj->newMethod();

// Usa un método da clase pai
echo $newobj->getProperty();

?>
```

Esto amosa o resultado tanto do construtor da clase padre como o do constructor da nova clase:

```text
A clase "MyClass" foi iniciada!
Un novo construtor en MyOtherClass.
Desde un novo método en MyOtherClass.
Son unha propiedade de clase!
A clase "MyClass" foi destruída.
```

## Asignando o Ámbito de Propiedades e Métodos

Para engadir control sobre os obxectos, se asigna un ámbito aos métodos e propiedades. Isto controla cómo e desde onde se pode acceder ás propiedades e aos métodos- Hai tres palabras reservadas de ámbito: `public`, `protected`, e `private`. Ademais do seu ámbito, un método ou propiedade pode ser declarado como `static`, o que lles permite acceder sen unha instanciación da clase.

> "Para engadir control sobre obxectos, aos métodos e propiedades se lles asigna un ámbito."

**Nota** — O ámbito é unha característica estandar desde PHP5.

### Propiedades e Métodos Públicos

Todos os métodos e propiedades que usaches ata agora eran públicos. Isto significa que poden ser accedidos desde calquera parte, tanto desde o interior como do exterior da clase.

### Propiedades e Métodos Protexidos

Cando unha propiedade ou método se declara `protected`, **só pode ser accedido desde o interior da propia clase ou das súas fillas** (clases que extenden a clase que conteñen o método protexido)

Declara o método `getProperty()` como protegido en `MyClass` e intenta acceder directamente desde fora da clase:

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  function public __construct()
  {
      echo 'Iniciouse a clase "', __CLASS__, '"!<br />';
  }

  function public __destruct()
  {
      echo 'A clase "', __CLASS__, '" foi destruída.<br />';
  }

  function public __toString()
  {
      echo "Uso do método toString: ";
      return $this->getProperty();
  }

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function protected getProperty()
  {
      return $this->prop1 . "<br />";
  }
}

class MyOtherClass extends MyClass
{
  function public __construct()
  {
      parent::__construct();
echo "Un novo construtor en " . __CLASE__ . ".<br />";
  }

  function public newMethod()
  {
      echo "Desde un novo método en " . __CLASE__ . ".<br />";
  }
}

// Crea un novo obxecto
$newobj = new MyOtherClass;

// Intento chamar a un método protexido
echo $newobj->getProperty();

?>
```

En canto intentes executar este script, se mostrarán os seguintes erros:

```text
A clase "MyClass" foi iniciada!
Un novo construtor en MyOtherClass.

Erro fatal: chamar ao método protexido MyClass::getProperty() desde o contexto '' en /Applications/XAMPP/xamppfiles/htdocs/testing/test.php na liña 55
```

Agora, crea un novo método `MyOtherClass` para chamar ao método `getProperty()`:

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  function public __construct()
  {
      echo 'Iniciouse a clase "', __CLASS__, '"!<br />';
  }

  function public __destruct()
  {
      echo 'A clase "', __CLASS__, '" foi destruída.<br />';
  }

  function public __toString()
  {
      echo "Uso do método toString: ";
      return $this->getProperty();
  }

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function protected getProperty()
  {
      return $this->prop1 . "<br />";
  }
}

class MyOtherClass extends MyClass
{
  function public __construct()
  {
      parent::__construct();
echo "Un novo construtor en " . __CLASE__ . ".<br />";
  }

  function public newMethod()
  {
      echo "Desde un novo método en " . __CLASE__ . ".<br />";
  }

  function public callProtected()
  {
      return $this->getProperty();
  }
}

// Crea un novo obxecto
$newobj = new MyOtherClass;

// Chama ao método protexido desde un método público
echo $newobj->callProtected();

?>
```

Esto xera o resultado desexado:

```text
A clase "MyClass" foi iniciada!
Un novo construtor en MyOtherClass.
Son unha propiedade de clase!
A clase "MyClass" foi destruída.
```

### Propiedades e Métodos Privados

Unha propiedade ou método declarado `private` é accesible **só desde o interior da clase que o define**. Isto significa que *aínda que unha nova clase extenda a clase que define a propiedade privada* , esta propiedade ou método non estará dispoñible nen siquera no interior da clase filla.

Para demostrar isto, declarar `getProperty()` como privada en `MyClass`, e intenta chamar a `callProtected()` desde
`MyOtherClass`:

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  function public __construct()
  {
      echo 'Iniciouse a clase "', __CLASS__, '"!<br />';
  }

  function public __destruct()
  {
      echo 'A clase "', __CLASS__, '" foi destruída.<br />';
  }

  function public __toString()
  {
      echo "Uso do método toString: ";
      return $this->getProperty();
  }

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function private getProperty()
  {
      return $this->prop1 . "<br />";
  }
}

class MyOtherClass extends MyClass
{
  function public __construct()
  {
      parent::__construct();
      echo "Un novo construtor en " . __CLASE__ . ".<br />";
  }

  function public newMethod()
  {
      echo "Desde un novo método en " . __CLASE__ . ".<br />";
  }

  function public callProtected()
  {
      return $this->getProperty();
  }
}

// Crea un novo obxecto
$newobj = new MyOtherClass;

// Usa un método da clase pai
echo $newobj->callProtected();

?>
```

Recarga o teu navegador, e aparecerá o seguinte erro:

```php
A clase "MyClass" foi iniciada!
Un novo construtor en MyOtherClass.

Erro grave: chamada ao método privado MyClass::getProperty() desde o contexto 'MyOtherClass' en /Applications/XAMPP/xamppfiles/htdocs/testing/test.php na liña 49
```

### Propiedades e Métodos Estáticos

Un método ou propiedade declarada `static` pode ser accedido sen instanciar primeiro a clase; simplemente probe o nome da clase, o operador de resolución de ámbito, e o nome da propiedade ou método.

> "Un dos maiores beneficios de usar propiedades estáticas é que mantén os seus valores almacenados ao longo da execución do script."

Para demostrar esto, engade unha propiedade estática chamada `$count` e un método estático chamado `plusOne()` en `MyClass`. Despois inserta un bucle `do...while` para aumentar o valor de `$count` mentres o valor sea menor que 10:

```php
<?php

class MyClass
{
  public $prop1 = "Son unha propiedade de clase!";

  public static $count = 0;

  function public __construct()
  {
      echo 'Iniciouse a clase "', __CLASS__, '"!<br />';
  }

  function public __destruct()
  {
      echo 'A clase "', __CLASS__, '" foi destruída.<br />';
  }

  function public __toString()
  {
      echo "Uso do método toString: ";
      return $this->getProperty();
  }

  function public setProperty($newval)
  {
      $this->prop1 = $newval;
  }

  function private getProperty()
  {
      return $this->prop1 . "<br />";
  }

  function static public plusOne()
  {
      return "O reconto é " . ++self::$count . ".<br />";
  }
}

class MyOtherClass extends MyClass
{
  function public __construct()
  {
      parent::__construct();
      echo "Un novo construtor en " . __CLASE__ . ".<br />";
  }

  function public newMethod()
  {
      echo "Desde un novo método en " . __CLASE__ . ".<br />";
  }

  function public callProtected()
  {
      return $this->getProperty();
  }
}

do
{
  // Chama a plusOne sen crear unha instancia de MyClass
  echo MyClass::plusOne();
} while ( A miñaClase::$conto < 10 );

?>
```

**Nota** — Cando se acceda a propiedades estáticas, o símbolo de dolar
( `$`) vai *despois do operador de resolución de ámbito* .

Cando cargues este script no teu navegador, venda o seguinte:

```text
A conta é 1.
A conta é 2.
A conta é 3.
O reconto é 4.
O reconto é 5.
A conta é 6.
A conta é 7.
A conta é 8.
A conta é 9.
A conta é 10.
```

## Comentando con DocBlocks (Bloques de documentación)

> "O estilo de comentarios DockBlock é un método
> ampliamente aceptado de documentación de clases."

Aínda que non é unha parte oficial da POO, o estilo de comentarios [DockBlock](https://en.wikipedia.org/wiki/PHPDoc) é un método ampliamente aceptado de clases documentais. A parte de probar un estándar para
os desenvolvedores para escribir código, tamén foi adoptado por moitos dos kits de desenvolvemento de software (SDK) máis populares como [Eclipse](http://eclipse.org/) e [NetBeans](http://netbeans.org/) , e se utilizará para xerar suxestións de código.

Un DocBlock se define usando un bloque de comentario que empieza cun asterisco adicional:

```php
/**
 * Este é un DocBlock moi básico
 */
```

O poder real dos DocBlocks reside na posibilidade de usar **tags** (etiquetas), que empiezan co símbolo ( `@`) inmediatamente seguido polo nome da etiqueta e o valor da etiqueta. **As etiquetas de DocBlock permiten aos desenvolvedores definir autores para o arquivo, a licenza para a clase, a información da propiedade ou do método, e outra información útil.**

As etiquetas máis comunes se usan como segue:

- **@author** : El autor del elemento actual (como podría ser una clase, archivo, método, o cualquier pedazo de código) se lista usando esta etiqueta Se pueden usar múltiples etiquetas de autor no mismo DocBlock si hay más de un autor involucrado. O formato do nome do autor é `John Doe <john.doe@email.com>`
- @copyright: detallado o ano e o nome do copyright do propietario dos dereitos do elemento actual. O formato é `2010 Propietario de los Derechos`.
- **@license** : Esto enlaza coa licenza do elemento actual. El formato para la información de licencia es
  `http://www.example.com/path/to/license.txt Nombre de la licencia`.
- **@var** : Mantiene o tipo e descrición dunha variable ou propiedade de clase. O formato é `tipo elemento descripción`.
- **@param** : Esta etiqueta mostra o tipo e a descrición dos parámetros dunha función ou método. O formato é`tipo $nombre_del_elemento descripción_del_elemento.`
- **@return** : O tipo e descrición do valor de retorno dunha función ou método se detallan nesta etiqueta. O formato é `tipo return elemento descripción`.

Un exemplo de clase comentada con DockBlocks tendría este aspecto:

```php
<?php

/**
 * Unha clase sinxela
 *
 * Esta é a descrición longa desta clase,
 * que pode abarcar tantas liñas como sexa necesario. É
 * non é necesario, mentres que a descrición breve é
 *necesario.
 *
 * Tamén pode abarcar varios parágrafos se o
 * A descrición merece tanta verborrea.
 *
 * @autor Jason Lengstorf <jason.lengstorf@ennuidesign.com>
 * @copyright 2010 Ennui Design
 * @license http://www.php.net/license/3_01.txt Licenza PHP 3.01
 */
class SimpleClass
{
  /**
   * Unha variable pública
   *
   * @var string almacena datos para a clase
   */
  public $foo;

  /**
   * Establece $foo nun novo valor ao crear unha instancia de clase
   *
   * @param cadea $val un valor necesario para a clase
   * @return nulo
   */
  function public __construct($val)
  {
      $this->foo = $val;
  }

  /**
   * Multiplica dous números enteiros
   *
   * Acepta un par de números enteiros e devolve o
   * produto dos dous.
   *
   * @param int $bat un número a multiplicar
   * @param int $baz un número a multiplicar
   * @return int o produto dos dous parámetros
   */
  
  function public ($bat, $baz)
  {
      return $bat * $baz;
  }
}

?>
```

Unha vez analiza a clase anterior, os beneficios dos DocBlock son aparentes: todo está claramente definido da forma que o seguinte desenvolvedor que trate o código *nunca terá que supoñer que fai un fragmento de código ou que debería contener* .

## Comparando Código de Orientación a Obxectos e Procedural

En realidade non hai unha forma correcta e incorrecta de escribir. Como se ha dicho, **esta sección resume un argumento sólido para adoptar unha aproximación á orientación a obxectos no desenvolvemento de software, especialmente en aplicacións grandes** .

## Razón 1: Facilidade de Implementación

> "Mientras que pode abrumar ao principio, a POO en realidade otorga unha aproximación máis sencilla para tratar con datos."

Mentres que pode abrirse ao principio, a POO en realidade otorga unha aproximación máis sencilla para tratar con datos. Dado que un obxecto pode almacenar datos internamente, as variables non necesitan pasar de función en función para funcionar adecuadamente.

Ademais, *dado que poden existir simultáneamente múltiples instancias da mesma clase* , tratar con grandes conxuntos de datos é infinitamente máis fácil. Por exemplo, imaxina que temos información das persoas sendo procesadas nun arquivo. Os seus nomes, traballos e edades.

### La Aproximación Procesual

Aquí temos a aproximación procedimental ao noso exemplo:

```php
<?php

función cambioJob($persoa, $novo traballo)
{
  $persoa['traballo'] = $novo traballo; // Cambiar o traballo da persoa
  return $persoa;
}

función happyBirthday($person)
{
  ++$persoa['idade']; // Engade 1 á idade da persoa
  return $persoa;
}

$persoa1 = matriz(
  'name' => 'Tom',
  'job' => 'Presionador de botóns',
  'idade' => 34
);

$persoa2 = matriz(
  'name' => 'Xoán',
  'job' => 'Puller de palanca',
  'idade' => 41
);

// Sae os valores iniciais para as persoas
echo "<pre>Persoa 1: ", print_r($persoa1, TRUE), "</pre>";
echo "<pre>Persoa 2: ", print_r($persoa2, TRUE), "</pre>";

// Tom conseguiu un ascenso e tivo un aniversario
$persoa1 = cambio de traballo ($persoa1, 'Box-Mover');
$persoa1 = felizCumpleanos($persoa1);

// Xoán acaba de cumprir anos
$persoa2 = felizCumpleanos($persoa2);

// Saír os novos valores para a xente
echo "<pre>Persoa 1: ", print_r($persoa1, TRUE), "</pre>";
echo "<pre>Persoa 2: ", print_r($persoa2, TRUE), "</pre>";

?>
```

Cando o executemos, o código mostra o seguinte:

```php
Persoa 1: Array
(
  [nome] => Tom
  [traballo] => Pulsador de botóns
  [idade] => 34
)
Persoa 2: Array
(
  [nome] => Xoán
  [traballo] => Tirador de panca
  [idade] => 41
)
Persoa 1: Array
(
  [nome] => Tom
  [traballo] => Box-Mover
  [idade] => 35
)
Persoa 2: Array
(
  [nome] => Xoán
  [traballo] => Tirador de panca
  [idade] => 42
)
```

Mentres que este código non é necesariamente malo, hai un montón de cousas a ter en conta mentres se codifica. **El array de los atributos de las personas afectadas debe ser pasado e devuelta en cada llamada a función** , lo cual deja margen para el error.

Para reformar este exemplo, sería desexable **deixar o mínimo de cousas para o desenvolvedor como sea posible** . Só a información absolutamente necesaria para a operación actual debería ser pasada ás funcións.

**Aquí é onde a POO impón e che axuda a depurar as cousas.**

### A aproximación con POO

Aquí está a aproximación con POO ao noso exemplo:

```php
<?php

Persoa de clase
{
  privado $_name;
  $_traballo privado;
  privado $_age;

  función pública __construír($nome, $traballo, $idade)
  {
      $this->_name = $nome;
      $este->_traballo = $traballo;
      $este->_idade = $idade;
  }

  función pública changeJob($newjob)
  {
      $este->_traballo = $novo traballo;
  }

  función pública happyBirthday()
  {
      ++$esta->_idade;
  }
}

// Crea dúas persoas novas
$persoa1 = Persoa nova("Tom", "Presionador de botóns", 34);
$persoa2 = Persoa nova("Xoán", "Puller de panca", 41);

// Saír o seu punto de partida
echo "<pre>Persoa 1: ", print_r($persoa1, TRUE), "</pre>";
echo "<pre>Persoa 2: ", print_r($persoa2, TRUE), "</pre>";

// Dálle a Tom unha promoción e un aniversario
$persoa1->changeJob("Box-Mover");
$persoa1->happyBirthday();

// Xoán só fai un ano maior
$persoa2->happyBirthday();

// Sae os valores finais
echo "<pre>Persoa 1: ", print_r($persoa1, TRUE), "</pre>";
echo "<pre>Persoa 2: ", print_r($persoa2, TRUE), "</pre>";

?>
```

Amosa a seguinte saída no navegador:

```php
Persoa 1: Persoa Obxecto
(
  [_name:private] => Tom
  [_job:private] => Pulsador de botóns
  [_age:private] => 34
)

Persoa 2: Persoa Obxecto
(
  [_name:private] => Xoán
  [_job:private] => Extractor de panca
  [_age:private] => 41
)

Persoa 1: Persoa Obxecto
(
  [_name:private] => Tom
  [_job:private] => Box-Mover
  [_age:private] => 35
)

Persoa 2: Persoa Obxecto
(
  [_name:private] => Xoán
  [_job:private] => Extractor de panca
  [_age:private] => 42
)
```

Hai un pouco máis de organización involucrada de cara á aproximación orientada aos obxectos, pero tras definir a clase, crear e modificar persoas é pan comido, a información dunha persoa non **necesita ser pasada ou devuelta desde os métodos, e só a información absolutamente. esencial se pasa a cada método** .

> "La POO reducirá significativamente tu carga de trabajo si se implementa adecuadamente"

A pequena escala, esta diferenza pode non parecer gran cousa, pero ao crecer as súas aplicacións en tamaño, a POO reducirá significativamente a súa carga de traballo si se implementa adecuadamente.

**Consello** — *Non todo necesita ser orientado a obxectos.* Unha función rápida que manexa algo pequeno nun lugar dentro da aplicación non necesita necesariamente estar envuelto nunha clase. Usa o teu mellor xusto ao decidir entre aproximación con orientación a obxectos e procedimentais.

## Razón 2: Mellor Organización

Otro beneficio da POO é cómo ben se presta a ser **facilmente empaquetado e catalogado.** Cada clase pode ser contenida xeralmente dentro do seu propio arquivo por separado, e se usa unha nomenclatura uniforme, acceder ás clases é extremadamente simple.

Asume que tens unha aplicación con 150 clases que son chamadas dinámicamente a través dun arquivo controlador na raíz do sistema de arquivos da túa aplicación. Todas as 150 clases seguen a nomenclatura `class.classname.inc.php`e residen na carpeta `inc`da túa aplicación.

O controlador pode implementar a función de PHP `_autoload()`para acceder dinámicamente só ás clases que necesitan chamar, no lugar de incluír todas as 150 clases no arquivo do controlador por si acaso ou con algunha forma intelixente de incluír os arquivos no seu propio código:

```php
<?php
  función __autoload($class_name)
  {
      include_once 'inc/class.' . $nome_clase . '.inc.php';
  }
?>
```

Tendo cada clase nun arquivo separado tamén fai o código máis portátil e máis fácil de reusar en aplicacións novas sen un montón de copia e pega.

## Razón 3: Facilidade de Mantenimiento

Debido á natureza máis compacta da POO cando se usa correctamente, **os cambios no código son normalmente máis fáciles de localizar** e de facer que nun código espagueti da implementación procesual.

Se un array particular de información engade un novo atributo, unha parte do código dun software procedural podería requerir (no peor dos escenarios) que o novo atributo deba ser añadido a cada función que use dito array.

Nunha aplicación de POO podería ser potencialmente actualizada facilmente engadindo unha nova propiedade e despois engadindo métodos que manexen dita propiedade.

Moitos dos beneficios que comentaremos son froito dunha **POO combinada con prácticas de programación DRY** . Definitivamente é posible crear código procedimental fácil de manter que non cause pesadelos, e igualmente posible crear un código horrible orientado a obxectos.

## Resumo

Neste punto, deberías sentirte cómodo co estilo de programación orientado a obxectos. Aprender POO é unha gran maneira de levar a túa programación ao seguinte nivel. Cando se implemente apropiadamente, a POO axudará a producir un código fácil de leer, manter e portátil que che aforrará (xa os desenvolvedores con outros traballos) horas de traballo extra.

[Jason Lengstorf](https://tutsplus.com/authors/jason-lengstorf)Última actualización 24 de febreiro de 2022

[ *Pro PHP y jQuery* ] é unha boa referencia da combinación de bos hábitos de codificación xunto á POO para xerar código que sexa fácil de ler e manter.
