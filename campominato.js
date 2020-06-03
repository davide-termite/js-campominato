// Chiedo difficoltà al giocatore
var level = prompt("Con quale difficoltà vuoi giocare? 1, 2 o 3?");

// Difficoltà Gioco
switch (level) {
  case "1":
    var gameLevel =  100;
    break;
  case "2":
    var gameLevel =  80;
    break;
  case "3":
    var gameLevel =  50;
    break;
}

// Array Gioco
var userNumber;
var randomList = [];

// Funzione Gioco
function generateGameNumbers() {

  // Creo Array Numeri Random
  while (randomList.length < 16) {
    var randomNum = Math.floor(Math.random() * gameLevel + 1);
    randomList.push(randomNum);
    randomList.sort();
  }

  console.log(randomList);
}

function generateGame (userNumber) {

  do {

    // Chiedo numero ad user
    var userNumber = parseInt(prompt("Inserisci un numero da uno a " + gameLevel));

    // Controllo se numero utente fa parte dell'Array
    var check = randomList.includes(userNumber);

  } while (check === false);

  return alert("Hai perso :(");

}

generateGameNumbers();
generateGame();
