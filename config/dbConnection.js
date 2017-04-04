var mysql = require('mysql');

var connMySQL = function (){

	//estrutura JASON para fazer a conexão com o banco de dadosS
		console.log('Conexao com BD estabelecida');
		return  mysql.createConnection({
			host : 'localhost', 
			user : 'root',
			password : 'admin',
			database : 'portal_noticias'
	});

};
module.exports = function(app){
	return connMySQL;


};