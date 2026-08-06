// crea la lista de albumes
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist',
];

const container = document.querySelector('#album-list');
const ul = document.createElement('ul');
ul.classList.add('album-list');

albums.forEach((album) => {
  const li = document.createElement('li');
  li.textContent = album;
  ul.appendChild(li);
});

container.appendChild(ul);
