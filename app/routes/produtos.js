
module.exports = function (app) {
    //rotas para nodejs
    app.get('/produtos', function (req, res) {
        var connection = new app.infra.connectionFactory();
        var produtosBd = new app.infra.ProdutosDAO(connection);

        produtosBd.lista(function (err, resultados) {
            res.render('produtos/lista', { lista: resultados });
        });

        connection.end();
    });
}