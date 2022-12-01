const jsondaten = await fetch("build/Tabellendaten.json");
const daten = await jsondaten.json();
daten

function ausgeben() {
var ausgabe = document.getElementById("ausgabe1");
ausgabe.innerHTML = daten;
}



    