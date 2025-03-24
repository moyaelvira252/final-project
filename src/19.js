function getRandomInteger(min, max) {
  min = Math.min(...[min]);
  max = Math.max(...[max]);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInteger(0, 10));
