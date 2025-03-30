function getRandomInt(max) {
  Math.random();
  return Math.floor(Math.random() * max);
}

function getRandomString(length) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(getRandomInt(chars.length));
  }
  return result;
}

console.log(getRandomString(5)); // Example: 'jQp'
