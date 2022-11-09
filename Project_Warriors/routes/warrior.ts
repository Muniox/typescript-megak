import { Router, Request, Response } from "express";
import { WarriorRecord } from "../records/warrior.record"
export const warriorRoute = Router();

warriorRoute
    .post('/create', async (req: Request, res: Response) => {
        //TODO walidacja uuid przychodzącego z frontu
        const warrior = new WarriorRecord(req.body);
            await warrior.insert();
            res.json({
                message: "Warrior was saved in database"
            });
    })

    .delete('/delete/:id', async (req: Request, res: Response) => {
        const result = await WarriorRecord.delete(req.params.id)
        if(result){
            res.json({
                message: "warrior was deleted"
            });
        }
    })

    .get('/:id', async (req: Request, res: Response) => {
        res.json(WarriorRecord.find(req.params.id));
    })