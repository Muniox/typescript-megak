class Animal {
    constructor(
        public readonly specieName: string
    ) {}
}

class Human extends Animal{
    lifeEvents: string[] = []; //inicjalizacja pola
    isAlive: boolean = true;

    constructor(
        public readonly name: string, //read only sprawia, że nie możemy nadpisać name
        public readonly surname: string
    ) {
        super('human');

    }
}

const bartek = new Human('Bartek', 'B.');
bartek.name = 'krzysztof';