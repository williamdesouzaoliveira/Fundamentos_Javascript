
const todasAsDiv = [...document.getElementsByTagName('div')]
const cursosTodos=[...document.getElementsByClassName('curso')]
const cursosC1=[...document.getElementsByClassName('c1')]
const cursosC2=[...document.getElementsByClassName('c2')]


// console.log(todasAsDiv)
// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(id)

//=====Utilizando querySelector e querySelectorAll

//imprime a primeira div que ele encontrar
const getQuerySelector=document.querySelector('div')
console.log(getQuerySelector)

//busca todas as div em forma de nodeList
const getQuerySelectorAll=[...document.querySelectorAll('div')]
console.log(getQuerySelectorAll)





//obtendo todas as classes curso
const getTodasAsclassesCursos=document.querySelectorAll('.curso')
console.log(getTodasAsclassesCursos)



//obtendo um id com querySelector
const getId=document.querySelector('#c2')
console.log(getId)


//retorna um nodeList contendo somente o elemento do id especificado na posição 0
const getId2=document.querySelectorAll('#c1')[0]
console.log(getId2)

//Obtendo todas as divs e todas tags p
const tagsPeDiv=document.querySelectorAll('div,p')
console.log(tagsPeDiv)


//Obtendo elementos da classe c1 e também elementos de tag p
const getPclasseC1=document.querySelectorAll('.c1,p')
console.log(getPclasseC1)


const getDivComAtribClass=document.querySelectorAll('div[class]')
console.log(getDivComAtribClass)

const getPinsideDiv=document.querySelectorAll('div > p')
console.log([...getPinsideDiv])