// Importa la interfaz Persona del archivo Persona.ts
import { Persona } from "./Persona";

// Define la interfaz Libro
export interface Libro {
  titulo: string;
  autor: Persona;
  obtenerResumen(): string;
}

// Implementa la clase Autor que cumple con la interfaz Persona
export class Autor implements Persona {
  constructor(public nombre: string, public apellido: string) {}
}

// Implementa la clase LibroImpreso que cumple con la interfaz Libro
export class LibroImpreso implements Libro {
  constructor(public titulo: string, public autor: Autor) {}

  obtenerResumen(): string {
    return `Título: ${this.titulo}, Autor: ${this.autor.nombre} ${this.autor.apellido}`;
  }
}








