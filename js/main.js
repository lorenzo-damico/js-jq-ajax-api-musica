// Facciamo una chiamata ajax all'api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L'api ci restituirà decina di dischi musicali che dovremo stampare a schermo con Handlebars.
// Concentratevi sulla parte JS per la grafica potrete utilizzare il layout che troverete al seguente link
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout/downloads/
// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.

$(document).ready(function() {

  // Effettuo una chiamata ajax all'api di boolean.
  $.ajax(
    {
      "url": "https://flynn.boolean.careers/exercises/api/array/music",
      "method": "GET",
      "success": function (data, stato) {

        // Salvo la lista dei dischi ottenuta in un array dischi.
        var dischi = data.response;
        console.log(dischi);

        // Utilizziamo handlebars
        var source = $("#disco-template").html();
        var template = Handlebars.compile(source);

        // Imposto un ciclo per stampare con handlebars tutti gli oggetti disco contenuti nell'array dischi.
        for (var i = 0; i < dischi.length; i++) {

          // Salvo il disco dentro la variabile album.
          var album = dischi[i];

          // Compilo il template e lo aggiungo.
          var html = template(album);
          $(".cds-container").append(html);
        }

      },
      "error": function (richiesta, stato, errori) {
        console.log(stato);
      }
    }
  );

  // Imposto un funzione che registra il cambio di valore nella select.
  $("#genere").change(
    function () {

      // Salvo il valore della select in una variabile.
      var genereValue = this.value;
      console.log(genere);

      // Se il genere è All, mostro tutti i dischi
      if (genereValue == "All") {
        $(".cd").show();

      // Altrimenti mostro solo i dischi con il data-genere uguale alla value.
      } else {
        $(".cd").hide();
        $(".cd[data-genere='"+ genereValue +"']").show();
      }


    }
  );





});
