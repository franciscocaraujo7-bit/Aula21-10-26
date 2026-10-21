// function digaOla() {
//     return "Olá Mundo";
// }
// let mensagem = digaOla()

// console.log(mensagem);

// function multiply(a, b) {
//   return a * b;
// }
// let fator1 =Number(prompt("Digite um número:"))
// let fator2 =Number(prompt("Digite outro número:"))

// let resultado = multiply(n1, n2)
// console.log(resultado)


function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "O número " + numero + " é PAR.";
    } else {
        return "O número " + numero + " é ÍMPAR.";
    }
}
let numero = Number(prompt("Digite um número:"));
console.log(verificarParOuImpar(numero)); 
 