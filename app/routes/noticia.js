module.exports = function(app){

		app.get('/noticia', function(req, res){

			//CONEXÃO COM O BD
			var connection = app.config.dbConnection();
			//acessando as models
			var noticiasModel = app.app.models.noticiasModel;
	
				noticiasModel.getNoticia(connection, function(error, result){
					res.render("noticias/noticia", {noticia : result})
						
				});
		});
};