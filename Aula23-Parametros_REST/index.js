
// function soma(n1,n2){

//     return n1+n2
// }

// console.log(soma(10,3))


// console.log("\n=====Parâmetros REST=============\n")

// function soma(...valores){

//     let soma=0
//     console.log(valores.length)
//     for(let i of valores){
//         soma+=i
//     }
//     return soma
// }




// let resultado = soma(10,3,8,8,2,4,6,7,7,8,5,3,10)
// console.log(resultado)


function soma(...valores){
    let total=0

    for(let i in valores){

        // console.log(valores[i])
        
        total+=valores[i]
    }
    return total
}

console.log(soma(2,5,3,4))