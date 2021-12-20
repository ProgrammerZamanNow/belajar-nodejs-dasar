function samplePromise(){
    return Promise.resolve("Eko");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();
