import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

export class Prontuario {
    paciente: Paciente
    medico: Medico

    constructor(paciente:Paciente, medico:Medico) {
        this.paciente = paciente;
        this.medico = medico;
    }

    imprimir():void {
        console.log(`Nome do paciente: ${this.paciente.pessoa.nome}\nNome do médico: ${this.medico.pessoa.nome}\nLista de remédios: ${this.paciente.remedios}`);
    }
};