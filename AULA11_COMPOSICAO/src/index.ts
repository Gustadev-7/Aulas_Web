import { Contato } from "./Contato";
import { Endereco } from "./Endereco";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";
import { Pessoa } from "./Pessoa";
import { Prontuario } from "./Prontuario";
import { Remedio } from "./Remedio";

const endereco: Endereco = new Endereco('Rua Imaginaria', 90, 'Boituva', '18000-000');
const contato: Contato = new Contato('14 99999 9999', 'gustavo@gmail.com');
const pessoa1: Pessoa = new Pessoa('Gustavo', 18, endereco, contato);
const pessoa2: Pessoa = new Pessoa('Alberto', 58, endereco, contato);
const remedio: Remedio = new Remedio('Remedio 1', '10mg');
const paciente: Paciente = new Paciente(pessoa1, [remedio])
const medico: Medico = new Medico(pessoa2,'Neurologia');
const prontuario: Prontuario = new Prontuario(paciente, medico);

prontuario.imprimir();