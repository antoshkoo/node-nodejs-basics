import path from "path";
import { fileURLToPath } from "url";
import os from "os";
import { createServer } from "http";
import "./files/c.js";
const aJson = "./files/a.json";
const bJson = "./files/b.json";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = aJson;
} else {
  unknownObject = bJson;
}

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${path.resolve(__filename)}`);
console.log(`Path to current directory is ${path.resolve(__dirname)}`);

const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};
