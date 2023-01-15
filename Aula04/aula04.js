
let soma, num1, num2

num1=10, num2 = 10

soma = num1+num2
console.log(soma)

num1+=3

console.log(num1+num2)

let res = num1%num2
console.log(`Resultado Num1 % Num2: ${res}`)
console.log(`Resultado da Divisão num1 / num2: ${num1/num2}`)

// while(num1>=0){

//     console.log(`Resultado : ${num1%num2}`)
//     num1--
// }

for(let i = num1;num1>=0;num1--){

    console.log(`Resultado com for: ${num1%num2}`)
}