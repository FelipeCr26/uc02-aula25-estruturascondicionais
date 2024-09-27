//Escreva um programa que diga se o numero
//informado pelo usuário é par ou impar
//Imprima o numero e o resultado


const divRoot = document.getElementById("root")

const numero = Number(prompt('informe um número'))

const resto = numero % 2

console.log(resto)


let mensagem = ""

if (resto === 0) {
    mensagem = `${numero} é par`
}

else {
    mensagem = `${numero} é impar`
}

divRoot.appendChild(document.createTextNode(mensagem))