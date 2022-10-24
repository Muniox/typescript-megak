// enum Gender {
//     Woman = 'WOMAN' ,
//     Man = 'MAN',
//     Xyz = 'XYZ',
// }
//
// console.log(Gender.Woman);

enum Gender {
    Woman,
    Man,
    Xyz,
}

for (const key in Gender) {
    // console.log(key)
    if(Number.isNaN(Number(key))) {
        console.log(key);
    }
}


enum ObjectType {
    Restaurant,
    Hotel,
    ToGo,
    DriveThru,
    Shop,
}

for (const key in ObjectType) {
    // console.log(key)
    if(Number.isNaN(Number(key))) {
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
