

const caixa=document.querySelector(".caixa")
const html=document.querySelector("#c1")
const cursos=[...document.querySelectorAll(".curso")]


caixa.addEventListener("click",(e)=>{

    console.log(e)

}
   
)
cursos.map((e)=>{
    e.addEventListener("click",(evt)=>{

        evt.stopPropagation()
        evt.target.classList.toggle('selecionado')
    })
})


