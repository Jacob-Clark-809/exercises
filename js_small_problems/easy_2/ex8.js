function average(array) {
  let total = array.reduce((acc, val) => acc + val);
  return total / array.length;
}

function grade(averageScore) {
  if (averageScore >= 90) {
    return 'A';
  } else if (averageScore >= 80) {
    return 'B';
  } else if (averageScore >= 70) {
    return 'C';
  } else if (averageScore >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

function getGrade(...args) {
  console.log(grade(average(args)));
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"