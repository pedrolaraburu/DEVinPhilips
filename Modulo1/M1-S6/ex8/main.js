// import fetch from "node-fetch";
const arrayUsers = []

async function getUsers(quantidade){
    if (quantidade > 15) quantidade = 15;
    const resposta = await fetch(`https://randomuser.me/api/?results=${quantidade}`);
    const data = await resposta.json();

    data.results.forEach(user => {
        const novoUser = {
            name: `${user.name.title} ${user.name.first} ${user.name.last}`,
            photo: user.picture.large,
            email: user.email,
            location: `${user.location.street.name} - ${user.location.street.number} - ${user.location.city} - ${user.location.state} - ${user.location.country}`,
        }

        arrayUsers.push(novoUser);
    });
}

function mostraUsers(users){
    const ul = document.getElementById('lista')

    ul.replaceChildren()

    users.forEach(user => {
        const li = document.createElement('li');

        li.innerHTML = `
        <img src="${user.photo}"/>
        <div id="container">
        <p>${user.name}</p>
        <p>${user.email}</p>
        <p>${user.location}</p>
        <div/>
        `
        

        ul.appendChild(li);
    });
    
}

const bEnviar = document.getElementById('b-enviar');

bEnviar.addEventListener('click', async () => {
    const resp = parseInt(document.getElementById('quantidade').value);
    await getUsers(resp);
    mostraUsers(arrayUsers);
})


