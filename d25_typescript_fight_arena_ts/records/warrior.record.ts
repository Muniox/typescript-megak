import {v4 as uuid} from "uuid";
import {ValidationError} from "../utils/error";
import {pool} from "../utils/db"
import {FieldPacket} from "mysql2";

export interface WarriorEntity {
    id?: string;
    readonly name: string;
    readonly power: number;
    readonly defense: number;
    readonly stamina: number;
    readonly agility: number;
    wins?: number;
}

type WarriorRecordResults = [WarriorRecord[], FieldPacket[]];

export class WarriorRecord implements WarriorEntity {
    public id?: string;
    /**
     * Name is always unique
     * */
    public readonly name: string;
    public readonly power: number;
    public readonly defense: number;
    public readonly stamina: number;
    public readonly agility: number;
    public wins?: number;

    //name nie jest sprawdzane w klasie, ponieważ konstruktor nie jest asynchroniczny
    constructor(obj: WarriorEntity) { //lub (obj: Omit<WarriorRecord, 'insert' | 'update'>)
        const {id, stamina, defense, name, power, agility, wins} = obj;

        const stats = [stamina, defense, power, agility];
        const sum = stats.reduce((prev, curr) => prev + curr , 0);

        for (const stat of stats) {
           if (stat < 1) {
               throw new ValidationError(`Każda ze statystyk musi wynosić min. 1. Ta zasada została złamana.`)
           }
        }

        if (sum !== 10) {
            throw new ValidationError(`Suma wszystkich statystyk musi wynosić 10. Aktualnie jest to ${sum}.`)
        }

        if (name.length < 3 || name.length > 50) {
            throw new ValidationError(`imię musi posiadać od 3 do 50 znaków. Aktualnie jest to ${name.length}`)
        }

        this.id = id ?? uuid();
        this.name = name;
        this.stamina = stamina;
        this.defense = defense;
        this.power = power;
        this.agility = agility;
        this.wins = wins ?? 0;
    }

    async insert(): Promise<string> {

        await pool.execute("INSERT INTO `warriors` VALUES ( :id, :name, :power, :defense, :stamina, :agility, :wins)", {
            id: this.id,
            name: this.name,
            power: this.power,
            defense: this.defense,
            stamina: this.stamina,
            agility: this.agility,
            wins: this.wins
        });

        return this.id;
    }

    async update(): Promise<void> {
        await pool.execute('UPDATE `warriors` SET `wins` = :wins WHERE id =:id', {
            wins: this.wins,
            id: this.id
        })
    };

    static async getOne(id: string): Promise<WarriorRecord | null> {
        const [results] = await pool.execute('SELECT * FROM `warriors` WHERE `id` = :id', {
            id,
        }) as WarriorRecordResults;

        return results.length === 0 ? null : new WarriorRecord(results[0]);
    };

    static async listAll(): Promise<WarriorRecord[]> {
        const [results] = await pool.execute('SELECT * FROM `warriors`') as WarriorRecordResults;

        return results.map((obj) => new WarriorRecord(obj));
    };

    static async listTop(topCount: number): Promise<WarriorRecord[]> {
        const [results] = await pool.execute('SELECT * FROM `warriors` ORDER BY `wins` DESC LIMIT :topCount', {
            topCount: topCount,
        }) as WarriorRecordResults;

        return results.map((obj) => new WarriorRecord(obj));
    };

    static async isNameTaken(name: string): Promise<Boolean> {
        const [result] = await pool.execute('SELECT * FROM `warriors` WHERE `name` = :name', {
            name,
        }) as WarriorRecordResults;
        
        return result.length > 0;
    }
}