// enum TwoNumbersSign {
//     Add = '+',
//     Subtract = '-',
//     Multiply = '*',
//     Divide = '/',
// }

enum TwoNumbersSign {
    Add,
    Subtract,
    Multiply,
    Divide,
}

interface TwoNumbersOperation {
    a: number | string;
    b: number | string;
    sign?: TwoNumbersSign;
}

// enum OneNumberSign {
//     Inc = '++',
//     Dec = '--',
// }

enum OneNumberSign {
    Inc,
    Dec,
}

interface OneNumberOperation {
    a: number | string;
    sign?: OneNumberSign;
}

type CorrectType = OneNumberOperation | TwoNumbersOperation

//nie modyfikuj w ogóle kodu poniżej — stwórz interfejs

const a: CorrectType = {
    a: 1,
    b: 2,
    sign: TwoNumbersSign.Add,
}
const b: CorrectType = {
    a: 1,
    b: 2,
}

const c: CorrectType = {
    a: '1',
    b: '2',
    sign: TwoNumbersSign.Subtract,
}


const d: CorrectType = {
    a: 1,
    sign: OneNumberSign.Inc,
};

//Zmiana: zmień teraz typ, tak aby znak mógł być tylko +, -, * lub /

//Zmiana: stwórz dokładne typy tak, by w przypadku posiadania tylko 1 danej (a) można było na niej wykonać
// ++ i --, ale nie w przypadku dwóch na odwrót

//Zmień program w taki sposób, aby do operacji używało enumów, a nie stringów