const celsius = parseFloat(prompt('Enter temperature in Celsius:'));
const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;

document.getElementById('output').innerHTML += `
  <p>${celsius}°C = ${fahrenheit.toFixed(2)}°F</p>
  <p>${celsius}°C = ${kelvin.toFixed(2)}K</p>
`;
