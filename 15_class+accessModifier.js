class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    add(n1, n2) {
        return n1 + n2;
    }
}
let p = new Person("손흥민", 30);
// 접근제한자
// 앞에 아무것도 쓰지 않으면 public이라고 보면 됨
class Student {
    name;
    grade;
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    get Grade() {
        return this.grade;
    }
    set Grade(value) {
        if (value < 1 || value > 5) {
            throw new Error("학년은 1~4 사이여야 합니다.");
        }
        this.grade = value;
    }
}
const student = new Student("김가나", 3);
const grade = student.Grade;
console.log(grade);
student.Grade = 4;
console.log(student.Grade);
student.Grade = 5;
export {};
