module.exports = function(){

	this.getNoticias = function(connection, callback){
		connection.query('SELECT * FROM noticias',callback);
	}

	this.getNoticia = function(connection, callback){
		connection.query('SELECT * FROM noticias WHERE id_noticia = 2', callback);
	}	

	this.salvarNoticia = function(noticias, connection, callback){
		connection.query('INSERT INTO noticias SET ?', noticias, callback);
	}

	return this;

}