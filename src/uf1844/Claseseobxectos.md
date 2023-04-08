# Clases e obxectos

**Por que necesitamos clases e obxectos?**

**Que é un obxecto?**

Pensar en obxectos é moi parecido a como vemos o mundo, se miramos ao noso arredor todo está formado por obxectos, sexa unha casa, un coche, unha folla, etc. Cada obxecto está composto por dúas cousas fundamentais, as súas propiedades e os seus comportamentos. Por exemplo, podemos dicir que un Teléfono ten propiedades como a cor, o modelo ou a compañía telefónica, e ten comportamentos como facer chamadas, enviar mensaxes de texto, entre outros. Podemos utilizalo como base para a Programación Orientada a Obxectos, transformando un elemento da vida real en elementos utilizables dentro da programación.

Como xa se sabe, un obxecto, aínda que sexa o mesmo, pode ter diferentes comportamentos ou propiedades.Continuando co exemplo anterior, o obxecto pode ser un Teléfono, pero hai un gran número de teléfonos de moitas marcas, cores, tamaños. , e características que o fan diferente dos outros, isto define cal é a identidade do obxecto, xa que aínda que comparten características similares, como chamadas, on, off, entre outras, cada un ten algo que o fai diferente.

Os obxectos dentro da programación son moi similares á realidade. Pois ben, un obxecto en programación ten propiedades (ou tamén chamados atributos) e comportamentos (que serían as funcións tamén chamadas métodos).

**As clases**

Podemos ver as clases como unha abstracción dun elemento da vida real para transformalas en elementos utilizables dentro da programación. As clases están formadas tanto por propiedades (que son como variables dentro da clase) como por métodos (que son como funcións dentro da clase).

Como se mencionou anteriormente, podemos comparar as propiedades coas variables dentro da clase, no exemplo do vídeo temos o nome e apelidos como propiedades da Clase Persoa

```var $firstName, $lastName;```

Un método é unha acción realizada por un obxecto, estes defínense como as funcións da clase. Por exemplo, o método **fullName** devolve o nome completo dunha persoa.

```php
function fullName()
{
    return $this->firstName . ' ' . $this->lastName;
}
```

Pódese dicir que as clases son só modelos cuxos métodos ou accións non se executarán mentres non exista ningún obxecto que requira a súa aplicación.

Para crear unha nova instancia dun obxecto temos a nova palabra clave:

```php
$person1 = new Person('Duilio','Palacios');
```

Agora vexamos que función cumpre o método construtor:

```php
function __construct($firstName, $lastName)
{
    $this->firstName = $firstName;
    $this->lastName  = $lastName;
}
```

Dentro do código dun constructor, adoitan asignarse os valores dalgunhas ou de todas as propiedades do devandito obxecto, co fin de garantir que o obxecto se crea con valores iniciais. Así, execútase un método construtor cada vez que se crea unha instancia da clase. Non é obrigatorio ter un, pero adoitan ser bastante útiles. No noso exemplo, cando se inicia un obxecto de tipo Persoa, asignará as propiedades $firstName e $lastName cos datos que colocamos cando creamos unha instancia do noso obxecto.

``$person1 = new Person('Duilio', 'Palacios');``

Para asignar valores ou referirnos á propiedade dentro dunha clase usamos **$this** , por exemplo se usamos **$this->firstName** referímonos á variable dentro da nosa clase Person.

Cada vez que se crea unha instancia dunha clase, créase un novo obxecto:

``$person2 = new Person('Ramon', 'Lapenta');``

Con isto creamos dous obxectos de tipo persoa, e cada un ten o seu nome e apelidos. Deste xeito podemos evitar a repetición de código.

Pódese acceder aos métodos con moita facilidade, utilizando a data ( **->** ) que nos permite acceder ás propiedades ou métodos da nosa Clase.

``echo "{$person1->fullName()} es amigo de {$person2->fullName()}";``

#### Exemplo

Imos facer un exercicio cun Teléfono, que neste caso sería o obxecto da clase, algunhas das características poden ser modelo, cor e compañía, por outra banda dentro das súas funcións temos que facer chamadas e enviar mensaxes. A partir diso, podemos crear o noso obxecto:

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
        return 'Estoy llamando a otro móvil';
    }

    function sms()
    {
        return "Estoy enviando un mensaje de texto";
    }
}

$nokia = new Phone('Nokia', 'Blanco', 'Movistar');
```

Como se puido observar, as características forman parte das propiedades do obxecto, definidas en variables, e as funcións son as accións ou métodos que pode levar a cabo dito obxecto. Temos que usar o símbolo `->` para interactuar con estas propiedades e métodos:

```php
echo $nokia->call(); // Estoy llamando a otro móvil
echo $nokia->color; // Imprimirá Blanco
```

#### Exercicios propostos

1. Fai unha definición dun obxecto da túa elección, por exemplo: Un coche. Teño un Toyota vermello con catro portas que pode acelerar e tocar a bocina.
2. A partir do exercicio anterior, procede a crear unha clase coas propiedades e métodos que consideres dentro da túa definición.
