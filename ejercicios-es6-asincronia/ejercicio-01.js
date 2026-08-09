// destructuring del objeto game
{
  const game = { title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020 };
  const { title, gender, year } = game;
  console.log(title);
  console.log(gender);
  console.log(year);
}

// destructuring del array fruits
{
  const fruits = ['Banana', 'Strawberry', 'Orange'];
  const [fruit1, fruit2, fruit3] = fruits;
  console.log(fruit1, fruit2, fruit3);
}

// destructuring del objeto que devuelve la función
{
  const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' };
  };
  const { name, race } = animalFunction();
  console.log(name, race);
}

// destructuring del objeto car y del array itv
{
  const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] };
  const { name, itv } = car;
  const [itv1, itv2, itv3] = itv;
  console.log(name, itv);
  console.log(itv1, itv2, itv3);
}
