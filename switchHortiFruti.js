const input = require("readline-sync");

var fruta = input.question(" Digite a fruta: ");

switch(fruta){
  case "banana":
   console.log(fruta + " : R$ 3 reais o kilo");
   break;
   case "laranja":
   case "morango":
   console.log(fruta +" : R$ 10 reais o kilo");
   break;
   case "uva":
   console.log(fruta + " : R$ 8 reais o kilo");
   break;
   default:
    console.log("Fruta não encontrada");
}
    