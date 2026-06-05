const { Readable, Writable } = require('node:stream');

// Create a custom Readable stream
class MyReadable extends Readable {
    constructor(options) {
        super(options);
        this.currentNumber = 1; // Start generating numbers from 1
    }

    _read(size) {
        // Push numbers to the stream until we reach 10
        if (this.currentNumber <= 10) {
            this.push(String(this.currentNumber++));
        } else {
            this.push(null); // No more data
        }
    }
}

// Create a custom Writable stream
class MyWritable extends Writable {
    _write(chunk, encoding, callback) {
        // Process the received data (in this case, just log it)
        console.log(`Received: ${chunk.toString()}`);
        callback(); // Signal that the write is complete
    }
}

// Instantiate the custom streams
const myReadable = new MyReadable();
const myWritable = new MyWritable();

// Use the pipe method to connect the readable and writable streams
myReadable.pipe(myWritable);