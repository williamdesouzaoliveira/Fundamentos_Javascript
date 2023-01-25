
const cursos=['HTML', 'JAVASCRIPT', 'JAVA','SQL','NODE']

const div1 = document.createElement("div")




const caixa1=document.querySelector("#caixa1")
div1.innerHTML='William Oliveira'

div1.setAttribute("id", "curso1")
div1.setAttribute('class','curso')

caixa1.appendChild(div1)

cursos.map((e,i)=>{

    const div1 = document.createElement("div")
    div1.setAttribute("id", `curso-${i}`)
    div1.setAttribute('class', 'curso')
    div1.innerHTML=e
    caixa1.appendChild(div1)
    div1.addEventListener("click",(e)=>{
        console.log(e.target.classList.toggle('selecionado'))
    })
    
    
})



