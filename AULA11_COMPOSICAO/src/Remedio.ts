export class Remedio {
    nome: string
    dosagem: string

    constructor(nome:string, dosagem:string) {
        this.nome = nome;
        this.dosagem = dosagem;
    }

    toString(): string {
        return `${this.nome} ${this.dosagem}`;
    }
}