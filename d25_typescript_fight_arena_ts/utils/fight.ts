import { WarriorRecord } from "../records/warrior.record";

export const fight = (warrior1: WarriorRecord, warrior2: WarriorRecord): {
    log: string[],
    winner: WarriorRecord;
} => {
    const log: string[] = [];

    const warrior1Obj = {
        hp: warrior1.stamina * 10,
        dp: warrior1.defense,
        warrior: warrior1
    };

    const warrior2Obj = {
        hp: warrior2.stamina * 10,
        dp: warrior2.defense,
        warrior: warrior2
    };

    let attacker = warrior1Obj;
    let defender = warrior2Obj;

    do {
        const attackStrength = attacker.warrior.power
        log.push(`${attacker.warrior.name} zaatakuje ${defender.warrior.name} z siłą ${attackStrength}.`);
        //DP: 5, HP: 5, attackStrength = 7

        if (defender.dp + defender.warrior.agility > attackStrength){
            defender.dp -= attackStrength;
            log.push(`${defender.warrior.name} broni się przed ${attacker.warrior.name}.`);
            // DP: -2, HP: 5,

            if (defender.dp < 0) {
                defender.hp += defender.dp;
                log.push(`${attacker.warrior.name} przełamał obronę ${defender.warrior.name} zadając mu ${-defender.dp} obrażeń.`);
                //hp = 5 + (-2) czyli 5-2
            }
        } else {
            log.push(`${attacker.warrior.name} zadał ${attackStrength} obrażeń ${defender.warrior.name}.`);
            defender.hp -= attackStrength;
        }

        [defender,attacker] = [attacker,defender];

    } while (defender.hp > 0);

    const winner = defender.warrior;
    log.push(`${winner.name} zwyciężył!`);
    
    return {
        log,
        winner
    };
}