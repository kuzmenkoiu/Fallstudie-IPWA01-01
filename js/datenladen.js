fetch("../data/Tabellendaten.json")
.then((response) => {
  return response.json();
})
.then((alldata) => {
     const container = document.getElementById("tabellenzeile");
    alldata.forEach((dataset) => {
        const tmpl = document.getElementById("tabellenzeilen-temp").content.cloneNode(true);
        tmpl.querySelector(".land").innerHTML = dataset.land;
        tmpl.querySelector(".unternehmen").innerHTML = dataset.unternehmen;
        tmpl.querySelector(".emission").innerHTML = dataset.emission;
        container.appendChild(tmpl);
       
    });
});

document.getElementById("tabelleladen").onclick = function() { 

    let anzahlSpalten = document.getElementsByTagName("tr").length;
    for (let i = 0; i <= anzahlSpalten; i++) {
        if (document.getElementById("Tabellennode")) {
            var tabelle = document.getElementById("Tabellennode");
                tabelle.parentNode.removeChild(tabelle);
        }         
    }
    
    fetch("../data/Tabellendaten.json")
    .then((response) => {
    return response.json();
    })
    .then((alldata) => {
        var sortieroption = document.querySelector("select.sortieroption").value;
        var sortierwert = document.querySelector("select.sortierwert").value;
        if (document.getElementById("formGroupExampleInput1").value != "") {
            if (sortieroption === "Sortieroption wählen") {
                let filterdata = alldata.filter(filterdata => filterdata.land === document.getElementById("formGroupExampleInput1").value || filterdata.unternehmen === document.getElementById("formGroupExampleInput1").value);
                const container = document.getElementById("tabellenzeile");
                filterdata.forEach((dataset) => {
                    const tmpl = document.getElementById("tabellenzeilen-temp").content.cloneNode(true);
                    tmpl.querySelector(".land").innerHTML = dataset.land;
                    tmpl.querySelector(".unternehmen").innerHTML = dataset.unternehmen;
                    tmpl.querySelector(".emission").innerHTML = dataset.emission;
                    container.appendChild(tmpl);
                });
            } else {
                let filterdata = alldata.filter(filterdata => filterdata.land === document.getElementById("formGroupExampleInput1").value || filterdata.unternehmen === document.getElementById("formGroupExampleInput1").value);
                if (sortieroption === "A bis Z") {
                    if (sortierwert === "Land") {
                        let sortdata = filterdata.sort((a, b) => {
                            let fa = a.land.toLowerCase(),
                                fb = b.land.toLowerCase();

                            if (fa < fb) {
                                return -1;
                            }
                            if (fa > fb) {
                                return 1;
                            }
                            return 0;
                        });
                        const container = document.getElementById("tabellenzeile");
                        sortdata.forEach((dataset) => {
                            const tmpl = document.getElementById("tabellenzeilen-temp").content.cloneNode(true);
                            tmpl.querySelector(".land").innerHTML = dataset.land;
                            tmpl.querySelector(".unternehmen").innerHTML = dataset.unternehmen;
                            tmpl.querySelector(".emission").innerHTML = dataset.emission;
                            container.appendChild(tmpl);
                        });
                    }
                }
                if (sortieroption === "A bis Z") {
                    if (sortierwert === "Unternehmen") {
                        let sortdata = filterdata.sort((a, b) => {
                            let fa = a.unternehmen.toLowerCase(),
                                fb = b.unternehmen.toLowerCase();

                            if (fa < fb) {
                                return -1;
                            }
                            if (fa > fb) {
                                return 1;
                            }
                            return 0;
                        });
                        const container = document.getElementById("tabellenzeile");
                        sortdata.forEach((dataset) => {
                            const tmpl = document.getElementById("tabellenzeilen-temp").content.cloneNode(true);
                            tmpl.querySelector(".land").innerHTML = dataset.land;
                            tmpl.querySelector(".unternehmen").innerHTML = dataset.unternehmen;
                            tmpl.querySelector(".emission").innerHTML = dataset.emission;
                            container.appendChild(tmpl);
                        });
                    }
                }
                if (sortieroption === "Z bis A") {
                    if (sortierwert === "Land") {
                        let sortdata = filterdata.sort((a, b) => {
                            let fa = a.land.toLowerCase(),
                                fb = b.land.toLowerCase();

                            if (fa < fb) {
                                return 1;
                            }
                            if (fa > fb) {
                                return -1;
                            }
                            return 0;
                        });
                        const container = document.getElementById("tabellenzeile");
                        sortdata.forEach((dataset) => {
                            const tmpl = document.getElementById("tabellenzeilen-temp").content.cloneNode(true);
                            tmpl.querySelector(".land").innerHTML = dataset.land;
                            tmpl.querySelector(".unternehmen").innerHTML = dataset.unternehmen;
                            tmpl.querySelector(".emission").innerHTML = dataset.emission;
                            container.appendChild(tmpl);
                        });
                    }
                }
                if (sortieroption === "Z bis A") {
                    if (sortierwert === "Unternehmen") {
                        let sortdata = filterdata.sort((a, b) => {
                            let fa = a.unternehmen.toLowerCase(),
                                fb = b.unternehmen.toLowerCase();

                            if (fa < fb) {
                                return 1;
                            }
                            if (fa > fb) {
                                return -1;
                            }
                            return 0;
                        });
                        const container = document.getElementById("tabellenzeile");
                        sortdata.forEach((dataset) => {
                            const tmpl = document.getElementById("tabellenzeilen-temp").content.cloneNode(true);
                            tmpl.querySelector(".land").innerHTML = dataset.land;
                            tmpl.querySelector(".unternehmen").innerHTML = dataset.unternehmen;
                            tmpl.querySelector(".emission").innerHTML = dataset.emission;
                            container.appendChild(tmpl);
                        });
                    }
                }
            } 
        } else {
            if (sortieroption === "Sortieroption wählen") {
                const container = document.getElementById("tabellenzeile");
                alldata.forEach((dataset) => {
                    const tmpl = document.getElementById("tabellenzeilen-temp").content.cloneNode(true);
                    tmpl.querySelector(".land").innerHTML = dataset.land;
                    tmpl.querySelector(".unternehmen").innerHTML = dataset.unternehmen;
                    tmpl.querySelector(".emission").innerHTML = dataset.emission;
                    container.appendChild(tmpl);
                });
            } else {
                if (sortieroption === "A bis Z") {
                    if (sortierwert === "Land") {
                        let sortdata = alldata.sort((a, b) => {
                            let fa = a.land.toLowerCase(),
                                fb = b.land.toLowerCase();

                            if (fa < fb) {
                                return -1;
                            }
                            if (fa > fb) {
                                return 1;
                            }
                            return 0;
                        });
                        const container = document.getElementById("tabellenzeile");
                        sortdata.forEach((dataset) => {
                            const tmpl = document.getElementById("tabellenzeilen-temp").content.cloneNode(true);
                            tmpl.querySelector(".land").innerHTML = dataset.land;
                            tmpl.querySelector(".unternehmen").innerHTML = dataset.unternehmen;
                            tmpl.querySelector(".emission").innerHTML = dataset.emission;
                            container.appendChild(tmpl);
                        });
                    }
                }
                if (sortieroption === "A bis Z") {
                    if (sortierwert === "Unternehmen") {
                        let sortdata = alldata.sort((a, b) => {
                            let fa = a.unternehmen.toLowerCase(),
                                fb = b.unternehmen.toLowerCase();

                            if (fa < fb) {
                                return -1;
                            }
                            if (fa > fb) {
                                return 1;
                            }
                            return 0;
                        });
                        const container = document.getElementById("tabellenzeile");
                        sortdata.forEach((dataset) => {
                            const tmpl = document.getElementById("tabellenzeilen-temp").content.cloneNode(true);
                            tmpl.querySelector(".land").innerHTML = dataset.land;
                            tmpl.querySelector(".unternehmen").innerHTML = dataset.unternehmen;
                            tmpl.querySelector(".emission").innerHTML = dataset.emission;
                            container.appendChild(tmpl);
                        });
                    }
                }
                if (sortieroption === "Z bis A") {
                    if (sortierwert === "Land") {
                        let sortdata = alldata.sort((a, b) => {
                            let fa = a.land.toLowerCase(),
                                fb = b.land.toLowerCase();

                            if (fa < fb) {
                                return 1;
                            }
                            if (fa > fb) {
                                return -1;
                            }
                            return 0;
                        });
                        const container = document.getElementById("tabellenzeile");
                        sortdata.forEach((dataset) => {
                            const tmpl = document.getElementById("tabellenzeilen-temp").content.cloneNode(true);
                            tmpl.querySelector(".land").innerHTML = dataset.land;
                            tmpl.querySelector(".unternehmen").innerHTML = dataset.unternehmen;
                            tmpl.querySelector(".emission").innerHTML = dataset.emission;
                            container.appendChild(tmpl);
                        });
                    }
                }
                if (sortieroption === "Z bis A") {
                    if (sortierwert === "Unternehmen") {
                        let sortdata = alldata.sort((a, b) => {
                            let fa = a.unternehmen.toLowerCase(),
                                fb = b.unternehmen.toLowerCase();

                            if (fa < fb) {
                                return 1;
                            }
                            if (fa > fb) {
                                return -1;
                            }
                            return 0;
                        });
                        const container = document.getElementById("tabellenzeile");
                        sortdata.forEach((dataset) => {
                            const tmpl = document.getElementById("tabellenzeilen-temp").content.cloneNode(true);
                            tmpl.querySelector(".land").innerHTML = dataset.land;
                            tmpl.querySelector(".unternehmen").innerHTML = dataset.unternehmen;
                            tmpl.querySelector(".emission").innerHTML = dataset.emission;
                            container.appendChild(tmpl);
                        });
                    }
                }
            }
        }
    })
};