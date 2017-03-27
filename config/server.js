var express  = require('express');

//para que não precise declarar todos os diretorios no arquivo app.js
var consign = require('consign');


var app = express();
	app.set('view engine', 'ejs');

	app.set('views','./app/views');


consign()
.include('app/routes') //o consign me possibilita incluir mais rotas, lembrnado que preciso colocar a extensão do arquivo.
.then('config/dbConnection.js')
.into(app);


module.exports = app;
