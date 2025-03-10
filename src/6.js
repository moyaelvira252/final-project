const randomNumber = Math.floor(Math.random() * 10);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(getRandomInt(10));
}

console.log(arr);
