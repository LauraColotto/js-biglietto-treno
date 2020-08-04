// Chiedo quanti km vuole fare l'utente

var kmSelected = prompt("Quanti kilometri vuoi percorrere?");

var kmInt = parseInt(kmSelected);

console.log(kmInt);

// Chiedo quanti anni ha

var età = prompt("Quanti anni hai?");

var etàInt = parseInt(età);

console.log(etàInt);

// Calcolo il costo totale del viaggio in base ai km

var costoFull = kmInt * 0.21;
console.log(costoFull);

// Confronto l'età con il possibile sconto

if(etàInt > 18 && etàInt < 65){
  document.getElementById("prezzo"). innerHTML = costoFull + " " + "€";
} else if(etàInt < 19){
      var scontoMin = ((costoFull * 20) / 100);
      document.getElementById("prezzo"). innerHTML = scontoMin + " " + "€";
} else if(etàInt > 64) {
      var scontoGranny = ((costoFull * 40) /100);
      document.getElementById("prezzo"). innerHTML = scontoGranny + " " + "€";
}
