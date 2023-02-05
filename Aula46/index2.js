const container = document.createElement('div')
container.setAttribute('id','principal')
container.setAttribute('class', 'conteudo')
document.body.appendChild(container)

const btnCursoSelecionado = document.createElement('button')
btnCursoSelecionado.setAttribute('id','cursoSelecionado')
btnCursoSelecionado.innerText='Curso selecionado'
container.appendChild(btnCursoSelecionado)


const cursos=['Javascript','PHP','NodeJs', 'MySQL']


btnCursoSelecionado.addEventListener('click',(e)=>{
    
    alert(cursoSelecionado().innerHTML)
})

let indice=0

const tirarSelecao=()=>{
    const cursosSelecionados=[...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}


const criarNovoCurso=(curso)=>{

    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id', `c${indice++}`)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=curso
    
    novoElemento.addEventListener('click',(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
    })

    return novoElemento
}



cursos.map((el)=>{
    const novoElemento =criarNovoCurso(el)
    container.appendChild(novoElemento)    
})


const cursoSelecionado = ()=>{

    const cursosSelecionados=[...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]

    

   
}

