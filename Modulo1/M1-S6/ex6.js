import fetch from "node-fetch";
const buscaIdadeNome = async (name) => {
    const resposta = await fetch(`https://api.agify.io/?country_id=BR&name=${name}`);
    const data = await resposta.json();
    if (data.age == null) console.log("Seu nome não existe nessa base de dados :(");
    else console.log(`Seu nome é ${data.name} e a idade média das pessoas com seu nome é ${data.age}.`);
   };
buscaIdadeNome("pedro");
