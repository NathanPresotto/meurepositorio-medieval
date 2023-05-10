<script>
  function gerarPersonagem() {
    var ageRange = document.getElementById('age-range').value;
    var race = document.getElementById('race').value;
    var gender = document.getElementById('gender').value;

    var ageText = '';
    var raceText = '';
    var genderText = '';

    switch (ageRange) {
      case 'crianca':
        ageText = 'Criança';
        break;
      case 'jovem':
        ageText = 'Jovem';
        break;
      case 'adulto':
        ageText = 'Adulto';
        break;
      case 'idoso':
        ageText = 'Idoso';
        break;
    }

    switch (race) {
      case 'humano':
        raceText = 'Humano';
        break;
      case 'fada':
        raceText = 'Fada';
        break;
      case 'elfo':
        raceText = 'Elfo';
        break;
      case 'elfo-negro':
        raceText = 'Elfo Negro';
        break;
      case 'dragao':
        raceText = 'Dragão';
        break;
      case 'demonio':
        raceText = 'Demônio';
        break;
      case 'demi-humano':
        raceText = 'Demi-Humano';
        break;
      case 'vampiro':
        raceText = 'Vampiro';
        break;
    }

    switch (gender) {
      case 'masculino':
        genderText = 'Masculino';
        break;
      case 'feminino':
        genderText = 'Feminino';
        break;
      case 'outro':
        genderText = 'Outro';
        break;
    }

    var characterDescription = '';

    // Gerar descrição do personagem com base nas escolhas
    if (race === 'humano') {
      characterDescription = 'Um humano ' + ageText.toLowerCase() + ' de sexo ' + genderText.toLowerCase() + '.';
    } else if (race === 'fada') {
      characterDescription = 'Uma fada ' + ageText.toLowerCase() + ' de sexo ' + genderText.toLowerCase() + '.';
    } else if (race === 'elfo') {
      characterDescription = 'Um elfo ' + ageText.toLowerCase() + ' de sexo ' + genderText.toLowerCase() + '.';
    } else if (race === 'elfo-negro') {
      characterDescription = 'Um elfo negro ' + ageText.toLowerCase() + ' de sexo ' + genderText.toLowerCase() + '.';
    } else if (race === 'dragao') {
      characterDescription = 'Um dragão ' + ageText.toLowerCase() + ' de sexo ' + genderText.toLowerCase() + '.';
    } else if (race === 'demonio') {
      characterDescription = 'Um demônio ' + ageText.toLowerCase() + ' de sexo ' + genderText.toLowerCase() + '.';
    } else if (race === 'demi-humano') {
      characterDescription = 'Um demi-humano ' + ageText.toLowerCase() + ' de sexo ' + genderText.toLowerCase() + '.';
    } else if (race === 'vampiro') {
      characterDescription = 'Um vampiro ' + ageText.toLowerCase() + ' de sexo ' + genderText.toLowerCase() + '.';
    }

    // Exibir o resultado do personagem
    document.getElementById('character-result').innerHTML = character
