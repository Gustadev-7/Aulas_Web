function calcularMedia (notas: number[]): number {
    try {
        if (!notas || notas.length === 0) {
                throw new Error("Array vazio ou undefined");
            }

        let soma = 0;
        for (let i = 0; i < notas.length; i++) {        
            soma += notas[i];
        }

        return soma / notas.length;
    } catch (erro) {
        console.log("Erro encotrado:", (erro as Error). message);
        return 0;
    }
}

console.log(calcularMedia([10, 20, 40, 50]));