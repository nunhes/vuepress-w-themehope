# Introdución a GitHub

Aprende a usar as funcións clave de GitHub, incluíndo problemas, notificacións, ramas, confirmacións e solicitudes de extracción.

GitHub é unha plataforma de desenvolvemento que che permite aloxar e revisar código, xestionar proxectos e crear software xunto a 50 millóns de desenvolvedores.

Por que todo o mundo está a construír en GitHub? Porque ofrece as características importantes de DevOps que as empresas e organizacións de todos os tamaños necesitan para os seus proxectos públicos e privados. Xa se trate de planificar funcións, corrixir erros ou colaborar en cambios, GitHub é o lugar onde os desenvolvedores de software do mundo se reúnen para facer cousas. E despois facelos mellores.

## Obxectivos de aprendizaxe

Neste módulo:

- Comunicarse coa comunidade do proxecto en cuestións
- Xestiona as notificacións dos eventos do proxecto
- Crea sucursais para xestionar o traballo en paralelo
- Fai compromisos para actualizar a fonte do proxecto
- Introduce cambios coas solicitudes de extracción
- Implementa unha páxina web en páxinas de GitHub

- Recoñece as diferenzas entre Git e GitHub e as funcións que desempeñan no ciclo de vida do desenvolvemento de software
- Describe un fork de repositorio e como se diferencia dun clon
- Explica a funcionalidade das etiquetas do repositorio e onde aplicalas en problemas e solicitudes de extracción

# Que é GitHub?

Aquí, discutimos as principais funcións de GitHub que usas a diario para xestionar e contribuír a proxectos de software.

## O fluxo de GitHub

Ademais de ofrecer unha plataforma para o desenvolvemento de software colaborativo, GitHub tamén ofrece un fluxo de traballo deseñado para optimizar o uso das súas diversas funcións. Aínda que esta unidade ofrece unha visión xeral dos compoñentes importantes da plataforma, recoméndase que revise primeiro [Comprensión do fluxo de GitHub](https://guides.github.com/introduction/flow/) .

## Git e GitHub

Mentres traballas con **Git** e **GitHub** , podes preguntarte cal é a diferenza entre ambos.

**Git** é un sistema de control de versións distribuído (DVCS) que permite que varios desenvolvedores ou outros colaboradores traballen nun proxecto. Proporciona unha forma de traballar cunha ou máis sucursais locais e envialas a un repositorio remoto. Git é responsable de todo o relacionado con GitHub que ocorre localmente no teu ordenador. As funcións principais proporcionadas por Git inclúen:

- Instalado e usado na súa máquina local
- Manexa o control de versións
- Admite ramificación

Para obter máis información sobre **Git** , consulte [Usar comandos comúns de Git](https://docs.github.com/en/free-pro-team@latest/github/using-git/using-common-git-commands) .

**GitHub** é unha plataforma na nube que usa Git como tecnoloxía principal. Simplifica o proceso de colaboración en proxectos e ofrece un sitio web, ferramentas de liña de comandos e un fluxo xeral que permite que desenvolvedores e usuarios traballen xuntos. GitHub actúa como o "repositorio remoto" mencionado anteriormente na sección **Git** .

As funcións principais proporcionadas por GitHub inclúen:

- Problemas
- Discusións
- Solicitudes de extracción
- Notificacións
- Etiquetas
- Accións
- Garfos
- Proxectos

Para obter máis información sobre **GitHub** , consulte [Primeiros pasos con GitHub](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github) .

## Problemas

**Os problemas** son onde se produce a maior parte da comunicación entre os consumidores e o equipo de desenvolvemento dun proxecto. Pódese crear un *problema* para discutir un amplo conxunto de temas, incluíndo informes de erros, solicitudes de funcións, aclaracións de documentación e moito máis. Unha vez que se crea un problema, pódese asignar a propietarios, etiquetas, proxectos e fitos. Tamén podes asociar problemas con solicitudes de extracción e outros elementos de GitHub para ofrecer unha trazabilidade futura.

![Problema de GitHub que ofrece comentarios aos desenvolvedores sobre un erro ou unha suxestión de funcións.](https://docs.microsoft.com/gl-es/learn/github/introduction-to-github/media/2-issue.png)

Para obter máis información sobre os problemas de GitHub, consulte [Problemas de dominio](https://guides.github.com/features/issues/) .

## Notificacións

Como plataforma colaborativa, GitHub ofrece **notificacións** para practicamente todos os eventos que teñen lugar nun fluxo de traballo determinado. Estas notificacións pódense axustar finamente para satisfacer as túas preferencias. Por exemplo, pode subscribirse a todas as creacións e edicións de problemas nun proxecto, ou pode simplemente recibir notificacións dos problemas nos que se mencione. Tamén podes decidir se recibes notificacións por correo electrónico, web e móbil, ou ambos. Para facer un seguimento de todas as túas notificacións en diferentes proxectos, usa o [panel de notificacións de GitHub](https://github.com/notifications) .

![Panel de control de notificacións de GitHub.  GitHub ofrece unha caixa de entrada que os desenvolvedores poden usar para estar ao día dos cambios nos repositorios.](https://docs.microsoft.com/gl-es/learn/github/introduction-to-github/media/2-notifications.png)

Para obter máis información sobre as notificacións de GitHub, consulta [Configurar notificacións](https://help.github.com/github/managing-subscriptions-and-notifications-on-github/configuring-notifications) .

## Ramas

**As ramas** son a forma preferida de crear cambios no [fluxo de GitHub](https://guides.github.com/introduction/flow/) . Proporcionan illamento para que varias persoas poidan traballar simultaneamente no mesmo código de forma controlada. Este modelo permite a estabilidade entre ramas críticas, como `main`, ao tempo que permite aos desenvolvedores unha total liberdade para realizar os cambios que precisen para cumprir os seus obxectivos. Unha vez que o código dunha rama estea listo para formar parte da `main`rama, pódese fusionar mediante a solicitude de extracción.

![Fluxo de GitHub cunha rama de funcións.  Os cambios realizados nunha rama pódense combinar de novo na rama principal.](https://docs.microsoft.com/gl-es/learn/github/introduction-to-github/media/2-branching.png)

Para obter máis información sobre as ramas de GitHub, consulta [Acerca das ramas](https://help.github.com/github/collaborating-with-issues-and-pull-requests/about-branches) .

## Compromete

Unha **confirmación** é un cambio nun ou máis ficheiros nunha rama. Cada vez que se crea un commit, asígnaselle un ID único e fai un seguimento, xunto co tempo e o colaborador. Isto proporciona unha pista de auditoría clara para quen revise o historial dun ficheiro ou elemento ligado, como un problema ou unha solicitude de extracción.

![Unha lista de compromisos de GitHub cunha rama principal.](https://docs.microsoft.com/gl-es/learn/github/introduction-to-github/media/2-commits.png)

Para obter máis información sobre as confirmacións de GitHub, consulta [Confirmación e revisión de cambios no teu proxecto](https://help.github.com/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project) .

## Solicitudes de extracción

Unha **solicitude de extracción** é o mecanismo usado para sinalar que as confirmacións dunha rama están listas para fusionarse noutra rama. O programador que envía a **solicitude de extracción** adoita solicitar a un ou máis revisores que verifiquen o código e aproben a combinación. Estes revisores teñen a oportunidade de comentar os cambios, engadir os seus propios ou usar a propia solicitude de extracción para máis discusións. Unha vez aprobados os cambios (se é necesaria a aprobación), a rama de orixe da solicitude de extracción (a rama de comparación) pódese combinar coa rama base.

![As solicitudes de extracción de GitHub proporcionan un xeito de conseguir commits dunha rama a outra.](https://docs.microsoft.com/gl-es/learn/github/introduction-to-github/media/2-pull-request.png)

Para obter máis información sobre as solicitudes de extracción de GitHub, consulte [Acerca das solicitudes de extracción](https://help.github.com/github/collaborating-with-issues-and-pull-requests/about-pull-requests) .

## Etiquetas

As etiquetas proporcionan unha forma de categorizar e organizar **problemas** e **extraer solicitudes** nun repositorio. Ao crear un repositorio de GitHub, engadiranse automaticamente varias etiquetas e tamén se poden crear outras novas.

Exemplos de etiquetas inclúen:

- erro
- documentación
- duplicar
- quería axuda
- mellora
- pregunta

![As etiquetas de GitHub pódense usar para categorizar os problemas do repositorio de GitHub e as solicitudes de extracción.](https://docs.microsoft.com/gl-es/learn/github/introduction-to-github/media/2-labels.png)

Para obter máis información sobre as etiquetas de GitHub, consulta [Acerca das etiquetas](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/about-labels) .

## Accións

**As accións de GitHub** proporcionan automatización de tarefas e funcionalidade de fluxo de traballo nun repositorio. As accións pódense utilizar para axilizar os procesos no seu ciclo de vida de desenvolvemento de software e implementar a integración continua e a implantación continua (CI/CD).

As accións de GitHub componse dos seguintes compoñentes:

- **Fluxos de traballo** : procesos automatizados engadidos ao teu repositorio.
- **Eventos** : actividade que desencadea un fluxo de traballo.
- **Traballos** : conxunto de pasos que se executan nun corredor.
- **Pasos** : unha tarefa que pode executar un ou máis comandos (accións).
- **Accións** : comandos autónomos que se poden combinar en pasos. Pódense combinar varios pasos para crear un traballo.
- **Runners** : Servidor que ten instalada a aplicación runner GitHub Actions.

![As accións de GitHub proporcionan unha forma de automatizar o ciclo de vida do desenvolvemento de software.](https://docs.microsoft.com/gl-es/learn/github/introduction-to-github/media/2-actions.png)

Para obter máis información sobre as accións de GitHub, consulte [Introdución ás](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions) accións [de GitHub](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions) .

## Clonación e bifurcación

GitHub ofrece varias formas de copiar un repositorio para que poidas traballar nel.

- **Clonar un repositorio** : clonar un repositorio fará unha copia do repositorio e do seu historial na súa máquina local. Se tes acceso de escritura ao repositorio, podes enviar os cambios desde a túa máquina local ao repositorio remoto (chamado **orixe** ) mentres se completan. Para clonar un repositorio podes usar o [`git clone [url\]`](https://docs.github.com/en/free-pro-team@latest/github/using-git/getting-changes-from-a-remote-repository#cloning-a-repository)comando ou o comando da CLI de GitHub [`gh repo clone [url\]`](https://cli.github.com/manual/gh_repo_clone).
- **Forking un repositorio** - **Forking** un repositorio fai unha copia do repositorio na túa conta de GitHub. O repositorio principal denomínase **ascendente** mentres que a súa copia bifurcada é a **orixe** . Unha vez que introduciches un repositorio na túa conta de GitHub, podes **clonalo** na túa máquina local. Forking permite facer libremente cambios nun proxecto sen afectar o orixinal **a importe** repositorio. Para contribuír cambios ao seu **importe** repositorio crea unha **solicitude de recepción** do seu repositorio bifurcada. Tamén pode executar `git`comandos para asegurarse de que a súa copia local permaneza sincronizada coa **anterior** repositorio.

Cando clonarías un repositorio fronte a un repositorio? Se está a traballar cun repositorio e ten acceso de escritura, pode clonalo na súa máquina local. Desde alí podes facer modificacións e enviar os teus cambios directamente ao repositorio de **orixe** .

Se precisas traballar cun repositorio creado por outro propietario, como `github/example`e non tes acceso de escritura, podes conectar o repositorio na túa conta de GitHub e, a continuación, clonar o fork na túa máquina local. Para ver isto visualmente, supoñamos que a túa conta de GitHub se chama `githubtraining`para este exemplo. Usando o sitio web de GitHub podes `githubtraining`introducir ou calquera outro exemplo na túa conta. Desde alí podes clonar a versión bifurcada do repositorio na túa máquina local. Estes pasos móstranse na seguinte imaxe.

![Forzar un repositorio crea unha copia del na túa conta de GitHub.  Despois podes clonar a túa copia bifurcada do repositorio na túa máquina local.](https://docs.microsoft.com/gl-es/learn/github/introduction-to-github/media/2-fork-clone.png)

Pódense facer cambios na súa copia local de `githubtraining/example`e despois enviarse de novo ao seu repositorio de **orixe** remoto ( `githubtraining/example`). Os cambios poden, a continuación, ser sometido ao `github/example` **importe** depósito mediante un **pedido de tirar** como se mostra a continuación.

![Os cambios locais pódense enviar ao repositorio de orixe e entón pódese crear unha solicitude de extracción para introducir os cambios no repositorio anterior.](https://docs.microsoft.com/gl-es/learn/github/introduction-to-github/media/2-fork-pullrequest.png)

Para obter máis información, consulte [Fork a repo](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) .

## Páxinas de GitHub

**GitHub Pages** é un motor de hospedaxe que está integrado directamente na túa conta de GitHub. Seguindo algunhas convencións e activando a función, podes crear o teu propio sitio estático xerado a partir de HTML e código de rebaixa sacado directamente do teu repositorio.

![GitHub Pages é un motor de hospedaxe dispoñible coa túa conta de GitHub.  Pódese usar para aloxar sitios estáticos xerados desde o seu repositorio.](https://docs.microsoft.com/gl-es/learn/github/introduction-to-github/media/2-github-pages.png)

Para obter máis información, consulta [Páxinas de GitHub](https://pages.github.com/) .



# Ampliar coñecementos: unha visita guiada a GitHub

Podes utilizar GitHub Learning Lab para coñecer as principais funcións de GitHub, incluíndo problemas, notificacións, ramas, confirmacións e solicitudes de extracción.

GitHub Learning Lab é unha experiencia integrada que é fácil de usar. Recibes comentarios e instrucións ao longo do laboratorio mentres traballas no teu repositorio de GitHub.

Aquí tes algunhas suxestións para que o exercicio de Learning Lab sexa máis agradable.

- GitHub Learning Lab se instala na túa conta no primeiro paso deste laboratorio. Se che preguntan, asegúrate de *instalalo en todos os repositorios*. Isto non afectará ás organizacións das que es membro, só aos repositorios persoais que o laboratorio crea para ti.
- Despois da instalación, podes volver á páxina principal. Para volver ao teu laboratorio, só tes que usar o botón da parte inferior desta páxina.
- GitHub creará un repositorio para que o uses. Dá permisos a GitHub Learning Lab.
- GitHub Learning Lab establecerase como revisor das túas solicitudes de extracción para poder darche os seguintes pasos a tempo. Ás veces, a revisión da túa solicitude de extracción levará uns minutos.
- Cando se che proporcione unha ligazón para crear ou editar un ficheiro ou se che indique que abra unha pestana, **asegúrate de abrila noutra pestana do teu navegador** . Deste xeito, pode volver ás instrucións sen saír do ficheiro.
- Os comentarios e as instrucións continuarán na túa solicitude de extracción ou nun problema do teu repositorio.



[Inicia o laboratorio de aprendizaxe en GitHub](https://lab.github.com/githubtraining/introduction-to-github)





## Colabora con outras persoas con Markdown e GitHub Pages

Queres comunicarte de forma máis eficaz con outros usuarios de GitHub? Buscas unha forma gratuíta de promocionar o teu proxecto GitHub?

Aprende a usar Markdown para comunicarte eficazmente con outras persoas nos teus problemas de GitHub, solicitudes de extracción, comentarios e documentación. Despois aprende a crear sitios de proxectos e publicacións de blog para promocionar os teus proxectos con GitHub Page.

Neste camiño de aprendizaxe, aprenderás como:

- Markdown permíteche organizar os seus pensamentos mediante código, imaxes, listas e táboas.
- GitHub-Flavored Markdown (GFM) permite o resaltado de sintaxe para linguaxes de programación populares e permítelle vincular problemas, solicitudes de extracción e confirmacións.
- As páxinas de GitHub axúdanche a crear páxinas de proxectos e publicacións de blog que inclúan temas personalizados.

## Requisitos previos

- Unha conta de [GitHub](https://github.com/?azure-portal=true)



Podes percorrer diferentes modos de aprender a empregar GitHub:

- [Curso gratuíto en liña](https://lab.github.com/githubtraining/introduction-to-github)
- [Git-it-Win-ia32](https://github.com/jlord/git-it-electron/releases/download/4.4.0/Git-it-Win-ia32.zip)
- [Documentación oficial en español](https://docs.github.com/es)



***ref:*** https://docs.microsoft.com/gl-es/learn/modules/introduction-to-github/



