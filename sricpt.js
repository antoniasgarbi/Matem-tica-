let num1 = 6
let num2 = 4

function somar(num1, num2){
return num1 + num2}

function multiplicar(num1, num2){
    return num1 * num2
}
function diminuir(num1, num2){
    return num1 - num2}

function dividir(num1, num2){
    return num1 / num2
}
function pontencial(num1,num2){
    return num1 ** num2 
}



let resultado = somar(num1, num2)
console.log(`A soma de ${num1} + ${num2} é igual a ${resultado}`)

let resultado1 = diminuir(num1,num2)
console.log(`A subtração de ${num1} - ${num2} é ${resultado1}`)

let resultado2 = multiplicar(num1,num2)
console.log(`A multiplicação de ${num1} * ${num2} é ${resultado2}`)

let resultado3 = dividir(num1,num2)
console.log(`A divisão de ${num1} / ${num2} é igual a ${resultado3}`)

let resultado4 = pontencial(num1, num2)
console.log( `O potencial de ${num1} elevado a  ${num2} é igual a ${resultado4}` )
   