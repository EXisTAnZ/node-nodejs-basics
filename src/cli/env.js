//дано
const prefix = 'RSS_';

const parseEnv = () => {
    const res = Object.keys(process.env)
        .filter(key => key.substring(0,4) === prefix)
        .map(key => `${key}=${process.env[key]}`)
        .join('; ');
    console.log(res);
};

parseEnv();