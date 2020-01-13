
var parola = "ovattavb"
var listaParola = [];
var listaParolaDaCapovolgere = [];
for (var i = 0; i < parola.length; i++) {
  listaParola.push(parola[i])
}

for (var i = 0; i < parola.length; i++) {
  listaParolaDaCapovolgere.push(parola[i])
}
var reversed = listaParolaDaCapovolgere.reverse()
console.log(listaParola);
console.log(listaParolaDaCapovolgere);
