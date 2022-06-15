//Version Original

// let castle = 100;

// let Atk = 25;

// do {

//        let player1 = prompt ("¿Si Desea asaltar el castillo escriba si ?");

//        if(player1 === "si"){

//                castle = castle - Atk;

//                if(castle > 0){

//                        alert(`El castillo tiene ${castle} de vida`)    

//                } 
               
//        }  
       
// } while (castle > 0);

// alert("Has Asaltado el castillo con exito");

///version refactorizada

//Vida Castillo
let castle = 100;

//Posiciones
const marcador = [{ jugador:"CARLOS", rondas: 20 }, { jugador:"JORGE", rondas: 25 }, { jugador:"OSCAR", rondas:30 }];

//Inserta Nuevo Jugador
function jugador (jugador, rondas){
        this.jugador = jugador;
        this.rondas = rondas;
    };

function agregar(){
        marcador.push(nuevoJugador);
    }


//la funcion confirm es MUY parecida al prompt pero le envia al usuario el mensaje entre parentesis y solicita ingrese ACEPTAR(genera true) o CANCELAR(genera false). Si pone aceptar inicia el bucle
let jugador1 = confirm("🏰¿Queres comenzar el juego?🏰"); 

// Genera Ronda
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

//Incremento la ronda en 1 siempre
        round ++;


} else {

alert(`🏰Hasta la proxima ⚔️ El castillo llego a ${castle} de vida🏰`);

jugador1 = false;

}

} else {

alert(`⚔️¡Has destruido el castillo!⚔️`);

//Genero Variables para guardar datos y luego cargarlos
let rondas = round;
let playerC = prompt("Ingresa tu nombre para sumarte al Ranking");
let rondaC = rondas;

nuevoJugador = new jugador(playerC, rondaC);
agregar();

//Ordeno Marcador y lo muestro por consola y alert
marcador.sort((a,b) => a.rondas - b.rondas);
alert(`RANKING DE JUGADORES:

        1 ${ marcador[ 0 ] . jugador } - ${ marcador[ 0 ] . rondas }

        2 ${ marcador[ 1 ] . jugador } - ${ marcador[ 1 ] . rondas }

        3 ${ marcador[ 2 ] . jugador } - ${ marcador[ 2 ] . rondas }`);

console.log(marcador);


//Reinicio juego en caso de que la respuesta sea True
let playAgain = confirm(`¿Queres jugar de nuevo?`);

if (playAgain) {

//Resetea Vida y Rondas
castle = 100;
round = 0;

} else {

jugador1 = false;

}

}

}