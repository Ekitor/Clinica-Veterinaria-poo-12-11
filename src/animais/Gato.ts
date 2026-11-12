import { Animal } from "./Animal";

export class Gato extends Animal {
  emitirSom(): string {
    return `${this.nome} mia`;
  }

  descreverCuidadosDiarios(): string {
    return `${this.nome} precisa de um arranhador.`;
  }
}
