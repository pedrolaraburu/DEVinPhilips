function somador(){
    let ver = true;
    let add = 0;
    let div = 0;
    let resultado = 0;
    while(ver){
        let num = parseInt(prompt("Digite uma nota"));
        if (num == -1){
            resultado = add / div;
            alert(`A média das notas é: ${resultado}`);
            ver = false;
        } else if (isNaN(num) || num < 0) {
            alert("Num inválido")
            continue;
        } else {
            div++;
            add += num;
            continue;
        }
    } 
}

somador()
