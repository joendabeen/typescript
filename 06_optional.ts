interface Student {
  name: string;
  grade: number;
  major?: string; // 있을 수도 있고 없을 수도 있는 속성
}

function studentInfo(s: Student) {
  console.log(s.name);
  console.log(s.grade);
}

studentInfo({ name: "손흥민", grade: 1, major: "컴공" });
const s1: Student = { name: "손흥민", grade: 1 };
studentInfo(s1);
const s2 = { name: "손흥민", grade: 1, major: "컴공" };
studentInfo(s2);
