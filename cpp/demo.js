const EventEmitter = require('node:events');

const myEmitter = new EventEmitter();

// Add multiple listeners for the same event
myEmitter.on('status', () => {
    console.log('Status update: All systems operational.');
});

myEmitter.emit('status');