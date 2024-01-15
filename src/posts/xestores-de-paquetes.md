---
icon: edit
date: 2023-10-23
category:
  - JS
  - NodeJS
tag:
  - npm
  - yarn
  - pnpm
  - nodejs
  - javascript
  - sistemas distribuidos
---

# Xestores de paquetes

Como programador - frontend ou full stack-, de seguro que acabarás empregando algún destes xestores de paquetes: **NPM**, **YARN** ou **PNPM**. Todos eles son ferramentas que axudan a xestionar as dependencias do teu proxecto - librarías, marcos, utilidades,...-, e a axilizar as tarefas de desenvolvemento e publicación.

Imos logo a coñecelos algo mellor.

## NPM

[NPM](https://www.npmjs.com/) significa *Node Package Manager*. É o xestor de paquetes predeterminado de NodeJS e o máis popular. Creado en 2009 por Isaac Schlueter, foi ideado como forma de compartir e reutilizar código para proxectos de NodeJS. Desde o momento da súa aparición foi medrando ata converterse nun repositorio de máis de 2 millóns e medio de paquetes que se poden usar para o desenvolvemento tanto front-end como back-end.

NPM dispón dunha interface de liña de comandos sinxela e intuitiva que permite instalar, actualizar, desinstalar e publicar paquetes. Tamén conta cun sitio web ([npmjs.com](https://www.npmjs.com/)) onde podes buscar, localizar e descargar paquetes. NPM usa un arquivo chamado `package.json` para almacenar os metadatos do teu proxecto, como nome, versión, dependencias, scripts, etc. Tamén crea un cartafol chamado `node_modules` onde almacena os paquetes instalados segundo as necesidades do teu proxecto.

### Vantaxes

- É moi utilizado e apoiado pola comunidade JavaScript.
- Ten unha colección grande e diversa de paquetes para case calquera caso de uso.
- Ten un rico conxunto de funcións e opcións para personalizar o teu proxecto.
- Ten unha ferramenta de auditoría de seguridade integrada que comproba se hai vulnerabilidades nas dependencias do teu proxecto.

### Desvantaxes

- Pode ser lento e ineficiente ao instalar ou actualizar paquetes.
- Pode crear dependencias duplicadas ou aniñadas que ocupan espazo no disco e provocan conflitos.
- Pode ter versións inconsistentes ou desactualizadas de paquetes en diferentes ambientes.

## YARN

[YARN](https://yarnpkg.com/) de Yet Another Resource Negotiator. É outro xestor de paquetes creado en 2016 por Facebook, Google, Exponent e Tilde. Foi deseñado para resolver algúns dos problemas e limitacións de NPM, como a velocidade, a fiabilidade e a seguridade.

YARN ten unha interface de liña de comandos semellante á de NPM, pero con algunhas diferenzas e melloras. Usa tamén o arquivo `package.json` para os metadatos e dependencias do proxecto, pero engade o arquivo `yarn.lock` que bloquea as versións exactas das túas dependencias. E crea tamén o cartafol `node_modules` onde almacena os paquetes instalados.

### Vantaxes

- É máis rápido e eficiente que NPM ao instalar ou actualizar paquetes.
- Usa unha estrutura de dependencia plana que evita a duplicación e o aniñado de paquetes.
- Admite a instalación fóra de liña de paquetes desde unha caché local.
- Ten un algoritmo de mellor resolución que garante versións consistentes e deterministas dos paquetes en diferentes ambientes.

### Desvantaxes

- Non é tan amplamente utilizado nin admitido como NPM pola comunidade JavaScript.
- É posible que non sexa compatible con algúns paquetes ou funcións NPM.
- Pode ter algúns erros ou problemas que aínda non están solucionados ou resoltos.

## PNPM

[PNPM](https://pnpm.io) significa Performant Node Package Manager. É outro xestor de paquetes para JavaScript que foi creado en 2016 por Zoltan Kochan. Foi deseñado para ser máis rápido, máis lixeiro e máis seguro que NPM e YARN.

PNPM ten unha interface de liña de comandos semellante a NPM e YARN, pero con algunhas diferenzas e melloras. Tamén usa o mesmo arquivo `package.json` que NPM e YARN, pero engade outro arquivo chamado `pnpm-lock.yaml` que bloquea as versións exactas das túas dependencias. Tamén crea o cartafol `node_modules` onde almacena os paquetes instalados.

### Vantaxe

- É máis rápido e lixeiro que NPM e YARN ao instalar ou actualizar paquetes.
- Usa ligazóns duras ou enlaces simbólicos para ligar paquetes dunha tenda global en lugar de copialos no cartafol `node_modules`.
- Admite un illamento estrito de dependencias que impide que os paquetes accedan a módulos que non están declarados no arquivo `package.json`.
- Ten unha ferramenta de auditoría de seguridade integrada que comproba se hai vulnerabilidades nas dependencias.

### Desvantaxes

- Non é tan amplamente utilizado nin admitido como NPM ou YARN pola comunidade.
- É posible que non sexa compatible con algúns paquetes ou funcións NPM ou YARN.
- Pode ter algúns erros ou problemas que aínda non están solucionados ou resoltos.

## Comparativa

| Característica              | NPM    | YARN     | PNPM                                                                                   |
| --------------------------- | ------ | -------- | -------------------------------------------------------------------------------------- |
| **Velocidade**              | Lento  | Rápido   | Moi rápido                                                                             |
| **Espazo en disco**         | Moito  | Pouco    | Moi pouco                                                                              |
| **Seguridade**              | Baixa  | Alta     | Moi alta                                                                               |
| **Compatibilidade**         | Alta   | Media    | Media                                                                                  |
| **Popularidade**            | Alta   | Media    | Baixa                                                                                  |
| **Ecosistema**              | Rico   | Medio    | Medio                                                                                  |
| **CLI**                     | Simple | Complexo | Similar a NPM                                                                          |
| **Cartafol `node_modules`** | Plano  | Plano    | Enlaces simbólicos para ser 100% compatible co estándar de resolución do módulo NodeJS |

<center><small>Características dos manexadores de paquetes de NodeJS</small></center>

### Rendemento

Un dos aspectos máis importantes dun xestor de paquetes é a rapidez con que pode instalar e actualizar as dependencias do teu proxecto. Isto pode afectar ao fluxo de traballo de desenvolvemento, así como ao teu proceso de implantación.

Vexamos os resultados de medir o rendemento de NPM, YARN e PNPM, nun proxecto de mostra con máis ou menos 1000 dependencias:

| Métrica                              | NPM    | YARN   | PNPM  |
| ------------------------------------ | ------ | ------ | ----- |
| Tempo de instalación (caché en frío) | 67.4s  | 47.6s  | 32.3s |
| Tempo de instalación (caché quente)  | 9.1s   | 4.9s   | 4.4s  |
| Espazo en disco utilizado            | 237 MB | 175 MB | 39 MB |

<center><small>Rendemento dos xestores de paquetes NPM, YARN e PNPM</small></center>

Como podes ver, PNPM é o xestor de paquetes máis rápido, seguido de YARN e despois de NPM. Isto débese a que PNPM usa un novo enfoque chamado "node-modules con ligazóns simbólicas", que crea ligazóns ao almacén global de paquetes en lugar de copialos en cada proxecto. Isto aforra espazo no disco e reduce a duplicación. YARN tamén usa unha caché global de paquetes, pero aínda así os copia en cada proxecto. NPM non usa ningún mecanismo de caché, polo que descarga e instala cada paquete cada vez.

### Características

Outro aspecto dun xestor de paquetes son as funcións que ofrece para facilitarche a vida como programador. Algunhas das características que considero importantes son:

- **Workspaces**: esta función permítelle xestionar varios subproxectos dentro dun só repositorio e compartir dependencias entre eles. Isto é útil para arquitecturas monorepo, onde tes varios paquetes que dependen uns dos outros
- **Lockfiles**: esta función garante que as versións exactas das túas dependencias se instalen cada vez, independentemente de calquera cambio no rexistro ou nos arquivos `package.json`. Isto mellora a reprodutibilidade e fiabilidade das túas compilacións.
- **Scripts**: esta función permite executar comandos personalizados antes ou despois de instalar ou actualizar as túas dependencias, como compilar, probar ou limar o teu código
- **Hooks**: esta función permite executar lóxica personalizada durante certos eventos do ciclo de vida do xestor de paquetes, como resolver, buscar, vincular ou auditar as túas dependencias.
- **Audit** : esta función permite comprobar as túas dependencias en busca de vulnerabilidades ou problemas coñecidos e obter recomendacións sobre como solucionalos.

| Package Manager | Workspaces | Lockfiles | Scripts | Hooks | Audit |
| --------------- | ---------- | --------- | ------- | ----- | ----- |
| NPM             | Si         | Si        | Si      | Non   | Si    |
| YARN            | Si         | Si        | Si      | Si    | Si    |
| PNPM            | Si         | Si        | Si      | Si    | Non   |

<center><small>Táboa de resumo de características para xestores de paquetes NPM, YARN e PNPM</small></center>

Os tres xestores de paquetes admiten espazos de traballo, arquivos de bloqueo, scripts e funcións de auditoría. Non obstante, só YARN e PNPM admiten ganchos - hooks-, que che poden dar máis flexibilidade e control sobre o proceso de xestión de dependencias. Por outra banda, só NPM e YARN admiten funcións de auditoría, que poden axudarche a mellorar a seguridade e a calidade do teu código.

### Compatibilidade

Outro aspecto importante dun xestor de paquetes é a compatibilidade con outras ferramentas e plataformas que podes usar no teu proxecto. Algúns dos factores que afectan á compatibilidade son:

- **Rexistro**: esta é a fonte de paquetes que usa o xestor de paquetes para instalar e actualizar as súas dependencias. O rexistro máis común é [npmjs.com](https://npmjs.com), que alberga máis de 2,5 millóns de paquetes para JavaScript e NodeJS. Non obstante, tamén hai outros rexistros que se poden usar para diferentes fins, como paquetes privados ou de ámbito.
- **CLI**: esta é a interface de liña de comandos que proporciona o xestor de paquetes para interactuar con el. A CLI máis común é npm-cli, que se inclúe con Node.js. Non obstante, tamén hai outros CLI que podes usar para diferentes fins, como yarn-cli, que é unha ferramenta autónoma que se pode instalar por separado, ou pnpm-cli, que é un envoltorio arredor de npm-cli que engade algunhas funcións adicionais.
- **Ecosistema**: este é o conxunto de ferramentas e plataformas coas que se integra ou admite o xestor de paquetes, como bundlers, transpilers, linters, test runners, frameworks ou servizos na nube. O ecosistema máis común é o ecosistema NodeJS, que inclúe ferramentas como webpack, babel, eslint, mocha, express ou AWS. Non obstante, tamén hai outros ecosistemas que podes usar para diferentes fins, como o ecosistema do navegador, que inclúe ferramentas como browserify, rollup, typescript, prettier, jest, react ou firebase.

| Package Manager | Rexistro    | CLI      | Ecosistema |
| --------------- | ----------- | -------- | ---------- |
| NPM             | npmjs.com   | npm-cli  | Node.js    |
| YARN            | yarnpkg.com | yarn-cli | Node.js    |
| PNPM            | pnpm.io     | pnpm-cli | Node.js    |

<center><small>Táboa de resumo da compatibilidade dos xestores de paquetes NPM, YARN e PNPM</small></center>
Os tres xestores de paquetes son compatibles co mesmo rexistro e ecosistema. Non obstante, teñen diferentes CLI que ofrecen diferentes comandos e opcións. Por exemplo, YARN ten un comando chamado "yarn workspaces" que che permite xestionar os teus espazos de traballo con máis facilidade. PNPM ten un comando chamado "pnpm recursive" que che permite executar comandos en varios subproxectos á vez.

### Seguridade

Un aspecto máis dun xestor de paquetes que compararei é o seguro que resulta. A seguridade é importante porque as túas dependencias poden conter código malicioso ou vulnerabilidades que poidan comprometer o teu proxecto ou os teus usuarios. Algunhas das medidas que pode tomar un xestor de paquetes para mellorar a seguridade son:

- **Verificación**: este é o proceso de comprobación da integridade e autenticidade dos paquetes que instala ou actualiza. Isto pode evitar ataques de manipulación ou falsificación que poidan alterar ou substituír os paquetes por outros maliciosos.
- **Illamento**: este é o proceso de limitar o acceso e os permisos dos paquetes que instala ou actualiza. Isto pode evitar a escalada de privilexios ou ataques de inxección de código que poderían executar código malicioso no seu sistema ou nos sistemas dos seus usuarios.
- **Resolución**: este é o proceso de selección das mellores versións dos paquetes que instala ou actualiza. Isto pode evitar problemas de dependencia ou conflitos que poidan provocar que o teu proxecto se rompa ou se comporte de forma inesperada

| Package Manager | Verificación | Illamento | Resolución |
| --------------- | ------------ | --------- | ---------- |
| NPM             | SHA-512      | Non       | Semver     |
| YARN            | SHA-1        | Non       | Semver     |
| PNPM            | SHA-512      | Si        | Strict     |

<center><small>Táboa de resumo para a seguridade dos xestores de paquetes NPM, YARN e PNPM</small></center>

Os tres xestores de paquetes usan algún tipo de verificación para garantir a integridade e autenticidade dos paquetes. NPM e YARN usan o mesmo algoritmo (SHA-1). PNPM usa un algoritmo máis forte (SHA-512), o que o fai máis resistente ás colisións e aos ataques de forza bruta.

Non obstante, só PNPM usa o illamento para limitar o acceso e os permisos dos paquetes. Faino creando un cartafol `node_modules` separado para cada paquete e usando ligazóns simbólicas para vinculalos. Isto impide que os paquetes accedan ou modifiquen os arquivos ou módulos doutros paquetes sen permiso explícito. NPM e YARN non usan ningún mecanismo de illamento, polo que permiten que os paquetes accedan ou modifiquen calquera arquivo ou módulo dentro do cartafol `node_modules`.

Ademais, só PNPM utiliza unha resolución estrita para seleccionar as mellores versións dos paquetes. Faino seguindo as versións exactas especificadas nos arquivos `package.json` e creando unha árbore de dependencia plana. Isto evita que se instalen ou actualicen versións duplicadas ou incompatibles dos paquetes. NPM e YARN usan a resolución `semver`, que permite certa flexibilidade na elección das versións en función de intervalos ou modificadores. Isto pode provocar que se instalen ou se actualicen versións duplicadas ou incompatibles dos paquetes.

## Mellores prácticas

- Escolle o xestor de paquetes que mellor se adapte aos requisitos, preferencias e limitacións do teu proxecto. Non hai unha solución única e cada xestor de paquetes ten os seus pros e contras. Tamén pode cambiar entre eles se o precisas, sempre que elimines o cartafol `node_modules` existente e o arquivo de bloqueo antes de instalar as dependencias cun xestor de paquetes diferente
- Usa un arquivo de bloqueo para garantir instalacións reproducibles en diferentes máquinas e ambientes. Un arquivo de bloqueo é un arquivo que rexistra as versións e fontes exactas dos paquetes dos que depende o teu proxecto, para que poidas instalalos de forma consistente cada vez. NPM usa un arquivo `package-lock.json`, YARN utiliza un arquivo `yarn.lock` e PNPM utiliza un arquivo `pnpm-lock.yaml`. Debes enviar estes arquivos ao teu sistema de control de versións e actualizalos sempre que engadas, elimines ou actualices un paquete.
- Usa un arquivo `.npmrc` para configurar o comportamento do xestor de paquetes. Un arquivo `.npmrc` é un arquivo que contén pares clave-valor de opcións de configuración para o xestor de paquetes, como o URL do rexistro, a configuración do proxy, a localización da caché, etc. Podes crear este arquivo no directorio raíz do proxecto ou no directorio de inicio; dependendo de se queres aplicar a configuración de forma global ou local. Tamén podes usar variables de ambiente ou marcas de liña de comandos para anular as opcións de configuración.
- Use scripts para automatizar tarefas e fluxos de traballo comúns co seu xestor de paquetes. Os scripts son comandos que podes definir no teu arquivo package.json baixo a propiedade “scripts”, como “iniciar”, “probar”, “construír”, etc. Podes executar estes scripts coa CLI do xestor de paquetes, como por exemplo npm run start, yarn start ou pnpm start. Tamén pode usar os ganchos previos e posteriores para executar scripts antes ou despois doutro script, como pretest ou postbuild
- Use espazos de traballo para xestionar varios proxectos ou paquetes dentro dun só repositorio. Os espazos de traballo son cartafoles que conteñen os seus propios arquivos package.json e dependencias, pero comparten un cartafol común node_modules e un arquivo de bloqueo no nivel raíz. Deste xeito, pode evitar a duplicación e simplificar a xestión de dependencias nos seus proxectos ou paquetes. NPM admite espazos de traballo desde a versión 7, YARN admite espazos de traballo desde a versión 1 e PNPM admite espazos de traballo desde a versión 2

## Conclusión

Cada xestor de paquetes ten as súas propias vantaxes e desvantaxes.

NPM é moi utilizado e fácil de usar, pero máis lento que Yarn e PNPM.

Yarn é máis rápido que NPM e ten algunhas funcións novas interesantes, pero usa o mesmo directorio node_modules aplanado que NPM.

PNPM é o xestor de paquetes máis rápido e eficiente no disco, pero pode ter problemas de compatibilidade con algúns paquetes.

Escolla o xestor de paquetes que mellor se adapte ás necesidades do seu proxecto.

---
ref.: [Rollup vs Webpack vs Parcel](https://kinsta.com/es/blog/rollup-vs-webpack-vs-parcel/)

NOV 2023
