---
title: "Capítulo 1 - Modelo OSI vs Modelo TCP-IP"
categoria: network-plus
subgrupo: "Sección I - Conceptos de redes"
orden: 1
estado: en-curso
actualizado: 2026-11-13
tags: [redes, fundamentos, network-plus]
---

## *Modelo OSI*
Fue definido en la ISO/IEC 7498 en 1984. Es un modelo por capas que describe como interactúa una aplicación de un dispositivo de red hacia un afuente de destino por medio de un medio físico. Parte de dos conceptos importantes:
 - El modelo de referencia, el cuál tiene 7 capas.
 - Los protocolos de estas capas que se mapean entre sí.

| **Capas OSI** | **Función** |
| *Capa 7* | `Aplicación` |
| *Capa 6* | `Presentación` |
| *Capa 5* | `Sesión` |
| *Capa 4* | `Transporte` |
| *Capa 3* | `Network` |
| *Capa 2* | `Data Link` |
| *Capa 1* | `Física` |

El modelo OSI es importante de entender por su arquitecutra modular, básicamente comprender la interacción entre las varias capas que contiene. La meta principal de esta forma de categorizar es mejorar la funcionalidad y operabilidad entre diferentes aplicaciones-vendedores. Ejemplo: Ciertas aplicaciones o funciones de capas más altas pueden desarrollarse sin la necesidad de preocuparse de las capas bajas dado que existe cierto nivel de confianza dentro de los paquetes analizados por estos mismos.

### Protocolos: 
Son reglas que los dispositivos de red usan. en dónde deben estar de acuerdo en determinadas reglas para comunicarse entre sí con el mismo protocolo. Las diferentes capas usan diferenstes protocolos o formas de interactuar. Ejemplo: En capas bajas se usa comunicación LAN-WAN o en la Capa 3 se usan protocolos de enrutamiento.

Pueden ser organizados en grupos dónde el TCP/IP es el más común dentro de redes. Su característica fundamental tanto para Internet como para las organizaciones.

### Capa 7 - Aplicación:
Es la más cercana al usaurio final en dónde utiliza los servicios de network disponibles para transmitir informacion como imágenes o documentos. El usuario interactúa con una aplicación en esta capa que maneja el software de comunicación-entre-red.

Dependiendo de la información que el usuario va a disponer en la red es el protocolo necesario, como pueden ser:
- *SMTP, POP3:* Para recibir y enviar correos.
- *FTP:* Usado en transmitir archivos en la red.
- *Telnet:* Para el control remoto de dispositivos.

### Capa 6 - Presentación:
Se encarga de hacer la información entendible para el sistema final. Osea, convierte y aplica formatos en cierta forma para que el sistema reconozca lo que está recibiendo/enviando y pueda saber que hacer con ella. En dónde se incluye la traducción o conversión de formas de compresión, encriptación o representación de carácteres (ASCII to Unicode).

Esta capa tiene que lidiar con formatos de compresión de audio/video y si los paquetes de la capa 7 no poseen algún formato, la capa 6 se encarga de traducirlo antes de pasarlo a la capa 5.

Básicamente especifíca el formato, estructura, código, compresión para asegurarse que la información enviada por alguien en la capa 7 pueda ser interpretada por un destino.

### Capa 5 - Sesión:
Las comunicaciones entre sistemas se basan en diferentes servicios de solicitudes/respuestas entre aplicaciones que están en diferentes dispositivos de red. 

Bueno, la capa 5 se encarga de establecer, manejar y terminar estas sesiones de comunicación para conectar las capas bajas con las capas 6 y 7. Negocia estas conexiones y se asegura de que cada dispositivo está dispuesto a 'charlar' con el otro además de identificar la conversación usando puertos.

### Capa 4 - Transporte:
Acepta información de la capa 5 y la divide en segmentos de transporte. Osea, es responsable de que la información llegue al destino con un margen-0 de error y en orden. Lo siguiente son las formas para asegurarse de lo anterior:
- *Fiabilidad*
- *Revisión de error en transmisión*
- *Error de conexión*
- *Transmisión de datos*
- *Control de flujo*
- *Secuenciación*
- *Multiplexación de datos*

Estas características son implementadas por un circuito virtual entre el emisor-receptor. La capa 4 inicia, mantiene y termina estos circuitos virtuales ademas de usar segmentos como protocolo de unidades de datos (PDUs). Los segmentos son definidos como conjuntos de datos que incluyen control de información y son enviados entre las capas 4 de los endpoints. En esta situación se usa un par de protocolos:
- *Transmission Control Protocol (TCP):* Fiable y control-orientado
- *User Datagram Protocol:* Poco fiable y de baja sobrecarga siendo un protocolo connection-less

**Nota:** El proceso de dividir los datos es transparente en las capas superiores dado que la capa 4 se encargará de reensamblar el contenido antes de moverlo a la capa 5.

### Capa 3 - Network:
Se encarga de asignar el camino de interconexión (routeo) de los segmentos enviados al receptor, dando así que sea responsable de estos esquemas de dirección lógico los hosts de red y a los endpoints de la comunicación.

La capa 4 envía datagramas (paquetes), los cuales son conjutos de datos definidos que incluye la dirección y el control de la información. Estos datagramas son routeados entre el origen y el destino. Si un datagrama necesita enviarse en una red que solo puede manipular una cierta cantidad de data, este puede ser fragmentado en múltiples paquetes y reensamblado en el receptor. 

Podemos decir que el datagrama es la unidad de datos y un paquete es lo que físicamente se envía en la network. SI no ocurre la fragmentación/división, un datagrama es un solo paquete.

- 
    - *Routed protocols:* Son los encargados de las reglas y de los procesos de encapsulamiento de los paquetes de datos.
    - *Routing protocols:* Encuentran rutas disponibles en la red que se encuentra además de construir y tomar decisiones de routeo.

### Capa 2 - Data Link:
Selecciona el formato de los datos que se mueven a través de los red física y encapsulan de acuerdo al tipo de media.

Un frame (unidad de datos de la capa 2) que representa la organización de datos en una forma específica para que ambas partes puedan entender esto mismo. Entonces en la capa 2 escoge el tipo de estructura basado en el link de uso. La capa 3 tiene dos subcapas/subsecciones:
- *Logical Link Control (LLC):* Interactúa con la capa 3 mientras esta capa usa múltiples protocolos en enlaces físicos permitiendo ser marcados en el apartado LLC.
- *Media Access Control (MAC):* Se comunica con la capa 1 y específica la dirección MAC para identificar un dispositivo. 

Cada frame enviado dentro de los cables contienen la dirección MAC y solo esos dispositivos con esa MAC pueden interactuar esas mismas. El origen de esta dirección está incluida en la estructura.

Podemos decir que la capa 2 ofrece una transmisión confiable de datos entre la red de enlace físico y permite diferentes especificaciones que proveen diferentes redes y características de protocolos. Esto incluye direccionamiento físico, diferentes topologías de redes, error de notificaciones, secuencias de frames y un flujo de control de frames.

La diferencia principal es que la capa 2 maneja la dirección física y la capa 3 es el manejo de dirección lógico. El direccionamiento físico es generalmente en la forma de MAC (grabado en una NIC [Network Interface Card] u otro tipo de interfaces). La MAC cuenta con 48 bits de información divididos en 6 grupos de 2 hexadecimales, esto termina siendo la dirección física única dentro de la red y aparece dentro del intercambio de paquetes. En caso contrario, los paquetes e enviarán dentro de los dispositivos del segmento.

### Capa 1 - Física
Es la más baja del modelo OSI y representa la parte física en la que interactúan los dispositivos de la red. Se comunica con la capa 2 a través de la subcapa de la MAC en dónde enía pulsos de 0s y 1s. Incluyen los siguientes tipos de protocolos dependiendo de la red:
- *LAN:* Ethernet, IEEE 802.3, 100BaseT, Token Ring/IEEE 802.5, and FDDI
    - Ethernet interactúa con las capas 1 y 2.
- *WAN:* EIA/TIA-232, EIA/TIA-449, V.35, and EIA-530

Define los procedimientos físicos de transporte, eléctricos y mecánicos, como modulación de voltaje o codificación. También activa, mantiene y desactiva enlaces físicos entre redes LAN/WAN.

### Encapsulación
Se conoce al proceso de pasar datos dentro del modelo (desde la cap 7 a la 1). Cuando la capa superior envía información hacia "abajo" añade cierta información antes de ser pasada, repitiendo esto en cada capa, dando un conjunto de datos más grande que el anterior hasta llegar a la capa inferior.

También existe el proceso inverso, llamado descapsulamiento d+onde la información proviene de la capa inferior y cada que los datos son pasados "hacia arriba" va perdiendo información que anteriormente añadía la capa por lo que al llegar a la capa de Aplicación es un conjunto menor al inicial.

Este encapsulamiento de la información, que añade datos como un header y/o trailer, permite que se mueva más fácilmente dentro de una network, incluyendo direccionamiento o revisión de errores.

- *PDU (Protocol Data Unit)*: Es la unidad mínima fundamental de cada capa para comunicarse entre ellas. De la capa 1 a la 4 tiene diferentes PDUs: 

| **Layer** | **Tipo de PDU** |
| *Capa Física* | `Bits` |
| *Capa de Datos* | `Frames` |
| *Capa de Transporte* | `Datagramas` |
| *Capa de Red* | `Segmentos` |

## *Protocolo TCP/IP*
El modelo OSI funciona bien como referencia pero para asegurarnos de una propia comunicaión entre dispositivos actualmente se usa la adaptación al protocolo TCP/IP.

La documentación indica que en la adaptación a TCP/IP las capas 6 y 5 (Presentación y Sesión) se fusionan con la capa 7 (Aplicación) y la capa 3 cambia de nombre a Internet.

También las capas 2 y 1 se comprimen en la capa de *Acceso de Red*

| **Modelo OSI** | **TCP/IP** |
| *Aplicación* | --- |
| *Presentación* | *Aplicación* |
| *Sesión* | --- |
| *Transporte* | *Transporte* |
| *Red* | *Internet* |
| *Datos* | *Datos* |
| *Capa Física* | *Capa Física* |

### TCP/IP Capa 5 - Aplicación
Cubre las funciones de las capas 7, 6 y 5 del modelo OSI por lo que abarca gran cantidad de protocolos como el HTTP, POP3, SMTP, FTP, DNS, DHCP, etc.

### TCP/IP Capa 4 - Transporte
Se basa en dos protocolos:
- *TCP (Transmission Control Protocol):* Se orienta en la conexión, por lo que las rutas de los datos es confiable y estable ya que se encuentra sincronizada entre los endpoints antes de enviar datos. Ejemplo: FTP (File Transfer Protocol)
- *UDP (User Datagram Protocol):* No se orienta en rutas confiables y tampoco se centra en la conexión. A diferencia del TCP, no revisa que los segmentos llegen a su destino ni que al hacerlo estén correctos por lo que la correción de errores ocurre en la capa de Aplicación. En cambio el UDP tiene una menor sobrecarga que el TCP ya que en general es pequeño en comparación. Ejemplo: TFTP (Trivial Transfer Protocol)


| Field | Tamaño en Bits | Descripción |
| Source Port Number | 16 | Identifica la aplicación del remitente |
| Destination Port Number | 16 | Identifica la aplicación del destinatario |
| Length | 16 | El tamamño del header y los datos |
| Checksum | 16 | La checksum del header y los datos, verificando la integridad del segmento|
| Data | Variable | Datos de aplicación |

| Field | Tamaño en Bits | Descripción |
| Source Port Number | 16 | Identifica la aplicación del remitente |
| Destination Port Number | 16 | Identifica la palicación del destinatario |
| Sequence Number | 32 | Verifica el orden correcto delos segmentos recibidos (remitente) |
| Acknowledgement Number | 32 | Verifica el orden correcto de los segmentos esperados en el receptor (destinatario) |
| Header Length | 4 | Tamaño del header |
| Reserved | 6 | Field sin usar |
| Code Bits | 6 | Indica el tipo del segmento |
| Windows Size | 16 | Enumera la cantidad de bits recibidos antes de enviar un Acknowledgement |
| Checksum | 16 | Se usa para verificar la integridad del segmento |
| Urgent | 16 | Indica el final de la recepción de datos urgentes |
| Option | 0 a 32 | Define el tamaño máximo del segmento en TCP |
| Data | Variable | Datos de aplicación |

- El header del TCP es mayor al del UDP por los fields extras para asegurarse de la confiabilidad de la conexión.

### TCP/IP Capa 3 - Internet
Incluye los siguientes protocolos:
- *Internet Protocol (IP):* No prioriza la conexión pero ofrece la mejor transmisión de paquetes. Se apoya en la capa de Transporte con el TCP para asegurar conexión confiable. La dirección de IP se asigna a cada dispositico o interfaz de red y usa dos formatos IPv4 y IPv6.
- *Internet Control Message Protocol (ICMP):* Envía mensajes y reportes de error en la network. La aplicación más común que se apoya en el ICMP es el ping, que envía un ICMP echo de solicitud hacia el destino y espera un ICMP echo de respuesta para probar que existe comunciación entre los endpoints o inlcuso si hay delays. 

### TCP/IP Capa 1-2 - Acceso de Red
Es la compresión de las capas 1-2 del modelo OSI (Enlace de datos y Capa Física).

Uno de los protocolos usados comunmente es el ARP (Address Resolution Protocol) que solicita la MAC a un dispositivo con IP asignada y en el momento que se obtiene es el host destino de los frames enviados en esa dirección.

## *Ejemplo que me ayudó a entenderlo*

## *Referencias*
