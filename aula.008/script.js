let idade = Number(prompt("qual sua idade?"))
let habilitado = prompt(`voce tem habilitação
1 - sim
2 - nao
`)
if (habilitado == "1") {
    habilitado = true
} else {
    habilitado = false
}
if (idade >= 18 && habilitado == true) {
    alert("pode entrar!")
} else {
    alert("nao pode entra!")
}