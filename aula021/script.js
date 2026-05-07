const divListaFilmes = document.querySelector("#lista_filmes")
const botoesgenero = document.querySelectorAll("[data-genero]")

const filmes = [
  // --- TERROR ---
  { titulo: "O Despertar do Mal",
    sinopse: "Uma família se muda para uma casa com um passado sombrio.",
     genero: "terror" },
  { titulo: "Sussurros na Escuridão", 
   sinopse: "Entidades invisíveis começam a se comunicar através de frequências de rádio.", 
   genero: "terror" },
  { titulo: "O Ritual da Meia-Noite",
    sinopse: "Jovens decidem realizar um jogo proibido em uma floresta isolada.", 
    genero: "terror" },
  { titulo: "Sombra no Espelho",
    sinopse: "Um reflexo começa a agir por conta própria com intenções assassinas.",
     genero: "terror" },
  { titulo: "A Maldição do Vilarejo", sinopse: "Um vilarejo esquecido esconde um segredo de sangue centenário.", 
   genero: "terror" },
  { titulo: "Pesadelo Lucido", sinopse: "Um homem descobre que as feridas que sofre em sonhos aparecem no mundo real.",
    genero: "terror" },
  { titulo: "A Boneca de Porcelana", sinopse: "Uma relíquia antiga traz consigo o espírito vingativo de uma criança.", 
   genero: "terror" },
  { titulo: "O Último Exorcismo", sinopse: "Um padre veterano enfrenta sua batalha mais difícil contra um demônio antigo.",
    genero: "terror" },
  { titulo: "Abismo do Medo",
    sinopse: "Exploradores de cavernas ficam presos com criaturas famintas na escuridão.",
     genero: "terror" },
  { titulo: "Gritos Silenciosos",
    sinopse: "Uma casa inteligente se volta contra seus moradores durante uma tempestade.",
     genero: "terror" },

  // --- AÇÃO ---
  { titulo: "Missão Explosiva",
    sinopse: "Um agente infiltrado precisa desarmar uma bomba em um trem em movimento.",
     genero: "açao" },
  { titulo: "Vingança de Sangue",
    sinopse: "Um ex-soldado busca justiça contra a organização que o traiu.",
     genero: "açao" },
  { titulo: "Fuga da Metrópole", 
   sinopse: "Um piloto habilidoso deve atravessar uma cidade sitiada para salvar um VIP.", 
   genero: "açao" },
  { titulo: "Alvo Prioritário",
    sinopse: "Mercenários disputam a captura de um hacker que possui códigos nucleares.",
     genero: "açao" },
  { titulo: "Impacto Final",
    sinopse: "Um grupo de elite tenta impedir o colapso de uma barragem estratégica.", 
    genero: "açao" },
  { titulo: "Guerreiro de Rua",
    sinopse: "Um lutador clandestino entra em um torneio para salvar sua academia.", 
    genero: "açao" },
  { titulo: "Velocidade Máxima 3", 
   sinopse: "Corridas ilegais pelas ruas de Tóquio revelam uma conspiração política.",
    genero: "açao" },
  { titulo: "O Resgate",
    sinopse: "Uma equipe de operações especiais invade uma prisão de segurança máxima.",
     genero: "açao" },
  { titulo: "Justiça Blindada",
    sinopse: "Um policial honesto luta contra a corrupção dentro de sua própria unidade.",
     genero: "açao" },
  { titulo: "Linha de Frente",
    sinopse: "A batalha decisiva entre duas facções rivais em um cenário pós-apocalíptico.",
     genero: "açao" },

  // --- COMÉDIA ---
  { titulo: "Vizinhos em Guerra",
    sinopse: "Uma disputa por um centímetro de terreno vira uma batalha épica.", 
    genero: "comedia" },
  { titulo: "A Grande Ressaca",
    sinopse: "Amigos tentam reconstruir os eventos de uma festa de casamento desastrosa.",
     genero: "comedia" },
  { titulo: "Detetives por Acaso",
    sinopse: "Dois atrapalhados são confundidos com investigadores profissionais.",
     genero: "comedia" },
  { titulo: "Quase Famosos",
    sinopse: "Um aspirante a músico tenta entrar em um festival usando disfarces bizarros.",
     genero: "comedia" },
  { titulo: "Casamento de Mentira",
    sinopse: "Para ganhar uma herança, dois estranhos precisam fingir um matrimônio perfeito.", 
    genero: "comedia" },
  { titulo: "Aposta Arriscada",
    sinopse: "Um grupo de idosos decide assaltar um cassino para salvar seu asilo.",
     genero: "comedia" },
  { titulo: "Cupido Errante", 
   sinopse: "Um anjo atrapalhado une as pessoas mais improváveis da cidade.",
    genero: "comedia" },
  { titulo: "Troca de Corpos",
    sinopse: "Um CEO arrogante e seu estagiário trocam de vida por um dia.",
     genero: "comedia" },
  { titulo: "Férias no Trailer", 
   sinopse: "Uma viagem em família que tinha tudo para dar certo acaba em caos total.",
    genero: "comedia" },
  { titulo: "Chef em Apuros",
    sinopse: "Um cozinheiro renomado perde o paladar e precisa se reinventar na rua.",
     genero: "comedia" },

  // --- ANIMAÇÃO ---
  { titulo: "O Reino das Cores",
    sinopse: "Um pincel mágico ganha vida e precisa salvar um mundo cinzento.", 
    genero: "animaçao" },
  { titulo: "Robôs em Fuga",
    sinopse: "Um pequeno robô de limpeza sonha em conhecer as estrelas.",
     genero: "animaçao" },
  { titulo: "A Floresta Encantada",
    sinopse: "Animais se unem para proteger sua casa de uma construção urbana.",
     genero: "animaçao" },
  { titulo: "O Menino e o Dragão", 
   sinopse: "Uma amizade improvável entre um jovem viking e uma criatura lendária.",
    genero: "animaçao" },
  { titulo: "Viagem ao Centro da Terra",
    sinopse: "Formigas exploradoras descobrem uma civilização perdida sob o jardim.",
     genero: "animaçao" },
  { titulo: "Heróis de Papel",
    sinopse: "Desenhos de um caderno ganham vida quando as luzes se apagam.",
     genero: "animaçao" },
  { titulo: "O Mistério da Lua",
    sinopse: "Uma coelha astronauta tenta descobrir do que a lua é realmente feita.",
     genero: "animaçao" },
  { titulo: "Academia de Monstros",
    sinopse: "Pequenos monstros aprendem que assustar não é a única forma de viver.",
     genero: "animaçao" },
  { titulo: "Sinfonia Digital",
    sinopse: "Notas musicais precisam derrotar o silêncio que invade o reino do som.",
     genero: "animaçao" },
  { titulo: "Brinquedos Perdidos",
    sinopse: "A jornada de volta para casa de brinquedos esquecidos em um parque.",
     genero: "animaçao" },

  // --- AVENTURA ---
  { titulo: "O Tesouro Perdido",
    sinopse: "Um mapa antigo leva um historiador a uma ilha inexplorada no Pacífico.",
     genero: "aventura" },
  { titulo: "Além do Horizonte",
    sinopse: "Navegadores buscam uma nova terra para salvar seu povo da escassez.",
     genero: "aventura" },
  { titulo: "A Montanha de Cristal",
    sinopse: "Alpinistas enfrentam desafios sobrenaturais ao escalar um pico sagrado.",
     genero: "aventura" },
  { titulo: "O Amuleto Sagrado",
    sinopse: "Um jovem precisa devolver uma joia a um templo para parar uma tempestade.",
     genero: "aventura" },
  { titulo: "Safari nas Estrelas",
    sinopse: "Turistas espaciais ficam presos em um planeta habitado por feras exóticas.",
     genero: "aventura" },
  { titulo: "O Código da Pirâmide",
    sinopse: "Arqueólogos decifram enigmas dentro de uma tumba recém-descoberta.",
     genero: "aventura" },
  { titulo: "Caminho da Seda",
    sinopse: "Uma caravana enfrenta perigos naturais e bandidos em uma rota mística.",
     genero: "aventura" },
  { titulo: "O Último Guardião",
    sinopse: "Um eremita protege a entrada de um portal para outra dimensão.",
     genero: "aventura" },
  { titulo: "Velas ao Vento",
    sinopse: "Piratas e corsários disputam o domínio de um mar repleto de lendas.",
     genero: "aventura" },
  { titulo: "Expedição Ártica", 
   sinopse: "Uma equipe busca uma fonte de energia limpa enterrada sob o gelo eterno.", 
   genero: "aventura" }
];
function filtrarfilmes(genero){
  divListaFilmes.innerHTML = ""
  const filmesTerror = filmes.filter((filme)=>{
      return filme.genero === genero
   })
   filmesTerror.forEach((filme) => {
      divListaFilmes.innerHTML += `<li><b>${filme.titulo}</b> <br> ${filme.sinopse} <br> <i>${filme.genero}<i/><li>`
   })
}

botoesgenero.forEach((botao)=>{
  botao.addEventListener("click",() => {
    const genero = botao.dataset.genero
    filtrarfilmes(genero)
  })
})




























//filmes.forEach((filme) => {
//divListaFilmes.innerHTML +=`<li><b>${filme.titulo}</b> <br> ${filme.sinopse} <br> Genero:<i>${filme.genero}</i></li>`//
//})//