var mysql = require('mysql');

var connMySQL = function (){

	//estrutura JASON para fazer a conexão com o banco de dados
	console.log('Conexão com o BD estabelecida');
		return  mysql.createConnection({
			host : 'localhost', 
			user : 'root',
			password : 'admin',
			database : 'portal_noticias'
	});

};
module.exports = function(app){
	console.log('O AutoLoad carregou o modulo de conexão com o BD');
	return connMySQL;


};