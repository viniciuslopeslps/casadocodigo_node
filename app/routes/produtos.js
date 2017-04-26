
module.exports = function (app) {
    //rotas para nodejs
    app.get('/produtos', function (req, res) {
        var connection = new app.infra.connectionFactory();
        var produtosDao = new app.infra.ProdutosDAO(connection);

        produtosDao.lista(function (err, resultados) {
            res.render('produtos/lista', { lista: resultados });
        });

        connection.end();
    });

    app.get('/produtos/form', function (req, res) {
        res.render('produtos/form')
    });

    app.post('/produtos', function (req, res) {
        var connection = new app.infra.connectionFactory();
        var produtosDao = new app.infra.ProdutosDAO(connection);
        var produto = req.body;
        console.log(produto);
        produtosDao.salva(produto, function (erros, resultado) {
            res.redirect('/produtos');
        });
    });
}