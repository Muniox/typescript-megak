import { Warrior } from "./warrior";

enum ActiveWarrior {
    First = 1,
    Second = 2
}

export class Arena {
  activeWarrior: ActiveWarrior = ActiveWarrior.Second;
    constructor(
        public warrior1: Warrior,
        public warrior2: Warrior
    ) {}

  fight(): Warrior | null {
    const attacker = this.activeWarrior === ActiveWarrior.First ? this.warrior1 : this.warrior2;
    const attacked = this.activeWarrior === ActiveWarrior.First ? this.warrior2 : this.warrior1;

    const attackingHitPoints = attacker.hitPionts;
    const attackedOldHp = attacked.hp;
    const attackedNewHp = attackedOldHp - attackingHitPoints;

    console.log(attacker.name, 'is attacking', attacked.name, 'and how he has', attackedNewHp, 'hp');

    attacked.hp = attackedNewHp;

    this.activeWarrior = this.activeWarrior === ActiveWarrior.First ? ActiveWarrior.Second : ActiveWarrior.First;
    /**
      if (this.activeWarrior === 1) {
        this.activeWarrior = 2;
      } else {
        this.activeWarrior = 1;
      }
     */

    if (attackedNewHp <= 0) {
      console.log(attacked.name, 'goes to Valhalla');
      return attacker;
    }

    return null;
  }
}