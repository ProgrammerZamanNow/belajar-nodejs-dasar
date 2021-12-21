import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Eko\n");
writer.write("Kurniawan\n");
writer.write("Khannedy\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});
