const divListaAluno = document.querySelector("#lista_aluno")
let alunos = [
   {
      nome: "Henrique",
      idade: 17
   },
   {
      nome: "Cassio",
      idade: 38
   },
   {
      nome: "joao",
      idade: 26
   },
   {
      nome: "otto",
      idade: 56
   },
   {
      nome: "luucas",
      idade: 87
   },
   {
      nome: "igor",
      idade: 12
   },
   {
      nome: "Bolsonaro",
      idade: 71
   },
   {
      nome: "lula",
      idade: 13
   },
   {
      nome: "maria",
      idade: 24
   },
   {
      nome: "anna",
      idade: 18
   },
   {
      nome: "michael",
      idade: 57
   },
   {
      nome: "Guilherme",
      idade: 25
   },
   {
      nome: "yuri",
      idade: 21
   },
   {
      nome: "Luckey",
      idade: 78
   },
   {
      nome: "hillary",
      idade: 34
   },
   {
      nome: "trump",
      idade: 79
   },
   {
      nome: "bigode",
      idade: 45
   },
   {
      nome: "benedito",
      idade: 55
   },
   {
      nome: "Mirelle",
      idade: 18
   },
   {
      nome: "rodrygo",
      idade: 19
   },
   {
      nome: "wesley",
      idade: 34
   },
   {
      nome: "ichigo",
      idade: 57
   },
   {
      nome: "naruto",
      idade: 34
   },
   {
      nome: "Henry",
      idade: 87
   },
   {
      nome: "lumeires",
      idade: 33
   },
   {
      nome: "rodinei",
      idade: 21
   },
   {
      nome: "Labyad",
      idade: 33
   },
   {
      nome: "malcom",
      idade: 45
   },
   {
      nome: "Matheus",
      idade: 27
   },
      {
      nome: "mauricio",
      idade: 44
   }
];

for(let i = 0; i < alunos.length; i++){
   divListaAluno.innerHTML += `<li>${alunos[i].nome}, ${alunos[i].idade}
   anos <li>`
    console.log(alunos[i].nome)
    console.log(alunos[i].idade)
}