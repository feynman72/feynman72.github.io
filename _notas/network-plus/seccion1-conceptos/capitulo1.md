---
title: "Capítulo 1 - Modelo OSI vs Modelo TCP-IP"
categoria: network-plus
subgrupo: "Sección I - Conceptos de redes"
orden: 1
estado: en-curso
actualizado: 2026-11-06
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
- SMTP, POP3: Para recibir y enviar correos.
- FTP: Usado en transmitir archivos en la red.
- Telnet: Par el control remoto de dispositivos.

### Capa 6 - Presentación:
Se encarga de hacer la información entendible para el sistema final. Osea, convierte y aplica formatos en cierta forma para que el sistema reconozca lo que está recibiendo/enviando y pueda saber que hacer con ella. En dónde se incluye la traducción o conversión de formas de compresión, encriptación o representación de carácteres (ASCII to Unicode).

Esta capa tiene que lidiar con formatos de compresión de audio/video y si los paquetes de la capa 7 no poseen algún formato, la capa 6 se encarga de traducirlo antes de pasarlo a la capa 5.

Básicamente especifíca el formato, estructura, código, compresión para asegurarse que la información enviada por alguien en la capa 7 pueda ser interpretada por un destino.

### Capa 5 - Sesión:
Las comunicaciones entre sistemas se basan en diferentes servicios de solicitudes/respuestas entre aplicaciones que están en diferentes dispositivos de red. 

Bueno, la capa 5 se encarga de establecer, manejar y terminar estas sesiones de comunicación para conectar las capas bajas con las capas 6 y 7. Negocia estas conexiones y se asegura de que cada dispositivo está dispuesto a 'charlar' con el otro además de identificar la conversación usando puertos.

### Capa 4 - Transporte:
Acepta información de la capa 5 y la divide en segmentos de transporte. Osea, es responsable de que la información llegue al destino con un margen-0 de error y en orden. Lo siguiente son las formas para asegurarse de lo anterior:
- Fiabilidad
- Revisión de error en transmisión
- Error de conexión
- Transmisión de datos
- Control de flujo
- Secuenciación
- Multiplexación de datos

Estas características son implementadas por un circuito virtual entre el emisor-receptor. La capa 4 inicia, mantiene y termina estos circuitos virtuales ademas de usar segmentos como protocolo de unidades de datos (PDUs). Los segmentos son definidos como conjuntos de datos que incluyen control de información y son enviados entre las capas 4 de los endpoints. En esta situación se usa un par de protocolos:
- Transmission Control Protocol (TCP): Fiable y control-orientado
- User Datagram Protocol: Poco fiable y de baja sobrecarga siendo un protocolo connection-less

**Nota:** El proceso de dividir los datos es transparente en las capas superiores dado que la capa 4 se encargará de reensamblar el contenido antes de moverlo a la capa 5.

### Capa 3 - Network:
Se encarga de asignar el camino de interconexión (routeo) de los segmentos enviados al receptor, dando así que sea responsable de estos esquemas de dirección lógico los hosts de red y a los endpoints de la comunicación.

La capa 4 envía datagramas (paquetes), los cuales son conjutos de datos definidos que incluye la dirección y el control de la información. Estos datagramas son routeados entre el origen y el destino. Si un datagrama necesita enviarse en una red que solo puede manipular una cierta cantidad de data, este puede ser fragmentado en múltiples paquetes y reensamblado en el receptor. 

Podemos decir que el datagrama es la unidad de datos y un paquete es lo que físicamente se envía en la network. SI no ocurre la fragmentación/división, un datagrama es un solo paquete.

- 
    - Routed protocols: Son los encargados de las reglas y de los procesos de encapsulamiento de los paquetes de datos.
    - Routing protocols: Encuentran rutas disponibles en la red que se encuentra además de construir y tomar decisiones de routeo.

### Capa 2 - Data Link:
Selecciona el formato de los datos que se mueven a través de los red física y encapsulan de acuerdo al tipo de media.

Un frame (unidad de datos de la capa 2) que representa la organización de datos en una forma específica para que ambas partes puedan entender esto mismo. Entonces en la capa 2 escoge el tipo de estructura basado en el link de uso. La capa 3 tiene dos subcapas/subsecciones:
- Logical Link Control (LLC): Interactúa con la capa 3 mientras esta capa usa múltiples protocolos en enlaces físicos permitiendo ser marcados en el apartado LLC.
- Media Access Control (MAC): Se comunica con la capa 1 y específica la dirección MAC para identificar un dispositivo. 

Cada frame enviado dentro de los cables contienen la dirección MAC y solo esos dispositivos con esa MAC pueden interactuar esas mismas. El origen de esta dirección está incluida en la estructura.

Podemos decir que la capa 2 ofrece una transmisión confiable de datos entre la red de enlace físico y permite diferentes especificaciones que proveen diferentes redes y características de protocolos. Esto incluye direccionamiento físico, diferentes topologías de redes, error de notificaciones, secuencias de frames y un flujo de control de frames.

La diferencia principal es que la capa 2 maneja la dirección física y la capa 3 es el manejo de dirección lógico. El direccionamiento físico es generalmente en la forma de MAC (grabado en una NIC [Network Interface Card] u otro tipo de interfaces). 


## *Ejemplo que me ayudó a entenderlo*

## *Referencias*
