function studentInfo(s) {
    console.log(s.name);
    console.log(s.grade);
}
studentInfo({ name: "손흥민", grade: 1, major: "컴공" });
const s1 = { name: "손흥민", grade: 1 };
studentInfo(s1);
const s2 = { name: "손흥민", grade: 1, major: "컴공" };
studentInfo(s2);
export {};
