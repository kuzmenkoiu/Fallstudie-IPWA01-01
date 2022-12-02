fetch("build/Tabellendaten.json")
.then((response) => {
  return response.json();
})
.then((rowdata) => {
  const container = document.getElementById("tabellenzeile");
  rowdata.forEach((dataset) => {
    const tmpl = document.getElementById("tabellenzeilen-temp").content.cloneNode(true);
    tmpl.querySelector(".land").innerHTML = dataset.land;
    tmpl.querySelector(".unternehmen").innerHTML = dataset.unternehmen;
    tmpl.querySelector(".emission").innerHTML = dataset.emission;
    container.appendChild(tmpl);
  });
});



    