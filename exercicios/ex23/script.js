function checarTamanhoTexto(texto) {
    if(texto.lenght > 10) {
        console.log("Texto muito Longo");
    } else {
        console.log("texto dentro do limite");
    }
}

checarTamanhoTexto("teste");
checarTamanhoTexto("vamos testar se funciona");
checarTamanhoTexto("10-");