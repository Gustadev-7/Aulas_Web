type Categoria = "Espadachim" | "Mago" | "Arqueiro";

export class Heroi {
    nome: string
    categoria: Categoria
    ataque: number
    custo: number
    recurso: number
    nomeRecurso: string

    constructor(nome:string, categoria:Categoria, ataque:number, custo:number) {
        this.nome = nome;
        this.categoria = categoria;
        this.ataque = ataque;
        this.custo = custo;
        this.recurso = 0;
        this.nomeRecurso = '';
        
        if(categoria === "Espadachim") {
            this.recurso = 50;
            this.nomeRecurso = "stamina"
        } else if (categoria === "Mago") {
            this.recurso = 40;
            this.nomeRecurso = "mana"
        } else if (categoria === "Arqueiro") {
            this.recurso = 10;
            this.nomeRecurso = "flechas"
        }
            
    };

    atacar():void {
        if(this.custo > this.recurso) {
            console.log(`\nAtaque de ${this.nome} falhou por falta de recurso!`)
        } else {
            this.recurso = this.recurso - this.custo;
            console.log(`\nAtaque de ${this.nome} bem sucedido, restando ${this.recurso} ${this.nomeRecurso}`)
        }
    };
};

