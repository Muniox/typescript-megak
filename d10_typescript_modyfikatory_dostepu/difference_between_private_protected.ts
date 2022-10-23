class Animal {
    constructor(
        // public - inne klasy mają dostęp
        // private - tylko ta klasa, w której jest zmienna
        // protected - tylko ta klasa, w której jest, ale również te klasy, które rozszerzają
        protected readonly specieName: string,
    ) {}
}

class Human extends Animal {
    private readonly lifeEvents: string[] = [];
    private isAlive = true;

    constructor(
        public readonly name: string,
        public readonly surname: string,
    ) {
        super('human');
    }

    addLifeEvent(eventName: string): void {
        this.lifeEvents.push(eventName);
        this.checkPulse();
    }

    // getLifeEvents(): string {
    //     return this.lifeEvents.filter(s => s !== 'Kompromitacja');
    // } //zamiast tego można:

    get lifeEventsList(): string[] {
        return this.lifeEvents.filter(s => s !== 'Kompromitacja');
    }

    foobar() :string {
        return this.specieName;
    }

    //metody też mogą być prywatne
    private checkPulse() {

    }
}

const bartek = new Human('Bartek', 'B');
bartek.addLifeEvent('Urodziny');
bartek.addLifeEvent('Kompromitacja');
bartek.addLifeEvent('Nowe życie');
// bartek.getLifeEvents() wywołanie metody
bartek.lifeEventsList //wywołanie właściwości dzięki get jest o wiele fajniejsze