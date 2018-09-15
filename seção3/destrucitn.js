const pessoa = {
    nome: "everton",
    idade: 19,
    endereco: {
        rua: "asdasfs",
        numero: 123
    }
}

const {sobrenome, nascimento=10} = pessoa;

console.log(sobrenome , nascimento);

