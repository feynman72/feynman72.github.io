---
title: "Arquitectura"
categoria: linux      
orden: 1                     
estado: completo             
actualizado: 2026-11-05       
tags: [kernel, linux]
---

## ¿Qué componentes tiene?
La arquitectura de Linux se basa en 5 partes, que son las siguientes (el orden se encuentra desde la capa más alta o cercana al usuario):
- Aplicación
- Shell
- Kernel
- Hardware
- Utilities

## Kernel
Podemos decir que es el núcleo o eje principal del OS ya que se encuentra justo en la posición media del hardware y el espacio de usuario, en dónde se asegura de comunicación estable entre estas partes junto a los recursos.
- 
    - Memory management: Administración de la memoria del sistema de forma eficiente.
    - Process management: Organiza procesos y controla su ejecución usando listas.
    - Resource allocation: Distribuye la CPU, memoria y recursos de Input/Output entre los procesos.
    - Device management: Controla el hardware de los periféricos por medio de drivers.
    - Application interaction: Es el puente entre las aplicaciones y el hardware.
    - Security: Refuerza el control de acceso junto a los mecanismos de seguridad a nivel sistema.

- Tipos de Kernel:
    - Kernel Monolítico: Posee comunicación directa entre los componentes dando mejor rendimiento pero ocasiona que el kernel sea de mayor tamaño siendo más complejo y difícil de mantener. Todos los servicios del sistema (que se listaron antes) se ejecutan a nivel del Kernel, usando la misma memoria.
    - Microkernel: Solo los sistemas de servicio esenciales están en el espacio del Kernel mientras otros se desplazan al espacio de usuario. Esto genera que sea modular además de proveer mejor seguridad aunque su detrimento es que no puede tener el rendimiento ideal debido a la constante intercomunicación de servicios entre el Kernel-User Space.
    -Exokernel: Expone o muestra los recursos de hardware a las aplicaciones, lo que les permite tener acceso para administrarlos a bajo nivel. Aunque ofrece flexibilidad y rendimiento esto hace que las aplicaciones aumenten en complejidad ya que deben hacer trabajo del kernel en abstraer la información de los recursos.
    -Kernel híbrido: Combina características el kernel monolítico y microkernel, dejando servicios importantes dentro del kernel pero permitiendo modularidad en los componentes. Es el que mejor balance tiene entre rendimiento y flexibilidad, siendo perfecto para sistemas modernos.

- Subsistemas principales del kernel:
    - Process Scheduler: Se responsabiliza de distribuir equitativamente de los tiempos de procesamiento entre todos los procesos activos.
    - Memory Management Unit (MMU): También se encarga de distribuir pero en este caso los recursos de memoria entre los procesos activos.
    - Virtual File System (VFS): Provee una interfaz para acceder a data almacenada dentro de diferentes archivos en diferentes componentes fisicos.
    - Networking Subsystem: Cómo su nombre dice se encarga de la comunicación de redes incluyendo transmisión, routeo y protocolos.
    - Inter-Process Communication (IPC) Unit: Permite la comunicación y sincronización entre múltiples procesos activos dentro del sistema.

## System Libraries
Concede funciones predefinidas que permiten a las aplciaciones y a las utilidades del sistema en acceder a características del kernel sin interactuar con el kernel mismo. Prácticamente son el pilar del desarrollo de software dado que ofrecen interfaces estandarizadas y reusables para los OS. Acá los más comúnes:
- GNU C Library (glibc): Provee comunicación con el núcleo del sistema y funciones integradas requeridas para programas en C activos.
- libpthread (POSIX Threads): Permite la creación y manejo de aplicaciones multihilo.
- libdl (Dynamic Linker): Acepta cargas y enlaces dinámicos de librerías compartidas en activo.
- libm (Math Library): Ofrece usos matemáticos como trigonometría, logaritmos y exponenciación.
- Other libraries: librt (Real-Time operations), lincrypt (Cryptographic functions), libnss (Name Service Switch), libstdc (C++ Standard Library).

## Shell
Es la interfaz de software hacia el kernel. Toma comandos del usuario, los interpreta y los transmite al kernel que luego realiza dichas operaciones. El usuario escribe el comando y usando la función adecuada del kernel, esa tarea se ejecuta.

- Diferentes tipos de shell
Cada shell ofrece características únicas para interactuar con Unix/Linux OS.
- 
    - Bourne Shell (sh):
    De los primeros shells en Unix, usa comandos básicos y capacidades de script simples. Es confiable y ligero por lo que se sigue usando en scripts de sistemas y en propositos de compatibilidad.
    - C Shell (csh):
    Diseñado con un syntax similar al lenguaje C e introduciendo opciones como el historial de comando pero es menos ajustable a scripting complejo.
    - Korn Shell (ksh): 
    Combina  caracteristicas del sh y csh mientras mantiene retrocompatibilidad. Usado altamente en entornos empresariales por su estabilidad y scripting fuerte.
    - Bash (Bourne Again Shell):
    Una version mejorada del sh con opciones tales como historial de comandos, completar con tab y mejor scripting. Es el shell por default en la mayoría de distribuciones por su flexibilidad y ser gratuito.
    - Z shell (zsh):
    Altamente moldeable que integra opciones del bash, ksh y csh. Popular entre desarrolladores por sus temas, extenciones y autocompletado avanzado.
    - Fish (Friendly Interactive Shell):
    Diseñado en facilidad de uso tal como sobresaltar syntax, sugerencias de comandos y configuración simple. Es ideal por interacción pero menos usado para scripting complejo.

## Hardware Layer
Es la capa de más bajo nivel en el Linux OS y forma el pilar en el cual los otros componentes operan. Consiste en los componentes físicos y controles de bajo nivel que permiten al sistema funcionar.
- Incluye componentes como la CPU, RAM, almacenamiento y dispositivos Input/Output.
- Trabaja con los drivers para permitir comunicación.
- Soporta acceso a la memoria, control de CPU y operaciones I/O.
- Se encarga de mantener estable y eficiente la interacción entre el hardware y el OS.

## System utilities
Son las herramientas de la lina de comando para ayudar usuarios y administradores a manejar, configurar y monitorear sistemas Linux. Se simplifica la administración del sistema dando comandos listos para usar en tareas comunes.
- Rinde en manejo de operaciones de archivos y directorios
- Monitorea rendimient del sistema y uso de recursos.
- Administra usuarios, grupos y permisos.
- Configura y diagnostica opciones de network.

## Referencias
La información ha sido recopilada y extraida de la siguiente web: https://www.geeksforgeeks.org/linux-unix/architecture-of-linux-operating-system/