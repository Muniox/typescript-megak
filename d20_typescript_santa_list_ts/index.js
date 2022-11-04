require('dotenv').config(); //global
require('./utils/db'); 
const express = require("express");
require('express-async-errors');
const methodOverride = require("method-override");
const { engine } = require("express-handlebars");
const { handleError } = require("./utils/error");
const { homeRouter } = require("./routers/home");
const { childRouter } = require("./routers/child");
const { giftRouter } = require("./routers/gift");
const { handlebarsHelpers } = require("./utils/handlebars-helpers");


const app = express();
const PORT = process.env.PORT;
const ADDRESS = process.env.ADDRESS; //jeśli chcemy, żeby było dla wszyskich dajemy 0.0.0.0

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