let caixa = document.querySelector('#caixa')
let cores=['azul', 'verde', 'ouro']
let cursos = ['CURSOS','CSS','JAVASCRIPT', cores]
cursos[0]='HTML'
console.log(cursos)

//aciciona um elemento no final do array
cursos.push('C++')


//retira um elemento do final do array
cursos.pop()


//adiciona o elemento no inicio do array
cursos.unshift('C++')

//Retira um elento do inicio do array
cursos.shift()


cursos.map((el)=>{
    let p = document.createElement('p')
    p.innerHTML=el
    caixa.appendChild(p)
    
    
})