///version refactorizada.

//Vida Castillo.
let castle = 100;

//Posiciones.
const marcador = [{ jugador: "Matias", rondas: 15 }, { jugador: "Bernardo", rondas: 20 }, { jugador: "Leandro", rondas: 16 }, { jugador: "Cristian", rondas: 14 }, { jugador: "Jose", rondas: 17 }];

//Inserta Nuevo Jugador.
function jugador(jugador, rondas) {
        this.jugador = jugador;
        this.rondas = rondas;
}

//Funcion Push.
function agregar() {
        
        localStorage.setItem(nuevoJugador, rondas);
        marcador.push(nuevoJugador);
        console.log(nuevoJugador);
}

// Funciones para Pop Up
function OpenModal() {
        let element = document.getElementById('overlay');
        element.style.display = 'block';
}

function CloseModal() {
        let element = document.getElementById('overlay');
        element.style.display = 'none';
        pole.remove
}

//Mostrar Marcador
function Mostrar() {
        let tabla = marcador.sort((a, b) => a.rondas - b.rondas);

        const rankingNuevo = document.getElementById("pole");

        for (let i = 0; i < tabla.length; i++) {
                const element = tabla[i];

                const elementoLi = document.createElement('li');
                elementoLi.innerHTML = tabla[i].jugador + " " + tabla[i].rondas;
                rankingNuevo.appendChild(elementoLi);
        }
}

//Funcion pulsar enter para iniciar juego
document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            initAtk();
        }
    });


//Funcion initAtk, Inicia Ataque si la respuesta es True.
function initAtk() {
        let jugador1 = confirm("🏰¿Queres comenzar el juego?🏰");
        playerC = prompt("Ingresa tu nombre para sumarte al Ranking");

// Genera Ronda.
        let round = 0;  

        while (jugador1) {

///Si es castillo tiene mas de 0 de vida, sigue el juego.
        if (castle > 0) {

                let jugador1Ataca = confirm(`¿Desea atacar?⚔️`);
                        if (jugador1Ataca) {
                                //Variable de ataque random.
                                let Atk = Math.round(Math.random() * 25);

                                //Funcion de Ataque Local.
                                function ataque() {
                                        castle = castle - Atk;

                                        //Chequeo vida de castillo no sea negativa y muestro que es 0.        
                                        if (castle < 0) {
                                                castle = 0;
                                        }
                                }
                                ataque(castle, Atk);

                                alert(`¡Has atacado al castillo! ⚔️ Puntos de vida restantes: ${castle} 🏰`);
                                
                                //Incremento la ronda en 1 siempre.
                                round++;

                        } else {

                                //alert(`🏰Hasta la proxima ⚔️ El castillo llego a ${castle} de vida🏰`);
                                swal.fire({
                                        title: "ERROR",
                                        text: `¡Has atacado al castillo! ⚔️ Puntos de vida restantes: ${castle} 🏰`,
                                        icon: "success",
                                });

                                jugador1 = false;

                        }

                } else {

                        alert(`⚔️¡Has destruido el castillo!⚔️`);

                        //Variables para guardar datos y luego cargarlos.
                        let rondas = round;
                        //playerC = prompt("Ingresa tu nombre para sumarte al Ranking");
                        let rondaC = rondas;

                        nuevoJugador = new jugador(playerC, rondaC);

                        //Llamo funcion para guardar los datos.     
                        agregar();

                        //Reinicio juego en caso de que la respuesta sea True.
                        let playAgain = confirm(`¿Queres jugar de nuevo?`);

                        if (playAgain) {

                                //Resetea Vida y Rondas.
                                castle = 100;
                                round = 0;

                        } else {

                                jugador1 = false;

                        }

                }

        }
}

localStorage.setItem('ranking', JSON.stringify(marcador));