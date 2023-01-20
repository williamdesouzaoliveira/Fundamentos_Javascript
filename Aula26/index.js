

let total=0
const Somar=(val)=>{
    for(let v of val){

        total+=v
    }
    return total
}

const precos = [42,15,22,5]

const Soma=(...valores)=>{

    // let total=0
    // const Somar=(val)=>{
    //     for(let v of val){

    //         total+=v
    //     }
    //     return total
    // }

   return Somar(valores)    
}

console.log(Soma(...precos))