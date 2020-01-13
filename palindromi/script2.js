var parola =prompt("inserisci una parola");
var parolaGirata ="";
for (var i = parola.length - 1; i >=0; i--) {
  parolaGirata += parola[i]
}
console.log(parolaGirata);
if (parola == parolaGirata) {
    alert("la parola e'palindroma")
}
else {
  alert("la parola non e'palindroma")
}
