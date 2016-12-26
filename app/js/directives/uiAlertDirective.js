/**
 * Created by João Marcus on 24/12/2016.
 */
angular.module("listaTelefonica").directive("uiAlert", function () {
    return {
        templateUrl: "view/directives/alert.html",
        restrict: "E",
        scope: {
            title: "@"
        },
        transclude: true
    };
});