let nomes: string[] = ["Ana", "João", "Elvis"];
console.log(nomes); 

let numeros: number[] = [1, 2, 3, 4];

console.log("Número na posicao 1: ", numeros[1]);

console.log(nomes.indexOf("João"));

nomes.splice(1,1); // Corta da posicao 1 até a posição 1 (valor pode ser alterado). O segundo valor quer dizer: "quantas posições a partir da primeira eu quero escluir"

console.log("Depois do splice: ", nomes);
nomes.splice(0,1);
console.log("Depois do splice: ", nomes);
nomes.splice(-1,1);
console.log("Depois do splice: ", nomes);

let years: Array< number > = [20, 30, 40]; // Outra maneira de declarar um array de numeros

let fruits: string[] = ["Banana", "Maçã"];

fruits.push("Pera"); // Adiciona no final da lista

console.log(fruits);

fruits.unshift("Uva"); // Adiciona no inicio da lista

fruits.pop(); // Remove o ultimo elemento da lista

fruits.shift(); // Remove o primeiro elemento da lista

console.log(fruits[0]);
console.log(fruits.length); // Mostra o tamanho da lista

