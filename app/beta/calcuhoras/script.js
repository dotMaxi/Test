function calculateNewTime() {
  var currentTime = document.getElementById('current-time').value;
  var addMinutes = parseInt(document.getElementById('add-minutes').value);

  var timeParts = currentTime.split(":");
  var hours = parseInt(timeParts[0]);
  var minutes = parseInt(timeParts[1]);

  var totalMinutes = hours * 60 + minutes;
  var newTotalMinutes = totalMinutes + addMinutes;

  var newHours = Math.floor(newTotalMinutes / 60);
  var newMinutes = newTotalMinutes % 60;

  if (newHours >= 24) {
    newHours = newHours % 24;
  }

  var newTime = formatTime(newHours) + ":" + formatTime(newMinutes);
  document.getElementById('result').innerHTML = "Nueva hora: " + newTime;
}

function formatTime(time) {
  return time.toString().padStart(2, '0');
}

function toggleTheme() {
  var body = document.body;
  var sunIcon = document.getElementById('sun-icon');
  var moonIcon = document.getElementById('moon-icon');

  body.classList.toggle('dark-mode');
  sunIcon.classList.toggle('hidden');
  moonIcon.classList.toggle('hidden');
}
