// Importa la interfaz Persona del archivo Persona.ts
import { Persona } from "./Persona";

// Implementa la clase Autor que cumple con la interfaz Persona
export class Autor implements Persona {
  constructor(public nombre: string, public apellido: string) {}
}


