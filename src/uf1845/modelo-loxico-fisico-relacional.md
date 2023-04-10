# Modelos lóxico, físico e relacional

Cales son as diferencias entre o modelo conceptual, o lóxico e o físico?

O modelado de datos (ou modelado de datos, para a súa tradución ao inglés) é o proceso polo cal se crean modelos de datos para ser almacenados nunha base de datos, xa sexa unha base de datos relacional ou unha base de datos NoSQL.
Este fenómeno permite xerar representacións conceptuais dos obxectos almacenados nun modelo de datos e facer asociacións entre eses obxectos mediante regras establecidas, ao mesmo tempo que presenta diferenzas substanciais entre os modelos de datos.

## Obxectivos do modelo de datos

Antes de afondar nas diferenzas entre modelos de datos, ou na diferenza entre un modelo de base de datos lóxico e físico, debes coñecer algúns dos obxectivos do modelado de datos, entre os que se atopan:

- Asegúrese de que todos os obxectos solicitados pola base de datos estean representados con precisión. É importante non omitir datos neste tipo de procesos, xa que a súa eliminación pode provocar informes incompletos e resultados incorrectos.
- O modelado de datos admite a creación de modelos e establece as diferenzas entre os modelos de datos.
- Tamén axuda a definir entidades, atributos, relacións, claves primarias e secundarias e todos os elementos que se inclúen nunha base de datos.
- Evita a falta de datos ou a redundancia de datos.

# Diferenzas entre modelos de datos nun DBMS(SGBD)

Agora, imos falar sobre a diferenza entre o modelo de base de datos lóxico e físico,
respondendo á pregunta: Cales son as diferenzas entre un modelo conceptual, lóxico e físico? Existen varios modelos de datos implicados no modelado de datos que se utilizan para representar os datos e como se almacenan na base de datos. Isto produce que hai unha diferenza entre o modelo lóxico e físico da base de datos, que son:
### Modelo conceptual
Este modelo de rede define o que conterá o sistema. Xeralmente está deseñado por partes interesadas empresariais e arquitectos de datos. Busca organizar e definir o alcance, os conceptos e as regras empresariais.

Denomínase xeralmente un modelo relacional e ten atributos, entidades e relacións.
Neste nivel, non hai datos tan detallados da base de datos, xa que case non se traballa na estrutura real da base de datos. Aquí pódese traballar con linguaxe de consulta ou SQL, xa que se trata dunha base de datos orientada ás relacións entre as distintas entidades.

### Modelo lóxico
Un modelo de datos lóxico é o que define como se debe implementar o sistema independentemente do DBMS. Tamén é normalmente creado por partes interesadas empresariais e arquitectos de datos.

Aquí engádese un pouco máis de información que no modelo conceptual e preténdese proporcionar unha base para conformar o modelo físico como tal. Non obstante, aínda hai unha estrutura de modelado lixeiramente xenérica.

Neste modelo aínda non se define ningunha chave primaria nin secundaria e desenvólvese independentemente do sistema de xestión de bases de datos. Ao mesmo tempo, os atributos de datos terán tipos de datos con extensións exactas, por exemplo, VARCHAR(20).

### Modelo físico
O modelo de datos físicos é un modelo orientado a obxectos que describe como se implementará o sistema mediante un sistema de xestión de bases de datos específico. Xeralmente é creado por administradores e desenvolvedores de bases de datos, a diferenza dos dous modelos anteriores, que non requiriu ningunha especialización moi avanzada para a súa realización. Esta é unha das principais diferenzas entre os modelos de datos.

O modelo de datos físicos describe unha implementación específica da base de datos. Ofrece un esquema abstracto da base de datos; Isto é causado pola cantidade de metadatos que ten,
que tamén axuda a visualizar a estrutura da base de datos dun xeito máis detallado.

Outra diferenza entre os modelos de datos é que o modelo físico define claves primarias e externas, visualizacións de datos claras e específicas, índices, perfís de acceso e autorizacións, entre outros.

O modelado de datos e as diferenzas entre modelos de datos son un tema moi discutido, pero con miles de subtemas, entre os que destacan como creamos uns modelos a partir doutros ou que ferramentas son máis adecuadas para que tipos de modelos,
en función das diferenzas entre os modelos de datos e do uso que se vaia dar a cada un deles.

Os modelos de datos son ferramentas sumamente útiles á hora de deseñar bases de datos, xa que nos axudan a organizar a información que temos sobre as distintas entidades da empresa e os proxectos.
Grazas a este modelo tamén se poden detectar erros.