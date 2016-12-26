/**
 * Created by João Marcus on 24/12/2016.
 */
angular.module("listaTelefonica").filter("name", function () {
    return function (input) {
        var listaDeNome = input.split(" ");
        var listaDeNomeFormatada = listaDeNome.map(function (nome) {
            if (/da|de/.test(nome)) return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        return listaDeNomeFormatada.join(" ");
    };
});