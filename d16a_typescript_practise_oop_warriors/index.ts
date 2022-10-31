import { Arena } from "./libs/arena"
import { Warrior } from "./libs/warrior"

const fighter1 = new Warrior('Baba Yaga', 9, 120);
const fighter2 = new Warrior('Yanosik', 7, 140);

const arena = new Arena(fighter1, fighter2);

let winner: Warrior | null;
do {
  winner = arena.fight();
} while (winner === null);

winner.levelUp();
console.log(winner.name, 'is a winner!');