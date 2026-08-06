// crea la lista de paises
{
  const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
  const ul = document.createElement('ul');

  countries.forEach((country) => {
    const li = document.createElement('li');
    li.textContent = country;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

// borra el elemento fn-remove-me
{
  const toRemove = document.querySelector('.fn-remove-me');
  toRemove.remove();
}

// crea la lista de coches dentro del div
{
  const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
  const printHereDiv = document.querySelector('[data-function="printHere"]');
  const ul = document.createElement('ul');

  cars.forEach((car) => {
    const li = document.createElement('li');
    li.textContent = car;
    ul.appendChild(li);
  });

  printHereDiv.appendChild(ul);
}

// crea las tarjetas con titulo e imagen
const countriesData = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' },
];

const gallery = document.createElement('div');
gallery.classList.add('gallery');
document.body.appendChild(gallery);

countriesData.forEach((item) => {
  const card = document.createElement('div');
  card.classList.add('gallery-item');

  const title = document.createElement('h4');
  title.textContent = item.title;

  const img = document.createElement('img');
  img.src = item.imgUrl;
  img.alt = item.title;

  card.appendChild(title);
  card.appendChild(img);
  gallery.appendChild(card);
});

// boton para borrar el ultimo
{
  const removeLastBtn = document.createElement('button');
  removeLastBtn.textContent = 'Eliminar último';
  removeLastBtn.addEventListener('click', () => {
    if (gallery.lastElementChild) {
      gallery.lastElementChild.remove();
    }
  });
  document.body.appendChild(removeLastBtn);
}

// boton en cada tarjeta para borrarla
{
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach((item) => {
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Eliminar esta tarjeta';
    removeBtn.addEventListener('click', () => {
      item.remove();
    });
    item.appendChild(removeBtn);
  });
}
