function mensagem (f:string):string {
    return f; 
}

const mensagemLambda = (f:string):string => f;

console.log(mensagem("Olá mundo!!!"));

console.log(mensagemLambda("Olá mundo!!!"));


function soma (a:number, b:number):void { 
    console.log(a + b);
}

const somaLambda = (a:number, b:number):void => console.log(a + b);

function saudacao (nome:string = "Visitante"):string {
    return `Olá, ${nome}`;
}

const saudacaoLambda = (nome:string = "Visitante"):string => `Olá, ${nome}`;

saudacao("ADS");
saudacao();

saudacaoLambda("ADS");


function multiplicar (a:number, b:number) {
    return a * b;
}

// Valores opcionais (nesse caso 'b' é opcional)
const multiplicarOpcional = (a:number, b?:number):number => {
    if (b === undefined){
        return a;
    }
    
    return a * b;
}

multiplicarOpcional(1,2);
multiplicarOpcional(1);

// Operador ternário (se 'b' for indefinido retorno 'a', senão, retorno 'a * b')
const multiplicarOpcionalTernario = (a:number, b?:number):number => (b === undefined) ? a:a*b;

// Operador Coalescência Nula (se 'b' for nulo ou indefinido, ele devolve '1'. Ou seja, multiplica o 'a' por 1)
const multiplicarCoalescencia = (a:number, b?:number):number => a * (b ?? 1);