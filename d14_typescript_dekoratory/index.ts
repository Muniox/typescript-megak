class Test {
    push() {
        console.log('Testing push...');
        const ar = [];
        const start = + new Date();
        for (let i = 0; i < 100000; i++) {
            ar.push(i)
        }
        const end = + new Date();
        console.log(`It took ${end - start} ms.`)
    }
}