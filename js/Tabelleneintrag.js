var Tabellenarray = new Array();

    Tabellenarray[0] = ["",            "",                     ""];
    Tabellenarray[1] = ["Deutschland", "Robert Bosch GmbH",    "1000"];
    Tabellenarray[2] = ["Deutschland", "Arcelor Mittal GmbH",  "2000"];
    Tabellenarray[3] = ["Deutschland", "BMW AG",               "800"];
    Tabellenarray[4] = ["USA",         "Robert Bosch GmbH",    "1200"];
    Tabellenarray[5] = ["USA",         "BMW AG",               "1100"];
    Tabellenarray[6] = ["Indien",      "Arcelor Mittal GmbH",  "2500"];
    Tabellenarray[7] = ["Deutschland", "Audi AG",              "900"];
    Tabellenarray[8] = ["USA",         "Audi AG",              "1000"];
    Tabellenarray[9] = ["Russland",    "BMW AG",               "1400"];
    Tabellenarray[10]= ["China",       "Robert Bosch GmbH",    "1800"];
 
var Filterarray = new Array();

    Filterarray[0] =  [Tabellenarray[0][0],
                       Tabellenarray[1][0],
                       Tabellenarray[2][0],
                       Tabellenarray[3][0],
                       Tabellenarray[4][0],
                       Tabellenarray[5][0],
                       Tabellenarray[6][0],
                       Tabellenarray[7][0],
                       Tabellenarray[8][0],
                       Tabellenarray[9][0],
                       Tabellenarray[10][0]];
    
    Filterarray[1] =  [Tabellenarray[0][1],
                       Tabellenarray[1][1],
                       Tabellenarray[2][1],
                       Tabellenarray[3][1],
                       Tabellenarray[4][1],
                       Tabellenarray[5][1],
                       Tabellenarray[6][1],
                       Tabellenarray[7][1],
                       Tabellenarray[8][1],
                       Tabellenarray[9][1],
                       Tabellenarray[10][1]];

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

/*
const response = await fetch("build/Tabellendaten.json")
const json = await response.json()
json
*/