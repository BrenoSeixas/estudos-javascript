export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemanna = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemanna = funcionamento.dataset.horario.split(",").map(Number);

  console.log(diasSemanna);
  console.log(horarioSemanna);

  const dataAgora = new Date();

  const diaAgora = dataAgora.getDay();
  const horasAgora = dataAgora.getHours();

  const semanaAberto = diasSemanna.indexOf(diaAgora) !== -1;

  const horarioAberto =
    horasAgora >= horarioSemanna[0] && horasAgora < horarioSemanna[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
