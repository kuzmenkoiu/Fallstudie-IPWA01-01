var Tabellenarray = new Array();

    Tabellenarray[0] = ["Deutschland", "Robert Bosch GmbH",    "1000"];
    Tabellenarray[1] = ["Deutschland", "Arcelor Mittal GmbH",  "2000"];
    Tabellenarray[2] = ["Deutschland", "BWM AG",               "800"];
    Tabellenarray[3] = ["USA",         "Robert Bosch GmbH",    "1200"];
    Tabellenarray[4] = ["USA",         "BWM AG",               "1100"];
    Tabellenarray[5] = ["Indien",      "Arcelor Mittal GmbH",  "2500"];
    Tabellenarray[6] = ["Deutschland", "Audi AG",              "900"];
    Tabellenarray[7] = ["USA",         "Audi AG",              "1000"];
    Tabellenarray[8] = ["Russland",    "BMW AG",               "1400"];
    Tabellenarray[9] = ["China",       "Robert Bosch GmbH",    "1800"];

function ausgeben() {
    var m;
    var i = 0;
    var j = 0;
	var Zellenwert;
	var ausgabe;
    for (m = 1; m <= document.getElementsByTagName("td").length; m++ ) {
        Zellenwert = Tabellenarray[i][j];
        ausgabe = document.getElementById("ausgabe" + m);
        ausgabe.innerHTML = Zellenwert;
         if (j < 2) {
            j++;  
         } else {
            i++;
            j=j-2;
         }
    }    
}
document.addEventListener('DOMContentLoaded', init);

