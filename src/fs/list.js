import fs from "fs";
import path from "path";

const filesFolder = path.resolve("src", "fs", "files");

const list = async () => {
  fs.readdir(filesFolder, (err, files) => {
    if (err) throw new Error("FS operation failed");
    console.log(files);
  });
};

await list();
