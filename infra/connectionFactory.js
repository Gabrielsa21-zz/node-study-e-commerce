var mysql = require('mysql')

module.exports = function createConnection() {

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'e_commerce'
    });
}
