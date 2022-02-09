const input = require("readline-sync");

console.log("Olá :), sou seu atendente virtual, iremos começar seu cadastro."); 

const nome = input.question("Digite seu nome: ")
const idade = input.question("Digite sua idade: ")
var nacio = input.question("Digite sua Nacionalidade: ")

if (idade >= 18 || nacio === "brasileiro" ) {
        console.log(nome + " , pode entrar :)")
}   else if (idade >= 18 && nacio === "americano"){
          console.log(nome + " , pode entrar com autorização da Policia federal :)")
    }  else { 

console.log(nome + " , ACESSO NEGADO")
};