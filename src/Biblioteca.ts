import { Libro } from "./Libro";

export class Biblioteca {
  private libros: Libro[] = [];

  agregarLibro(libro: Libro): void {
    this.libros.push(libro);
  }

  mostrarCatalogo(): void {
    console.log("Catálogo de la biblioteca:");
    this.libros.forEach(libro => console.log(libro.obtenerResumen()));
  }
}

