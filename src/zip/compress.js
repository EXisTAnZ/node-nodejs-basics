import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

// дано:
const folderName = "files",
      fileName = "fileToCompress.txt",
      archName = "archive.gz",
      errmsg = "FS operation failed";

const __dirname = path.dirname(fileURLToPath(import.meta.url)),
      filePath = path.join(__dirname, folderName, fileName),
      archPath = path.join(__dirname, folderName, archName);

const compress = async () => {
    const zipper = createGzip(),
        outStream = new fs.WriteStream(archPath),
        readStream = new fs.ReadStream(filePath);
    readStream.pipe(zipper).pipe(outStream);
};

await compress();