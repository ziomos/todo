/**
 * Created by Wojtek Dell on 2014-07-11.
 */

$(document).ready(function(){
    $("#myTab a").click(function (e) {
        e.preventDefault()
        $(this).tab("show")
    });
});

require(["dojo/on", "dojo/dom","dojo/domReady!"],
    function(on, dom) {
        var zapisz = dom.byId("zapisz");
        var wyświetl_wszystko = dom.byId("wyświetl_wszystko");
        var odczyt = dom.byId("odczyt");
        var skasuj = dom.byId("skasuj");
        var usun = dom.byId("usun");



        var dane;




        on(zapisz, "click", function (evt) {
            localStorage.setItem(
                document.forms.formularz.tytul.value,
                dane = "Tytuł: " + document.forms.formularz.tytul.value + ", Autor: " + document.forms.formularz.autor.value + ", Rok: " + document.forms.formularz.rok.value + ". "
            );

        });

        on(odczyt, "click", function (evt) {
            var dana_odczyt = dom.byId("dana_odczyt");
            var dana = localStorage.getItem( document.forms.odczyt.klucz.value );
            dana_odczyt.innerHTML = dana;
        });

        on(wyświetl_wszystko, "click", function (evt) {
            var zawartosc = '';
            for (var klucz in localStorage)
                zawartosc += ( localStorage.getItem(klucz) + ' ');
            var wynik = dom.byId("wynik");
            wynik.innerHTML = zawartosc;
            //alert(zawartosc);

        });

        on(skasuj, "click", function (evt) {
            document.forms.formularz.data.value =
                localStorage.removeItem(document.forms.skasuj.klucz.value);
        });

        on(usun, "click", function (evt) {

            localStorage.clear();
        });





    });

function odczyt(){
    for (var klucz in localStorage)
        document.write(klucz + "<br>");

}



