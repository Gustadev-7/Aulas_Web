for(let i = 0; i < 5; i++) {
    console.log(`Iteração: ${i}`); // ou: console.log("Iteração: ", i);
}

let contador = 0;
while (contador < 5) {
    console.log("Iteração: ", contador);
    contador++;
}

let num:number = 5;

do {
    console.log("Números: ", num);
    num++;

} while(num < 5);

let numeros:number[] = [ 10, 20, 30];

// Vai percorrer todo a lista
for(const num of numeros) {
    console.log("Números: ", num);
}

// const pessoa = {nome: "Alice", idade: 25, cidade: "Boituva"};
// for(const chave in pessoa){
//     console.log(`${chave}:`, pessoa[chave])
// }