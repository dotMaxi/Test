document.getElementById('create-slot').addEventListener('click', function() {
  var seasonSelect = document.getElementById('season');
  var selectedSeason = seasonSelect.value;

  var date = new Date();
  var year = date.getFullYear().toString().substr(-2);
  var slot = '';

  if (selectedSeason === 'invierno') {
    slot = 'W' + year;
  } else if (selectedSeason === 'verano') {
    slot = 'S' + year;
  }

  var day = ('0' + date.getDate()).slice(-2);
  var month = date.toLocaleString('default', { month: 'short' }).toUpperCase();

  document.getElementById('result').textContent = slot;
  document.getElementById('date').textContent = day + ' ' + month;
});

document.getElementById('airport').addEventListener('input', function() {
  var airportCode = this.value;
  document.getElementById('airport-result').textContent = airportCode;
});
