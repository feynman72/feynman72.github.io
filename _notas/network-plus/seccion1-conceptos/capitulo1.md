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

Estas características son implementadas por un circuito virtual entre el emisor-receptor. La capa 4 inicia, mantiene y termina estos circuitos virtuales ademas de usar segmentos como protocolo de unidades de datos (PDUs). Los segmentos son definidos como conjuntos de datos que incluyen control de información y son enviados entre las capas 4 de los endpoints. 

## *Ejemplo que me ayudó a entenderlo*

## *Referencias*
