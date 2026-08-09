function repeatCounter(list) {
  const counter = {};
  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    if (counter[word]) {
      counter[word]++;
    } else {
      counter[word] = 1;
    }
  }
  return counter;
}

const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

console.log(repeatCounter(words));
