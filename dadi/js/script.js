var dadoGiocatore = Math.floor(Math.random() * 6) + 1;
console.log(dadoGiocatore);
var dadoPc = Math.floor(Math.random() * 6) + 1;
console.log(dadoPc);

var lancioGiocatore = dadoGiocatore;
var lancioPc = dadoPc;

if (lancioGiocatore > lancioPc) {
  console.log("Hai vinto!");
} else if (lancioGiocatore < lancioPc) {
  console.log("Ha vinto il Pc!");
} else {
  console.log("Pareggio");
}
