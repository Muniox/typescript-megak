import { Router } from "express";
import { ValidationError } from "../utils/error";
import { WarriorRecord } from "../records/warrior.record";

export const warriorRouter = Router();

warriorRouter

    .get('/add-form', (req, res) => {
        res.render('warrior/add-form');
    })

    .post('/', async (req, res) => {
        if (await WarriorRecord.isNameTaken(req.body.name)) {
            throw new ValidationError(`Imię ${req.body.name} jest zajęte. Wybierz inne.`);
        }
        const warrior = new WarriorRecord({
            ...req.body,
            power: Number(req.body.power),
            defense: Number(req.body.defense),
            stamina: Number(req.body.stamina),
            agility: Number(req.body.agility),
        });

        const id = await warrior.insert();

        res.render('warrior/warrior-added', {
            id,
            name: warrior.name,
        });
    })