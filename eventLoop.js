
setTimeout(() => {
  console.log('Macrotask 1: Timeout 1');
}, 0);

setTimeout(() => {
  console.log('Macrotask 2: Timeout 2');
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask 1: Promise resolved');
});


process.nextTick(() => {
  console.log('Microtask 2: Next tick');
})