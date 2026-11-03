---
title: "Distribuciones"
categoria: linux
orden: 1
estado: completo
actualizado: 2026-11-03
tags: [distribucion, linux]
---

## ¿Qué es una distribución?
Es un OS creado en el entorno de linux pero con herramientas, funciones y optimización diferente. Cada distribución parte del mismo esqueleto pero construye un uso particular a cada una, desde equipos antigüos hasta firmware embebido que abarca un algo específico.

## Funciones principales de cada distr (las más importantes):
- Ubuntu: 
La distribución con mayor cuota de usuarios dado que es de las más sencillas de utilizar y configurar sumando a eso un amplio soporte de la comunidad. Puede ser utilizado en una gran variedad de equipos ya que cuenta con versiones de pocos requisitos.
- Kali-linux:
Específicamente diseñado para entornos que abarca la ciberseguridad, posee cientos de herramientas preinstaladas que permiten hacer uso de pentesting, ingeniería inversa, hacking ético, mapeo de redes y demás. 
- Debian:
Conocida por su estabilidad y fiabilidad dentro de las distribuciones, no posee las funciones más recientes respecto a otras pero eso también asegura su baja incidencia en problemas relacionados.
- Fedora:
Lo opuesto a debian ya que cuenta con las funciones más recientes que se pueden aplicar a linux y se encuentra respaldado por Red-Hat. Su aplicación principal es el desarrllo y usuarios experimentados.
- Arch Linux:
Se tiene control total del sistema y permite customización real dentro del mismo. Es constantemente actualizado pero requiere de experiencia dentro del manejo de Linux para evitar hacer acciones no necesitadas.
- CentOS Stream:
Proporciona el desarrollo de vanguardia de la empresa RedHat junto a la documentación más reciente. Su uso es recomendado para asociados y entusiastas de la empresa.
- Linux Mint:
De las más simples y versátiles, es fácil de usar para aquellos que provienen de otros OS y es incluso más sencilla que Ubuntu.

## Instalación
La parte sencilla dentro las distribuciones:
- Primero debemos conocer para qué queremos usar Linux y que tan familiarizados estamos dentro del mismo. Una vez hecho esto localizaremos la web oficial y buscaremos la versión que nos sea conveniente.
- El escoger la versión puede ser relevante en el caso que manejemos información importante o de flujo alto por lo que evitaremos las anteriores y nos centraremos en las recientes.
- Con la iso descargada, el paso será si es que queremos una maquina virtual, hacer un dual boot en otro equipo o tenerlo de OS principal. Por el momento nos centraremos en un equipo solo con la distribución.
- Accederemos a la BIOS de acuerdo al modelo y validaremos que permita arranque desde USB/CD-ROM.
- Ahora, en el lugar dónde descargamos la distribución, montaremos la iso dentro de la memoria con RUFUS escogiendo la opción GPT/MBR dependiendo del caso. No olvidemos que la memoria debe tener capacidad suficiente y no contar con información de antemano dado que se formateara durante el procesos.
- Se colocará la USB en el puerto del equipo a instalar y nos aseguramos que se apague completamente. Durante el encendido accederemos para cambiar modo de arranque, seleccionando el USB/CD-ROM. 
- Acá dependera de la distribución pero algunas como Ubuntu/Linux Mint ofrecen arrancar desde la propia memoria sin estar nada instalado dentro del almacenamiento del equipo, lo que puede servir para conocer funciones o revisar que estamos en la versión correcta.
- Procederemos con las configuraciones al instalar de acuerdo a la documentación del sitio oficial y reiniciaremos el equipo.
- Listo! Deberíamos tener nuestra distribución junto a sus herramientas asociadas en funcionamiento.

## Ejemplo
- Distribución: Linux Mint MATE 22.3, Procesador: i3 10ma Gen, Memoria: 8Gb DDR4, Almacenamiento: 256Gb SSD, Fabricante: HP.
- Descargamos directo desde la web oficial, dónde se escogió la versión MATE por ser el punto medio y estar basado en la GNOME 2. 
- Prepararemos el USB en RUFUS y por el modelo del equipo escogemos GPT con NTFS. El proceso puede demorar unos minutos dado que carga toda la iso.
- Entrando a la BIOS del equipo nos aseguramos de colocar en 1ro el modo de arranque por USB/CD-ROM y que tenga un firmware compatible (es lo más probable).
- Se iniciará el equipo en la Live Session, dónde se ejecutará en la propia memoria y no el SSD. Nos iremos al apartado de instalar y comenzará el proceso.
- Debemos asegurar configuraciones básicas cómo el idioma, internet o tipo de teclado. La más importante es cuando nos pregunta el tipo de instalación dado que podemos hacerlo c,omo si fuera una partición pero indicaremos en formatear el SSD y poner solamente Linux. (En este caso no encriptaremos el almacenamiento pero si llega a ser necesario, se toman medidas para no perder en un futuro información del sistema)
- Se reiniciará el equipo y nos pedirá las credenciales que configuramos. Listo! Ya podemos trabajar en nuestro ecosistema linux.

## Referencias
- ¿Qué es una distribución? https://www.geeksforgeeks.org/linux-unix/what-are-linux-distributions/
- Instalación de Linux Mint y versiones https://linuxmint-installation-guide.readthedocs.io/en/latest/install.html