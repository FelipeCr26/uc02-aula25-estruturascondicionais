// Crie um programa, que leia dois valores numéricos 
// do usuário e em seguida, calcule sua soma.
// Em seguida, valide se o resultado da soma
// for maior que 5, então escreva a mensagem "Passou do limite".
// Senão, escreva a mensagem "Dentro do limite".

// ENTRADA
// 1- obter um valor e guardar em uma variavel chamada valor 1
// 2- obter um valor e guardar em uma variavel chamada valor 2

const valor1 = Number(prompt("Primeiro valor:"))
const valor2 = Number(prompt("Segundo valor:"))
console.log(valor1, valor2)


// PROCESSAMENTO
// 3- Somar os valores das variaveis valor 1 e 2
// e guardar em uma variavel chamada resultado
// 4- Validar se o resultado da soma for maior que 5
// e escrever a mensagem "Dentro do limite"
// se resultado for maior que 5 então escreva a mensagem
// "passou do limite" senão escreva a mensagem "Dentro do limite"

const resultado = valor1 + valor2
console.log(resultado)


let mensagem = ""
if (resultado > 5) {
    mensagem = "Passou do limite"
}

else {
    mensagem = "Dentro do limite"
}

const percentual = (valor1 * 0.10) / valor2

// Se o percentual for maior ou igual a 10, então mude
// a mensagem para percentual OK
//senão mude a mensagem para percentual alterado.
let mensage = ""

if ((percentual > 10) && (percentual ===10)){
    mensage = "Percentual Ok"
}
else {
    mensage = "Percentual Alterado"
}

// SAIDA
// 5- Imprimir a mensagem de acordo.
const divRoot = document.getElementById("root")
divRoot.appendChild(document.createTextNode(mensagem))
divRoot.appendChild(document.createElement("br"))
divRoot.appendChild(document.createTextNode(mensage))
