import { createHash } from 'crypto';
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
  const input = createReadStream('files/fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  input.on('readable', () => {
    const data = input.read();
    data ? hash.update(data) : console.log(hash.digest('hex'));
  });
};

await calculateHash();
