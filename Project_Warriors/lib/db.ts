import * as mysql from "mysql2/promise";

 export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'warriorsDB',
    connectionLimit: 10,
    decimalNumbers: true,
    password: '<3database^_^',
    namedPlaceholders: true
});

