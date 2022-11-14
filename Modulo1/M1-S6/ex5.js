function obterClienteNoBancoDeDados(idCliente) {
    return new Promise( (resolve, reject) => {
            const cliente = { nome: 'bruce wayne', id: idCliente };
            resolve(cliente);
    });
}

async function processar() {
    let value = await obterClienteNoBancoDeDados(7);
    console.log(value);
}


processar();