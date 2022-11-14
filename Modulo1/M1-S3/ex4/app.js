const concatenaObj = (arrayzao, arrayzao2) => {
    let arrayFinal = {}
    arrayFinal = {...arrayzao, ...arrayzao2};
    console.log(arrayFinal)
}


let testando = {a: 56, b: 65, c: 64}
let testando7 =  {p: 20, q: 10, d: 30}

concatenaObj(testando, testando7)