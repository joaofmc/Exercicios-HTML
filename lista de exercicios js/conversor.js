function converterTemperatura(celsius){
    let fahrenheit = (celsius *1.8) + 32
    return fahrenheit
}


function converterFahrenheit(fahrenheit){
    let celsius = (fahrenheit - 32) / 1.8
    return celsius
}






// soma

function somaDoNumero (numero1, numero2){
    let soma = (numero1 + numero2)
    return soma
}


// subtrair

function SubtrairNumero (numero1, numero2){
    let subtracao = (numero1 - numero2)
    return subtracao
}


// multiplicacao

function MultiplicarNumero (numero1, numero2){
    let multiplicacao = (numero1 * numero2)
    return multiplicacao
}


// divisao

function dividirNumero (numero1, numero2){
    let divisao = (numero1 / numero2)
    return divisao
}










module.exports = {converterFahrenheit, converterTemperatura, somaDoNumero, SubtrairNumero, MultiplicarNumero, dividirNumero}