'use strict';
const assert = require('assert');
const EventEmitter = require('events').EventEmitter;
const LDJClient = require('../networking/lib/ldj-client.js');

describe('LDJClient', () => {
  let stream = null;
  let client = null;

  beforeEach(() => {
    stream = new EventEmitter();
    client = new LDJClient(stream);
  });

  it('should emit a message event from a single data event', done => {
    client.on('message', message => {
      assert.deepEqual(message, {foo: 'bar'});
      done();
    });
    stream.emit('data', '{"foo":"bar"}\n');
  });

  it('should emit a message event from split data events', done => {
    client.on('message', message => {
      assert.deepEqual(message, {foo: 'bar'});
      done();
    });
    stream.emit('data', '{"foo":');
    process.nextTick(() => stream.emit('data', '"bar"}\n'));
    //A unit test for a single message that is split over two (or more) data events from the stream.   
    process.nextTick(() => stream.emit('data', '\n'));
  });
  //A unit test that passes in null to the LDJClient constructor and asserts that an error is thrown.
  it('Se lanzará una excepción si se pasa un stream nulo al constructor', done => {
    assert.throws(() => {
      new LDJClient(null);
    });
    done();
  });
  //Sends a data event that is not JSON.
  it('Se lanzará una excepción cuando se le envía un mensaje que no es JSON', done => {
    assert.throws(() => {
      stream.emit('data', '{"foo:\n');
    });
    done();
  });
  //The stream object sends a data event containing JSON but no newline, followed by a close event.
  //A real Stream instance will emit a close event when going offline.
  it('Se envían datos que contienen JSON pero no nueva línea', done => {
    client.on('message', message => {
      assert.deepEqual(message, { foo: 'bar' });
      done();
    });
    stream.emit('data', '{"foo": "bar"}');
    stream.emit('close');
  });
});