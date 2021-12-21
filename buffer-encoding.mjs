
const buffer = Buffer.from("Eko Kurniawan Khannedy", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("RWtvIEt1cm5pYXdhbiBLaGFubmVkeQ==", "base64");
console.info(bufferBase64.toString("utf8"));
