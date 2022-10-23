class Animal {
    specieName: string;

    constructor(specieName: string) {
        this.specieName = specieName
    }
}

class Human extends Animal{
    name: string; //deklarowanie pól w klasach
    surname: string; //deklarowanie pól w klasach
    lifeEvents: string[] = []; //inicjalizacja pola
    isAlive: boolean = true;
    countryOfBirth = 'Poland';

    constructor(name: string, surname: string) {
        super('human');
        this.name = name;
        this.surname = surname;
    }
}

function greet(person: Human) {
    console.log(person.name);
}