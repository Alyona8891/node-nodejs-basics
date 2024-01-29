import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream('files/fileToCompress.txt');
  const destination = createWriteStream('files/archive.rar');

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
  });
};

await compress();
