import fs from "fs/promises";
import path from "path";
import crypto from "crypto"
import { fileURLToPath } from "url";

// дано:
const folderName = "files",
      fileName = "fileToCalculateHashFor.txt",
      errmsg = "FS operation failed";

const __dirname = path.dirname(fileURLToPath(import.meta.url)),
      filePath = path.join(__dirname, folderName, fileName);

const calculateHash = async () => {
    try {
        const fileBuffer = await fs.readFile(filePath, { flag: "r" });
        const hash = crypto.createHash("sha256").update(fileBuffer);
        console.log(hash.digest('hex'));
    } catch {
        throw new Error(errmsg);
    }
    
};

await calculateHash();