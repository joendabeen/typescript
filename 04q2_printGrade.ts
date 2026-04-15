function getGrade(score: number): string {
  let grade: string = "";
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}

for (let i = 0; i < 5; i++) {
  const randomScore = Math.floor(Math.random() * 100 + 1);
  console.log(`${randomScore}: ${getGrade(randomScore)}`);
}
