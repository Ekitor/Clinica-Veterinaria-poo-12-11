import { Animal } from "../animais/Animal";
import { Veterinario } from "../funcionarios/Veterinario";

export class Consulta {
  constructor(
    public animal: Animal,
    public veterinario: Veterinario,
    public data: Date
  ) {
    if (!(data instanceof Date) || Number.isNaN(data.getTime())) {
      throw new Error("A data da consulta é inválida.");
    }
  }

  exibirDados(): string {
    return `Consulta: ${this.animal.nome} com Dr(a). ${this.veterinario.nome} em ${this.data.toLocaleDateString("pt-BR")}.`;
  }
}
