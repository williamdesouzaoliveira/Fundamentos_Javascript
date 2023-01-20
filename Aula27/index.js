 
//  function* cores(){

//     yield 'verde'
//     yield 'vermelho'
//     yield 'amarelo'
//     yield 'marron'
//     yield 'cinza'

//  }

//  const itc=cores()
//  console.log(itc.next().value)
//  console.log(itc.next().value)
//  console.log(itc.next().value)
//  console.log(itc.next().value)
//  console.log(itc.next().value)


// function* perguntas(){

//     const nome=yield 'Qual seu nome?'
//     const esporte=yield 'Qual seu esporte favorito'
//     return `Seu nome é ${nome} e seu esporte favorito é ${esporte}`
// }

// const it=perguntas()
// console.log(it.next().value)
// console.log(it.next('William').value)
// console.log(it.next('Natação').value)

function* contador(){
    
    let i=0
    while(true){
        yield i++

        if(i>3)
            break
    }
    
}

const itc=contador()


 
// for(let i=0;i<20;i++){

//     console.log(itc.next().value)

// }

for(c of itc){

    console.log(c)
}