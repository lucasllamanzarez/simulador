///version refactorizada

//Vida Castillo
        let castle = 100;

//Posiciones
        const marcador = [{ jugador: "Matias", rondas: 15 }, { jugador: "Bernardo", rondas: 20 }, { jugador: "Leandro", rondas: 16 }];

//Inserta Nuevo Jugador
        function jugador(jugador, rondas) {
                this.jugador = jugador;
        this.rondas = rondas;
}

//Funcion Push
        function agregar() {
                marcador.push(nuevoJugador);
}


//Funcion Confirm. Si se obtiene valor true, inicia el While
        let jugador1 = confirm("🏰¿Queres comenzar el juego?🏰");

// Genera Ronda
        let round = 0;

        while (jugador1) {

///Si es castillo tiene mas de 0 de vida, sigue el juego
        if (castle > 0) {

                let jugador1Ataca = confirm(`¿Desea atacar?⚔️`);

        if (jugador1Ataca) {
            //Variable de ataque random
                let Atk = Math.round(Math.random() * 25);

                        //Funcion de Ataque Local
                                function ataque() {
                                        castle = castle - Atk;
                                        
                        //Chequeo vida de castillo no sea negativa y muestro que es 0.        
                                if (castle < 0) {
                                        castle = 0;
                                }
                        }
                ataque(castle, Atk);
        alert(`¡Has atacado al castillo! ⚔️ Puntos de vida restantes: ${castle} 🏰`);

                //Incremento la ronda en 1 siempre
                round++;

        } else {

                alert(`🏰Hasta la proxima ⚔️ El castillo llego a ${castle} de vida🏰`);

                        jugador1 = false;

                }

        } else {

                alert(`⚔️¡Has destruido el castillo!⚔️`);

                //Variables para guardar datos y luego cargarlos
                        let rondas = round;
                                let playerC = prompt("Ingresa tu nombre para sumarte al Ranking");
                        let rondaC = rondas;

                nuevoJugador = new jugador(playerC, rondaC);

        //Llamo funcion para guardar los datos        
        agregar();

                //Ordeno Marcador y muestro los 3 primeros puestos
                        marcador.sort((a, b) => a.rondas - b.rondas);
                alert(`RANKING DE JUGADORES:

                1 ${marcador[0].jugador} - ${marcador[0].rondas}

                2 ${marcador[1].jugador} - ${marcador[1].rondas}

                3 ${marcador[2].jugador} - ${marcador[2].rondas}`);

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