console.log('Upload JS loaded');

document.getElementById('uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const newSighting = Object.fromEntries(formData.entries());

  console.log('Submitting:', newSighting);

  // This will send data to backend (once implemented)
  // const res = await fetch('/api/upload', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(newSighting),
  // });

  // const result = await res.text();
  // alert(result);

  alert('Form submitted (frontend only for now)');
  e.target.reset();
});
