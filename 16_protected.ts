class Student {
  name: string;
  protected grade: number;

  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }

  getGrade(): number {
    return this.grade;
  }
}

class HighSchoolStudent extends Student {
  constructor(name: string, grade: number) {
    super(name, grade);
  }

  public printGrade() {
    // 자식 클래스라서 접근 가능
    console.log(`학년: ${this.grade}`);
  }

  public printGrade2() {
    console.log(`학년: ${this.getGrade()}`);
  }
}

const hss: HighSchoolStudent = new HighSchoolStudent("김가나", 1);
hss.printGrade();
hss.printGrade2();
// hss.grade = 3; // protected error 상속 받은 클래스 내부에서까지만 가능 외부에서는 불가
