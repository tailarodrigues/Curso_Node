module.exports = function(app){

		app.get('/noticia', function(req, res){

			//CONEXÃO COM O BD
			var connection = app.config.dbConnection();
	
				connection.query('SELECT * FROM noticias WHERE id_noticia = 2',function(error, result){

					res.render("noticias/noticia", {noticia : result});
		
				});
		});
};