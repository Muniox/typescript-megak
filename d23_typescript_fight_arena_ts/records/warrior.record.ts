import {ValidationError} from "../utils/error";

export class WarriorRecord {
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
    constructor(obj: WarriorRecord) {
        const {id, stamina, defense, name, power, agility, wins} = obj;

        const sum = [stamina, defense, power, agility].reduce((prev, curr) => prev + curr , 0);

        if (sum !== 10) {
            throw new ValidationError(`Suma wszystkich statystyk musi wynosić 10. Aktualnie jest to ${sum}.`)
        }

        if (name.length < 3 || name.length > 50) {
            throw new ValidationError(`imię musi posiadać od 3 do 50 znaków. Aktualnie jest to ${name.length}`)
        }

        this.id = id;
        this.name = name;
        this.stamina = stamina;
        this.defense = defense;
        this.power = power;
        this.agility = agility;
        this.wins = wins;
    }

    async insert() {

    }

    async update() {

    }

    static async getOne(id: string) {

    }

    static async listAll() {

    }

    static async listTop(topCount: number) {

    }
}