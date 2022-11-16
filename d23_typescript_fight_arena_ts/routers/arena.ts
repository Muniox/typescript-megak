import { Router } from "express";
import { resolve } from "path";

export const arenaRouter = Router();

arenaRouter

    .get('/fight-form', (req, res) => {
        res.render('arena/fight-form');
    })  

    .post('/fight', (req, res) => {
        res.render('arena/fight');
    })  //POST arena fight