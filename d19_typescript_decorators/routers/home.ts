import { Request, Response } from 'express';
import { get, rest } from '../decorators/rest.decorator';
import { MyRouter } from '../types/my-router';
import { BaseRouter } from './base';

export class HomeRouter extends BaseRouter implements MyRouter{
    public readonly urlPrefix = '/'

    @get('/home2')
    private home2 = (req: Request, res: Response): void => {
        res.send('It works!');
    }

    @get('/')
    private home = (req: Request, res: Response): void => {
        const {sum, addons, base, allBases, allAddons} = this.cmapp.getCookieSettings(req);

        res.render('home/index', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    };
}


