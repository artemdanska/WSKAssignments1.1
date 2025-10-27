const x2 = parseFloat(prompt('Enter value for x2:'));
const y2 = parseFloat(prompt('Enter value for y2:'));
const x1 = parseFloat(prompt('Enter value for x1:'));
const y1 = parseFloat(prompt('Enter value for y1:'));
const Distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

document.getElementById('output').innerHTML += `
  <p>The Distance between (x1=${x1}, y1=${y1}) and (x2=${x2}, y2=${y2}) is ${Distance.toFixed(2)}</p>
`;
