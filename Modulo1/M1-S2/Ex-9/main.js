function calculadoraPA(){
    var resultado = window.document.getElementById("resultado");
    const n = parseInt(prompt("Digite um número inteiro"));
    const raiz = parseInt(prompt("Digite a raiz desse número"));
    let pArr = [];
    pArr.push(n);
    let soma = n;
    for(let i = 1; i < 10; i++){
        soma += raiz;
        console.log(soma);
        pArr.push(soma);
    }
    alert(`Valor inicial: ${n}\nRaiz: ${raiz}\nP.A: ${pArr}`);
    resultado.innerHTML = `Valor inicial: ${n}.<br/>Raiz: ${raiz}.<br/>P.A: ${pArr}.`;
}
