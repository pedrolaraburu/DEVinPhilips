function parImpar(){
    var resultado = window.document.getElementById("resultado");
    var num = parseInt(prompt("Digite número para saber quantos pares e impares existem de 0 até o número digitado"));
    var nPar = 0;
    var nImpar = 0;
    for(var i = 0; i < num; i++){
        if(i % 2 === 0){
            nPar += 1;
        } else {
            nImpar += 1;
        }
    }
    alert(`De 0 até ${num} existem ${nPar} pares e ${nImpar} impares.`);
    resultado.innerHTML = `De 0 até ${num} existem ${nPar} pares e ${nImpar} impares.`;
}
