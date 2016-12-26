/**
 * Created by João Marcus on 18/12/2016.
 */
angular.module("listaTelefonica",["ngMessages"]);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http, contatosAPI, serialGeneratorService) {

    var _this = this;

    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];
    var carregarContatos = function () {
        contatosAPI.getContatos().then(function (backend) {
            $scope.contatos = backend.data;
        });
    };
    var carregarOperadoras = function () {
        $http.get("http://localhost:8080/operadoras").then(function (backend) {
            $scope.operadoras = backend.data;
        }).catch(function (data, status) {
            $scope.error = "Não foi possível carregar os dados!";
        });
    };
    $scope.adicionarContato = function (contato) {
        contato.serial = serialGeneratorService.generate();
        $scope.contatos.push(angular.copy(contato));
        _this.limparDados();
    };
    _this.limparDados = function () {
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
    carregarContatos();
    carregarOperadoras();
});