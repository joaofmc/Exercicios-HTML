const conversor = require('./conversor.js')  // Exercicio 1

let temperatura = conversor.converterFahrenheit(10)

console.log(temperatura)


console.log(conversor.MultiplicarNumero(10, 2))



const saudacao = require('./saudacao.js')   // Exercircio 2
console.log(saudacao.digaOi('João'))



const geometria = require('./geometria.js')  // Exercicio 3
console.log(geometria.calculaPerimetroRetangulo(10,5))   // calcular area
console.log(geometria.calculaAreaCirculo(7))   // calcular raio



const manipulador = require('./manipulador.js')  // Exercicio 4
console.log(manipulador.inverterString("João"))



const conversor2 = require('./conversor2.js')  // Exercicio 5
console.log(conversor2.converterTemperatura(30))
console.log(conversor2.quilogramasParaLibras(90))




