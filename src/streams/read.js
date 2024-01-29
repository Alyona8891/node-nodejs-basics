import fs from 'node:fs';

const read = async () => {
  const readStream = fs.createReadStream('files/fileToread.txt', 'utf-8');
  readStream.on('data', (data) => console.log(data));
  readStream.on('error', (err) => console.error(err));
};

await read();
