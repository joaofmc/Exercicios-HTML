let citacoes = [
    {texto: 'Uma família não é um grupo de parentes; é mais do que a afinidade do sangue, deve ser também uma afinidade de temperamento. Um homem de génio muitas vezes não tem família. Tem parentes.', autor: 'Fernando Pessoa'}, 
    {texto: 'Os ingratos pensam minorar ou justificar a sua ingratidão, memorando com frequência os vícios e defeitos dos seus benfeitores.', autor: 'Marquês de Maricá'}, 
    {texto: 'Se soubéssemos quantas e quantas vezes as nossas palavras são mal interpretadas, haveria muito mais silêncio neste mundo.', autor: 'Oscar Wilde'}]

let frase = document.querySelector('blockquote')
let autor = document.querySelector('em')
let botao = document.querySelector('button')

console.log(frase, autor, botao)

botao.addEventListener('click', ()=>{
   let num = Math.floor(Math.random() * citacoes.length)

   frase.innerText = citacoes[num].texto
   autor.innerText = citacoes[num].autor
})