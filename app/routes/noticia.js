module.exports = function(app){

		app.get('/noticia', function(req, res){

			//CONEXÃO COM O BD
			var connection = app.config.dbConnection();
			//acessando as models
			var noticiasModel = new app.app.models.NoticiasDAO(connection);
	
				noticiasModel.getNoticia( function(error, result){
					res.render("noticias/noticia", {noticia : result})
						
				});
		});
};