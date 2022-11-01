import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import {engine} from "express-handlebars";
import {HomeRouter} from "./routers/home";
import {ConfiguratorRouter} from "./routers/configurator";
import {OrderRouter} from "./routers/order";
import {handlebarsHelpers} from "./utils/handlebars-helpers";
import {COOKIE_BASES, COOKIE_ADDONS} from "./data/cookies-data";


class CookieMakerApp {
    app: express.Express = express();

    constructor() {
        this._loadData();
        this._configureApp();
        this._setRoutes();
        this._run();
    }

    _configureApp():void {
        this.app = express();

        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(cookieParser());
        this.app.engine('.hbs', engine({
            extname: '.hbs',
            helpers: handlebarsHelpers,
        }));
        this.app.set('view engine', '.hbs');
    }

    _setRoutes() {
        this.app.use('/', new HomeRouter(this).router);
        this.app.use('/configurator', new ConfiguratorRouter(this).router);
        this.app.use('/order', new OrderRouter(this).router);
    }

    _run() {
        this.app.listen(3000, '0.0.0.0', () => {
            console.log('Listening on http://localhost:3000');
        });
    }

    showErrorPage(res: express.Response, description: string) {
        res.render('error', {
            description,
        });
    }

    getAddonsFromReq(req: express.Request) {
        const {cookieAddons} = req.cookies;
        return cookieAddons ? JSON.parse(cookieAddons) : [];
    }

    getCookieSettings(req: express.Request) {
        const {cookieBase: base} = req.cookies;

        const addons = this.getAddonsFromReq(req);

        const allBases = Object.entries(this.data.COOKIE_BASES);
        const allAddons = Object.entries(this.data.COOKIE_ADDONS);

        const sum = (base ? handlebarsHelpers.findPrice(allBases, base) : 0)
            + addons.reduce((prev: number, curr: number) => (
                prev + handlebarsHelpers.findPrice(allAddons, curr)
            ), 0);

        return {
            // Selected stuff
            addons,
            base,

            // Calculations
            sum,

            // All possibilities
            allBases,
            allAddons,
        };
    }

    _loadData() {
        this.data = {
            COOKIE_BASES,
            COOKIE_ADDONS,
        };
    }
}

new CookieMakerApp();