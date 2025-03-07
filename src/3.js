// Create a function to generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Use the function to generate 5 random numbers
const numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(getRandomNumber());
}

// Log the generated numbers
console.log(numbers);
