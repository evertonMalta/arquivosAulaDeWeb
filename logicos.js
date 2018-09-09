function compras(trabalho1 , trabalho2){
    const comprarSorvete = trabalho1||trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const coprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, coprarTv32, manterSaudavel}
}


const everton = compras(true, true)

console.log(everton);
