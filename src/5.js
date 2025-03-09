const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const generateRandomCode = () => {
  const randomNumber = getRandomInt(1000);
  const codeLength = 6;
  const codeString = randomNumber.toString().padStart(codeLength, '0');
  return codeString;
}
