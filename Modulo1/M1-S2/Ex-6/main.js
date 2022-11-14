function calculadora(){
    const operacao = prompt("Qual operação deseja realizar (+, -, * ou /)");
    const num1 = prompt("Digite o primeiro número");
    const num2 = prompt("Digite o segundo número");
    let resultado = 0;
    var resultado2 = window.document.getElementById("resultado");
    if (operacao == '+'){
        resultado = Number(num1) + Number(num2);
    } else if (operacao == '-'){
        resultado = Number(num1) - Number(num2);
    } else if (operacao == '*'){
        resultado = Number(num1) * Number(num2);
    } else if (operacao == '/') {
        resultado = Number(num1) / Number(num2);
    } else {
        alert("Digite uma opção válida (+, -, * ou /)");
        resultado.innerHTML = "Digite uma opção válida (+, -, * ou /)";
    }
    alert(`O resultado do seu cálculo é: ${resultado}`);
    resultado2.innerHTML = `O resultado do seu cálculo é: ${resultado}`;
}
