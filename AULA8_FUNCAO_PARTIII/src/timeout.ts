console.log("Antes do setTimeout");
let frase = "Rodando o setTimeout";
const timeout = setTimeout(()=> console.log("Executando o timeout..."), 3000); // é executado por ultimo porque é uma função assincrona

frase = "Rodando o clearTimeout";

if (frase !== "Roadando o setTimeout") {
    clearTimeout(timeout);
    console.log(frase);
}

console.log("Depois do setTimeout");
