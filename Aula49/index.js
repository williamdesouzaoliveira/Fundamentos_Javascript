let arr = document.querySelector("#array")
let txt_pesquisar = document.querySelector('#btnVerificar')
let btnVerificar = document.querySelector('#btnVerificar')

let resultado = document.querySelector('#resultado')


const elementos_array = [11,15,19,10,16,17,12]

arr.innerHTML = `[${elementos_array}]`


btnVerificar.addEventListener('click',(el)=>{

   const ret = elementos_array.some((e,i)=>{
        
        if(e < 18){
            resultado.innerHTML=`Valor encontrado na posição ${i}`
        }
        return e >=18
    })

    if(ret){
        console.log('entrada permitida')
    }else{
        console.log('idade não permitida')
    }

    
})