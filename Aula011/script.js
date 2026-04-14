let btnsoma = document.querySelector("#btnsoma")
let primeiroInput = document.querySelector("#primeiroNumero")
let segundoInput = document.querySelector("#segundoNumero")

function soma(){
  let resultado = Number (primeiroInput.value) + Number(segundoInput.value)
  alert(resultado)
}
btnsoma.addEventListener("click", soma)


