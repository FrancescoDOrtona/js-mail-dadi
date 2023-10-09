// # Gioco dei dadi
// Dichiaro le variabili e genero un numero random per entrambi
const userNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
const pcNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(userNumber, pcNumber)

// confronto i 2 numeri e dichiaro il vincitore
if (userNumber > pcNumber){
    console.log('Hai vinto')
} else if (userNumber < pcNumber){
    console.log('Hai perso')
} else if (userNumber === pcNumber){
    console.log('Pareggio')
}