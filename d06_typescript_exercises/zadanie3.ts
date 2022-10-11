//Nie zmieniaj poniższego kodu OPRÓCZ dodawania odpowiednich typów

interface User {
    name: string
}

class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const json: string = '{"name":"Jan"}';
const {name: firstName}: User = JSON.parse(json);
let user: string | User = firstName === '' ? '' : `User ${firstName}`;

if (firstName !== '') {
    user = new User(firstName);
}

console.log(user);