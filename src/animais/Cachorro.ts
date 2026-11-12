import { Animal } from "./Animal";

export class Cachorro extends Animal {
  emitirSom(): string {
    return `${this.nome} late`;
  }

  descreverCuidadosDiarios(): string {
    return `${this.nome} precisa de passeio diário.`;
  }
}
