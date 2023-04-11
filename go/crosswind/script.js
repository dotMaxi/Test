// Obtener los elementos del DOM
const form = document.querySelector('#form');
const windDirectionInput = document.querySelector('#wind-direction');
const windSpeedInput = document.querySelector('#wind-speed');
const runwayInput = document.querySelector('#runway');
const headwindOutput = document.querySelector('#headwind');
const crosswindOutput = document.querySelector('#crosswind');
const runwayImage = document.querySelector('#runway-image');
const headwindArrow = document.querySelector('#headwind-arrow');
const crosswindArrow = document.querySelector('#crosswind-arrow');

// Añadir un evento al formulario para el cálculo al enviar
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar que se refresque la página al enviar el formulario
  const windDirection = parseFloat(windDirectionInput.value);
  const windSpeed = parseFloat(windSpeedInput.value);
  const runway = parseFloat(runwayInput.value);
  const windDirectionRadians = windDirection * (Math.PI / 180);

  // Cálculo de la componente en cara del viento
  const headwind = Math.round(windSpeed * Math.cos(windDirectionRadians));
  headwindOutput.textContent = headwind;

  // Cálculo de la componente cruzada del viento
  const crosswind = Math.round(windSpeed * Math.sin(windDirectionRadians));
  crosswindOutput.textContent = crosswind;

  // Actualizar la orientación de las flechas de viento en la imagen de la pista
  const headwindArrowRotation = windDirection - runway;
  headwindArrow.style.transform = `rotate(${headwindArrowRotation}deg)`;
  const crosswindArrowRotation = headwindArrowRotation + 90;
  crosswindArrow.style.transform = `rotate(${crosswindArrowRotation}deg)`;
});

// Cargar la imagen de la pista y las flechas de viento después de que se cargue la página
window.addEventListener('load', () => {
  runwayImage.src = 'runway.png';
  headwindArrow.src = 'arrow-blue.png';
  crosswindArrow.src = 'arrow-red.png';
});
