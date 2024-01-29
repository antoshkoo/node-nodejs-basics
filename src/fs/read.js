import fs from "fs";
import path from "path";

const filesFolder = path.resolve("src", "fs", "files");

const read = async () => {
  fs.readFile(filesFolder + "/fileToRead.txt", "utf8", (err, data) => {
    if (err) throw new Error("FS operation failed");
    console.log(data);
  });
};

await read();
