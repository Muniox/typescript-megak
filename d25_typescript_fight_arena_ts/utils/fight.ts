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

        //DP: 5, HP: 5, attackStrength = 7

        if (defender.dp + defender.warrior.agility > attackStrength){
            defender.dp -= attackStrength;

            // DP: -2, HP: 5,

            if (defender.dp < 0) {
                defender.hp += defender.dp;

                //hp = 5 + (-2) czyli 5-2
            }
        }

        [defender,attacker] = [attacker,defender];

    } while (defender.hp > 0);

    const winner = defender.warrior;

    return {
        log,
        winner
    };
}