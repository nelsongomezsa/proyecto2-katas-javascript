// 3.1 lista de nombres con map
{
  const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' },
  ];
  const names = users.map((user) => user.name);
  console.log(names);
}

// 3.2 lista de nombres cambiando los que empiezan por A a Anacleto
{
  const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' },
  ];
  const names = users.map((user) => (user.name.startsWith('A') ? 'Anacleto' : user.name));
  console.log(names);
}

// 3.3 lista de nombres de ciudades añadiendo (Visitado) si isVisited es true
{
  const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' },
  ];
  const names = cities.map((city) => (city.isVisited ? city.name + ' (Visitado)' : city.name));
  console.log(names);
}
