[![Build Status](https://travis-ci.org/ULL-ESIT-DSI-1819/p4-t2-networking-alu0101061672.svg?branch=master)](https://travis-ci.org/ULL-ESIT-DSI-1819/p4-t2-networking-alu0101061672)

# Práctica 4: Networking with Sockets

#### Para la realización de la práctica voy a desarrollar un resumen o apuntes basados en lo aprendido y en lo considerado más importante. 

En esta práctica vamos a ver los sockets TCP que son el esqueleto de las aplicaciones en red. 
Los servicios en red sirven para conectar extremos y transmitir entre ellos, es decir, el primer paso es establecer la conexión independientemente de la información que se transmita. Un extremo se enlaza a un puerto numerado y el otro extremo se conecta a un puerto para seguir el esquema cliente/servidor.
Para crear servicios basados en sockets vamos a utilizar node.js. 

Para las operaciones de enlace y conexión en node.js se utiliza el módulo net.
En este ejemplo se utiliza el método net.createServer que toma una callback y devuelve un objeto servidor. Se invocará la callback cuando se conecte un extremo. El objeto Socket es el parámetro de coneción y se utiliza para enviar o recibir datos. Tras esto nos unimos al puerto especificado mediante server.listen.

![Html](capturas/1.png)

Para entender un poco mejor este proceso se proporciona el siguiente esquema: 

![Html](capturas/2.png)

Aquí vemos como el servidor se une a un puerto TCP. Cualquier número de clientes pueden conectarse al puerto vinculado.
Pero todavía nuestro programa no hace nada con la coneción. Para ello, vamos e enviar información al cliente. En el siguiente fichero se muestra cómo se lleva a cabo esta tarea. Se ve como se utilizan los módulos fs y net. Si el usuario no proporciona un archivo del que escuchar se lanza un error, si lo proporciona este es el tercer argumento de process.argv recogido en la constante filename. A continuación, se observa como funciona la función callback. Para empezar nos informa de que la conexión entre cliente-servidor se ha establecido. Después escucha los cambios realizados en el archivo filename proporcionado, enviándose información de cambio al cliente usando connection.write. Para finalizar escucha al evento de cierre de la conexión. 

![Html](capturas/3.png)

El programa net-watcher se prueba de la siguiente manera:

![Html](capturas/4.png)

En la primera terminal de la izquierda se ejecuta el servicio, en la del medio el cliente y en la de la derecha se activarán los cambios en el archivo del que se escucha.
Esta configuración creada se describe en la siguiente imagen, en la que el proceso net-watcher vincula un puerto TCP y escucha a un archivo.

![Html](capturas/5.png)

Se pueden conectar múltiples usuarios y recibir actualizaciones simultáneamente. 
Los sockets TCP soon útiles para la comunicación entre equipos conectados en red.

