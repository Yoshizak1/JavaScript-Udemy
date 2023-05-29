window.addEventListener("keydown", function(e) {
    if(e.key == 'w') {
        console.log("apertou a letra w ");
    } else if(e.key == 'a') {
        console.log("apertou a letra a");
    } else if(e.key == 's') {
        console.log("apertou a letra s");
    } else if(e.key == 'd') {
        console.log("apertou a letra d");
    } else if (e.key == 'Enter') {
        console.log("Apertou a tecla Enter");
    }
})

window.addEventListener("keyup", function(e) {
    if(e.key = "Enter") {
        console.log("soltou o Enter")
    }
})