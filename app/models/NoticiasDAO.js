//implementando CLASSES 
function NoticiasDAO(connection){
	this._connection = connection;

}

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('SELECT * FROM noticias',callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
	this._connection.query('SELECT * FROM noticias WHERE id_noticia = 2', callback);
}	

NoticiasDAO.prototype.salvarNoticia = function(noticias, callback){
	console.log(noticias);
	this._connection.query('INSERT INTO noticias SET ?', noticias, callback);
}

module.exports = function(){

	return NoticiasDAO;

}