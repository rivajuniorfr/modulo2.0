const input = require("readline-sync");

const lanches = [
        { codigo:"1",especificacao:"Cachorro quente", preco:"6.00"},
        { codigo:"2",especificacao:"X-salada", preco:"4.50"},
        { codigo:"3",especificacao:"X-bacon", preco:"5.00"},
        { codigo:"4",especificacao:"Torrada simples", preco:"7.00"},
        { codigo:"5",especificacao:"Refrigerante", preco:"1.50"},
]

var codigo =  Number (input.question("Digite o codigo do lanche: "));
var qtd =     Number (input.question("Digite a quantidade deste item: "));

var soma0 = lanches[0]
var soma1 = lanches[1]
var soma2 = lanches[2]
var soma3 = lanches[3]
var soma4 = lanches[4]


if ( codigo === 1 ){

    console.log( "Total: R$ " + (soma0.preco*qtd).toFixed(2) + " reais" )

} else if (codigo === 2 ){

    console.log( "Total: R$ " + (soma1.preco*qtd).toFixed(2) + " reais")

} else if (codigo === 3 ){

    console.log( "Total: R$ " + (soma2.preco*qtd).toFixed(2) + " reais")
    
}  else if (codigo === 4 ){

    console.log( "Total: R$ " + (soma3.preco*qtd).toFixed(2) + " reais")
    
  } else if (codigo === 5 ){

    console.log( "Total: R$ " + (soma4.preco*qtd).toFixed(2) + " reais")

     } else{

    console.log( "Codigo não existe, digite um codigo valido" )

}