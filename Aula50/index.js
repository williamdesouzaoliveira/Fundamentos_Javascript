let arr = document.querySelector("#array")
let txt_pesquisar = document.querySelector('#btnVerificar')
let btnReduzir = document.querySelector('#btnReduzir')

let resultado = document.querySelector('#resultado')


const elementos_array = [11,15,19,10,16,17,12]

arr.innerHTML = `[${elementos_array}]`


let total=0
btnReduzir.addEventListener('click',(e)=>{

   resultado.innerHTML= elementos_array.reduce((x,el,i)=>{
      
        return el+x
    
    })
    
})

