//zmiany w pliku tsconfig, aby używać dekoratorów
//Dekoratory to są takie kawałki kodu, które mogą nam urozmaicić czy rozszerzyć działanie jednej z trzech rzeczy.
// Pierwszą z tych rzeczy jest to, że to będzie cała klasa, albo druga rzecz, to są metody, a trzecia to właściwości.
// Wszystkie zawsze można poznać po małpce.
class UserTest {
    constructor(userName, userGender) {
        this.userName = userName;
        this.userGender = userGender;
    }
    get name() {
        return this.userName;
    }
    set name(newName) {
        if (!['Bartek', 'Kuba'].includes(newName)) {
        }
    }
}
const foobar = new UserTest('Bartek', 'man');
// foobar.userName = 'Kuba';
// foobar.userGender = 'helikopter bojowy';
console.log(foobar.name);
//# sourceMappingURL=index2.js.map