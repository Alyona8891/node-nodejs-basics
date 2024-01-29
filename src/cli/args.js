const parseArgs = () => {
  const args = process.argv.slice(2);

  const resultArr = [];
  let substring = '';

  for (let i = 0; i < args.length; i += 1) {
    if (i === 0 || i % 2 === 0) {
      substring += args[i];
    } else {
      substring += ` is ${args[i]}`;
      resultArr.push(substring);
      substring = '';
    }
  }

  console.log(resultArr.join(', '));
};

parseArgs();
