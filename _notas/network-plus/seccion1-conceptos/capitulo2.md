---
title: "Capítulo 2 - Un dispositivo para cada capa del Modelo OSI"
categoria: network-plus
subgrupo: "Sección I - Conceptos de redes"
orden: 1
estado: en-curso
actualizado: 2026-11-17
tags: [redes, fundamentos, network-plus]
---

## *Dispositios de red y el Modelo OSI*
Un aspecto importante de la tecnología de redes es conocer los diferentes dispositivos que existen ya que podemos adecuarnos mejor al momento de crear LANs o WANs. Los más comunes son el Router, Switch y el Hub.
- Conceptos a conciderar dentro de los dispositivos:
    - Dominio: Una parte específica de la red.
    - Ancho de banda: La cantidad de datos que puede pasar por la red en un periodo de tiempo.
    - Data con unidirección: Datos enviados a un dispositivo.
    - Data con multidirección: Datos enviados a un grupo de dispositivos.
    - Data en Broadcast: Datos enviados a todos los dispositivos de la red.
    - Dominio de Colisión: Son separados por switches, incluye los dispositivos que comparten el mismo ancho de banda.
    - Dominio Broadcast: Son separdos por routers, incluyen los dispositivos que reciben datos en broadcast (general).

### *Dispositivos de Capa 1*
Como se mencionó en el capítulo anterior la PDU de la capa física son los bits o 0s-1s, que se manejan mediante impulsos eléctriccos generalmente.

#### *Network Interface Card (NIC)*
Permite conectar el dispositivo, en este caso un PC, a la red pues cuenta con un adaptador. Actualmente las laptops y tarjetas madre modernas tienen un NIC constuido dentro con un adaptador para RJ45 (el más común).

Este tipo de NIC usa protocolos de las capas 1 y 2 dado que la conexión es por cable.
Existe el Wireless NIC que cuenta con un comunicador para conectarse a redes inalámbricas mediante una antena multidireccional normalmente.

En general estos dispositivos si son externos van al puerto/entrada de PCI, directo con la motherboard o en otros casos mediante USB.

#### *Cables de red*
Son usados para conectar dentro de una red a los dispositivos, ya sea a un switch o con ellos mismos. Comunmente los tipos usados son de cobre o de fibra óptica.

Los cables de cobre usan terminación RJ45, con un entrelazado específico que lo vuelve compatible con la mayoría de NICs. 

En los cables de fibra óptica, la rapidez y disdancia mejora considerablemente respecto a los de cobre dado que la transmisión de los datos se hace mediante destellos láser (de ahí fibra óptica) en lugar de la transmisión de electrones por cobre. La desventaja de este tipo de cable es el costo y cierta delicadeza de uso, dado que son menos resistentes.
Y la terminación no es RJ45 sino LC, SC, MTRJ, ST y FC.

#### *Hubs*
Son dispositivos de red que cuentan con varios puertos de RJ45 que funcionan dentro de la capa 1 para interconectar varios equipos. La importancia de los hubs aparece por la cuestión de varios equipos cuando un cable solo tiene dos endpoints. 

A diferencia de otros dispositivos, un hub no cuenta con 'inteligencia' ni capacidad para procesar los paquetes que pasan a través de él por lo que básicamente envían los datos recibidos hacia los demás RJ45 conectados. Por eso se les como repetidores de multipuertos. al igual de tampoco usar protocolos ni procesos de la capa 2. 

Todo lo anterior ocasiona que sean raramente usados en redes modernas pues fueron reemplazados por switches.

### *Dispositivos de capa 2*
La PDU de la capa 2 son los frames y se crean cuando se añade el header y trailer de la capa antes de llegar a la capa 1. La información más importante del frame header es la dirección MAC del emisor y el receptor.

#### *Dirección MAC*
Las direcciones de la capa 2 son llamadas Media Access Control (MAC), dirección física y dirección burned-in (BIAs). Son asignados a los NIC o adaptadores en el momento de fabricación. 

El tamaño de la MAC es de 48 bits y la primera mitad (24 bits) son de parte de la OUI (Organizational Unique Identificator) que es dado por cada fabricante. El penúltimo bit importante de la OUI identifica si la dirección fue asignada localmente (valor 0) o de manera universal (valor 1) y el último bit de esta mitad indica si es una MAC Unicast (valor 1) o Multicast (valor 0). 

La otra mitad (24 bits) es un valor único dado a ese dispositivo para ser identificado dentro de la MAC.

#### *Switches*
Usar Hubs en redes de tamaño medio-largo no es eficiente por lo que se subdivide en lo que se llama dominios de colisión para mejorar el rendimiento y la seguridad. Estos dominios son conectados por un switch ya que permite el flujo de comunicación hacia un solo receptor, a diferencia del hub. 

Esta 'inteligencia' o capacidad de direccionar la comunicación se debe a que el switch cuenta con una tabla con las MACs de los dispositivos con un mapeo de los mismos.

La primera vez que un switch recibe datos de un puerto, guarda la MAC de ese emisor e inunda los demás puertos para encontrar la MAC del receptor y en el momento que el receptor responde de regreso, guarda la MAC en la  tabla. Así envía el frame del emisor al puerto indicado además de anexar 2 MACs a la tabla.

Una de las características importantes es que separa los dominios de colisión e incluso cada puerto conectado es su propio dominio de colisión, solo perteneciendo a un dominio de broadcast que es el dominio general.

Existe una categoría especial de switch que es el de capa 3, usa protocolos y lógica por lo que son llamados routing switches o switches multicapa.

#### *Lógica de Switching*
Sabemos que los switch dividen en dominios de colisiones a los puertos y permite alta demanda de paquetes pues su hardware cuenta con un ASIC (application-specified integrated circuit) además de segmentar la red para mejorar el ancho de banda.

Cuando un switch recibe datos de un emisor, guarda su MAC y el tiempo de entrada ya que cada que recibe un frame del mismo emisor modifica el tiempo pero si el switch no recibe nada de esa MAC durante un tiempo determinado se borra de la tabla ya que un switch cuenta con memoria limitada. 

Si recibe un frame de un emisor desconocido y la tabla de MACs se encuentra llena, entonces el switch inunda a todos los puertos hasta que exista una apertura para que el switch aprenda del emisor nuevo.
- Nota: Este proceso de inundar los puertos con frames nuevos cuando la tabla está llena es un riesgo de seguridad ya que un atacante puede sobrecargar el switch y puede obtener todos los frames 'nuevos' aún no le correspondan.

### *Dispositivos de Capa 3*
Sus PDUs son los paquetes. Cuando la información viene de la capa 4 de network añade el header de la capa 3 que contiene información importante cómo la dirección IP tanto del emisor cómo receptor. Mientras baja de capa hasta convertirse en 0s y 1s.

#### *Direcciones de capa de red*


| **Capas OSI** | **Función** |
| *Capa 7* | `Aplicación` |
| *Capa 6* | `Presentación` |
| *Capa 5* | `Sesión` |
| *Capa 4* | `Transporte` |
| *Capa 3* | `Network` |
| *Capa 2* | `Data Link` |
| *Capa 1* | `Física` |

El modelo OSI es importante de entender por su arquitecutra modular, básicamente comprender la interacción entre las varias capas que contiene. La meta principal de esta forma de categorizar es mejorar la funcionalidad y operabilidad entre diferentes aplicaciones-vendedores. Ejemplo: Ciertas aplicaciones o funciones de capas más altas pueden desarrollarse sin la necesidad de preocuparse de las capas bajas dado que existe cierto nivel de confianza dentro de los paquetes analizados por estos mismos.




## *Referencias*
