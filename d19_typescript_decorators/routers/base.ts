import { Router} from 'express';
import { RestDecoratorInfo } from "../types/rest-decorator";
import { CookieMakerApp } from "../index";

export class BaseRouter {
    public readonly router: Router = Router(); 

    constructor(
        protected cmapp: CookieMakerApp
    ) {
        this.setUpRoutes();
    }

    private setUpRoutes(): void {
        console.log(Reflect.get(this, '_restApiCalls'));
        const ar: RestDecoratorInfo[] = Reflect.get(this, '_restApiCalls') ?? [];
        // this.router.get('/', this.home);

        for (const apiOp of ar) {
            this.router[apiOp.httpMethod](apiOp.path, (...args) => (this as any)[apiOp.propertyName](...args));
        }
    }
}