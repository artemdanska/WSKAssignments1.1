let score = parseFloat(prompt('Enter your score (0-100):'));
let grade = '';

if (score <= 39) {
  grade = '0';
} else if (score <= 51) {
  grade = '1';
} else if (score <= 63) {
  grade = '2';
} else if (score <= 75) {
  grade = '3';
} else if (score <= 87) {
  grade = '4';
} else {
  grade = '5';
}

document.getElementById('output').innerHTML += `
  <p>Your score of ${score} corresponds to grade ${grade}.</p>
`;
