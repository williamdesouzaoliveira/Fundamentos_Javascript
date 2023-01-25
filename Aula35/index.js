const caixa1=document.querySelector('#caixa1')
const caixa2=document.querySelector('#caixa2')
const btn=document.querySelector('#btn-copiar')
const classeCaixa2=document.querySelector('.curso')

const all=[...document.querySelectorAll('.curso')]

//console.log(all)


//Percorrendo o array retornado com for of
// for(let i of all){
//     console.log(i.innerHTML)
// }


all.map((e)=>{
    e.addEventListener("click",(evento)=>{
        const curso=evento.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",()=>{
    const selecionados=[...document.querySelectorAll('.selecionado')]
    
    selecionados.map((el)=>{

        caixa2.appendChild(el)
        
    })

})


const classes = classeCaixa2.classList
// console.log(classes)
