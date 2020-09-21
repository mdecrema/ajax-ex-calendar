$(document).ready(function() {

  var dataIniziale = "2018-01-01";

  var calendarDate = moment(dataIniziale);
  console.log(calendarDate);

  $.ajax({
  url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
  data: {
            "year": 2018,
            "month": 0
        },
  method: "GET",
  success: function (data, stato){
    console.log(data.response);
  },
  error: function (richiesta, stato, errori) {
    alert("Errore: "+errori);
  }
})


function cicloGiorni(num) {
  for (i=1; i<= calendarDate.daysInMonth(); i++) {
    if (i<10) {
      i = "0"+i;
    } else {
      i = i;
    }
}


    var day = {
      "giorno": i,
      "mese": calendarDate.format("MMMM"),
    }

// Vado a inserire tutto nel tamplate e lo invio all'html
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var contenuto = template(day);

  $(".gg-mm").append(contenuto);

}

})
