// copia de un array con spread
{
  const pointsList = [32, 54, 21, 64, 75, 43];
  const pointsListCopy = [...pointsList];
  console.log(pointsListCopy);
}

// copia de un objeto con spread
{
  const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
  const toyCopy = { ...toy };
  console.log(toyCopy);
}

// juntar dos arrays con spread
{
  const pointsList = [32, 54, 21, 64, 75, 43];
  const pointsList2 = [54, 87, 99, 65, 32];
  const allPoints = [...pointsList, ...pointsList2];
  console.log(allPoints);
}

// fusionar dos objetos con spread
{
  const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
  const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };
  const toyMerged = { ...toy, ...toyUpdate };
  console.log(toyMerged);
}

// copia del array sin la posición 2, sin tocar el original
{
  const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
  const colorsWithoutThird = [...colors.slice(0, 2), ...colors.slice(3)];
  console.log(colorsWithoutThird);
  console.log(colors);
}
