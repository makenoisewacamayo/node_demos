const { exec } = require('child_process');
process.env.UV_THREADPOOL_SIZE = 8;

// Check the current thread pool size
console.log('Current UV_THREADPOOL_SIZE:', process.env.UV_THREADPOOL_SIZE || 4);



// Simulate a CPU-intensive task using a child process
const numberOfTasks = 10;
for (let i = 0; i < numberOfTasks; i++) {
    exec(`node -e "console.log('Task ${i + 1} completed');"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing task ${i + 1}:`, error);
            return;
        }
        console.log(stdout);
    });
}