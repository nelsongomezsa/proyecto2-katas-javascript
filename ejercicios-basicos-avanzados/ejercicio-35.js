const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  let found = false;
  for (const mutant of mutants) {
    if (mutant.power === power) {
      found = true;
    }
  }
  if (found) {
    return "Se ha encontrado un mutante con el poder " + power;
  }
  return "No se ha encontrado ningún mutante con el poder " + power;
}

console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "flight"));
