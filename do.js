function tabelaDeMultiplicacao(numero){
  while(for(var i=1; i<=10;i++)){
        console.log(numero+" * "+i+" "+"="+" "+numero*i)
    }
}
console.log(tabelaDeMultiplicacao())


function count(inicio, fim) {
    var inicio = 0;
    while (inicio <fim){
        inicio++;
        console.log("O número atual é"+" "+inicio+" "+"e é menor que"+" "+fim);
    }
}