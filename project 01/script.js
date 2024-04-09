const dados = {
  "d4": 4,
  "d6": 6,
  "d8": 8,
  "d10": 10,
  "d12": 12,
  "d20": 20,
  "d100": 100,
  "d500": 500
};

const rolarDado = () => {
  const tipoDado = document.getElementById("dado").value;
  const numeroLados = dados[tipoDado];
  const resultado = Math.floor(Math.random() * numeroLados) + 1;
  document.getElementById("resultado").textContent = resultado;
};

document.getElementById("rolar").addEventListener("click", rolarDado);
