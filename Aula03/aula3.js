
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


var sobrenome = "Oliveira"
let empresa = "Tecnologia"
if(true){

    var nome = "William"
    console.log(empresa)

}

function mostraVariavel(){

   let nomeDentroDaFuncao = 'João'

   if(true){

    console.log(`Imprimindo o nome dentro da funcao e dentro do if: ${nomeDentroDaFuncao}`)
    console.log(`Imprimindo o nome da empresa fora do contexto da funcao: ${empresa}`)
   }
}


//variável não encontrada fora do escopo de onde foi definida
//console.log(`Imprimindo o nome fora da funcao e dentro do if: ${nomeDentroDaFuncao}`)


//Com a utilização de var é possível ter acesso a variável em qualquer escopo
console.log(`${nome} e ${sobrenome}`)

mostraVariavel()

