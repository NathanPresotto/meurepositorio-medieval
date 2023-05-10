// Função para gerar um número aleatório dentro de uma faixa
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para gerar um nome aleatório
function generateRandomName(names) {
  return names[Math.floor(Math.random() * names.length)];
}

// Função para gerar a descrição da personalidade
function generatePersonalityDescription() {
  var personalities = [
    "Corajoso e destemido, sempre pronto para enfrentar qualquer desafio.",
    "Sábio e perspicaz, capaz de encontrar soluções para os problemas mais complexos.",
    "Leal e honrado, sempre disposto a ajudar seus amigos e proteger os mais fracos.",
    "Misterioso e enigmático, guarda segredos antigos e poderosos.",
    "Astuto e trapaceiro, sempre buscando uma vantagem pessoal.",
    "Justo e compassivo, luta pelos oprimidos e pelos ideais de justiça.",
    "Ambicioso e sedento de poder, disposto a fazer qualquer coisa para alcançar seus objetivos.",
    "Sonhador e idealista, acredita em um mundo melhor e luta por suas convicções.",
    "Feroz e implacável, uma força da natureza que destrói tudo em seu caminho.",
    "Calmo e pacífico, busca a harmonia e a paz em todas as situações."
  ];

  return personalities[Math.floor(Math.random() * personalities.length)];
}

// Função para gerar a descrição da aparência
function generateAppearanceDescription(race) {
  var descriptions = {
    "Humano": "Um humano comum, de estatura mediana e características comuns.",
    "Fada": "Uma criatura etérea com asas translúcidas e brilhantes.",
    "Elfo": "Um ser elegante e esguio, com orelhas pontudas e longos cabelos dourados.",
    "Elfo Negro": "Um elfo sombrio, de pele pálida e olhos brilhantes vermelhos.",
    "Dragão": "Uma poderosa criatura escamosa, com asas majestosas e dentes afiados.",
    "Demônio": "Uma entidade demoníaca, com chifres, asas e olhos ardentes.",
    "Demi-Humano": "Uma mistura de humano com outra raça, exibindo características únicas.",
    "Vampiro": "Um ser pálido e elegante, com presas afiadas e olhos hipnotizantes."
  };

  return descriptions[race];
}

// Função para gerar um personagem aleatório
function generateRandomCharacter() {
  var races = ["Humano", "Fada", "Elfo", "Elfo Negro", "Dragão", "Demônio", "Demi-Humano", "Vampiro"];
  var ages = ["Criança", "Jovem", "Adulto", "Idoso"];

  var race = generateRandom
