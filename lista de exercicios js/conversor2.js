let celsius = 30

function converterTemperatura(celsius){
    let fahrenheit = (celsius *9/5) + 32
    return fahrenheit
}



let quilos = 60

function quilogramasParaLibras(quilos){
    let libras = (quilos * 2.20562)
    return libras
}



module.exports = {converterTemperatura, quilogramasParaLibras}