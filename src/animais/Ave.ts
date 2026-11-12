import { Animal } from "./Animal";

export class Ave extends Animal {
  emitirSom(): string {
    return `${this.nome} canta`;
  }


  descreverCuidadosDiarios(): string {
    return `${this.nome} precisa de uma gaiola adequada e limpa.`;
  }
}
