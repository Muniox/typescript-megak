/* Rzutowanie */
/* Jest to zmiana jednego typu na drugi */
var s = 'Hello, World'; //string
var num = Number(s); //number
var bool = Boolean(s); //boolean
//=========================
var json = '123';
// const data = JSON.parse(json) as number;
var data = JSON.parse(json);
console.log(data, typeof data);
var personA = {
    name: "Bartek",
    age: 123,
    isDeveloper: true,
    greet: function () {
        console.log("Hello, ".concat(this.name));
    }
};
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
function greet(person) {
    console.log("Hello, ".concat(person.name));
}
greet(personA);
greet({
    name: 'pawel',
    age: 21,
    isDeveloper: true
});
console.log((new Date()).getFullYear());
function dateOfBirth(person) {
    var date = (new Date()).getFullYear() - person.age;
    console.log(date);
    return date;
}
dateOfBirth(personA);
