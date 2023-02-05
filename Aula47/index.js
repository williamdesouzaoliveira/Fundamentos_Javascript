let arr = document.querySelector("#array")
let txt_pesquisar = document.querySelector('#txt_pesquisar')
let btnPesquisar = document.querySelector('#btnPesquisar')

let resultado = document.querySelector('#resultado')


const elementos_array = [10,5, 8,2,9,15,20]

arr.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener('click',(el)=>{

    resultado.innerHTML="valor não encontrado"
     elementos_array.find((el, i)=>{
        if(el==txt_pesquisar.value){
         
           resultado.innerHTML=`Valor pesquisado foi ${el} na posição ${i+1} do array`
        }

    })


})
