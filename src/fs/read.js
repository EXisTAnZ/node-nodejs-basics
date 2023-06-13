import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

// дано:
const folderName = "files",
      readFileName = "fileToRead.txt",
      errmsg = "FS operation failed";

const __dirname = path.dirname(fileURLToPath(import.meta.url)),
      readFilePath = path.join(__dirname, folderName, readFileName);

const read = async () => {
    fs.readFile(readFilePath, { encoding:"utf-8", flag:"r" })
      .then(content => console.log(content))
      .catch(err => { throw new Error(errmsg); });
};

await read();