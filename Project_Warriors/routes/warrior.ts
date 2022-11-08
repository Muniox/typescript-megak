import { Router, Request, Response } from "express";
import { WarriorRecord } from "../records/warrior.record"
export const warriorRoute = Router();

warriorRoute
    .post('/create', async (req: Request, res: Response) => {
        //walidacja uuid z frontu
        const warrior = new WarriorRecord(req.body);
            await warrior.insert();
            res.send('ok')
    })

    .get('/:id', (req: Request, res: Response) => {

    })