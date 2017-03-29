var express  = require('express');

//para que não precise declarar todos os diretorios no arquivo app.js
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
	app.set('view engine', 'ejs');
	app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended: true}));

consign()
.include('app/routes') //o consign me possibilita incluir mais rotas, lembrnado que preciso colocar a extensão do arquivo.
.then('config/dbConnection.js')
.then('app/models')
.into(app);


module.exports = app;
