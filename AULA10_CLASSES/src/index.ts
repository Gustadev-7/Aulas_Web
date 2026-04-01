import {Heroi} from "./Heroi";

const espadachim: Heroi = new Heroi('Pedro Afonso', 'Espadachim', 20, 10); 
espadachim.atacar();

const mago: Heroi = new Heroi('Igor Nunes', 'Mago', 20, 40);
mago.atacar();

const arqueiro: Heroi = new Heroi('Leonardo Nunes', 'Arqueiro', 10, 20);
arqueiro.atacar();