const p1 = { name: "김가나", age: 12, major: "척척박사" };
const p2 = { name: "김가나", age: 12, skill: "정신공격" };
// union 매개변수일 때는 속성이 존재하는지 검사 필요
function description(p) {
    if ("major" in p) {
        const info = `${p.name}, ${p.age}, ${p.major}`;
        console.log(info);
    }
    else if ("skill" in p) {
        const info = `${p.name}, ${p.age}, ${p.skill}`;
        console.log(info);
    }
}
description(p1);
description(p2);
export {};
