let formulario = document.getElementById("todo-form")
let input = document.getElementById("task-input")
let lista = document.getElementById("todo-lista")

console.log(formulario, input, lista)
function adicionarTarefa(event){
    event.preventDefault()
    console.log("teste")
    let texto = input.value
    
    if(texto != ""){
        let novoitem = document.createElement("li")
        let textoitem = document.createElement("span")
        textoitem.innerText = texto
        let botaodeletar = document.createElement("button")
        botaodeletar.innerText = "Deletar"
        botaodeletar.classList.add("btn-excluir")
        botaodeletar .addEventListener("click", ()=>{
            lista.removeChild(novoitem)
        })

        novoitem.appendChild(textoitem)
        novoitem.appendChild(botaodeletar)
        novoitem.classList.add("todo-item")
        novoitem.addEventListener("click", ()=> {

        })

        lista.appendChild(novoitem)
        input.value = ""
    }
}


formulario.addEventListener("submit" , adicionarTarefa)