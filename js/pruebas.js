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







/* ///version refactorizada

let castle = 100;

const marcador = [];

function player (player, rondas){
        this.player = player;
        this.rondas = rondas;
    };

function agregar(){
        marcador.push(nuevoPlayer);
    }

//la funcion confirm es MUY parecida al prompt pero le envia al usuario el mensaje entre parentesis y solicita ingrese ACEPTAR(genera true) o CANCELAR(genera false). Si pone aceptar inicia el bucle
let jugador1 = confirm("🏰¿Queres comenzar el juego?🏰"); 

let round = 0;

while (jugador1) {

///Si es castillo tiene mas de 0 de vida, sigue el juego

if (castle > 0) {

let jugador1Ataca = confirm(`¿Desea atacar?⚔️`);

if (jugador1Ataca) {
                let Atk = Math.round(Math.random() * 25);
//Funcion de Ataque Local
        function ataque () {
                castle = castle - Atk;
}
       ataque (castle, Atk);
        
        
alert(`¡Has atacado al castillo! ⚔️ Puntos de vida restantes: ${castle} 🏰`);

//Incremento la ronda en 1 siempre y cuando el valor sea verdadero
        round ++;


} else {

alert(`🏰Hasta la proxima ⚔️ El castillo llego a ${castle} de vida🏰`);

jugador1 = false;

}

} else {

alert(`⚔️¡Has destruido el castillo!⚔️`);

let rondas = round;
let playerC = prompt("Ingesa tu nombre");
let rondaC = rondas;

nuevoPlayer = new player(playerC, rondaC);
agregar();


alert(marcador.sort());
console.log(marcador);
//alert(marcador.sort(a, b)); //Marcador ordenado

let playAgain = confirm(`¿Queres jugar de nuevo?`);

if (playAgain) {

castle = 100;

} else {

jugador1 = false;

}

}

}

 */