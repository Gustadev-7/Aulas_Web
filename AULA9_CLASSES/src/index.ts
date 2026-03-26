import { Aluno } from "./Aluno";
import { Carro } from "./Carro";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

const aluno1: Aluno = new Aluno('Pedro', 18, 'ADS', 'BT64127');

aluno1.imprimir();

const livro1: Livro = new Livro('Conceitos de POO', 'Daniel Souza', 2010, 'Tech');
const livro2: Livro = new Livro('Conceitos de TS', 'Daniel Souza', 2018, 'Tech');

livro1.exibirDados();
livro2.exibirDados();

const usuario1: Usuario = new Usuario('Gustavo', 'gustavo@gmail.com');

usuario1.boasVindas();

let carro1: Carro = new Carro('Chevrolet', 'Onix', 2018);

carro1.mostrarCarro();

carro1.ano = 2014;

carro1.mostrarCarro();