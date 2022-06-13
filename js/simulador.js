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

let castle = 100;

const marcador = [{jugador: "nombre"}];

//la funcion confirm es MUY parecida al prompt pero le envia al usuario el mensaje entre parentesis y solicita ingrese ACEPTAR(genera true) o CANCELAR(genera false). Si pone aceptar inicia el bucle
let jugador1 = confirm("🏰¿Queres comenzar el juego?🏰"); 

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

} else {

alert(`🏰Hasta la proxima ⚔️ El castillo llego a ${castle} de vida🏰`);

jugador1 = false;

}

} else {

alert(`⚔️¡Has destruido el castillo!⚔️`);

marcador.push(prompt('Escribe tu nombre para sumarte a la tabla de posiciones'));

alert(marcador);
//alert(marcador.sort(a, b)); Marcador ordenado

let playAgain = confirm(`¿Queres jugar de nuevo?`);

if (playAgain) {

castle = 100;

} else {

jugador1 = false;

}

}

}

