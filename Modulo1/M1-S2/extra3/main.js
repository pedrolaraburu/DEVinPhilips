let idade = 0;
let maior = 0;
let menor = Infinity;
let i = 0;
let soma = 0;

do {
    idade = Number(prompt("Digite sua idade"))
    if(isNaN(idade) || idade < 0){
        break;
    }
    if (idade > maior){
        maior = idade;
    }
    if(idade < menor) {
        menor = idade;
    }
    soma+= idade;
    i++;
} while (true)
menor == Infinity ? alert('Nenhum valor válido informado') : alert(`Maior idade: ${maior}\nMenor idade: ${menor}\nMédia das idades: ${soma/i}`)