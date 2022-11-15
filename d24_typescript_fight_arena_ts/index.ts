import * as express from "express";
import 'express-async-errors'; 
import * as methodOverride from "method-override";
import { urlencoded, static as eStatic } from "express";
import { engine } from "express-handlebars";
import { homeRouter } from "./routers/home";
import { warriorRouter } from "./routers/warrior";
import { arenaRouter } from "./routers/arena";
import { hallOfFameRouter } from "./routers/hall-of-fame";
import "./utils/db";

const app = express();

app.use(methodOverride('_method'));
app.use(urlencoded({extended: true}));
app.use(eStatic('public'));
app.engine('.hbs', engine({
    extname: '.hbs',
    // helpers: ????
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/warrior', warriorRouter);
app.use('/arena', arenaRouter);
app.use('/hall-of-fame', hallOfFameRouter);

// app.use(handleError);

app.listen(3000, () => {
    console.log(`server listen on http://127.0.0.1:3000`);
});