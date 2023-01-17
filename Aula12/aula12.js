const objs1 = document.getElementsByTagName("div")
const objs2 =[...document.getElementsByTagName("div")]



console.log(objs1)
console.log(objs2)




const jogador1 = {
    
    nome: 'william',
    energia:100,
    vidas:3
}

const jogador2 = {

    nome: 'oliveira',
    energia:100,
    vidas:5,
    velocidade:80,
    magia:120
}

// const jogador3 = {...jogador1,...jogador2}

// let n1 =[10,20,30]
// let n2=[11,22,33,44,55]
// let n3=[...n1,...n2]

const soma = (num1,num2,num3)=>{

    return num1+num2+num3
}

console.log('Resultado '  +  soma(10,20,30))
let valores = [1,5,2]
console.log(soma(...valores))


// console.log(`N1 : ${n1}`)
// console.log(`N2 : ${n2}`)

// console.log(n3)
// console.log(`N3 : ${typeof(n3)}`)

// console.log(jogador3)


//Percorrendo o array objs2 resultado do spread

objs2.forEach((el)=>{

    el.innerHTML= "joão"
})