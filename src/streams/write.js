import fs from 'node:fs';
import { stdin } from 'node:process';
import path, { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const writeStream = fs.createWriteStream(filePath);
  stdin.on('data', (data) => {
    writeStream.write(data);
  });
};

await write();
