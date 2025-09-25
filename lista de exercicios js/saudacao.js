let nome = "João"

function digaOi(nome){
    return "Olá," + nome + "!"
}

console.log(digaOi(nome))



function digaTchau(nome){
   return "Até logo," + nome +"!"
}

console.log(digaTchau(nome))


module.exports = {digaTchau, digaOi}