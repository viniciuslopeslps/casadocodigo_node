//importanto bibliotecas
var app = require('./config/express')();
var rotasProcutos = require('./app/routes/produtos')(app);



// subindo o servidor
app.listen(3000, function () {
    console.log("Rodando com Express");
});