const marcador = [];

let rondas = Math.round(Math.random() * 15);

function player (player, rondas){
    this.player = player;
    this.rondas = rondas;
};

let playerC = prompt("Ingesa tu nombre");
let rondaC = rondas;

nuevoPlayer = new player(playerC, rondaC);
agregar();

function agregar(){
    marcador.push(nuevoPlayer);
}

console.log(marcador);