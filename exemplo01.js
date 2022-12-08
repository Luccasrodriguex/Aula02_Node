var http = require('http');
var dia = require('./biblioteca');
http.createServer(function (req, res){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<h2>Brasil 2 x 0 Sérvia </h2> <br>');
        res.write('<h2>Brasil 1 x 0 Suiça </h2> <br>');
        res.write('<p style=color:green>'+Date().substring(16,24)+'<br>');
        res.write(dia.diaDaSemana()+'</p><br>')
        res.end('Bom Dia!');

}).listen(3000); 
