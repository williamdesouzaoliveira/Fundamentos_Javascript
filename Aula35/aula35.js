
const idCaixa=[...document.querySelectorAll(".caixa")]
const primeiraCaixa=document.querySelector("#caixa1")
const segundaCaixa=document.querySelector("#caixa2")
const todosCursos = [...document.querySelectorAll(".curso")]
const botao = document.getElementById("btn-copiar")
// console.log(idCaixa)
todosCursos.map((e)=>{

    e.addEventListener("click",(elem)=>{

        elem.target.classList.toggle('teste')
        
    })
})


botao.addEventListener("click",(e)=>{
    
    const cursoSelecionado=[...document.querySelectorAll(".teste")]

    cursoSelecionado.map((el)=>{
    caixa2.appendChild(el)
        
    })
    
})