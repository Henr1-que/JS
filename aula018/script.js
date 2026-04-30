/*Indroduçao a objetos*/

let aluno = {
 nome:  "Henrique",
 idade: 17,
 curso: "ADS",
 materias: ["ui/ux design, Logica de programação", "Modelagem de banco de dados"],
 endreço: {
    cidade: " Caieiras SP",
    bairro: "Laranjeiras",
    rua: "Rua cardeal 738, jardim adelffoli"
 }
}

aluno.idade = 18 /* vareando valor de uma propiedade */
aluno.status = true /* add uma nova propiedade */
delete aluno.idade /*deletando a propiedade */

console.log(aluno)
console.log(aluno["nome"])
console.log(aluno.idade)
console.log(aluno.curso)
console.log(aluno.materias)
console.log(aluno.endereço)