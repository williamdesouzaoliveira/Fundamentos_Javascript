
cursos = ["HTML", "CSS", "Javascript", "PHP","React", "MySQL"]


const caixa1=document.querySelector("#caixa1")

const novoElemento=document.createElement("div")

// caixa1.appendChild(novoElemento)
// novoElemento.setAttribute("id", 'c7')
// novoElemento.setAttribute("class", "curso c1")
// novoElemento.innerHTML="novo elemento"

cursos.map((el,i)=>{
    const elemento = document.createElement("div")
    elemento.setAttribute("id", `c${i}`)
    elemento.innerHTML=el
    elemento.setAttribute("class", "curso c1")
    caixa1.appendChild(elemento)
    
})




