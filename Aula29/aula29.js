
function aluno(nome, nota){
 
    this.nome=nome
    this.nota=nota

    console.log(nome)
    console.log(nota)

    this.dadosAnonimos=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        }, 5000);
    }

    
}


const al1=new aluno('william',75)
al1.dadosAnonimos()
