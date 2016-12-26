/**
 * Created by João Marcus on 18/12/2016.
 */
var http = require('http');

    var operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
        {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
        {nome: "Tim", codigo: 17, categoria: "Celular", preco: 1},
        {nome: "GVT", codigo: 25, categoria: "Fixo" , preco: 3},
        {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
    ];

    var contatos = [
        {nome: "Vini De Andrade", telefone: "8888888", data: new Date(), color: "blue"},
        {nome: "Bruno Felix", telefone: "33333333", data: new Date(), color: "green"},
        {nome: "Amanda Gomes", telefone: "2222222", data: new Date(), color: "purple"}
    ];

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url === '/operadoras') res.write(JSON.stringify(operadoras));
    if (req.url === '/contatos') res.write(JSON.stringify(contatos));
    res.end();
}).listen(8080);