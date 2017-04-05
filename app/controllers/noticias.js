module.exports.noticias = function(app, req, res){

	var connection = app.config.dbConnection();
	//para conseguit acessar o models
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.getNoticias( function(error, result){
		res.render("noticias/noticias", {noticias : result}
	);
});

}

module.exports.noticia = function(app, req, res){

	//CONEXÃO COM O BD
	var connection = app.config.dbConnection();
	//acessando as models
	var noticiasModel = new app.app.models.NoticiasDAO(connection);
	
		noticiasModel.getNoticia( function(error, result){
		res.render("noticias/noticia", {noticia : result})
						
});
		
}