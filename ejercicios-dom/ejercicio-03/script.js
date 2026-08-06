// 1.1 Crear dinámicamente una lista ul > li que imprima cada país del array
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

// 1.2 Eliminar el elemento que tenga la clase .fn-remove-me
{
  const toRemove = document.querySelector('.fn-remove-me');
  toRemove.remove();
}

// 1.3 Crear dinámicamente una lista ul > li dentro del div data-function="printHere"
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

// 1.4 Crear dinámicamente divs con un h4 (título) y una img
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

// 1.5 Botón que elimina el último elemento de la serie de divs
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

// 1.6 Un botón por cada div que elimine ese mismo elemento
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
