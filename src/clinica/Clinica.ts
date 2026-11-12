import { Animal } from "../animais/Animal";
import { Funcionario } from "../funcionarios/Funcionario";
import { Veterinario } from "../funcionarios/Veterinario";
import { Consulta } from "../consultas/Consulta";

export class Clinica {
  private animais: Animal[] = [];
  private funcionarios: Funcionario[] = [];
  private consultas: Consulta[] = [];

  constructor(public nome: string) {
    if (!nome.trim()) throw new Error("O nome da clínica é obrigatório.");
  }

  cadastrarAnimal(animal: Animal): void {
    this.animais.push(animal);
  }

  contratarFuncionario(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
  }

  marcarConsulta(consulta: Consulta): void {
    if (!this.animais.includes(consulta.animal)) {
      throw new Error("O animal não está cadastrado na clínica.");
    }

    if (!this.funcionarios.includes(consulta.veterinario)) {
      throw new Error("O veterinário não está cadastrado na clínica.");
    }

    this.consultas.push(consulta);
    consulta.veterinario.realizarConsulta();
  }

  listarAnimais(): void {
    console.log("\\--- ANIMAIS CADASTRADOS ---");
    this.animais.forEach((animal) => {
      console.log(`${animal.nome} | ${animal.idade} anos | Tutor: ${animal.tutor}`);
      console.log(animal.emitirSom());
      console.log(animal.descreverCuidadosDiarios());
    });
  }

  listarFuncionarios(): void {
    console.log("\\--- FUNCIONÁRIOS ---");
    this.funcionarios.forEach((funcionario) => {
      console.log(
        `${funcionario.nome} | Matrícula: ${funcionario.matricula} | ` +
        `Salário: R$ ${funcionario.salario.toFixed(2)} | ` +
        `Bônus: R$ ${funcionario.calcularBonus().toFixed(2)}`
      );
    });
  }

  listarConsultas(): void {
    console.log("\\--- CONSULTAS ---");
    this.consultas.forEach((consulta) => console.log(consulta.exibirDados()));
  }
}
