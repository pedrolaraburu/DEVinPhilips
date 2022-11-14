import fetch from "node-fetch";
const precoBitCoin = async () => {
    const resposta = await fetch('https://api.coincap.io/v2/assets/bitcoin');
    const data = await resposta.json();
    console.log(`O preço do Bitcoin - ${data.data.symbol} em dólares hoje é $ ${data.data.priceUsd}`);
   };
precoBitCoin();
