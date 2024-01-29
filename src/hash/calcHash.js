import { createHash } from 'crypto';
import { createReadStream } from 'node:fs';
import path, {join} from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const input = createReadStream(filePath);
  const hash = createHash('sha256');
  input.on('readable', () => {
    const data = input.read();
    data ? hash.update(data) : console.log(hash.digest('hex'));
  });
};

await calculateHash();
