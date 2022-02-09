const input = require("readline-sync");

console.log("Olá :), sou seu atendente virtual, iremos começar seu cadastro."); 

const nome = input.question("Digite seu nome: ")
const idade = input.question("Digite sua idade: ")

if (idade >= 16 && idade < 18 ){
    console.log(nome + " , pode entrar :), mas não pode beber!");
}  else if (idade >= 18 ){
            console.log(nome + " , pode entrar, Bebida Alcólica liberada :)");
   }else {
    console.log(nome+ " , entrada permitida apenas para maiores de 16 anos :)");
   };
   


