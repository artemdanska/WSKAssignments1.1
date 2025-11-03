const out4 = document.getElementById('out');
async function fetchData(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error('Failed request: ' + res.status);
  return await res.json();
}
document.getElementById('run').addEventListener('click', async () => {
  try {
    const user = {name: 'Veikko Veikkonen', job: 'Teacher'};
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify(user),
    };
    const userData = await fetchData(url, options);
    out4.textContent = JSON.stringify(userData, null, 2);
    console.log(userData);
  } catch (error) {
    out4.textContent = 'Error!: ' + error.message;
    console.error('Error!:', error);
  }
});
