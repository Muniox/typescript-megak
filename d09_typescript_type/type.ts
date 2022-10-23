type NumOrStr = number | string

const abc: NumOrStr = 123;
const xyz: NumOrStr = 123;

function sum(a: NumOrStr, b: NumOrStr):NumOrStr {
    return (a as string) + (b as string);
}



