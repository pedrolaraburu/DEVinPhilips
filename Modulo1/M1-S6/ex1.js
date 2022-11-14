function sleep(valor){
    return new Promise( (res, rej) => {
        setTimeout(() => {
            res(valor);
            rej("Erro");
        }, 3000);
    })
}

sleep("Testando! :D")
    .then(res => console.log(res))
    .catch(error => console.log(error))