function menüausrichtung() {
    var browsersprache = navigator.language;
    var ausrichtung;
    var ausgabe;

    const spracharray = new Array("he", "yi", "hbo", "ar", "arz", "az-Arab", "bft", "fa", "glk-Arab", "ku", "ckb", "kk-Arab", "ms-Arab", "mzn", "ota", "pa", "ps", "sd-Arab", "ug", "chg", "ur", "uz-Arab", "syr", "syc", "arc", "dv",);

    if (spracharray.includes(browsersprache)) {
        ausrichtung = '<div dir="rtl"><button class="btn btn-own dropdown-toggle my-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">Menü</button><ul class="dropdown-menu"><li><a class="dropdown-item" href="#start">Start</a></li><li><a class="dropdown-item" href="#tabelle">Tabelle</a></li><li><a class="dropdown-item" href="#ende">Ende</a></li></ul></div>';
        ausgabe = document.getElementById("menüplatzierung");
        ausgabe.innerHTML = ausrichtung;
    } else {
        ausrichtung = '<div dir="ltr"><button class="btn btn-own dropdown-toggle my-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">Menü</button><ul class="dropdown-menu"><li><a class="dropdown-item" href="#start">Start</a></li><li><a class="dropdown-item" href="#tabelle">Tabelle</a></li><li><a class="dropdown-item" href="#ende">Ende</a></li></ul></div>';
        ausgabe = document.getElementById("menüplatzierung");
        ausgabe.innerHTML = ausrichtung;
    }
}