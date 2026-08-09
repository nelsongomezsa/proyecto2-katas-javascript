// mayores de 18 con filter
{
  const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
  const adults = ages.filter((age) => age > 18);
  console.log(adults);
}

// numeros pares con filter
{
  const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
  const evenAges = ages.filter((age) => age % 2 === 0);
  console.log(evenAges);
}

// streamers que juegan a league of legends
{
  const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' },
  ];
  const lolStreamers = streamers.filter((streamer) => streamer.gameMorePlayed === 'League of Legends');
  console.log(lolStreamers);
}

// streamers con 'u' en el nombre
{
  const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' },
  ];
  const streamersWithU = streamers.filter((streamer) => streamer.name.includes('u'));
  console.log(streamersWithU);
}

// streamers de legends, en mayusculas si son mayores de 35
{
  const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' },
  ];
  const legendsStreamers = streamers
    .filter((streamer) => streamer.gameMorePlayed.includes('Legends'))
    .map((streamer) => {
      if (streamer.age > 35) {
        return { ...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase() };
      }
      return streamer;
    });
  console.log(legendsStreamers);
}
