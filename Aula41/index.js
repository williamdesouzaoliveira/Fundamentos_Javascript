
cursos = ["HTML", "CSS", "Javascript", "PHP","React", "MySQL"]


const caixa1=document.querySelector("#caixa1")

// caixa1.appendChild(novoElemento)
// novoElemento.setAttribute("id", 'c7')
// novoElemento.setAttribute("class", "curso c1")
// novoElemento.innerHTML="novo elemento"

const divImg=document.createElement("img")

divImg.setAttribute("src","./lixeira.png")
divImg.setAttribute("id","lixeira")
caixa1.appendChild(divImg)

cursos.map((el,i)=>{

    const elemento = document.createElement("div")

     elemento.setAttribute("id", `c${i}`)
    elemento.innerHTML=el
    elemento.setAttribute("class", "curso c1")
    elemento.innerHTML=el

    caixa1.appendChild(elemento)

    const lixeira=document.createElement("img")
    lixeira.setAttribute("src","./lixeira.png")
    lixeira.setAttribute("id","lixeira")

    lixeira.addEventListener("click",(e)=>{

        console.log(e.target.parentNode)
        
       caixa1.removeChild(e.target.parentNode)
        
    })
    elemento.appendChild(lixeira)
    
    
    
    


    

   
    
    

   
    // elemento.addEventListener("click", (evt)=>{     
    //     caixa1.removeChild(evt.target)
    // })
    
    
})




