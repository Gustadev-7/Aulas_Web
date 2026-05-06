export class Detalhe {
    altitude_max: number
    sensores: string[]

    constructor(altitude_max:number, sensores:string[]) {
        this.altitude_max = altitude_max;
        this.sensores = sensores;
    };
}