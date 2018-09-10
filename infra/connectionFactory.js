var mysql = require('mysql')

function createConnection() {

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'e_commerce'
    });
}

module.exports = createConnection;