function inverterString(texto){
 let inverso = ""
 console.log(texto.length)
 for(let posicao = texto.length - 1; posicao >=0; posicao --){
    inverso += texto[posicao]
 }

  return inverso

}

function imprimeCadaLetra(palavra){
   for(let posicao = 0; posicao < palavra.length; posicao ++){
      console.log(palavra[posicao])
   }
}

let nome = "João"
console.log(nome[3])

//console.log(inverterString("João é gente boa"))
module.exports = {inverterString, imprimeCadaLetra}