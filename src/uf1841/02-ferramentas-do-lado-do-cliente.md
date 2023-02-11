###### Obxectivos

- *Visión xeral das ferramentas web modernas*
- *Tipos de ferramentas dispoñibles e onde atopalas*
- *Ciclo de vida do desenvolvemento de aplicacións web*
- *Como atopar axuda coas ferramentas individuais.*



# Ferramentas do lado do cliente

O software de escritura para a web fíxose cada vez máis sofisticado. Pero aínda é totalmente razoable escribir HTML, CSS e JavaScript "a man",  hoxe en día existen unha gran cantidade de ferramentas que os desenvolvedores poden usar para acelerar o proceso de creación dun sitio web ou aplicación.

Hai algunhas ferramentas ben asentadas que co tempo se converteron en "denominadores" comúns entre os desenvolvedores. Ao tempo, cada día se están escribindo e lanzando novas ferramentas para resolver vellos e novos problemas específicos.

É doado sentirse abraiado pola gran cantidade de ferramentas que se poden incluír nun único proxecto. 

De cando en vez, incluso os desenvolvedores web máis experimentados quedan atrapados nun problema coas ferramentas de desenvolvemento; é posible perder horas intentando que unha estrutura de ferramentas funcione antes de tocar unha soa liña de código de aplicación. 

Aquí non atoparas respostas a todas as preguntas sobre ferramentas web, pero intentaremos proporcionarche un punto de partida útil para comprender os fundamentos, a partir dos cales poder **construír o teu proceso de aprendizaxe**. Como ocorre con calquera tema complexo, é bo comezar pouco a pouco e ir avanzando gradualmente cara a usos máis avanzados.

## O ecosistema moderno de ferramentas

O ecosistema moderno de ferramentas para desenvolvedores actual é enorme, polo que é útil ter unha idea ampla dos principais problemas que están a resolver as ferramentas. Se vas ao teu motor de busca favorito e buscas "ferramentas para desenvolvedores front-end" atoparás un gran espectro de resultados que van desde editores de texto, navegadores, ata o tipo de bolígrafos que podes usar para tomar notas.

A elección final dun ou outro editor de código é algo persoal, pero máis alo do editor imos ver unha cantas ferramentas para desenvolvedores que nos axuden a producir código web de forma máis eficiente.

Desde unha visión aberta, podemos agrupar as ferramentas do lado do cliente en tres grandes categorías segundo o problema que tratan de resolver:

- **Rede de seguridade** (**_Safety net_**) — Ferramentas útiles durante o desenvolvemento do teu código.
- **Transformación** (**_Transformation_**) — Ferramentas que transforman o código dalgún xeito, por exemplo, convertendo unha linguaxe intermedia en JavaScript que un navegador poida entender.
- **Post-desenvolvemento** (**_Post-development_**) — Ferramentas que son útiles despois de escribir o código, como ferramentas de proba e implementación.

Vexamos cada grupo con máis detalle.

### Rede de seguridade

Estas son ferramentas que melloran un pouco o código que escribes.

Inclúen calquera cousa que facilite o proceso de desenvolvemento con respecto á xeración de código estable e fiable. As ferramentas de rede de seguridade tamén deberían axudarche a previr erros ou a corrixilos automaticamente sen ter que construír o teu código desde cero cada vez.

Algúns tipos de ferramentas de rede de seguridade máis comúns que son utilizados polos desenvolvedores son:

#### *Linters*

**Os linters** son ferramentas que verifican o teu código e infórmanche sobre os erros presentes, que tipos de erro son e en que liñas de código están presentes. Moitas veces, os linters pódense configurar non só para informar dos erros, senón tamén para detectar calquera infracción nunha guía de estilo especifica - *corporativa*-.

[eslint](https://eslint.org/) é o linter JavaScript estándar do sector: unha ferramenta altamente configurable para detectar posibles erros de sintaxe e fomentar as "mellores prácticas" na edición de código. Algunhas empresas e proxectos o empregan e asemade [comparten as súas configuracións](https://www.npmjs.com/search?q=keywords:eslintconfig).

Tamén podes atopar ferramentas de linting para outros idiomas, como [csslint](http://csslint.net/).

Outra ferramenta deste tipo que tamén vale a pena ollear é [webhint](https://webhint.io/), un linter configurable e de código aberto para a web que recolle as mellores prácticas, incluíndo enfoques de accesibilidade, rendemento e compatibilidade entre navegadores mediante [datos de compatibilidade do navegador de MDN](https://github.com/mdn/browser-compat-data), seguridade, probas de PWA e moito máis. Está dispoñible como unha [ferramenta de liña de comandos Node.js](https://webhint.io/docs/user-guide/) e tamén coma [extensión de VSCode](https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint).

#### Control do código - *Source code control*

Tamén coñecido como **sistema de control de versións** (*VCS*/SCV), o **control de código** é esencial para facer copias de seguridade do traballo e traballar en equipo. Un VCS típico implica ter unha versión local do código na que se fan os cambios. Unha vez rematadas as tarefas se "empuxan" - **_push_**- os cambios a unha versión "mestra" - **_master_** ou **_main_** - do noso código nun repositorio remoto almacenado nun servidor. Normalmente hai unha forma de controlar e coordinar que cambios se fan na copia "mestra" do código, e cando.  Así un equipo de desenvolvedores pode colaborar e compartir un repositorio sen acabar sobreescribindo o traballo duns e doutros.

[Git](https://git-scm.com/) é o sistema de control de código fonte que usa agora moita xente. Accédese principalmente a través da liña de comandos, pero tamén se pode acceder a través de [interfaces de usuario amigables](https://desktop.github.com/). 

Se tes o teu código nun **repositorio git**, podes envialo á túa propia instancia de servidor ou usar un sitio web de control de fontes aloxado como [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/), ou [BitBucket](https://bitbucket.org/product/features).

Como supós, usaremos GitHub neste curso. E podes atopar máis información sobre este coñecido SCV en [Git e GitHub](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub) .

#### Formatadores de código - *Code formatters*

Os formatadores de código, as veces tamén coñecidos como *embelecedores* de código, están dalgún xeito relacionados cos linters, a non ser porque, en lugar de sinalar erros no código, simplemente adoitan asegurarse de que o código estea formateado correctamente, segundo as túas regras de estilo. Se poden tamén configurar para que corrixen automaticamente os erros que atopan.

[Prettier](https://prettier.io/) é un exemplo de formateador de código moi recoñecido polos desenvolvedores web.

Se buscas formatadores de código para outras linguaxes podes [ver aquí](https://github.com/rishirdua/awesome-code-formatters)

#### Xestores de paquetes e empaquetadores - *Bundlers/packagers*

Estas son ferramentas que preparan o teu código para a produción, por exemplo, "sacudindo as árbores" para asegurarte de que só as partes que realmente estás a usar das túas bibliotecas de códigos se trasladan ao teu código de produción final; ou "minimificando" o teu código para eliminar todos os espazos en branco no código de produción; un xeito de facelo o máis pequeno posible antes de cargalo nun servidor.

[Parcel](https://parceljs.org/) é unha ferramenta especialmente intelixente que encaixa nesta categoría: pode facer as tarefas anteriores, e tamén axuda a empaquetar recursos HTML, CSS e arquivos de imaxe en paquetes axeitados para a publicación, asemade de poder engadir automaticamente as dependencias do proxecto.

[Webpack](https://webpack.js.org/) é outra ferrameta de enpaquetado moi popular con capacidades similares.

### Transformación - *Transformation*

Estes procedementos permiten codificar en "código futuro" (como as funcións CSS ou JavaScript máis recentes ou outras tecnoloxías que poden non ser aínda compatibles de forma nativa con algúns navegadores); ou que escribas o teu código utilizando algunha outra linguaxe coma [TypeScript](https://www.typescriptlang.org/). As ferramentas de transformación se ocuparan de xerar o código compatible co navegador e para poidas empregalas para produción.

En xeral, o desenvolvemento web considérase dominio de tres linguaxes: [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML) , [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) e [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) , e hai ferramentas de transformación para todas elas. 

A transformación ofrece dous **beneficios principais** (entre outros):

1. A capacidade de **escribir código usando as funcións máis recentes da linguaxe** e transformalo en código que funciona nos dispositivos cotiáns. Por exemplo, pode querer escribir JavaScript utilizando novas funcións de linguaxe de vangarda, pero aínda así o seu código de produción final funciona en navegadores máis antigos que non admiten esas funcións. Bos exemplos destas ferramentas son:
   - [Babel](https://babeljs.io/): un compilador de JavaScript que permite aos desenvolvedores escribir o seu código usando JavaScript de vangarda, que Babel toma e converte en JavaScript antigo para que o poidan entender máis navegadores.
   - [PostCSS](https://postcss.org/): Fai o mesmo tipo de cousas que Babel, pero para funcións CSS de vangarda. Se non hai unha forma equivalente de facer algo usando funcións CSS máis antigas, PostCSS instalará un polyfill de JavaScript para emular o efecto CSS que desexa.
2. A opción de **escribir o teu código nun idioma completamente diferente** e transformalo nun idioma compatible coa web. Por exemplo:
   - [Sass/SCSS](https://sass-lang.com/): Esta extensión CSS permítelle usar variables, regras aniñadas, mixins, funcións e moitas outras funcións, algunhas das cales están dispoñibles en CSS nativo (como as variables) e outras non.
   - [TypeScript](https://www.typescriptlang.org/): TypeScript é un superconxunto de JavaScript que ofrece unha morea de funcións adicionais. O compilador TypeScript converte o código TypeScript en JavaScript cando se compila o código para a produción.
   - [React](https://reactjs.org/), [Emberjs](https://emberjs.com/), ou [Vue](https://vuejs.org/): E outros frameworks que ofrecen moitas funcionalidades que se poden  empregar mediante unha sintaxe personalizada construída sobre *vanila* JavaScript. O código destes frameworks traballa en segundo plano para interpretar a sintaxe personalizada e representala como unha aplicación web final.

### Post desenvolvemento - *Post development*

Tamén existen ferramentas para ser usadas polos programadores despois do desenvolvemento. Estas ferramentas garanten que o teu código chegue á web e continúe funcionando. Isto inclúe os procesos de implantación, os marcos de proba, as ferramentas de auditoría e unhas cantas cousas máis.

Esta etapa do proceso de desenvolvemento é aquela coa que queres a menor interacción activa posible. Así que preferirás que, unha vez configurada, se execute na súa maior parte de forma automatica.

#### Ferramentas de proba - *Testing tools*

Xeralmente adoptan a forma dunha ferramenta que executa probas automatizadas contra o teu código para que poidas asegurarte de que é correcto antes de proceder, por exemplo, no intento de facer cambios nun repositorio de GitHub. Isto pode incluír *linting*, pero tamén procedementos máis sofisticados como probas unitarias, onde executas partes do teu código, asegurándote de que se comportan como deberían.

- Os marcos para probas de redacción inclúen [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/), e [Jasmine](https://jasmine.github.io/).
- Os sistemas de notificación e execución de probas automatizadas inclúen [Travis CI](https://travis-ci.org/), [Jenkins](https://jenkins.io/), [Circle CI](https://circleci.com/), e [outros](https://en.m.wikipedia.org/wiki/List_of_build_automation_software#Continuous_integration).

#### Ferramentas de implantación - *Deployment tools*

Os sistemas de implantación permítenche publicar o teu sitio web, están dispoñibles tanto para sitios estáticos como dinámicos e adoitan funcionar xunto con sistemas de proba. Por exemplo, unha cadea de ferramentas típica esperará a que introduzas os cambios nun repositorio remoto, realizará algunhas probas para ver se os cambios están ben e, se as probas pasan, implementará automaticamente a túa aplicación nun sitio de produción.

[Netlify](https://netlify.com/) é unha das ferramentas de implementación máis populares neste momento, pero tamén hai outras como [Vercel](https://vercel.com/) ou [Github Pages](https://pages.github.com/).

#### Outras ferramentas

Hai outros tipos de ferramentas dispoñibles para usar na fase posterior ao desenvolvemento, incluíndo [Code Climate](https://codeclimate.com/) para recoller métricas de calidade do código, ou a [extensión do navegador webhint](https://webhint.io/docs/user-guide/extensions/extension-browser/) para realizar análises de tempo de execución e da compatibilidade entre navegadores e outras comprobacións, [Github Bots](https://probot.github.io/) para proporcionar unha funcionalidade GitHub máis potente, [Updown](https://updown.io/) para obter un seguimento do tempo de actividade da aplicación e moitos máis!

### Algunhas consideracións sobre os tipos de ferramentas

Sen dúbida, hai unha orde na que se poden aplicar cada un dos tipos de ferramentas durante o ciclo de vida do desenvolvemento, pero *ten* a certeza de que **non *tes* que ter todas estas ferramentas para poder lanzar un sitio web**. De feito, **non necesitas ningunha delas**. Iso si, se es quen de incluír algunhas destas ferramentas no teu proceso de desenvolvemento, mellorará a túa propia experiencia coma desenvolvedor e probablemente mellorará a calidade xeral do teu código.

Moitas veces, as novas ferramentas para desenvolvedores tardan algún tempo en axustar a súa complexidade. Unha das ferramentas máis coñecidas, Webpack, ten fama de ser demasiado complicada para traballar, inda que na última versión houbo un importante impulso co fin de simplificar o seu uso e reducir a configuración necesaria absolutamente ao mínimo.

Definitivamente non hai ningunha solución que garanta o éxito coas ferramentas, pero a medida que aumente a túa experiencia atoparás fluxos de traballo que funcionen *para ti* ou para o teu equipo. So a experimentación practica pode ofrecerche unha visión de cada unha destas, e outras, ferramentas; e se che solucionan algún proceso de desenvolvemento, poderás adoptalas para a tua entorna de desenvolvemento. 

## Como elixir e obter axuda cunha ferramenta concreta

A maioría das ferramentas adoitan escribirse e publicarse de forma illada, polo que, aínda que case seguramente hai axuda dispoñible, nunca está no mesmo lugar nin no mesmo formato. Pode ser difícil atopar axuda relevante de como usar unha ferramenta ou mesmo escoller a ferramenta que queres utilizar. O coñecemento sobre cales son as mellores ferramentas para usar é un pouco tribal, o que significa que, se aínda non estás na comunidade web, é difícil descubrir exactamente cales buscar. 

Probablemente necesites unha combinación das seguintes cousas:

- Profesores, mentores, compañeiros ou compañeiros que teñan algunha experiencia e que resolveron estes problemas antes.
- As buscas xerais na web de ferramentas para desenvolvedores front-end son xeralmente inútiles a non ser que xa coñezas o nome da ferramenta que estás a buscar.
  - Se estás a usar o xestor de paquetes npm para xestionar as túas dependencias, por exemplo, é unha boa idea ir á [páxina de inicio npm](https://www.npmjs.com/) e buscar o tipo de ferramenta que está a localizar, por exemplo, intenta buscar "data" se queres unha utilidade de formato de data, ou "formateador" se está a buscar un formateador de código xeral. Presta atención á popularidade, calidade e puntuacións de mantemento e á última actualización do paquete. Tamén fai clic nas páxinas das ferramentas para saber cantas descargas mensuais ten un paquete e se ten boa documentación que poidas usar para saber se fai o que precisas.
  - Se está a buscar un complemento para integrar a funcionalidade da ferramenta no seu editor de código, consulte a páxina de complementos/extensións do editor de código; consulte [Paquetes Atom](https://atom.io/packages) e [Extensións de VSCode](https://marketplace.visualstudio.com/VSCode), por exemplo. Bótalle un ollo ás extensións destacadas na páxina principal e, de novo, tenta buscar o tipo de extensión que quere (ou o nome da ferramenta, por exemplo, busque "eslint" na páxina de extensións de VSCode). Cando obteñas resultados, bótalle unha ollada a información como cantas estrelas ou descargas ten a extensión, como indicador da súa calidade.
- Foros relacionados co desenvolvemento para facer preguntas sobre que ferramentas utilizar, por exemplo [MDN Learn Discourse](https://discourse.mozilla.org/c/mdn/learn), ou [Stackoverflow](https://stackoverflow.com/).

Cando escolles unha ferramenta para usar, o primeiro punto a visitar debería ser a páxina de inicio do proxecto da ferramenta. 

Tamén podes querer atopar algúns titoriais dedicados a comezar con determinados tipos de ferramentas. Algún bos sitios para encetar[CSS Tricks](https://css-tricks.com/), [Dev.to](https://dev.to/), [freeCodeCamp](https://www.freecodecamp.org/), e [Revista Smashing](https://www.smashingmagazine.com/), xa que están adaptados á industria do desenvolvemento web.

Seguramente probarás diferentes ferramentas mentres buscas as máis axeitadas para ti. Só probándoas saberás se teñen sentido, se están ben documentadas e teñen un soporte preocupado por mellorar a ferramenta; e ante todo  se fan o que queres que fagan. 

Isto só acaba de encetar. E está é só unha visión ampla e a ollo de paxaro sobre as **ferramentas web do lado cliente**.



OUT 2021

_**ref:**_  https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview
