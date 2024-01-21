# Clases e obxectos

**Por que necesitamos clases e obxectos?**

**Que é un obxecto?**

Pensar en obxectos é moi parecido a como vemos o mundo, se miramos ao noso arredor todo está formado por obxectos, sexa unha casa, un coche, unha actividade, etc. Cada obxecto está composto por dúas cousas fundamentais, as súas **propiedades** e os seus comportamentos -**métodos**-. Por exemplo, podemos dicir que un *teléfono* ten propiedades como a cor, o modelo ou a compañía telefónica, e ten comportamentos como facer chamadas, enviar mensaxes de texto,... . Abstraer deste xeito a definición dun obxecto ou elemento da vida real permite que estes sexan utilizables dentro da programación de software, e é a base da Programación Orientada a Obxectos.

Un obxecto pode ter diferentes comportamentos ou propiedades. Continuando co exemplo anterior, o obxecto pode ser un *teléfono*, pero hai un gran número de teléfonos de moitas marcas, cores, tamaños e características que o fan diferente dos outros, isto define cal é a identidade do obxecto, xa que aínda que comparten características similares, como chamadas, apagado, aceso, entre outras, cada un ten algo que o fai diferente.

Os obxectos dentro da programación son moi similares á realidade. Pois ben, un obxecto en programación ten propiedades (ou atributos) e comportamentos (funcións tamén chamadas métodos).

**As clases**

Podemos ver as clases como unha **abstracción** dos elementos da vida real para transformalos en elementos utilizables dentro da programación. As clases están formadas tanto por propiedades (que son como variables dentro da clase) como por métodos (que son como funcións dentro da clase).

Podemos comparar as propiedades dun obxecto coas variables que gardan os datos fundamentais que o definen. Estas propiedades se declaran dentro da clase. Por exemplo, supoñamos a clase *Persoa*, na que `nome` e `apelidos` son propiedades da mesma

```var $firstName, $lastName;```

Un método é unha acción realizada por un obxecto, estes defínense como as funcións da clase. Por exemplo, o método **fullName** devolve o nome completo dunha persoa.

```php
function fullName()
{
    return $this->firstName . ' ' . $this->lastName;
}
```

Pódese dicir que as clases son só modelos cuxos métodos ou accións non se executarán mentres non exista ningún obxecto que requira a súa aplicación.

Para crear unha nova instancia dun obxecto temos a palabra clave `new`:

```php
$persoa1 = new Persoa('Xian','Pelouro');
```

Agora vexamos que función cumpre o método ``__construct``:

```php
function __construct($firstName, $lastName)
{
    $this->firstName = $firstName;
    $this->lastName  = $lastName;
}
```

Dentro do código dun *constructor*, adoitan asignarse os valores dalgunhas ou de todas as propiedades do devandito obxecto, co fin de garantir que o obxecto se cree cos valores iniciais. Así, execútase un método construtor cada vez que se crea unha instancia da clase. Non é obrigatorio ter un, pero adoitan ser bastante útiles. No exemplo, cando se inicia un obxecto de tipo *Persoa*, asignará as propiedades ``$firstName`` e ``$lastName`` cos datos que colocamos cando creamos unha instancia do noso obxecto.

```php
$persoa1 = new Persoa('Xian','Pelouro');
```

Para asignar valores ou referirnos á propiedade dentro dunha clase usamos **``$this``**, por exemplo se usamos **``$this->firstName``** referímonos á variable dentro da nosa clase *Persoa*.

Cada vez que se crea unha instancia dunha clase, créase un novo obxecto:

```php
$persoa2 = new Persoa('Mauro', 'Lanza');
```

Con isto creamos dous obxectos de tipo *persoa*, e cada un ten o seu nome e apelidos. Un xeito óptimo para evitar a repetición de código.

Pódese acceder aos métodos dunha clase coa mesma facilidade, utilizando a sinal ( **``->``** ) que nos permite acceder ás propiedades ou métodos da nosa clase.

```php
echo "{$persoa1->fullName()} é amigo de {$persoa2->fullName()}";
```

#### Exemplo

Imos facer un exercicio cun obxecto Teléfono, que sería o obxecto definido da clase. Algunhas das características poden ser *modelo*, *cor* e *compañía*, e dentro das súas funcións teríamos *facer chamadas* e *enviar mensaxes*. A partir diso, podemos crear o noso obxecto:

```php
/**
 * Clase Telefono
 */
class Phone
{
    var $model;
    var $color;
    var $company;

    function __construct($model, $color, $company)
    {
        $this->model   = $model;
        $this->color   = $color;
        $this->company = $company;
    }

    function call()
    {
        return 'Estou chamando a outro móbil';
    }

    function sms()
    {
        return "Estou enviando unhs mensaxe de texto";
    }
}

$nokia = new Phone('Samsung', 'Branco', 'Movistar');
```

Como se podo observar, as características forman parte das propiedades do obxecto, definidas en variables, e as funcións son as accións ou métodos que pode levar a cabo dito obxecto. Temos que usar o símbolo `->` para interactuar con estas propiedades e métodos:

```php
echo $nokia->call(); // Estou chamando a outro móbil
echo $nokia->color;  // Imprimirá Blanco
```

#### Exercicios propostos

1. A partir do exercicio anterior, procede a crear unha clase coas propiedades e métodos que consideres dentro da túa definición. Fai unha definición dun obxecto da túa elección, por exemplo: un coche. Teño un Toyota vermello con catro portas que pode acelerar e tocar a bucina.
