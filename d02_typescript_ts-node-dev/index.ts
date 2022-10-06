import * as express from "express";
const app = express();

const str: string = 'mój string';
const num: number = 2;



//Przykład============================
// function sum(a: number, b: number):number {
//     return a + b;
// }

// const input = document.querySelector('input');
// if (input) {
//     const val = Number(input.value);
//     console.log(sum(2, val));
// }
//====================================

function foobar(a: number, b: number): number | null {
    if (a === 0) {
        return null;
    }

    return a + b;
}
console.log(foobar(0, 3) === null)

const add = (a: number | string, b: number | string): number | string => {
    return a + b;
}


app.get('/', (req: express.Request, res: express.Response) => {
    const message: string = 'hello from ts-node-dev';

    res.send(message);
});

app.listen(3000, 'localhost', () => {
    console.log('serwer działa na http://localhost:3000');
});
