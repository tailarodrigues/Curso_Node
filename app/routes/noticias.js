//var dbConnection = require('../../config/dbConnection');
module.exports = function(app){

		app.get('/noticias', function(req, res){

			var connection = app.config.dbConnection();
			//para conseguit acessar o models
			var noticiasModel = app.app.models.noticiasModel;

			noticiasModel.getNoticias(connection, function(error, result){
				res.render("noticias/noticias", {noticias : result}
			);
		});
	});
};