
const cursosTodos=[...document.getElementsByClassName("curso")]
console.log(cursosTodos)


const c1 = [...document.getElementsByClassName('c1')]
const c2 = [...document.getElementsByClassName('c2')]

console.log(c1)
console.log(c2)

c2.map((e)=>{
    e.classList.add("destaque")
})

const elementoEspecifico = document.getElementsByClassName('curso')[0]
