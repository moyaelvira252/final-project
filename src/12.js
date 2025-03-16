const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
}

const getRandomColor = () => {
  const colors = ["red", "blue", "green", "yellow"];
  return colors[Math.floor(Math.random() * colors.length)];
}

const getRandomShape = () => {
  const shapes = ["circle", "square", "triangle", "rectangle"];
  return shapes[Math.floor(Math.random() * shapes.length)];
}
