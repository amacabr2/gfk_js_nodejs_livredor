let mysql      = require('mysql');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'amacabr2',
    password : 'sub@bg10',
    database : 'gfk_livre_or_nodejs'
});

connection.connect();

module.exports = connection;