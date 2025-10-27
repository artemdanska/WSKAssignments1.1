let [a, b, c] = prompt(
  'Enter the lengths of the three sides of the triangle (a b c):'
)
  .split(' ')
  .map(Number);
let triangleType = '';

if (a === b && b === c) {
  triangleType = 'Equilateral';
} else if (a === b || b === c || a === c) {
  triangleType = 'Isosceles';
} else {
  triangleType = 'Scalene';
}

document.getElementById('output').innerHTML += `
  <p>The triangle with sides a=${a}, b=${b}, c=${c} is ${triangleType}.</p>
`;
