console.log("Script funcionando");

const inputNumero1 = document.getElementById("inputNumero1");

const inputNumero2 = document.getElementById("inputNumero2");

function soma(numero1, numero2) {
  var resultado = numero1 + numero2;
  return resultado;
}

function gerarResultado(event) {
  event.preventDefault();
  const num1 = parseFloat(inputNumero1.value);
  const num2 = parseFloat(inputNumero2.value);

  const resultado = soma(num1, num2);
  document.getElementById('txt-resultado').innerText = "Resultado = " + resultado;
  return resultado
}


