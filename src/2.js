const getRandomColor = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const color = getRandomColor();
console.log(`Your random color is ${color}`);
