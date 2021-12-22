import net from "net";

const client = net.createConnection({
    port: 3000,
    host: "localhost"
});

client.addListener("data", (data) => {
    console.info(`Receive data from server : ${data.toString()}`)
});

setInterval(() => {
    client.write(`${process.argv[2]}\r\n`);
}, 2000);
