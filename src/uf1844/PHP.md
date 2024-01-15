# PHP

<https://githut.info/>

Aprender programación orientada a obxectos é esencial para poder desenvolverse con frameworks PHP modernos como Laravel ou Symfony. PHP pasou hai tempo de ser unha linguaxe de modelos para construír sitios persoais a unha poderosa linguaxe orientada a obxectos e unha das linguaxes máis populares na actualidade: [Linguaxes de Programación e GitHub](http://githut.info/) .

De feito, a maioría dos sitios funcionan en **PHP** e hoxe hai diferentes motores de modelos escritos en PHP como Blade ou Twig. Pero volvendo ao tema da POO (Programación Orientada a Obxectos), antes de nada debemos entender por que necesitamos clases e obxectos:

**As clases permítennos agrupar información e accións que podemos realizar con esa información.**

Vexamos un exemplo:

- Temos os seguintes **datos**: nome, apelidos e data de nacemento.
- Esiximos as seguintes accións:
  - Mostra o nome completo da persoa
  - Mostra a idade da persoa

Como podes ver, as accións que debemos executar están vinculadas á información da persoa. Por exemplo: o nome completo require obter o nome e apelidos, mentres que o cálculo da idade depende da data de nacemento.

Agora supoñendo que só coñeces programación estruturada, resolverás o problema anterior deste xeito:

```php
<?php

$firstName = 'John';
$lastName = 'Doe';

$dateOfBirth = '1980-12-01';

function fullName($firstName, $lastName)
{
    return "{$firstName} {$lastName}";
}

function age($dateOfBirth)
{
    // Calcular idade...
    return $age;
}
```

Aquí non hai forma de agrupar que información e que accións van xuntas. Tamén temos outros problemas:

- Non é posible evitar que o programador cambie inadvertidamente a data de nacemento da persoa (é posible que cambie o teu nome se por exemplo tes outra nacionalidade ou te casas, pero a túa data de nacemento seguirá sendo sempre a mesma).
- Sempre teremos que lembrar que argumentos pasar a cada función e en que orde, e isto faise difícil se unha función depende de 3 ou máis argumentos.
- Se quixeramos crear unha segunda persoa, teríamos que crear as variables `$firstName2`, `$lastName2`, `$dateOfBirth2`?

Nalgún momento descubrín matrices e pensei ¡Claro! isto pode axudarme:

```php
<?php

$person = array(
    'firstName' => 'John',
    'latsName' => 'Doe',
    'dateOfBirth' => '1980-12-01',
);
```

Pero, de novo, isto non nos impide facer cambios nun ou varios valores, tamén é difícil lembrar que "claves" necesitamos e non cometer erros ao teclealas. Noto que escribín, adrede, no seu lugar `latsName`de `lastName`?

Ademais, as matrices non nos dan valores predeterminados. E se quixeramos que o usuario tivese un alias de "Convidado" se non iniciou sesión?

Finalmente, chamar ás funcións volveríase aínda máis tedioso:

``fullName($person['firstName'], $person['lastName']);``

## Introdución aos obxectos e clases en PHP

Con obxectos e clases agora é posible agrupar información e accións dun xeito moi sinxelo. O único que debemos pensar é un nome xenérico para a nosa clase, xa que as clases e os obxectos son conceptos diferentes:

**Clase** : é un termo xenérico que, como o nome indica, representa unha clase, tipo ou conxunto. No meu exemplo, xa que quero representar os datos e as accións dunha ou máis persoas, vou chamar á clase Persoa ou Persoa (é unha boa práctica escribir o código en inglés) e isto é todo o que se precisa para facer o "cast" da miña clase:

```php
<?php

class Person
{

}
```

Agora todas as **variables** que necesito para **representar o estado** de cada persoa (Persoa) vou declarar **dentro da clase** e voulles chamar **propiedades:**

```php
<?php

class Person
{
    public $firstName = 'John';
    public $lastName = 'Doe';
    private $dateOfBirth = '1980-12-01;
}
```

Ter en conta que para declarar unha propiedade estou usando 2 **palabras clave** : `public` e `private`:

- `public` significa que se pode acceder á propiedade e modificarse fóra do "cast" (esqueleto ou contexto) da clase.
- `private` indica que non é posible ler ou reescribir a propiedade fóra da clase e isto achéganos un novo concepto moi importante chamado **encapsulación** .

 Por outra banda , tamén converterei todas as **funcións ou accións que van ler ou interactuar con ditos datos (ou propiedades) en** **métodos** **da clase** , só colocando estas funcións dentro da clase:

```php
<?php

class Person
{
    public $firstName = 'John';
    public $lastName = 'Doe';
    private $dateOfBirth = '1980-12-01;

    public function fullName()
    {
        return "{$this->firstName} {$this->lastName}";
    }

    public function age()
    {
        // Calculate age using $this->dateOfBirth...
        return $age;
    }
}
```

Onde foron os parámetros?

Como podes ver, o código é semellante ao que se fai na programación estruturada, pero en lugar de aceptar argumentos externos agora estou a traballar coas **propiedades dentro da clase** e fágoo usando `$this->`.

:info: Mentres que para traballar cunha variable usamos o signo de dólar  `$`, para interactuar cunha propiedade dentro da clase usamos dólar, seguido da palabra "this" e unha frecha: ``$this->``

### declarando un obxecto

Mentres que a **clase** representa o concepto xenérico, un **obxecto** é a representación específica dunha clase. Cando temos unha clase podemos declarar un ou máis obxectos desta clase así:

```php
<?php

$john = new Person("John", "Doe", "1980-12-01");
```

Ter en conta que neste caso usamos o operador "new", seguido do nome da clase e despois os argumentos que acepta o **construtor da clase** .

### Definición do construtor dunha clase

O anterior non funcionará porque de feito a nosa clase non ten ningún construtor. Un construtor é un método máxico ou especial que pode aceptar unha serie de argumentos e permítenos inicializar o obxecto, por exemplo asignando as propiedades mínimas necesarias para que o noso obxecto funcione (por exemplo ter unha identidade única), no noso exemplo parecemos para precisar entón nome, apelidos e data de nacemento:

```php
<?php
class Person {
    public $firstName = 'John';
    public $lastName = 'Doe';
    private $dateOfBirth = '1980-12-01';

    public function __construct($fisrtName, $lastName, $dateOfBirth)
    {
        $this->fisrtName = $firstName;
        $this->lastName = $lastName;
        $this->dateOfBirth = $dateOfBirth;
    }

    public function fullName()
    {
        return {$this->firstName} {$this->lastName};
    }

    public function age()
    {
        // Calculate age using $this->dateOfBirth...
        return $age;
    }
}
```

Os construtores de todas as clases de PHP están definidos co mesmo nome `__construct` e como podes ver, ao igual que as propiedades e o resto dos métodos, poden ser públicos ou privados, pero de momento imos deixalo como público. Con este código podemos proceder a instanciar o noso obxecto:

```php
<?php

$john = new Person("John", "Doe", "1980-12-01");
```

Ter en conta que o construtor é o único método do noso exemplo que está a recibir argumentos, unha vez que asignamos eses argumentos ás propiedades da nosa clase (unha por unha), podemos usar esas propiedades no resto dos métodos:

```php
<?php

class Person
{
    // [El resto del codigo iria aqui]

    public function fullName()
    {
        return "{$this->firstName} {$this->lastName}";
    }
}
```

Neste caso dentro do método `fullName` lemos `firstName` e `lastName`.

Agora ás veces queremos ler e/ou modificar certas propiedades fóra da clase. Se a propiedade é pública podemos conseguilo así:

```php
<?php

$duilio = new Person("John", "Doe", "1980-12-01");

$duilio->firstName = 'Duilio';
```

Pero se a propiedade é privada, imos obter unha excepción, polo que para acceder a ela fóra da clase debemos declarar métodos coñecidos como **getters ou setters** :

```php
<?php

class Person
{
    // [El resto del codigo iria aqui]

    public function getDateOfBirth()
    {
        return $this->dateOfBirth;
    }

    public function setDateOfBirth($date)
    {
        $this->dateOfBirth = $date;
    }
}
```

Os getters ou setters son métodos comúns que nos permiten obter ou substituír o valor dunha propiedade, respectivamente:

- Con `getDateOfBirth`obtemos a data de nacemento da persoa.
- Con `setDateOfBirth`substituiríamos a data de nacemento da persoa.

Agora xa non temos ningunha limitación para cambiar a data de nacemento de alguén a outra data:

```php
<?php

$duilio = new Person("Duilio", "Doe", "1980-12-01");

$duilio->setDateOfBirth("2002-01-01");
```

Grazas ao código anterior, agora só teño uns 15 anos, polo que podo deixar de escribir este tutorial e ir xogar coa Playstation. Desafortunadamente, isto non é posible na vida real, polo que tampouco debería permitilo no meu programa, neste caso podo solucionar isto deixando dateOfBirth como propiedade privada e eliminando o setter, deste xeito só podes ler o valor da propiedade pero non modificalo.

**A Programación Orientada a Obxectos** pode ser unha materia doada de aprender, porén hai tantos conceptos (como abstracción, herdanza, interfaces, polimorfismo, etc.) que é imposible abarcar nunha lección, necesitarías escribir un libro ou mellor. aínda así, gravalos en formato de vídeo e, de feito, **xa o teño** , así que **recoméndoche** que consultes o meu [curso de programación orientada a obxectos](https://styde.net/curso-de-programacion-orientada-a-objetos-con-php/) . Prometo que ao final a túa forma de programar cambiará para sempre e poderás sacar o máximo proveito de Laravel (ou outros frameworks) e PHP.

#### Cousas relacionadas

- [Por que necesitamos clases e obxectos?](https://styde.net/por-que-necesitamos-clases-y-objetos-php/)
- [Envolturas, getters e setters](https://styde.net/encapsulamiento-y-uso-de-getters-y-setters-en-php/)
- [Curso completo de programación orientada a obxectos con PHP](https://styde.net/curso-de-programacion-orientada-a-objetos-con-php/)

---

[https://styde.net/aprende-programacion-orientada-a-objetos-poo-con-php/](https://styde.net/aprende-programacion-orientada-a-objetos-poo-con-php/)

[https://styde.net/curso-de-programacion-orientada-a-objetos-con-php/](https://styde.net/curso-de-programacion-orientada-a-objetos-con-php/)
