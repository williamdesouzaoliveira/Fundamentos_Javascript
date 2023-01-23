
const caixaCursos=document.querySelector("#caixaCursos")
const vtn_c=document.querySelectorAll(".curso")
const c1_2=document.querySelector("#c1_2")
const cursos=['html','CSS','Javascript','PHP','React', 'MySQL','Reactnative']
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")

cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id",`c${chave}`)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el
    

    const comandos=document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb=document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name","rb_curso")
    
    comandos.appendChild(rb)

    novoElemento.append(comandos)

    caixaCursos.appendChild(novoElemento)
})



btnCursoSelecionado.addEventListener("click",(e)=>{

    //capiturando todos os inputs tipo radio e transformado em array
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    
    let radioSelecionado=todosRadios.filter((e)=>{
        return e.checked
    })
    radioSelecionado=radioSelecionado[0]
   // const cursoSelecionado=radioSelecionado.parentNode.parentNode.firstChild.textContent
   const cursoSelecionado=radioSelecionado.parentNode.previousSibling.textContent
    
   alert(`Curso selecionado: ${cursoSelecionado}`)
   
})


// parentNode
// childNodes[nodenumbver]
// firstChild
// lastChild
// nexSibling
// previoussibling
