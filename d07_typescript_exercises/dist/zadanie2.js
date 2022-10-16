/* Zadanie 2 */
const data = [
    {
        name: 'Anna',
        points: 1000,
    },
    {
        name: 'Krzysztof',
        points: 500,
    },
    {
        name: 'Ola',
        points: 0,
    },
    {
        name: "Marek",
        points: 0,
    },
];
/* moje rozwiązanie: */
// const incPoints = (obj: Person): void => {
//     obj.points += 100;
// }
/* rozwiązanie kuby: */
const incPoints = (obj) => {
    obj.points++;
};
/* moje rozwiązanie: */
// const totalPoints = (ar: Person[]): number => {
//     let counter: number = 0;
//     ar.map(obj => counter += obj.points);
//     return counter;
// }
/* rozwiązanie kuby: */
const totalPoints = (ar) => {
    return ar.reduce((prev, curr) => prev + curr.points, 0);
};
/* moje rozwiązanie: */
// const personWithMostPoints = (ar: Person[]): Person => {
//     const myArray: number[] = [];
//     ar.map(obj => myArray.push(obj.points));
//     const value: number = Math.max(...myArray);
//     const person = ar.filter(obj => obj.points === value);
//     return person[0] === null? {name: 'none', points: 0} : person[0]
// }
/* rozwiązanie kuby: */
// const personWithMostPoints = (ar: Person[]): Person | null => {
//     if (ar.length === 0) {
//         return null
//     }
//     return ar.reduce((prev,curr) => {
//         return prev.points < curr.points? curr : prev
//     });
// }
/* Najszybsze */
const personWithMostPoints = (ar) => {
    var _a;
    return (_a = [...ar].sort((a, b) => b.points - a.points)[0]) !== null && _a !== void 0 ? _a : null;
};
console.log(personWithMostPoints(data));
console.log(totalPoints(data));
incPoints(data[0]);
//# sourceMappingURL=zadanie2.js.map