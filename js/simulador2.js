let castle = 100;
let Atk = 25;

do {
       let player1 = prompt ("¿Si Desea asaltar el castillo escriba si ?");
       if(player1 === "si"){
               castle = castle - Atk;
               if(castle > 0){
                       alert(`El castillo tiene ${castle} de vida`)    
               } 
               
       }  

       
} while (castle > 0);

alert("Has Asaltado el castillo con exito");