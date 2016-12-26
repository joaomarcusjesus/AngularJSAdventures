/**
 * Created by João Marcus on 24/12/2016.
 */
angular.module("listaTelefonica").provider("serialGeneratorService", function () {

    var _length = 10;

    this.getLength = function () {
        return _length;
    };

    this.setLength = function (length) {
        _length = length;
    };

    this.$get = function () {
        return {
            generate: function () {
                var serial = "";
                while(serial.length < 20) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return serial;
            }
        };
    };
});