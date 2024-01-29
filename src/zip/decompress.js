import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import path, {join} from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourcePath = join(__dirname, 'files', 'archive.gz');
const destinationPath = join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  const unzip = createUnzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
  });
};

await decompress();
