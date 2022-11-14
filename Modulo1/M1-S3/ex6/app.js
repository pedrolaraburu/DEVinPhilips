let palindromo2 = (nome) => {
    let stringRev = '';
    for(i = nome.length - 1; i >= 0; i--){
        stringRev += nome[i];
    }
    if (stringRev === nome){
        console.log("É um palíndromo");
    } else {
        console.log("Não é um palíndromo");
    }
}

palindromo2("pedro")
palindromo2("ana")
palindromo2("julia")

