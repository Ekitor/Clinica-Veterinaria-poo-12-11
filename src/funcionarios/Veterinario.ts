import { Funcionario } from "./Funcionario";

export class Veterinario extends Funcionario {
  private consultasRealizadas = 0;

  realizarConsulta(): void {
    this.consultasRealizadas++;
  }

  calcularBonus(): number {
    return this.consultasRealizadas * 50;
  }

  get totalConsultas(): number {
    return this.consultasRealizadas;
  }
}
