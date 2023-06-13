const parseArgs = () => {
    const args = process.argv.slice(2);
    console.log(
        args.map((arg,idx) => idx%2 ? '' :`${arg.slice(2)} is ${args[idx+1]}`)
            .filter(item => item)
            .join(', '));
};

parseArgs();