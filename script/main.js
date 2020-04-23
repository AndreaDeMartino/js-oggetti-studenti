$(document).ready(function () {
  // Descrizione:
  // Creare un oggetto che descriva uno studente
  // lo studente avrà le seguenti proprietà: nome, cognome e età.
  // Stampare attraverso il for..in tutte le proprietà (chiavi e valori).

  var student = {
    nome: 'Andrea',
    cognome: 'De Martino',
    eta: 27
  }

  // Print keys and values of the object "student"
  for (var key in student){
    console.log(key + ': ' + student[key]);
  }

});