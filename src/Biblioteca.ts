// Importa la interfaz Libro del archivo Libro.ts
import { Libro } from "./Libro";

// Implementa la clase Biblioteca
export class Biblioteca {
  private libros: Libro[] = [];

  agregarLibro(libro: Libro): Libro[] {
    this.libros.push(libro);
    return this.libros;
  }

  mostrarCatalogo(): void {
    console.log("Catálogo de la biblioteca:");
    this.libros.forEach(libro => console.log(libro.obtenerResumen()));
  }
}




