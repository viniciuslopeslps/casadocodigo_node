//importa o express
var express = require("express");
//biblioteca de autoload de aquivos (serve para nao precisa usar o require)
var load = require('express-load');

//biblioteca que pega os dados da requisicao (usado com o express)
var bodyParser = require('body-parser');

module.exports = function () {

    var app = express();

    //configurando o ejs
    app.set('view engine', 'ejs');
    //diz onde está os arquivos de views
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({extended: true}));

    // configuracao do express load, tudo da pasta routes vai ser carregado automaticamente
    load('routes', { cwd: 'app' })
        .then('infra')
        .into(app);

    return app;
}
