function classificaIdade() {
    var idade = parseInt(window.prompt("Digite sua idade: "));

    var resposta = window.document.getElementById("resposta");

    if(isNaN(idade)){
        window.alert("Insira um número no prompt");
        resposta.innerHTML = 'Número inválido';
    } else if(idade < 0){
        window.alert("Idade inválida");
        resposta.innerHTML = 'Idade inválida';
        classificaIdade()
    } else if(idade <= 15){
        window.alert("Você é Jovem");
        resposta.innerHTML = `Você tem ${idade} anos e é jovem.`;
    } else if (idade <= 64){
        window.alert("Você é Adulto");
        resposta.innerHTML = `Você tem ${idade} anos e é adulto.`;
    } else if (idade >= 65) {
        window.alert("Você é Idoso");
        resposta.innerHTML = `Você tem ${idade} anos e é idoso.`;
    }
}
