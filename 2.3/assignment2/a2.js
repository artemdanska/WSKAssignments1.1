const out2 = document.getElementById('out');
document.getElementById('send').addEventListener('click', async () => {
  const name = document.getElementById('name').value;
  const job = document.getElementById('job').value;
  try {
    const res = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify({name, job}),
    });
    const data = await res.json();
    out2.textContent = JSON.stringify(data, null, 2);
    console.log(data);
  } catch (e) {
    out2.textContent = 'Error: ' + e;
    console.error(e);
  }
});
