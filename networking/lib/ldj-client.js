'use strict';
const EventEmitter = require('events').EventEmitter;

/**
 * Para crear la clase LDJClient.
 * @name LDJClient que extiende de la clase EventEmitter
 */
class LDJClient extends EventEmitter {
  constructor(stream) {
    //Make the test pass by modifying the constructor.
    if (stream === null)
    throw new Error('Parámetro stream nulo');

    super();
    let buffer = '';
    stream.on('data', data => {
      buffer += data;
      let boundary = buffer.indexOf('\n');
      while (boundary !== -1) {
        const input = buffer.substring(0, boundary);
        buffer = buffer.substring(boundary + 1);
        try{
          this.emit('message', JSON.parse(input));
        }catch(err){
          throw new Error('Se ha enviado al cliente un mensaje que no es JSON'); 
        }
        boundary = buffer.indexOf('\n');
      }
    });
    //Update LDJClient to listen for close and process the remainder of the buffer.
    stream.on('close', () => {
      let boundary = buffer.indexOf('}');
      if (boundary !== -1) {
        const input = buffer.substring(0, boundary + 1);
        try {
          this.emit('message', JSON.parse(input));
        } catch (err) {
          throw new Error('Se ha enviado al cliente un mensaje que no es JSON');
        }
      } else {
        buffer = '';
      }
      this.emit('close');
    })
  }

  static connect(stream) {
    return new LDJClient(stream);
  }
}

module.exports = LDJClient