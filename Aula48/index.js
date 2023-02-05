let arr = document.querySelector("#array")
let txt_pesquisar = document.querySelector('#btnVerificar')
let btnVerificar = document.querySelector('#btnVerificar')

let resultado = document.querySelector('#resultado')


const elementos_array = [21,15,19,20,46,18,22]

arr.innerHTML = `[${elementos_array}]`


btnVerificar.addEventListener('click',(el)=>{

   const ret = elementos_array.every((e,i)=>{
        
        if(e < 18){
            resultado.innerHTML=`Array não conforme na posição ${i+1}`
        }
        return e >=18
    })

    if(ret){
        console.log('entrada permitida')
    }else{
        console.log('idade não permitida')
    }

    
})