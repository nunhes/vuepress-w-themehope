---
sidebar: "structure"
---


###### Obxectivos:

- *Explorar o concepto de programación.* 
- *Comprender o que son as linguaxes de programación de alto e baixo nivel.* 
- *Coñecer os elementos básicos dun programa.* 
- *Coñecer o software e as ferramentas empregadas polos desenvolvedores.*

## Que é a programación?

A programación (tamén coñecida como codificación) é o proceso de escribir instrucións nun dispositivo, como un ordenador ou un dispositivo móbil.

Escribimos estas instrucións mediante unha linguaxe de programación, que despois é interpretada polo dispositivo. A estes conxuntos de instrucións se os pode denominar de diferentes xeitos: programa, programa de ordenador, aplicación (app) ou executable.

### Un programa (ou aplicación)
Un programa pode ser calquera cousa que estea escrita con código e se execute nos nosos dispositivos: 

- Sitios web
- Xogos
- Aplicacións de teléfono

Un programa que se executa ou executa código está a realizar unha serie de instrucións programadas. O dispositivo que estás usando actualmente p.ex. está executando un programa que representa os contidos na túa pantalla.

## Linguaxes de programación

O propósito principal das linguaxes de programación é que os desenvolvedores elaboren instrucións para enviar a un dispositivo.

As linguaxes de programación son un vehículo de comunicación entre humanos e ordenadores.

As linguaxes de programación teñen unha variedade de formatos e poden servir para diferentes fins. Por exemplo, JavaScript úsase principalmente para aplicacións web e Bash úsase principalmente para a xestión de sistemas operativos.

### Linguaxes de baixo e de alto nivel
As linguaxes de baixo nivel soen necesitar menos pasos que as de alto nivel para ser interpretados por un dispositivo. Non obstante, o que fai populares as linguaxes de alto nivel é a súa lexibilidade e compatibilidade. JavaScript considérase unha linguaxe de alto nivel.

O código da seguinte sección ilustra a diferenza entre unha linguaxe de alto nivel, como JavaScript, e unha linguaxe ensambladora de baixo nivel.

### Comparación de códigos
O seguinte código está escrito en JavaScript, unha linguaxe de alto nivel. Implementa un algoritmo empregando construcións como variables, bucles for e outras instrucións.

```js
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

O código anterior ilustra un algoritmo para implementar unha secuencia de Fibonacci. Agora, aquí está o código correspondente na linguaxe ensambladora:

```bash
area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

Créalo ou non, *ambos exemplos están facendo o mesmo*: representar unha secuencia de Fibonacci, ata 10.

✅ Unha sucesión de Fibonacci [defínese](https://gl.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci) como un conxunto de números tal que cada número é a suma dos dous anteriores, comezando por 0 e 1.

## Elementos dun programa

Os programas compóñense de instrucións. Polo xeral cada instrución ocupa un espazo delimitado. Dependendo da linguaxe os limites poden ser varios: o salto de liña, un punto e coma o final da instrución, ou un marcado especifico - corchetes,...-

Todas as instrucións expresadas nunha aplicación ou programa se inclúen para desenvolver un cometido concreto. Se algunha(s) instrución(s) non se executa carece de valor. A non execución dunha instrución pódese deber a múltiples razóns: un dispositivo ou interface incompatible, un erro na redacción ou un accidente inesperado. Parte fundamental do programador e testear o código que produce para correxir erros e evitar producir código *inservible*. 	

 ## Ferramentas

Unha **entorna de desenvolvemento** é un conxunto de ferramentas que un programador usa para escribir, probar, producir ou publicar programas de todo tipo. Segundo os intereses específicos, unha entorna pode modificarse ao gusto do desenvolvedor e adaptarse a diferentes fluxos de traballo; p.ex.  cando se emprega unha ou outra linguaxe de programación. 

Os entornas de desenvolvemento son tan únicas coma os desenvolvedores que os empregan.

### Entorna de desenvolvemento

#### Editor

Unha das ferramentas esenciais para o desenvolvemento é o editor de código. Os editores son onde escribes o teu código e, ás veces, onde executarás o teu código.

Outras capacidades dun editor de código ben valoradas polos desenvolvedores son:

- *__Depuración:__*  Axudas para detectar e depurar erros. Algúns editores dispoñen de capacidades de depuración ou permiten engadila para linguaxes de programación específicas. 
- *__Resaltado de sintaxe:__* Uso de cores e formato de texto na representación do código, facilitando a lectura. A maioría dos editores permiten personalizar o resaltado de sintaxe.
- *__Extensións e integracións:__* Complementos especializados para desenvolvemento, que permiten acceder a ferramentas adicionais que non están integradas no editor base. P. ex., nalgún momento podes necesitar unha extensión de verificación ortográfica para comprobar se hai erros na redacción de contidos, ou outra que simplemente se encargue de organizar a disposición do código para que sexa máis lexible. Cada editor soe ter os seus complementos ou extensións propios; e, a maioría deles inclúen unha forma de manexar extensións: buscar, activar, desactivar, configurar segundo as necesidades,... Moitos permiten asemade que os desenvolvedores poidan crear as súas propias extensións.
- *__Personalización__* A maioría dos editores son extremadamente personalizables,  de xeito que cada programador pode ter a súa entorna de desenvolvemento única e adaptada ás súas necesidades. 

##### Editores populares e extensións de desenvolvemento web

- [Code](https://code.visualstudio.com/)

  - [Corrector ortográfico de código](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  - [Prettier - Formateador de código](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [saber máis](https://www.tabnine.com/blog/top-42-free-vscode-extensions/)...
  
- [Atom](https://atom.io/)

  - [corrector ortográfico](https://atom.io/packages/spell-check)
  - [teletipo](https://atom.io/packages/teletype)
  - [embelecer átomo](https://atom.io/packages/atom-beautify)
  - [saber máis](https://www.tabnine.com/blog/21-best-atom-packages-for-2021/)...
  
- [SublimeText](http://www.sublimetext.com/)

  - [Package Control](http://packagecontrol.io/)
  - [Emmet](https://www.tabnine.com/blog/21-best-atom-packages-for-2021/)

- [Codespace](https://docs.github.com/en/codespaces)

  

#### Navegador

Outra ferramenta crucial é o navegador. Os desenvolvedores web confían no navegador para ver como se executa o seu código.

Moitos navegadores inclúen *ferramentas para desenvolvedores* (DevTools) que conteñen un conxunto de funcións e información útiles para axudar aos desenvolvedores a recoller e capturar información importante sobre a súa aplicación. Por exemplo: se unha páxina web ten erros, ás veces é útil saber cando se produciron. DevTools nun navegador pódense configurar para capturar esta información.

##### Navegadores populares e ferramentas de desenvolvemento

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-13441-cxa)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)
- [Opera](https://www.opera.com/)

#### Ferramentas de liña de comandos

Para algunhas tarefas hai desenvolvedores que prefiren unha entorna máis áxil, inda que menos gráfica: a liña de comandos. 

O desenvolvemento de código require unha cantidade significativa de tecleo. Para non interromper o fluxo de traballo podemos empregar os atallos de teclado: para cambiar entre as fiestras do escritorio, traballar en diferentes arquivos, usar ferramentas,... A maioría das tarefas pódense completar cun rato, pero unha vantaxe de usar a liña de comandos é que se pode facer moito coas ferramentas da liña de comandos sen necesidade de intercambiar entre o rato e o teclado. Outra vantaxe da liña de comandos é que se pode configurar e pode gardar a túa configuración personalizada, cambiala  e tamén importala a novas máquinas de desenvolvemento. Debido a que os ambientes de desenvolvemento son tan exclusivos para cada desenvolvedor, algúns evitarán usar a liña de comandos, outros confiarán nela por completo.

##### Opcións populares da liña de comandos

As opcións para a liña de comandos dependeran do sistema operativo que empregues.

###### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7?WT.mc_id=academic-13441-cxa) 💻

- [Liña de comandos](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands?WT.mc_id=academic-13441-cxa) (tamén coñecida como CMD) 💻

- [Terminal de Windows](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-13441-cxa)

- [mintty](https://mintty.github.io/)

###### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻

- [iTerm](https://iterm2.com/)

- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7?WT.mc_id=academic-13441-cxa)

###### Linux

- [bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7?WT.mc_id=academic-13441-cxa)

######  Outras ferramentas de liña de comandos - Popular Command Line Tools

- [Git](https://git-scm.com/) (💻 on most operating systems)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

## Documenta o teu código

Aprende as mellores prácticas. Non gañas nada buscando na nube de titorías en liña unha solución que a **documentación oficial** seguramente te soluciona en poucos pasos. Vai as fontes.

**Documenta os teus proxectos**. Usa  os comentarios enxertados no teu código. Inda que acabes limpándoos cara a publicación.



## Máis sobre desenvolvemento web

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), de Mozilla, os publicadores do navegador [Firefox](https://www.mozilla.org/firefox/)
- [Microsoft's developer docs](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), para [Microsoft Edge](https://www.microsoft.com/edge)
- [devdocs.io](https://devdocs.io/)
- [w3schools](https://www.w3schools.com/)
- [freecodecamp.org](https://www.freecodecamp.org/)
- [code.org](https://code.org/)
- https://frontendmasters.com/



____

__.ref:__ https://docs.microsoft.com/gl-es/learn/modules/web-development-101-introduction-programming/1-introduction

OUT 2021

