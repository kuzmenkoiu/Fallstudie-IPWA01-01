fetch("build/Tabellendaten.json")
.then((response) => {
  return response.json();
})
.then((arraydata) => {

  var Filterarray = new Array();

    Filterarray[0] =  [arraydata[0].land,
                       arraydata[1].land,
                       arraydata[2].land,
                       arraydata[3].land,
                       arraydata[4].land,
                       arraydata[5].land,
                       arraydata[6].land,
                       arraydata[7].land,
                       arraydata[8].land,
                       arraydata[9].land
                      ];

    Filterarray[1] =  [arraydata[0].unternehmen,
                       arraydata[1].unternehmen,
                       arraydata[2].unternehmen,
                       arraydata[3].unternehmen,
                       arraydata[4].unternehmen,
                       arraydata[5].unternehmen,
                       arraydata[6].unternehmen,
                       arraydata[7].unternehmen,
                       arraydata[8].unternehmen,
                       arraydata[9].unternehmen
                      ];

  var option1 ="";
  var array1 = new Set(Filterarray[0]);
  var newArray1 = Array.from(new Set(array1));
  var ausgabe1;
  for(var i = 0; i <= newArray1.length; i++ ) {
    option1 += '<option value="' + newArray1[i] + '">' + newArray1[i] + "</options>";
    ausgabe1 = document.getElementById("landfilter");
    ausgabe1.innerHTML = option1;
  }

  var option2 ="";
  var array2 = new Set(Filterarray[1]);
  var newArray2 = Array.from(new Set(array2));
  var ausgabe2;
  for(var i = 0; i <= newArray2.length; i++ ) {
    option2 += '<option value="' + newArray2[i] + '">' + newArray2[i] + "</options>";
    ausgabe2 = document.getElementById("unternehmenfilter");
    ausgabe2.innerHTML = option2;
  }
});



