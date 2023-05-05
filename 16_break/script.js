let nome = "João";

for(let i = 0; i < 10; i = i + 1) {
    if(i==3){
        nome = "Pedro";
    }
    if(i == 5 && nome == "Pedro"){
        console.log("O nome é João, pode parar");
        break;
    }
    console.log(i);
}