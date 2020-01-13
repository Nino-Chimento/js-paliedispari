
var primaParola = "anna"
var listaPrimaParola =[]
var secondaParola = "anna"
var listaSecondaParola =[]
if (primaParola.length != secondaParola.lenght) {
    alert("le parole non hanno la stessa lunghezza")
}
for (var i = 0; i < primaParola.length; i++) {
  listaPrimaParola.push(primaParola[i]);
}
console.log(listaPrimaParola);
for (var i = 0; i < secondaParola.length; i++) {
  listaSecondaParola.push(secondaParola[i]);
}
console.log(listaSecondaParola);
