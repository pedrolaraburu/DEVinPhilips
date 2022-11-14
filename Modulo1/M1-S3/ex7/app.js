const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matematica'
  };

const introPessoa = ({nome, idade, profissao}) => {
    console.log(`Esse é ${nome}, tem ${idade} e é ${profissao}`);
}
 
introPessoa(pessoa)