// Student & Player => 같은 속성값은 하나로 취급 됨 (name, age 같은 속성)
function info(p) {
    const result = `${p.name}, ${p.major}, ${p.skill}`;
    console.log(p.name);
    console.log(result);
}
// 합치는 것이라 major이나 skill 둘 중 하나가 없으면 에러 발생
info({ name: "김가나", age: 12, major: "척척박사", skill: "정신공격" });
export {};
