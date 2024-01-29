import fs from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
  const readStream = fs.createReadStream('files/fileToRead.txt', 'utf-8');
  readStream.on('data', (data) => stdout.write(data));
  readStream.on('error', (err) => console.error(err));
};

await read();
