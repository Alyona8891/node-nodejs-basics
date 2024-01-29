import fs from 'node:fs';
import { stdout, stdin } from 'node:process';

const write = async () => {
  const writeStream = fs.createWriteStream('files/fileToWrite.txt');
  stdin.on('data', (data) => {
    writeStream.write(data);
  });
};

await write();
