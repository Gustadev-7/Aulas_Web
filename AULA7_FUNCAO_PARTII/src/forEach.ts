const numeros = [ 1, 2, 3, 4, 5];
const frutas: string[] = ['Maca', 'Banana', 'Uva'];

frutas.forEach( (item, index)=> {
    console.log(`${index}: ${item}`);
});

let contador: number  = 0;

// Subistui os valores no vetor original (NAO RECOMENDADO! USAR MAP!)
numeros.forEach( (n, index) => {
    numeros[index] = n * 2;
}); 

type Produto = {id: number, nome: string, preco: number};
const produtos: Produto[] = [
    {id:1, nome:"Mouse", preco:50},
    {id:2, nome:"MousePad", preco:150}
];

// Subistui os valores no vetor original (NAO RECOMENDADO! USAR MAP!)
produtos.forEach( p => {
    p.nome = p.nome + "Qualquer coisa";
});