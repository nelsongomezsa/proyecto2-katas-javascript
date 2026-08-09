function removeDuplicates(list) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (!result.includes(list[i])) {
      result.push(list[i]);
    }
  }
  return result;
}

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

console.log(removeDuplicates(duplicates));
