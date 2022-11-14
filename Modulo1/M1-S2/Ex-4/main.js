function somador(){
    var resultado = window.document.getElementById("resultado");
    let ver = true;
    let add = 0;
    let arrN = new Array();
    while(ver){
        const num = parseInt(prompt("Digite um número"));
        if (num == -1){
            console.log(add);
            alert(`A soma dos números é ${add}`);
            resultado.innerHTML = `A soma dos números é ${add}<br/>Números digitados: ${arrN}.`;
            ver = false;
        } else {
            add += num;
            arrN.push(num)
            continue;
        }
    } 
}
