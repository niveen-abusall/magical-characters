const container = document.getElementById('characters-container');

fetch('https://hp-api.onrender.com/api/characters')
  .then(res => res.json())
  .then(data => {
    data.forEach(character => {
      const card = document.createElement('div');
      card.classList.add('card');

      const img = document.createElement('img');
      img.src = character.image ? character.image : 'not-found.png';
      img.alt = character.name;

      const name = document.createElement('h3');
      name.textContent = character.name;

      const house = document.createElement('p');
      house.textContent = `House: ${character.house || 'Unknown'}`;

      const dob = document.createElement('p');
      dob.textContent = `Date of Birth: ${character.dateOfBirth || 'Unknown'}`;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(house);
      card.appendChild(dob);

      
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

 





