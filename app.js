//importanto bibliotecas
var app = require('./config/express')();


// subindo o servidor
app.listen(3000, function () {
    console.log("Rodando com Express");
});