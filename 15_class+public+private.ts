class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  add(n1: number, n2: number): number {
    return n1 + n2;
  }
}

let p: Person = new Person("손흥민", 30);

// 접근제한자
// 앞에 아무것도 쓰지 않으면 public이라고 보면 됨
class Student {
  public name: string;
  private grade: number;

  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }

  // get set 빼면 일반 메서드
  public get Grade(): number {
    return this.grade;
  }
  public set Grade(value: number) {
    if (!(value >= 1 && value <= 4)) {
      throw new Error("학년은 1~4 사이여야 합니다.");
    }

    this.grade = value;
  }
}

const student: Student = new Student("김가나", 3);
const grade: number = student.Grade;
console.log(grade);
student.Grade = 4;
console.log(student.Grade); // set get 키워드를 사용하지 않으면 메서드로 호출해야 함
// student.grade = 3;
// student.Grade = 5;
