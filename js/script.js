$(document).ready(function() {

  var dataIniziale = "2018-01-01";

  var calendarDate = moment(dataIniziale);
  var nomeMese = moment(dataIniziale).format("MMMM");
  console.log(calendarDate);

  $.ajax({
  url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
  data: {
            "year": 2018,
            "month": 0
        },
  method: "GET",
  success: function (data, stato){
    var data = data.response;
    console.log(data);
    cicloGiorni(data);
  },
  error: function (richiesta, stato, errori) {
    alert("Errore: "+errori);
  }
})


  for (i=1; i<= calendarDate.daysInMonth(); i++) {
    if (i<10) {
      i = "0"+i;
    }


    var day = {
      "giorno": i,
      "mese": calendarDate.format("MMMM"),
      "numGiorno": calendarDate.format("YYYY-MM-DD"),
    }

    calendarDate.add(1, "day");

// Vado a inserire tutto nel tamplate e lo invio all'html
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var contenuto = template(day);

  $(".gg-mm").append(contenuto);

}

function cicloGiorni(num) {
  for (i=0; i<num.length; i++) {
    //console.log(num[i].date);
    var giornoFesta = num[i].date;
    var nomeFesta = num[i].name;
    var codiceData = $(".ciao[date-num-giorno='"+giornoFesta+"']");
    console.log(codiceData);
     codiceData.css({color: "red"});
   }
}

// Template Mese
var mese = {
  "meseCorrente": nomeMese
}


var source = $("#entry-template-mese").html();
var template = Handlebars.compile(source);

var contenuto = template(mese);

$(".titolo-mese").append(contenuto);


/*function cambiaMese() {
  var mese = calendarDate.format("MM");
  //if ()
}*/

})
