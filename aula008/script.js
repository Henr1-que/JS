let idade = Number(prompt("Qual sua idade?"))
let habilitado = prompt(`Voce tem habilitação:
1 - sim 
2- nao
`)

if(habilitado== "1"){
    habilitado= true
}else {
    habilitado = false
}
if (idade>= 18 && habilitado == true) {
    alert("pode dirigir!")
} else {
    alert("Não pode dirigir!")
}