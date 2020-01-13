// L’utente sceglie pari o dispari e un numero da 1 a 5.
var numeroUtente = parseInt(prompt("inserisci un numero"));
var scommessa = prompt(" scegli pari o dispari");
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// numeroPc =getRandomIntInclusive(1,5);
var numeroPc =4
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).
var totale = isEven(numeroUtente + numeroPc);
if (totale == true && scommessa == "pari") {
    console.log("nino");
}
else if (totale == true && scommessa == "dispari") {
  console.log("hai perso");
}
// funzioni da utilizzare
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isEven(num){
  if (num%2 == 0) {
    return true
  }
  else{
    return false
  }
}
