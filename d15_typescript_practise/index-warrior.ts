class Warrior {
  constructor(private name: string, private hitPoints: number, private hp: number) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.hp = hp;
  }

  set wariorHp(hp: number) {
    this.hp = hp;
  }

  get wariorHp() {
    return this.hp;
  }

  get wariorHitPoints() {
    return this.hitPoints;
  }

  get wariorName() {
    return this.name;
  }

  levelUp() {
    this.hitPoints *= 1.1;
    this.hp *= 1.1;
  }
}

class Arena {
  activeWarrior: number;
  constructor(public warrior1: Warrior, public warrior2: Warrior) {
    if (!(warrior1 instanceof Warrior)) {
      throw new Error('warrior1 must be an instance of Warrior class!');
    }

    if (!(warrior2 instanceof Warrior)) {
      throw new Error('warrior2 must be an instance of Warrior class!');
    }

    this.warrior1 = warrior1;
    this.warrior2 = warrior2;
    this.activeWarrior = 2;
  }

  fight() {
    const attacker = this.activeWarrior === 1 ? this.warrior1 : this.warrior2;
    const attacked = this.activeWarrior === 1 ? this.warrior2 : this.warrior1;

    const attackingHitPoints = attacker.wariorHitPoints;
    const attackedOldHp = attacked.wariorHp;
    const attackedNewHp = attackedOldHp - attackingHitPoints;

    console.log(attacker.wariorName, 'is attacking', attacked.wariorName, 'and how he has', attackedNewHp, 'hp');

    attacked.wariorHp = attackedNewHp;

    this.activeWarrior = this.activeWarrior === 1 ? 2 : 1;
    /**
      if (this.activeWarrior === 1) {
        this.activeWarrior = 2;
      } else {
        this.activeWarrior = 1;
      }
     */

    if (attackedNewHp <= 0) {
      console.log(attacked.wariorName, 'goes to Valhalla');
      return attacker;
    }

    return null;
  }
}

const fighter1 = new Warrior('Baba Yaga', 9, 120);
const fighter2 = new Warrior('Yanosik', 7, 140);

const arena = new Arena(fighter1, fighter2);

let winner: Warrior | null;
do {
  winner = arena.fight();
} while (winner === null);

winner.levelUp();
console.log(winner.wariorName, 'is a winner!');