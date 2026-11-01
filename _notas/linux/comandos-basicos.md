---
title: "Comandos básicos de Linux"
categoria: linux
orden: 1
estado: en-curso
actualizado: 2026-10-31
tags: [linux, terminal]
---

Aquí iré anotando los comandos que uso, con un ejemplo y para qué sirven.

| Comando | Para qué sirve | Ejemplo |
|---|---|---|
| `ls` | Listar archivos. | `ls [options] [directory]` |
| `pwd` | Listar directorio y path del archivo. | `pwg` |
| `mkdir` | Crear nuevo directorio de un archivo/carpeta. | `mkdir directory_name` |
| `cd` | Hace cambio al directorio seleccionado siempre y cuando se encuentre dentro del path en el que nos encontramos. | `cd directory_name` |
| `rmdir` | Sirve para el borrado del directorio vació seleccionado siempre que se encuentre dentro del path. | `rmdir directory_name` |
| `cat` | Muestra el contenido/unidades del archivo dado. | `cat file_name` |
| `cp` | Realiza la copia del contenido de un archivo hacia otro mientras sea compatible. | `cp source destination` |
| `mv` | Realiza el cambio de nombre a un archivo/directorio. | `mv old_name new_name` |
| `rm` | Elimina el archivo seleccionado dentro del path. | `rm file_name` |
| `uname` | Lista información del sistema. | `uname [options]` |
| `locate` | Sirve para localizar el archivo dentro del directorio y mostrando su path. | `locate file_name` |
| `touch` | Permite crear archivos vacíos dentro del directorio y permite actualizar el  timestamp del mismo. | `touch file_name` |
| `ln` | Sirve para crear links entre archivos dependiendo del tipo si es Hard o Soft (-s). | `ln -s source link_name` |
| `clear` | Algo básico pero su función principal va relacionada con limpiar la terminal de comandos. | `clear` |
| `ps` | Muestra los procesos que se encuentrar realizando al momento de ejecutar el comando. | `ps aux` |
| `man` | Se utiliza para ver los manuales, opciones y usos de los comandos. | `man command_name` |
| `grep` | Filtro y búsqueda de strings dentro de un archivo, mostrando las coincidencias junto al comando 'cat'. | `grep "string" flie.txt` |
| `echo` | Se usa para mostrar strings en la terminal | `echo "text"` |
| `wget` | Permite descargar archivos desde la red con una url específica | `wget url` |
| `whoami` | Muestra el usuario actual que ejecuta el comando | `whoami` |
| `sort` | Similar a cat, muestra el contenido de un archivo pero con la diferencia de ordenar este contenido de menor a mayor (números) y de orden alfabético (strings) | `sort file_name` |
| `cal` | Enseña el calendario de acuerdo a la configuración de Linux | `cal` |
| `whereis` | Localiza el archivo del comando y enseña el path | `whereis command_name` |
| `df` | Muestra el espacio usado en el disco junto a sus particiones | `df [options]` |
| `wc` | Cuenta la cantidad de líneas, palabras y bytes contenidos en un archivo además de mostrarlo en la terminal. | `wc [option] file_name` |


## Cosas que me confundieron

## Referencias
