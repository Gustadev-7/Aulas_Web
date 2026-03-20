//setInterval(()=> console.log("Executando o interval..."), 1000); // função assincrona, porém, diferente do "timeout", ela é uma função ciclica

//console.log("Depois do interval");

let contador = 0;

const interval = setInterval(()=>{
    contador++;
    console.log("Rodando o interval...");
    if (contador === 3) {
        console.log("Interval cancelado...")
        clearInterval(interval);
    }
}, 700);

console.log("Depois do interval...")