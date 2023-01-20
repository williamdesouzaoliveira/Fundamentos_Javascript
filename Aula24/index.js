
let f=function(...val){

    let total=0

    for(let i of val){

        total+=i
    }
    return total
}

let total=f(10,3,4,8,5,4,4,4)
console.log(total)