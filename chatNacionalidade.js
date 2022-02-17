const input = require("readline-sync");

console.log("-----Desembarque de Passageiros-----");
console.log("--------------Welcome---------------");

const nome = input.question("Digite seu nome(name): ");
const idade = input.question("Digite sua idade(age): ");
var nacio = input.question("Digite sua Nacionalidade(nationality): ");


if (idade >= 18 && nacio === "brasileiro") {
  console.log(nome + " , Entrada liberada ( allowed access) :)");
} else if (idade >= 18 && nacio === "americano") {
  console.log(nome + " , entry with authorization from the Federal Police :) ");
} else {
  console.log(nome + " , ACESSO NEGADO ( Access denied) ");
}
