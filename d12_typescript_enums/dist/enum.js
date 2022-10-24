// enum Gender {
//     Woman = 'WOMAN' ,
//     Man = 'MAN',
//     Xyz = 'XYZ',
// }
//
// console.log(Gender.Woman);
var Gender;
(function (Gender) {
    Gender[Gender["Woman"] = 0] = "Woman";
    Gender[Gender["Man"] = 1] = "Man";
    Gender[Gender["Xyz"] = 2] = "Xyz";
})(Gender || (Gender = {}));
for (const key in Gender) {
    // console.log(key)
    if (Number.isNaN(Number(key))) {
        console.log(key);
    }
}
var ObjectType;
(function (ObjectType) {
    ObjectType[ObjectType["Restaurant"] = 0] = "Restaurant";
    ObjectType[ObjectType["Hotel"] = 1] = "Hotel";
    ObjectType[ObjectType["ToGo"] = 2] = "ToGo";
    ObjectType[ObjectType["DriveThru"] = 3] = "DriveThru";
    ObjectType[ObjectType["Shop"] = 4] = "Shop";
})(ObjectType || (ObjectType = {}));
for (const key in ObjectType) {
    // console.log(key)
    if (Number.isNaN(Number(key))) {
        console.log(key);
    }
}
/***
 * In general, enums are helpful if there are definite of fixed values for any one variable_
 *
 * for example list of userRole
 * for example types of supported algorithms for hashing passwords
 *
 * */
//# sourceMappingURL=enum.js.map