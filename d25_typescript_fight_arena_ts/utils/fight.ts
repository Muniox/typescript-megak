import { WarriorRecord } from "../records/warrior.record";

export const fight = (warrior1: WarriorRecord, warrior2: WarriorRecord): string[] => {
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
        if (defender.dp +)
    } while (warrior1Obj.hp > 0 && warrior2Obj.hp > 0);

    return log;
}