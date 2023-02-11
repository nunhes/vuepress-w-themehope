---
marp: true
---

# Arquitectura da WWW

---

A arquitectura da [WWW](https://www.cloudflare.com/es-es/learning/network-layer/how-does-the-internet-work/) pódese ver desde dous puntos de vista:

- Arquitectura Física
- Arquitectura Lóxica.

---

 Dentro da arquitectura física podemos mencionar os distintos tipos de redes:

- Ordenadores persoais (PC)([PAN](https://www.cloudflare.com/es-es/learning/network-layer/what-is-a-personal-area-network/))

- Redes de área local ([LAN](https://www.cloudflare.com/es-es/learning/network-layer/what-is-a-lan/))

- Redes de área global ([WAN](https://www.cloudflare.com/es-es/learning/network-layer/what-is-a-wan/)) &rarr; ([CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/))

---

 Os ordenadores persoais teñen as seguintes características

- Conexión a Internet esporádica.

- É necesaria a colaboración doutro ordenador que estea continuamente conectado a Internet (ISP Internet Service Provider).

- Debe establecerse un diálogo co ISP a través dalgunha canle de comunicación.

---

**Tipos de conexión a Internet**

 As [formas de conexión](https://tarify.win/guias/tipos-conexion-internet/) poden ser:

---

1. Liña telefónica estándar ou Rede Telefónica Conmutada (RTC)
   - É necesario o uso de hardware que actúe como interface entre o ordenador e a liña telefónica (módem) e un provedor de acceso.
   - Non necesita apenas infraestrutura adicional.
   - É  a rede de máis baixa velocidade e calidade de sinal.

---

2. RDSI (Rede Dixital de Servizos Integrados).
   - Liña dixital moi estendida ate fai algún tempo. Agora en práctico desuso.
   - Aínda precisa un hardware específico (módem RDSI) que actúe como interface entre a liña e o ordenador.
   - Posibilidade de conexión simultánea a Internet e á liña telefónica.
   - Posibilidade de videoconferencia punto a punto.

---

3. ADSL (Asymmetric Digital Subscriber Line - Liña de abonado dixital asimétrica).
   - Liña de comunicación de alta velocidade e **módem ADSL**.
   - Utiliza o par de cables de cobre da liña telefónica estándar como soporte.
   - Velocidade de comunicación asimétrica

---

4. Cable.
   - Neste tipo de conexión se procede a instalar a televisión por cable que ofrece a posibilidade de acceder a Internet **por medio dunha liña de cable coaxial**(electrico) que se subitue paulatinamente pola fibra optica que permite o enviao d edatos **a partir de impulsos luminosos e non eléctricos**.
   - Adoita prestarse en conxunto con outros servizos (televisión, teléfono, etc.).

---

5. Satélite.
   - Como o ADSL, é unha canle de comunicación asimétrica.
   - Os datos de saída xeralmente viaxan por teléfono.
   - A recepción realízase a través dunha ou varias canles de vídeo emitidas por un satélite.

---

**Redes de área local (LAN)**

- Utilízase para enlazar ordenadores situados xeralmente nun mesmo edificio ou grupo de edificios.

- Na rede poden coexistir sistemas actuando como servidores e como clientes.

- Os ordenadores únense formando topoloxías (lineais, en anel, en estrela,...).

- Se precisa hardware dedicado para actuar como interface entre o ordenador e a rede (tarxeta de rede).

---

**A unión de varias WAN en todo o mundo é o que se coñece como Internet**.

---

### Arquitectura lóxica de Internet.

---

Normalmente en Internet utilízase a arquitectura cliente-servidor. Este tipo de organización baséase en que: entre todos os equipos que están na rede, uns ofrecen servizos (os denominados servidores) e outros utilizan eses servizos (os denominados clientes). Cando o cliente visita unha páxina, accede a un servizo ofrecido polo servidor de páxinas web. 

---

Os sistemas cliente-servidor están construídos de tal xeito que as aplicacións poden residir nun servidor e compartirse con todos os usuarios.

---

A arquitectura de Internet a nivel lóxico está estruturada polo que se coñece como capas de servizo.

---

#### Modelo OSI de 7 capas:

---

**Capa física**: a capa física do modelo de referencia OSI é a responsable das conexións físicas do ordenador á rede, tanto no que se refire ao medio físico (medios guiados: [cable coaxial](http://es.wikipedia.org/wiki/Cable_coaxial) l, [cable de par trenzado, ](http://es.wikipedia.org/wiki/Par_trenzado)[fibra óptica](http://es.wikipedia.org/wiki/Fibra_óptica) e outros ). tipos de [cables](http://es.wikipedia.org/wiki/Cableado_estructurado) ; medios non guiados: [radio](http://es.wikipedia.org/wiki/Red_por_radio) , [infravermellos](http://es.wikipedia.org/wiki/Red_por_infrarrojos) , [microondas](http://es.wikipedia.org/wiki/Red_por_microondas) , [láser e](http://es.wikipedia.org/w/index.php?title=Red_por_láser&action=edit) outras [redes sen fíos](http://es.wikipedia.org/wiki/Red_inalámbrica) );

---

**Capa de datos**: a capa de enlace de datos ocupa o enderezo físico, a topoloxía da rede, o acceso á rede, a notificación de erros, a orde de tramas e o control de fluxo.

---

**Capa de rede**: a tarefa da capa de rede é facer que os datos cheguen dende a fonte ata o destino, aínda que ambos non estean conectados directamente. Os dispositivos que facilitan esta tarefa chámanse routers, aínda que é máis habitual atopar o nome inglés routers.

---

**Capa de transporte**: a súa función básica é aceptar os datos enviados polas capas superiores, dividilos en pequenas partes se é necesario, e pasalos á capa de rede, tamén se asegura de que chegue correctamente ao outro lado da comunicación.

---

**Capa de sesión**: esta capa encárgase de manter o vínculo entre os dous equipos que están a transmitir arquivos, ofrece varios servizos que son fundamentais para a comunicación, como son:

- Control da sesión a establecer entre o emisor e o receptor (quen transmite, que escoita e vixila).
- Control de concorrencia (que dúas comunicacións á mesma operación crítica non se realicen ao mesmo tempo).
- Manter puntos de verificación, que sirvan para que, en caso de interrupción da transmisión por calquera causa, se poida retomar dende o último punto de verificación en lugar de repetilo dende o principio.

---

**Capa de presentación**: a finalidade da capa de presentación é coidar a representación da información, de xeito que aínda que diferentes ordenadores poidan ter diferentes representacións internas de caracteres ( [ASCII, ](http://es.wikipedia.org/wiki/ASCII)[Unicode](http://es.wikipedia.org/wiki/Unicode) , [EBCDIC)](http://es.wikipedia.org/wiki/EBCDIC) , números ( tipo Intel [little-endian , ](http://es.wikipedia.org/wiki/Little-endian)[big -endian tipo](http://es.wikipedia.org/wiki/Big-endian) Motorola), son ou imaxes, os datos chegan dun xeito recoñecible.

---

**Capa de aplicación**: ofrece ás aplicacións (usuario ou non) a posibilidade de acceder aos servizos das outras capas e define os protocolos que utilizan as aplicacións para intercambiar datos, como [correo electrónico ](http://es.wikipedia.org/wiki/Correo_electrónico)[(POP e ](http://es.wikipedia.org/wiki/POP)[SMTP),](http://es.wikipedia.org/wiki/SMTP) xestores de mensaxes, etc. bases de datos e [servidor de ficheiros ( ](http://es.wikipedia.org/w/index.php?title=Servidor_de_ficheros&action=edit)[FTP](http://es.wikipedia.org/wiki/FTP) ).

---



...

https://www.cloudflare.com/learning/

---

XAN 2023