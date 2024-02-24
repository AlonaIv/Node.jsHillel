import fs from 'fs'

const readable = fs.createReadStream('input.txt', 'utf8');
const writable = fs.createWriteStream('output.txt', 'utf8');

readable.on('data', (chunk) => {
    const chunkToUpper = chunk.toUpperCase();

    writable.write(chunkToUpper);
})

readable.on('end', () => {
    console.log({ event: 'end' });
});