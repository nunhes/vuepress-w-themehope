# Ciclo de Vida do Software
O **proceso de desenvolvemento de software**, tamén coñecido como ***ciclo de vida do software***, consiste nunha serie de etapas obrigatorias que buscan garantir que os programas creados sexan eficientes, fiables, seguros e satisfagan as necesidades do público final. O ciclo de vida de desenvolvemento de software (SDLC) inclúe fases necesarias para validar o desenvolvemento do software, asegurando que cumpra cos requisitos da aplicación e verificando os procedementos de desenvolvemento. Esta organización do traballo busca evitar erros detectados tarde e os custos asociados á corrección durante as fases avanzadas do proceso de desenvolvemento.

Existen diferentes ciclos de desenvolvemento de software, pero a norma **[ISO/IEC/IEEE 12207:2017](https://www.iso.org/obp/ui/%23iso:std:iso-iec-ieee:12207:ed-1:v1:en)** establece un marco común para os procesos do ciclo de vida do software, con terminoloxía ben definida ao que a industria do software pode referirse. Esta norma contén procesos, actividades e tarefas aplicables durante a adquisición,  subministración, desenvolvemento, operación, mantemento ou eliminación  de sistemas, produtos e servizos informáticos. 

## Fases de Desenvolvemento do Software
Cada metodoloxía para o desenvolvemento de software é unha forma sistemática de desenvolver, xestionar e administrar un proxecto para levalo a cabo con grandes posibilidades de éxito. Esta sistematización indica como se divide un proxecto en módulos máis pequenos e permite estandarizar como se xestiona dito proceso.

Daquela, unha metodoloxía de desenvolvemento de software son os procesos a seguir de forma sistemática para **idear**, **desenvolver**, **implementar** e **manter** un produto software desde que xorde a necesidade do produto ata que se cumpre o obxectivo para o que foi creado.

As fases do desenvolvemento de software inclúen:

**1. Planificación**
Esta é unha fase ineludible en cada proxecto de software que debese resolver antes de iniciar un proxecto de desenvolvemento de sistemas de información. Consta de tarefas como determinar o alcance, realizar un estudo de viabilidade, analizar riscos, estimar custos, planificar tempos de realización e asignar recursos ás diferentes fases do proxecto. A estas tarefas iniciais se as coñece como ao *front-end difuso* do proxecto. É o momento de aconsellar e guiar ao cliente cara unha solución realista.   

**2. Análise**
A fase de análise busca comprender que ten que facer exactamente o software, descubrir o que realmente é necesario e acadar unha comprensión axeitada dos requisitos do sistema e que características que debe posuír.

**3. Deseño**
Nesta fase, estudanse as opcións de implementación do software e a súa estrutura xeral. O deseño é unha etapa complexa, que debe ser realizada de forma iterativa para refinar solucións. (ver [patróns de deseño](patrons-de-deseno))

**4. Implementación**
Nesta fase é necesario elixir as ferramentas axeitadas, unha entorna de desenvolvemento válida e unha linguaxe de programación apropiada. E está selección vai depender tanto das decisións de deseño como da entorna na que vaia a executarse o software. A programación debe seguir unhas directrices claras para garantir calidade, cumprimento de prazos e custos asociados.

Durante esta fase debes intentar asegurarte de que o código non sexa indescifrable e seguir diferentes pautas como:

- Evitar bloques de control non estruturados.
- Identificar correctamente as variables e o seu alcance.
- Escoller algoritmos e estruturas de datos axeitados para resolver o problema.
- Manter a lóxica da aplicación o máis sinxela posible.
- Documentar e comentar axeitadamente o código e usar regras de formato de código acordadas polo equipo de desenvolvemento.

Tamén hai que ter en conta a adquisición de recursos necesarios para que o  software funcione, e desenvolver casos de proba para verificar o correcto funcionamento a medida que se vai programando.

**5. Teste ou proba**
A fase de proba busca detectar erros cometidos nas etapas anteriores, preferentemente antes de que o usuario final os atope. O éxito da proba mídese pola detección de erros.

**6. Instalación ou Implementación**
Esta fase busca poñer o software en funcionamento, planificando a entorna axeitada considerando as dependencias das compoñentes implicadas.

**7. Uso e Mantemento**
Esta fase crucial do ciclo de vida implica eliminar defectos (mantemento correctivo), adaptar o software ás novas necesidades (mantemento adaptativo) e engadir novas funcionalidades (mantemento perfectivo), mantendo a súa calidade (mantemento preventivo). [1](https://hackernoon.com/es/que-debe-saber-sobre-los-tipos-de-mantenimiento-de-software-como-ingeniero-421335fl)
*Máis alo de que poida parecer contraditorio, canto mellor sexa un software, máis tempo tes que investir no seu mantemento. Xa que se usará máis e posiblemente haberá máis espectativas e propostas de mellora.*

## Modelos de Ciclo de Vida do Software
Co obxectivo de establecer unha metodoloxía común entre cliente e empresa de software, os modelos de ciclo de vida van actualizándose para abranguer novos modelos ( [POO](https://intelequia.com/blog/post/3072/qué-es-la-programación-orientada-a-objetos) ) e as distintas fases de desenvolvemento e documentación necesarias.

Algúns destes modelos son:

#### 1. Modelo en Cascada
Neste modelo as distintas fases vanse resolvendo ao completo de xeito secuencial e só se pasa a unha nova fase cando a anterior está rematada.

**Características principais:**
- Proceso lineal e secuencial.
- Cada fase debe completarse antes de pasar á seguinte.
- É difícil retroceder a fases anteriores.

**Vantaxes:**
- Estrutura clara e fácil de entender.
- Bo para proxectos cunha comprensión clara dos requisitos.

**Desvantaxes:**
- Pouco flexible ante cambios nos requisitos.
- Risco de entregar un produto non axustado ás necesidades reais.

#### 2. Modelo de Repetición
Este modelo guía o desenvolvemento en iteracións cíclicas, repetindo de novo cada etapa tras cada ciclo no proceso do ciclo de vida do software.

#### 3. Modelo en Espiral
Combina os modelos anteriores, tendo tamén en conta a xestión de riscos. Este modelo comeza por establecer os obxectivos e as limitacións ao comezo de cada repetición. E cada iteración inclúe definición de obxectivos, creación de prototipos, construción e preparación para a seguinte iteración.

**Características Principais:**
- Enfoque iterativo que incorpora elementos de varios modelos.
- Cada volta da espiral representa unha iteración do proceso.
- Avaliación constante de riscos e adaptación en consecuencia.

**Vantaxes:**
- Mellora a xestión de riscos e incerteza.
- Permite cambios durante o desenvolvemento.

**Desvantaxes:**
- Pode requerir máis recursos e tempo.
- Complexo de seguir para pequenos proxectos.

#### 4. Modelo en Forma de V
Este modelo ofrece máis opcións para avaliar o software en cada etapa. En cada fase, se planifican casos de uso e probas que permitan verificar e validar o produto en función dos seus requisitos. Deste xeito a verificación e a validación resolvense de xeito simultaneo.

**Características Principais:**
- Relaciona cada fase do desenvolvemento coa súa correspondente proba ou validación.
- A corrección de erros retrocede cara á fase de desenvolvemento.

**Vantaxes:**
- As probas están integradas directamente no proceso de desenvolvemento.
- Mellor xestión de cambios e corrección de erros.

**Desvantaxes:**
- Pode ser ríxido e difícil de adaptar en certos contextos.

#### 5. Modelo Big Bang
Este é probablemente o modelo máis sinxelo e require unha planificación menor e máis plástica. Se basea nunha profusa disposición de fondos co fin de enfocarse basicamante na programación co obxectivo de obter o mellor produto posible.

#### 6. Desenvolvemento Rápido de Aplicacións (RAD)

**Características Principais:**
-  Centrado na rápida iteración e desenvolvemento prototipo.

- Os usuarios participan activamente no proceso de desenvolvemento.

- O produto final constrúese en pequenos incrementos.

**Vantaxes:**

- Resposta rápida ás necesidades dos usuarios.

- Identificación temprá de problemas e cambios.

**Desvantaxes:**

- Non adecuado para todos os tipos de proxectos.

- Pode levar a códigos menos estruturados.

En definitiva, cada paradigma de ciclo de vida ten as súas vantaxes e desvantaxes, e a elección dependerá das necesidades específicas do proxecto. 

## Solucións para os ciclos de vida de desenvolvemento de software
As modernas prácticas de integración e desenvolvemento continuos (CI/CD), apoiadas por ambientes [DevOps](https://www.querysurge.com/solutions/devops-for-data?utm_source=bing&utm_medium=ad&utm_campaign=DevOp-for-Data-article), incorporan automatización continua e control permanente do ciclo de vida do software.

## Modelos Áxiles de Ciclo de Vida do Software
### Que é Agile?

A metodoloxía Agile é un conxunto de principios e valores para o desenvolvemento de software, centrada na adaptabilidade, colaboración e entrega incremental. Os modelos áxiles buscan axilidade e flexibilidade no proceso de desenvolvemento.

### Principais Modelos Áxiles:

1. **Scrum:**
   - **Roles Principais:**
     - Product Owner: Define os obxectivos do proxecto.
     - Scrum Master: Facilita o equipo e elimina obstáculos.
     - Equipo de Desenvolvemento: Realiza as tarefas técnicas.
   - **Artefactos Principais:**
     - Product Backlog: Lista de funcionalidades pendentes.
     - Sprint Backlog: Tarefas asignadas para un sprint.
     - Incremento: Versión do software despois de cada sprint.
   - **Eventos Principais:**
     - Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective.
2. **Kanban:**
   - **Taboleiro Kanban:**
     - Visualiza as tarefas nun taboleiro coas columnas "Por Facer", "En Proceso" e "Feito".
     - Sen sprints fixos. As tarefas avanzan conforme están listas.
   - **Limitación de Traballo en Progreso (WIP):**
     - Evita a sobrecarga de traballo ao limitar o número de tarefas en proceso.
3. **eXtreme Programming (XP):**
   - **Principios XP:**
     - Comunicación, Simplicidade, Feedback, Coraxe.
   - **Prácticas XP:**
     - Desenvolvemento Guiado por Tests (TDD), Pair Programming, Integración Continua.

### Beneficios dos Modelos Áxiles:

- **Adaptabilidade:** Pode adaptarse a cambios nos requisitos do cliente durante o proxecto.
- **Feedback Continuo:** Os clientes e o equipo reciben feedback constante.
- **Entregas Incrementais:** Proporciona versións parciais e funcionais do software tras cada iteración.
- **Colaboración:** Fomenta a colaboración estreita entre os membros do equipo.

### Retos dos Modelos Áxiles:

- **Requírense Equipos Motivados:** A súa eficacia depende da autodisciplina e motivación do equipo.
- **Xestión de Proxectos Complexos:** Non son axeitados para todos os tipos de proxectos, especialmente aqueles con requisitos moi estáticos.
- **Enfase na Comunicación:** Unha comunicación deficiente pode levar a problemas.

Lembranza: A elección do modelo áxil debe basearse nas necesidades específicas do proxecto e na cultura da organización. Cada modelo ten as súas propias características e non todos son axeitados para todos os escenarios.


---


A Programación Orientada a Obxectos (POO) é un paradigma de programación que utiliza obxectos, que son instancias de clases, para organizar e estruturar o código. Este enfoque basease no concepto de abstracción, encapsulamento, herdanza e polimorfismo. A POO é amplamente utilizada en linguaxes de programación como Java, Python, C++, e outros. A continuación, falaremos da POO e tamén das súas alternativas:

## Programación Orientada a Obxectos (POO)
Na programación orientada a obxectos (POO), existen catro conceptos clave que definen a súa estrutura e organización. Estes son:

1. **Abstracción:**
   - **Definición:** A abstracción implica a identificación das características esenciais dun obxecto e a eliminación dos detalles non esenciais.
   - **Exemplo:** Imaxina unha clase "Vehículo" que ten propiedades comúns como cor, marca e modelo. A abstracción podería centrarse nestas propiedades comúns sen ter en conta os detalles específicos de cada vehículo concreto.
2. **Herdanza:**
   - **Definición:** A herdanza permite que unha clase herde as propiedades e métodos doutra clase. A clase que é herdada chámase "clase pai" ou "clase base", e a clase que herda chámase "clase fillo" ou "clase derivada".
   - **Exemplo:** Se tes unha clase "Animal" e outra clase "Mamífero", a clase "Mamífero" pode herdar propiedades como "Número de patas" da clase "Animal".
3. **Polimorfismo:**
   - **Definición:** O polimorfismo permite que obxectos de diferentes clases respondan á mesma mensaxe ou método. Pode expresarse como "moitas formas".
   - **Exemplo:** Se tes unha interface "Sonido" xestionada por clases como "Cadro" e "Canción", o método "facerSonido()" pode comportarse de maneira diferente en cada clase.
4. ***Encapsulamento:***
   - **Definición:** O encapsulamento implica a restrición do acceso aos compoñentes internos dun obxecto e a prevención da manipulación directa dalgúns datos internos.
   - **Exemplo:** Poderías ter propiedades privadas dunha clase que só poidan ser accedidas mediante métodos públicos. Isto protexe os datos internos da clase e asegura unha manipulación controlada.

### Beneficios da POO:
- **Reutilización de Código:** O código pode ser reutilizado a través da herdanza e a creación de novas clases baseadas en clases existentes.

- **Mellora da Organización do Código:** As clases axudan a organizar o código de forma máis clara e modular.

- **Facilita o Mantemento:** Os cambios poden ser feitos de forma localizada en clases específicas sen afectar ao resto do código.

### Alternativas á POO:
#### 1. Programación Procedural:
Neste enfoque, o programa estrutúrase en funcións ou procedementos que se chaman secuencialmente. Non se basea en obxectos.
#### 2. Programación Funcional:
Focalízase no uso de funcións matemáticas para realizar cálculos. Evita o cambio de estado e a mutabilidade de datos.
#### 3. Programación Lóxica:
Baseada na lóxica matemática. As accións son expresadas como relacións lóxicas, eliminando a necesidade de instrucións explícitas.
#### 4. Programación Baseada en Actores:
Os obxectos (actores) teñen súa propia existencia e estado, e se comunican entre si enviando mensaxes.
#### 5. Programación Dirixida por Eventos:
O programa responde a eventos e as súas accións asociadas. Non segue unha secuencia fixa.

Cada paradigma de programación ten os seus propios beneficios e casos de uso axeitados. A elección entre POO e as súas alternativas dependerá do contexto do proxecto e dos requisitos específicos do mesmo.