const notas = [1,2,3,4,5]

for(let i in notas){
    console.log(i, notas[i]);
    
}

const pessoa = {
    nome: "everton",
    sobreNome: "malta",
    idade: 15,
    peso: 94
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}