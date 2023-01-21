const cursos = ['HTML','CSS','JAVASCRIPT', 'PHP','REACT']

// cursos.map((e,i)=>{
    //     console.log(`${i+1} º Curso : ${e}`)
    // })
    

// const el=[...document.getElementsByTagName("div")]

// el.map((e)=>{
//     console.log(e.innerHTML)
// })


// const el=document.getElementsByTagName('div')

// const valores = Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(valores)


const converter = (e)=>{
 return parseInt(e)
}

const dobrar=(e)=>{
    return e*5
}
    
let num=['2','22'].map(dobrar)
console.log(num)