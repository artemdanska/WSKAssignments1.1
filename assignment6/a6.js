let number = parseInt(prompt('Enter a positive integer:'));
let table = '';

for (let i = 1; i <= number; i++) {
  for (let j = 1; j <= number; j++) {
    table += i * j + ' ';
  }
  table += '\n';
}

document.getElementById('output').innerHTML +=
  'Multiplication Table:\n<pre>' + table + '</pre>';
