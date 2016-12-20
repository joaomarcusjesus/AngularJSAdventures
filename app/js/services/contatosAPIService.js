/**
 * Created by João Marcus on 18/12/2016.
 */
angular.module("listaTelefonica").factory("contatosAPI", function ($http) {
    var _getContatos = function () {
        return $http.get("http://localhost:8080/contatos");
    };
    var _saveContato = function (contato) {
        return $http.get("http://localhost:8080/contatos", contato);
    };
    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    };
});