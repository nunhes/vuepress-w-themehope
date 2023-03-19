# 1. CMS: Sistemas de Xestión de Contidos

Comecemos por algo que pouco ten que ver coa programación: **os sistemas de xestión de contidos** ( en inglés: CMS = Content Management Systems).

Un CMS é unha aplicación web que permite configurar e manter sitios web sen necesidade de escribir nin unha liña de código.

Son dalgún xeito as navallas suizas da publicación web. En xeral contan con suficiente enxeñería coma para ser fáciles de usar por un usuario adestrado, e sen necesidade inmediata de escribir calquera tipo de código. 

Aínda así se ademais sabes programar existen sección nas que poderás intervir sen apenas restricións máis ala de seguir os modelos de codificación do corazón da aplicación. Se supón que un programador fullstack podería prescindir destas ferramentas ou tamén amplialas con novos plugins, temas,.... Pero hai que coñecer cada CMS bastante a fondo para sacarlle todo o potencial.

Como desenvolvedor, aínda que esteas ao comezo da túa carreira profesional, convén que coñezas estas ferramentas. Saber como instalar, configurar e usar algúns dos CMS máis populares, como Wordpress, Drupal ou Prestashop, para publicar os teus propios sitios web ou o dos teus clientes. E a medida que os vais coñecendo non estaría demais atreverte coa creación dalgún complemento o tema. 

Animo e ao choio!

## 1.1. Algunhas cousas que debes saber sobre CMS

- [1.1.1. Desvantaxes de desenvolver un sitio web desde cero](https://iescelia.org/docs/dwes/_site/cms/algunas-cosas-que-debes-saber.html#111-inconvenientes-de-desarrollar-una-web-desde-cero)
- [1.1.2. Como funciona un CMS](https://iescelia.org/docs/dwes/_site/cms/algunas-cosas-que-debes-saber.html#112-cómo-funciona-un-cms)
- [1.1.3. Tipos de CMS](https://iescelia.org/docs/dwes/_site/cms/algunas-cosas-que-debes-saber.html#113-tipos-de-cms)
- [1.1.4. Algúns exemplos importantes de CMS](https://iescelia.org/docs/dwes/_site/cms/algunas-cosas-que-debes-saber.html#114-algunos-ejemplos-de-cms-importantes)
- [1.1.5. Instalación dun CMS](https://iescelia.org/docs/dwes/_site/cms/algunas-cosas-que-debes-saber.html#115-instalación-de-un-cms)
- [1.1.6. Explotación dun CMS](https://iescelia.org/docs/dwes/_site/cms/algunas-cosas-que-debes-saber.html#116-explotación-de-un-cms)

### 1.1.1. Desvantaxes de desenvolver un sitio web desde cero

Desenvolver sitios web programándoos desde cero (ou máis ou menos dende cero, porque a maioría das veces parte das bibliotecas existentes) ten varias **vantaxes** como:

- Permítenos sacar o máximo proveito tanto do servidor como dos clientes.
- Dános un control absoluto sobre o sitio web que estamos a desenvolver.
- Permítenos axustarnos o máximo posible aos requisitos e crear aplicacións personalizadas.

Pero tamén ten **inconvenientes** :

- Crear un sitio desde cero é un proceso moi longo.
- As expansións e actualizacións do sitio tamén son lentas e caras.
- Ambas tarefas (creación e actualización) requiren de persoal altamente cualificado, con coñecemento de todas as tecnoloxías implicadas. É dicir, desenvolvedores web. E iso custa cartos.

Cando os inconvenientes superan os beneficios, o equipo de desenvolvemento pode optar **por non construír desde cero** . Isto ocorre na gran maioría dos proxectos. Non é necesario inventar a roda cada vez que temos que construír un coche, non? Ben, para construír unha aplicación web ocorre o mesmo.

Agora ben, de que base partimos? Podemos construír unha biblioteca de clases que resolvan as tarefas máis habituais de calquera aplicación web, cousas como autenticación de usuarios, seguridade, acceso a bases de datos, etc. Cousas que se repiten unha e outra vez con moi poucas variacións.

Esa biblioteca de clases pode ser máis grande ou máis pequena, máis elaborada ou máis sinxela, máis configurable ou máis ríxida. Pero, sexa como for, aforraranos tempo e esforzo no desenvolvemento de novos proxectos. Estas bibliotecas chámanse ***frameworks\*** e trátase dunha aplicación web rara que non está programada usando unha das moitas que hai por aí pululando por aí, ou se utiliza un framework propio creado polo propio equipo de desenvolvemento.

Pero podes dar un paso máis e utilizar unha biblioteca máis grande, aquela que xa che dá case todo o feito e á que só tes que indicar que tipo de letra, que cores e que contido queres mostrar na túa web, e así o fará. todo por si só. consegue xerar a web case automaticamente.

Esta solución case máxica son os **sistemas de xestión de contidos (CMS)** dos que estamos a falar. Sen programar unha soa liña de código, podes ter un sitio web totalmente funcional e de aspecto profesional listo en minutos.

Por sorte para nós, os desenvolvedores web, o CMS non pode facelo todo. Son solucións extraordinariamente eficaces para configurar sitios web convencionais, pero cando queres crear algo que vaia fóra dos límites moi marcados do CMS, necesitas un programador. E entón a quen chamarás?

### 1.1.2. Como funciona un CMS

**Un CMS (Content Management System)** é unha aplicación web que se executa nun servidor e que se controla desde un navegador (cliente), e que nos permite:

- Crea un sitio web completamente novo a través do navegador en moi pouco tempo.
- Xestiona facilmente todo o relacionado co sitio web: usuarios, privilexios, contido, aparencia, menús, etc.
- E todo isto sen ter coñecementos de HTML, CSS, PHP ou o resto das tecnoloxías (nota: non é necesario, pero si é conveniente)

O CMS almacena o **contido** do sitio web nunha **base de datos** .

Cando se solicita unha páxina, un programa escrito en PHP (ou noutra linguaxe de servidor) busca o contido desa páxina na base de datos e xérao de forma dinámica, entregándoo ao navegador web (cliente).

Ademais, outro conxunto de programas permite engadir novos contidos, modificar contidos existentes, crear usuarios, xestionar privilexios, etc. Todo isto altera os datos existentes na base de datos, o que á súa vez altera a forma en que o usuario percibe a páxina cando a visita.

Ás veces, o sitio web en si denomínase ***front-end\*** . O front-end, neste sentido, é o que ve o visitante da web.

As páxinas de administración do sitio ás veces chámanse ***back-end\*** ou ***panel\*** . O back-end só é accesible para algúns usuarios (administradores, editores, etc.). Polo tanto, o CMS sempre precisa de control de acceso dos usuarios ou inicio de sesión.

Coidado! Os termos front-end e back-end son confusos. En termos de programación, a parte da aplicación que se executa no navegador web denomínase ***fronte-end, e o\*** ***back-end\*** é a parte da aplicación que se executa no servidor e interactúa cos recursos do servidor (como base de datos). Neste outro sentido, o front-end está escrito en HTML, CSS, JavaScript (e calquera das moitas bibliotecas que existen para Javascript, como jQuery, React ou Vue.js) e o back-end está escrito en PHP, Java , Python ou outras linguaxes do lado do servidor.

Se atopas unha oferta de traballo para un "desenvolvedor back-end" ou "desenvolvedor front-end", refírese ao último significado de ambos os termos. É dicir, piden un "desenvolvedor HTML + CSS + Javascript (e bibliotecas Javascript)" ou un "desenvolvedor PHP ou similar".

### 1.1.3. Tipos de CMS

Hai moitos (e moitos!) CMS, e cada un ten as súas propias características, fortalezas e debilidades.

Como son moitos, é útil clasificalos.

Algúns autores clasifícanas segundo o seu **método de distribución** :

- Código aberto e software libre.
- Código do propietario.

Pero persoalmente, creo que ten máis sentido clasificalos pola súa **funcionalidade** . Así, atopamos CMS deste tipo (entre outros):

- CMS xenérico (para calquera tipo de sitio web)
- CMS para blogs.
- CMS para foros.
- CMS para wikis.
- CMS para e-learning (aprendizaxe en liña)
- CMS para comercio electrónico (comercio electrónico)
- CMS para publicacións dixitais (xornais, revistas...)

Algo tremendamente odioso sobre CMS é que **son fortemente incompatibles** entre si. Cada un utiliza unha interface diferente, bases de datos completamente diferentes para almacenar a información, módulos incompatibles, etc. Existen algunhas iniciativas para facer que os servizos desenvolvidos nun CMS sexan utilizables noutros, pero aínda están nunha fase moi inicial.

O que si existen son familias de CMS relacionados que poden compartir algunhas características, xeralmente porque algúns CMS se derivaron doutros.

### 1.1.4. Algúns exemplos importantes de CMS

Os CMS propietarios non puideron competir cos CMS gratuítos. Por este motivo, evolucionaron cara a solucións completas de computación na nube, como Microsoft Azure, Google Cloud ou Amazon Web Services (AWS).

Entre os verdadeiros CMS abundan as solucións de software libre ou de código aberto. Por exemplo:

- **Blogs** : WordPress, Jekyll, GetSimple, Umbraco…
- **Wikis** : MediaWiki, XWiki, DokuWiki...
- **Foros** : phpBB, MyBB, bbPress, Discourse...
- **e-learning** : Moodle, WebCT, Mahara, etc.
- **comercio electrónico** : PrestaShop, Magento, OsCommerce, OpenCart...

Moitos destes CMS desaparecerán, fusionaranse con outros ou dividiranse en varios proxectos dende que escribo estas liñas ata que as leas. É mellor que botes un ollo a algunha lista actualizada de CMS, como [esta da Wikipedia](https://en.wikipedia.org/wiki/List_of_content_management_systems) .

### 1.1.5. Instalación dun CMS

IMPORTANTE: A instalación pode diferir dun CMS a outro, pero todos requiren máis ou menos os mesmos pasos.

Tes que ler atentamente as instrucións de instalación, que atoparás no sitio web do programador.

Os pasos que adoitan ser comúns en case todos os CMS son:

1. Descarga a última versión do programa desde o sitio web do programador.
2. Asegúrese de que o servidor cumpra os requisitos previos para executar o CMS (versión de Apache, PHP, MySQL ou outro software necesario)
3. Carga o CMS ao servidor (por ftp, a través da web ou como o permita o teu provedor de hospedaxe).
4. Para crear a base de datos.
5. Inicie a instalación do CMS. Isto adoita facerse cargando un enderezo específico no teu navegador.
6. Adapta o ficheiro de configuración (normalmente chamado config.php, config.inc ou algo semellante). Nos CMS máis elaborados este paso non é necesario, xa que o programa de instalación é o encargado de xerar un ficheiro de configuración válido.
7. Ás veces, tes que modificar os permisos dun directorio e/ou ficheiro.
8. Instala o paquete de idioma español (se está dispoñible)

### 1.1.6. Explotación dun CMS

IMPORTANTE: a explotación pode diferir significativamente dun CMS a outro, pero, en xeral, todos teñen unha serie de elementos en común.

Debes ler atentamente as instrucións de uso, que atoparás no sitio web do programador.

Pasos que son comúns en case todos os CMS, unha vez realizada a instalación:

1. Asigne un contrasinal de alta seguridade ao usuario administrador que se crea por defecto.
2. Crea outros usuarios e asígnalles privilexios.
3. Editar páxina de inicio do sitio web.
4. Cambia o modelo (aparencia) do sitio.
5. Instale módulos de expansión (se é necesario).
6. Crea contido e/ou revisa contido creado por outros usuarios.

Durante o curso veremos como instalar e explotar algúns dos CMS máis populares do mercado.