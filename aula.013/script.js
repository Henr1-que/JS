let dinheiro = 5000
alert(dinheiro.toLocaleString(`pt-br`, {
    style: `currency`,
    currency: `BRL`,
}))