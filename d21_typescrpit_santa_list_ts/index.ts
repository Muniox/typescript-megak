import * as dotenv from 'dotenv';
dotenv.config();
import './utils/db'; 
import * as express  from "express";
import 'express-async-errors';
import * as methodOverride from "method-override";
import { engine } from "express-handlebars";
import { handleError } from "./utils/error";
import { homeRouter } from "./routers/home";
import { childRouter } from "./routers/child";
import { giftRouter } from "./routers/gift";
import { handlebarsHelpers } from "./utils/handlebars-helpers";


const app = express();
const PORT = process.env.PORT as unknown as number;
const ADDRESS = process.env.ADDRESS; //jeśli chcemy, żeby było dla wszystkich dajemy 0.0.0.0

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.use(express.json());
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: handlebarsHelpers, //dodatkowe funkcjonalności, które chcemy dodać do Handlebarsów
}));
app.set('view engine', 'hbs');

app.use('/', homeRouter);
app.use('/child', childRouter);
app.use('/gift', giftRouter);
app.use(handleError);

app.listen(PORT, ADDRESS, () => {
    console.log(`serwer nasłuchuje na http://${ADDRESS}:${PORT}`);
});