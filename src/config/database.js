const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "todoapp",
    port: 3306
});

module.exports = pool;