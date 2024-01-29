import fs from "fs";
import path from "path";
import process from "process";

const filesFolder = path.resolve("src", "streams", "files");

const read = async () => {
  fs.createReadStream(filesFolder + "/fileToRead.txt").pipe(process.stdout);
};

await read();
