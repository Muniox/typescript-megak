class Human {
    constructor(
        public name: string, //domyślnie jest public, ale żeby skorzystać z automatycznego tworzenia należy z niego skorzystać
        public surname: string
    ) {

    }
}

function foobar(person: Human) {
    console.log(person.name);
}