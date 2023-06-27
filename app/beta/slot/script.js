document.getElementById('slotForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario y se recargue la página

  // Obtén los valores de los campos de entrada
  var flightNumber = document.getElementById('flightNumber').value;
  var airline = document.getElementById('airline').value;
  var departureTime = document.getElementById('departureTime').value;

  // Crea el mensaje de confirmación del slot
  var slotConfirmation = 'Slot creado exitosamente:<br>' +
    'Número de vuelo: ' + flightNumber + '<br>' +
    'Aerolínea: ' + airline + '<br>' +
    'Hora de salida: ' + departureTime;

  // Muestra el mensaje de confirmación en el elemento de resultado
  document.getElementById('slotResult').innerHTML = slotConfirmation;
});
