import { Cachorro } from "./animais/Cachorro";
import { Gato } from "./animais/Gato";
import { Ave } from "./animais/Ave";
import { Veterinario } from "./funcionarios/Veterinario";
import { Recepcionista } from "./funcionarios/Recepcionista";
import { Consulta } from "./consultas/Consulta";
import { Clinica } from "./clinica/Clinica";

const clinica = new Clinica("Clínica Veterinária Dona Marta");

const cachorro = new Cachorro("Rex", 4, "João");
const gato = new Gato("Mimi", 2, "Ana");
const ave = new Ave("Louro", 1, "Carlos");

clinica.cadastrarAnimal(cachorro);
clinica.cadastrarAnimal(gato);
clinica.cadastrarAnimal(ave);

const veterinaria = new Veterinario("Dra. Paula", "VET001", 4500);
const recepcionista = new Recepcionista("Marina", "REC001", 2200);

clinica.contratarFuncionario(veterinaria);
clinica.contratarFuncionario(recepcionista);

recepcionista.confirmarAgendamento();
recepcionista.confirmarAgendamento();

const consulta = new Consulta(cachorro, veterinaria, new Date());
clinica.marcarConsulta(consulta);

clinica.listarAnimais();
clinica.listarFuncionarios();
clinica.listarConsultas();
