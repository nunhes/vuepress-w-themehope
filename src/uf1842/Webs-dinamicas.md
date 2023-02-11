### Que é un sitio web dinámico?

A diferenza dun sitio web estático onde o contido está predefinido mediante ficheiros html, nun sitio web dinámico o contido está construído a partir de diferentes fontes.

![sitios web dinámicos](https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/webb2_xl.png)

Nos seus inicios, a web orientouse para compartir artigos académicos, pero cando se puxo a disposición do público en xeral xurdiron outros usos. Por exemplo, se un portal de noticias fose un sitio web estático, alguén tería que estar actualizando o ficheiro html da portada cada vez que se publicase unha noticia; engadindo etiquetas, escribindo os textos e actualizando imaxes ou ligazóns e subindo o novo ficheiro ao servidor web.

O anterior non soa moi eficiente, poderíamos melloralo? Claro! Se nos fixamos ben, hai certas cousas que se repiten, estruturas comúns como títulos, descricións ou encabezados, estas estruturas mantense mentres cambian os seus contidos. E se puideses manter dalgunha maneira as estruturas e só actualizar os contidos?

Isto é precisamente o que fai un sitio web dinámico: enriba dunha estrutura de etiquetas html, engade ou modifica contido e entrega un novo documento ao navegador, que non necesariamente representa un ficheiro nun directorio do servidor web.

Como podes ver, un sitio web dinámico non significa que teña animacións bonitas, significa que os seus contidos foron xerados de forma dinámica e non a partir dun ficheiro html. Seguindo o exemplo dunha web de noticias, aínda que a url da portada sexa a mesma, os contidos de cada día serán diferentes.

O desenvolvemento de sitios web dinámicos responde a varias necesidades: podemos presentar un sitio web en diferentes idiomas, cambiar as opcións en función do usuario que acceda a el e responder aos cambios de información con rapidez. Tamén permite que diferentes usuarios creen contido web simultaneamente usando só o navegador.

A ampla dispoñibilidade de navegadores e Internet tamén fixo posible o desenvolvemento de aplicacións web. Estes non son tecnicamente moi diferentes do que presentamos como un sitio web dinámico, só que se centran en ofrecer solucións a necesidades máis empresariais onde se deben proporcionar controis de usuarios, permisos, actualizacións constantes, rexistro de usos, xeración de informes e gráficos. certificados... en definitiva, moitas funcionalidades que serían máis difíciles de acadar nunha aplicación de escritorio tradicional.

***E como é un sitio web dinámico?*** Son exemplos todos os portais de noticias, sitios de contido como nós, redes sociais, blogs, revistas en liña, a maioría dos sitios web hoxe en día son dinámicos, se non, non sería factible mantelos.

Constrúese un sitio web dinámico a partir das tecnoloxías básicas da web: html, css e JavaScript engadindo outras tecnoloxías adicionais que se denominan *tecnoloxías de fondo.*

#### Páxina 17: Tecnoloxías e conceptos no backend web



### Tecnoloxías e conceptos no backend web

O backend abrangue todo o que se executa no servidor, onde se xestionan as tecnoloxías e os conceptos que permiten a creación de sitios web dinámicos.

![backend web](https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/webb1_xl.png)

A principios dos 90 creouse o primeiro mecanismo para que un servidor web puidese responder con contido dinámico: CGI. A especificación de *Common Gateway Interface* permite que un servidor web estático delegue noutro programa a xeración do contido dinámico e, a continuación, reciba a resposta e redirixaa ao navegador. Nos anos seguintes empregáronse outros enfoques, algúns servidores web engadiron módulos para poder executar código sen o uso de CGI, outras tecnoloxías permitían mesturar instrucións de programación con etiquetas html e creáronse servidores especificamente deseñados para xerar contido dinámico.

Sen entrar nos detalles de cada idioma ou plataforma, podemos falar en termos xerais de como funciona un sitio web dinámico, lembra que para cada solicitude do navegador hai unha resposta do servidor. Un servidor web dinámico ***expón\*** a solicitude http e a resposta http o que significa, en palabras máis sinxelas, que temos acceso desde o noso código a esas dúas estruturas en forma de estrutura de datos ou como obxecto.

### Solicitude HTTP

A solicitude http contén varios valores que son útiles para saber que contido debemos xerar ou que acción debemos executar, un dos máis útiles son os ***parámetros*** , estes son unha serie de nomes e valores en forma de texto. Dependendo do método de solicitude, estes valores poden ser visibles ao final do URL ou non visibles no corpo da solicitude. En calquera caso podemos acceder a eses nomes e valores desde o noso código.

### Resposta HTTP

O corpo da resposta http varía dependendo do contido, pode ser texto simple que representa follas de estilo, etiquetas html ou código javascript, pero tamén pode ser contido binario como imaxes ou documentos. O navegador poderá indicar o tipo de contido lendo o valor da cabeceira ***Content-Type\*** , polo que necesitamos establecer o valor correcto do noso código no backend.

### Sesión HTTP

A comunicación nun entorno web é unha comunicación *sen estado* , isto quere dicir que o servidor web non sabe se houbo ou haberá comunicación co mesmo cliente, simplemente responde a cada solicitude coma se dunha solicitude nova e illada se tratase. No contexto dunha web dinámica, é necesario manter un estado, é dicir, poder saber quen fai a solicitude e que solicitudes se fixeron con anterioridade.

Para conseguilo utilízase o concepto de ***sesión*** . En termos informáticos, unha sesión é un período de tempo no que se producen unha serie de mensaxes entre dúas máquinas; nun sitio web dinámico, unha sesión corresponde a un grupo de solicitudes e respostas HTTP dun usuario. O concepto de sesión é importante porque permite ao servidor distinguir ao usuario que realiza as solicitudes para xerar o contido axeitado, por exemplo, por motivos de seguridade non podemos mostrar opcións administrativas a todos os usuarios, só a aqueles que proporcionaron un nome de usuario e un contrasinal válidos.

A sesión http adoita implementarse xerando un código identificador único por usuario que se almacena no navegador a través dunha ***cookie\*** , o navegador sempre envía ese identificador en todas as solicitudes ao mesmo sitio mentres que o servidor web almacena o identificador e asocia algúns datos importantes a recoñecer ao usuario.

### Código, modelos e datos no backend web

No frontend non temos moitas opcións en canto a linguaxes de programación, a día de hoxe só temos JavaScript (aínda que indirectamente podemos utilizar outras linguaxes que sexan capaces de producir código js). Pola contra, no backend temos múltiples opcións, podemos escribir a lóxica da nosa web dinámica nunha variedade de idiomas e plataformas que veremos máis adiante. Desde o código backend temos acceso a dúas cousas importantes no desenvolvemento de sitios web dinámicos: os modelos e os datos.

O ***sistema de modelos*** de backend é a tecnoloxía que nos permite substituír só os datos dinámicos nun documento html. Depende un pouco do idioma ou plataforma que utilicemos, pero en xeral consiste nun ficheiro de texto con determinadas especificacións ao que se aplican algúns datos, xerando así un novo documento. Estes datos que mencionamos proceden xeralmente dunha ou varias ***bases\*** de datos . As bases de datos, que veremos máis adiante, xogan un papel moi importante no desenvolvemento de sitios web dinámicos, xa que conteñen a información que necesitamos para xestionar e xerar o noso contido dinámico.

#### Páxina 18: Linguaxes de programación web



### linguaxes de programación web

Para o desenvolvemento no *backend* web podemos escoller entre moitas linguaxes de programación, vexamos algunhas delas.

Presentámosvos unha visión xeral das posibilidades de desenvolvemento en diferentes idiomas, desde aquí podedes afondar visitando os manuais técnicos e titoriais recompilados ao final desta lección. Todos estes idiomas/plataformas permítennos acceder a parámetros de solicitude, podemos escribir ficheiros binarios ou texto html na resposta, podemos xestionar sesións e conectarnos a varias bases de datos. Por outra banda, cada plataforma ten diferentes frameworks que ofrecen formas de modelar o noso desenvolvemento, utilidades comúns e sistemas de modelos.

### PHP

PHP é unha das linguaxes máis recoñecidas no desenvolvemento web, foi creada en 1994 por Rasmus Lerdorf para a súa páxina persoal, máis tarde foi lanzado como código aberto en 1995 e a partir de aí tivo unha longa evolución ata o que é hoxe en día. . PHP está orientado principalmente ao desenvolvemento web.

![Logotipo PHP](https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/php-logo_xl.png)

PHP é unha linguaxe multiparadigma, é dicir, pode programar de xeito procedemental (funcións e variables) ou orientada a obxectos (obxectos, atributos e métodos). PHP debe estar integrado cun servidor web como Apache ou NginX, entre outros. Entre algúns dos seus frameworks temos: Laravel, Symfony, Zend 2 e CakePHP.

[Explora](https://edu.gcfglobal.org/es/creacion-de-sitios-web/paginas-para-aprender-a-programar/1/#)

### Xava

Java comezou a ser concibido en 1991 por James Gosling e finalmente foi lanzado ao público en 1995. É unha linguaxe orientada a obxectos, portátil a diferentes arquitecturas, que lle permite funcionar en teléfonos móbiles e ordenadores persoais ata servidores e superordenadores. Para o desenvolvemento web Java ofrece dúas tecnoloxías: Servlets e páxinas JSP (Páxinas do servidor Java). Os servlets son obxectos que teñen métodos que responden ás solicitudes web, o desenvolvedor crea subclases destes obxectos para implementar alí a lóxica do seu sitio web dinámico. Pola súa banda, JSP permite mesturar código Java con etiquetas html.

![logotipo de java](https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/java-logo_xl.png)

Para executar páxinas Servlets ou JSP, necesitas un servidor web especializado en tecnoloxía Java como WildFly, Tomcat ou Glassfish. Entre os seus frameworks máis coñecidos están: Spring, Wicket, Struts, Play! e JSF.

[Explora](https://edu.gcfglobal.org/es/creacion-de-sitios-web/paginas-para-aprender-a-programar/1/#)

### ASP.NET

ASP é a tecnoloxía de Microsoft para desenvolver sitios web dinámicos, a súa versión máis recente, ASP.NET, foi lanzada ao público en 2002. Utiliza o entorno de execución .NET polo que é posible programar en linguaxes soportadas por el como C# ou Visual Basic. É posible mesturar código de programación con etiquetas html ou separar código e etiquetas en diferentes ficheiros.

![Logotipo ASP](https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/asp-logo_xl.png)

Requírese un servidor Microsoft IIS para executar páxinas ASP.NET. Entre os seus frameworks atopamos: ASP.NET MVC, ASP.NET WebAPI e NancyFX.

[Explora](https://edu.gcfglobal.org/es/creacion-de-sitios-web/paginas-para-aprender-a-programar/1/#)



*O uso de frameworks e sistemas de modelos evita mesturar o código de programación con etiquetas html, o que mellora o mantemento dos grandes proxectos.*



### Alternativas

É posible facer desenvolvemento web en case calquera idioma, podes atopar opcións en Ruby, Perl, Python, C++, JavaScript, Haxe... en definitiva, seguro que atoparás como facer o desenvolvemento web no idioma que desexes.

Podemos destacar [Node.js](https://nodejs.org/es/) para o desenvolvemento de backend de JavaScript, [cppCMS](http://cppcms.com/) para o desenvolvemento de C++, [Ruby On Rails](http://rubyonrails.org/) para o desenvolvemento de Ruby e [Django](https://www.djangoproject.com/) para o desenvolvemento de Python.

Para escoller entre unha ou outra tecnoloxía debes ter en conta varios factores: o tamaño do proxecto, os idiomas nos que tes experiencia, o rendemento, os frameworks dispoñibles, a calidade da documentación e a estabilidade, entre outros.

#### Páxina 19: Sistemas de bases de datos



### Sistemas de bases de datos

As bases de datos son esenciais para sitios web dinámicos, conteñen toda a información administrativa e o contido do sitio.

A base de datos é un compoñente fundamental dun sitio web dinámico, contén toda a información necesaria para que o sitio funcione. Neste contexto, a base de datos debe conter información administrativa como usuarios, permisos e contrasinais, información textual, que é o contido como tal do sitio e outra información que forma parte do núcleo do negocio.

### Base de datos relacional

Existen varios modelos de bases de datos, mencionaremos un deles que se utiliza maioritariamente no desenvolvemento de sitios web, o modelo ***relacional\*** . Isto ten fundamentos teóricos na álxebra relacional que foi proposto por Edgar "Ted" Codd na década de 1970, como unha especie de teoría de conxuntos aplicada aos datos.

![Diagrama de relacións entidades](https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/diagrama_er_xl.png)

*Diagrama de relacións entidades*

### entidades

Un dos conceptos importantes no modelo relacional é o concepto de ***entidade\*** . Unha entidade representa algo que é significativo e contén ***atributos\*** relevantes para o sistema. Por exemplo, se o noso sitio web é un blog, unha posible entidade sería "artigo" e algúns posibles atributos serían a súa "data de publicación" e o seu "título". Se a nosa web é unha tenda en liña, unha posible entidade sería "produto" con posibles atributos "nome" e "prezo".

### Chaves

É importante que cada entidade teña un identificador único coñecido como a súa ***clave primaria\*** , esta pode ser artificial, é dicir, xerada polo sistema, ou natural, é dicir, que normalmente forma parte da entidade. As claves facilitan as buscas na base de datos e permiten establecer relacións entre entidades.

### Relacións

Unha ***relación\*** é unha asociación entre dúas entidades, podemos identificar estas relacións cando usamos verbos como ten, contén, forma parte, está inscrito, etc. Establecemos relacións ao deseñar a base de datos e baseámonos na experiencia no noso negocio. Por exemplo, se o noso sitio é un blog, sabemos que un autor escribe varios artigos, polo que atopamos unha relación entre a entidade "artigo" e a entidade "autor". Se o noso sitio é unha tenda en liña, sabemos que unha compra ten un ou varios produtos, polo que atopamos unha relación entre a entidade "compra" e a entidade "produto".

Para implementar as relacións, utilízase o concepto de ***chave estranxeira\*** . A clave externa é unha clave que é primaria para unha entidade e cópiase como un atributo doutra entidade, establecendo así a relación. Seguindo o exemplo do blog, para relacionar un autor cos seus artigos engadiremos a "artigo" un novo atributo "escrito por", que conterá o valor da clave primaria da entidade "autor".

### procuras

Unha das vantaxes de ter un modelo matemático para bases de datos relacionais é que facilitou a creación dunha linguaxe de consulta estruturada coñecida como ***SQL\*** ( *Structured Query Language)* . A través deste podemos executar actualizacións e consultas sobre os datos. Por exemplo, actualizar atributos dalgunha entidade, buscar entidades que cumpran determinadas condicións ou atopar grupos de entidades asociadas, entre outras moitas opcións.

### implementación informática

Os sistemas de xestión de bases de datos relacionais, *RDBMS* polas súas siglas en inglés, implementan o modelo relacional a través do concepto de ***táboa\*** . Unha táboa contén ***filas\*** e ***columnas\*** . Cada entidade rexístrase nunha fila da táboa e cada un dos seus atributos rexístrase en cada columna da fila. Finalmente, as táboas materialízanse como ficheiros en disco, para que a súa información quede gravada de forma permanente e duradeira.

![táboa de autores](https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/tabla-autor_xl.png)



*Exemplo de táboa "AUTHOR".*



Ademais, estes sistemas ofrecen funcionalidades como xestión de usuarios e permisos, acceso simultáneo a través da rede, creación de copias de seguridade e análise de rendemento, entre outras. No mercado atopamos moitos destes sistemas, podemos citar a [MySQL](http://www.mysql.com/) , [Oracle](https://www.oracle.com/database/index.html) e [PostgreSQL](https://www.postgresql.org/) entre os máis coñecidos.

![táboa de artigos](https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/tabla-articulo_xl.png)



*Exemplo de táboa "ARTIGO"*



### Alternativas

O campo das bases de datos é amplo tanto a nivel académico como empresarial. Existen diferentes criterios para clasificalos, multitude de implementacións e un número infinito de controladores para conectar con eles desde múltiples linguaxes de programación. Segundo a complexidade do sitio, podemos ter unha ou varias bases de datos, incluso é posible mesturar diferentes tipos de bases de datos nun mesmo proxecto segundo as necesidades.

Entre as alternativas ao modelo relacional, podemos atopar outras formas de almacenamento como repositorios de clave-valor, bases de datos orientadas a obxectos, táboas distribuídas, bases de datos orientadas a documentos ou almacenamento baseado en rexistros. Cada un deles ten semellanzas e diferenzas co modelo relacional. Podemos mencionar [MongoDB](https://www.mongodb.com/) , [Ozone DB](http://www.ozone-db.org/) , [Oracle Berkeley Database](http://www.oracle.com/technetwork/database/database-technologies/berkeleydb/overview/index.html) , [Apache Cassandra](https://cassandra.apache.org/) e [Hypertable](http://www.hypertable.org/) entre outros.

#### Páxina 20: Consellos para o desenvolvemento web



### Consellos para o desenvolvemento web

Como mostramos en páxinas anteriores, o desenvolvemento dun sitio web dinámico implica moitas tecnoloxías que podemos clasificar como tecnoloxías de *frontend* (ou do lado do cliente) e tecnoloxías de *backend* (ou do lado do servidor). Aquí tes algúns consellos que debes ter en conta ao facer o desenvolvemento web.

![Equipo de traballo](https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/webb3_xl.png)

#### Fai un bo equipo.

O desenvolvemento de sitios web implica diversas tecnoloxías, polo que necesitamos un equipo de traballo con coñecementos e habilidades diversas. 

Algúns membros do equipo centraranse no *frontend* : facer que o sitio sexa visualmente agradable, que teña un bo aspecto en diferentes dispositivos e que a experiencia do usuario sexa a mellor posible. Outros centraranse no *backend* : que o sitio sexa rápido, que sexa escalable, seguro e ofreza a funcionalidade esperada.

#### Use un sistema de control de versións.

Un sitio web consiste nunha colección de ficheiros, algúns serán código fonte, outros texto HTML, outros ficheiros de estilo, algún código JavaScript, etc. Para xestionar o proxecto é necesario un sistema de control de versións como [Git](https://git-scm.com/) ou [Subversion](https://subversion.apache.org/) , sistemas que permiten o acceso e control de versións do grupo de ficheiros que forman parte do proxecto.

#### Configura o teu ambiente de desenvolvemento.

Segundo a tecnoloxía escollida, o desenvolvemento implica a instalación e configuración de software: un servidor web, servidores de bases de datos, algún entorno de *execución* ou de execución, ferramentas de compilación e un entorno de desenvolvemento integrado ou IDE. 

Un IDE é unha aplicación que nos permite xestionar e editar ficheiros de proxecto, previsualizar o contido, iniciar e deter servidores, acceder a bases de datos, ver ficheiros de rexistro e outras utilidades necesarias para o desenvolvemento de software.

#### Alternativas

Non sempre é necesario que abordes o desenvolvemento web desde cero, tes alternativas como instalar e configurar un sistema de xestión de contidos ou CMS. Estes sistemas poden ser xestionados por usuarios con coñecementos básicos de informática. 

Con eles podes construír un sitio web rapidamente, grazas a que estes sistemas incorporan interfaces visuais para editar e configurar o sitio, paquetes temáticos personalizables e *complementos* ou extensións que se adaptan ás túas necesidades, por exemplo, galerías de imaxes ou formularios de enquisas. Tamén contan con funcionalidades de xestión de usuarios e unha base de datos preconfigurada.

Exemplos destes sistemas son [WordPress ](https://es.wordpress.org/), [Joomla ](https://www.joomla.org/), [Drupal ](https://www.drupal.org/)ou [Moodle ](https://moodle.org/?lang=es), este último orientado a cursos en liña.

Este é só o comezo. Podes afondar en cada tecnoloxía pola túa conta, por exemplo, [aprender a codificar sitios web](https://edu.gcfglobal.org/es/recomendaciones-tecnologicas/sitios-web-para-aprender-a-programar/print/) ou consultando referencias técnicas como [w3schools](http://www.w3schools.com/) e [Mozilla Developer Network](https://developer.mozilla.org/es/) . Se che interesa a tecnoloxía podes dirixir os teus [estudos superiores](https://edu.gcfglobal.org/es/vida_diaria/curso/acceso_a_la_educacion_superior/perfil_del_estudiante/1.do) á área de informática. Ou se o teu é o [emprendemento](https://edu.gcfglobal.org/es/vida_diaria/curso/emprendimiento/inicio_de_un_negocio/1.do) , podes pensar en crear o teu propio negocio en liña, para o que será útil unha estratexia web.

Agora que sabes máis sobre o desenvolvemento web, os pasos a seguir son escoller as tecnoloxías coas que vas traballar, instalar o software necesario, revisar a documentación técnica e construír o teu proxecto web. Adiante!

#### Páxina 21: Páxinas para aprender a programar



### Páxinas para aprender a programar

Programar é escribir instrucións definidas nunha linguaxe de programación determinada para facer que un ordenador faga algo que se necesita ou quere. Esas instrucións chámanse *código* e están escritas en moitos ficheiros de texto. Cando o ordenador executa esas instrucións é cando podemos *ver* o que fan.

Se vas á universidade e estás a explorar opcións de carreira, se xa tes experiencia e queres aprender unha nova linguaxe de programación ou só tes curiosidade sobre a programación, estes sitios poden axudar.

#### MOOC'S

Os MOOC son portais web para cursos gratuítos, normalmente apoiados por organizacións internacionais e institucións universitarias. Podes atopar cursos en moitas áreas, pero neste caso interésanos a área de tecnoloxía.

#### Coursera

Podes atopar cursos na categoría [Informática: Enxeñaría do Software](https://www.coursera.org/courses?orderby=upcoming&cats=cs-programming) .

#### Academia Khan

Podes atopar cursos na categoría [Programación informática](https://www.khanacademy.org/computing/cs) .

#### Miríade X

Podes atopar cursos na categoría de [Ciencias Tecnolóxicas](https://www.miriadax.net/cursos?p_p_id=122_INSTANCE_Qo8k&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_pos=1&p_p_col_count=2&p_r_p_564233524_categoryId=11154) .

#### udemy

Podes atopar cursos na categoría de [desenvolvemento](https://www.udemy.com/courses/Development/?view=grid) .

A maioría dos cursos de programación en liña están en inglés, polo que é importante que coñezas este idioma.

#### Outros sitios de programación

Trátase de portais web que contan con cursos específicos da área de programación, teñen unha forma de practicar o que estás aprendendo dunha vez no ordenador.

#### codecademy

Podes atopar [cursos](http://www.codecademy.com/learn) en varias linguaxes de programación segundo os teus intereses.

#### programador

Podes atopar cursos na sección [Cursos gratuítos](http://www.programmr.com/practice/) .

#### código 

Podes atopar cursos na sección [Aprender](http://code.org/learn)

#### W3Escolas

Podes atopar [titoriais](http://www.w3schools.com/) sobre as linguaxes máis utilizadas para o desenvolvemento web. 

Algúns dos cursos son gratuítos, outros teñen un custo. Algúns dan certificación, outros non. Revisa as condicións de cada sitio en detalle.

Dentro da programación son moitos os ámbitos nos que se pode traballar: aplicacións móbiles, aplicacións de escritorio, aplicacións web e videoxogos, entre outras.

Explora os cursos que ofrecen estes sitios, revisa o seu contido, estuda os exemplos, experimenta e elixe. Se queres dedicarte á programación, unha vez que atopes a zona na que te sintas máis cómodo, poderás desenvolverte profesionalmente gozando co que fas.

#### Páxina 22: Proba de creación de sitios web
