"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroImpreso = exports.Autor = void 0;
// Implementa la clase Autor que cumple con la interfaz Persona
var Autor = /** @class */ (function () {
    function Autor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    return Autor;
}());
exports.Autor = Autor;
// Implementa la clase LibroImpreso que cumple con la interfaz Libro
var LibroImpreso = /** @class */ (function () {
    function LibroImpreso(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    LibroImpreso.prototype.obtenerResumen = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Autor: ").concat(this.autor.nombre, " ").concat(this.autor.apellido);
    };
    return LibroImpreso;
}());
exports.LibroImpreso = LibroImpreso;
