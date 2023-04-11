function calcularComponentes() {
  const direccion = Number(document.getElementById('direccion').value);
  const intensidad = Number(document.getElementById('intensidad').value);
  const pista = Number(document.getElementById('pista').value);

  const direccionPista = pista * 10;

  const vientoCara = Math.round(intensidad * Math.cos((direccion - direccionPista) * Math.PI / 180));
  const vientoCruzado = Math.round(intensidad * Math.sin((direccion - direccionPista) * Math.PI / 180));

  const resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = `<p>Componente de viento en cara: ${vientoCara} nudos</p><p>Componente de viento cruzado: ${vientoCruzado} nudos</p>`;
}

document.getElementById('pista').addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    calcularComponentes();
  }
});
