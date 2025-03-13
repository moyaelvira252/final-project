(() => {
  let count = 0;
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  return () => {
    if (count > 5) {
      return "You have reached the maximum number of attempts.";
    } else {
      const guess = getRandomInt(1, 10);
      count++;
      return `Your guess is ${guess}.`;
    }
  };
})();
