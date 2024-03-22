// Importa la interfaz Persona del archivo Persona.ts
import { Persona } from "./Persona";

// Define la interfaz Libro
export interface Libro {
  titulo: string;
  autor: Persona; // Cambia 'Autor' por 'Persona' ya que está definido en Persona.ts
  obtenerResumen(): string;
}

// Implementa la clase LibroImpreso que cumple con la interfaz Libro
export class LibroImpreso implements Libro {
  constructor(public titulo: string, public autor: Persona) {} // Cambia 'Autor' por 'Persona' aquí también

  obtenerResumen(): string {
    return `Título: ${this.titulo}, Autor: ${this.autor.nombre} ${this.autor.apellido}`;
  }
}



