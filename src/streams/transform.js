import { Transform } from "stream";

String.prototype.reverse = function() { 
    return this.split('').reverse().join('')+'\n\n'; 
}

class Reverser extends Transform {
    constructor(options) {
        super(options);
    }
    _transform(data, encoding, callback) {
        callback(null, data.toString().reverse());
    }
}

const transform = async () => {
    const reverseStream = new Reverser();
    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();