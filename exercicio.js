// Exercicio 1

const input = require("readline-sync");

const nome = input.question(" Digite o nome do aluno: ");
var n1 =  Number (input.question("Digite nota 1 : "));
var n2 =  Number (input.question("Digite nota 2: "));
var n3 =  Number (input.question("Digite nota 3: "));
var n4 =  Number (input.question("Digite nota 4: "));
var n5 =  Number (input.question("Digite nota 5: "));

const media = parseFloat(n1+n2+n3+n4+n5)/5


if ( media <= 3.5 ){

    console.log( nome + ", sua media foi, " + media + " Você foi reprovado.")

} else if (media >= 3.6 && media <= 6.9 ){

    console.log( nome + ", sua media foi, " + media + " Você está em recuperação.")
} else{
    console.log( nome + ", sua media foi, " + media +  " Você está aprovado.")

}

// Exercicio 2 e 3

const frase = "A turma do backend do senac, é MASSA";
const frase1 = "rivajunior1983".split('').reverse().join('');

const tamanho = frase.length

console.log (tamanho);
console.log (frase1);



