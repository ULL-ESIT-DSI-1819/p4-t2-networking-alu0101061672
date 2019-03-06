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


