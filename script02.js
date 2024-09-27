// Faça um programa que obtenha quatro notas de um aluno 
// Em seguida, calcule a média simples das notas.
// Se a média for maior ou igual a 7, imprima "Aluno Aprovado"
// Se a nota for maior ou igual a 5, imprima "Aluno em recuperação"
// Senão imprima "Aluno reprovado"

// ENTRADA
const nota1 = Number(prompt("Informe a primeira nota"))
const nota2 = Number(prompt("Informe a segunda nota"))
const nota3 = Number(prompt("Informe a terceira nota"))
const nota4 = Number(prompt("Informe a quarta nota"))


// PROCESSAMENTO
const media = (nota1 + nota2 + nota3 + nota4) / 4

let mensagem = ""

// Se a nota é maior ou igual a 7, aluno aprovado
// Se a media, for maior ou igual a 5, aluno em recuperação
// Senão aluno reprovado

if (media >= 7) {
    mensagem = "Aluno Aprovado"
}
else {
    if (media >= 5) {
        mensagem = "Aluno em Recuperação"
    }

else {
    mensagem = "Aluno Reprovado"
}}

document.body.appendChild(document.createTextNode(mensagem))