


const all=[...document.querySelectorAll('div')]
console.log(all)

all.map((e)=>{
    e.addEventListener('click',(event)=>{
        const el=event.target
        el.classList.add('destaque')
        console.log(`O elemento ${el.innerHTML} foi clicado`)
    })
})

