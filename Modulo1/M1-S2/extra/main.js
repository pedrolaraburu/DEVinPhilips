function somador(){
    var resultado = 0;
    var num = parseInt(prompt("Digite um número maior que 0"));
    if(num > 0){
        for(var i = 1; i <= num; i++){
            resultado +=i;
        }
        alert(`Número digitado ${num}: ${resultado}`);
    } else {
        alert("Digite um número maior que 0");
        somador()
    }


}

somador();