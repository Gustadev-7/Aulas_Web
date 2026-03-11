const numeros = [ 22, 11, 7, 80, 1, 2, 3, 4, 5];
numeros.sort((a,b)=> a - b); // ordenando de formma crescente
numeros.sort((a,b)=> b - a); // ordenando de forma descrescente

console.log(numeros);

const arquivos: string[] = ["item10.png", "item01.png", "item09.png", "item02.png"];
arquivos.sort( (a, b)=> a.localeCompare(b));

console.log(arquivos);

"anisio".localeCompare("ANISIO", undefined, {sensitivity: 'base'} );
"teste".toLowerCase().localeCompare("TESTE".toLowerCase());