function calculaAreaRetangulo(altura, largura){
    return altura * largura
}
function calculaPerimetroRetangulo(altura, largura){
   return 2 * (altura + largura)
}
function calculaAreaCirculo(raio){
    const PI = 3.14
    return PI * raio * raio
}
function calculaCircunferencia(raio){
    const PI = 3.14
    return 2 * raio * PI
}

module.exports = {calculaAreaCirculo, calculaAreaRetangulo, calculaCircunferencia, calculaPerimetroRetangulo}