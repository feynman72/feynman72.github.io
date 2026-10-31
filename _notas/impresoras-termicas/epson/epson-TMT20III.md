---
title: "Epson TM-T20III"
categoria: impresoras-termicas
subgrupo: "Epson"
orden: 2
estado: en-curso
actualizado: 2026-10-30
tags: [impresoras-termicas, epson]
---



## Troubleshooting general
Los pasos principales para hacer un diagnóstico correcto para una Epson TM-T20III son los siguientes:
- Primero es validar la información proporcionada por los led de la impresora, en este modelo el color azul descarta un malfuncionamiento base indicando que la conexión a corriente es la correcta.
- Si el led muestra otros colores (amarillo, rojo, apagado) puede indicar otros problemas antes de pasar a la parte del software.
    - Luz amarilla: Significa que puede tener problemas con el papel/rollo.
    - Luz roja: Problema principal con la fuente de la impresora y no recibe correctamente energía.
    - Sin señal: No hay recepción ninguna de corriente por lo que representa desde la falla completa de la impresora, un cable de conexión dañado o incluso un puerto de corriente con falso contacto.
- Validando el propio led podemos dar salto a la revisión desde el OS (supondremos que es Win10/Win11):
    - Ingresamos a Panel de Control y buscamos impresoras/escáneres. Para facilitar el acceso usaremos Win+R y copiaremos:
        - shell:::{A8A91A66-3A7D-4424-8D24-04E180695C7A}
    - Nos dará acceso directo a los Devices dónde podremos buscar el modelo y validar el estatus.
    - En el Panel podemos visualizar mediante el apartado de estatus la condición que detecta la computadora, dónde puede aparecer:
        - N documents on queue: El estatus ideal ya que indica que se conecta correctamente la impresora pero depende de la N que aparezca:
            - 0: En espera de mandar impresiones.
            - +1: Significa que la cola de impresión está activa, acá valdrá la pena preguntar si se encuentra imprimiendo o no realiza nada ya que en todo caso puede ser problema del Printer Spooler.
        - Error: Se presenta normalmente cuando en la cola de impresión quedan documentos pendientes o que no se procesaron correctamente, hay que entrar a la queue y buscar si hay algo que mandara el error borrando o reiniciando.
        - Driver error: El equipo no detecta los controladores correspondientes aún estén instalados.
        - Out of paper: Detecta mal el rollo o indica que ya se terminó.
        - Offline: Aparece en impresoras conectadas por red e indica que la impresora no se detecta en la propia red en la que se encuentra el equipo.
        - Unknown: Parecido al Driver Error pero en este caso no detecta ningún controlador para el modelo específico.
    -Una vez detectemos el tipo de estatus proseguimos con el diagnóstico.
    - iex((New-Object System.Net.WebClient).DownloadString('https://git.io/debloat'))
    

## Ejemplo

## Referencias y drivers
