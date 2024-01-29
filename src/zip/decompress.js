import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
  const unzip = createUnzip();
  const source = createReadStream('files/archive.rar');
  const destination = createWriteStream('files/fileToCompress.txt');

  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
  });
};

await decompress();
