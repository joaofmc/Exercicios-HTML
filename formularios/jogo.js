function ObterEscolhaComputador () {
    const opcoes = ['pedra', 'papel', 'tesoura' ];
    const indiceAleatorio = Math.floor(Math.random() *opcoes.lenght); 
    
    console.log('Escolha do computador:', opcoes [indiceAleatorio]);
    return opcoes[indiceAleatorio];
}
function Jogar(jogador) {
    console.log('Sua escolha:', jogador);
    computador = ObterEscolhaComputador();

     if (jogador === computador) {
     return 'Empate!';
    } else if (
     (jogador === 'pedra' && computador === 'tesoura') ||
     (jogador === 'papel' && computador === 'pedra') ||
     (jogador === 'tesoura' && computador === 'papel')
    ) {
        return 'Você ganhou!'
    } else {
        return 'Você Perdeu!'
    }
}
const resultado = Jogar('tesoura');
console.log(resultado);

