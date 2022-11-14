const minMax = (arrayzao) => {
    let teste = [];
    for (i=0; i<arrayzao.length; i++) {
        teste.push(arrayzao[i]);
    }
    if(teste.length == 0 || teste[0] == null){
        console.log("Não é possível encontrar");
    } else {
        console.log("Mínimo: " + Math.min(...teste));
        console.log("Máximo: " + Math.max(...teste));
    }
}

let testando = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
let testando2 = []
let testando3 = [1]
let testando4 = [1, -1]
let testando5 = [null]
let testando6 = [-2,-2,-2,-2] 
let testando7 =  [20,10, 30]  




minMax(testando)
console.log('\n')
minMax(testando2)
console.log('\n')
minMax(testando3)
console.log('\n')
minMax(testando4)
console.log('\n')
minMax(testando5)
console.log('\n')
minMax(testando6)
console.log('\n')
minMax(testando7)
