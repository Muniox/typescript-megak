import { Router } from "express";

export const warriorRouter = Router();

warriorRouter

    .get('/add-form', (req, res) => {
        res.send('Formularz dodawania wojownika');
    })

    .post('/', (req, res) => {
        res.send('Dodawanie wojownika');
    })