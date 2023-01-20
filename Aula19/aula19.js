
let n=-0
let max=100
let pares=0


// while(n<max){
//     console.log(`Número ${n++}`)
//     if(n>10){
//         break
//     }
// }

console.log("\n===============================\n")

for(let i=0;i<max;i++){

   // console.log(`Numero ${i}`)
    if(i%2!=0){
        continue
       // pares++
    }
    pares++
}
console.log(`Total de números pares ${pares}`)