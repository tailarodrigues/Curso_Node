var mysql = require('mysql');

module.exports = function(app){

		//estrutura JASON para fazer a conexão com o banco dd dados
			return  mysql.createConnection({
				host : 'localhost', 
				user : 'root',
				password : 'admin',
				database : 'portal_noticias'

		});
};