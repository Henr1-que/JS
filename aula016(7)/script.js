let frutas = ["Uva","Morango","Manga","pera"]

/* push add item no final da lista*/
frutas.push("Melancia")
console.log(frutas)

/*Remove o ultimo item da lista */
frutas.pop()
console.log(frutas)

/*remove o primeiro item da lista */
frutas.shift()
console.log(frutas)

/*add no inicio da lista*/
frutas.unshift("Abacate")
console.log(frutas)

/*mostra quantidade de elementos na lista*/
console.log(frutas.length)

/*verifica se um valor existe na lista*/
console.log(frutas.includes("pera"))