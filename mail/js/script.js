// chiedo all'utente la sua mail
var mailUtente = prompt('Benvenuto! Inserisci il tuo indirizzo e-mail');
 // lista email
var mailConsentite = ["info@pippo.it", "info@ofni.it", "veramail@mail.it", "tomas@sacrato.it"];
var mailVerifica = false;
// // controllo se è nell'elenco
for (var i = 0; i < mailConsentite.lenght; i++) {
  var mail = mailConsentite[i];
  if (mailUtente == mail) {
    mailVerifica = true;
  }
}
console.log(mailVerifica);
// // messaggio di conseguenza
if (mailVerifica == true) {
  console.log("E-mail corretta. Benvenuto!");
} else {
  console.log("indirizzo mail non valido");
}
