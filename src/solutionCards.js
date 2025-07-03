const solutionCard0 = document
  .getElementById("solutionCard0")
  .getElementsByClassName("div__bottom")[0];
const solutionCard1 = document
  .getElementById("solutionCard1")
  .getElementsByClassName("div__bottom")[0];
const solutionCard2 = document
  .getElementById("solutionCard2")
  .getElementsByClassName("div__bottom")[0];
const solutionCard3 = document
  .getElementById("solutionCard3")
  .getElementsByClassName("div__bottom")[0];
const solutionCard4 = document
  .getElementById("solutionCard4")
  .getElementsByClassName("div__bottom")[0];
const solutionCard5 = document
  .getElementById("solutionCard5")
  .getElementsByClassName("div__bottom")[0];

export function loadSolutionCards(product) {
  solutionCard0.querySelector("h3").textContent = "A Chave que Abre as Portas";
  solutionCard0.querySelector(
    "p",
  ).textContent = `Nosso certificado ${product.nr.toUpperCase()} é o seu passaporte para as melhores oportunidades. Ele é amplamente respeitado pelas empresas.`;

  solutionCard1.querySelector("h3").textContent =
    "Trabalhe com Confiança Absoluta";
  solutionCard1.querySelector(
    "p",
  ).textContent = `Domine a prevenção de acidentes na prática. Troque o medo diário pela certeza de um trabalho seguro.`;

  solutionCard2.querySelector("h3").textContent = "Deixe de Ser Apenas Mais Um";
  solutionCard2.querySelector(
    "p",
  ).textContent = `Transforme sua insegurança em conhecimento técnico. Torne-se a autoridade em segurança que sua equipe respeita.`;

  solutionCard3.querySelector("h3").textContent = "Estude Sem Complicação";
  solutionCard3.querySelector(
    "p",
  ).textContent = `Curso 100% online para você assistir no seu ritmo, quando e onde quiser. Aprenda sem parar sua vida.`;

  solutionCard4.querySelector("h3").textContent = "Acelere Seu Salário";
  solutionCard4.querySelector(
    "p",
  ).textContent = `Qualifique-se para os cargos e projetos que realmente pagam bem. Deixe a estagnação para trás.`;

  solutionCard5.querySelector("h3").textContent = "Você Nunca Estuda Sozinho";
  solutionCard5.querySelector(
    "p",
  ).textContent = `Tire suas dúvidas diretamente com nossos instrutores. Seu aprendizado tem suporte direto para você avançar com confiança.`;
}
