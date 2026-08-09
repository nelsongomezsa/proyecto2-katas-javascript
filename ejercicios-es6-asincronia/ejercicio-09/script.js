const image = document.querySelector('.random-image');

// numero aleatorio entre 1 y 151 (primera generacion)
const randomId = Math.floor(Math.random() * 151) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
  .then((response) => response.json())
  .then((data) => {
    // usamos la imagen oficial si existe, si no la sprite normal
    const artwork = data.sprites.other['official-artwork'].front_default;
    image.src = artwork || data.sprites.front_default;
  })
  .catch((error) => console.log('Error al pedir el pokemon', error));
