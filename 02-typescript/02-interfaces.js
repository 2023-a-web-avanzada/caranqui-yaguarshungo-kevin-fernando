"use strict";
exports.__esModule = true;
exports.A = void 0;
//02-interfaces
var A = /** @class */ (function () {
    function A() {
        this.edad = 1;
        this.nombre = "a";
    }
    return A;
}());
exports.A = A;
var user = {
    nombre: 'Kevin',
    apellido: 'Caranqui',
    casado: 0,
    sueldo: 11.2,
    estado: 'AC',
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return user.sueldo + user.sueldo * impuesto;
    },
    estadoActuadl: function () {
        switch (user.casado) {
            case 'AC':
                return 'AP',
                ;
            case 'IN':
                return 'AF',
                ;
            case 'BN':
                return 'AT';
        }
    }
};
