let celsiusInput = document.querySelector(".js-celsius-input");
let fahrenheitInput = document.querySelector(".js-fahrenheit-input");
let kelvinInput = document.querySelector(".js-kelvin-input");
let button = document.querySelector(".js-button");

celsiusInput.addEventListener('input', function() {
  let celsiusTemp = parseFloat(celsiusInput.value);
  let fahrenheitTemp = (celsiusTemp * 9/5) + 32;
  let kelvinTemp = celsiusTemp + 273.15;

  fahrenheitInput.value = fahrenheitTemp.toFixed(2);
  kelvinInput.value = kelvinTemp.toFixed(2);
});

fahrenheitInput.addEventListener('input', function() {
  let fahrenheitTemp = parseFloat(fahrenheitInput.value);
  let celsiusTemp = (fahrenheitTemp - 32) * 5/9;
  let kelvinTemp = celsiusTemp + 273.15;

  celsiusInput.value = celsiusTemp.toFixed(2);
  kelvinInput.value = kelvinTemp.toFixed(2);
});

kelvinInput.addEventListener('input', function() {
  let kelvinTemp = parseFloat(kelvinInput.value);
  let celsiusTemp = kelvinTemp - 273.15;
  let fahrenheitTemp = (celsiusTemp * 9/5) + 32;

  celsiusInput.value = celsiusTemp.toFixed(2);
  fahrenheitInput.value = fahrenheitTemp.toFixed(2);
});

button.addEventListener('click', () => {
  celsiusInput.value = ""
  fahrenheitInput.value = ""
  kelvinInput.value = ""
})
