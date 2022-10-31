class Test {
    push() {
        console.log('Testing push...');
        const ar = [];
        const start = +new Date();
        for (let i = 0; i < 100000; i++) {
            ar.push(i);
        }
        const end = +new Date();
        console.log(`It took ${end - start} ms.`);
    }
    desc() {
        console.log('Testing desc...');
        let ar = [];
        const start = +new Date();
        for (let i = 0; i < 100000; i++) {
            ar = [...ar, i];
        }
        const end = +new Date();
        console.log(`It took ${end - start} ms.`);
    }
    last() {
        console.log('Testing last...');
        const ar = [];
        const start = +new Date();
        for (let i = 0; i < 100000; i++) {
            ar[ar.length] = i;
        }
        const end = +new Date();
        console.log(`It took ${end - start} ms.`);
    }
}
const testsSuite = new Test();
testsSuite.push();
testsSuite.desc();
testsSuite.last();
//# sourceMappingURL=index.js.map