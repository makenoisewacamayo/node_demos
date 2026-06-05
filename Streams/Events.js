const EventEmitter = require('node:events');

const myEmitter = new EventEmitter();

// Add multiple listeners for the same event
myEmitter.on('status', () => {
    console.log('Status update: All systems operational.');
});

myEmitter.on('status', () => {
    console.log('Status check completed.');
});

myEmitter.on('error', (err) => {    
  console.error('An error occurred:', err);
});

myEmitter.on('greet', (name) => {    
  console.log(`Hello, ${name}!`);
});

myEmitter.emit('status');
myEmitter.emit('greet', 'Alice');
myEmitter.emit('error', new Error('Something went wrong!'));