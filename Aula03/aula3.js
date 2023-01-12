
"use script"

var nome = "William"
const num = 10

//let sobrenome = 'Oliveira'

function escopoVariavel(){

    let sobrenome = 'marinho'
    if(true){
        var nome = 'tião'
        let sobrenome = 'amorim'
        console.log(nome)
        console.log(sobrenome)
    }
    console.log(sobrenome)
}
//variável nome acessível dentro de qualquer escopo
console.log(nome)

//utilizando let a variável só estará acessível dentro do seu escopo
//console.log(sobrenome)

escopoVariavel()
console.log(`Imprime constante com número ${num}`)

//Erro ao tentar atribuir outro valor a constante num
// num = 11