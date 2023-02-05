const selecionaCurso=document.querySelector("#btnCursoSelecionado")
//console.log(selecionaCurso)

selecionaCurso.addEventListener("click",(e)=>{
    
    const getInputs=[...document.querySelectorAll("input[type=radio]")]
    let getCurso=getInputs.filter((element)=>{

        return element.checked
    })

    getCurso=getCurso[0]
    
    const selCurso=getCurso
    console.log(selCurso.parentNode.parentNode.previousSibling.textContent)
})