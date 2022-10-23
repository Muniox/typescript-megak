//Nie zmieniaj poniższego kodu OPRÓCZ dodawania odpowiednich typów
class User {
    constructor(name) {
        this.name = name;
    }
}
const json = '{"name":"Jan"}';
const { name: firstName } = JSON.parse(json);
let user = firstName === '' ? '' : `User ${firstName}`;
if (firstName !== '') {
    user = new User(firstName);
}
console.log(user);
//# sourceMappingURL=zadanie3.js.map