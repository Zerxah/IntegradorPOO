"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importa las clases y interfaces necesarias
var Persona_1 = require("./Persona");
var Libro_1 = require("./Libro");
var Biblioteca_1 = require("./Biblioteca");
// Crea instancias de objetos para representar autores y libros
var autor1 = new Persona_1.Autor("J.K.", "Rowling");
var autor2 = new Persona_1.Autor("George R.R.", "Martin");
var libro1 = new Libro_1.LibroImpreso("Harry Potter y la piedra filosofal", autor1);
var libro2 = new Libro_1.LibroImpreso("Canción de hielo y fuego", autor2);
// Crea una instancia de la biblioteca
var biblioteca = new Biblioteca_1.Biblioteca();
// Agrega algunos libros a la biblioteca
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
// Muestra el catálogo de la biblioteca
biblioteca.mostrarCatalogo();
