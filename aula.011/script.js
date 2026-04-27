let btnSoma = document.querySelector("#btnSoma")
let primeiroInput = document.querySelector("#primeiroNumero")
let segundoInput = document.querySelector("#segundoNumero")
let apresentaResultado = document.querySelector("#resultado")

function soma() {
    let resultado = Number(primeiroInput.value) + Number(segundoInput.value)

    apresentaResultado.innerHTML = `resultado: ${resultado}`
}

btnSoma.addEventListener("click", soma)