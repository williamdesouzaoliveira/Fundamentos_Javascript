

let elemento1=document.getElementById("html")
let elemento2=document.getElementById('css')
let elemento3=document.getElementById('Javascript')
let elemento4=document.getElementById("php")
let elemento5=document.getElementById('react')
let elemento6=document.getElementById('mysql')
console.log(elemento1.id)
console.log(elemento2)
console.log(elemento3)
console.log(elemento4)
console.log(elemento5)
console.log(elemento6)

//==========Array com os elementos obtidos com getElementById

const arr=[
    elemento1,
    elemento2,
    elemento3,
    elemento4,
    elemento5,
    elemento6
]

arr.map((e,i)=>console.log(`O elemento ${e.innerHTML} está na posição ${i+1}`))