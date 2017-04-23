//importa o express
var express = require("express");
//biblioteca de autoload de aquivos (serve para nao precisa usar o require)
var load = require('express-load');

module.exports = function() {

    var app = express();

    //configurando o ejs
    app.set('view engine', 'ejs');
    //diz onde está os arquivos de views
    app.set('views', './app/views');

    // configuracao do express load, tudo da pasta routes vai ser carregado automaticamente
     load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
}
