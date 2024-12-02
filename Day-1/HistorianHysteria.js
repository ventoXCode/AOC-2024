const leftNumbers = require("./left_numbers.json");
const rightNumbers = require("./right_numbers.json");
const sortedLeft = leftNumbers.sort(function (a, b) {
  return a - b;
});
const sortedRight = rightNumbers.sort(function (a, b) {
  return a - b;
});

const getTotalDistance = () => {
  let total = 0;

  for (let i = 0; i < leftNumbers.length; i++) {
    total += Math.abs(sortedLeft[i] - sortedRight[i]);
  }
  console.log(total);
};

getTotalDistance();

const getSimilarityScore = () => {
  let score = 0;

  for (let i = 0; i < leftNumbers.length; i++) {
    const current = sortedLeft[i];
    const occurances = sortedRight.filter(
      (number) => current === number
    ).length;

    score += current * occurances;
  }
  console.log(score);
};

getSimilarityScore();
