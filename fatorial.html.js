<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Função Fatorial</title>
</head>
<body>
  <h1>Cálculo do Fatorial</h1>
  <p>Digite um número abaixo para calcular o fatorial:</p>

  <input type="number" id="numero" placeholder="Digite um número" />
  <button onclick="calcularFatorial()">Calcular Fatorial</button>

  <h3>Resultado:</h3>
  <p id="resultado">Nenhum cálculo realizado ainda.</p>

  <script>
    function fatorial(n) {
      if (n < 0) {
        return "Fatorial não definido para números negativos.";
      }
      let resultado = 1;
      for (let i = 1; i <= n; i++) {
        resultado *= i;
      }
      return resultado;
    }

    function calcularFatorial() {
      const numero = parseInt(document.getElementById("numero").value);
      if (isNaN(numero)) {
        document.getElementById("resultado").innerText = "Por favor, insira um número válido.";
        return;
      }
      const resultado = fatorial(numero);
      document.getElementById("resultado").innerText = `O fatorial de ${numero} é ${resultado}.`;
    }
  </script>
</body>
</html>
