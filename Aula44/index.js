
const caixaCursos=document.querySelector("#caixaCursos")
const vtn_c=document.querySelectorAll(".curso")
const c1_2=document.querySelector("#c1_2")
const cursos=['html','CSS','Javascript','PHP','React', 'MySQL','Reactnative']
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const remover = document.querySelector("#btnRemoverCurso")

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

const radioSelecionado=()=>{

    
    //capiturando todos os inputs tipo radio e transformado em array
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    
    let radioSelecionado=todosRadios.filter((e)=>{
        return e.checked
    })
        return radioSelecionado[0]

}



btnCursoSelecionado.addEventListener("click",(e)=>{

    // const rs=radioSelecionado()]

    if(radioSelecionado()!=undefined){
        
        
   // const cursoSelecionado=radioSelecionado.parentNode.parentNode.firstChild.textContent
   const cursoSelecionado=radioSelecionado().parentNode.previousSibling.textContent

   
  
    
   alert(`Curso selecionado: ${cursoSelecionado}`)
   

    }else{
        alert("nenhum curso selecionado")
    }

    
    

})


remover.addEventListener("click",(e)=>{
    const removerCurso = radioSelecionado()

    if(removerCurso!=undefined){
    removerCurso.parentNode.parentNode.remove()
    }else{
        alert("Selecione o curso para ser removido")
    }
})


// parentNode
// childNodes[nodenumbver]
// firstChild
// lastChild
// nexSibling
// previousSibling
