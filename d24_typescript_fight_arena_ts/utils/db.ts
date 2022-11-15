import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megak_arena',
    connectionLimit: 10,
    decimalNumbers: true,
    password: '<3database^_^',
    namedPlaceholders: true
});