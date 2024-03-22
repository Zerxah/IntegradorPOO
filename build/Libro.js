"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroImpreso = void 0;
// Implementa la clase LibroImpreso que cumple con la interfaz Libro
class LibroImpreso {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    } // Cambia 'Autor' por 'Persona' aquí también
    obtenerResumen() {
        return `Título: ${this.titulo}, Autor: ${this.autor.nombre} ${this.autor.apellido}`;
    }
}
exports.LibroImpreso = LibroImpreso;
