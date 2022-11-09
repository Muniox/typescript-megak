import { Router, Request, Response } from "express";
import { WarriorRecord } from "../records/warrior.record"
export const warriorRoute = Router();

warriorRoute
    .post('/create', async (req: Request, res: Response) => {
        //walidacja uuid z frontu
        const warrior = new WarriorRecord(req.body);
            await warrior.insert();
            res.json('Warrior was saved in database');
    })

    .delete('/delete/:id', (req: Request, res: Response) => {

    })

    .get('/:id', async (req: Request, res: Response) => {
        console.log(req.params.id)
        console.log(await WarriorRecord.find(req.params.id))
        res.send('ok');
    })