const out = document.getElementById('out');
document.getElementById('run').addEventListener('click', async () => {
  try {
    const res = await fetch('https://reqres.in/api/users/1', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    const data = await res.json();
    out.textContent = JSON.stringify(data, null, 2);
    console.log(data);
  } catch (e) {
    out.textContent = 'Error: ' + e;
    console.error(e);
  }
});
