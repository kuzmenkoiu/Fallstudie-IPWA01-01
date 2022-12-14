var tabellendaten;
fetch("../data/Tabellendaten.json")
.then((response) => {
  return response.json();
})
.then((alldata) => {
    tabellendaten = alldata
});

var app = new Vue({
    el: '#app',
    data: {
        search: {
            land: '',
            unternehmen: '',
            emission: '',
        },
        sortBy: 'land',
        sortAsc: true,
        values: tabellendaten
    },
    computed: {
        filteredValue: function() {
            return this.values.filter(function(item) {
                    for(const key in this.search) {
                        const query = this.search[key].trim();
                        if(query.length > 0) {
                            if(!item[key].includes(query)) {
                                return false;
                            }
                        }
                    }
                    return true;
                }.bind(this))
                .slice().sort(function (a, b) {
                    return (this.sortAsc ? 1 : -1)*a[this.sortBy].localeCompare(b[this.sortBy])}.bind(this)
                );
        }
    }

})