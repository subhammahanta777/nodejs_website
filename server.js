var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){
    var url = request.url;
    switch(url){
        case'/':
	    getStaticFileContent(response,'public/home.html','text/html');
break;
	case'/web':
	    getStaticFileContent(response,'public/home.html','text/html');
	    verificationHandler(request,response);
	    break;
	default:
	    
	    response.writeHead(404 , {'Content-Type':'text/html'});
	    response.end('404 - Page Not found');
    }
}).listen(8080);

console.log('server running at http://localhost:8080')


function getStaticFileContent(response, filepath, contentType){
    fs.readFile(filepath,function(error, data){
	if(data){
	    response.writeHead(200, {'Content-Type':'text/html'});
	    response.end(data);
	}
    });
}    

function verificationHandler(req,res){

console.log(req);
	  if (req.getParameter('hub.verify_token') === 'subham') {
	    res.send(req.getParameter('hub.challenge'));
	  }
	  res.send('Error, wrong validation token!');
	}
