var mysql = require('mysql');

var createDBConnection= function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'casadocodigo_node'
    });
};

//criando um wrapper
module.exports = function(){
    return createDBConnection;
};