import fs from "fs";
import path from "path";
import process from "process";

const filesFolder = path.resolve("src", "streams", "files");

const write = async () => {
  process.stdin.on("data", (data) => {
    fs.createWriteStream(filesFolder + "/fileToWrite.txt").write(
      data.toString()
    );
  });
};

await write();
