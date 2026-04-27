let botaoTrocaTema = document.querySelector("#btnTrocaTema")
let body = document.querySelector("body")

function trocaTema() {
    body.classList.toggle("dark-mode")

   if(botaoTrocaTema.textContent == "ativar") {
    botaoTrocaTema.textContent = "desativar"
   }else {
    botaoTrocaTema.textContent = "ativar"
   }
}

botaoTrocaTema.addEventListener("click", trocaTema)