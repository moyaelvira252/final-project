const getRandomNumber = () => Math.floor(Math.random() * 10);
const getRandomBoolean = () => Math.random() >= 0.5;
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

function getRandomString() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += letters[Math.floor(Math.random() * letters.length)];
  }
  return result;
}

const getRandomObject = () => {
  const obj = {};
  for (let i = 0; i < 5; i++) {
    obj[getRandomString()] = getRandomNumber();
  }
  return obj;
};
