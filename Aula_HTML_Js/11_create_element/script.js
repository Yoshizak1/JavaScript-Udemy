let  lista = document.createElement('ul');

let item = document.createElement('li');

let texto = document.createTextNode("texto lista");

item.appendChild(texto);

for(i = 0; i < 5; i++) {
    lista.appendChild(item);
}

let container = document.getElementById('container-principal');

container.appendChild(lista);