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
    alert("hai vinto");
}
else if (totale == true && scommessa == "dispari") {
  alert("hai scelto dispari ed e'scuto pari");
}
else if (totale == false && scommessa == "pari") {
  alert("hai scelto pari ed e'uscito dispari");
}
else {
  alert( "hai vinto");
}
console.log(totale);
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
