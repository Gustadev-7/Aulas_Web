import { Detalhe } from "./Detalhe"
import { Pacote } from "./Pacote"

export class Voo {
    id_voo: string
    data_envio: string
    detalhes: Detalhe
    pacotes: Pacote

    constructor(id_voo:string, data_envio:string, detalhes:Detalhe, pacotes:Pacote){
        this.id_voo = id_voo;
        this.data_envio = data_envio;
        this.detalhes = detalhes;
        this.pacotes = pacotes;
    };
}