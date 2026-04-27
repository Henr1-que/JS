let botaoMudaTexto = document.querySelector("#btnMudaTexto")
let titulo = document.querySelector("#titulo")

function mudaTexto() {
    titulo.innerHTML = "bigas"
}

botaoMudaTexto.addEventListener("click",mudaTexto)