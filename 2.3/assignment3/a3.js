const out3 = document.getElementById('out');
document.getElementById('test').addEventListener('click', async () => {
  try {
    const res = await fetch('https://reqres.in/api/unknown/23', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    if (!res.ok) throw new Error('No network: ' + res.status);
    const data = await res.json();
    out3.textContent = JSON.stringify(data, null, 2);
    console.log(data);
  } catch (e) {
    out3.textContent = 'Error!: ' + e.message;
    console.error('Error!:', e);
  }
});
