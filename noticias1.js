var http = require('http');

// RECUPERANDO UMA REQUISIÇÃO DE URL HTML

var server = http.createServer( function(req, res){
	
	var categoria = req.url;

	if (categoria == '/tecnologia') {
		res.end("<html><body>Portal de Tecnologias</body></html>");

	}else if (categoria == '/moda'){

		res.end("<html><body>Portal de Noticias de MODA</body></html>");

	}else if (categoria == '/beleza'){
		res.end("<html><body>Portal de Noticias BELEZA</body></html>");

	}else {
		res.end("<html><body>Portal de Noticias</body></html>");
	}
	


});

server.listen(3000);