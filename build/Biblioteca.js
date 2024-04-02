"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
// Implementa la clase Biblioteca
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.libros = [];
    }
    Biblioteca.prototype.agregarLibro = function (libro) {
        this.libros.push(libro);
        return this.libros;
    };
    Biblioteca.prototype.mostrarCatalogo = function () {
        console.log("Catálogo de la biblioteca:");
        this.libros.forEach(function (libro) { return console.log(libro.obtenerResumen()); });
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
