$(document).ready(function() {

  for (i=1; i<=31; i++) {
    if (i<10) {
      i = "0"+i;
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
