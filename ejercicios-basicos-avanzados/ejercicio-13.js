function nameFinder(nameList, value) {
  const position = nameList.indexOf(value);
  if (position !== -1) {
    return { encontrado: true, posicion: position };
  }
  return { encontrado: false };
}

const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

console.log(nameFinder(names, "Logan"));
console.log(nameFinder(names, "Wolverine"));
