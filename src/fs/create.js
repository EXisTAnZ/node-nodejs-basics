import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

// дано:
const text = "I am fresh and young",
      filename = "fresh.txt",
      foldername = "files",
      errmsg = "FS operation failed";

const __dirname = path.dirname(fileURLToPath(import.meta.url)),
      folderpath = path.join(__dirname, foldername),
      filepath = path.join(folderpath, filename);

const create = async () => {
    fs.writeFile(filepath, text, { flag: 'wx' }, (error) => { if (error) throw new Error(errmsg); });
};

await create();