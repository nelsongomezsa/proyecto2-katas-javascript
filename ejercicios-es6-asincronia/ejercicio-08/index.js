const select = document.querySelector('#character-list');
const image = document.querySelector('.character-image');

fetch('https://thronesapi.com/api/v2/Characters')
  .then((response) => response.json())
  .then((characters) => {
    characters.forEach((character) => {
      const option = document.createElement('option');
      option.value = character.imageUrl;
      option.textContent = character.fullName;
      select.appendChild(option);
    });

    image.src = characters[0].imageUrl;

    select.addEventListener('change', () => {
      image.src = select.value;
    });
  })
  .catch((error) => console.log('Error al pedir los personajes', error));
