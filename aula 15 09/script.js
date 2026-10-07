function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "⚽ Praticar esportes é uma ótima maneira de cuidar da saúde e se divertir!";
}

function LimparFormulario() {
  const formulario = document.getElementById("formulario");
  formulario.reset();

  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "";
}

document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault();
  mostrarMensagem();
});