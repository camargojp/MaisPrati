// Exercícios com 'for'
console.log('----------------------------------------------------')
console.log('1 - Imprima a sequência de Fibonacci até o 10º termo') 
console.log('----------------------------------------------------')

let numA = 0
let numB = 1
let numC = 0
let fibonacci = " "

fibonacci += numA + " " + numB

for(let counter = 1; counter <= 8; counter++){
    numC = numA + numB
    fibonacci += " " + numC
    numA = numB
    numB = numC
}

console.log(fibonacci)