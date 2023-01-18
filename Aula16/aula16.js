'use strict'

const objs = document.getElementsByTagName("div")
console.log(objs)
let num = [10,99,53,56,72]


console.log("\n\n\n=====================Utilizando FOR Tradicional===================\n\n\n")
for(let i=0; i< num.length;i++){

    
    console.log(`Na posição ${i} contem o elemento ${num[i]}`)
}

console.log("\n\n\n=====================Utilizando FOR IN=========================\n\n\n")
for( let i in objs){

    console.log(`Elemento na posição ${i} : ${objs[i].innerHTML}`)
}

console.log("\n=====================Utilizando FOR OF==============================\n\n\n")

for(let o of objs){
    console.log(o)
}