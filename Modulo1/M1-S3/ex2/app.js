const olaMundo = () => {
    const nome = prompt("Digite seu nome:")
    const res = window.document.getElementById("resposta");
    res.innerHTML = `Olá ${nome}!`;
}
