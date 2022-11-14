function estacaoAtual(){
    var d = new Date();
    var dateDia = Number(d.getDate())
    var dateMes = Number(d.getMonth() + 1)
    var resultado = '';
    var resultadoReal = window.document.getElementById("resultado");
    // var dateDia= 5;
    // var dateMes = 3;

    if ((dateDia >= 22 && dateMes == 9) || dateMes == 10 || dateMes == 11 || (dateDia <= 21 && dateMes == 12)){
        resultado = 'Primavera';
        alert(`A estação é: ${resultado}`);
        resultadoReal.innerHTML = `${resultado}`;
    } else if((dateDia >= 22 && dateMes == 12)|| dateMes == 1 || dateMes == 2 || (dateDia <= 21 && dateMes == 3)){
        resultado = 'Verão';
        alert(`A estação é: ${resultado}`);
        resultadoReal.innerHTML = `${resultado}`;
    } else if((dateDia >= 22 && dateMes == 3) || dateMes == 4 || dateMes == 5 || (dateDia <= 21 && dateMes == 6)){
        resultado = 'Outono';
        alert(`A estação é: ${resultado}`);
        resultadoReal.innerHTML = `${resultado}`;
    } else if((dateDia >= 22 && dateMes == 6) || dateMes == 7 || dateMes == 8 || (dateDia <= 21 && dateMes == 9)){
        resultado = 'Inverno';
        alert(`A estação é: ${resultado}`);
        resultadoReal.innerHTML = `${resultado}`;
    } 

}
