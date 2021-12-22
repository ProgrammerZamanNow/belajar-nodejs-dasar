import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib-compress.mjs");
const result = zlib.gzipSync(source);

fs.writeFileSync("zlib-compress.mjs.txt", result);

