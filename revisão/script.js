let aprendizado = Number(prompt("digite um numero 1-100"))

function seSenao() {
    let perguntaUsuario = prompt(`voce estudou no feriado?
        sim ou nao
`)
    if (perguntaUsuario.toLocaleLowerCase() == "sim") {
        alert("parabens, voce é o cara!")
        return
    }
    alert("miguelou")
    alert("fim da funcao")
}

function teste() {
    function teste2() {
        alert("teste2")
    }
    teste2()
}
function soma(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero
}

function perguntaNumero() {
    let primeiroNumero = Number(prompt("digite um numero"))
    let segundoNumero = Number(prompt("digite outro numero"))

    alert(soma(primeiroNumero, segundoNumero))
}

switch (aprendizado) {
    case 1:
        seSenao()
        break;
    case 2:
        teste()
        break;
    case 3:
        perguntaNumero()
        break;
    default:
        alert("nao tem esse numero")
        break;
}