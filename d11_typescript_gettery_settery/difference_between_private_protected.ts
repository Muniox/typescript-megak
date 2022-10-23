class Animal {
    constructor(
        // public - inne klasy mają dostęp
        // private - tylko ta klasa, w której jest zmienna
        // protected - tylko ta klasa, w której jest, ale również te klasy, które rozszerzają
        protected readonly specieName: string,
    ) {}
}

class Human extends Animal {
    private readonly lifeEventsList: string[] = [];
    private isAlive = true;

    constructor(
        private readonly name: string,
        private readonly surname: string,
    ) {
        super('human');
    }

    addLifeEvent(eventName: string): void {
        this.lifeEventsList.push(eventName);
    }

    // getLifeEvents(): string {
    //     return this.lifeEvents.filter(s => s !== 'Kompromitacja');
    // } //zamiast tego można:

    get lifeEvents(): string[] {
        return this.lifeEventsList.filter(s => s !== 'Kompromitacja');
    }

    // set lifeEvents(newEvenList: string[]) {
    //     this.lifeEventsList = newEvenList;
    // }

    get alive(): boolean {
        return this.isAlive;
    }

    set alive(newIsAlive: boolean) {
        if (!this.isAlive && newIsAlive) {
            throw new Error('You are not God!')
        }
        this.isAlive = newIsAlive
    }
}

const adolf = new Human('Adolf', 'H');
console.log(adolf.alive);
adolf.alive = false;
console.log(adolf.alive);
adolf.alive = true;


 // 16 min


// bartek.addLifeEvent('Urodziny');
// bartek.addLifeEvent('Kompromitacja');
// bartek.addLifeEvent('Nowe życie');
// // bartek.getLifeEvents() wywołanie metody
// bartek.lifeEvents //wywołanie właściwości dzięki get jest o wiele fajniejsze
//
// bartek.lifeEvents.push('Abc'); //zadziała, ale zniknie, ponieważ filter zwraca nową tablicę, poza tym mam od tego metodę addLifeEvent
//
// //możemy zrobić pętlę dzięki temu, że jest to teraz właściwość
// for (const event of bartek.lifeEvents) {
//     console.log(event);
// }