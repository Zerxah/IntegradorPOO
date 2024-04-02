// Importa la interfaz Libro del archivo Libro.ts
import { Libro, Autor } from "./Libro";

// Implementa la clase LibroImpreso que cumple con la interfaz Libro
export class LibroImpreso implements Libro {
  constructor(public titulo: string, public autor: Autor) {}

  obtenerResumen(): string {
    return `Título: ${this.titulo}, Autor: ${this.autor.nombre} ${this.autor.apellido}`;
  }
}


