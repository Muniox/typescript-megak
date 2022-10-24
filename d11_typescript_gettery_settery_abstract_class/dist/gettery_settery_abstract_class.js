class Animal {
    constructor(
    // public - inne klasy mają dostęp
    // private - tylko ta klasa, w której jest zmienna
    // protected - tylko ta klasa, w której jest, ale również te klasy, które rozszerzają
    specieName) {
        this.specieName = specieName;
    }
}
// const duck = new Animal('duck'); // teraz chcemy zrobić, jeśli chcesz mieć kaczki musisz rozszerzyć klasę animal (klasę abstrakcyjną)
class duck extends Animal {
}
class Human extends Animal {
    constructor(name, surname) {
        super('human');
        this.name = name;
        this.surname = surname;
        this.lifeEventsList = [];
        this.isAlive = true;
    }
    addLifeEvent(eventName) {
        this.lifeEventsList.push(eventName);
    }
    // getLifeEvents(): string {
    //     return this.lifeEvents.filter(s => s !== 'Kompromitacja');
    // } //zamiast tego można:
    get lifeEvents() {
        return this.lifeEventsList.filter(s => s !== 'Kompromitacja');
    }
    // set lifeEvents(newEvenList: string[]) {
    //     this.lifeEventsList = newEvenList;
    // }
    get alive() {
        return this.isAlive;
    }
    set alive(newIsAlive) {
        if (!this.isAlive && newIsAlive) {
            throw new Error('You are not God!');
        }
        this.isAlive = newIsAlive;
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
//# sourceMappingURL=gettery_settery_abstract_class.js.map