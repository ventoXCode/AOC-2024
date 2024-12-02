const fs = require("fs");
const data = fs.readFileSync("./input.txt", "utf8");
const arrays = data.split("\n").map((line) => line.split(" ").map(Number));

const checkValid = (report) => {
  const isIncreasing = report[0] < report[1];

  for (let i = 0; i < report.length - 1; i++) {
    if (report[i] === report[i + 1]) {
      return false;
    }
    if (isIncreasing ? report[i] > report[i + 1] : report[i] < report[i + 1]) {
      return false;
    }
    if (Math.abs(report[i] - report[i + 1]) > 3) {
      return false;
    }
  }
  return true;
};

const dampenReport = (report) => {
  for (let i = 0; i < report.length; i++) {
    const filteredReport = report.filter((number, index) => index !== i);
    if (checkValid(filteredReport)) {
      return true;
    }
  }
};

const checkIfSafe = () => {
  let safe = 0;
  for (let i = 0; i < arrays.length; i++) {
    if (checkValid(arrays[i])) {
      safe++;
    } else {
      if (dampenReport(arrays[i])) {
        safe++;
      }
    }
  }
  console.log(safe);
};

checkIfSafe();
