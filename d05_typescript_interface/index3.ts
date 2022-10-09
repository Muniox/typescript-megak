interface PersonJson {
    name: string;
    surname: string;
    age: number;
}

const json = '{"name":"Kuba","dateOfBirth":2000"}'

const person: PersonJson = JSON.parse(json);

console.log(person.surname); //undefined, a powinno nas chronić, wymagane surname!

/* klasy */

interface Human {
    name: string;
    surname: string;
    age: number;
}
interface HistoryClass {
    historyClass: string[];
}

class Human implements Human, HistoryClass {

    age: number;
    name: string;
    surname: string = '';
    historyClass: string[] = [];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const kuba = new Human('Kuba', 122);
console.log(kuba);

interface HumanWithRole extends Human{
    position: string;
}

class User implements HumanWithRole {
    position: string;
    name: string;
    surname: string;
    age: number;
    historyClass: string[];

    constructor(position: string, name: string, surname: string, age: number, historyClass: string[]) {
        this.position = position;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.historyClass = historyClass;
    }
}

//zagnieżdźenie interfejsów

interface HistoryEntry {
    createdAt: Date;
    event: string;
}

interface HistoryEntry {
    historyEntry: HistoryEntry[];
}

class user implements Human, HistoryEntry {
    name: string;
    surname: string;
    age: number;
    historyClass: string[];
    historyEntry: HistoryEntry[];
    createdAt: Date;
    event: string;

    constructor(name: string, surname: string, age: number, historyClass: string[], historyEntry: HistoryEntry[]) {

    }
}
