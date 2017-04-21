module.exports = function() {
    //importa o express
    var express = require("express");

    var app = express();

    //configurando o ejs
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    return app;
}
