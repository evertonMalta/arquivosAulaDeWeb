function getIntRandom(min, max){
    const  valor = Math.random()*(max- min)+ min
    return Math.floor(valor)
}

let opcao = -1

do{
    opcao = getIntRandom(-1,10)
    console.log(`opcao sorteada ${opcao}`);
    
}while(opcao != -1)