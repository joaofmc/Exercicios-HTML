// let nome = 'João'  // 1

// console.log('Olá, ' + nome + '!')



// let a = 10  //2
// let b = 5

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)


// let graus = 50  //3
// console.log(graus * 1.8 + 32)


// let numero = 10  //4
// if(numero > 0){
//     console.log('Este número é positivo')
// }else if(numero <0){
//     console.log('Este número é negativo')
// }


// let numero = 20   //5

// if(numero%2 === 0){
//     console.log('Par')
// }else{
//     console.log('Ímpar')
// }


// let idade = 12   //6

// if(idade >= 16){
//     console.log('Você pode votar')
// }else if(idade < 16){
//     console.log('Você não pode votar')
// }


// for(let contador = 1; contador <= 100; contador++){   //7
//   console.log(contador)
// } 


// for(let tabuada = 7; tabuada <= 70; tabuada += 7){   //8
//   console.log(tabuada)
// }


// let numero = 10   // 9

// for(let soma = 1; soma <= numero; soma++){
//     console.log(soma)
// }


// let frutas = ['banana' , 'maçã' , 'pera' , 'melancia' , 'uva']    // 10

// for(let contador = 0; contador < 5; contador++){
//     console.log(frutas[contador])
// }

 
// let numeros = [5, 10, 20, 30, 40]   // 11

// let soma = 0
// for(contador =0; contador < 5; contador++){
//     soma += numeros[contador]
// }

// console.log(soma)



// let numeros = [10, 20, 30, 90]    // 12
// let maior = 0

// for(let contador = 0; contador < numeros.length; contador++){
//     if(numeros[contador] > maior){
//       maior = numeros[contador]
//     }
//     console.log(contador, numeros[contador], maior)
// }
// console.log(maior)



//  let numeros = [10, 20, 30, 90]    // 12 (menor numero)
//  let maior = 99999999999999

//  for(let contador = 0; contador < numeros.length; contador++){
//     if(numeros[contador] < maior){
//       maior = numeros[contador]
//     }
//      console.log(contador, numeros[contador], maior)
// }
// console.log(maior)



// function somadoisnumeros (numero1,numero2){  // 13
//     return numero1 + numero2
// }

// let soma = somadoisnumeros(10, 20)
// console.log(soma)



// function saudacao (nome){    // 14
//     return 'Olá ' + nome + ' tudo bem?'
// }
// let saudacao2 = saudacao('João')

// console.log(saudacao2)




// function primo (numero){   // 15
//   let primo = true
//   let div = numero -1

//    while(div > 1){
//     if(numero % div == 0){
//        primo = false
//     }
//     div--
//    }


//     return primo 
// }
  
// console.log(primo(10))
// console.log(primo (23))



// let pessoa = {nome: 'João', idade: '15 anos' , profissao: 'Estudante'}  // 16
// console.log(pessoa)




// let produto1 = {      // 17
//   nome: 'televisão',
//   preco: 4000
// }

// let listaprodutos = [produto1,{nome:'Arroz', preco: 30},{nome:'Azeite', preco: 40},{nome: 'Biscoito', preco: 5}]
// let produtos = [
//     {
//       nome: 'Arroz',
//       preco: 30
//     },
//     {
//       nome: 'Azeite',
//       preco: 40
//     },
//     {
//       nome: 'Biscoito',
//       preco: 5
//     }

// ]

// let valor = produtos[0].preco
// let maiscaro = 0

// for(pos = 0; pos < produtos.length; pos++){
//   if(produtos[pos].preco > valor){
//     valor = produtos[pos].preco
//     maiscaro = pos
//   }
// }

// console.log(produtos[maiscaro])



let carrinho = [     // 18
  {
    produto:{
      nome:'Arroz',
      preco: 26
    },
    quantidade: 2
},
{
  produto:{
    nome: 'Carne',
    preco: 14
  },
  quantidade: 4
},
{
  produto:{
    nome: 'Pão',
    preco: 5
  },
  quantidade: 4
}

]

let total = 0 
for(i = 0; i < carrinho.length; i++){
  console.log('produto:',carrinho[i].produto, 'quantidade', carrinho[i].quantidade, 'custo', carrinho[i].produto.preco * carrinho[i].quantidade) 
  total += carrinho[i].produto.preco * carrinho[i].quantidade
}
console.log('O preço total é de:' + total)