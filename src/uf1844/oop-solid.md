# Programación Orientada a Obxectos: Principios SOLID

A programación orientada a obxectos forma parte dos conceptos básicos que debes coñecer se vas dedicarte a programación de software ou aplicacións web.

Para comprender plenamente a orientación a obxectos, hai que comprender algo esencial: os obxectos. Un obxecto, en termos sinxelos, é **unha representación dun concepto abstracto que representa algo no mundo real**. Pero coidado, non hai que pecharse e pensar que con isto só nos referimos a cousas tanxibles. Pola contra, ademais dos obxectos físicos tamén nos podemos referir a cousas intanxibles como as regras sociais, os procedementos organizativos, etc., Estas son tamén cousas do mundo real que podemos representar cada unha delas como obxectos. Se seguimos por este camiño, teoricamente TODO pode ser representado como obxecto. E isto é unha gran revelación.

Entón, agora o reto é definir cal é o alcance dos nosos obxectos, xa que, por exemplo, podemos definir o típico exemplo de obxecto da clase *animal*, e se *animal* é moi amplo, podemos definir *reinos* de animais, *familias*, *especies* ou mesmo definir o animal como un conxunto de órganos vitais e cada conxunto de órganos vitais como unha estrutura ou colonia pluricelular. Onde poñemos o límite, ata onde chego coa miña abstracción? A resposta é bastante obvia, pero non necesariamente sinxela: o límite da túa abstracción defínela ti, segundo as necesidades e o alcance do software a desenvolver.

É nesta parte, onde os principios SOLID xogan un papel fundamental, para axudarnos a definir as clases dos nosos obxectos e como interactúan e se organizan entre si.

## Cales son os principios SOLID?

SOLID son as iniciais de cinco principios que deben gobernar o deseño dos nosos obxectos:

- Single responsability principle &rarr; Principio de responsabilidade única
- Open-closed principle &rarr; Principio aberto-pechado
- Liskov substitution principle &rarr;  Principio de substitución de Liskov
- Interface segregation principle &rarr;  Principio de segregación de interfaces
- Dependency inversion principle &rarr;  Principio de inversión de dependencia

Estes principios pretenden promover o ideal da programación orientada a obxectos: facer que o código sexa reutilizable, portátil e fácil de entender e manter.

## S - Principio de responsabilidade única

O principio de responsabilidade única, como o seu nome pode indicar, apunta ao feito de que unha clase de obxecto debe ter unha única responsabilidade (ou polo menos tender a iso), o que mellorará directamente a cohesión do noso código.

> Unha clase individual debe ter un motivo para ser modificada.
> \- Robert C. Martin

Por exemplo, baixo este principio está mal visto ter unha clase de utilidade xeral no noso código, en lugar de ter diferentes clases de utilidade especializadas baixo algúns criterios consistentes coa funcionalidade que cobren ditas utilidades.

## O - Principio aberto-pechado

Explícase do seguinte xeito:

> As entidades de software deben estar abertas á extensión pero pechadas á modificación.
> \- Betrand Meyer

Isto pode parecer estraño, pero ten moito sentido, xa que é algo consistente: se tes unha clase A que fai ben o seu traballo, pero agora necesitas que faga outra cousa, non modifiques esta clase, en cambio, crea unha clase B que se poida herdar dende A e aí é onde deberías engadir as novas funcións. Deste xeito, non rompes nada onde xa tiñas A funcionando, e agora tamén podes usar B onde sexa necesario.

## L - Principio de substitución de Liskov

O principio de substitución de Liskov (en nome do seu autor) di o seguinte:

> Sexa ϕ **(x)** unha propiedade comprobable sobre obxectos **x** de tipo T. Entón ϕ **(y)** debe ser verdadeira para obxectos **y** de tipo **S** onde **S** *,* é un subtipo de **T** .
> \- Bárbara Liskov

En termos máis sinxelos e coñecidos, falamos de polimorfismo, é dicir, cando o comportamento esperado ao operar un obxecto x da clase T é o mesmo que se empregamos un obxecto y da clase S, tendo en conta que a clase S herde de T.

## I - Principio de segregación de interfaces

O principio de segregación de interfaces tamén está relacionado cun concepto de herdanza, particularmente sobre a implementación de métodos de clases e interfaces abstractas. Pódese definir simplemente do seguinte xeito:

> Os clientes non deben ser forzados a depender de métodos que non utilizan.
> — Robert C. Martin

Pondo esta frase en contexto, os clientes son as clases que implementan as nosas interfaces e clases abstractas. O problema aquí é que se temos, por exemplo, unha interface para asinar métodos dun mecanismo de comunicación cifrado, poderiamos ter, por exemplo:

```js
interface Comunicador {
    encriptar(mensaje): String
    enviar(mensaje, destino): Boolean
    desencriptar(mensaje): String
    recibir(): Boolean
}
```

Esta interface utilízase para que unha clase a implemente e para poder enviar e recibir mensaxes cifradas, pero que pasa se queremos ter unha clase que implemente só os métodos de cifrado e descifrado, para ser usada nun contexto diferente ao dun mecanismo de comunicación?, e ademais unha clase que envía e recibe mensaxes sen cifrar?. Estas clases non poden implementar esta interface, xa que se verían obrigadas a implementar métodos adicionais aos que realmente usan, polo que un mellor enfoque sería descompoñer esta interface en dúas interfaces separadas e especializadas (recorde o principio de responsabilidade única)

```js
interface Comunicador {
    enviar(mensaje, destino): Boolean
    recibir(): Boolean
}
interface Encriptador {
    encriptar(mensaje): String
    desencriptar(mensaje): String
}
```

## D - Principio de inversión de dependencia

O principio de inversión de dependencia quizais sexa o máis complexo de explicar, persoalmente aínda me custa expresalo en palabras sinxelas, pero farei o posible. Vexamos primeiro o que di un autor recoñecido sobre este principio

> R. Os módulos de alto nivel non deben depender de módulos de baixo nivel. Ambos deben depender de abstraccións
> B. As abstraccións non deben depender de detalles. Os detalles deben depender das abstraccións.
> —Robert C. Martín

Confuso? ;) Para entender estas frases, explicarei primeiro a segunda: nesta frase, vexamos os conceptos de abstracción e detalle como interface e clase que implementa dita interface. Esta simple explicación abrangue a frase B. En cambio, a frase A pódese explicar mellor cun exemplo: se temos un módulo A de alto nivel, que debe interactuar cun módulo B de baixo nivel, realizamos esta interacción a través dunha interface IB *.*, que asina os métodos que debería implementar o módulo B. Pero A é agnóstico se este módulo B está a implementar unha clase B1, B2 ou B3. Deste xeito, obrigamos a que á hora de deseñar a interacción entre módulos, en lugar de considerar unha interacción descendente na que os módulos de alto nivel dependen dos de nivel inferior, se centre o foco na forma en que ambos módulos interactúan, sendo esta interacción a abstracción. dos que ambos dependen.

Unha vez entendidos os conceptos SOLID, é bo practicalos e reforzalos, xa que estes son a base para unha programación orientada a obxectos máis eficiente e mantible no tempo. O seguinte paso a ver serán os patróns de deseño: cando e como aplicalos.

- [Programación Orientada a Obxectos: Patrón Singleton](https://medium.com/@pabloulloacastro/programación-orientada-a-objetos-patrón-singleton-423e2755614b)
- [Programación Orientada a Obxectos: Patron Builder](https://medium.com/@pabloulloacastro/programación-orientada-a-objetos-patrón-builder-7fb20fe17bd8)

Orixinal:
&rarr; [https://medium.com/@pabloulloacastro/programaci%C3%B3n-orientada-a-objetos-patr%C3%B3n-builder-7fb20fe17bd8](https://medium.com/@pabloulloacastro/programaci%C3%B3n-orientada-a-objetos-patr%C3%B3n-builder-7fb20fe17bd8)
