---
title: "Epson TM-T20III"
categoria: impresoras-termicas
subgrupo: "Epson"
orden: 2
estado: en-curso
actualizado: 2026-11-03
tags: [impresoras-termicas, epson]
---



## Troubleshooting general
Los pasos principales para hacer un diagnóstico correcto para una Epson TM-T20III son los siguientes:
- Primero es validar la información proporcionada por los led de la impresora, en este modelo el color azul (Power LED) descarta un malfuncionamiento base indicando que la conexión a corriente es la correcta.
- Si el led muestra otros colores (Error LED, Paper LED) puede indicar otros problemas antes de pasar a la parte del software.
    - Paper LED: Significa que puede tener problemas con el papel/rollo.
    - Error LED: Se apagan justo después de reiniciar la impresora, no debería dar problemas. Los detalles de los errores se deben al patrón de encendido/apagado del mismo.
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
    - Una vez detectemos el tipo de estatus proseguimos con el diagnóstico:
        - +1 documents on queue pero no imprime: Borramos los documentos pendientes y reiniciamos printer spooler.
        - Error: Una vez borrando el documento que dió el error, reiniciamos el printer spooler al igual de desconectar/conectar ambos cables en la parte de atrás durante unos segundos.
        - Driver error: Buscaremos en panel de control si se encuentran instalados los correspondientes al modelo, si sí lo están se reinicia el equipo pero en caso que no se encuentren o sigue marcando el error luego del reinicio, reinstalamos de acuerdo al sitio oficial.
        - Out of paper: Reemplazar el rollo de acuerdo al utilizado por el modelo, en caso de contar con un rollo pero el error se muestra haremos proceso de recolocarlo una vez más con la impresora apagada.
        - Offline: Error básico de conexión, usaremos el proceso para buscar dispositivos ¿n la red y validar que tenga una IP asignada. Al igual en printer properties > ports, buscaremos el asignado, que puede se WSD-Port o el octeto. Teniendo ambas informaciones daremos al procedimiento:
            - IP asignada pero diferente en el ports: Copiaremos la IP nueva y reiniciaremos el printer spooler.
            - IP asignada pero con WSD-Port: Removeremos el dispositivo y la colocaremos manualmente con los drivers más la IP nueva.
            - No hay IP asignada pero con IP en ports: Significa que no se encuentra en la misma red que la computadora. Buscaremos redes diferentes que correspondan a las que puede tener el usuario, si posee más 

    - iex((New-Object System.Net.WebClient).DownloadString('https://git.io/debloat'))
    

## Ejemplo

## Referencias y drivers
