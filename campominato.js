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
var safeNumber = [];
var randomList = [];

// Funzione Numeri Computer
function generateGameNumbers() {

  // Creo Array Numeri Random
  while (randomList.length < 16) {
    var randomNum = Math.floor(Math.random() * gameLevel + 1);
    randomList.push(randomNum);
    randomList.sort();
  }

  console.log(randomList);
}

// Funzione Gioco
function generateGame (userNumber) {

  do {
    // Chiedo numero ad user
    var userNumber = parseInt(prompt("Inserisci un numero da uno a " + gameLevel));

    // Controllo se numero utente fa parte dell'Array
    var check = randomList.includes(userNumber);

    // Colleziono numeri validi che utente inserisce
    safeNumber.push(userNumber);

  } while (check === false);

  console.log(safeNumber);

  // || (safeNumber.length < (gameLevel - 16))

  return alert("Hai perso :(  Hai inserito " + (safeNumber.length - 1) + " numeri corretti");

}

generateGameNumbers();
generateGame();
