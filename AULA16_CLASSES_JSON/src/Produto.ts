import { Categoria } from "./Categoria";
import { Endereco } from "./Endereco";
import { Fabricante } from "./Fabricante";
import { Item } from "./Item";

export class Produto {
    id: number
    nome: string
    preco: number
    categoria: Categoria
    fabricante: Fabricante
    endereco: Endereco
    item: Item

    constructor(id:number, nome:string, preco:number, categoria:Categoria, fabricante:Fabricante, endereco:Endereco, item:Item) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.fabricante = fabricante;
        this.endereco = endereco;
        this.item = item;
    };
}