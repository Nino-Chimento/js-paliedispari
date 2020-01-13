
var parola = prompt("inserisci una parola")
var listaParola = [];
var listaParolaDaCapovolgere = [];
var conteggio=0;
for (var i = 0; i < parola.length; i++) {
  listaParola.push(parola[i])
}

for (var i = 0; i < parola.length; i++) {
  listaParolaDaCapovolgere.push(parola[i])
}
var reversed = listaParolaDaCapovolgere.reverse();
for (var i = 0; i < listaParola.length; i++) {
  if (listaParola[i] == listaParolaDaCapovolgere[i]) {
    conteggio++
  }
}
if (conteggio == listaParola.length) {
  alert("le parole sono palindrome")
}
else {
  alert("le parole non sono palindrome")
}
console.log(listaParola);
console.log(listaParolaDaCapovolgere);
console.log(conteggio);
