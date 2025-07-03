const problemCard1 = document.getElementById("problemCard1");
const problemCard2 = document.getElementById("problemCard2");
const problemCard3 = document.getElementById("problemCard3");

function loadProblemCards(product) {
  problemCard1.querySelector("h3").innerText = "Portas Fechadas no Mercado";
  problemCard1.querySelector(
    "p",
  ).innerText = `Empresas sérias exigem a certificação ${product.nr.toUpperCase()}. Sem ela, seu currículo é descartado para as melhores vagas antes mesmo da entrevista.`;
  problemCard1.querySelector("div").querySelector("img").src =
    "/public/illustration_3.svg";

  problemCard2.querySelector("h3").innerText = "Risco Real de Acidente Grave";
  problemCard2.querySelector(
    "p",
  ).innerText = `Sem o preparo correto é arriscar sua vida todos os dias. Uma acidente pode encerrar sua carreira e trazer consequências trágicas para você e sua família.`;

  problemCard3.querySelector("h3").innerText = "Ficar para Trás na Carreira";
  problemCard3.querySelector(
    "p",
  ).innerText = `Enquanto colegas certificados em ${product.nr.toUpperCase()} são promovidos e pegam os melhores projetos, você fica estagnado, limitado a trabalhos mais simples e com salários menores.`;
  problemCard3.querySelector("div").querySelector("img").src =
    "/public/illustration_4.svg";
}

export { loadProblemCards };
