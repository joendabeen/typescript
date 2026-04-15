class Student {
    name;
    grade;
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
}
class HighSchoolStudent extends Student {
    constructor(name, grade) {
        super(name, grade);
    }
    printGrade() {
        // 자식 클래스라서 접근 가능
        console.log(`학년: ${this.grade}`);
    }
    printGrade2() {
        console.log(`학년: ${this.getGrade()}`);
    }
}
const hss = new HighSchoolStudent("김가나", 1);
hss.printGrade();
hss.printGrade2();
export {};
// hss.grade = 3; // protected error 상속 받은 클래스 내부에서까지만 가능 외부에서는 불가
