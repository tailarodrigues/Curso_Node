module.exports = function(app){

	app.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia");
	});

	app.post('/noticias/salvar', function(req, res){
		var noticias = req.body;

		var connection = app.config.dbConnection();
		var noticiasModel = app.app.models.noticiasModel;

		noticiasModel.salvarNoticia(noticias, connection, function(error, result){
			//redirect esta voltando a pagina para alguma pagina escolhida, evitando salvar mais de uma vez no BD
			res.redirect('/noticias');
			//este comando fazia o salvar dos dados
			// res.render("noticias/noticias", {noticias : result})
		});

	});	

};