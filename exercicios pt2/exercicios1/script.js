let body = document.getElementById("body")

let x = document.getElementById("x")
let y = document.getElementById("y")


body.addEventListener("mousemove" , (event) =>{
    console.log(event.clientX, event.clientY)

    
    x.innerText = "X: " + event.clientX ;

    y.innerText = "y: " + event.clientY ;


})