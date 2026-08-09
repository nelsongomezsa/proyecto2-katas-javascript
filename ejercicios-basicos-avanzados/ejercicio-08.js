function findLongestWord(stringList) {
  let longest = stringList[0];
  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > longest.length) {
      longest = stringList[i];
    }
  }
  return longest;
}

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

console.log(findLongestWord(avengers));
