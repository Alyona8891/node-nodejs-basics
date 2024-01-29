import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, _, callback) {
      this.push(chunk.toString().split('').reverse().join('') + '\n');
      callback();
    },
  });

  stdin.pipe(reverseStream).pipe(stdout);
};

await transform();
