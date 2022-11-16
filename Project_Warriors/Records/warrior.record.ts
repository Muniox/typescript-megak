import {pool} from "../utils/db"
import { v4 as uuid } from "uuid";
import { ValidationError } from "../utils/error";
import { FieldPacket, ResultSetHeader } from "mysql2"

type WarriorRecordResaultFind = [WarriorRecord[], FieldPacket[]];
type WarriorRecordResaultDelete = [ResultSetHeader, any]

export class WarriorRecord {
    //klasa musi posiadać takie same nazwy zmiennych jak wartość kolumn, żeby były przyjęte jako obiekt
    private warriorId: string
    private warriorName: string
    private warriorStrength: number
    private warriorDefense: number
    private warriorDurability: number
    private warriorAgility: number

    constructor(obj: WarriorRecord) {
        this.valid(obj);
        this.warriorId = obj.warriorId;
        this.warriorName = obj.warriorName;
        this.warriorStrength = obj.warriorStrength;
        this.warriorDefense = obj.warriorDefense;
        this.warriorDurability = obj.warriorDurability;
        this.warriorAgility = obj.warriorAgility;
    }

    private valid(obj: WarriorRecord) {
        if ((obj.warriorStrength + obj.warriorDefense + obj.warriorDurability + obj.warriorAgility) > 10) {
            throw new ValidationError('You can give only 10 points total');
        }

        if (obj.warriorStrength < 1 || obj.warriorDefense < 1 || obj.warriorDurability < 1 || obj.warriorAgility < 1) {
            throw new ValidationError('You should invest at least 1 point in each stat');
        }

    }
    
    async insert() {
        if (WarriorRecord.find(this.warriorId)) {
            throw new ValidationError('Warrior with that ID exist');
        }

        this.warriorId = this.warriorId ?? uuid();

        await pool.execute('INSERT INTO `warriors` values(:id, :name, :strength, :defense, :durability, :agility)', {
            id: this.warriorId,
            name: this.warriorName,
            strength: this.warriorStrength,
            defense: this.warriorDefense,
            durability: this.warriorDurability,
            agility: this.warriorAgility
        });

        return this.warriorId;
    }

    static async delete(id: string) {
        if (! (await WarriorRecord.find(id))) {
            throw new ValidationError('Warrior by that name don\'t exist');
        }
        const [result] = await pool.execute('DELETE FROM `warriors` WHERE `warriorId` = :id', {
            id: id
        }) as WarriorRecordResaultDelete;
        return result.affectedRows === 0 ? null : true       
    }

    static async find(id: string) {
        const [result] = await pool.execute('SELECT * FROM `warriors` WHERE `warriorId` = :id', {
            id: id
        }) as WarriorRecordResaultFind;
        return result.length === 0 ? null : new WarriorRecord(result[0]);
    }
}