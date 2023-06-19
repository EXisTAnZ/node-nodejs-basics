import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

// дано:
const folderName = "files",
      errmsg = "FS operation failed";

const __dirname = path.dirname(fileURLToPath(import.meta.url)),
      folderPath = path.join(__dirname, folderName);

const list = async () => {
    fs.readdir(folderPath).then(list => console.log(list)).catch(err => { throw new Error(errmsg); });
};

await list();