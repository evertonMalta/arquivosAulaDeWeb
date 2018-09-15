function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+"!!!");
    }catch(e)  {
        console.log(e);
        
    }
    
    
}
const obj = { nome: "Roberto"}

imprimirNomeGritado(obj)
