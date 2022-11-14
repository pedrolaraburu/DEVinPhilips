const uneDobraRetorna = (nArray, ...numeros) => {
    return [...nArray, ...numeros.map(numeros => (numeros * 2))]
}

console.log(uneDobraRetorna([1, 2, 3], 4, 4, 10))