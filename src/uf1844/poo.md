# Programación orientada a obxectos

**A Programación Orientada a Obxectos (POO) é un paradigma de programación** , é dicir, un modelo ou estilo de programación que proporciona pautas  sobre como traballar con ela e baséase no concepto de **clases** e **obxectos**. Este tipo de programación úsase para estruturar un programa de software en pezas simples e  reutilizables de *planos* de código (clases) para crear instancias individuais de obxectos.

Historicamente, xurdiron diferentes paradigmas de programación. Por unha banda, as linguaxes secuenciais como COBOL ou as linguaxes  procedimentais como Basic ou C, céntranse máis na lóxica que nos datos. Por outra banda, outros máis modernos como Java, C# ou Python utilizan  paradigmas para definir programas, sendo a POO a máis popular.

Co paradigma POO, o que se busca é deixar de centrarse na pura lóxica dos programas, comezar a pensar en obxectos, que constitúe a base de dito paradigma. Isto axuda  moito nos grandes sistemas, porque en vez de pensar nas funcións, pensas nas relacións ou interaccións dos diferentes elementos do sistema.

Un programador deseña un programa de software organizando pezas de información e comportamentos relacionados nun modelo chamado clase. Despois créanse obxectos individuais a partir do modelo de clase. Todo o programa de software execútase facendo que varios obxectos interactúen entre si para crear un programa máis grande.

## Por que a programación orientada a obxectos

**OOP permite que o código sexa reutilizable, organizado e fácil de manter.** Segue o principio de desenvolvemento de software DRY (Don't Repeat Yourself), para non duplicar o código e crear programas eficientes. E tamén evita o acceso non desexado aos datos ou a exposición de código propietario mediante o **encapsulamento** e a **abstracción**.

## Clases, obxectos e instancias

As clases, que constitúen o modelo a partir do que se estruturan os datos e comportamentos, permiten a instantación que facilita a creación de obxectos a partir desa clase.

Unha clase é un modelo, que define xenericamente como serán os obxectos dun determinado tipo. Por exemplo, unha clase para representar animais pódese chamar "animal" e  ter unha serie de atributos, como "nome" ou "idade" (que normalmente son propiedades), e unha serie cos comportamentos que poden ter estes, como camiñar ou comer, e que á súa vez se implementan como métodos da clase  (funcións).

Un exemplo sinxelo de obxecto pode ser un animal. Un animal ten unha idade, polo que se crea un novo atributo "idade" e,  ademais, pode envellecer, polo que se define un novo método. Datos e lóxica. Isto é o que se define en moitos programas como a definición dunha clase,  que é a definición global e xenérica de moitos obxectos.

Coa clase podes crear instancias dun obxecto, cada unha cos seus atributos definidos de forma independente. Con esta referencia podes crear un gato chamado Lucho, de 5 anos, e outro animal, e este será un can chamado Laika, de 3 anos. Ambos están definidos pola clase animal, pero son dous casos diferentes. Así, chamar aos seus métodos pode ter resultados diferentes. Os dous comparten a lóxica, pero cada un ten o seu status independente.

Todas estas son ferramentas que axudan a escribir un código mellor, máis limpo e reutilizable.

## 4 principios da programación orientada a obxectos

### **Encapsulamento**

A encapsulación presenta toda a información importante dun obxecto dentro del e só expón ao público información escollida (limitada).

Esta propiedade permite garantir que a información dun obxecto está oculta ao mundo exterior, agrupando nunha clase as características ou atributos que teñen acceso privado, e os comportamentos ou métodos que teñen acceso público.

O encapsulamento de cada obxecto é responsable tanto da súa información como do seu estado. A única forma en que se pode modificar é mediante os métodos propios do obxecto. Deste xeito, os atributos internos dun obxecto son inaccesibles dende o exterior, podendo ser modificados só chamando ás funcións  correspondentes. Deste xeito, é posible manter o Estado a salvo de usos indebidos ou que poidan ser inesperados.

Para explicar o encapsulamento usaremos de exemplo un coche: O coche comparte información pública a través das luces de freo ou dos intermitentes (interface pública). Pola contra, a interface interna, o mecanismo de condución do coche, está oculta baixo o capó. Cando se conduce un coche, é necesario indicarlles aos demais condutores os movementos, pero non expor datos privados sobre o tipo de combustible ou a temperatura do motor, xa que hai moitos datos, que non lle servirían ou confundirían a outros condutores.

### **Abstracción**

Outro dos principios da Programación Orientada a Obxectos é a abstracción,  que se produce cando o usuario interactúa só cos atributos e métodos seleccionados dun obxecto, utilizando ferramentas simplificadas de alto nivel para acceder a un obxecto complexo.

En POO, os programas adoitan ser grandes e os obxectos comunícanse moito entre si. Deste xeito, a abstracción facilita o mantemento dun código grande, onde poden xurdir diferentes cambios ao longo do tempo.

A abstracción baséase no uso de cousas sinxelas para representar a complexidade. Os obxectos e as clases representan o código ocultando os detalles complexos ao usuario. Así, é unha extensión da encapsulación. Continuando co exemplo anterior, non é necesario coñecer todos os detalles sobre como funciona o motor dun coche para poder conducilo.

### **Herdanza**

A herdanza define relacións xerárquicas entre clases, de xeito que os atributos e métodos comúns poden ser reutilizados. As clases principais estenden os atributos e comportamentos ás clases  fillas. Ao definir os atributos e comportamentos básicos nunha clase,  pódense crear clases fillas, ampliando a funcionalidade da clase  principal e engadindo atributos e comportamentos adicionais. É unha das claves da Programación Orientada a Obxectos.

Seguindo o exemplo dos animais, pode usar unha única clase de animal e engadir  un atributo de tipo de animal que especifique o tipo de animal. Os diferentes tipos de animais requirirán diferentes métodos, por exemplo, os réptiles deben poder poñer ovos e os peixes deben poder nadar. Aínda que os animais teñan un método común, como moverse, a implementación requiriría moitas declaracións "se" para garantir o comportamento de movemento ideal. Por exemplo, as ras saltan, mentres que as serpes se deslizan. O principio de herdanza permite resolver este problema.

### **Polimorfismo**

O polimorfismo reside en deseñar obxectos para compartir comportamentos,  permitindo que os obxectos sexan procesados de diferentes xeitos. É a capacidade de presentar a mesma interface para diferentes formas ou tipos de datos subxacentes. Ao usar a herdanza, os obxectos poden anular os comportamentos dos pais compartidos, con comportamentos fillos específicos. O polimorfismo permite que o mesmo método realice diferentes  comportamentos de dúas formas: sobrecarga de método e sobrecarga de  método.

## Beneficios da programación orientada a obxectos

● Reutilización do código.

● Converter cousas complexas en estruturas sinxelas e reproducibles.

● Evitar a duplicación de códigos.

● Permite o traballo en equipo grazas ao encapsulamento, xa que minimiza a posibilidade de duplicar funcións cando distintas persoas traballan nun mesmo obxecto ao mesmo tempo.

● Como a clase está ben estruturada, permite a corrección de erros en varios lugares do código.

● Protexe a información mediante o encapsulamento, xa que só se pode  acceder aos datos do obxecto a través de propiedades e métodos privados.

● A abstracción permítenos construír sistemas máis complexos dun xeito máis sinxelo e organizado.

**Hoxe, OOP é o paradigma máis utilizado para deseñar software e aplicacións.** As súas vantaxes son obvias, especialmente cando se precisa resolver complexos desafíos de programación. Ademais, permite unha mellor estrutura de datos e reutilización do código, facilitando aforrar tempo a longo prazo.

Agora, isto require pensar na estrutura do programa, planificar ao comezo da codificación, así como analizar os requisitos en clases sinxelas e  reutilizables que se poden utilizar para deseñar instancias de obxectos.
