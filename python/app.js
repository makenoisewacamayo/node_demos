const { spawn } = require('node:child_process');

const pythonProcess = spawn('python3', ['script.py']);

pythonProcess.stdout.on('data', (data) => {
    console.log(`Salida de Python: ${data}`);
});

pythonProcess.stderr.on('data', (data) => {
    console.error(`Error en Python: ${data}`);
});

pythonProcess.on('close', (code) => {
    console.log(`Proceso de Python finalizado con código ${code}`);
});