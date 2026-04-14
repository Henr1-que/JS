let botaoMudaTexto= document.querySelector("#btnMudaTexto")
let titulo = document.querySelector("#titulo")

function MudaTexto(){
   titulo.innerHTML = "Henri"
}

botaoMudaTexto.addEventListener("click", MudaTexto)
