// Base de dados da atividade
// Cada aluno possui: id, nome, turma, faltas e notaFinal.
// Regra sugerida: notaFinal >= 7 significa aprovado.

const alunos = [
  { id: 1, nome: "Ana Clara", turma: "ADS A", faltas: 2, notaFinal: 8.7 },
  { id: 2, nome: "Bruno Henrique", turma: "ADS A", faltas: 5, notaFinal: 6.4 },
  { id: 3, nome: "Camila Santos", turma: "ADS A", faltas: 1, notaFinal: 9.2 },
  { id: 4, nome: "Diego Alves", turma: "ADS A", faltas: 8, notaFinal: 5.9 },
  { id: 5, nome: "Eduarda Lima", turma: "ADS A", faltas: 0, notaFinal: 7.8 },
  { id: 6, nome: "Felipe Costa", turma: "ADS A", faltas: 3, notaFinal: 6.9 },
  { id: 7, nome: "Gabriela Rocha", turma: "ADS A", faltas: 4, notaFinal: 8.1 },
  {
    id: 8,
    nome: "Henrique Martins",
    turma: "ADS A",
    faltas: 7,
    notaFinal: 4.8,
  },
  {
    id: 9,
    nome: "Isabela Ferreira",
    turma: "ADS A",
    faltas: 2,
    notaFinal: 7.1,
  },
  { id: 10, nome: "João Pedro", turma: "ADS A", faltas: 6, notaFinal: 5.5 },
  { id: 11, nome: "Karina Souza", turma: "ADS A", faltas: 1, notaFinal: 9.6 },
  { id: 12, nome: "Lucas Ribeiro", turma: "ADS A", faltas: 9, notaFinal: 6.2 },
  { id: 13, nome: "Mariana Gomes", turma: "ADS A", faltas: 0, notaFinal: 8.9 },
  {
    id: 14,
    nome: "Nathan Oliveira",
    turma: "ADS A",
    faltas: 4,
    notaFinal: 7.0,
  },
  {
    id: 15,
    nome: "Priscila Nunes",
    turma: "ADS A",
    faltas: 10,
    notaFinal: 4.3,
  },

  { id: 16, nome: "Rafael Dias", turma: "ADS B", faltas: 2, notaFinal: 7.4 },
  { id: 17, nome: "Sofia Mendes", turma: "ADS B", faltas: 1, notaFinal: 8.3 },
  {
    id: 18,
    nome: "Thiago Barbosa",
    turma: "ADS B",
    faltas: 11,
    notaFinal: 5.1,
  },
  { id: 19, nome: "Valentina Cruz", turma: "ADS B", faltas: 0, notaFinal: 9.8 },
  {
    id: 20,
    nome: "William Teixeira",
    turma: "ADS B",
    faltas: 6,
    notaFinal: 6.7,
  },
  { id: 21, nome: "Yasmin Cardoso", turma: "ADS B", faltas: 3, notaFinal: 7.9 },
  { id: 22, nome: "Arthur Pires", turma: "ADS B", faltas: 8, notaFinal: 4.9 },
  { id: 23, nome: "Bianca Moreira", turma: "ADS B", faltas: 2, notaFinal: 8.5 },
  { id: 24, nome: "Caio Monteiro", turma: "ADS B", faltas: 7, notaFinal: 6.1 },
  {
    id: 25,
    nome: "Daniela Batista",
    turma: "ADS B",
    faltas: 4,
    notaFinal: 7.2,
  },
  { id: 26, nome: "Enzo Carvalho", turma: "ADS B", faltas: 12, notaFinal: 3.8 },
  { id: 27, nome: "Fernanda Lopes", turma: "ADS B", faltas: 1, notaFinal: 9.1 },
  {
    id: 28,
    nome: "Gustavo Almeida",
    turma: "ADS B",
    faltas: 5,
    notaFinal: 6.8,
  },
  { id: 29, nome: "Helena Moraes", turma: "ADS B", faltas: 0, notaFinal: 8.0 },
  { id: 30, nome: "Igor Fernandes", turma: "ADS B", faltas: 9, notaFinal: 5.7 },

  { id: 31, nome: "Júlia Martins", turma: "GTI A", faltas: 2, notaFinal: 7.6 },
  { id: 32, nome: "Kevin Araújo", turma: "GTI A", faltas: 6, notaFinal: 6.0 },
  { id: 33, nome: "Larissa Castro", turma: "GTI A", faltas: 1, notaFinal: 9.4 },
  {
    id: 34,
    nome: "Matheus Correia",
    turma: "GTI A",
    faltas: 10,
    notaFinal: 4.7,
  },
  { id: 35, nome: "Nicole Andrade", turma: "GTI A", faltas: 3, notaFinal: 8.2 },
  { id: 36, nome: "Otávio Rezende", turma: "GTI A", faltas: 5, notaFinal: 6.5 },
  { id: 37, nome: "Paula Freitas", turma: "GTI A", faltas: 0, notaFinal: 9.0 },
  { id: 38, nome: "Quésia Duarte", turma: "GTI A", faltas: 4, notaFinal: 7.3 },
  { id: 39, nome: "Renan Vieira", turma: "GTI A", faltas: 13, notaFinal: 3.9 },
  { id: 40, nome: "Sara Campos", turma: "GTI A", faltas: 2, notaFinal: 8.6 },
  { id: 41, nome: "Tomás Rocha", turma: "GTI A", faltas: 7, notaFinal: 5.4 },
  { id: 42, nome: "Uriel Azevedo", turma: "GTI A", faltas: 1, notaFinal: 7.7 },
  { id: 43, nome: "Vitória Ramos", turma: "GTI A", faltas: 0, notaFinal: 9.5 },
  {
    id: 44,
    nome: "Wesley Nascimento",
    turma: "GTI A",
    faltas: 6,
    notaFinal: 6.3,
  },
  { id: 45, nome: "Xavier Machado", turma: "GTI A", faltas: 8, notaFinal: 5.0 },

  { id: 46, nome: "Alice Barros", turma: "GTI B", faltas: 2, notaFinal: 8.8 },
  { id: 47, nome: "Bernardo Cunha", turma: "GTI B", faltas: 5, notaFinal: 6.6 },
  { id: 48, nome: "Clara Peixoto", turma: "GTI B", faltas: 1, notaFinal: 7.5 },
  { id: 49, nome: "Davi Macedo", turma: "GTI B", faltas: 9, notaFinal: 4.5 },
  {
    id: 50,
    nome: "Emanuelly Torres",
    turma: "GTI B",
    faltas: 0,
    notaFinal: 9.7,
  },
  { id: 51, nome: "Fábio Queiroz", turma: "GTI B", faltas: 6, notaFinal: 5.8 },
  { id: 52, nome: "Giovana Neves", turma: "GTI B", faltas: 3, notaFinal: 8.4 },
  { id: 53, nome: "Hugo Amaral", turma: "GTI B", faltas: 12, notaFinal: 3.5 },
  { id: 54, nome: "Íris Tavares", turma: "GTI B", faltas: 4, notaFinal: 7.0 },
  { id: 55, nome: "Joaquim Brito", turma: "GTI B", faltas: 7, notaFinal: 6.2 },
  { id: 56, nome: "Kauã Farias", turma: "GTI B", faltas: 10, notaFinal: 5.2 },
  {
    id: 57,
    nome: "Lívia Figueiredo",
    turma: "GTI B",
    faltas: 1,
    notaFinal: 9.3,
  },
  {
    id: 58,
    nome: "Miguel Siqueira",
    turma: "GTI B",
    faltas: 5,
    notaFinal: 7.4,
  },
  { id: 59, nome: "Natália Coelho", turma: "GTI B", faltas: 0, notaFinal: 8.9 },
  { id: 60, nome: "Samuel Prado", turma: "GTI B", faltas: 8, notaFinal: 4.2 },
];

// Elementos disponíveis no HTML para vocês manipularem no JavaScript:
const listaAlunos = document.querySelector("#listaAlunos");
const mensagemVazia = document.querySelector("#mensagemVazia");
const textoFiltro = document.querySelector("#textoFiltro");

const qtdTotal = document.querySelector("#qtdTotal");
const qtdAprovados = document.querySelector("#qtdAprovados");
const qtdReprovados = document.querySelector("#qtdReprovados");

const filtroTurma = document.querySelector("#filtroTurma");
const btnTodos = document.querySelector("#btnTodos");
const btnAprovados = document.querySelector("#btnAprovados");
const btnReprovados = document.querySelector("#btnReprovados");

function criarCardAluno(aluno){
  return ` <div class="card-aluno">

           <!--Cabeçalho do card--!>
           <div class="card-header">
            <div class="avatar-aluno">
              ${aluno.nome.charAt(0)}
            </div>

            <div>
              <h3>${aluno.nome}</h3>
              <p>${aluno.turma}</p>
            </div>
          </div> 

           <!-- Informações do aluno --!>
           <div class="card-info">
            <p>
              <strong>Nota final:</strong> ${aluno.notaFinal}
            </p>

            <p>
              <strong>Faltas:</strong> ${aluno.faltas}
            </p>
          </div> 

           <!-- Status do aluno --!>
           <div class="card-status">
            ${aluno.notaFinal >= 7 ? `<span class="status aprovado">Aprovado</span>` : `<span class="status reprovado">Reprovado</span>`}
          </div> 
        </div> `
}

function exibirAlunos(){
  listaAlunos.innerHTML += "";
  alunos.forEach((aluno)=>{
   listaAlunos.innerHTML += criarCardAluno(aluno)
   
  })
}

btnTodos.addEventListener("click", ()=>{
   exibirAlunos(alunos)
})

// DESAFIOS:
// 1. Mostrar todos os alunos na tela usando o array alunos.
// 2. Criar cards de aluno usando innerHTML ou createElement.
// 3. Mostrar no card: nome, turma, faltas, nota final e situação.
// 4. Se notaFinal >= 7, mostrar como aprovado. Caso contrário, reprovado.
// 5. Atualizar os números dos cards de resumo: total, aprovados e reprovados.
// 6. Criar o filtro por turma usando o select filtroTurma.
// 7. Criar o filtro dos botões: todos, aprovados e reprovados.
// 8. Quando não tiver nenhum aluno no filtro, mostrar a mensagem vazia.

// Dica: vocês podem usar métodos como:
// filter()
// forEach()
// map()

// Comecem criando uma função para renderizar os alunos na tela.
// Exemplo de nome para a função:
// function renderizarAlunos(lista) {
//   // código aqui
// }
