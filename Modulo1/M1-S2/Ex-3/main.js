function tabuada(){
    var resultado = window.document.getElementById("resultado");
    const num = parseInt(prompt("Digite um número"));
    var texto = '';
    for(let i = 1; i < 11; i++){
        const prod = num*i;
        texto +=`${num}x${i} = ${prod}\n`;
        resultado.innerHTML +=`${num}x${i} = ${prod}<br/>`;
    }
    window.alert("Resultado:\n" + texto);
}
