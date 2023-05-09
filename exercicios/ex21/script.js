function tipoDado(dado){
    if(typeof dado === 'string'){
        console.log("o tipo de dado é string");
    } else if (typeof dado === 'number'){
        console.log("o tipo de dado é number");
    } else if (typeof dado === 'boolean'){
        console.log("o tipo de dado é boolean");
    }
}

tipoDado(true);
tipoDado(23);
tipoDado("teste");
