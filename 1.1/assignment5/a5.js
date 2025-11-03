let number = parseInt(prompt('Enter a positive number:'));
let sum = 0;

for (let i = 1; i <= number; i++) {
  sum += i;
}

document.getElementById('output').innerHTML += `
  <p>The sum of all integers from 1 to ${number} is ${sum}.</p>
`;
