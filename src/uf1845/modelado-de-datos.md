# Que é o modelado de datos?

## O modelado de datos é o proceso de diagramar fluxos de datos. Ao crear a estrutura dunha base de datos nova ou alternativa, o deseñador comeza cun diagrama do fluxo de datos que entra e sae da base de datos. Este diagrama úsase para definir os formatos e estruturas de datos e as funcións de xestión de bases de datos, co fin de apoiar de forma eficiente o fluxo de datos. Unha vez creada e implementada a base de datos, o modelo de datos é a documentación e a xustificación de por que existe a base de datos e como se deseñaron os fluxos

O modelo de datos que resulta deste proceso proporciona un marco de relacións entre os elementos de datos dentro dunha base de datos, así como unha orientación para o uso dos datos. Os modelos de datos son un elemento fundamental do desenvolvemento de software e análise. Ofrecen un método estandarizado para definir e formatar o contido da base de datos de forma consistente en todos os sistemas, permitindo que diferentes aplicacións compartan os mesmos datos.

## Por que é importante o modelado de datos?

Un modelo de datos completo e optimizado axuda a crear unha base de datos lóxica simplificada que **elimina a redundancia**, **reduce os requisitos de almacenamento** e **permite unha recuperación eficiente**. Tamén equipa todos os sistemas cunha "fonte única de verdade" - o que é esencial para as operacións eficaces e o cumprimento da normativa. O modelado de datos é un paso clave en dúas funcións vitais dunha empresa dixital:

### Os proxectos de desenvolvemento de software (novos ou personalizados) realizados por profesionais de TI

Antes de deseñar e construír calquera proxecto de software, debe haber unha visión documentada de como se verá e se comportará o produto final. Unha gran parte desa visión é o conxunto de regras para a funcionalidade desexada. A outra parte é a descrición dos datos: os fluxos de datos (ou modelos) e a base de datos que os soporta.

O modelado de datos fai un seguimento da visión e proporciona unha folla de ruta para os deseñadores de software. Coa base de datos e os fluxos de datos totalmente definidos e documentados, e os sistemas construídos de acordo con esas especificacións, os sistemas deberían proporcionar a funcionalidade esperada necesaria para manter os datos precisos (asumindo que se seguiron correctamente os procedementos).

### A analítica e a visualización –ou intelixencia empresarial–, como ferramenta para a toma de decisións dos usuarios

Co aumento do número de datos e usuarios, as organizacións necesitan unha forma de converter os datos brutos en información útil para a toma de decisións. Non é sorprendente que a demanda de análise de datos medrou drasticamente. A visualización de datos fai que os datos sexan aínda máis accesibles para os usuarios presentándoos graficamente.

Os modelos de datos actuais transforman os datos brutos en información útil que se pode converter en visualizacións dinámicas. O modelado de datos prepara os datos para a súa análise: limpeza, definición de medidas e dimensións, xerarquías, configuración de unidades e moedas e engadindo fórmulas.

## Cales son os tipos de modelado de datos?

Os tres modelos principais de datos son relacional, dimensional e entidade-relación (ER). Tamén hai outros que non están de uso xeneralizado, incluíndo xerárquicos, en rede, orientados a obxectos e multivalor. O tipo de modelo define a estrutura lóxica: a forma en que se almacenan, organizan e recuperan os datos.

1. **Relacional:** Aínda que o enfoque é "máis antigo", o modelo de base de datos máis común aínda en uso hoxe en día é o relacional, que almacena os datos en rexistros de formato fixo e organiza os datos en táboas con filas e columnas. O tipo máis básico de modelo de datos ten dous elementos: medidas e dimensións. Os indicadores son valores numéricos, como cantidades e ingresos, que se usan en cálculos matemáticos como suma ou media. As dimensións poden ser de texto ou numéricas. Non se usan nos cálculos e inclúen descricións ou localizacións. Os datos brutos defínense como unha medida ou unha dimensión. Outra terminoloxía utilizada no deseño de bases de datos relacionais inclúe "relacións" (a táboa con filas e columnas), "atributos" (columnas), "tuplas" (filas) e "dominio" (conxunto de valores permitidos nunha columna). Aínda que hai termos adicionais e requisitos estruturais que definen unha base de datos relacional, o factor importante son as relacións definidas dentro desa estrutura. Os elementos de datos comúns (ou claves) vinculan táboas e conxuntos de datos. As táboas tamén se poden relacionar de forma explícita, como as relacións entre pais e fillos, como un a un, un a varios ou varios a moitos.
2. **Dimensional:** menos ríxida e estruturada, o enfoque dimensional favorece unha estrutura de datos contextuais máis relacionada co uso ou contexto empresarial. Esta estrutura de base de datos está optimizada para consultas en liña e ferramentas [de almacenamento de datos .](https://www.sap.com/latinamerica/insights/what-is-a-data-warehouse.html). Os elementos de datos críticos, como unha cantidade de transacción, por exemplo, chámanse "feitos" e van acompañados dunha información de referencia chamada "dimensións", xa sexa o ID do produto, o prezo unitario ou a data da transacción. Unha táboa de feitos é unha táboa pai nun modelo dimensional. A recuperación pode ser rápida e eficiente, con datos para un tipo específico de actividade almacenados xuntos, pero a falta de ligazóns de relación pode complicar a recuperación analítica e o uso de datos. Dado que a estrutura de datos está ligada á función empresarial que produce e utiliza os datos, a combinación de datos producidos por diferentes sistemas (nun almacén de datos, por exemplo) pode ser problemática.
3. **Entity-Rich (ER):** un modelo ER representa unha estrutura de datos de negocio en forma gráfica que contén caixas de varias formas para representar actividades, funcións ou "entidades" e liñas para representar asociacións, dependencias ou "relacións". O modelo ER úsase para crear unha base de datos relacional con cada fila representando unha entidade e os campos desa fila conteñen atributos. Como en todas as bases de datos relacionais, os elementos de datos "clave" úsanse para vincular táboas.

## Cales son os tres niveis de abstracción de datos?

Hai moitos tipos de modelos de datos, con diferentes tipos de esquemas. A comunidade de procesamento de datos identifica tres tipos de modelización que representan o nivel de desenvolvemento.

### Modelo conceptual de datos

O modelo "gran imaxe" representa a estrutura e o contido xerais, pero non o detalle do plan de datos. É o típico punto de partida para o modelado de datos, que identifica os distintos conxuntos de datos e fluxos de datos en toda a organización. O modelo conceptual é o modelo para o desenvolvemento dos modelos lóxicos e físicos, e é unha parte importante da documentación da arquitectura de datos.

### modelo lóxico de datos

O segundo nivel de detalle é o modelo de datos lóxico. Está máis relacionado coa definición xeral de "modelo de datos" xa que describe o fluxo de datos e o contido da base de datos. O modelo lóxico engade detalles á estrutura xeral do modelo conceptual pero non inclúe especificacións para a propia base de datos, xa que se pode aplicar a diversas tecnoloxías e produtos. (Ten en conta que pode non existir un modelo conceptual se o proxecto se relaciona cunha única aplicación ou outro sistema limitado).

### modelo de datos físicos

O modelo de base de datos física describe os detalles de como se realizará o modelo lóxico. Debe conter detalles suficientes para que os tecnólogos poidan crear a estrutura real da base de datos en hardware e software para soportar as aplicacións que a utilizarán. Sobra dicir que o modelo de datos físicos é específico dun sistema de software de base de datos designado. Pode haber varios modelos físicos derivados dun único modelo lóxico se se usan sistemas de bases de datos diferentes.

## Procesos e técnicas de modelado de datos

O modelado de datos é inherentemente un proceso de arriba abaixo, comezando polo modelo conceptual para establecer o panorama xeral, pasando despois ao modelo lóxico e, finalmente, ao deseño detallado do modelo físico.

Construír o modelo conceptual é converter unha idea nunha forma gráfica que se asemella ao diagrama de fluxo dun programador.

As ferramentas modernas de modelado de datos poden axudar a definir e crear bases de datos e modelos de datos lóxicos e físicos. Aquí tes algunhas técnicas e pasos típicos de modelado de datos:

- **Determinar entidades e crear un diagrama entidade-relación (ERD).** As entidades pódense describir como "elementos de datos de interese para a súa empresa". Por exemplo, "cliente" sería unha entidade. "Vendas" sería outra. Un ERD documenta como se relacionan estas diferentes entidades na súa empresa e que conexións existen entre elas.
- **Define os teus feitos, indicadores e dimensións.** Un feito é a parte dos teus datos que indica unha ocorrencia ou transacción específica, como a venda dun produto. Os seus indicadores son cuantitativos, como cantidade, ingresos, custos, etc. As súas dimensións son indicadores cualitativos, como descricións, localizacións e datas.
- **Cree unha ligazón á vista de datos mediante unha ferramenta gráfica ou mediante consultas SQL.** Se non estás familiarizado co SQL, a ferramenta gráfica é a opción máis intuitiva, que che permite arrastrar e soltar elementos no teu modelo e crear as súas conexións visualmente. Ao crear unha vista, tes a opción de combinar táboas e mesmo outras vistas nunha única saída. Ao seleccionar un tipo de letra na vista gráfica e arrastrándoo sobre un tipo de letra xa asociado á saída, terá a opción de unirse ou crear unha unión destas táboas.

As solucións de análise modernas tamén poden axudar a escoller, filtrar e conectar fontes de datos mediante unha función gráfica de arrastrar e soltar. Existen ferramentas avanzadas dispoñibles para os expertos en datos de TI típicos, pero outros usuarios tamén poden crear as súas propias historias construíndo modelos de datos con ferramentas visuais e organizando táboas, gráficos, mapas e outros obxectos para contar historias baseándose nos coñecementos dos datos.

![img](https://www.sap.com/dam/application/shared/graphics/notification-ribbons/Ribbon-BG-LtGrey-master.jpg/_jcr_content/renditions/auto-generated_3840_0150.jpeg.adapt.3840_150.false.false.false.false.jpg/1606924398664.jpg)

Explore SAP Analytics Cloud

Crea un modelo para contar unha historia a partir da análise de datos.

Aprender máis

## Exemplos de modelización de datos

Para calquera aplicación, xa sexa empresarial, de entretemento, persoal ou doutro tipo, o modelado de datos é un paso inicial necesario no deseño do sistema e na definición da infraestrutura necesaria para habilitar o sistema. Isto inclúe calquera tipo de sistema transaccional, conxunto ou conxunto de aplicacións de procesamento de datos, ou calquera outro sistema que recompile, cree ou utilice datos.

O modelado de datos é imprescindible para un almacén de datos porque é un repositorio compilado a partir de varias fontes, que probablemente teñan formatos diferentes para datos similares ou relacionados. En primeiro lugar, ten que asignar formatos e estrutura ao almacén para adaptar cada conxunto de datos entrantes ás necesidades do deseño, de xeito que os datos sexan útiles para a análise e a minería de datos. O modelo permite ferramentas analíticas, sistemas de información executiva (paneleiros), datos. minería e integración con todos os sistemas e aplicacións de datos.

Nas primeiras fases do deseño de calquera sistema, o modelado de datos é fundamental, porque diso dependen os seguintes pasos que sentarán as bases de todos os programas, funcións e ferramentas. O modelo de datos é como unha linguaxe común que permite que os sistemas se comuniquen entendendo e aceptando os datos tal e como se describe no modelo. Isto é máis importante que nunca no mundo actual do [Big Data](https://www.sap.com/latinamerica/insights/what-is-big-data.html) , [a aprendizaxe automática](https://www.sap.com/latinamerica/insights/what-is-machine-learning.html) , [a intelixencia artificial](https://www.sap.com/latinamerica/products/artificial-intelligence/business-technology-platform.html) , [a conectividade á nube](https://www.sap.com/latinamerica/insights/what-is-cloud-computing.html) , [a IoT](https://www.sap.com/latinamerica/insights/what-is-iot-internet-of-things.html) e os sistemas distribuídos, incluíndo a informática de punta.

## Evolución do modelado de datos

Nun sentido moi real, o modelado de datos existe desde hai tempo que o procesamento, almacenamento e programación informáticos, pero o termo en si só se popularizou na década de 1960, cando comezaron a xurdir os sistemas de xestión de bases de datos. Non hai nada novo nin innovador no concepto de planificar e deseñar unha nova estrutura. O modelado de datos estructurouse e formalizouse a medida que xurdiron máis datos, máis bases de datos e máis variedades de datos.

Hoxe, o modelado de datos é máis esencial que nunca, xa que os profesionais da TI loitan con novas fontes de datos (sensores de IoT, dispositivos de xeolocalización, fluxos de clics, redes sociais) e moitos datos non estruturados (texto, audio, vídeo, sensores) en cantidade e velocidade. que supera as capacidades dos sistemas tradicionais. Agora hai unha demanda constante de novos sistemas, estruturas e técnicas innovadoras de bases de datos e novos modelos de datos.

## Que segue no modelado de datos?

A conectividade de información e a gran cantidade de datos de tantas fontes diferentes (sensores, voz, vídeo, correo electrónico e moito máis) amplían o alcance dos proxectos de modelaxe dos profesionais das TI. Internet é, por suposto, un dos facilitadores desta evolución. A nube é unha parte importante da solución, xa que é a única infraestrutura informática o suficientemente grande, escalable e áxil como para afrontar os requisitos actuais e futuros nun mundo cada vez máis conectado.

As opcións de deseño da base de datos tamén están cambiando. Hai unha década, a estrutura dominante era unha base de datos relacional de filas que utilizaba a tecnoloxía tradicional de almacenamento en disco. Os datos do libro maior ou de xestión de inventario nun ERP típico almacenáronse en decenas de táboas diferentes que debían actualizarse e modelarse. [As modernas solucións ERP](https://www.sap.com/latinamerica/products/erp.html) de hoxe almacenan datos en directo na memoria mediante columnas para reducir drasticamente as táboas e aumentar a velocidade e a eficiencia.

As novas ferramentas de autoservizo dispoñibles hoxe para os profesionais da liña de negocio seguirán mellorando. E están chegando novas ferramentas para facer que o modelado e a visualización de datos sexan aínda máis fáciles e colaborativos.

## Resumo

Un modelo de datos completo e ben pensado é clave para o desenvolvemento dunha base de datos verdadeiramente funcional, útil, segura e precisa. Comeza polo modelo conceptual para introducir todos os compoñentes e funcións. A continuación, encaixa eses plans nun modelo de datos lóxico que describa os fluxos e defina que datos son necesarios e como serán adquiridos, xestionados, almacenados e distribuídos. O modelo de datos lóxico dirixe o modelo físico específico dunha base de datos e é o documento de deseño detallado que guía a creación da base de datos e do software de aplicación.

Un bo modelado de datos e o deseño de bases de datos son esenciais para desenvolver aplicacións e bases de datos funcionais, fiables e seguras que funcionen ben con almacéns de datos e ferramentas de análise, e que faciliten o intercambio de datos con socios comerciais e entre varias aplicacións. Os modelos de datos ben pensados axudan a garantir a integridade dos datos, facendo que os datos da túa empresa sexan aínda máis valiosos e fiables.
