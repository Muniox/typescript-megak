/* Rzutowanie */
/* Jest to zmiana jednego typu na drugi */
const s = 'Hello, World'; //string

const num = Number(s); //number

const bool = Boolean(s); //boolean

//=========================
const json = '123';

// const data = JSON.parse(json) as number;
const data: number = JSON.parse(json) as number;

console.log(data, typeof data);

/* Interfejs */
// określenie struktury danych

interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
    greet?: () => void; //lub greet?(): void
}

const personA: Person = {
    name: "Bartek",
    age: 123,
    isDeveloper: true,
    greet() {
        console.log(`Hello, ${this.name}`)
    }
}

// const personB: Person = {
//     firstName: "Kuba",
//     age: "123",
//     isDeveloper: "Tak",
// }
//
// const personC: Person = {
//     firstName: "Kuba",
//     age: 123,
//     isDeveloper: false,
// }

function greet(person: Person) {
    console.log(`Hello, ${person.name}`)
}

greet(personA);
greet({
    name: 'pawel',
    age: 21,
    isDeveloper: true,
})


console.log((new Date()).getFullYear())

function dateOfBirth({age}: Person):number {
    const date = (new Date()).getFullYear() - age
    console.log(date)
    return date;
}

dateOfBirth(personA)