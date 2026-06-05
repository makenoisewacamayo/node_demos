const { Writable } = require('node:stream');
const fs = require('node:fs');

const myStream = new Writable();

const err = new Error(`a nasty error happen, myStream is destroyed ${myStream.destroyed}`);
myStream.destroy(err);
myStream.on('error', (err) => console.error(err.message)); // foo error



const myStream2 = new Writable();
myStream2.destroy();
myStream2.write('foo', (error) => console.error(error.code));


const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');