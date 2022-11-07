import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import { Express } from 'express';
const app: Express = express();

import { pool } from "./lib/db";


app.use(express.static('public'));
app.use(express.json());

(async () => {
    const data = (await pool.execute('SELECT * FROM `warriors`'))[0];
    console.log(data);
})();




const PORT = process.env.PORT as unknown as number || 3000;
const ADDRESS = process.env.ADDRESS || 'localhost';

app.listen(process.env.PORT, () => {
    console.log(`serwer nasłuchuje na http://${ADDRESS}:${PORT}`)
})