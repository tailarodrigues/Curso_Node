module.exports = function(app){

	app.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia", {validacao : {}, noticias:{}});
	});

	app.post('/noticias/salvar', function(req, res){
		var noticias = req.body;

		// Instanciando todos os campos cadastrando no form_add_noticia para validação 
		
		req.assert('titulo', 'Titulo é obrigatorio').notEmpty();
		req.assert('resumo', 'Resumo é obrigatorio').notEmpty();
		req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('autor', 'Autor é obrigatorio').notEmpty();
		req.assert('data_noticia', 'Data é obrigatorio').notEmpty().isDate({format : 'YYYY-MM-DD'});
		req.assert('noticia', 'Noticia é obrigatorio').notEmpty();

		var erros = req.validationErrors();

		console.log(erros);

		//Se não atender as requisições acima ele vai voltar para a tela inicial de cadastro
		if (erros) {

			res.render("admin/form_add_noticia", {validacao : erros, noticias : noticias});
			return;
		}

		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.salvarNoticia(noticias, function(error, result){
			//redirect esta voltando a pagina para alguma pagina escolhida, evitando salvar mais de uma vez no BD
			res.redirect('/noticias');
			//este comando fazia o salvar dos dados
			// res.render("noticias/noticias", {noticias : result})
		});

	});	

};