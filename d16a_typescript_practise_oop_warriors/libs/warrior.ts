export class Warrior {
    constructor(
        private _name: string,
        private _hitPoints: number,
        private _hp: number
    ) { }

    get name() {
        return this._name;
    }
    
    get hitPionts() {
        return this._hitPoints;
    }

    // set hitPionts(value: number) {
    //     this._hitPoints = value;
    // }

    get hp() {
        return this._hp
    }

    set hp(value: number) {
        this._hp = value
    }

  levelUp(): void {
    this.hitPoints *= 1.1;
    this.hp *= 1.1;
  }
}