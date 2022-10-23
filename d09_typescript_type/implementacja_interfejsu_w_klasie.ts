interface Person {
    name: string;
    surname: string;
}

class Human implements Person {

    name: string;
    surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
}

function greet(person: Person) {
    console.log(person.name);
}