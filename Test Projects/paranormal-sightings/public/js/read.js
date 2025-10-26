console.log('Read JS loaded');

async function loadSightings() {
  try {
    const res = await fetch('/api/sightings');
    const data = await res.json();

    const container = document.getElementById('sightings');
    container.innerHTML = data
      .map(
        (item) => `
        <div class="sighting">
          <h3>${item.title}</h3>
          <p><b>Location:</b> ${item.location}</p>
          <p><b>Date:</b> ${item.date}</p>
          <p>${item.details}</p>
        </div>`
      )
      .join('');
  } catch (err) {
    console.error('Error loading sightings:', err);
  }
}

loadSightings();
