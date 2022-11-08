import {pool} from "../utils/db"
import { v4 as uuid } from "uuid";
import { Warrior } from "../types/warrior";
import { ValidationError } from "../utils/error";

export class WarriorRecord {
    private id: string
    private name: string
    private strength: number
    private defense: number
    private durability: number
    private agility: number

    constructor(obj: Warrior) {
        this.valid(obj);
        this.id = obj.id;
        this.name = obj.name;
        this.strength = obj.strength;
        this.defense = obj.defense;
        this.durability = obj.durability;
        this.agility = obj.agility;
    }

    private valid(obj: Warrior) {
        if ((obj.strength + obj.defense + obj.durability + obj.agility) > 10) {
            throw new ValidationError('You can give only 10 points total');
        }

        if (obj.strength < 1 || obj.defense < 1 || obj.durability < 1 || obj.agility < 1) {
            throw new ValidationError('You should invest at least 1 point in each stat');
        }

        // if (this.id === ) // sprawdzic cz id istnieje
    }
    
    async insert() {
        this.id = this.id ?? uuid();

        await pool.execute('INSERT INTO `warriors` values(:id, :name, :strength, :defense, :durability, :agility)', {
            id: this.id,
            name: this.name,
            strength: this.strength,
            defense: this.defense,
            durability: this.durability,
            agility: this.agility
        });

        return this.id;
    }

    async delete() {
        if (!this.id) {
            throw new ValidationError('Warrior by that name don\'t exist');
        }

        await pool.execute('DELETE FROM `warrior` WHERE `warriorId` = :id', {
            id: this.id
        });
    }

    async find(id: string) {
        const [result] = await pool.execute('SELECT * FROM `warrior` where `warriorId` = :id', {
            id: id
        });
        return result
    }
}