import * as dotenv from 'dotenv';
dotenv.config();
import "./utils/db";
import * as express from 'express';
import 'express-async-errors';
import { Express } from 'express';
import { warriorRoute } from './routes/warrior'
import { handleError } from './utils/error';
const app: Express = express();

app.use(express.static('public'));
app.use(express.json());

app.use('/warrior', warriorRoute);
app.use(handleError);




const PORT = process.env.PORT as unknown as number || 3000;
const ADDRESS = process.env.ADDRESS || 'localhost';

app.listen(process.env.PORT, () => {
    console.log(`serwer nasłuchuje na http://${ADDRESS}:${PORT}`)
})