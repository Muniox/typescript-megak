class Animal {
    constructor(
    // public - inne klasy mają dostęp
    // private - tylko ta klasa, w której jest zmienna
    // protected - tylko ta klasa, w której jest, ale również te klasy, które rozszerzają
    specieName) {
        this.specieName = specieName;
    }
}
class Human extends Animal {
    constructor(name, surname) {
        super('human');
        this.name = name;
        this.surname = surname;
        this.lifeEvents = [];
        this.isAlive = true;
    }
    addLifeEvent(eventName) {
        this.lifeEvents.push(eventName);
        this.checkPulse();
    }
    // getLifeEvents(): string {
    //     return this.lifeEvents.filter(s => s !== 'Kompromitacja');
    // } //zamiast tego można:
    get lifeEventsList() {
        return this.lifeEvents.filter(s => s !== 'Kompromitacja');
    }
    foobar() {
        return this.specieName;
    }
    //metody też mogą być prywatne
    checkPulse() {
    }
}
const bartek = new Human('Bartek', 'B');
bartek.addLifeEvent('Urodziny');
bartek.addLifeEvent('Kompromitacja');
bartek.addLifeEvent('Nowe życie');
// bartek.getLifeEvents() wywołanie metody
bartek.lifeEventsList; //wywołanie właściwości dzięki get jest o wiele fajniejsze
//# sourceMappingURL=difference_between_private_protected.js.map