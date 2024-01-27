const string = 'RSS_';

const parseEnv = () => {
  const envObj = process.env;
  const result = [];

  for (let key in envObj) {
    if (key.slice(0, string.length) === string) {
      result.push(key + '=' + envObj[key]);
    }
  }

  console.log(result.join('; '));
};

parseEnv();
