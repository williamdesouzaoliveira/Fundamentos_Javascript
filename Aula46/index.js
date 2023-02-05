


const criaElemento=(el, atrib, valor)=>{

    const elemento = document.createElement(el)
    elemento.setAttribute(atrib, valor)
    return elemento
}
const listaCursos=['Javascript','PHP','NodeJs', 'MySQL']





const main=criaElemento('main')
document.body.appendChild(main)
const novaCaixa=criaElemento('div', 'id', 'novaCaixa')
novaCaixa.setAttribute('class','caixa')
main.appendChild(novaCaixa)
const body=document.body.appendChild(main)
const caixaFuncionalidades=criaElemento('div','class','caixaFuncionalidades')
novaCaixa.appendChild(caixaFuncionalidades)
const label=criaElemento('label')
label.innerText='Cursos'
caixaFuncionalidades.appendChild(label)
const input=criaElemento('input','type','text')
caixaFuncionalidades.appendChild(input)

const adiconarAntes=criaElemento('button','id','btnAdicionarNovoCursoAntes')
adiconarAntes.innerText='Adicionar antes'

const adicionarDepois=criaElemento('button','id','btnAdicionarNovoCursoDepois')
adicionarDepois.innerText="Adicionar depois"
caixaFuncionalidades.appendChild(adiconarAntes)
caixaFuncionalidades.appendChild(adicionarDepois)

const Adicionar=criaElemento('button','id','btnAdicionarNovoCurso')
Adicionar.innerText="Adicionar"
caixaFuncionalidades.appendChild(Adicionar)

const cursos = criaElemento('div','id','caixaCursos')
cursos.setAttribute('class', 'caixa')
main.appendChild(cursos)



listaCursos.map((e, i)=>{

    const setaCurso = criaElemento('div', 'id', `${i}`)
    setaCurso.setAttribute('id', `${i}`)
    setaCurso.setAttribute('class', 'curso')
    setaCurso.innerText=e
    
   
    cursos.appendChild(setaCurso)
    
})








// const main = document.createElement('main')
// const novaCaixa=document.createElement('div')
// novaCaixa.setAttribute('id','novaCaixa')





// const caixaCursos = document.querySelector("#caixaCursos")
// const vtn_c = document.querySelectorAll(".curso")
// const c1_2 = document.querySelector("#c1_2")
// const cursos = ['html', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'Reactnative']
// const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
// const remover = document.querySelector("#btnRemoverCurso")
// const adicionarCursoAntes = document.querySelector("#btnAdicionarNovoCursoAntes")
// const adicionarCursoDepois = document.querySelector("#btnAdicionarNovoCursoDepois")
// const nomeCurso = document.querySelector("#nomeCurso")


let indice = 0
const criarNovoCurso = (curso) => {

    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${indice}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

    novoElemento.addEventListener('click',(evt)=>{
        console.log(evt.target)
    })

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.append(comandos)

    return novoElemento


}

listaCursos.map((el, chave) => {

    const novoElemento=criarNovoCurso(el)
    cursos.appendChild(novoElemento)
    indice++
    
    
})

// const radioSelecionado = () => {


//     //capiturando todos os inputs tipo radio e transformado em array
//     const todosRadios = [...document.querySelectorAll("input[type=radio]")]

//     let radioSelecionado = todosRadios.filter((e) => {
//         return e.checked
//     })
//     return radioSelecionado[0]

// }



// btnCursoSelecionado.addEventListener("click", (e) => {
//     // const rs=radioSelecionado()
//     if (radioSelecionado() != undefined) {
//         // const cursoSelecionado=radioSelecionado.parentNode.parentNode.firstChild.textContent
//         const cursoSelecionado = radioSelecionado().parentNode.previousSibling.textContent
//         alert(`Curso selecionado: ${cursoSelecionado}`)
//     } else {
//         alert("nenhum curso selecionado")
//     }

// })


// remover.addEventListener("click", (e) => {
//     const removerCurso = radioSelecionado()

//     if (removerCurso != undefined) {
//         removerCurso.parentNode.parentNode.remove()
//     } else {
//         alert("Selecione o curso para ser removido")
//     }
// })




// adicionarCursoAntes.addEventListener("click", (e) => {

//     const rs=radioSelecionado()
//     if ((radioSelecionado() != undefined)&&(nomeCurso.value !="")) {
//         const cursoSelecionado = rs.parentNode.parentNode
//         const novoCurso = criarNovoCurso(nomeCurso.value)
//         caixaCursos.insertBefore(novoCurso,cursoSelecionado)
        
//     } else {
//         alert("nenhum curso selecionado ou Nome vazio")
//     }

// })


// adicionarCursoDepois.addEventListener("click", (e) => {

//     const rs=radioSelecionado()
//     if ((radioSelecionado() != undefined) && (nomeCurso.value !="")) {
//         const cursoSelecionado = rs.parentNode.parentNode
//         const novoCurso = criarNovoCurso(nomeCurso.value)
//         caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)
        
//     } else 
//         alert("nenhum curso selecionado ou faltando nome do curso")
    

// })

// parentNode
// childNodes[nodenumbver]
// firstChild
// lastChild
// nexSibling
// previousSibling
