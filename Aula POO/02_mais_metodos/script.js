const cachorro = {
    raca: "SRD",
    uivar: function(){
        console.log("Auuuuuuuuu");
    },
    rosnar: function(){
        console.log("grrrrrrr");
    },
    setRaca: function(raca){
        this.raca = raca;
    }
}

console.log(cachorro.raca)

cachorro.setRaca('Pastor Alemão');