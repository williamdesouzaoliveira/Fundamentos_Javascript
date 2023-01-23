

const idades=[15,21,30,17,18,44,12,50]
const filtroMaiorIdade=(e)=>{
    
    if(e>=18){
        return e
    }
}

const maior=idades.filter(filtroMaiorIdade)
console.log(idades)
console.log(maior)

const menor=idades.filter((e)=>{
    
    if(e<18){
        return e
    }
})
console.log(menor)

