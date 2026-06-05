const fs = require('node:fs');

// Create a writable stream
const writeStream = fs.createWriteStream('largeFile.txt');

// Function to simulate writing a large amount of data
function writeLargeFile() {
    for (let i = 0; i < 100000; i++) {
        // Writing a line of text to the file
        writeStream.write(`This is line number ${i}\n`);
    }
    // Close the stream
    writeStream.end();
}

// Handle stream events
writeStream.on('finish', () => {
    console.log('Finished writing to the file.');
});

writeStream.on('error', (err) => {
    console.error('Error writing to the file:', err);
});

// Start writing to the file
writeLargeFile();