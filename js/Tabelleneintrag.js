class Tabelleneintrag {
    land;
    unternehmen;
    emissionswert;

    constructor (landname, unternehmensname, emission) {
        this.land = landname;
        this.unternehmen = unternehmensname;
        this.emissionswert = emission;
    }

    get landAusgeben () {
        return landname;
    }

    get unternehmenAusgeben () {
        return unternehmensname;
    }

    get emissionAusgeben () {
        return emission;
    }
}

var Tabellenarray = new Array();

    Tabellenarray[0] = ["Deutschland", "Robert Bosch GmbH",    "1000"];
    Tabellenarray[1] = ["Deutschland", "Arcelor Mittal GmbH",  "2000"];
    Tabellenarray[2] = ["Deutschland", "BWM AG",               "800"];
    Tabellenarray[3] = ["USA",         "Robert Bosch GmbH",    "1200"];
    Tabellenarray[4] = ["USA",         "BWM AG",               "1100"];
    Tabellenarray[5] = ["Indien",      "Arcelor Mittal GmbH",  "2500"];
    Tabellenarray[6] = ["Deutschland", "Audi AG",              "900"];
    Tabellenarray[7] = ["USA",         "Audi AG",              "1000"];


function init() {
	var elem = document.getElementById('button');
	elem.addEventListener('click', ausgeben);
}


function ausgeben() {
    var m;
    var i;
    var j;
	var Zellenwert;
	var ausgabe;
    for (m = 1; m <= document.getElementsByTagName("td").length; m++ ) {
        i = 0;
        j = 0;
        Zellenwert = Tabellenarray[i][j];
        ausgabe = document.getElementById("ausgabe" + m);
        ausgabe.innerHTML = Zellenwert;
         if (j > 2) {
            i++;
            j - 2;   
         } else {
            j++
         }
    }    
}
document.addEventListener('DOMContentLoaded', init);

