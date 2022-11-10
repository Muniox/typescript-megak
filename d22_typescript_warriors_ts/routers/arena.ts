import { Router } from "express";
import { resolve } from "path";

export const arenaRouter = Router();

arenaRouter

    .get('/fight-form', (req, res) => {
        res.send('Formularz walki');
    })  

    .post('/fight', (req, res) => {
        res.send('Przeprowadzenie walki');
    })  //POST arena fight