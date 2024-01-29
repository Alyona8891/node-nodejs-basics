import fs from 'node:fs';
import { stdout } from 'node:process';
import path, {join} from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const readStream = fs.createReadStream(filePath, 'utf-8');
  readStream.on('data', (data) => stdout.write(data));
  readStream.on('error', (err) => console.error(err));
};

await read();
