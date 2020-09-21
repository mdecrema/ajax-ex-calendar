$(document).ready(function() {

  var calendarDate = moment(date);

  $.ajax({
  url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
  data: {
            "year": 2018,
            "month": 0
        },
  method: "GET",
  success: function (data, stato) {
    var data = data.response;
    console.log(data);
    // Richiamo la funzione 'datiBrano' e gli passo l'argomento
    cicloGiorni(data);
  },
  error: function (richiesta, stato, errori) {
    alert("Errore: "+errori);
  }
})


function cicloGiorni(num) {
  for (i=1; i<=31; i++) {
    if (i<10) {
      i = "0"+i;
    } else {
      i = i;
    }
}

    var day = {
      "giorno": i,
      "mese": "Gennaio"
    }

// Vado a inserire tutto nel tamplate e lo invio all'html
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var contenuto = template(day);

  $(".gg-mm").append(contenuto);

  }
})
