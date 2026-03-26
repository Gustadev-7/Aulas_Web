export class Usuario {
    nome: string
    email: string

    constructor(nome:string, email:string) {
        this.nome = nome;
        this.email = email;
    };

    boasVindas():void {
        console.log(`\nBem-vindo(a), ${this.nome}! Seu e-mail é ${this.email}`)
    };
}