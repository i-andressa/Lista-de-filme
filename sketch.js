let campoIdade;
let campoAventura;
let campoTerror;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoAventura = createCheckbox("Gosta de aventura?");
  campoTerror = createCheckbox("Gosta de terror?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeTerror = campoTerror.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeAventura, gostaDeTerror);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeAventura, gostaDeTerror) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "As aventuras de Poliana-O filme";
    } else {
      if (idade >= 12) {
        if(aventura|| Terror) {
          return "Jogo da morte";          
        } else{
         return "Culpa das estrelas";
        }
      } else {
        if (gostaDeFantasia) {
          return "Meu nome é Sara";
        } else {
          return "A freira 2";
        }
      }
    }
  } else {
    if (gostaDeTerror) {
      return "Noites Brutais";
    } else {
      return "Pânico na montanha";
    }
  }
}
